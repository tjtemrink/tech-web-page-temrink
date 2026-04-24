const https = require("https");
const { URL } = require("url");

function request(method, urlStr, headers, body) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const bodyBuf = body == null ? null : Buffer.isBuffer(body) ? body : Buffer.from(body);
    const reqHeaders = Object.assign({}, headers || {});
    if (bodyBuf) reqHeaders["Content-Length"] = bodyBuf.length;

    const req = https.request(
      {
        method,
        hostname: u.hostname,
        port: u.port || 443,
        path: u.pathname + u.search,
        headers: reqHeaders
      },
      (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          const buf = Buffer.concat(chunks);
          resolve({
            status: res.statusCode,
            ok: res.statusCode >= 200 && res.statusCode < 300,
            headers: res.headers,
            buffer: buf,
            text: () => buf.toString("utf8"),
            json: () => JSON.parse(buf.toString("utf8"))
          });
        });
      }
    );
    req.on("error", reject);
    if (bodyBuf) req.write(bodyBuf);
    req.end();
  });
}

module.exports = { request };
