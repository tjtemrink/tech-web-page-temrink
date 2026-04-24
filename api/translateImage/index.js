const { request } = require("../shared/http");

const TRANSLATOR_ENDPOINT = "https://api.cognitive.microsofttranslator.com";

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function boxFromPolygon(poly) {
  if (!Array.isArray(poly) || poly.length === 0) return null;
  const xs = poly.map(function (p) { return p.x; });
  const ys = poly.map(function (p) { return p.y; });
  const minX = Math.min.apply(null, xs);
  const minY = Math.min.apply(null, ys);
  const maxX = Math.max.apply(null, xs);
  const maxY = Math.max.apply(null, ys);
  return { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
}

function fitFontSize(text, box) {
  const approxCharWidth = 0.55;
  const byHeight = Math.floor(box.h * 0.85);
  const byWidth = Math.floor((box.w / Math.max(text.length, 1)) / approxCharWidth);
  return Math.max(8, Math.min(byHeight, byWidth));
}

async function ocrImage(buffer, visionEndpoint, visionKey) {
  const url =
    visionEndpoint.replace(/\/$/, "") +
    "/computervision/imageanalysis:analyze?api-version=2023-10-01&features=read";
  const resp = await request(
    "POST",
    url,
    {
      "Ocp-Apim-Subscription-Key": visionKey,
      "Content-Type": "application/octet-stream"
    },
    buffer
  );
  if (!resp.ok) {
    throw new Error("Vision OCR failed: " + resp.status + " " + resp.text());
  }
  const data = resp.json();
  const blocks = (data.readResult && data.readResult.blocks) || [];
  const lines = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    const bl = b.lines || [];
    for (let j = 0; j < bl.length; j++) {
      const l = bl[j];
      const box = boxFromPolygon(l.boundingPolygon);
      if (!box || box.w < 4 || box.h < 4) continue;
      lines.push({ text: l.text, box: box });
    }
  }
  return lines;
}

async function translateLines(lines, to, from, translatorKey, translatorRegion) {
  if (lines.length === 0) return [];
  const body = lines.map(function (l) { return { Text: l.text }; });
  const url =
    TRANSLATOR_ENDPOINT +
    "/translate?api-version=3.0&to=" +
    encodeURIComponent(to) +
    "&from=" +
    encodeURIComponent(from) +
    "&textType=plain";
  const resp = await request(
    "POST",
    url,
    {
      "Ocp-Apim-Subscription-Key": translatorKey,
      "Ocp-Apim-Subscription-Region": translatorRegion,
      "Content-Type": "application/json"
    },
    JSON.stringify(body)
  );
  if (!resp.ok) {
    throw new Error("Translator failed: " + resp.status + " " + resp.text());
  }
  const data = resp.json();
  return data.map(function (r) {
    const tr = r && r.translations && r.translations[0];
    return tr ? tr.text : "";
  });
}

module.exports = async function (context, req) {
  try {
    if (req.method === "OPTIONS") {
      context.res = { status: 204 };
      return;
    }

    const translatorKey = process.env.TRANSLATOR_KEY;
    const translatorRegion = process.env.TRANSLATOR_REGION || "canadacentral";
    const visionEndpoint = process.env.VISION_ENDPOINT;
    const visionKey = process.env.VISION_KEY;

    if (!translatorKey || !visionKey || !visionEndpoint) {
      context.res = {
        status: 500,
        body: { error: "TRANSLATOR_KEY, VISION_KEY, VISION_ENDPOINT must be configured" }
      };
      return;
    }

    const body = req.body || {};
    const imageUrl = typeof body.imageUrl === "string" ? body.imageUrl : null;
    const to = typeof body.to === "string" ? body.to : null;
    const from = typeof body.from === "string" ? body.from : "en";

    if (!imageUrl || !to) {
      context.res = { status: 400, body: { error: "imageUrl and to are required" } };
      return;
    }

    let resolvedUrl = imageUrl;
    if (!/^https?:\/\//i.test(imageUrl)) {
      const host =
        req.headers["x-forwarded-host"] ||
        req.headers["disguised-host"] ||
        req.headers["host"];
      const proto = req.headers["x-forwarded-proto"] || "https";
      if (!host) {
        context.res = { status: 400, body: { error: "cannot resolve relative image url" } };
        return;
      }
      const path = imageUrl.indexOf("/") === 0 ? imageUrl : "/" + imageUrl;
      resolvedUrl = proto + "://" + host + path;
    }

    const imgResp = await request("GET", resolvedUrl, {});
    if (!imgResp.ok) {
      context.res = {
        status: 502,
        body: { error: "fetch image failed: " + imgResp.status, url: resolvedUrl }
      };
      return;
    }
    const imgBuf = imgResp.buffer;

    const lines = await ocrImage(imgBuf, visionEndpoint, visionKey);

    if (lines.length === 0) {
      context.res = {
        headers: { "Content-Type": "application/json" },
        body: { hasText: false, imageBase64: null, reason: "no text detected" }
      };
      return;
    }

    const translated = await translateLines(
      lines,
      to,
      from,
      translatorKey,
      translatorRegion
    );

    // Lazy-require sharp so a native-binary failure only breaks image translation,
    // not the whole function app.
    let sharp;
    try {
      sharp = require("sharp");
    } catch (e) {
      context.res = {
        status: 500,
        body: { error: "sharp unavailable: " + String(e.message || e) }
      };
      return;
    }

    const meta = await sharp(imgBuf).metadata();
    const W = meta.width;
    const H = meta.height;

    const parts = [];
    parts.push(
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '">'
    );
    parts.push(
      '<style>text{font-family:"Segoe UI",Arial,Helvetica,sans-serif;font-weight:600;dominant-baseline:middle;}</style>'
    );

    for (let i = 0; i < lines.length; i++) {
      const box = lines[i].box;
      const tr = translated[i] || "";
      if (!tr) continue;
      const pad = Math.max(2, Math.round(box.h * 0.15));
      parts.push(
        '<rect x="' + (box.x - pad) +
          '" y="' + (box.y - pad) +
          '" width="' + (box.w + pad * 2) +
          '" height="' + (box.h + pad * 2) +
          '" fill="white"/>'
      );
      const fontSize = fitFontSize(tr, box);
      parts.push(
        '<text x="' + box.x +
          '" y="' + (box.y + box.h / 2) +
          '" font-size="' + fontSize +
          '" fill="#111827">' +
          escapeXml(tr) +
          "</text>"
      );
    }
    parts.push("</svg>");

    const svgBuf = Buffer.from(parts.join(""));

    const outBuf = await sharp(imgBuf)
      .composite([{ input: svgBuf, top: 0, left: 0 }])
      .png()
      .toBuffer();

    context.res = {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=86400"
      },
      body: {
        hasText: true,
        linesCount: lines.length,
        imageBase64: "data:image/png;base64," + outBuf.toString("base64")
      }
    };
  } catch (err) {
    context.log.error("translateImage failed", err && err.stack ? err.stack : err);
    context.res = {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: { error: String(err && err.message ? err.message : err) }
    };
  }
};
