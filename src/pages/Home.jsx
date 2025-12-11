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

// Client logos (make sure these paths match your files in /public/images/logos)
const clients = [
  {
    name: "Independent Schools Queensland",
    src: "/images/logos/logo-independent-schools-queensland.png",
    className: "scale-110", // subtle size boost
  },
  {
    name: "Torres and Cape Hospital and Health Service",
    // ensure the filename matches this (including spaces & caps)
    src: "/images/logos/logo-Torres and Cape Hospital and Health Service.png",
  },
  {
    name: "Civil Aviation Safety Authority",
    src: "/images/logos/logo-casa_1.png",
  },
  {
    name: "Seqwater",
    src: "/images/logos/logo-seqwater.png",
  },
  {
    name: "TAFE Queensland",
    src: "/images/logos/logo-tafe-queensland.png",
  },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <PageWrapper>
      <SEO
        title="Glenn Hammond — eLearning Specialist, Designer & Developer"
        description="Modern, evidence-informed learning design, Storyline development, xAPI analytics, and high-quality media for organisations."
        url="https://glennhammond.com/"
      />

      {/* HERO */}
      <Section noPadding className="bg-[var(--bg)]">
        <Container className="min-h-[72vh] md:min-h-[76vh] pt-12 pb-16 md:pt-16 md:pb-24 flex items-center">
          <div
            className="
              w-full
              grid grid-cols-1 md:grid-cols-2
              gap-14 items-center
              fade-in-up
            "
          >
            {/* Left */}
            <div className="space-y-8">
              <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3">
                🏆 Award-winning eLearning
              </p>
          <h1
  className="
    font-heading
    text-[2.75rem] md:text-[3.5rem]
    leading-tight
    tracking-[-0.03em] md:tracking-[-0.035em]
    text-[var(--brand-primary)]
  "
>
  Better Learning by Design
</h1>
              <p className="text-[var(--text)]/75 max-w-md leading-relaxed">
                I design digital learning experiences. Instructional design,
                eLearning production and learning analytics.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
                {/* Primary – solid magenta */}
                <Link
                  to="/work"
                  className="
                    font-heading
                    inline-flex items-center justify-center
                    w-full sm:w-auto
                    px-12 md:px-16
                    py-4 md:py-5
                    min-w-[240px]
                    text-base md:text-lg font-semibold
                    rounded-2xl
                    bg-[var(--brand-primary)]
                    text-white
                    shadow-sm
                    hover:bg-[#7b0053]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-offset-2
                    focus-visible:ring-[var(--brand-primary)]
                  "
                >
                  View some work
                </Link>

                {/* Secondary – magenta outline */}
                <Link
                  to="/contact"
                  className="
                    font-heading
                    inline-flex items-center justify-center
                    w-full sm:w-auto
                    px-12 md:px-16
                    py-4 md:py-5
                    min-w-[240px]
                    text-base md:text-lg font-semibold
                    rounded-2xl
                    border border-[var(--brand-primary)]
                    text-[var(--brand-primary)]
                    bg-white
                    hover:bg-[#fdf4fb]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-offset-2
                    focus-visible:ring-[var(--brand-primary)]
                  "
                >
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Right – feature panel with clickable card */}
            <div
              className="
                relative
                rounded-[32px]
                bg-[var(--bg-soft)]
                border border-black/5 dark:border-white/10
                shadow-[0_24px_80px_rgba(15,23,42,0.16)]
                p-4 md:p-5
              "
            >
              <Link
                to="/work/elearning-design-system"
                className="
                  group block rounded-2xl border border-black/5 dark:border-white/10
                  bg-white dark:bg-[#020617] shadow-sm overflow-hidden
                  hover:-translate-y-[2px] hover:shadow-md transition
                "
              >
                {/* Image */}
                <img
                  src="/images/portfolio-elearning-design-system.jpg"
                  alt="eLearning Design System preview"
                  className="w-full h-auto block"
                />

                {/* Text content */}
                <div className="px-5 py-4">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-[var(--text)] mb-2">
                    eLearning Design System
                  </h3>
                  <p className="text-sm text-[var(--text)]/70 mb-3">
                    A reusable eLearning design system – templates, components
                    and assets for faster, more consistent builds.
                  </p>
                  <span className="text-sm font-heading text-[var(--accent)] group-hover:text-[var(--accent-strong)] inline-flex items-center gap-1">
                    Explore project →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* CLIENT LOGOS */}
      <Section className="bg-white">
        <Container className="py-6 md:py-8 fade-in-up">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center basis-auto"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className={`h-8 md:h-9 lg:h-10 opacity-70 object-contain ${
                    client.className || ""
                  }`}
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/50">
              Services
            </span>
            <h2 className="font-heading text-2xl text-[var(--text)]">
              What I do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard
              title="eLearning design"
              text="Instructional design, Storyline development, scenario writing, and learning systems."
              icon="SL"
              tag="Courses"
            />
            <ServiceCard
              title="xAPI & analytics"
              text="xAPI strategy, debugging, Veracity/Learning Locker setup, and dashboards that reveal insight."
              icon="⨉"
              tag="Data"
            />
            <ServiceCard
              title="Video & media"
              text="Interview filming, microlearning content, editing, colour grading, and audio mastering."
              icon="▶"
              tag="Media"
            />
          </div>

          <Link
            to="/services"
            className="text-sm text-[var(--brand-primary)] hover:underline inline-block font-heading"
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
                  rounded-2xl border border-black/10 bg-white/95
                  p-6 space-y-3 hover:-translate-y-1 hover:shadow-md
                  hover:border-[var(--brand-primary)] transition
                "
              >
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[var(--text)]/60">
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
                <p className="text-sm text-[var(--text)]/70">
                  {post.summary}
                </p>
                <span className="text-sm font-heading text-[var(--brand-primary)]">
                  Read more →
                </span>
              </Link>
            ))}
          </div>

          <Link
            to="/blog"
            className="text-sm text-[var(--brand-primary)] hover:underline inline-block font-heading"
          >
            View all posts →
          </Link>
        </Container>
      </Section>

      {/* FEATURED WORK */}
      <Section>
        <Container className="space-y-10 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            eLearning Design System
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="rounded-3xl border border-black/10 bg-[var(--bg)] overflow-hidden hover:-translate-y-[2px] hover:shadow-md transition"
              >
                <ProjectImage src={project.image} alt={project.title} />
                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-xl text-[var(--text)]">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-75 text-[var(--text)]/80">
                    {project.subtitle}
                  </p>
                  <span className="text-sm text-[var(--brand-primary)]">
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

function ServiceCard({ title, text, icon, tag }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/95 p-8 space-y-4 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[var(--brand-primary)] transition">
      <div className="flex items-center gap-3">
        {icon && (
          <div className="h-10 w-10 rounded-full bg-[var(--brand-primary-soft)] flex items-center justify-center text-[var(--brand-primary)] text-lg font-heading">
            {icon}
          </div>
        )}
        <div className="space-y-1">
          <h3 className="font-heading text-xl text-[var(--text)]">{title}</h3>
          {tag && (
            <span className="inline-flex items-center rounded-full border border-black/10 px-3 py-0.5 text-[11px] uppercase tracking-[0.18em] text-[var(--text)]/60">
              {tag}
            </span>
          )}
        </div>
      </div>

      <p className="text-sm opacity-75 text-[var(--text)]/80">{text}</p>
    </div>
  );
}