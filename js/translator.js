// ===== Temrink Site Translator =====
// Calls /api/translate for all text and /api/translate-image for <img> text OCR.
// Originals are stored in data attributes so switching back to English is lossless.
(function () {
  const API_TEXT = "/api/translate";
  const API_IMAGE = "/api/translateImage";

  const LANGS = [
    { code: "en", label: "English" },
    { code: "fr", label: "Francais" },
    { code: "es", label: "Espanol" },
    { code: "de", label: "Deutsch" },
    { code: "it", label: "Italiano" },
    { code: "pt", label: "Portugues" },
    { code: "nl", label: "Nederlands" },
    { code: "pl", label: "Polski" },
    { code: "ru", label: "Russkiy" },
    { code: "uk", label: "Ukrainska" },
    { code: "tr", label: "Turkce" },
    { code: "ar", label: "Arabic" },
    { code: "he", label: "Hebrew" },
    { code: "hi", label: "Hindi" },
    { code: "bn", label: "Bangla" },
    { code: "pa", label: "Punjabi" },
    { code: "ur", label: "Urdu" },
    { code: "zh-Hans", label: "Chinese Simplified" },
    { code: "zh-Hant", label: "Chinese Traditional" },
    { code: "ja", label: "Japanese" },
    { code: "ko", label: "Korean" },
    { code: "vi", label: "Vietnamese" },
    { code: "th", label: "Thai" },
    { code: "id", label: "Indonesian" },
    { code: "ms", label: "Malay" },
    { code: "tl", label: "Filipino" },
    { code: "sw", label: "Swahili" }
  ];

  const RTL_LANGS = new Set(["ar", "he", "ur", "fa"]);

  const STORAGE_KEY = "temrink-lang";

  const SKIP_TAGS = new Set([
    "SCRIPT",
    "STYLE",
    "NOSCRIPT",
    "CODE",
    "PRE",
    "SVG",
    "CANVAS"
  ]);

  function getTextNodes(root) {
    const out = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        let p = node.parentNode;
        while (p && p !== root) {
          if (p.nodeType === 1) {
            if (SKIP_TAGS.has(p.tagName)) return NodeFilter.FILTER_REJECT;
            if (p.hasAttribute("data-no-translate")) return NodeFilter.FILTER_REJECT;
          }
          p = p.parentNode;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let n;
    while ((n = walker.nextNode())) out.push(n);
    return out;
  }

  function getAttrTargets() {
    const items = [];
    document.querySelectorAll("[alt]:not([data-no-translate])").forEach((el) => {
      if (el.closest("[data-no-translate]")) return;
      const v = el.getAttribute("alt");
      if (v && v.trim()) items.push({ el, attr: "alt" });
    });
    document.querySelectorAll("[placeholder]:not([data-no-translate])").forEach((el) => {
      if (el.closest("[data-no-translate]")) return;
      const v = el.getAttribute("placeholder");
      if (v && v.trim()) items.push({ el, attr: "placeholder" });
    });
    document.querySelectorAll("[title]:not([data-no-translate])").forEach((el) => {
      if (el.closest("[data-no-translate]")) return;
      const v = el.getAttribute("title");
      if (v && v.trim()) items.push({ el, attr: "title" });
    });
    return items;
  }

  function captureOriginals() {
    const textNodes = getTextNodes(document.body);
    textNodes.forEach((n) => {
      if (!n._i18nOriginal) n._i18nOriginal = n.nodeValue;
    });
    const attrs = getAttrTargets();
    attrs.forEach(({ el, attr }) => {
      const key = "data-i18n-" + attr;
      if (!el.hasAttribute(key)) el.setAttribute(key, el.getAttribute(attr) || "");
    });
    document.querySelectorAll("img").forEach((img) => {
      if (!img.hasAttribute("data-i18n-src"))
        img.setAttribute("data-i18n-src", img.getAttribute("src") || "");
    });
  }

  function restoreOriginals() {
    const textNodes = getTextNodes(document.body);
    textNodes.forEach((n) => {
      if (n._i18nOriginal != null) n.nodeValue = n._i18nOriginal;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) =>
      el.setAttribute("alt", el.getAttribute("data-i18n-alt") || "")
    );
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) =>
      el.setAttribute("placeholder", el.getAttribute("data-i18n-placeholder") || "")
    );
    document.querySelectorAll("[data-i18n-title]").forEach((el) =>
      el.setAttribute("title", el.getAttribute("data-i18n-title") || "")
    );
    document.querySelectorAll("img[data-i18n-src]").forEach((img) => {
      const orig = img.getAttribute("data-i18n-src");
      if (orig && img.getAttribute("src") !== orig) img.setAttribute("src", orig);
    });
  }

  async function translateBatch(texts, to) {
    const resp = await fetch(API_TEXT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texts, to, from: "en" })
    });
    if (!resp.ok) throw new Error("translate http " + resp.status);
    const data = await resp.json();
    return data.translations || [];
  }

  async function translateTextOnPage(to) {
    const nodes = getTextNodes(document.body);
    const originals = nodes.map((n) => n._i18nOriginal || n.nodeValue);

    const attrs = getAttrTargets();
    const attrOriginals = attrs.map(({ el, attr }) => el.getAttribute("data-i18n-" + attr) || el.getAttribute(attr));

    const all = originals.concat(attrOriginals);
    if (all.length === 0) return;

    const CHUNK = 80;
    const translated = [];
    for (let i = 0; i < all.length; i += CHUNK) {
      const chunk = all.slice(i, i + CHUNK);
      const out = await translateBatch(chunk, to);
      for (let j = 0; j < chunk.length; j++) {
        translated.push(out[j] != null ? out[j] : chunk[j]);
      }
    }

    for (let i = 0; i < nodes.length; i++) nodes[i].nodeValue = translated[i];
    for (let i = 0; i < attrs.length; i++) {
      const t = translated[nodes.length + i];
      if (t) attrs[i].el.setAttribute(attrs[i].attr, t);
    }
  }

  async function translateOneImage(img, to) {
    const src = img.getAttribute("data-i18n-src") || img.getAttribute("src");
    if (!src) return;
    if (/^data:/i.test(src)) return;
    const absoluteSrc = new URL(src, window.location.href).href;
    try {
      const resp = await fetch(API_IMAGE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: absoluteSrc, to, from: "en" })
      });
      if (!resp.ok) return;
      const data = await resp.json();
      if (data && data.hasText && data.imageBase64) {
        img.setAttribute("src", data.imageBase64);
      }
    } catch (e) {
      // silent; leave original image
    }
  }

  async function translateAllImages(to) {
    const imgs = Array.from(document.querySelectorAll("img:not([data-no-translate])"));
    const CONCURRENCY = 3;
    let idx = 0;
    async function worker() {
      while (idx < imgs.length) {
        const i = idx++;
        await translateOneImage(imgs[i], to);
      }
    }
    const workers = [];
    for (let i = 0; i < Math.min(CONCURRENCY, imgs.length); i++) workers.push(worker());
    await Promise.all(workers);
  }

  function setProgress(state, text) {
    const el = document.getElementById("temrink-translator-status");
    if (!el) return;
    el.dataset.state = state;
    el.textContent = text || "";
  }

  async function applyLanguage(to) {
    captureOriginals();
    document.documentElement.dir = RTL_LANGS.has(to) ? "rtl" : "ltr";

    if (to === "en") {
      restoreOriginals();
      setProgress("idle", "");
      try {
        localStorage.setItem(STORAGE_KEY, "en");
      } catch (e) {}
      return;
    }

    setProgress("working", "Translating...");
    try {
      await translateTextOnPage(to);
      setProgress("working", "Translating images...");
      await translateAllImages(to);
      setProgress("idle", "");
      try {
        localStorage.setItem(STORAGE_KEY, to);
      } catch (e) {}
    } catch (err) {
      console.error("Translator error", err);
      setProgress("error", "Translation failed");
    }
  }

  function mountPicker() {
    const nav = document.querySelector(".nav");
    if (!nav) return;

    const wrap = document.createElement("div");
    wrap.className = "lang-switch";
    wrap.setAttribute("data-no-translate", "true");

    const select = document.createElement("select");
    select.className = "lang-select";
    select.setAttribute("aria-label", "Select language");
    LANGS.forEach((l) => {
      const opt = document.createElement("option");
      opt.value = l.code;
      opt.textContent = l.label;
      select.appendChild(opt);
    });

    const status = document.createElement("span");
    status.id = "temrink-translator-status";
    status.className = "lang-status";
    status.setAttribute("data-no-translate", "true");

    wrap.appendChild(select);
    wrap.appendChild(status);

    const navLinks = nav.querySelector(".nav-links");
    if (navLinks) {
      navLinks.appendChild(wrap);
    } else {
      nav.appendChild(wrap);
    }

    let saved = "en";
    try {
      saved = localStorage.getItem(STORAGE_KEY) || "en";
    } catch (e) {}
    select.value = saved;

    select.addEventListener("change", () => {
      applyLanguage(select.value);
    });

    if (saved && saved !== "en") {
      setTimeout(() => applyLanguage(saved), 50);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountPicker);
  } else {
    mountPicker();
  }
})();
