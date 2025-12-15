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
<Container className="pt-12 pb-10 md:pt-12 md:pb-10 lg:pt-14 lg:pb-12 flex flex-col items-start">
          {/* Full-width badge row above cards */}
          <div className="w-full max-w-[560px] mx-auto mb-6 md:mb-8 md:max-w-none md:mx-0">
            <div className="flex w-full items-center gap-3">
              <span aria-hidden="true">🏆</span>
              <span className="text-sm font-semibold tracking-[0.18em] uppercase text-white/80">
                Award-winning eLearning
              </span>
            </div>
          </div>
          <div
            className="
              w-full
              h-full
              grid grid-cols-1
              gap-14
              items-center
              fade-in-up
              md:grid-cols-2
              md:gap-12
              md:items-start
            "
          >
            {/* Left */}
            <div className="w-full max-w-[560px] mx-auto md:mx-0">
              <h1
                className="
                  font-heading
                  text-white
                  font-semibold
                  tracking-tight
                  leading-[0.9]
                  max-w-[16ch]
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                "
              >
                <span className="block">Better Learning</span>
                <span className="block">by Design</span>
              </h1>
              <p className="mt-6 max-w-[46ch] text-white/80 text-lg leading-7">
                Clear learning systems - consistent structure, UX and production process.
              </p>
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
                    <p className="text-slate-700 leading-7">
                      I apply this across instructional design, Storyline/Rise builds, media production, and xAPI analytics - to keep learning clear to navigate and easier to maintain.
                    </p>
                  </div>

                  <div className="mt-7 flex flex-col items-stretch gap-4">
                    <Link
                      to="/work"
                      className="
                        font-heading
                        inline-flex items-center justify-center
                        w-full
                        py-4
                        text-base font-semibold
                        rounded-xl
                        bg-[#F5C84C]
                        text-[#3a0028]
                        shadow-[0_14px_34px_rgba(0,0,0,0.20)]
                        transition
                        hover:bg-[#E6B83F]
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-black/20
                      "
                    >
                      View some work
                    </Link>

                    <Link
                      to="/contact"
                      className="
                        font-heading
                        inline-flex items-center justify-center
                        w-full
                        py-4
                        text-base font-semibold
                        rounded-xl
                        border border-slate-900/15
                        bg-white
                        text-slate-900
                        transition
                        hover:bg-slate-50
                        hover:border-slate-900/25
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-black/20
                      "
                    >
                      Get in touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - CTA card (desktop) */}
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
                <div className="space-y-4">
                  <p className="text-slate-700 leading-7">
                    I apply this across instructional design, Storyline/Rise builds, media production, and xAPI analytics - to keep learning clear to navigate and easier to maintain.
                  </p>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col items-stretch gap-5 sm:gap-6">
                  {/* Primary - solid */}
                  <Link
                    to="/work"
                    className="
                      font-heading
                      inline-flex items-center justify-center
                      w-full
                      px-12 md:px-16
                      py-4 md:py-5
                      text-base md:text-lg font-semibold
                      rounded-xl
                      bg-[#F5C84C]
                      text-[#3a0028]
                      shadow-[0_18px_45px_rgba(0,0,0,0.22)]
                      transition
                      hover:bg-[#E6B83F]
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-black/20
                    "
                  >
                    View some work
                  </Link>

                  {/* Secondary - outline */}
                  <Link
                    to="/contact"
                    className="
                      font-heading
                      inline-flex items-center justify-center
                      w-full
                      px-12 md:px-16
                      py-4 md:py-5
                      text-base md:text-lg font-semibold
                      rounded-xl
                      border border-slate-900/15
                      bg-white
                      text-slate-900
                      transition
                      hover:bg-slate-50
                      hover:border-slate-900/25
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-black/20
                    "
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>


      {/* CLIENT LOGOS */}
      <Section className="bg-[var(--bg-soft)] border-y border-black/5 dark:border-white/10 -mt-4 md:-mt-6">
        <Container className="py-4 md:py-6 fade-in-up">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-10 place-items-center">
            {clients.map((client) => (
              <div key={client.name} className="w-full flex items-center justify-center">
                {/*
                  Normalise how SVG logos scale across breakpoints:
                  - fixed visual height for the logo box
                  - let width be auto (prevents weird full-width scaling)
                  - cap max width so long wordmarks don't dominate
                */}
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={client.lightSrc}
                    alt={client.name}
                    className={`h-12 w-auto max-w-[280px] md:max-w-[240px] lg:max-w-[220px] object-contain opacity-90 block dark:hidden ${
                      client.className || ""
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={client.darkSrc}
                    alt={client.name}
                    className={`h-12 w-auto max-w-[280px] md:max-w-[240px] lg:max-w-[220px] object-contain opacity-90 block hidden dark:block ${
                      client.className || ""
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FEATURED PROJECT ROW */}
      <Section noPadding className="bg-[var(--bg)]">
        <Container className="pt-10 pb-10 md:pt-12 md:pb-14">
          <Link
            to="/work/elearning-design-system"
            className="
              block w-full
              overflow-hidden
              rounded-2xl
              ring-1 ring-white/10
              bg-white/5
              shadow-[0_28px_90px_rgba(2,6,23,0.18)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[var(--secondary)]/40
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/60">
                  Glenn Hammond · eLearning Design System
                </p>
                <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold leading-tight text-white max-w-[22ch]">
                  eLearning Design System for modern professional learning
                </h2>
                <p className="mt-4 text-white/75 leading-7 max-w-[68ch]">
                  A reusable eLearning design system built to speed up course builds, improve consistency, and support WCAG-aligned layouts across Storyline, Rise, and H5P.
                </p>
                <p className="mt-6 text-xs font-semibold tracking-[0.18em] uppercase text-white/45">
                  Role: System architect · Lead eLearning specialist · Visual design · Governance
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-heading text-white/90">
                  View project <span aria-hidden>→</span>
                </div>
              </div>
              <div className="bg-white/6 md:bg-white/8 p-8 md:p-10 flex items-center justify-center">
                <img
                  src="/images/portfolio-elearning-design-system.jpg"
                  alt="eLearning Design System preview"
                  className="w-full max-w-[560px] h-auto block rounded-xl ring-1 ring-black/10"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </Link>
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