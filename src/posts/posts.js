// src/posts/posts.js

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

  for (const line of lines) {
    const [key, ...rest] = line.split(":");
    if (!key) continue;
    data[key.trim()] = rest.join(":").trim();
  }

  return { data, content: body.trim() };
}

export const posts = Object.entries(markdownFiles).map(
  ([filePath, rawModule]) => {
    // In some setups `as: "raw"` returns a string, in others { default: string }
    const raw = typeof rawModule === "string" ? rawModule : rawModule.default;
    const { data, content } = parseFrontmatter(raw);

    const slug = filePath.split("/").pop().replace(".md", "");

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      category: data.category || "General",
      summary: data.summary || "",
      content,
    };
  }
);

// newest first
posts.sort((a, b) => new Date(b.date) - new Date(a.date));