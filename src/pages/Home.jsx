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
        title="Glenn Hammond - eLearning Specialist, Designer & Developer"
        description="I design and build modern learning systems - combining learning strategy, Moodle platforms, Storyline/Rise development, xAPI reporting, and AI-supported workflows."
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
  Award-winning<br />
  eLearning specialist
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
              <span className="block">Better learning by design</span>
            </h1>
            <div className="mt-6 max-w-[62ch]">
              <p className="font-heading text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.12em] uppercase text-[var(--text)] opacity-80">
                Strategy · platforms · courses · analytics
              </p>
              <p className="mt-3 text-[var(--text)] opacity-75 text-lg leading-7">
                I design and build modern learning systems for organisations that need more than a standard LMS. Combining learning strategy, Moodle and React platforms, Storyline/Rise development, xAPI reporting, and AI-supported workflows.
              </p>
            </div>
            
            <div className="mt-7 md:mt-auto md:pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Link to="/work" className={viewSystemClass}>
                  View work
                </Link>
                <Link to="/contact" className={howIWorkClass}>
                  Get in touch
                </Link>
              </div>
            </div>

           
            <div className="mt-7 hidden sm:grid md:hidden sm:grid-cols-3 gap-3">
              <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm p-4">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-600">Premium craft</p>
                <p className="mt-2 text-sm text-slate-800 leading-6">Clean UX, refined typography, and interaction patterns that feel right.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm p-4">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-600">Evidence-informed</p>
                <p className="mt-2 text-sm text-slate-800 leading-6">Evidence-informed decisions - clarity, retrieval practice, and reduced load.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm p-4">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-600">Production-ready</p>
                <p className="mt-2 text-sm text-slate-800 leading-6">Reusable components, accessibility, and builds that are easy to maintain.</p>
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
A branded wellbeing learning platform designed for real-world rollout - including custom onboarding, cohort-based access, premium UX, reporting pathways, and scalable delivery for client organisations.                </p>
                <div className="mt-6">
                  <Link to="/case-studies/wellbeing-studio" className={viewSystemClass}>
                    View project
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

      
      {/* SERVICES PREVIEW */}
      <Section className="bg-[var(--bg-soft)] !pt-6 md:!pt-12">
        <Container className="fade-in-up">
          <div className="rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/72 dark:bg-white/5 p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_18px_55px_rgba(2,6,23,0.08)]">
            <div className="space-y-8">
              <div className="space-y-3 max-w-[70ch]">
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--text)] opacity-60">
                  What I do
                </span>
                <h2 className="font-heading text-2xl text-[var(--text)]">
                  Learning systems that are clear, scalable and built to work
                </h2>
                <p className="text-sm text-[var(--text)] opacity-70 leading-7">
                  I help organisations design the whole learning experience - from strategy and platform structure through to course builds, learner journeys, reporting and ongoing improvement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <ServiceCard
                  title="Learning strategy"
                  items={[
                    "Define what learners need to do differently, not just what they need to know",
                    "Shape course direction, learner journeys, scenarios and review checkpoints",
                    "Turn dense SME content into practical learning that supports better decisions",
                  ]}
                />
                <ServiceCard
                  title="Learning platforms"
                  items={[
                    "Design Moodle structures that make access, navigation and delivery feel simple",
                    "Build custom registration, cohort access and client-ready delivery workflows",
                    "Create branded learning environments that feel polished, purposeful and maintainable",
                  ]}
                />
                <ServiceCard
                  title="Analytics & improvement"
                  items={[
                    "Design xAPI statements and tracking plans around meaningful learner actions",
                    "Set up LRS workflows, QA checks and reporting pathways so data is trustworthy",
                    "Create dashboards and review cycles that help improve the learning, not just count completions",
                  ]}
                />
              </div>

              <Link
                to="/services"
                className="text-sm text-[var(--link)] hover:text-[var(--link-hover)] hover:underline inline-block font-heading"
              >
                See how I can help →
              </Link>
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
                  A practical kit for modern eLearning - designed to keep the focus on people, not process. Built from reusable patterns, accessibility guidance, and production-ready components.
                </p>
                <div className="mt-6">
                  <Link to="/work/elearning-design-system" className={viewSystemClass}>
                    View the system
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