// src/posts/posts.js

// Load all markdown files inside /src/posts
const markdownFiles = import.meta.glob("./*.md", {
  eager: true,
  as: "raw",
});

// Use gray-matter for robust frontmatter parsing (handles YAML, arrays, and '---' inside code fences)
import matter from "gray-matter";


export const posts = Object.keys(markdownFiles).map((filePath) => {
  const raw = markdownFiles[filePath];
  const parsed = matter(raw);
  const data = parsed.data || {};
  const content = parsed.content || "";

  const slug = filePath.split("/").pop().replace(".md", "");

  return {
    slug,
  title: data.title || slug,
  date: data.date || "",
  category: data.category || "General",
  categoryColor: data.categoryColor || "",
  summary: data.summary || "",
  tags: Array.isArray(data.tags) ? data.tags : (data.tags ? String(data.tags).split(/,\s*/) : []),
  image: data.image || "/images/img-placeholder-1200.jpg",
  content,
  };
});

// newest first
posts.sort((a, b) => new Date(b.date) - new Date(a.date));