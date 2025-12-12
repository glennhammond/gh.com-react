import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import PageIntro from "../../components/layout/PageIntro";
import SEO from "../../components/ui/SEO.jsx";

function MetaItem({ label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-sm text-slate-900 dark:text-white">{value}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-5">
      <p className="font-heading text-3xl text-[var(--brand-primary)] leading-none">
        {value}
      </p>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{label}</p>
    </div>
  );
}

export default function FlightExaminerRatingCourse() {
  const project = {
    title: "CASA - Flight Examiner Rating Course",
    subtitle:
      "End-to-end learning design and build for a high-stakes aviation assessment programme.",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
      { label: "CASA - Flight Examiner Rating Course" },
    ],
    heroImage: "/images/work/glenn-hammond-site-assets-casa-course-cover.jpg",
    meta: [
      { label: "Role", value: "Instructional Design Lead" },
      { label: "Organisation", value: "CASA" },
      { label: "Tools", value: "Storyline, UI system, LMS" },
      { label: "Year", value: "202X" },
    ],
    highlights: [
      "Built a reusable, polished course UI system",
      "Structured complex content into a clear learning flow",
      "Designed for consistency, accessibility, and maintainability",
    ],
    brief: {
      problem:
        "Deliver a high-trust digital learning experience that supports assessment readiness and consistent delivery.",
      audience: "Aviation professionals (flight examiners and candidates).",
      constraints:
        "High accuracy, clean UX, stakeholder review cycles, and reliable LMS behaviour.",
    },
    approach: [
      {
        title: "Discover",
        text: "Clarified outcomes, assessment requirements, and constraints.",
      },
      {
        title: "Design",
        text: "Mapped structure, UI patterns, and screen behaviours.",
      },
      {
        title: "Build",
        text: "Produced screens, interactions, and media-ready assets.",
      },
      {
        title: "Iterate",
        text: "Refined based on reviews and implementation feedback.",
      },
    ],
    results: [
      { value: "Template", label: "Reusable UI system for consistent delivery" },
      { value: "Cleaner UX", label: "Reduced cognitive load in dense content" },
      { value: "Ready", label: "Production-ready assets and patterns" },
    ],
    screens: [
      {
        src: "/images/work/glenn-hammond-site-assets-casa-course-template-3.png",
        title: "Readable content layout",
        text: "Typography and spacing tuned for dense information - with strong hierarchy and generous breathing room.",
      },
      {
        src: "/images/work/glenn-hammond-site-assets-casa-course-template-4.png",
        title: "Interaction patterns",
        text: "Reusable interaction components to keep behaviour predictable while still feeling modern.",
      },
      {
        src: "/images/work/glenn-hammond-site-assets-casa-class-lms-design-and-development.jpg",
        title: "LMS integration",
        text: "Built to sit cleanly inside an LMS and remain maintainable for future updates.",
      },
    ],
    next: { label: "Next project", href: "/work/corporate-yoga-australia-website" },
  };

  return (
    <PageWrapper>
      <SEO
        title={`${project.title} - Work - Glenn Hammond`}
        description={project.subtitle}
      />

      {/* HERO */}
      <Section className="pt-10 md:pt-14 pb-6 md:pb-10">
        <Container>
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-start">
            <div className="space-y-10">
              <PageIntro
                breadcrumb={project.breadcrumb}
                title={project.title}
                subtitle={project.subtitle}
              />

              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
                <h2 className="font-heading text-xl text-[var(--brand-primary)]">
                  Highlights
                </h2>
                <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              {/* Hero image (no card styling, smaller radius) */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.heroImage}
                  alt=""
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>

              {/* Meta cards (separate block under the image) */}
              <div className="mt-8 md:mt-10 grid grid-cols-2 gap-3">
                {project.meta.map((m) => (
                  <MetaItem key={m.label} label={m.label} value={m.value} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* KEY SCREENS */}
      <Section className="pt-4 md:pt-0 pb-12">
        <Container>
          <div className="grid gap-10 divide-y divide-black/5 dark:divide-white/10">
            {project.screens.map((s, idx) => {
              const flip = idx % 2 === 1;
              return (
                <div
                  key={s.src}
                  className="pt-10 pb-10 md:pt-14 md:pb-14 first:pt-0 md:first:pt-0 grid gap-8 md:gap-10 md:grid-cols-12 items-start"
                >
                  <div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
                    <div className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 shadow-sm">
                      <div className="aspect-[16/9]">
                        <img
                          src={s.src}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {String(idx + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl leading-tight text-slate-900 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300 max-w-prose">
                      {s.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* BRIEF */}
      <Section className="py-10">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
              <h3 className="font-heading text-lg text-[var(--brand-primary)]">
                The brief
              </h3>
              <p className="mt-3 text-slate-700 dark:text-slate-300">
                {project.brief.problem}
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
              <h3 className="font-heading text-lg text-[var(--brand-primary)]">
                Audience
              </h3>
              <p className="mt-3 text-slate-700 dark:text-slate-300">
                {project.brief.audience}
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
              <h3 className="font-heading text-lg text-[var(--brand-primary)]">
                Constraints
              </h3>
              <p className="mt-3 text-slate-700 dark:text-slate-300">
                {project.brief.constraints}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* APPROACH */}
      <Section className="py-10">
        <Container>
          <h2 className="font-heading text-2xl text-[var(--brand-primary)]">
            Approach
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.approach.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6"
              >
                <h3 className="font-heading text-lg text-slate-900 dark:text-white">
                  {a.title}
                </h3>
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* RESULTS */}
      <Section className="py-10">
        <Container>
          <h2 className="font-heading text-2xl text-[var(--brand-primary)]">
            Results
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {project.results.map((r) => (
              <Stat key={r.label} value={r.value} label={r.label} />
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between">
            <Link
              to="/work"
              className="text-sm hover:text-[var(--brand-primary)] transition-colors"
            >
              ← Back to Work
            </Link>
            <Link
              to={project.next.href}
              className="text-sm hover:text-[var(--brand-primary)] transition-colors"
            >
              {project.next.label} →
            </Link>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}