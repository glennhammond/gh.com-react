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

      {/* PAGE INTRO */}
      <Section className="pb-4 md:pb-6">
        <Container>
          <PageIntro
            breadcrumb={[
              { label: "Home", href: "/" },
              { label: "Work" },
            ]}
            title="Work"
            intro="A selection of projects across aviation, education, and community challenges – from leading national programmes to playful prototypes that sparked conversations."
          />
        </Container>
      </Section>

      {/* ISQ + CASA SECTION */}
      <Section>
        <Container className="space-y-10 md:space-y-12">
          <div className="grid gap-6 md:grid-cols-2">
            {/* ISQ – Ecosystem (TOP, FULL WIDTH) */}
            <Link
              to="/work/isq-professional-learning"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80 md:col-span-2"
            >
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Independent Schools Queensland
              </div>
              <h3 className="text-xl font-semibold leading-snug md:text-2xl">
                Professional learning ecosystem – design system, Child Protection & xAPI
              </h3>
              <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-200 max-w-3xl">
                Designing a coherent professional learning ecosystem for Queensland’s non-state schools –
                from a full eLearning design system and Child Protection courses to xAPI-powered analytics
                and scalable templates across Storyline, Rise, and H5P.
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                Role: Lead eLearning specialist · Design system · Data & xAPI · Video & media
              </p>
              <div className="mt-4 text-sm font-medium text-neutral-900/80 group-hover:underline dark:text-white">
                View project →
              </div>
            </Link>

            {/* CASA – Flight Examiner Rating Course */}
            <Link
              to="/work/casa-flight-examiner-rating"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80"
            >
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
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
            </Link>

            {/* CASA – CLASS */}
            <Link
              to="/work/casa-aviationworx-class"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900/80"
            >
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                Civil Aviation Safety Authority
              </div>
              <h3 className="text-xl font-semibold leading-snug md:text-2xl">
                CASA Learning Environment for Safer Skies - CLASS
              </h3>
              <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-200">
                Front-end LMS experience for Aviationworx and CLASS – CASA’s Learning Environment for
                Safer Skies – including interface design, graphics, and a reusable eLearning template
                system for the internal development team.
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                Role: Product design · UX · Visual system · Video & interviews
              </p>
              <div className="mt-4 text-sm font-medium text-neutral-900/80 group-hover:underline dark:text-white">
                View project →
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