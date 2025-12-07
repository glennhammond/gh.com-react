// src/posts/posts.js

// Load all markdown files inside /src/posts
const markdownFiles = import.meta.glob("./*.md", {
  eager: true,
  as: "raw",
});

// Very tiny frontmatter reader (browser-safe)
function parseFrontmatter(raw) {
  // Match a single frontmatter block at the start of the file and capture the rest as content.
  // This avoids splitting on other '---' sequences in the markdown body.
  const m = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!m) {
    return { data: {}, content: raw };
  }

  const front = m[1];
  const body = m[2] || "";

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
    category: data.category || "General",
    summary: data.summary || "",
    content,
  };
});

// newest first
posts.sort((a, b) => new Date(b.date) - new Date(a.date));