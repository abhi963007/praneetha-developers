import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 4173);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

function resolveRedirectTarget(pathname) {
  if (pathname === "/" || pathname === "/home" || pathname === "/home/") {
    return "/home/index.html";
  }
  if (pathname === "/about" || pathname === "/about/" || pathname === "/about-us" || pathname.startsWith("/advisers/")) {
    return "/about/index.html";
  }
  if (pathname === "/properties" || pathname === "/properties/" || pathname.startsWith("/category/") || pathname.startsWith("/property/")) {
    return "/properties/index.html";
  }
  if (pathname === "/services" || pathname === "/services/") {
    return "/services/index.html";
  }
  if (pathname === "/insights" || pathname === "/insights/") {
    return "/insights/index.html";
  }
  if (pathname === "/contact" || pathname === "/contact/" || pathname === "/contact-us") {
    return "/contact/index.html";
  }
  if (pathname === "/licenses" || pathname === "/changelog" || pathname === "/style-guide" || pathname === "/instructions") {
    return "/home/index.html";
  }
  return null;
}

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  const pathname = decodeURIComponent(urlObj.pathname);

  const safeRel = path.posix.normalize(pathname).replace(/^\/+/, "");
  const filePath = path.resolve(ROOT, safeRel);
  if (!filePath.startsWith(ROOT + path.sep) && filePath !== ROOT) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  // Serve real static files first (/home/index.html, /services/index.html, /services/css/..., etc.)
  if (filePath !== ROOT && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    fs.createReadStream(filePath).pipe(res);
    return;
  }

  const redirectTo = resolveRedirectTarget(pathname);
  if (redirectTo) {
    res.writeHead(302, { Location: redirectTo });
    res.end();
    return;
  }

  // Fallback for CMS slug routes like /services/<slug> or /insights/<slug> when no asset exists
  if (pathname.startsWith("/services/")) {
    res.writeHead(302, { Location: "/services/index.html" });
    res.end();
    return;
  }
  if (pathname.startsWith("/insights/")) {
    res.writeHead(302, { Location: "/insights/index.html" });
    res.end();
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not Found");
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Static site running at http://127.0.0.1:${PORT}/`);
});
