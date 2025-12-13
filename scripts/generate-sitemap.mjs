// scripts/generate-sitemap.mjs
import fs from "node:fs";
import path from "node:path";

const site = "https://glennhammond.com";
const appPath = path.resolve("src", "App.jsx");
const outPath = path.resolve("public", "sitemap.xml");

const CANONICAL_ROUTE_MAP = {
  "/contact-success": "/contact/success",
};

function normalise(p) {
  if (!p.startsWith("/")) p = "/" + p;
  if (p.length > 1) p = p.replace(/\/+$/, "");
  return p;
}

function isSitemapWorthy(p) {
  // exclude params and wildcard
  if (p.includes(":")) return false;
  if (p.includes("*")) return false;
  return true;
}

function uniq(arr) {
  return Array.from(new Set(arr));
}

function extractRoutesFromAppJsx(src) {
  const found = [];

  // <Route path="/x" ... />
  const routeTagRegex =
    /<Route\b[^>]*\bpath\s*=\s*(?:\{\s*)?["']([^"']+)["'](?:\s*\})?/g;

  let m;
  while ((m = routeTagRegex.exec(src))) {
    found.push(m[1]);
  }

  return found;
}

const appSrc = fs.readFileSync(appPath, "utf8");

let routes = extractRoutesFromAppJsx(appSrc)
  .map(normalise)
  .map((r) => CANONICAL_ROUTE_MAP[r] ?? r)
  .filter(isSitemapWorthy);

routes = uniq(routes).sort((a, b) => a.localeCompare(b));

const now = new Date().toISOString();

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map(
      (r) => `  <url>
    <loc>${site}${r}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r === "/" ? "1.0" : "0.7"}</priority>
  </url>`
    )
    .join("\n") +
  `\n</urlset>\n`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, xml, "utf8");

console.log(`✅ Wrote ${outPath} with ${routes.length} URLs`);