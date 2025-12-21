// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { HeroShell } from "../components/layout/PageHero";

import { projects } from "../data/projects";
import { posts } from "../posts/posts";
import ProjectImage from "../components/ProjectImage";
import SEO from "../components/ui/SEO.jsx";

// Client logos (SVG, light/dark mode)
const clients = [
  {
    name: "Independent Schools Queensland",
    lightSrc: "/images/logos/logo-independent-schools-queensland.svg",
    darkSrc: "/images/logos/logo-independent-schools-queensland-w.svg",
  },
  {
    name: "Torres and Cape Hospital and Health Service",
    lightSrc: "/images/logos/logo-Torres and Cape Hospital and Health Service.svg",
    darkSrc: "/images/logos/logo-Torres and Cape Hospital and Health Service-w.svg",
  },
  {
    name: "Civil Aviation Safety Authority",
    lightSrc: "/images/logos/logo-casa_1.svg",
    darkSrc: "/images/logos/logo-casa-w.svg",
  },
  {
    name: "Seqwater",
    lightSrc: "/images/logos/logo-seqwater_1.svg",
    darkSrc: "/images/logos/logo-seqwater-w.svg",
  },
  {
    name: "TAFE Queensland",
    lightSrc: "/images/logos/logo-tafe-queensland.svg",
    darkSrc: "/images/logos/logo-tafe-queensland-w.svg",
  },
];

