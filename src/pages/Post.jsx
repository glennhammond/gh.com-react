// src/pages/Post.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import PageWrapper from "../components/layout/PageWrapper.jsx";
import Container from "../components/layout/Container.jsx";
import Section from "../components/layout/Section.jsx";
import SEO from "../components/ui/SEO.jsx";

import { posts } from "../posts/posts.js";

// If your placeholder lives at public/images/placeholder-post.jpg
const fallbackImage = "/images/placeholder-post.jpg";

// ----------------------------------------------------------
// CATEGORY → TAILWIND COLOUR MAP
// ----------------------------------------------------------
function categoryClass(category = "") {
  const c = category.toLowerCase();

  if (c.includes("ux")) return "bg-blue-100 text-blue-700";
  if (c.includes("ai")) return "bg-purple-100 text-purple-700";
  if (c.includes("design")) return "bg-pink-100 text-pink-700";
  if (c.includes("education") || c.includes("learning"))
    return "bg-green-100 text-green-700";
  if (c.includes("music")) return "bg-yellow-100 text-yellow-700";
  if (c.includes("xapi")) return "bg-indigo-100 text-indigo-700";
  if (c.includes("storyline")) return "bg-cyan-100 text-cyan-700";
  if (c.includes("creativity")) return "bg-orange-100 text-orange-700";
  if (c.includes("workflow")) return "bg-teal-100 text-teal-700";

  return "bg-gray-100 text-gray-700";
}

// ----------------------------------------------------------

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageWrapper>
        <Section>
          <Container>
            <p className="text-red-500">Post not found.</p>
          </Container>
        </Section>
      </PageWrapper>
    );
  }

  // Prefer frontmatter image if provided:
  // image: "portfolio-elearning-design-system.jpg"
  const imageSrc = post.image
    ? `/images/${post.image}`
    : fallbackImage;

  return (
    <PageWrapper>
      <SEO
        title={`${post.title} – Glenn Hammond`}
        description={post.summary || "Insights on design, learning, xAPI, and creativity."}
      />

      <Section>
        <Container className="space-y-12">
          {/* BREADCRUMB */}
          <nav className="text-sm opacity-60 space-x-2">
            <Link to="/" className="hover:opacity-80">
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:opacity-80">
              Blog
            </Link>
            <span>/</span>
            <span className="opacity-80">{post.title}</span>
          </nav>

          {/* INTRO ROW */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
            {/* LEFT */}
            <div className="space-y-4">
              <span
                className={`uppercase tracking-wider text-xs px-3 py-1 rounded-full inline-block shadow-sm ${categoryClass(
                  post.category
                )}`}
              >
                {post.category}
              </span>

              <h1 className="font-heading text-4xl md:text-5xl leading-tight text-[var(--text)]">
                {post.title}
              </h1>

              <p className="text-sm opacity-60">
                {new Date(post.date).toLocaleDateString("en-AU")}
              </p>
            </div>

            {/* RIGHT — THUMBNAIL */}
            <div className="hidden md:block">
              <div className="rounded-lg overflow-hidden border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] shadow-sm w-[220px] h-[140px]">
                <img
                  src={imageSrc}
                  onError={(e) => {
                    e.currentTarget.src = fallbackImage;
                  }}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className="prose prose-lg max-w-none text-[var(--text)] dark:prose-invert">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}