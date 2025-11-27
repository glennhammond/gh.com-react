// src/pages/Blog.jsx
import React, { useState } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { posts } from "../posts/posts";
import { Link } from "react-router-dom";

export default function Blog() {
  const [filter, setFilter] = useState("all");

  const categories = [
    "General",
    "Design",
    "xAPI",
    "Storyline",
    "Creativity",
    "Workflow",
  ];

  const filteredPosts =
    filter === "all"
      ? posts
      : posts.filter((p) => p.category?.toLowerCase() === filter.toLowerCase());

  return (
    <PageWrapper>
      <Section>
        <Container className="space-y-20 fade-in-up">
          {/* Page title */}
          <header className="space-y-4">
            <h1 className="font-heading text-4xl md:text-5xl leading-[1.1] tracking-[-0.01em] text-[var(--text)]">
              Blog
            </h1>

            <p className="text-[var(--text)]/70 leading-relaxed max-w-2xl text-[1.05rem]">
              Writing about design, learning, xAPI, creativity, and making
              things feel a little cleaner and clearer.
            </p>
          </header>

          {/* Category chips */}
          <div className="flex gap-3 flex-wrap">
            <Chip
              label="all"
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

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)] p-0 hover:-translate-y-[2px] transition shadow-sm hover:shadow-md overflow-hidden"
              >
                {/* Placeholder or future featured image */}
                <div className="h-40 bg-[var(--bg-soft)] flex items-center justify-center text-xs text-[var(--text)]/40">
                  Image placeholder
                </div>

                <div className="p-6 space-y-4">
                  <span className="uppercase tracking-[0.15em] text-xs text-[var(--text)]/50">
                    {post.category || "General"}
                  </span>

                  <h3 className="font-heading text-xl leading-snug text-[var(--text)]">
                    {post.title}
                  </h3>

                  <p className="text-sm text-[var(--text)]/70 leading-relaxed">
                    {post.summary}
                  </p>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm opacity-60">{post.date}</span>
                    <span className="text-sm text-brand-primary group-hover:underline">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}

function Chip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm border transition
        ${
          active
            ? "bg-brand-primary text-white border-brand-primary"
            : "bg-[var(--bg-soft)] text-[var(--text)]/70 border-black/10 dark:border-white/10 hover:bg-[var(--bg)]"
        }
      `}
    >
      {label}
    </button>
  );
}
