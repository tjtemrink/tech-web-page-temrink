// Azure Function: POST /api/contact  ->  send email via Resend
const { Resend } = require("resend");

// ---- helpers ---------------------------------------------------------------
const json = (status, body, extra = {}) => ({
  status,
  headers: {
    "Content-Type": "application/json",
    ...extra,
  },
  body: JSON.stringify(body),
});

const escapeHtml = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Allow your production domains + local dev
const ALLOWED_ORIGINS = new Set([
  "https://temrink.com",
  "https://www.temrink.com",
  // The default Azure Static Web Apps domain (adjust to your app if different)
  // e.g. "https://witty-ground-0d055ea0f.2.azurestaticapps.net",
  "http://localhost:3000",
  "http://localhost:8080",
]);

function corsHeaders(req) {
  const origin = req?.headers?.origin || "";
  // On SWA, Functions are same-origin; this keeps local dev / external tests easy.
  const allow = ALLOWED_ORIGINS.has(origin) ? origin : "*";
  return {
    "Access-Control-Allow-Origin": allow,
    "Vary": "Origin",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

// ---- function --------------------------------------------------------------
module.exports = async function (context, req) {
  // CORS preflight
  if (req.method === "OPTIONS") {
    context.res = { status: 204, headers: corsHeaders(req) };
    return;
  }

  try {
    if (req.method !== "POST") {
      context.res = json(405, { error: "Method not allowed" }, corsHeaders(req));
      return;
    }

    const body = req.body || {};
    let { firstName = "", lastName = "", email = "", phone = "", message = "" } = body;

    // trim + length guards
    firstName = String(firstName).trim().slice(0, 100);
    lastName = String(lastName).trim().slice(0, 100);
    email = String(email).trim().slice(0, 200);
    phone = String(phone).trim().slice(0, 100);
    message = String(message).trim().slice(0, 5000);

    // required fields
    if (!firstName || !lastName || !email || !message) {
      context.res = json(400, { error: "Missing required fields." }, corsHeaders(req));
      return;
    }

    // very light email check
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      context.res = json(400, { error: "Invalid email." }, corsHeaders(req));
      return;
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      context.log.error("Missing RESEND_API_KEY.");
      context.res = json(500, { error: "Server not configured." }, corsHeaders(req));
      return;
    }

    const resend = new Resend(resendKey);
    const to = process.env.CONTACT_TO || "consulting@temrink.com";
    const from = process.env.CONTACT_FROM || "Temrink <noreply@temrink.com>"; // must be verified in Resend

    const subject = `Website Contact — ${firstName} ${lastName}`;
    const safeMsg = escapeHtml(message);

    const html = `
      <div style="font-family:system-ui,Segoe UI,Arial,sans-serif">
        <h2 style="margin:0 0 12px">New Website Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space:pre-wrap;border:1px solid #e5e7eb;padding:12px;border-radius:8px">
          ${safeMsg}
        </div>
      </div>
    `;

    const text =
      `New Website Inquiry\n` +
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || "-"}\n\n` +
      `${message}\n`;

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      reply_to: email, // Resend supports reply_to (string or array)
    });

    if (error) {
      context.log.error("Resend error:", error);
      context.res = json(502, { error: "Failed to send email." }, corsHeaders(req));
      return;
    }

    context.res = json(
      200,
      { ok: true, message: "Message sent." },
      corsHeaders(req)
    );
  } catch (err) {
    context.log.error(err);
    context.res = json(500, { error: "Server error." }, corsHeaders(req));
  }
};
