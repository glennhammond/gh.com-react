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
  },
  {
    name: "Torres and Cape Hospital and Health Service",
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
<Container className="min-h-[70vh] md:min-h-[72vh] py-8 md:py-10 flex items-center">         <div
            className="
              w-full
              grid grid-cols-1 md:grid-cols-2
              gap-14 items-center
              fade-in-up
              -mt-4 md:-mt-6
            "
          >
            {/* Left */}
            <div className="space-y-8">
              <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3">
                🏆 Award-winning eLearning
              </p>
              <h1 className="font-heading text-5xl md:text-6xl leading-tight text-[var(--text)] font-semibold">
                Better Learning by Design
              </h1>
              <p className="text-[var(--text)]/75 max-w-md leading-relaxed">
                I design digital learning experiences. Instructional design,
                eLearning production and learning analytics.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/work"
                  className="
                    px-6 py-3 rounded-xl
                    bg-[var(--brand-primary)] text-white border border-[var(--brand-primary)]
                    shadow-sm hover:bg-[var(--brand-primary-dark)] hover:-translate-y-0.5
                    inline-flex items-center gap-2 text-sm font-medium font-heading transition
                  "
                >
                  View some work
                </Link>

                <Link
                  to="/contact"
                  className="
                    px-6 py-3 rounded-xl
                    border border-[var(--brand-primary)] text-[var(--brand-primary)]
                    bg-[var(--bg)] hover:bg-[var(--brand-primary-soft)]
                    text-sm font-medium font-heading transition
                  "
                >
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Right – feature panel with clickable card */}
            <div className="rounded-3xl border border-[#CFD8EC] bg-[#E8F1FF] p-3 md:p-4 shadow-sm">
              <Link
                to="/work/elearning-design-system"
                className="
                  group block rounded-2xl border border-black/10
                  bg-white shadow-sm overflow-hidden
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
                <div className="p-6">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-[var(--text)] mb-2">
                    eLearning Design System
                  </h3>
                  <p className="text-sm text-[var(--text)]/70 mb-3">
                    A reusable eLearning design system – templates, components
                    and assets for faster, more consistent builds.
                  </p>
                  <span className="text-sm font-medium font-heading text-[var(--brand-primary)] group-hover:text-[var(--brand-primary-dark)]">
                    Explore project →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* CLIENT LOGOS */}
      <Section className="-mt-4 md:-mt-6 bg-white">
        <Container className="pt-6 md:pt-8 fade-in-up">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-8 md:grid-cols-5 md:gap-x-10 md:gap-y-0">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex h-16 items-center justify-center opacity-70 hover:opacity-100 transition"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-10 w-auto max-w-[180px] object-contain"
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