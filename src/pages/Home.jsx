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
const heroWashStyle = {
  background:
    "radial-gradient(1200px circle at 12% 30%, rgba(255, 244, 236, 0.55), transparent 62%)," +
    "linear-gradient(180deg, var(--hero-bg), transparent 70%)",
  backgroundRepeat: "no-repeat",
  opacity: 0.75,
};
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

  // HERO CTA A/B
  // A = consulting-first ("How I work" is primary)
  // B = system-first ("View the system" is primary)
  const HERO_CTA_VARIANT = "B";

  const ctaPrimary = "btn-cta font-heading inline-flex items-center justify-center w-full py-4 text-base font-semibold rounded-xl shadow-[0_14px_34px_rgba(0,0,0,0.20)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20";
  const ctaSecondary = "btn-outline font-heading inline-flex items-center justify-center w-full py-4 text-base font-semibold rounded-xl transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

  const howIWorkClass = HERO_CTA_VARIANT === "A" ? ctaPrimary : ctaSecondary;
  const viewSystemClass = HERO_CTA_VARIANT === "A" ? ctaSecondary : ctaPrimary;

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
          to: "#",
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
        title="Glenn Hammond - Learning Systems Designer"
        description="I design scalable learning systems for organisations that need strategy, Storyline/Rise builds, Moodle platforms, xAPI analytics, and practical learning that transfers to real work."
        url="https://glennhammond.com/"
      />

      {/* HERO */}
 <HeroShell
  noPadding
  className="bg-[var(--bg)] !min-h-0 !h-auto"
  containerClassName="px-5 sm:px-8 lg:px-10 pt-12 pb-2 sm:pb-4 md:pt-12 md:pb-0 lg:pt-14 lg:pb-0 flex flex-col items-start"
  withWash
  washStyle={heroWashStyle}
