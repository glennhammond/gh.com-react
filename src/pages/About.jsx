// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import PageHero from "../components/layout/PageHero";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SEO from "../components/ui/SEO.jsx";

export default function About() {
  return (
    <PageWrapper>
      <SEO
        title="About - Glenn Hammond"
        description="About Glenn Hammond - an eLearning specialist who designs modern learning systems across strategy, platforms, courses, media, and analytics."
      />

      {/* PAGE INTRO / HERO */}
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        title="I design and build modern learning systems"
        right={
          <div className="hidden md:block">
            <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm p-5 md:p-6 space-y-6">
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
                  eLearning Specialist · Platform Designer · Video Producer
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <p className="text-[var(--text)]/70">Brisbane, Australia (AEST)</p>
                <p className="text-[var(--text)]/70">
                  Learning strategy, Moodle platforms, Storyline/Rise builds,
                  media production, and xAPI analytics.
                </p>
              </div>
            </div>
          </div>
        }
        introClassName="mt-6 space-y-6"
      >
        {/* Mobile - meta card sits directly under the title */}
        <aside className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm p-5 space-y-6 md:hidden">
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
            <h2 className="font-heading text-lg text-[var(--text)]">Glenn Hammond</h2>
            <p className="text-sm text-[var(--text)]/70">
              eLearning Specialist · Platform Designer · Video Producer
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-[var(--text)]/70">Brisbane, Australia (AEST)</p>
            <p className="text-[var(--text)]/70">
              Learning strategy, Moodle platforms, Storyline/Rise builds,
              media production, and xAPI analytics.
            </p>
          </div>
        </aside>


        <div className="space-y-6">
          <p className="text-base md:text-lg leading-relaxed text-neutral-700/90 dark:text-white/80">
            I’m Glenn Hammond - an eLearning specialist, platform designer, and video producer based in Brisbane. I help organisations design and deliver learning that works as a system: clear strategy, credible platforms, practical courses, useful media, and evidence-informed improvement.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-neutral-700/90 dark:text-white/80">
            I design learning systems that connect strategy, platforms, content, media, and analytics into one coherent experience. My focus is practical delivery - helping organisations create learning that feels clear, credible, scalable, and easier to improve over time.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/contact"
              className="btn-cta font-heading inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl shadow-[0_14px_34px_rgba(0,0,0,0.20)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              Start a conversation →
            </Link>

            <Link
              to="/work"
              className="btn-outline font-heading inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              View case studies
            </Link>
          </div>
        </div>
      </PageHero>

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
              How I work
            </p>

            <h2 className="font-heading text-3xl md:text-4xl text-[var(--text)]">
              Learning works better when the whole system is designed.
            </h2>

            <p className="text-[var(--text)]/75 max-w-3xl leading-relaxed">
              A course is only one part of the experience. The platform, registration flow, interface, support model, content structure, feedback loops, reporting, and production process all shape whether learning feels useful or frustrating. I design these pieces together so the experience is easier for learners, clearer for stakeholders, and more maintainable for the people who run it.
            </p>
          </div>
        </Container>
      </Section>

      {/* CAPABILITY AREAS */}
      <Section className="bg-[var(--bg-soft)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up">
            <article className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-7 space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/55">
                Strategy
              </p>
              <h3 className="font-heading text-xl text-[var(--text)]">
                Make the learning problem clear
              </h3>
              <p className="text-sm leading-7 text-[var(--text)]/70">
                I help shape course direction, learner journeys, scenarios, review checkpoints, and the decisions that keep learning focused on performance rather than content volume.
              </p>
            </article>

            <article className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-7 space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/55">
                Platforms
              </p>
              <h3 className="font-heading text-xl text-[var(--text)]">
                Build the delivery environment
              </h3>
              <p className="text-sm leading-7 text-[var(--text)]/70">
                I design Moodle platform structures, onboarding flows, custom registration pathways, cohort access, branded course pages, and reusable patterns that support scalable delivery.
              </p>
            </article>

            <article className="rounded-3xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 p-7 space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/55">
                Improvement
              </p>
              <h3 className="font-heading text-xl text-[var(--text)]">
                Use evidence to refine the experience
              </h3>
              <p className="text-sm leading-7 text-[var(--text)]/70">
                I work with xAPI, LRS workflows, dashboard concepts, and analytics planning so learning can be reviewed, tested, and improved beyond basic completion reporting.
              </p>
            </article>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}