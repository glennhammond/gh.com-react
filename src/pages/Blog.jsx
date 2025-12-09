// src/pages/Blog.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

import SEO from "../components/ui/SEO.jsx";
import PageIntro from "../components/layout/PageIntro";

import { posts } from "../posts/posts";

const FALLBACK_IMG = "/images/placeholder-post.jpg";

/* ---------------------------------------------------
   CATEGORY MAP → always returns a stable category key
----------------------------------------------------- */
function mapCategory(category = "") {
  const c = category.toLowerCase();

  if (c.includes("ux")) return "ux";
  if (c.includes("ai")) return "ai";
  if (c.includes("design") && !c.includes("learning")) return "design";
  if (c.includes("xapi")) return "xapi";
  if (c.includes("storyline")) return "storyline";

  return "general";
}

/* ---------------------------------------------------
   CATEGORY COLOUR PALETTE (matches your original)
----------------------------------------------------- */
const CATEGORY_STYLES = {
  ux: "bg-blue-100 text-blue-700",
  ai: "bg-indigo-100 text-indigo-700",
  design: "bg-pink-100 text-pink-700",
  xapi: "bg-purple-100 text-purple-700",
  storyline: "bg-cyan-100 text-cyan-700",
  general: "bg-gray-100 text-gray-700",
};

/* ---------------------------------------------------
   CATEGORY CHIP COMPONENT
----------------------------------------------------- */
function Chip({ label, active, onClick }) {
  const mapped = mapCategory(label);
  const activeStyle = CATEGORY_STYLES[mapped] || CATEGORY_STYLES.general;

  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition
        border border-black/10 dark:border-white/10
        ${
          active
            ? activeStyle
            : "bg-[var(--bg-soft)] text-[var(--text)]/70"
        }
      `}
    >
      {label}
    </button>
  );
}

/* ---------------------------------------------------
   MAIN PAGE
----------------------------------------------------- */
export default function Blog() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "UX",
    "AI",
    "Design",
    "xAPI",
    "Storyline",
    "General",
  ];

  /* ---------------------------------------------------
     FILTER + SEARCH PIPELINE
  ----------------------------------------------------- */
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
        description="Thinking about design systems, learning, xAPI, creativity, UX and modern digital making."
      />

      {/* PAGE INTRO (matches About/Services/Work) */}
      <Section>
        <Container>
          <PageIntro
            breadcrumb={[
              { label: "Home", href: "/" },
              { label: "Blog" },
            ]}
            title="I mostly think about design, education, AI and music"
            intro="Writing about design systems, learning, xAPI, creativity, interface clarity, and making things that feel considered."
            meta={
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Category filter chips */}
                <div className="flex gap-3 flex-wrap">
                  <Chip
                    label="All"
                    active={filter === "all"}
                    onClick={() => setFilter("all")}
                  />
                  {categories.map((cat) => (
                    <Chip
                      key={cat}
                      label={cat}
                      active={filter === cat}
                      onClick={() => setFilter(cat)}
                    />
                  ))}
                </div>

                {/* Search input */}
                <div className="w-full md:w-72">
                  <input
                    type="text"
                    placeholder="Search posts"
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
            }
          />
        </Container>
      </Section>

      {/* POSTS GRID */}
      <Section>
        <Container className="fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => {
              const mapped = mapCategory(post.category);
              const colorClass =
                CATEGORY_STYLES[mapped] || CATEGORY_STYLES.general;

              const thumbnail = `/images/${post.slug}.jpg`;

              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)] shadow-sm hover:shadow-md hover:-translate-y-[2px] transition overflow-hidden"
                >
                  {/* Thumbnail */}
                  <div className="h-40 bg-[var(--bg-soft)] overflow-hidden">
                    <img
                      src={thumbnail}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-opacity duration-300 opacity-0"
                      onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                      onError={(e) => {
                        const el = e.currentTarget;
                        if (el.dataset.errorHandled) return;
                        el.dataset.errorHandled = '1';
                        el.src = FALLBACK_IMG;
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <span className={`blog-badge ${mapped}`}>
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
                        {new Date(post.date).toLocaleDateString("en-AU")}
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