// src/pages/Post.jsx
import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SEO from "../components/ui/SEO.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

import { posts } from "../posts/posts";

// 🔧 FIXED — use public path instead of import
const fallbackImage = "/images/placeholder-post.jpg";  

// Category mapper (matches Blog.jsx logic)
function mapCategory(category = "") {
  const c = category.toLowerCase();

  if (c.includes("ux")) return "ux";
  if (c.includes("ai")) return "ai";
  if (c.includes("design") && !c.includes("learning")) return "design";
  if (c.includes("education") || c.includes("learning")) return "education";
  if (c.includes("music")) return "music";
  if (c.includes("xapi")) return "xapi";
  if (c.includes("storyline")) return "storyline";
  if (c.includes("creativity")) return "creativity";
  if (c.includes("workflow")) return "workflow";

  return "general";
}

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageWrapper>
        <SEO title="Post not found – Glenn Hammond" />
        <Section>
          <Container className="py-24 text-center space-y-4">
            <h1 className="font-heading text-3xl">Post not found</h1>
            <Link to="/blog" className="text-brand-primary text-sm">
              ← Back to blog
            </Link>
          </Container>
        </Section>
      </PageWrapper>
    );
  }

  // Format the date (DD/MM/YYYY → 14 March 2025)
  const formattedDate = useMemo(() => {
    try {
      const [d, m, y] = post.date.split("/");
      return new Date(`${y}-${m}-${d}`).toLocaleDateString("en-AU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return post.date;
    }
  }, [post.date]);

  const categorySlug = mapCategory(post.category);
  const cleanedContent = post.content.replace(/^# .+\n/, ""); // remove first H1

  return (
    <PageWrapper>
      <SEO
        title={`${post.title} – Glenn Hammond`}
        description={post.summary}
        url={`https://glennhammond.com/blog/${post.slug}`}
      />

      <Section>
        <Container className="py-10 md:py-16 space-y-14 fade-in-up max-w-4xl">

          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title }
            ]}
          />

          {/* HERO AREA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

            {/* LEFT: category, title, date */}
            <div className="md:col-span-2 space-y-5">

              {/* Category chip */}
              <span className={`blog-badge ${categorySlug}`}>
                {post.category}
              </span>

              {/* Title */}
              <h1 className="font-heading text-4xl md:text-5xl leading-tight text-[var(--text)]">
                {post.title}
              </h1>

              {/* Date */}
              <p className="text-sm text-[var(--text)]/60">{formattedDate}</p>
            </div>

            {/* RIGHT: thumbnail */}
            <div className="w-full h-40 md:h-48 lg:h-56 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] flex items-center justify-center">
              <img
                src={post.image || fallbackImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <article className="prose lg:prose-lg dark:prose-invert max-w-none text-[var(--text)]/80 leading-relaxed">

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: () => null,
                h2: ({ node, ...props }) => (
                  <h2
                    {...props}
                    className="font-heading text-3xl md:text-4xl text-[var(--text)] mt-14 mb-6"
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    {...props}
                    className="font-heading text-2xl text-[var(--text)] mt-12 mb-4"
                  />
                ),
                h4: ({ node, ...props }) => (
                  <h4
                    {...props}
                    className="font-heading text-xl text-[var(--text)] mt-10 mb-3"
                  />
                ),
                p: ({ node, ...props }) => (
                  <p {...props} className="mb-6" />
                ),
                ul: ({ node, ...props }) => (
                  <ul {...props} className="list-disc pl-6 space-y-2 mb-8 marker:text-brand-primary" />
                ),
                img: ({ node, ...props }) => (
                  <img {...props} className="rounded-2xl my-10 shadow-md" />
                )
              }}
            >
              {cleanedContent}
            </ReactMarkdown>

          </article>

        </Container>
      </Section>
    </PageWrapper>
  );
}