>
           <div
          className="
            w-full
            relative z-10
            grid grid-cols-1
            gap-10
            items-start
          "
        >
          {/* Left */}
          <div className="w-full max-w-[880px] mx-auto md:mx-0 md:flex md:flex-col md:h-full md:pb-4">
            <div className="mb-6 flex items-center gap-3">
              <span aria-hidden="true" className="text-3xl leading-none">🏆</span>
              <span className="text-sm font-semibold tracking-[0.12em] text-[var(--text)] opacity-70">
                Learning systems<br />
                strategy, build & analytics
              </span>
            </div>
            <h1
              className="
                font-heading
                text-[rgba(26,20,70,0.92)] dark:text-[var(--text)]
                font-semibold
                tracking-tight
                leading-[0.9]
                max-w-[24ch]
                text-5xl
                sm:text-6xl
                md:text-7xl
                drop-shadow-[0_10px_30px_rgba(0,0,0,0.14)]
              "
            >
              <span className="block">I design scalable learning systems</span>
            </h1>
            <div className="mt-6 max-w-[62ch]">
              <p className="font-heading text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.12em] uppercase text-[var(--text)] opacity-80">
                Strategy · Storyline/Rise · Moodle · xAPI
              </p>
              <p className="mt-3 text-[var(--text)] opacity-75 text-lg leading-7">
                Strategy, Storyline/Rise builds, Moodle platforms and xAPI analytics - designed as one connected system.
              </p>
            </div>
            
            <div className="mt-7 md:mt-auto md:pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Link to="/services" className={viewSystemClass}>
                  See how I work
                </Link>
                <Link to="/contact" className={howIWorkClass}>
                  Book a 15-minute walkthrough
                </Link>
              </div>
            </div>

           
          </div>

        </div>

        
      </HeroShell>


   
      {/* TRUSTED BY */}
      <Section className="bg-[var(--bg-soft)] border-y border-black/5 dark:border-white/10">
        <Container className="pt-6 pb-8 md:pt-7 md:pb-9 fade-in-up">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text)] opacity-55">
            Trusted by education, government, health and corporate organisations
          </p>
          <div className="w-full max-w-[560px] mx-auto sm:max-w-none">
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 place-items-stretch sm:place-items-center">
              {clients.map((client) => (
                <div key={client.name} className="flex items-center justify-center w-full">
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

      {/* POSITIONING */}
      <Section className="bg-[var(--bg-soft)] !pt-6 md:!pt-10">
        <Container className="fade-in-up">
          <div className="rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/72 dark:bg-white/5 p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_18px_55px_rgba(2,6,23,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--text)] opacity-60">
                  The approach
                </span>
                <h2 className="mt-3 font-heading text-2xl md:text-3xl lg:text-4xl text-[var(--text)] max-w-[18ch]">
                  Learning works better when it is designed as a system.
                </h2>
              </div>

              <div>
                <p className="text-[var(--text)] opacity-75 leading-7 max-w-[64ch]">
                  I connect strategy, learner experience and analytics so learning is easier to build, scale and report.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "Strategy",
                    "Build",
                    "Measurement",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 text-sm font-semibold text-[var(--text)] text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FEATURED PROJECT */}
      <Section className="bg-[var(--bg-soft)] !pt-6 md:!pt-10">
        <Container className="fade-in-up">
          <div className="rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/72 dark:bg-white/5 p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden shadow-[0_18px_55px_rgba(2,6,23,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 items-start">
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--text)] opacity-60">
                  Featured project
                </span>
                <h2 className="mt-3 font-heading text-2xl md:text-3xl text-[var(--text)]">
                  Wellbeing Studio
                </h2>
                <p className="mt-4 text-[var(--text)] opacity-75 leading-7 max-w-[60ch]">
                  A premium wellbeing learning platform with custom onboarding, cohort-based access, replay libraries and scalable delivery for client organisations.
                </p>
                <div className="mt-6">
                  <Link to="/case-studies/wellbeing-studio" className={viewSystemClass}>
                    View case study
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-black/10 dark:border-white/10 bg-white/82 dark:bg-white/5 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
                <img
                  src={`${import.meta.env.BASE_URL}images/wellbeing-studio-pause-move-reset.jpg`}
                  alt="Wellbeing Studio platform preview"
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* DESIGN SYSTEM HIGHLIGHT */}

      <Section className="bg-[var(--bg-soft)] !pt-6 md:!pt-10">
        <Container className="fade-in-up">
          <div className="rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/72 dark:bg-white/5 p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden shadow-[0_18px_55px_rgba(2,6,23,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 items-start">
              <div>
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--text)] opacity-60">
                  Design system
                </span>
                <h2 className="mt-3 font-heading text-2xl md:text-3xl text-[var(--text)]">
                  The design system behind my work
                </h2>
                <p className="mt-4 text-[var(--text)] opacity-75 leading-7 max-w-[60ch]">
                  Reusable patterns, accessibility guidance and production-ready components designed to improve consistency and speed.
                </p>
                <div className="mt-6">
                  <Link to="/work/elearning-design-system" className={viewSystemClass}>
                    Explore the design system
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-black/10 dark:border-white/10 bg-white/82 dark:bg-white/5 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
                <img
                  src={`${import.meta.env.BASE_URL}images/design-system/glenn-hammond-site-assets-elearning-design-system.jpg`}
                  alt="eLearning Design System preview"
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section className="bg-[var(--bg-soft)] !pt-6 md:!pt-10 !pb-12 md:!pb-16">
        <Container className="fade-in-up">
          <div className="rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/72 dark:bg-white/5 p-6 sm:p-8 md:p-10 lg:p-12 text-center shadow-[0_18px_55px_rgba(2,6,23,0.08)]">
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--text)] opacity-60">
              Work with me
            </span>
            <h2 className="mt-3 mx-auto max-w-[18ch] font-heading text-3xl md:text-4xl text-[var(--text)]">
              Need a learning system that is easier to build, scale and report?
            </h2>
            <p className="mt-4 mx-auto max-w-[62ch] text-[var(--text)] opacity-75 leading-7">
              I can run you through the approach in 15 minutes and talk through the best starting point for your organisation.
            </p>
            <div className="mt-7 mx-auto max-w-[360px]">
              <Link to="/contact" className={viewSystemClass}>
                Book a 15-minute walkthrough
              </Link>
            </div>
          </div>
        </Container>
      </Section>



      {/* 
  FEATURED WORK
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
*/}
      
      {/* LATEST POSTS - temporarily hidden
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
      */}

    </PageWrapper>
  );
}

function ServiceCard({ title, text, items, icon, tag }) {
  return (
    <div className="rounded-[1.5rem] border border-black/10 dark:border-white/10 bg-white/82 dark:bg-white/5 p-7 md:p-8 space-y-4 shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition hover:-translate-y-[2px] hover:shadow-[0_18px_45px_rgba(2,6,23,0.10)] hover:border-[var(--brand-primary)]">
      <div className="space-y-1">
        <h3 className="font-heading text-xl text-[var(--text)]">{title}</h3>
        {tag && (
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-purple)]">
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
                className="absolute left-0 top-[0.12em] text-[0.95em] leading-none text-[var(--brand-purple)]"
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