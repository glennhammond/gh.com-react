// src/posts/posts.js

// Default image for posts without a specific hero image
const DEFAULT_POST_IMAGE = "/images/placeholders/placeholder-post.jpg";

// Load all markdown files inside /src/posts as raw strings
const markdownFiles = import.meta.glob("./*.md", {
  eager: true,
  as: "raw",
});

// Very small frontmatter parser (no Node deps)
function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) {
    return { data: {}, content: raw };
  }

  // Split around lines that are just --- (or more dashes)
  const parts = raw.split(/^-{3,}\s*$/m);

  // parts[0] = empty before first '---'
  const front = parts[1] || "";
  const body = parts.slice(2).join("\n") || "";

  const lines = front.split("\n").filter((line) => line.trim().length > 0);
  const data = {};

  const parseValue = (rawValue = "") => {
    const v = rawValue.trim();
    if (!v) return "";

    // Strip surrounding single/double quotes
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      return v.slice(1, -1);
    }

    // Basic array support: [a, b, "c"]
    if (v.startsWith("[") && v.endsWith("]")) {
      const inner = v.slice(1, -1).trim();
      if (!inner) return [];
      return inner
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => {
          if (
            (s.startsWith('"') && s.endsWith('"')) ||
            (s.startsWith("'") && s.endsWith("'"))
          ) {
            return s.slice(1, -1);
          }
          return s;
        });
    }

    // Booleans
    if (v === "true") return true;
    if (v === "false") return false;

    // Numbers (ints/floats)
    if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);

    return v;
  };

  for (const line of lines) {
    const [key, ...rest] = line.split(":");
    if (!key) continue;
    const value = rest.join(":");
    data[key.trim()] = parseValue(value);
  }

  return { data, content: body.trim() };
}

function stripDatePrefix(name = "") {
  // supports filenames like 2025-12-18-my-post.md
  return name.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

function dateFromFilename(name = "") {
  const m = name.match(/^(\d{4}-\d{2}-\d{2})-/);
  return m ? `${m[1]}T00:00:00` : "";
}

function safeTime(dateStr) {
  if (!dateStr) return null;
  const t = Date.parse(dateStr);
  return Number.isFinite(t) ? t : null;
}

export const posts = Object.entries(markdownFiles).map(
  ([filePath, rawModule]) => {
    // In some setups `as: "raw"` returns a string, in others { default: string }
    const raw = typeof rawModule === "string" ? rawModule : rawModule.default;
    const { data, content } = parseFrontmatter(raw);

    const fileName = filePath.split("/").pop();
    const baseName = fileName.replace(".md", "");
    const slug = stripDatePrefix(baseName);

    const section = (data.section || "blog").toString();
    const type = (data.type || "post").toString();

    // Prefer `hero` (new) then `image` (old) then default
    const hero = data.hero || data.image || DEFAULT_POST_IMAGE;

    return {
      slug,
      title: data.title || slug,
      // Date is optional: prefer frontmatter, else derive from YYYY-MM-DD- prefix, else empty
      date: data.date || dateFromFilename(baseName) || "",
      category: data.category || "General",
      summary: data.summary || "",

      // Backwards-compatible: keep `image`, but promote `hero` as preferred
      hero,
      image: data.image || hero,

      // New: used to separate Blog vs Scrandalous
      section,
      type,

      // Optional Scrandalous fields (safe for normal blog posts)
      prepMins: data.prepMins ?? null,
      cookMins: data.cookMins ?? null,
      serves: data.serves ?? null,
      tags: data.tags ?? [],
      spotify: data.spotify || data.spotifyUrl || data.spotifyID || "",

      content,
    };
  }
);

// Sort: dated posts first (newest -> oldest), then undated posts (A-Z)
posts.sort((a, b) => {
  const at = safeTime(a.date);
  const bt = safeTime(b.date);

  if (at !== null && bt === null) return -1;
  if (at === null && bt !== null) return 1;
  if (at !== null && bt !== null) return bt - at;

  const aKey = (a.title || a.slug || "").toString();
  const bKey = (b.title || b.slug || "").toString();
  return aKey.localeCompare(bKey, "en", { sensitivity: "base" });
});