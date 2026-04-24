const TRANSLATOR_ENDPOINT = "https://api.cognitive.microsofttranslator.com";
const MAX_CHARS_PER_BATCH = 45000;
const MAX_ITEMS_PER_BATCH = 100;

module.exports = async function (context, req) {
  if (req.method === "OPTIONS") {
    context.res = { status: 204 };
    return;
  }

  const key = process.env.TRANSLATOR_KEY;
  const region = process.env.TRANSLATOR_REGION || "canadacentral";
  if (!key) {
    context.res = { status: 500, body: { error: "TRANSLATOR_KEY not configured" } };
    return;
  }

  const body = req.body || {};
  const texts = Array.isArray(body.texts) ? body.texts : null;
  const to = typeof body.to === "string" ? body.to : null;
  const from = typeof body.from === "string" ? body.from : "en";

  if (!texts || !to) {
    context.res = { status: 400, body: { error: "texts[] and to are required" } };
    return;
  }

  if (to === from) {
    context.res = { body: { translations: texts.slice() } };
    return;
  }

  const batches = [];
  let current = [];
  let currentChars = 0;
  for (const t of texts) {
    const s = typeof t === "string" ? t : String(t ?? "");
    if (
      current.length >= MAX_ITEMS_PER_BATCH ||
      (currentChars + s.length > MAX_CHARS_PER_BATCH && current.length > 0)
    ) {
      batches.push(current);
      current = [];
      currentChars = 0;
    }
    current.push(s);
    currentChars += s.length;
  }
  if (current.length) batches.push(current);

  const translations = [];

  try {
    for (const batch of batches) {
      const url =
        `${TRANSLATOR_ENDPOINT}/translate?api-version=3.0` +
        `&to=${encodeURIComponent(to)}&from=${encodeURIComponent(from)}` +
        `&textType=plain`;

      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": key,
          "Ocp-Apim-Subscription-Region": region,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(batch.map((t) => ({ Text: t })))
      });

      if (!resp.ok) {
        const errBody = await resp.text();
        context.log.error("Translator error", resp.status, errBody);
        context.res = {
          status: resp.status,
          body: { error: "Translator error", detail: errBody }
        };
        return;
      }

      const data = await resp.json();
      for (const item of data) {
        translations.push(item.translations?.[0]?.text ?? "");
      }
    }

    context.res = {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=86400"
      },
      body: { translations, to, from }
    };
  } catch (err) {
    context.log.error("translate failed", err);
    context.res = { status: 500, body: { error: String(err.message || err) } };
  }
};
