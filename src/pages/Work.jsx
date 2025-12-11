// src/pages/Work.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import PageIntro from "../components/layout/PageIntro";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SEO from "../components/ui/SEO.jsx";

export default function Work() {
  return (
    <PageWrapper>
      <SEO
        title="Work – Glenn Hammond"
        description="Selected work spanning aviation, education, and experimental eLearning prototypes."
      />

      {/* PAGE INTRO / HERO */}
      <Section className="pb-8 md:pb-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-center">
            {/* LEFT: Intro copy */}
            <div className="space-y-5">
              <PageIntro
                breadcrumb={[
                  { label: "Home", href: "/" },
                  { label: "Work" },
                ]}
                eyebrow="Selected work"
                title="Designing modern learning for complex environments"
                lead="A mix of design systems, flagship courses, and playful prototypes built for regulators, school networks, and workplace wellbeing. This is the work that has shaped how I think about learning design."
              />

              {/* Sectors / focus chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/15 bg-[var(--bg-soft)] px-3 py-1 text-xs font-medium tracking-[0.12em] uppercase text-[var(--text)]/70">
                  Aviation & safety
                </span>
                <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/15 bg-[var(--bg-soft)] px-3 py-1 text-xs font-medium tracking-[0.12em] uppercase text-[var(--text)]/70">
                  K–12 & professional learning
                </span>
                <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/15 bg-[var(--bg-soft)] px-3 py-1 text-xs font-medium tracking-[0.12em] uppercase text-[var(--text)]/70">
                  Workplace wellbeing
                </span>
              </div>
            </div>

            {/* RIGHT: Simple visual / case-study preview */}
            <div className="hidden lg:block">
              <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] overflow-hidden shadow-sm">
                <img
                  src="/images/work/glenn-hammond-site-assets-elearning-design-system-grid.jpg"
                  alt="Preview of eLearning Design System tiles"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FEATURED: eLearning Design System */}
      <Section>
        <Container>
          <Link
            to="/work/elearning-design-system"
            className="group flex flex-col items-stretch overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80 md:flex-row"
          >
            {/* TEXT SIDE */}
            <div className="flex-1 p-6">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Glenn Hammond · eLearning design system
              </div>
              <h3 className="text-xl font-semibold leading-snug md:text-2xl">
                eLearning Design System for modern professional learning
              </h3>
              <p className="mt-3 max-w-3xl text-sm text-neutral-700 dark:text-neutral-200">
                A reusable eLearning design system I created to speed up course builds, improve
                consistency, and support WCAG-aligned layouts across Storyline, Rise, and H5P. It
                underpins ISQ’s growing catalogue of professional learning, but is designed to be
                portable across clients and platforms.
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                Role: System architect · Lead eLearning specialist · Visual design · Governance
              </p>
              <div className="mt-4 text-sm font-medium text-neutral-900/80 group-hover:underline dark:text-white">
                View project →
              </div>
            </div>

            {/* IMAGE SIDE */}
            <div className="flex w-full items-center justify-center bg-neutral-50 p-4 md:w-[40%] md:p-6 dark:bg-neutral-900/60">
              <img
                src="/images/portfolio-elearning-design-system.jpg"
                alt="Glenn Hammond eLearning Design System overview"
                className="h-auto w-full max-h-72 object-contain md:max-h-80 transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </Link>
        </Container>
      </Section>

      {/* CYA + CASA SECTION */}
      <Section>
        <Container className="space-y-10 md:space-y-12">
          <div className="grid gap-6 md:grid-cols-2">
            {/* CYA – Website (WordPress) */}
            <Link
              to="/work/corporate-yoga-australia-website"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80"
            >
              {/* FULL-WIDTH IMAGE */}
              <div className="relative w-full overflow-hidden">
                <img
                  src="/images/work/glenn-hammond-site-assets-website-corporate-yoga-australia.webp"
                  alt="Corporate Yoga Australia WordPress website"
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* TEXT BLOCK */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Corporate Yoga Australia
                </div>
                <h3 className="text-xl font-semibold leading-snug md:text-2xl">
                  Corporate Yoga Australia website (WordPress)
                </h3>
                <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-200">
                  Designing and rebuilding the public-facing website for Corporate Yoga Australia –
                  clarifying the offer, improving mobile usability, and supporting ongoing content, SEO and
                  campaign work.
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                  Role: UX & visual design · WordPress · Ongoing marketing support
                </p>
                <div className="mt-4 text-sm font-medium text-neutral-900/80 group-hover:underline dark:text-white">
                  View project →
                </div>
              </div>
            </Link>

            {/* CYA – Kajabi Online Wellness Courses */}
            <Link
              to="/work/corporate-yoga-australia-kajabi"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80"
            >
              {/* FULL-WIDTH IMAGE */}
              <div className="relative w-full overflow-hidden">
                <img
                  src="/images/work/glenn-hammond-site-assets-kajabi-corporate-yoga-australia.jpg"
                  alt="Corporate Yoga Australia Kajabi online wellness courses"
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* TEXT BLOCK */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Corporate Yoga Australia
                </div>
                <h3 className="text-xl font-semibold leading-snug md:text-2xl">
                  Online wellness courses on Kajabi
                </h3>
                <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-200">
                  Structuring and designing Corporate Yoga Australia’s online wellness courses in Kajabi –
                  from course architecture and content flow to visuals that align with the wider CYA brand.
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                  Role: Learning design · Platform build · Brand & campaign support
                </p>
                <div className="mt-4 text-sm font-medium text-neutral-900/80 group-hover:underline dark:text-white">
                  View project →
                </div>
              </div>
            </Link>

            {/* CASA – Flight Examiner Rating Course */}
            <Link
              to="/work/casa-flight-examiner-rating"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80"
            >
              {/* FULL-WIDTH IMAGE */}
              <div className="relative w-full overflow-hidden">
                <img
                  src="/images/work/glenn-hammond-site-assets-casa-course-cover.jpg"
                  alt="Civil Aviation Safety Authority Flight Examiner Rating course"
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* TEXT BLOCK */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Civil Aviation Safety Authority
                </div>
                <h3 className="text-xl font-semibold leading-snug md:text-2xl">
                  Flight Examiner Rating Course
                </h3>
                <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-200">
                  Designing and building the learning experience that supports flight examiners working at
                  the pinnacle of Australian aviation – aligning regulatory rigour with clear, usable digital
                  learning.
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                  Role: Learning experience designer · Visual design · Video · Template lead
                </p>
                <div className="mt-4 text-sm font-medium text-neutral-900/80 group-hover:underline dark:text-white">
                  View project →
                </div>
              </div>
            </Link>

            {/* CASA – CLASS */}
            <Link
              to="/work/casa-aviationworx-class"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80"
            >
              {/* FULL-WIDTH IMAGE */}
              <div className="relative w-full overflow-hidden">
                <img
                  src="/images/work/glenn-hammond-site-assets-casa-class-lms-design-and-development.jpg"
                  alt="CASA CLASS learning management system front-end design"
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* TEXT BLOCK */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  Civil Aviation Safety Authority
                </div>
                <h3 className="text-xl font-semibold leading-snug md:text-2xl">
                  CASA Learning Environment for Safer Skies – CLASS
                </h3>
                <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-200">
                  Front-end LMS experience for Aviationworx and CLASS – CASA’s learning environment for
                  safer skies – including interface design, graphics, and a reusable eLearning template
                  system for the internal development team.
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                  Role: Product design · UX · Visual system · Video & interviews
                </p>
                <div className="mt-4 text-sm font-medium text-neutral-900/80 group-hover:underline dark:text-white">
                  View project →
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </Section>

      {/* EXPERIMENTS / COMMUNITY SECTION */}
      <Section>
        <Container className="space-y-8 md:space-y-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-sm font-semibold tracking-[0.18em] uppercase text-neutral-500 dark:text-neutral-400">
                Selected experiments & side projects
              </h2>
              <p className="mt-2 max-w-2xl text-base text-neutral-700 dark:text-neutral-200">
                Community challenges, prototypes, and playful builds that helped me experiment with
                interactivity, storytelling, and data.
              </p>
            </div>
            <Link
              to="/work/elearning-heroes-experiments"
              className="text-sm font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-white"
            >
              View all Articulate community projects →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Interactive video – rooftop */}
            <Link
              to="/work/elearning-heroes-experiments#interactive-video"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80"
            >
              <h3 className="text-lg font-semibold leading-snug">
                “Don’t jump” – interactive video prototype
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">
                Early interactive video from around 2014–15: a man on a rooftop, the action pauses at key
                points, and the learner chooses what happens next. Built before “interactive video” became
                a buzzword.
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                Articulate eLearning Heroes challenge · Branching · Video
              </p>
              <div className="mt-3 text-sm font-medium text-neutral-900/80 group-hover:underline dark:text-white">
                Jump to section →
              </div>
            </Link>

            {/* Beer Advisor */}
            <Link
              to="/work/elearning-heroes-experiments#beer-advisor"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80"
            >
              <h3 className="text-lg font-semibold leading-snug">
                Beer Advisor – decision support for the undecided drinker
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">
                A tongue-in-cheek advisor that recommends a beer based on a few quick questions. It sparked
                comments like “this should be available in bars” – probably helped by a few years of
                home-brewing under the YOBBO Brewing banner.
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                Articulate eLearning Heroes challenge · Decision tool · Gamified quiz
              </p>
              <div className="mt-3 text-sm font-medium text-neutral-900/80 group-hover:underline dark:text-white">
                Jump to section →
              </div>
            </Link>

            {/* Placeholder 3 */}
            <Link
              to="/work/elearning-heroes-experiments#prototype-3"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80"
            >
              <h3 className="text-lg font-semibold leading-snug">
                Microlearning prototype – to be added
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">
                I’ll add another favourite Articulate challenge piece here – a compact, focused experience
                built to test ideas around pacing, feedback, and visual storytelling.
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                Articulate eLearning Heroes challenge
              </p>
              <div className="mt-3 text-sm font-medium text-neutral-900/80 group-hover:underline dark:text-white">
                Jump to section →
              </div>
            </Link>

            {/* Placeholder 4 */}
            <Link
              to="/work/elearning-heroes-experiments#prototype-4"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80"
            >
              <h3 className="text-lg font-semibold leading-snug">
                Accessible interaction prototype – to be added
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">
                A later challenge focused on accessibility, keyboard navigation, and clean layouts – a
                useful counterpoint to the more playful experimental pieces.
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                Articulate eLearning Heroes challenge · Accessibility
              </p>
              <div className="mt-3 text-sm font-medium text-neutral-900/80 group-hover:underline dark:text-white">
                Jump to section →
              </div>
            </Link>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}