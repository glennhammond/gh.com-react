// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

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
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <PageWrapper>
      <SEO
        title="Glenn Hammond - eLearning Specialist, Designer & Developer"
        description="Modern, evidence-informed learning design, Storyline development, xAPI analytics, and high-quality media for organisations."
        url="https://glennhammond.com/"
      />

        {/* HERO */}
      <Section noPadding className="bg-[var(--bg)]">
<Container className="pt-12 pb-14 min-h-[calc(100svh-4rem)] md:min-h-[76vh] md:pt-16 md:pb-24 flex items-start md:items-center">
          <div
            className="
              w-full
              h-full
              grid grid-cols-1 md:grid-cols-2
              gap-14 items-center
              fade-in-up
            "
          >
            {/* Left */}
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-7 w-full sm:w-[420px]">
              <div className="inline-flex items-center gap-3 mb-4">
                <span aria-hidden="true">🏆</span>
                <span className="text-sm font-semibold tracking-[0.18em] uppercase text-[var(--text-muted)] whitespace-nowrap">
                  Award-winning eLearning
                </span>
              </div>

           <h1
  className="
    font-heading
    font-semibold
    text-[2.75rem] md:text-[3.5rem]
    leading-[0.94]
    tracking-[-0.03em] md:tracking-[-0.035em]
    text-[var(--brand-primary)]
  "
>
  <span className="block">Better Learning</span>
  <span className="block">by Design</span>
</h1>

              <div className="space-y-5">
                <p className="text-[var(--text)]/75 leading-relaxed">
                  Repeatable learning frameworks - consistent structure, UX and production process.
                </p>
                <p className="text-[var(--text)]/75 leading-relaxed">
                  I apply this across instructional design, Storyline/Rise builds, media production, and xAPI analytics - to keep learning clear to navigate and easier to maintain.
                </p>
              </div>

              </div>

              {/* CTAs */}