export default function Home() {
  const placeholderImg = `${import.meta.env.BASE_URL}images/placeholders/placeholder-post.jpg`;

  // FEATURED WORK (explicit order)
  const pickBySlug = (slug) => projects.find((p) => p?.slug === slug);
  const pickByIncludes = (needle) =>
    projects.find(
      (p) => typeof p?.slug === "string" && p.slug.toLowerCase().includes(needle)
    );

  const reactProject =
    pickBySlug("react-learning-prototypes") || pickByIncludes("react-learning");

  // Prefer the real cognitive project if present; otherwise fall back to the design-system slot
  const cognitiveBase =
    pickBySlug("cognitive-science-in-queensland-schools") ||
    pickByIncludes("cognitive") ||
    pickBySlug("elearning-design-system");

  const tafeProject =
    pickBySlug("tafe-qld-pathways") ||
    pickBySlug("tafe-qld-pathways-program") ||
    projects.find(
      (p) =>
        typeof p?.slug === "string" &&
        p.slug.toLowerCase().includes("tafe") &&
        p.slug.toLowerCase().includes("path")
    ) ||
    pickByIncludes("pathways") ||
    pickByIncludes("tafe");

  const featuredProjects = [reactProject, cognitiveBase, tafeProject]
    .filter(Boolean)
    .map((p) => {
      const slug = String(p.slug || "").toLowerCase();

      // React: force placeholder image
      if (slug.includes("react-learning")) {
        return { ...p, image: placeholderImg };
      }

      // Cognitive: force your custom copy + placeholder image (also catches the design-system fallback)
      if (slug.includes("cognitive") || slug === "elearning-design-system") {
        return {
          ...p,
          title: "Cognitive Science",
          subtitle:
            "Evidence-informed learning design for Queensland schools - grounded in cognitive load, retrieval practice, and explicit teaching.",
          to: "/services",
          image: placeholderImg,
        };
      }

      // TAFE: leave as-is
      return p;
    });
  // LATEST POSTS (sort by date desc, then take top 3)
  const parsePostDate = (raw) => {
    if (!raw) return 0;

    const s = String(raw).trim();

    // ISO-like: 2025-09-17 or full ISO timestamp
    if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
      const t = Date.parse(s);
      return Number.isNaN(t) ? 0 : t;
    }

    // Legacy AU: DD/MM/YYYY
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(s)) {
      const [ddRaw, mmRaw, yyyy] = s.split("/");
      const dd = String(ddRaw).padStart(2, "0");
      const mm = String(mmRaw).padStart(2, "0");
      const t = Date.parse(`${yyyy}-${mm}-${dd}T00:00:00`);
      return Number.isNaN(t) ? 0 : t;
    }

    // Fallback parse
    const t = Date.parse(s);
    return Number.isNaN(t) ? 0 : t;
  };

  const latestPosts = React.useMemo(() => {
    return [...posts]
      // If you want undated posts to appear too, remove this filter.
      .filter((p) => p?.date)
      .sort((a, b) => parsePostDate(b?.date) - parsePostDate(a?.date))
      .slice(0, 3);
  }, []);

  return (
    <PageWrapper>
      <SEO
        title="Glenn Hammond - eLearning Specialist, Designer & Developer"
        description="Modern, evidence-informed learning design, Storyline development, xAPI analytics, and high-quality media for organisations."
        url="https://glennhammond.com/"
      />

      {/* HERO */}
      <HeroShell
        noPadding
        className="bg-[var(--bg)] relative overflow-x-hidden"
        containerClassName="px-5 sm:px-6 pt-12 pb-10 md:pt-12 md:pb-10 lg:pt-14 lg:pb-12 flex flex-col items-start"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,62,127,0.22),transparent_60%)] blur-2xl" />
          <div className="absolute -bottom-28 -left-28 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,209,0.18),transparent_60%)] blur-2xl" />
        </div>
        <div
          className="
            w-full
            h-full
            grid grid-cols-1
            gap-14
            items-center
            md:grid-cols-2
            md:gap-12
            md:items-center
          "
        >
          {/* Left */}
          <div className="w-full max-w-[560px] mx-auto md:mx-0">
            <div className="mb-6 flex items-center gap-3">
              <span aria-hidden="true">🏆</span>
              <span className="text-sm font-semibold tracking-[0.18em] uppercase text-[var(--text)] opacity-70">
                Award-winning eLearning
              </span>
            </div>
            <h1
              className="
                font-heading
                text-[rgba(26,20,70,0.92)] dark:text-[var(--text)]
                font-semibold
                tracking-tight
                leading-[0.9]
                max-w-[16ch]
                text-5xl
                sm:text-6xl
                md:text-7xl
                drop-shadow-[0_10px_30px_rgba(0,0,0,0.14)]
              "
            >
              <span className="block">Better Learning</span>
              <span className="block">by Design</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-[var(--text)] opacity-75 text-lg leading-7">
              Premium studio builds for professional learning - design-led, evidence-informed, and production-ready.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                Design system thinking
              </span>
              <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                Storyline · Rise · H5P
              </span>
              <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                xAPI · analytics
              </span>
            </div>
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm p-4">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-600">Studio quality</p>
                <p className="mt-2 text-sm text-slate-800 leading-6">High-craft layouts, refined typography, and clean interaction patterns.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm p-4">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-600">Evidence-informed</p>
                <p className="mt-2 text-sm text-slate-800 leading-6">Built on cognitive science - clarity, retrieval, and reduced load.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm p-4">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-600">Production-ready</p>
                <p className="mt-2 text-sm text-slate-800 leading-6">Reusable components, accessibility, and scalable maintenance.</p>
              </div>
            </div>
            {/* Mobile CTAs */}
            <div className="mt-6 md:hidden">
              <div
                className="
                  rounded-2xl
                  bg-white/90
                  backdrop-blur-sm
                  ring-1 ring-black/10
                  shadow-[0_22px_70px_rgba(2,6,23,0.20)]
                  p-6
                  w-full
                  transform-none
                  hover:transform-none
                  transition-none
                "
              >
                <div className="space-y-4">

                  <h2 className="font-heading text-2xl font-semibold leading-tight text-slate-900">
                    eLearning Design System
                  </h2>


                  <div className="mt-5">
                    <div className="overflow-hidden rounded-xl ring-1 ring-black/10 bg-white shadow-[0_18px_45px_rgba(2,6,23,0.12)]">
                      <img
                        src={`${import.meta.env.BASE_URL}images/design-system/glenn-hammond-site-assets-elearning-design-system.jpg`}
                        alt="eLearning Design System preview"
                        className="w-full h-auto block"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <p className="mt-5 text-slate-700 leading-7">
                    A practical kit for building modern eLearning fast - templates, interaction patterns, accessibility rules, and production-ready guidance.
                  </p>
                </div>

                <div className="mt-7 flex flex-col items-stretch gap-4">
                  <Link
                    to="/work/elearning-design-system"
                    className="
                      btn-cta
                      font-heading
                      inline-flex items-center justify-center
                      w-full
                      py-4
                      text-base font-semibold
                      rounded-xl
                      shadow-[0_14px_34px_rgba(0,0,0,0.20)]
                      transition
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-black/20
                    "
                  >
                    View the system
                  </Link>

                  <Link
                    to="/work"
                    className="
                      btn-outline
                      font-heading
                      inline-flex items-center justify-center
                      w-full
                      py-4
                      text-base font-semibold
                      rounded-xl
                      transition
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-black/20
                    "
                  >
                    View all work
                  </Link>
                </div>
                <div className="mt-4 text-center">
                  <Link
                    to="/services"
                    className="text-sm font-heading text-[var(--link)] hover:text-[var(--link-hover)] hover:underline inline-flex items-center gap-2"
                  >
                    How I work <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right - proof + actions card (desktop) */}
          <div className="hidden md:block w-full md:max-w-[560px] md:ml-auto">
            <div
              className="
                rounded-2xl
                bg-white/90
                backdrop-blur-sm
                ring-1 ring-black/10
                shadow-[0_28px_90px_rgba(2,6,23,0.18)]
                p-7 md:p-9
                w-full
                transform-none
                hover:transform-none
                transition-none
              "
            >

              <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-slate-900">
                eLearning Design System
              </h2>


              <div className="mt-5">
                <div className="overflow-hidden rounded-xl ring-1 ring-black/10 bg-white shadow-[0_18px_45px_rgba(2,6,23,0.12)]">
                  <img
                    src={`${import.meta.env.BASE_URL}images/design-system/glenn-hammond-site-assets-elearning-design-system.jpg`}
                    alt="eLearning Design System preview"
                    className="w-full h-auto block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <p className="mt-5 text-slate-700 leading-7">
                A practical kit for building modern eLearning fast - templates, interaction patterns, accessibility rules, and production-ready guidance.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <Link
                  to="/work/elearning-design-system"
                  className="
                    btn-cta
                    font-heading
                    inline-flex items-center justify-center
                    w-full
                    py-4
                    text-base font-semibold
                    rounded-xl
                    shadow-[0_14px_34px_rgba(0,0,0,0.20)]
                    transition
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-black/20
                  "
                >
                  View the system
                </Link>

                <Link
                  to="/work"
                  className="
                    btn-outline
                    font-heading
                    inline-flex items-center justify-center
                    w-full
                    py-4
                    text-base font-semibold
                    rounded-xl
                    transition
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-black/20
                  "
                >
                  View all work
                </Link>
              </div>
              <div className="mt-5">
                <Link
                  to="/services"
                  className="text-sm font-heading text-[var(--link)] hover:text-[var(--link-hover)] hover:underline inline-flex items-center gap-2"
                >
                  How I work <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </HeroShell>


      {/* SERVICES + CLIENT LOGOS (mobile: services first, desktop: logos first) */}
      <div className="flex flex-col">
        {/* Mobile order: 2, Desktop order: 1 */}
        <div className="order-2 md:order-1">
          {/* CLIENT LOGOS */}
          <Section className="bg-[var(--bg-soft)] border-y border-black/5 dark:border-white/10">
            <Container className="py-6 md:py-8 fade-in-up">
              <div className="w-full max-w-[560px] mx-auto sm:max-w-none">
                <div className="mb-6 md:mb-7 space-y-2 text-center sm:text-left">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--text)] opacity-60">
                    Trusted by
                  </p>
                  <p className="text-sm text-[var(--text)] opacity-70">
                    Education, government, and regulated industries.
                  </p>
                </div>
                <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 place-items-stretch sm:place-items-center">
                  {clients.map((client) => (
                    <div key={client.name} className="flex items-center justify-center w-full">
                      {/*
                        Normalise scaling across breakpoints:
                        - fixed width box so all logos are the same visual width on mobile
                        - fixed max-height so wordmarks stay tidy
                        - object-contain to preserve aspect ratio
                      */}
                      <div className="w-[68%] max-w-[381px] mx-auto sm:mx-0 sm:w-[162px] md:w-[180px] min-h-12 flex items-center justify-center">
                        <img
                          src={client.lightSrc}
                          alt={client.name}
                          className={`w-full h-auto max-h-[136px] sm:max-h-[41px] object-contain origin-center opacity-90 block dark:hidden ${
                            client.className || ""
                          }`}
                          loading="lazy"
                          decoding="async"
                        />
                        <img
                          src={client.darkSrc}
                          alt={client.name}
                          className={`w-full h-auto max-h-[136px] sm:max-h-[41px] object-contain origin-center opacity-90 hidden dark:block ${
                            client.className || ""
                          }`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        </div>

        {/* Mobile order: 1, Desktop order: 2 */}
        <div className="order-1 md:order-2">
          {/* SERVICES PREVIEW */}
          <Section>
            <Container className="space-y-8 fade-in-up">
              <div className="space-y-3 max-w-[70ch]">
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--text)] opacity-60">
                  Services
                </span>
                <h2 className="font-heading text-2xl text-[var(--text)]">
                  Premium learning design - from strategy to production
                </h2>
                <p className="text-sm text-[var(--text)] opacity-70 leading-7">
                  I design and produce premium digital learning with a clean UX, strong craft, and evidence-informed decisions - then make it scalable with templates, systems, and analytics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <ServiceCard
                  title="Consultancy & instructional design"
                  items={[
                    "Discovery, needs analysis, and learning strategy",
                    "Curriculum design, storyboards, and scenario writing",
                    "Stakeholder alignment and quality assurance",
                  ]}
                />
                <ServiceCard
                  title="eLearning & media development"
                  items={[
                    "Storyline/Rise builds with strong UX and accessibility",
                    "Reusable templates, components, and design systems",
                    "Video production, editing, and microlearning assets",
                  ]}
                />
                <ServiceCard
                  title="xAPI & learning analytics"
                  items={[
                    "xAPI implementation, debugging, and statement design",
                    "Veracity/Learning Locker setup and reporting workflows",
                    "Dashboards that turn learning data into insight",
                  ]}
                />
              </div>

              <Link
                to="/services"
                className="text-sm text-[var(--link)] hover:text-[var(--link-hover)] hover:underline inline-block font-heading"
              >
                View all services →
              </Link>
            </Container>
          </Section>
        </div>
      </div>
      {/* LATEST POSTS */}
      <Section className="bg-[var(--bg-soft)]">
        <Container className="space-y-8 fade-in-up">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/50">
              Insights
            </span>
            <h2 className="font-heading text-2xl text-[var(--text)]">
              Latest writing
            </h2>
            <p className="text-sm text-[var(--text)]/60">
              AI-assisted. Human-refined.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="
                  site-card
                  p-6 space-y-3
                  transition
                  hover:-translate-y-1 hover:shadow-md
                  hover:border-[var(--brand-primary)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-black/20
                "
              >
                {/* Post thumbnail (placeholder for now) */}
                <div className="overflow-hidden rounded-xl ring-1 ring-black/10 bg-[rgba(15,23,42,0.04)]">
                  <img
                    src={post.image || placeholderImg}
                    alt=""
                    className="w-full aspect-[16/9] object-cover block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[var(--text)] opacity-60">
                  {post.date && <span>{post.date}</span>}
                  {post.category && (
                    <span className="inline-flex items-center rounded-full border border-black/10 px-2 py-0.5">
                      {post.category}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-lg text-[var(--text)]">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--text)] opacity-75">{post.summary}</p>
                <span className="text-sm font-heading text-[var(--link)]">
                  Read more →
                </span>
              </Link>
            ))}
          </div>

          <Link
            to="/blog"
            className="text-sm text-[var(--link)] hover:text-[var(--link-hover)] hover:underline inline-block font-heading"
          >
            View all posts →
          </Link>
        </Container>
      </Section>

      {/* FEATURED WORK */}
      <Section className="bg-[var(--bg-soft)]">
        <Container className="space-y-10 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Featured work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                to={project.to || `/work/${project.slug}`}
                className="
                  site-card-strong
                  overflow-hidden
                  transition
                  hover:-translate-y-[2px]
                  hover:shadow-lg
                  hover:border-[var(--brand-primary)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-black/20
                "
              >
                <ProjectImage src={project.image} alt={project.title} />
                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-xl text-[var(--text)]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text)] opacity-75">
                    {project.subtitle}
                  </p>
                  <span className="text-sm font-heading text-[var(--link)]">
                    Explore project →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/work"
            className="text-sm text-[var(--brand-primary)] hover:underline inline-block font-heading"
          >
            View all projects →
          </Link>
        </Container>
      </Section>

      {/* FLAGSHIP HIGHLIGHT (BOTTOM) */}
      <Section noPadding className="bg-[var(--bg-soft)]">
        <Container className="pt-10 pb-10 md:pt-12 md:pb-14">
          <Link
            to="/work/react-learning-prototypes"
            className="
              block w-full
              overflow-hidden
              rounded-2xl
              ring-1 ring-black/10 dark:ring-white/10
              bg-white dark:bg-white/5
              shadow-[0_28px_90px_rgba(2,6,23,0.18)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--secondary)]/40
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--text)] opacity-70">
                  Glenn Hammond · React Learning Prototypes
                </p>
                <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold leading-tight text-[var(--text)] max-w-[22ch]">
                  React learning prototypes for modern professional learning
                </h2>
                <p className="mt-4 text-[var(--text)] opacity-75 leading-7 max-w-[56ch]">
                  A small collection of interactive learning apps - built to test ideas fast, prove UX, and explore what learning can feel like beyond slide-based courses.
                </p>
                <p className="mt-6 text-xs font-semibold tracking-[0.18em] uppercase text-[var(--text)] opacity-45">
                  Outcome: faster iteration, clearer stakeholder buy-in, and a stronger path from idea to build.
                </p>
                <Link
                  to="/work/react-learning-prototypes"
                  className="mt-8 inline-flex btn-outline items-center justify-center gap-2 px-5 py-3 text-sm font-heading rounded-xl"
                >
                  View prototypes <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="bg-[rgba(26,20,70,0.03)] md:bg-[rgba(26,20,70,0.03)] dark:bg-white/6 dark:md:bg-white/8 p-8 md:p-10 flex items-center justify-center border-t border-black/10 md:border-t-0 md:border-l border-black/10 dark:border-white/10">
                <img
                  src={placeholderImg}
                  alt="React learning prototypes preview"
                  className="w-full max-w-[620px] h-auto block rounded-xl shadow-[0_18px_45px_rgba(2,6,23,0.12)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </Link>
        </Container>
      </Section>
    </PageWrapper>
  );
}

function ServiceCard({ title, text, items, icon, tag }) {
  return (
    <div className="site-card-strong p-7 md:p-8 space-y-4 transition hover:-translate-y-[2px] hover:shadow-lg hover:border-[var(--brand-primary)]">
      <div className="space-y-1">
        <h3 className="font-heading text-xl text-[var(--text)]">{title}</h3>
        {tag && (
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text)] opacity-70">
            {tag}
          </span>
        )}
      </div>

      {items?.length ? (
        <ul className="space-y-3 text-sm text-[var(--text)] opacity-80">
          {items.map((item) => (
            <li key={item} className="relative pl-6">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.12em] text-[0.95em] leading-none text-[var(--secondary)]"
              >
                ★
              </span>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-[var(--text)] opacity-80">{text}</p>
      )}
    </div>
  );
}