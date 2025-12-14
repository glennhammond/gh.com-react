// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import PageIntro from "../components/layout/PageIntro";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SEO from "../components/ui/SEO.jsx";

export default function About() {
  return (
    <PageWrapper>
      <SEO
        title="About – Glenn Hammond"
        description="Repeatable learning frameworks - consistent structure, UX, and production process across instructional design, Storyline/Rise builds, media, and xAPI analytics."
      />

      {/* PAGE INTRO + HERO GRID TOGETHER */}
      <Section>
        <Container className="space-y-12 md:space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-12 items-start fade-in-up">
            <div className="space-y-8">
              <PageIntro
                breadcrumb={[
                  { label: "Home", href: "/" },
                  { label: "About" },
                ]}
                title="I design and build learning experiences"
              />

              {/* Mobile - meta card sits directly under the title */}
              <aside className="panel panel-strong p-5 space-y-6 md:hidden">
                <div className="flex items-center justify-center">
                  <img
                    src="/images/glenn-hammond-instructional-design-storyline-elearning-development-australia-uk-producer.jpg"
                    alt="Glenn Hammond"
                    className="
                      w-full max-w-[320px]
                      aspect-[4/3]
                      rounded-2xl object-cover
                      border border-black/10 dark:border-white/10 shadow-sm
                    "
                  />
                </div>

                <div className="space-y-2">
                  <h2 className="font-heading text-lg text-[var(--text)]">
                    Glenn Hammond
                  </h2>
                  <p className="text-sm text-[var(--text)]/70">
                    eLearning Specialist · Instructional Designer · Video Producer
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-[3px] text-xs text-[var(--text)]/50">📍</span>
                    <div>
                      <p className="font-medium text-[var(--text)]/90">Location</p>
                      <p className="text-[var(--text)]/70">Brisbane, Australia (AEST)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-[3px] text-xs text-[var(--text)]/50">🎓</span>
                    <div>
                      <p className="font-medium text-[var(--text)]/90">Focus areas</p>
                      <p className="text-[var(--text)]/70">
                        Professional learning, child protection training, blended
                        learning, capability building.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Subtle accent divider to give the hero more structure */}
              <div className="h-px w-16 bg-[var(--secondary)]/60" />

              {/* Panel to stop the copy sitting directly on the canvas */}
              <div className="panel panel-soft p-6 md:p-8">
                <div className="prose space-y-6">
                  <p className="text-slate-900/80 dark:text-white/90 leading-relaxed">
                    I’m Glenn Hammond - an eLearning specialist, designer, and video
                    producer based in Brisbane. I build professional learning for
                    Queensland’s independent schools at Independent Schools
                    Queensland, and take on selected client work through my own
                    practice and partners such as Corporate Yoga Australia.
                  </p>

                  <p className="text-slate-900/80 dark:text-white/90 leading-relaxed">
                    My work is built on a repeatable learning system - consistent
                    structure, UX, and production process across Storyline and Rise
                    builds, media production, and xAPI analytics - so courses stay
                    clear to navigate, reliable to deliver, and easier to maintain.
                    Writing is AI-assisted, then human refined.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-6">
                  <Link
                    to="/contact"
                    className="
                      inline-flex items-center justify-center
                      px-6 py-3 rounded-xl
                      bg-[var(--text)] text-[var(--bg)]
                      text-sm font-medium hover:opacity-90 transition shadow-sm
                    "
                  >
                    Let’s talk about a project →
                  </Link>

                  <Link
                    to="/work"
                    className="
                      inline-flex items-center justify-center
                      px-6 py-3 rounded-xl
                      border border-black/10 dark:border-white/15
                      text-sm font-medium text-[var(--text)]
                      bg-transparent hover:bg-[var(--bg-soft)]
                      transition
                    "
                  >
                    View selected work
                  </Link>
                </div>
              </div>
            </div>

            {/* Meta card */}
            <aside className="hidden md:block panel panel-strong p-5 md:p-6 space-y-6 md:mt-[52px]">
              <div className="flex items-center justify-center">
                <img
                  src="/images/glenn-hammond-instructional-design-storyline-elearning-development-australia-uk-producer.jpg"
                  alt="Glenn Hammond"
                  className="
                    w-full max-w-[300px] md:max-w-[320px]
                    aspect-[4/3]
                    rounded-2xl object-cover
                    border border-black/10 dark:border-white/10 shadow-sm
                  "
                />
              </div>

              <div className="space-y-2">
                <h2 className="font-heading text-lg text-[var(--text)]">
                  Glenn Hammond
                </h2>
                <p className="text-sm text-[var(--text)]/70">
                  eLearning Specialist · Instructional Designer · Video Producer
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-[3px] text-xs text-[var(--text)]/50">
                    📍
                  </span>
                  <div>
                    <p className="font-medium text-[var(--text)]/90">
                      Location
                    </p>
                    <p className="text-[var(--text)]/70">
                      Brisbane, Australia (AEST)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[3px] text-xs text-[var(--text)]/50">
                    🎓
                  </span>
                  <div>
                    <p className="font-medium text-[var(--text)]/90">
                      Focus areas
                    </p>
                    <p className="text-[var(--text)]/70">
                      Professional learning, child protection training, blended
                      learning, capability building.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* DESIGN PHILOSOPHY */}
      <Section>
        <Container>
          <div
            className="
              rounded-3xl p-10 md:p-14
              bg-gradient-to-br from-brand-primary/10 via-[var(--bg-soft)] to-brand-accent/10
              border border-black/5 dark:border-white/5
              space-y-6 fade-in-up
            "
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/60">
              Design philosophy
            </p>

            <h2 className="font-heading text-3xl md:text-4xl text-[var(--text)]">
              Clear, respectful learning - built to last.
            </h2>

            <p className="text-[var(--text)]/75 max-w-3xl leading-relaxed">
              Learning should feel intuitive, reduce cognitive load, and support
              performance on the job. I blend user-centred UX, visual design
              systems, and measurement (xAPI and analytics) so experiences stay
              coherent from first build through to long-term updates.
            </p>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}