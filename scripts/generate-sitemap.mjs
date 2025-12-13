// scripts/generate-sitemap.mjs
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const site = "https://glennhammond.com";
const appPath = path.resolve("src", "App.jsx");
const outPath = path.resolve("public", "sitemap.xml");

const CANONICAL_ROUTE_MAP = {
  "/contact-success": "/contact/success",
};

function resolvePostsModulePath() {
  const candidates = [
    path.resolve("src", "posts", "posts.js"),
    path.resolve("src", "posts", "posts.jsx"),
    path.resolve("src", "posts", "posts.mjs"),
    path.resolve("src", "posts", "posts.ts"),
    path.resolve("src", "posts", "posts.tsx"),
  ];
  return candidates.find((p) => fs.existsSync(p)) ?? null;
}

function extractSlugsFromPostsSource(src) {
  // Very simple fallback: look for slug: "..." or slug: '...'
  const slugs = [];
  const re = /\bslug\s*:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(src))) {
    const s = String(m[1] || "").trim();
    if (s) slugs.push(s);
  }
  return slugs;
}

async function loadPostSlugs() {
  const p = resolvePostsModulePath();
  if (!p) return [];

  // 1) Prefer importing the module (works if it’s plain data).
  try {
    const mod = await import(pathToFileURL(p).href);
    const list = mod.posts ?? mod.default ?? [];
    if (Array.isArray(list)) {
      return list
        .map((item) => item?.slug)
        .filter((s) => typeof s === "string" && s.trim().length)
        .map((s) => s.trim());
    }
  } catch {
    // ignore and fall back to regex parsing
  }

  // 2) Fallback: parse the file text for slug fields.
  try {
    const src = fs.readFileSync(p, "utf8");
    return extractSlugsFromPostsSource(src);
  } catch {
    return [];
  }
}

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

// Add individual blog post URLs (so /blog/:slug pages can be discovered/indexed).
const postSlugs = await loadPostSlugs();
if (postSlugs.length) {
  const postRoutes = postSlugs.map((s) => normalise(`/blog/${s}`));
  routes = uniq([...routes, ...postRoutes]).sort((a, b) => a.localeCompare(b));
}

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