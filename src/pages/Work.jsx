// src/pages/Work.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import { HeroShell } from "../components/layout/PageHero";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SEO from "../components/ui/SEO.jsx";

export default function Work() {
  const base = import.meta.env.BASE_URL;
  return (
    <PageWrapper>
      <SEO
        title="Work"
        description="Selected work spanning aviation, education, and experimental eLearning prototypes."
        canonical="/work"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://glennhammond.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Work",
                item: "https://glennhammond.com/work",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Work",
            description:
              "Selected work spanning aviation, education, and experimental eLearning prototypes.",
            url: "https://glennhammond.com/work",
          },
        ]}
      />

      {/* PAGE INTRO / HERO */}
      <HeroShell
        noPadding
        sectionClassName="!py-0 !pt-10 md:!pt-14 !pb-4 md:!pb-5"
        containerClassName=""
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-start">
          {/* LEFT: Intro copy */}
          <div className="space-y-5">
            <div className="space-y-4">
              <div className="min-h-[24px]">
                <Breadcrumb
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Work" },
                  ]}
                />
              </div>

              <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-white/70">
                Selected work
              </p>

              <h1 className="font-heading text-4xl md:text-5xl text-[var(--text)]">
                Modern learning design
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-neutral-700/90 dark:text-white/80 max-w-2xl">
                Repeatable learning frameworks - consistent structure, UX, and production.
              </p>
            </div>
            <div className="max-w-2xl space-y-4">
              <p className="text-base md:text-lg leading-relaxed text-neutral-700/90 dark:text-white/80">
                A selection of projects where learning strategy, UX, and production needed to align.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-neutral-700/90 dark:text-white/80">
                Each example shows how I use repeatable patterns to keep experiences consistent and
                delivery efficient across complex content and multiple modules.
              </p>
            </div>
          </div>

          {/* RIGHT: Simple visual / case-study preview */}
          <div className="hidden lg:block lg:mt-16">
            <div
              className="aspect-[16/9] rounded-3xl border border-white/10 bg-white/5 overflow-hidden shadow-sm !transform-none !transition-none !translate-y-0"
              style={{ transform: "none", transition: "none" }}
            >
              <img
                src={`${base}images/work/glenn-hammond-site-assets-gh-elearning-design-system.webp`}
                alt="Preview of eLearning Design System tiles"
                className="h-full w-full object-cover pointer-events-none select-none !transform-none !transition-none !scale-100"
                style={{ transform: "none", transition: "none" }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </HeroShell>


      {/* CYA + CASA SECTION */}
      <Section>
        <Container className="space-y-10 md:space-y-12 max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* CASA – Flight Examiner Rating Course */}
            <Link
              to="/work/casa-flight-examiner-rating"
              className="group flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition dark:border-white/10 dark:bg-white/5 hover:-translate-y-0.5 hover:shadow-md hover:border-black/20 dark:hover:border-white/20 focus-visible:outline-none"
            >
              {/* SHORTER IMAGE */}
              <div className="relative w-full h-36 md:h-40 overflow-hidden bg-neutral-100/60 dark:bg-white/5">
                <img
                  src={`${base}images/work/glenn-hammond-site-assets-casa-course-cover.jpg`}
                  alt="Civil Aviation Safety Authority Flight Examiner Rating course"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* TEXT BLOCK */}
              <div className="flex flex-1 flex-col p-4 md:p-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-white/70">
                  Civil Aviation Safety Authority
                </div>
                <h3 className="text-base font-semibold leading-snug md:text-lg">
                  Flight Examiner Rating Course
                </h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-white/85 line-clamp-2">
                  Designing and building the learning experience that supports flight examiners working at
                  the pinnacle of Australian aviation – aligning regulatory rigour with clear, usable digital
                  learning.
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-white/60">
                  Role: Learning experience designer · Visual design · Video · Template lead
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-accent)] underline-offset-4 group-hover:underline">
                  View project <span aria-hidden>→</span>
                </div>
              </div>
            </Link>

            {/* CASA – CLASS */}
            <Link
              to="/work/casa-aviationworx-class"
              className="group flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition dark:border-white/10 dark:bg-white/5 hover:-translate-y-0.5 hover:shadow-md hover:border-black/20 dark:hover:border-white/20 focus-visible:outline-none"
            >
              {/* SHORTER IMAGE */}
              <div className="relative w-full h-36 md:h-40 overflow-hidden bg-neutral-100/60 dark:bg-white/5">
                <img
                  src={`${base}images/work/glenn-hammond-site-assets-casa-class-lms-design-and-development.jpg`}
                  alt="CASA CLASS learning management system front-end design"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* TEXT BLOCK */}
              <div className="flex flex-1 flex-col p-4 md:p-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-white/70">
                  Civil Aviation Safety Authority
                </div>
                <h3 className="text-base font-semibold leading-snug md:text-lg">
                  CASA Learning Environment for Safer Skies – CLASS
                </h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-white/85 line-clamp-2">
                  Front-end LMS experience for Aviationworx and CLASS – CASA’s learning environment for
                  safer skies – including interface design, graphics, and a reusable eLearning template
                  system for the internal development team.
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-white/60">
                  Role: Product design · UX · Visual system · Video & interviews
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-accent)] underline-offset-4 group-hover:underline">
                  View project <span aria-hidden>→</span>
                </div>
              </div>
            </Link>

            {/* CYA – Website (WordPress) */}
            <Link
              to="/work/corporate-yoga-australia-website"
              className="group flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition dark:border-white/10 dark:bg-white/5 hover:-translate-y-0.5 hover:shadow-md hover:border-black/20 dark:hover:border-white/20 focus-visible:outline-none"
            >
              {/* SHORTER IMAGE */}
              <div className="relative w-full h-36 md:h-40 overflow-hidden bg-neutral-100/60 dark:bg-white/5">
                <img
                  src={`${base}images/work/glenn-hammond-site-assets-corporate-yoga-australia.webp`}
                  alt="Corporate Yoga Australia WordPress website"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* TEXT BLOCK */}
              <div className="flex flex-1 flex-col p-4 md:p-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-white/70">
                  Corporate Yoga Australia
                </div>
                <h3 className="text-base font-semibold leading-snug md:text-lg">
                  Corporate Yoga Australia website (WordPress)
                </h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-white/85 line-clamp-2">
                  Designing and rebuilding the public-facing website for Corporate Yoga Australia –
                  clarifying the offer, improving mobile usability, and supporting ongoing content, SEO and
                  campaign work.
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-white/60">
                  Role: UX & visual design · WordPress · Ongoing marketing support
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-accent)] underline-offset-4 group-hover:underline">
                  View project <span aria-hidden>→</span>
                </div>
              </div>
            </Link>

            {/* CYA – Kajabi Online Wellness Courses */}
            <Link
              to="/work/corporate-yoga-australia-kajabi"
              className="group flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition dark:border-white/10 dark:bg-white/5 hover:-translate-y-0.5 hover:shadow-md hover:border-black/20 dark:hover:border-white/20 focus-visible:outline-none"
            >
              {/* SHORTER IMAGE */}
              <div className="relative w-full h-36 md:h-40 overflow-hidden bg-neutral-100/60 dark:bg-white/5">
                <img
                  src={`${base}images/work/glenn-hammond-site-assets-kajabi-corporate-yoga-australia.jpg`}
                  alt="Corporate Yoga Australia Kajabi online wellness courses"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* TEXT BLOCK */}
              <div className="flex flex-1 flex-col p-4 md:p-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-white/70">
                  Corporate Yoga Australia
                </div>
                <h3 className="text-base font-semibold leading-snug md:text-lg">
                  Online wellness courses on Kajabi
                </h3>
                <p className="mt-2 text-sm text-neutral-700 dark:text-white/85 line-clamp-2">
                  Structuring and designing Corporate Yoga Australia’s online wellness courses in Kajabi –
                  from course architecture and content flow to visuals that align with the wider CYA brand.
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-white/60">
                  Role: Learning design · Platform build · Brand & campaign support
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-accent)] underline-offset-4 group-hover:underline">
                  View project <span aria-hidden>→</span>
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
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80"
            >
              <div className="w-full bg-neutral-50 dark:bg-white/5">
                <img
                  src={`${base}images/work/articulate/glenn-hammond-site-assets-articulate-elearning-heroes-116.webp`}
                  alt="‘Don’t jump’ interactive video prototype – rooftop scene"
                  className="block w-full h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold leading-snug">
                  Interactive video prototype
                </h3>

                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">
                  Early interactive video from 2014: a man on a rooftop, the action pauses at key points,
                  and the learner chooses what happens next. Built before “interactive video” became a
                  buzzword.
                </p>

                <p className="mt-4 text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-300">
                  Articulate eLearning Heroes Challenge · Branching · Video
                </p>

                <span className="mt-4 inline-flex items-center gap-2 font-heading text-sm text-[var(--secondary)]">
                  Jump to section <span aria-hidden>→</span>
                </span>
              </div>
            </Link>

            {/* Beer Advisor */}
            <Link
              to="/work/elearning-heroes-experiments#beer-advisor"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md hover:border-[var(--brand-accent)] dark:border-white/10 dark:bg-white/10"
            >
              <h3 className="text-lg font-semibold leading-snug">
                Beer Advisor – decision support for the undecided drinker
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-white/85">
                A tongue-in-cheek advisor that recommends a beer based on a few quick questions. It
                sparked comments like “this should be available in bars” – probably helped by a few years
                of home-brewing under the YOBBO Brewing banner.
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-white/70">
                Articulate eLearning Heroes challenge · Decision tool · Gamified quiz
              </p>
              <div className="mt-3 text-sm font-medium text-neutral-900/80 group-hover:underline dark:text-white">
                Jump to section →
              </div>
            </Link>

            {/* Placeholder 3 */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 cursor-default">
              <div className="inline-flex w-fit items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-700 dark:border-white/10 dark:bg-white/10 dark:text-white/80">
                Coming soon
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug">
                Microlearning prototype
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-white/85">
                I’ll add another favourite Articulate challenge piece here - a compact, focused experience
                built to test ideas around pacing, feedback, and visual storytelling.
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-white/70">
                Articulate eLearning Heroes challenge
              </p>
            </div>

            {/* Placeholder 4 */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 cursor-default">
              <div className="inline-flex w-fit items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-700 dark:border-white/10 dark:bg-white/10 dark:text-white/80">
                Coming soon
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug">
                Accessible interaction prototype
              </h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-white/85">
                A later challenge focused on accessibility, keyboard navigation, and clean layouts - a
                useful counterpoint to the more playful experimental pieces.
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-white/70">
                Articulate eLearning Heroes challenge · Accessibility
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FEATURED: eLearning Design System */}
      <Section className="mt-2 md:mt-3 !py-0">
        <Container>
          <Link
            to="/work/elearning-design-system"
            className="group flex flex-col items-stretch overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition md:flex-row-reverse dark:border-white/10 dark:bg-white/5 hover:-translate-y-0.5 hover:shadow-md hover:border-black/20 dark:hover:border-white/20 focus-visible:outline-none"
          >
            {/* IMAGE SIDE */}
            <div className="flex w-full items-center justify-center bg-neutral-50 p-4 md:w-[40%] md:p-5 dark:bg-white/5">
              <img
                src={`${base}images/portfolio-elearning-design-system.jpg`}
                alt="Glenn Hammond eLearning Design System overview"
                className="h-auto w-full max-h-56 object-contain md:max-h-64"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* TEXT SIDE */}
            <div className="flex-1 p-4 md:p-5">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-white/70">
                Glenn Hammond · eLearning design system
              </div>

              <h3 className="text-base font-semibold leading-snug md:text-lg">
                eLearning Design System for modern professional learning
              </h3>

              <p className="mt-2 max-w-3xl text-sm text-neutral-700 dark:text-white/85">
                A reusable eLearning design system I created to speed up course builds, improve
                consistency, and support WCAG-aligned layouts across Storyline, Rise, and H5P. It
                underpins ISQ’s growing catalogue of professional learning, but is designed to be portable
                across clients and platforms.
              </p>

              <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-white/60">
                Role: System architect · Lead eLearning specialist · Visual design · Governance
              </p>

              <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-accent)] underline-offset-4 group-hover:underline">
                View project <span aria-hidden>→</span>
              </div>
            </div>
          </Link>
        </Container>
      </Section>
    </PageWrapper>
  );
}