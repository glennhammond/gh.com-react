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
   SCRANDALOUS PAGE (recipes + playlists)
----------------------------------------------------- */
export function Scrandalous() {
  const parseDateMs = (value) => {
    if (!value) return 0;
    const s = String(value).trim();

    // DD/MM/YYYY
    const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (m) {
      const dd = String(m[1]).padStart(2, "0");
      const mm = String(m[2]).padStart(2, "0");
      const yyyy = m[3];
      const t = Date.parse(`${yyyy}-${mm}-${dd}`);
      return Number.isFinite(t) ? t : 0;
    }

    const t = Date.parse(s);
    return Number.isFinite(t) ? t : 0;
  };

  const formatDate = (value) => {
    try {
      const s = String(value || "");
      const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
      if (m) {
        const dd = String(m[1]).padStart(2, "0");
        const mm = String(m[2]).padStart(2, "0");
        const yyyy = m[3];
        return new Date(`${yyyy}-${mm}-${dd}`).toLocaleDateString("en-AU", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
      }

      return new Date(s).toLocaleDateString("en-AU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return value;
    }
  };

  const scrandalousItems = useMemo(() => {
    return posts
      .filter((p) => ((p.section || "blog") + "").toLowerCase() === "scrandalous")
      .slice()
      .sort((a, b) => parseDateMs(b.date) - parseDateMs(a.date));
  }, []);

  const recipes = useMemo(
    () => scrandalousItems.filter((p) => ((p.type || "post") + "").toLowerCase() === "recipe"),
    [scrandalousItems]
  );

  const playlists = useMemo(
    () => scrandalousItems.filter((p) => ((p.type || "post") + "").toLowerCase() === "playlist"),
    [scrandalousItems]
  );

  const featuredRecipe = recipes[0] || null;
  const featuredPlaylist = playlists[0] || null;

  const totalMinsLabel = (p) => {
    const total = (Number(p?.prepMins) || 0) + (Number(p?.cookMins) || 0);
    return total > 0 ? `${total} mins` : "";
  };

  const Card = ({ item, featured = false, emptyLabel }) => {
    if (!item) {
      return (
        <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-sm overflow-hidden">
          <div className={featured ? "p-6" : "p-6"}>
            <div
              className={
                (featured ? "h-64 md:h-72" : "h-44 md:h-48") +
                " w-full bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 overflow-hidden rounded-2xl"
              }
            >
              <img
                src={FALLBACK_IMG}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className={featured ? "mt-5" : "mt-4"}>
              <h3 className={featured ? "font-heading text-2xl text-[var(--text)]" : "font-heading text-xl text-[var(--text)]"}>
                {emptyLabel}
              </h3>
              <p className="mt-2 text-sm text-[var(--text)]/70 leading-relaxed">
                Add your first one by dropping a markdown file into <code className="px-1">src/posts</code> with <code className="px-1">section: scrandalous</code>.
              </p>
            </div>
          </div>
        </div>
      );
    }

    const dateLabel = formatDate(item.date);
    const hero = item.hero || item.image || FALLBACK_IMG;
    const t = ((item.type || "post") + "").toLowerCase();

    return (
      <Link
        to={`/scrandalous/${item.slug}`}
        className="group rounded-2xl border border-black/10 dark:border-white/15 bg-white/95 dark:bg-white/10 backdrop-blur-md shadow-sm hover:shadow-md hover:-translate-y-[2px] hover:border-[#F5C84C] transition overflow-hidden"
      >
        {/* Media */}
        <div
          className={
            (featured ? "h-64 md:h-72" : "h-44 md:h-48") +
            " w-full bg-black/5 dark:bg-white/10 border-b border-black/5 dark:border-white/10 overflow-hidden"
          }
        >
          <img
            src={hero}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-opacity duration-300 opacity-0"
            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
            onError={(e) => {
              const el = e.currentTarget;
              if (el.dataset.errorHandled) return;
              el.dataset.errorHandled = "1";
              el.src = FALLBACK_IMG;
            }}
          />
        </div>

        <div className="p-6">
          <h3 className={featured ? "font-heading text-2xl text-[var(--text)]" : "font-heading text-xl text-[var(--text)]"}>
            {item.title}
          </h3>

          {item.summary ? (
            <p className="mt-2 text-sm text-[var(--text)]/70 leading-relaxed">{item.summary}</p>
          ) : null}

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-[var(--text)]/60">{dateLabel}</span>

            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium leading-none whitespace-nowrap border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] text-[var(--text)]/70">
              {t === "recipe" ? "Recipe" : t === "playlist" ? "Playlist" : "Post"}
            </span>

            {t === "recipe" && totalMinsLabel(item) ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium leading-none whitespace-nowrap border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] text-[var(--text)]/70">
                {totalMinsLabel(item)}
              </span>
            ) : null}

            {t === "recipe" && item.serves ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium leading-none whitespace-nowrap border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] text-[var(--text)]/70">
                Serves {item.serves}
              </span>
            ) : null}

            {t === "playlist" && item.spotify ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium leading-none whitespace-nowrap border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] text-[var(--text)]/70">
                Spotify
              </span>
            ) : null}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <PageWrapper>
      <SEO
        title="Scrandalous - What I cooked this week - Glenn Hammond"
        description="Scrandalous: my little online recipe book - what I cooked this week, plus a playlist to match."
      />

      <Section>
        <Container>
          <PageIntro
            breadcrumb={[
              { label: "Home", href: "/" },
              { label: "Scrandalous" },
            ]}
            title="Scrandalous - What I cooked this week"
            intro="My little online recipe book - what I cooked this week, plus a playlist to match."
          />
        </Container>
      </Section>

      {/* THIS WEEK */}
      <Section className="pt-0 md:pt-4">
        <Container className="fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <Card item={featuredRecipe} featured emptyLabel="Recipe of the week" />
            </div>
            <div className="lg:col-span-1">
              <Card item={featuredPlaylist} emptyLabel="Playlist of the week" />
            </div>
          </div>
        </Container>
      </Section>

      {/* RECENT */}
      <Section>
        <Container className="fade-in-up space-y-14">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-[var(--text)]">Recent recipes</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {recipes.slice(0, 12).map((item) => (
                <Card key={item.slug} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-[var(--text)]">Recent playlists</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {playlists.slice(0, 12).map((item) => (
                <Card key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
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

  // Safe date formatting for mixed inputs (ISO, DD/MM/YYYY, '30 Nov 2025')
  const formatDateSafe = (value) => {
    if (!value) return "";
    const s = String(value).trim();

    // DD/MM/YYYY -> YYYY-MM-DD
    const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (m) {
      const dd = String(m[1]).padStart(2, "0");
      const mm = String(m[2]).padStart(2, "0");
      const yyyy = m[3];
      const d = new Date(`${yyyy}-${mm}-${dd}`);
      if (Number.isNaN(d.getTime())) return "";
      return d.toLocaleDateString("en-AU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }

    const d = new Date(s);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

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
        const q = String(searchQuery || "").toLowerCase();
        const title = String(p?.title || "").toLowerCase();
        const summary = String(p?.summary || "").toLowerCase();
        const category = String(p?.category || "").toLowerCase();

        return title.includes(q) || summary.includes(q) || category.includes(q);
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

  const thumbnail = post.hero || post.image || FALLBACK_IMG;
  const formattedDate = formatDateSafe(post.date);

  return (
    <Link
      key={post.slug}
      to={`/blog/${post.slug}`}
      className="group rounded-2xl border border-black/10 dark:border-white/15 bg-white/95 dark:bg-white/10 backdrop-blur-md shadow-sm hover:shadow-md hover:-translate-y-[2px] hover:border-[#F5C84C] transition overflow-hidden flex flex-col h-full"
    >
      {/* Media */}
      <div className="h-44 md:h-48 w-full bg-black/5 dark:bg-white/10 border-b border-black/5 dark:border-white/10 overflow-hidden">
        <img
          src={thumbnail}
          alt={post.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-opacity duration-300 opacity-0"
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
          onError={(e) => {
            const el = e.currentTarget;
            if (el.dataset.errorHandled) return;
            el.dataset.errorHandled = "1";
            el.src = FALLBACK_IMG;
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category pill (top) */}
        {post.category ? (
          <span
            className={`inline-flex w-fit items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.12em] uppercase ${colorClass}`}
          >
            {post.category}
          </span>
        ) : null}

        {formattedDate ? (
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{formattedDate}</p>
        ) : null}

        <h3 className="mt-4 font-heading text-2xl leading-snug text-slate-900 dark:text-slate-50">
          {post.title}
        </h3>

        {post.summary ? (
          <p className="mt-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {post.summary}
          </p>
        ) : null}

        {/* Bottom-right CTA */}
        <div className="mt-auto pt-6 flex items-center justify-end">
          <span className="text-base text-brand-primary group-hover:underline">
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