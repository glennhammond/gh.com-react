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

const DEBUG = process.env.DEBUG_SITEMAP === "1";

function resolvePostsModulePath() {
  const candidates = [
    // Matches import { posts } from "../posts/posts";
    path.resolve("src", "posts", "posts.js"),
    path.resolve("src", "posts", "posts.jsx"),
    path.resolve("src", "posts", "posts.mjs"),
    path.resolve("src", "posts", "posts.ts"),
    path.resolve("src", "posts", "posts.tsx"),

    // Some setups use a folder module
    path.resolve("src", "posts", "posts", "index.js"),
    path.resolve("src", "posts", "posts", "index.jsx"),
    path.resolve("src", "posts", "posts", "index.mjs"),
    path.resolve("src", "posts", "posts", "index.ts"),
    path.resolve("src", "posts", "posts", "index.tsx"),

    // Or export directly from src/posts/index.*
    path.resolve("src", "posts", "index.js"),
    path.resolve("src", "posts", "index.jsx"),
    path.resolve("src", "posts", "index.mjs"),
    path.resolve("src", "posts", "index.ts"),
    path.resolve("src", "posts", "index.tsx"),
  ];
  return candidates.find((p) => fs.existsSync(p)) ?? null;
}

function extractSlugsFromPostsSource(src) {
  const out = new Set();

  // JS/TS object literal: slug: "..." | '...' | `...`
  {
    const re = /\bslug\s*:\s*(["'`])([\s\S]*?)\1/g;
    let m;
    while ((m = re.exec(src))) {
      const s = String(m[2] || "").trim();
      if (s) out.add(s);
    }
  }

  // JSON: "slug": "..."
  {
    const re = /"slug"\s*:\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(src))) {
      const s = String(m[1] || "").trim();
      if (s) out.add(s);
    }
  }

  // YAML/frontmatter: slug: something (quoted or unquoted)
  {
    const re = /^\s*slug\s*:\s*([^\n\r#]+)\s*$/gm;
    let m;
    while ((m = re.exec(src))) {
      let s = String(m[1] || "").trim();
      // strip surrounding quotes/backticks if present
      if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'")) || (s.startsWith('`') && s.endsWith('`'))) {
        s = s.slice(1, -1).trim();
      }
      if (s) out.add(s);
    }
  }

  // Normalise: keep URL-safe-ish slugs only (avoid accidentally catching random strings)
  return Array.from(out).filter((s) => /^[a-z0-9][a-z0-9\-_/]*$/i.test(s));
}

function scanDirForSlugs(dir) {
  const slugs = new Set();
  const exts = new Set([".js", ".jsx", ".mjs", ".ts", ".tsx", ".json", ".md", ".mdx"]);

  function walk(current) {
    let entries;
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
        continue;
      }
      if (!entry.isFile()) continue;

      const ext = path.extname(entry.name).toLowerCase();
      if (!exts.has(ext)) continue;

      try {
        const src = fs.readFileSync(full, "utf8");
        for (const s of extractSlugsFromPostsSource(src)) slugs.add(s);
      } catch {
        // ignore
      }
    }
  }

  if (fs.existsSync(dir)) walk(dir);
  return Array.from(slugs);
}

function slugsFromMarkdownFilenames(dir) {
  const slugs = new Set();
  const exts = new Set([".md", ".mdx"]);

  function walk(current) {
    let entries;
    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
        continue;
      }
      if (!entry.isFile()) continue;

      const ext = path.extname(entry.name).toLowerCase();
      if (!exts.has(ext)) continue;

      const base = path.basename(entry.name, ext);
      if (base && base !== "posts" && base !== "index") {
        slugs.add(base);
      }
    }
  }

  if (fs.existsSync(dir)) walk(dir);
  return Array.from(slugs);
}

async function loadPostSlugs() {
  const postsDir = path.resolve("src", "posts");
  const p = resolvePostsModulePath();
  if (DEBUG) console.log("🧭 Posts module path:", p ?? "(none)");

  // If we can't find a posts module file, scan the posts directory.
  if (!p) {
    const scanned = scanDirForSlugs(postsDir);
    if (DEBUG) console.log("🔎 Slugs found by directory scan:", scanned.length);
    return scanned;
  }

  // 1) Prefer importing the module (works if it’s plain data).
  try {
    const mod = await import(pathToFileURL(p).href);
    const list = mod.posts ?? mod.default ?? [];
    if (Array.isArray(list)) {
      const slugs = list
        .map((item) => item?.slug)
        .filter((s) => typeof s === "string" && s.trim().length)
        .map((s) => s.trim());
      if (slugs.length) return slugs;
    }
  } catch {
    // ignore and fall back
  }

  // 2) Fallback: parse the file text for slug fields.
  try {
    const src = fs.readFileSync(p, "utf8");
    const slugs = extractSlugsFromPostsSource(src);
    if (DEBUG) console.log("🧩 Slugs found by parsing module source:", slugs.length);
    if (slugs.length) return slugs;
  } catch {
    // ignore and fall back
  }

  // 3) Final fallback: scan the posts directory for slug fields.
  const scanned = scanDirForSlugs(postsDir);
  if (DEBUG) console.log("🔎 Slugs found by directory scan:", scanned.length);
  if (scanned.length) return scanned;

  // 4) If posts are Markdown files and slugs come from filenames, derive slugs from .md/.mdx filenames.
  const fromFiles = slugsFromMarkdownFilenames(postsDir);
  if (DEBUG) console.log("📄 Slugs found by markdown filenames:", fromFiles.length);
  return fromFiles;
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
} else {
  console.warn("⚠️ No blog post slugs found - sitemap will only include static routes.");
}

const now = new Date().toISOString();

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map(
      (r) => `  <url>
    <loc>${encodeURI(`${site}${r}`)}</loc>
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