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
        description="I design and build modern learning experiences, blending instructional design, UX, xAPI, and media."
      />

      {/* PAGE INTRO + HERO GRID TOGETHER */}
      <Section>
   <Container className="space-y-14 md:space-y-16">
          <PageIntro
            breadcrumb={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
            title="I design and build learner-centric learning experiences"
          />

          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-12 items-start fade-in-up">
            {/* Text */}
            <div className="space-y-6">
              <p className="text-[var(--text)]/75 leading-relaxed">
                I’m Glenn Hammond, an eLearning specialist, designer and
                videographer based in Brisbane. I design professional learning
                for teachers in Queensland’s independent schools and take on
                selected projects through my own practice and partners like
                Corporate Yoga Australia.
              </p>

              <p className="text-[var(--text)]/75 leading-relaxed">
                My work sits at the intersection of pedagogy, UX, learning
                analytics and media. I care about learning experiences that are
                clear, respectful of people’s time and grounded in evidence,
                blending instructional design, scenario development, multimedia,
                xAPI and thoughtful visual design to support real performance.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
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
                    bg-[var(--bg)] hover:bg-[var(--bg-soft)]
                    transition
                  "
                >
                  View selected work
                </Link>
              </div>
            </div>

            {/* Meta card */}
            <aside
              className="
                rounded-3xl border border-black/10 dark:border-white/10
                bg-[var(--bg)]/95 shadow-sm p-6 space-y-6
              "
            >
              <div className="flex items-center justify-center">
                <img
                  src="/images/glenn-hammond-instructional-design-storyline-elearning-development-australia-uk-producer.jpg"
                  alt="Glenn Hammond"
                  className="w-56 h-56 rounded-2xl object-cover border border-black/10 dark:border-white/10 shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/60">
                  Snapshot
                </p>
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
              Clarity, empathy, and evidence shape everything I build.
            </h2>

            <p className="text-[var(--text)]/75 max-w-3xl leading-relaxed">
              Learning tools should feel intuitive, reduce cognitive load, and
              support genuine performance — not add friction. My process blends
              user research, UX patterns, visual design systems, and analytics
              to make sure learning feels purposeful and usable.
            </p>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}