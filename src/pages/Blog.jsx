// src/pages/Blog.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

import { posts } from "../posts/posts";
import SEO from "../components/ui/SEO.jsx";

// -----------------------------------------------
// CATEGORY → SLUG MAPPER (robust + extensible)
// -----------------------------------------------
function mapCategory(category = "") {
  const c = category.toLowerCase();

  if (c.includes("ux")) return "ux";
  if (c.includes("ai")) return "ai";
  if (c.includes("design") && !c.includes("learning")) return "design";
  if (c.includes("education") || c.includes("learning")) return "education";
  if (c.includes("music")) return "music";
  if (c.includes("xapi")) return "xapi";
  if (c.includes("storyline")) return "storyline";
  if (c.includes("creativity") || c.includes("creative")) return "creativity";
  if (c.includes("workflow")) return "workflow";

  return "general";
}

// -----------------------------------------------
// COLOUR PALLETTE (matches your original site)
// -----------------------------------------------
const CATEGORY_STYLES = {
  ux: "bg-blue-100 text-blue-700",
  ai: "bg-indigo-100 text-indigo-700",
  design: "bg-pink-100 text-pink-700",
  education: "bg-green-100 text-green-700",
  music: "bg-yellow-100 text-yellow-700",
  xapi: "bg-purple-100 text-purple-700",
  storyline: "bg-cyan-100 text-cyan-700",
  creativity: "bg-orange-100 text-orange-700",
  workflow: "bg-rose-100 text-rose-700",
  general: "bg-gray-100 text-gray-700",
};

// -----------------------------------------------
// CHIP COMPONENT
// -----------------------------------------------
function Chip({ label, active, onClick, category }) {
  const mapped = mapCategory(category || label);
  const baseStyle =
    CATEGORY_STYLES[mapped] || CATEGORY_STYLES.general;

  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm transition font-medium
        border border-black/10 dark:border-white/10
        ${active ? baseStyle : "bg-[var(--bg-soft)] text-[var(--text)]/70"}
      `}
    >
      {label}
    </button>
  );
}

// -----------------------------------------------
// MAIN BLOG PAGE
// -----------------------------------------------
export default function Blog() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "UX",
    "AI",
    "Design",
    "Education",
    "Music",
    "xAPI",
    "Storyline",
    "Creativity",
    "Workflow",
  ];

  // -----------------------------------------------
  // FILTER + SEARCH LOGIC
  // -----------------------------------------------
  const filteredPosts = useMemo(() => {
    return posts
      .filter((p) => {
        if (filter !== "all") {
          return mapCategory(p.category) === mapCategory(filter);
        }
        return true;
      })
      .filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      });
  }, [filter, searchQuery]);

  return (
    <PageWrapper>
      <SEO
  title="Blog – Glenn Hammond"
  description="Thinking about design, education, creativity, xAPI, and modern learning."
/>
      <Section>
        <Container className="space-y-16 fade-in-up">
          {/* Breadcrumbs */}
          <nav className="text-sm opacity-70">
            <Link to="/" className="hover:underline text-brand-primary">
              Home
            </Link>{" "}
            / Blog
          </nav>

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl text-[var(--text)]">
                I think about design, education, and music
              </h1>
              <p className="text-[var(--text)]/70 leading-relaxed max-w-2xl mt-4">
                Writing about design, learning, xAPI, creativity, and making things feel a little cleaner and clearer.
              </p>
            </div>

            {/* Search on the RIGHT */}
            <div className="w-full md:w-72">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full px-4 py-2 rounded-xl
                  border border-black/10 dark:border-white/10
                  bg-[var(--bg-soft)] text-[var(--text)]
                "
              />
            </div>
          </div>

          {/* Category CHIPS */}
          <div className="flex gap-3 flex-wrap">
            <Chip
              label="All"
              category="general"
              active={filter === "all"}
              onClick={() => setFilter("all")}
            />
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                category={cat}
                active={filter === cat}
                onClick={() => setFilter(cat)}
              />
            ))}
          </div>

          {/* POSTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => {
              const cat = mapCategory(post.category);
              const colorClass = CATEGORY_STYLES[cat] || CATEGORY_STYLES.general;

              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)] shadow-sm hover:shadow-md hover:-translate-y-[2px] transition overflow-hidden"
                >
                  <div className="h-40 bg-[var(--bg-soft)] flex items-center justify-center text-xs opacity-40">
                    Image placeholder
                  </div>

                  <div className="p-6 space-y-4">
                    <span className={`uppercase tracking-wider text-xs px-3 py-1 rounded-full ${colorClass}`}>
                      {post.category}
                    </span>

                    <h3 className="font-heading text-xl text-[var(--text)]">
                      {post.title}
                    </h3>

                    <p className="text-sm text-[var(--text)]/70 leading-relaxed">
                      {post.summary}
                    </p>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm opacity-60">
                        {post.date}
                      </span>
                      <span className="text-sm text-brand-primary group-hover:underline">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}