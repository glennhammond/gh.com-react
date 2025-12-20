import React from "react";

import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import PageHero from "../../components/layout/PageHero";
import SEO from "../../components/ui/SEO.jsx";

function MetaItem({ label, value }) {
  return (
    <div className="h-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4 !transform-none !transition-none flex flex-col">
      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-sm text-slate-900 dark:text-white">{value}</p>
    </div>
  );
}

export default function FlightExaminerRatingCourse() {
  const project = {
    title: "CASA - Flight Examiner Rating Course",
    subtitle:
      "I led the end-to-end learning design and build for CASA’s Flight Examiner Rating Course (FERC) - a facilitated, competency-based programme aligned to CASR Part 61 MOS.",
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
    gallery: [
      {
        src: "/images/work/glenn-hammond-site-assets-casa-course-template-3.png",
        alt: "Readable content layout screen",
      },
      {
        src: "/images/work/glenn-hammond-site-assets-casa-course-template-4.png",
        alt: "Interaction patterns screen",
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

      {/* PAGE HERO */}
      <PageHero
        breadcrumb={project.breadcrumb}
        title={project.title}
        right={
          <div className="hidden lg:block max-w-xl ml-auto">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
              <img
                src={project.heroImage}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        }
        introClassName="mt-6 space-y-6"
      >
        <p className="text-base md:text-lg leading-relaxed text-neutral-700/90 dark:text-white/80 max-w-2xl">
          {project.subtitle}
        </p>
      </PageHero>

      {/* HERO SUPPORTING CONTENT */}
      <Section className="pt-0 md:pt-4 pb-10 md:pb-14">
        <Container>
          <div className="grid gap-10 md:gap-12">
            {/* Highlights + Meta */}
            <div className="grid gap-6 md:grid-cols-12 items-stretch">
              <div className="md:col-span-7">
                <div className="h-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
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

              <div className="md:col-span-5 h-full">
                <div className="grid w-full h-full grid-cols-2 grid-rows-2 gap-3">
                  {project.meta.map((m) => (
                    <MetaItem key={m.label} label={m.label} value={m.value} />
                  ))}
                </div>
              </div>
            </div>

            {/* Image strip */}
            <div className="grid gap-3 sm:grid-cols-2">
              {project.gallery.map((img) => (
                <div
                  key={img.src}
                  className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 shadow-sm"
                >
                  <div className="aspect-[16/10]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bridge copy */}
            <div className="grid gap-6 md:grid-cols-12 items-start">
              <div className="md:col-span-7">
                <h2 className="font-heading text-2xl text-[var(--text)]">
                  What this project involved
                </h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-neutral-700/90 dark:text-white/80 max-w-prose">
                  This programme needed to feel confident and uncluttered while still carrying a lot of detail.
                  I shaped the learning flow, designed a reusable screen system, and built interactions that stay predictable
                  across modules - so learners can focus on the content, not the interface.
                </p>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-wide text-[var(--text)]/60">
                    Focus areas
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-700/90 dark:text-white/80">
                    <li>Information design for dense, regulated content</li>
                    <li>Consistent UI patterns and interaction behaviour</li>
                    <li>Accessibility-first layout and typography decisions</li>
                    <li>LMS-friendly build practices for maintainability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}