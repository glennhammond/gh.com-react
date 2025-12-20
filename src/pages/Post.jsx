// src/pages/Post.jsx
import React, { useMemo } from "react";
import { useParams, useLocation, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import PageHero from "../components/layout/PageHero";
import SEO from "../components/ui/SEO.jsx";

import { posts } from "../posts/posts";

// Use public path instead of import
const fallbackImage = "/images/placeholders/placeholder-post.jpg";

// Simple legacy slug redirects (keeps old shared links working)
const SLUG_REDIRECTS = {
  "Master Slides in Storyline": "master-slides-in-storyline",
  "Master%20Slides%20in%20Storyline": "master-slides-in-storyline",
};

function stripMarkdown(md = "") {
  return md
    // remove code blocks
    .replace(/```[\s\S]*?```/g, " ")
    // remove inline code
    .replace(/`[^`]*`/g, " ")
    // remove images
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    // remove links but keep text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    // remove markdown headings/quotes/list markers
    .replace(/^\s{0,3}(#{1,6}|>|\*|-|\d+\.)\s+/gm, "")
    // collapse whitespace
    .replace(/\s+/g, " ")
    .trim();
}

function toIsoDateFromDdMmYyyy(value = "") {
  // Accepts YYYY-MM-DD or DD/MM/YYYY, returns YYYY-MM-DD, else empty string.
  const v = String(value || "").trim();
  if (!v) return "";

  // Already ISO
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return v;

  // Legacy AU format
  const m = v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!m) return "";
  const dd = String(m[1]).padStart(2, "0");
  const mm = String(m[2]).padStart(2, "0");
  const yyyy = m[3];
  return `${yyyy}-${mm}-${dd}`;
}

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

  const location = useLocation();

  // Which section route are we currently on?
  const currentBase = location.pathname.startsWith("/scrandalous")
    ? "scrandalous"
    : "blog";

  // Handle legacy slugs (eg old filenames with spaces)
  const decodedSlug = useMemo(() => {
    try {
      return decodeURIComponent(slug || "");
    } catch {
      return slug || "";
    }
  }, [slug]);

  const redirectTo = SLUG_REDIRECTS[slug] || SLUG_REDIRECTS[decodedSlug];
  if (redirectTo) {
    return <Navigate to={`/blog/${redirectTo}`} replace />;
  }

  const post = posts.find((p) => p.slug === slug || p.slug === decodedSlug);

  const section = ((post?.section || "blog") + "").toLowerCase();
  const type = ((post?.type || "post") + "").toLowerCase();
  const isScrandalous = section === "scrandalous";

  // Force the preferred route so we never have duplicate URLs for the same content.
  const desiredBase = isScrandalous ? "scrandalous" : "blog";
  if (post && desiredBase !== currentBase) {
    return <Navigate to={`/${desiredBase}/${post.slug}`} replace />;
  }

  const canonicalUrl = useMemo(() => {
    // Always use the preferred non-www canonical.
    const base = post ? (isScrandalous ? "scrandalous" : "blog") : currentBase;
    const s = post?.slug || slug;
    return `https://glennhammond.com/${base}/${s}`;
  }, [post, isScrandalous, currentBase, slug]);

  if (!post) {
    return (
      <PageWrapper>
        <SEO title="Post not found - Glenn Hammond" />
        <Section>
          <Container className="py-24 text-center space-y-4">
            <h1 className="font-heading text-3xl">Post not found</h1>
            <Link
              to={currentBase === "scrandalous" ? "/scrandalous" : "/blog"}
              className="text-brand-primary text-sm"
            >
              ← Back to {currentBase === "scrandalous" ? "Scrandalous" : "blog"}
            </Link>
          </Container>
        </Section>
      </PageWrapper>
    );
  }

