// src/pages/Blog.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

import SEO from "../components/ui/SEO.jsx";
import PageIntro from "../components/layout/PageIntro";

import { posts } from "../posts/posts";

const FALLBACK_IMG = "/images/placeholders/placeholder-post.jpg";

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
      // Keep Blog and Scrandalous separate (Scrandalous will have its own page)
      .filter((p) => (p.section || "blog").toLowerCase() !== "scrandalous")
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
<Section className="pt-0 md:pt-4">
  <Container className="fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {filteredPosts.map((post) => {
  const mapped = mapCategory(post.category);
  const colorClass =
    CATEGORY_STYLES[mapped] || CATEGORY_STYLES.general;

  const thumbnail = post.hero || post.image || `/images/${post.slug}.jpg`;
  const formattedDate = new Date(post.date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      key={post.slug}
      to={`/blog/${post.slug}`}
      className="group rounded-2xl border border-black/10 dark:border-white/15 bg-white/95 dark:bg-white/10 backdrop-blur-md shadow-sm hover:shadow-md hover:-translate-y-[2px] hover:border-[#F5C84C] transition overflow-hidden"
    >
      {/* Image */}
      <div className="p-6 pb-0">
        <div className="card-media">
          <img
            src={thumbnail}
            alt={post.title}
            loading="lazy"
            decoding="async"
            className="transition-opacity duration-300 opacity-0"
            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
            onError={(e) => {
              const el = e.currentTarget;
              if (el.dataset.errorHandled) return;
              el.dataset.errorHandled = "1";
              el.src = FALLBACK_IMG;
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-4">
        <h3 className="font-heading text-xl text-[var(--text)]">
          {post.title}
        </h3>

        <p className="mt-2 text-sm text-[var(--text)]/70 leading-relaxed">
          {post.summary}
        </p>

        {/* Meta row: date + category */}
        <div className="card-meta mt-3">
          <span className="opacity-80">{formattedDate}</span>
          <span className="pill">{post.category}</span>
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