<div className="mt-0 pt-16 pb-0 md:mt-auto md:pt-14 md:pb-0 w-full sm:w-[420px] flex flex-col items-stretch gap-5 sm:gap-6">
                {/* Primary - solid magenta */}
                <Link
                  to="/work"
                  className="
  font-heading
  inline-flex items-center justify-center
  w-full sm:w-[420px]
  px-12 md:px-16
  py-4 md:py-5
  text-base md:text-lg font-semibold
  rounded-xl
  bg-[#F5C84C]
  text-[#3a0028]
  shadow-[0_18px_45px_rgba(0,0,0,0.22)]
  transition
  hover:-translate-y-0.5
  hover:bg-[#E6B83F]
  hover:shadow-[0_22px_60px_rgba(0,0,0,0.28)]
  active:translate-y-0
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-white/80
"
                >
                  View some work
                </Link>

                {/* Secondary - magenta outline */}
                <Link
                  to="/contact"
                  className="
  font-heading
  inline-flex items-center justify-center
  w-full sm:w-[420px]
  px-12 md:px-16
  py-4 md:py-5
  text-base md:text-lg font-semibold
  rounded-xl
  border border-[#F5C84C]/70
  bg-white/10
  text-[#F5C84C]
  backdrop-blur-sm
  shadow-[0_12px_30px_rgba(0,0,0,0.12)]
  transition
  hover:-translate-y-0.5
  hover:bg-white/16
  hover:border-[#F5C84C]
  active:translate-y-0
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-[#F5C84C]
"
                >
                  Get in touch
                </Link>
              </div>

            </div>

            {/* Right - featured project card (desktop) */}
            <div className="hidden md:block md:mt-6">
              <Link
                to="/work/elearning-design-system"
                className="group relative block w-full overflow-hidden rounded-3xl bg-white ring-1 ring-black/10 shadow-[0_28px_90px_rgba(2,6,23,0.22)] transition hover:-translate-y-1 hover:shadow-[0_36px_120px_rgba(2,6,23,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary)]/40"
              >
                <img
                  src="/images/portfolio-elearning-design-system.jpg"
                  alt="eLearning Design System preview"
                  className="w-full h-auto block"
                />

                <div
                  className="p-7 border-t border-black/5 bg-gradient-to-b from-white via-white to-slate-50"
                  style={{
                    backgroundColor: "#ffffff",
                    backgroundImage:
                      "radial-gradient(900px circle at 12% -12%, rgba(30,58,138,0.10), transparent 55%), radial-gradient(700px circle at 112% 8%, rgba(236,72,153,0.10), transparent 55%)",
                  }}
                >
                  <p className="text-xs font-bold tracking-[0.18em] uppercase text-slate-600">
                    Featured
                  </p>

                  <h3 className="mt-3 font-heading text-2xl md:text-3xl font-semibold leading-tight text-[#1E3A8A]">
                    eLearning Design System
                  </h3>

                  <p className="mt-3 text-[1.05rem] leading-relaxed text-slate-700">
                    Templates, components and patterns for faster, more predictable builds.
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    Built for smoother production and fewer fixes - UI patterns, templates, and ready-to-use assets.
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-heading text-[var(--secondary)] group-hover:opacity-90">
                    Explore project <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mobile: eLearning Design System card (below hero) */}
      <Section noPadding className="bg-[var(--bg)] md:hidden">
        <Container className="pt-3 pb-8">
          <Link
            to="/work/elearning-design-system"
            className="group block w-full overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_22px_70px_rgba(2,6,23,0.20)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_95px_rgba(2,6,23,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary)]/40"
          >
            <img
              src="/images/portfolio-elearning-design-system.jpg"
              alt="eLearning Design System preview"
              className="w-full h-auto block"
            />
            <div className="p-5 border-t border-black/5 bg-gradient-to-b from-white via-white to-slate-50">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-slate-600">
                Featured
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-[#1E3A8A]">
                eLearning Design System
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Templates, components and patterns for faster, more predictable builds.
              </p>
              <span className="mt-3 inline-flex text-sm font-heading text-[var(--secondary)]">
                Explore project →
              </span>
            </div>
          </Link>
        </Container>
      </Section>

      {/* CLIENT LOGOS */}
      <Section className="bg-[var(--bg-soft)] border-y border-black/5 dark:border-white/10">
        <Container className="py-6 md:py-8 fade-in-up">
<div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 place-items-center">
            {clients.map((client) => (
              <div
                key={client.name}
                className={`w-full flex items-center justify-center ${client.wrapperClass || ""}`}
              >
                <div className="w-[320px] md:w-[260px] lg:w-[240px] flex items-center justify-center">
                  <img
                    src={client.lightSrc}
                    alt={client.name}
                    className={`w-full h-12 opacity-90 object-contain dark:hidden ${
                      client.className || ""
                    }`}
                  />
                  <img
                    src={client.darkSrc}
                    alt={client.name}
                    className={`w-full h-12 opacity-90 object-contain hidden dark:block ${
                      client.className || ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.18em] text-white/70">
              Services
            </span>
            <h2 className="font-heading text-2xl text-[var(--text)]">What I do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard
              title="Consultancy & instructional design"
              tag="Strategy"
              items={[
                "Discovery, needs analysis, and learning strategy",
                "Curriculum design, storyboards, and scenario writing",
                "Stakeholder alignment and quality assurance",
              ]}
            />
            <ServiceCard
              title="eLearning & media development"
              tag="Build"
              items={[
                "Storyline/Rise builds with strong UX and accessibility",
                "Reusable templates, components, and design systems",
                "Video production, editing, and microlearning assets",
              ]}
            />
            <ServiceCard
              title="xAPI & learning analytics"
              tag="Data"
              items={[
                "xAPI implementation, debugging, and statement design",
                "Veracity/Learning Locker setup and reporting workflows",
                "Dashboards that turn learning data into insight",
              ]}
            />
          </div>

          <Link
            to="/services"
            className="text-sm text-[var(--secondary)] hover:text-white hover:underline inline-block font-heading"
          >
            View all services →
          </Link>
        </Container>
      </Section>

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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="
                  rounded-2xl border border-black/10 bg-white
                  p-6 space-y-3 hover:-translate-y-1 hover:shadow-md
                  hover:border-[var(--brand-primary)] transition
                "
              >
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-slate-600">
                  {post.date && <span>{post.date}</span>}
                  {post.category && (
                    <span className="inline-flex items-center rounded-full border border-black/10 px-2 py-0.5">
                      {post.category}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-lg text-slate-900">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-700">{post.summary}</p>
                <span className="text-sm font-heading text-[var(--secondary)]">
                  Read more →
                </span>
              </Link>
            ))}
          </div>

          <Link
            to="/blog"
            className="text-sm text-[var(--secondary)] hover:opacity-90 hover:underline inline-block font-heading"
          >
            View all posts →
          </Link>
        </Container>
      </Section>

      {/* FEATURED WORK */}
      <Section>
        <Container className="space-y-10 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Featured work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="rounded-2xl border border-black/10 bg-white overflow-hidden shadow-xl transition hover:-translate-y-[2px] hover:shadow-2xl dark:border-black/10 dark:bg-white"
              >
                <ProjectImage src={project.image} alt={project.title} />
                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-xl text-[#1E3A8A]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-700">
                    {project.subtitle}
                  </p>
                  <span className="text-sm font-heading text-[var(--secondary)]">
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
    </PageWrapper>
  );
}

function ServiceCard({ title, text, items, icon, tag }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-8 space-y-4 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[var(--secondary)] transition">
      <div className="space-y-1">
        <h3 className="font-heading text-xl text-slate-900">{title}</h3>
        {tag && (
          <span className="inline-flex items-center rounded-full border border-black/10 px-3 py-0.5 text-[11px] uppercase tracking-[0.18em] text-slate-600">
            {tag}
          </span>
        )}
      </div>

      {items?.length ? (
        <ul className="space-y-3 text-sm text-slate-700">
          {items.map((item) => (
            <li key={item} className="relative pl-6">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-slate-700">{text}</p>
      )}
    </div>
  );
}