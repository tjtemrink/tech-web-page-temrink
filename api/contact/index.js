// Azure Function: POST /api/contact -> send email via Resend
const { Resend } = require("resend");

const ok = (body, extraHeaders = {}) => ({
  status: 200,
  headers: { "Content-Type": "application/json", ...extraHeaders },
  body: JSON.stringify(body),
});

const errorRes = (status, message) => ({
  status,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ error: message }),
});

module.exports = async function (context, req) {
  // Allow preflight during local dev
  if (req.method === "OPTIONS") {
    context.res = {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    };
    return;
  }

  try {
    if (req.method !== "POST") {
      context.res = errorRes(405, "Method not allowed");
      return;
    }

    const { firstName, lastName, email, phone, message } = req.body || {};
    if (!firstName || !lastName || !email || !message) {
      context.res = errorRes(400, "Missing required fields.");
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    // Where to send the lead internally
    const to = process.env.CONTACT_TO || "consulting@temrink.com";
    // Must be a verified sender or domain in Resend
    const from = process.env.CONTACT_FROM || "Temrink <noreply@temrink.com>";

    const subject = `Website Contact — ${firstName} ${lastName}`;
    const html = `
      <div style="font-family:system-ui,Segoe UI,Arial,sans-serif">
        <h2 style="margin:0 0 12px">New Website Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space:pre-wrap;border:1px solid #e5e7eb;padding:12px;border-radius:8px">
          ${String(message).slice(0, 5000)}
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
      reply_to: email
    });

    if (error) {
      context.log.error("Resend error:", error);
      context.res = errorRes(502, "Failed to send email.");
      return;
    }

    context.res = ok({ ok: true, message: "Message sent." }, {
      "Access-Control-Allow-Origin": "*" // fine for local; in prod SWA is same-origin
    });
  } catch (err) {
    context.log.error(err);
    context.res = errorRes(500, "Server error.");
  }
};