// Format the date for display (supports YYYY-MM-DD and DD/MM/YYYY)
const formattedDate = useMemo(() => {
  const raw = String(post?.date || "").trim();
  if (!raw) return "";

  // ISO: YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    const d = new Date(raw);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-AU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  // Legacy: DD/MM/YYYY
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(raw)) {
    const [dd, mm, yyyy] = raw.split("/");
    const d = new Date(`${yyyy}-${mm}-${dd}`);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-AU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  // Fallback: return as-is
  return raw;
}, [post?.date]);

  const categorySlug = mapCategory(post.category);
  const cleanedContent = post.content.replace(/^# .+\n/, ""); // remove first H1

  const seoDescription = useMemo(() => {
    const base = post.summary && String(post.summary).trim()
      ? String(post.summary).trim()
      : stripMarkdown(cleanedContent).slice(0, 200);

    return base.length > 160 ? `${base.slice(0, 157).trim()}...` : base;
  }, [post.summary, cleanedContent]);

  const seoImage = useMemo(() => {
    const raw = post.hero || post.image || fallbackImage;
    if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
    return `https://glennhammond.com${raw.startsWith("/") ? raw : `/${raw}`}`;
  }, [post.hero, post.image]);

  const jsonLd = useMemo(() => {
    const isoDate = toIsoDateFromDdMmYyyy(post.date);

    const minutesToDuration = (mins) => {
      const n = Number(mins);
      if (!Number.isFinite(n) || n <= 0) return undefined;
      return `PT${Math.round(n)}M`;
    };

    const base = {
      "@context": "https://schema.org",
      name: post.title,
      description: seoDescription,
      image: [seoImage],
      datePublished: isoDate || undefined,
      dateModified: isoDate || undefined,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl,
      },
      author: {
        "@type": "Person",
        name: "Glenn Hammond",
      },
      publisher: {
        "@type": "Person",
        name: "Glenn Hammond",
      },
    };

    if (isScrandalous && type === "recipe") {
      const prep = minutesToDuration(post.prepMins);
      const cook = minutesToDuration(post.cookMins);
      const totalMins =
        (Number(post.prepMins) || 0) + (Number(post.cookMins) || 0);

      return {
        ...base,
        "@type": "Recipe",
        headline: post.title,
        prepTime: prep,
        cookTime: cook,
        totalTime: minutesToDuration(totalMins),
        recipeYield: post.serves ? `${post.serves} servings` : undefined,
        keywords: Array.isArray(post.tags) ? post.tags.join(", ") : undefined,
      };
    }

    if (isScrandalous && type === "playlist") {
      return {
        ...base,
        "@type": "MusicPlaylist",
        headline: post.title,
        url: canonicalUrl,
        sameAs: post.spotify ? [post.spotify] : undefined,
        keywords: Array.isArray(post.tags) ? post.tags.join(", ") : undefined,
      };
    }

    return {
      ...base,
     "@type": "BlogPosting",
      headline: post.title,
    };
  }, [
    post,
    type,
    isScrandalous,
    seoDescription,
    seoImage,
    canonicalUrl,
  ]);

  const firstH2Ref = React.useRef(true);

  return (
    <PageWrapper>
      <SEO
        title={`${isScrandalous ? "Scrandalous - " : ""}${post.title} - Glenn Hammond`}
        description={seoDescription}
        url={canonicalUrl}
        image={seoImage}
        type="article"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          {
            label: isScrandalous ? "Scrandalous" : "Blog",
            href: isScrandalous ? "/scrandalous" : "/blog",
          },
          { label: post.title },
        ]}
        title={post.title}
        right={
          <div className="hidden lg:block max-w-xl ml-auto">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
              <img
                src={post.hero || post.image || fallbackImage}
                alt={post.title}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        }
      >
        {!isScrandalous ? (
          <div className="space-y-3">
            <span className={`blog-badge ${categorySlug}`}>{post.category}</span>
            <p className="text-sm text-[var(--text)]/60">{formattedDate}</p>
            {post.summary ? (
              <p className="text-base md:text-lg leading-relaxed text-neutral-700/90 dark:text-white/80">
                {post.summary}
              </p>
            ) : null}
          </div>
        ) : (
          <div className="card-meta">
            {formattedDate ? <span className="opacity-80">{formattedDate}</span> : null}
            <span className="pill">{type === "recipe" ? "Recipe" : type === "playlist" ? "Playlist" : "Post"}</span>

            {type === "recipe" && (post.prepMins || post.cookMins) ? (
              <span className="pill">
                {(() => {
                  const total = (Number(post.prepMins) || 0) + (Number(post.cookMins) || 0);
                  return total > 0 ? `${total} mins` : "";
                })()}
              </span>
            ) : null}

            {type === "recipe" && post.serves ? <span className="pill">Serves {post.serves}</span> : null}

            {type === "playlist" && post.spotify ? (
              <a href={post.spotify} target="_blank" rel="noreferrer" className="pill hover:underline">
                Spotify
              </a>
            ) : null}
          </div>
        )}
      </PageHero>

      <Section>
        <Container className="pt-0 md:pt-4 pb-16 max-w-4xl">
          {/* CONTENT */}
          <article className="prose lg:prose-lg dark:prose-invert max-w-none text-[var(--text)]/80 leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: () => null,
                h2: ({ node, ...props }) => {
                  const isFirst = firstH2Ref.current;
                  if (isFirst) firstH2Ref.current = false;
                  return (
                    <h2
                      {...props}
                      className={`font-heading font-semibold text-3xl md:text-4xl text-[var(--text)] ${isFirst ? "mt-6" : "mt-14"} mb-6`}
                    />
                  );
                },
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
                p: ({ node, ...props }) => <p {...props} className="mb-6" />,
                ul: ({ node, ...props }) => (
                  <ul
                    {...props}
                    className="list-disc pl-6 space-y-2 mb-8 marker:text-brand-primary"
                  />
                ),
                img: ({ node, ...props }) => (
                  <img {...props} className="rounded-2xl my-10 shadow-md" loading="lazy" />
                ),
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