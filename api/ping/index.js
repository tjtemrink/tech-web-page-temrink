module.exports = async function (context, req) {
  context.res = {
    headers: { "Content-Type": "application/json" },
    body: {
      ok: true,
      node: process.version,
      hasFetch: typeof fetch === "function",
      hasTranslatorKey: !!process.env.TRANSLATOR_KEY,
      hasVisionKey: !!process.env.VISION_KEY,
      translatorRegion: process.env.TRANSLATOR_REGION || null,
      visionEndpoint: process.env.VISION_ENDPOINT || null
    }
  };
};
