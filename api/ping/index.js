module.exports = async function (context, req) {
  try {
    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: {
        ok: true,
        node: process.version,
        platform: process.platform,
        arch: process.arch,
        hasFetch: typeof fetch === "function",
        hasTranslatorKey: !!process.env.TRANSLATOR_KEY,
        hasVisionKey: !!process.env.VISION_KEY,
        translatorRegion: process.env.TRANSLATOR_REGION || null,
        visionEndpoint: process.env.VISION_ENDPOINT || null,
        time: new Date().toISOString()
      }
    };
  } catch (e) {
    context.res = { status: 500, body: { error: String(e && e.message ? e.message : e) } };
  }
};
