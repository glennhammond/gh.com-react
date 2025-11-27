// src/posts/posts.js

// Vite loads all markdown files as raw text:
const markdownFiles = import.meta.glob("../../posts/*.md", {
  eager: true,
  as: "raw",
});

// Very tiny frontmatter reader (no gray-matter, browser-safe)
function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) {
    return { data: {}, content: raw };
  }

  const [, front, body] = raw.split(/^-{3,}\s*$/m);

  const lines = front.split("\n").filter(Boolean);
  const data = {};

  for (let line of lines) {
    const [key, ...rest] = line.split(":");
    data[key.trim()] = rest.join(":").trim();
  }

  return { data, content: body.trim() };
}

export const posts = Object.keys(markdownFiles).map((filePath) => {
  const raw = markdownFiles[filePath];
  const { data, content } = parseFrontmatter(raw);

  const slug = filePath.split("/").pop().replace(".md", "");

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    category: data.category || "general",
    summary: data.summary || "",
    content,
  };
});

// newest first
posts.sort((a, b) => new Date(b.date) - new Date(a.date));
