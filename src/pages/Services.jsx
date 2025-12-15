// src/pages/Services.jsx
import React from "react";

import PageWrapper from "../components/layout/PageWrapper";
import PageIntro from "../components/layout/PageIntro";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SEO from "../components/ui/SEO.jsx";

export default function Services() {
  return (
    <PageWrapper>
      <SEO
        title="Services - Glenn Hammond"
        description="Consultancy and instructional design, eLearning/media development, and xAPI learning analytics for modern digital learning."
      />

      {/* PAGE INTRO */}
      <Section className="pb-4 md:pb-6">
        <Container>
          <PageIntro
            breadcrumb={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
            title="Services"
            right={
              <div className="site-card overflow-hidden">
                <div className="relative aspect-[16/10] w-full">
                  <img
                    src="/images/heroes/glenn-hammond-site-assets-hero-services.webp"
                    alt="Services hero"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            }
          >
            <div className="mt-6 max-w-2xl space-y-3">
              <p>
                You can engage me for a single stream (strategy, build, or data), or combine them end-to-end.
                My focus is practical delivery - clear decisions, clean execution, and measurable improvement.
              </p>
              <p>
                Typical outputs include storyboards and scripts, Storyline/Rise builds, video assets, xAPI statements,
                LRS configuration, and dashboards that support real reporting.
              </p>
            </div>
          </PageIntro>
        </Container>
      </Section>

      {/* SERVICES GRID */}
      <Section className="pt-10 md:pt-14">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
            <ServiceCard
              title="Consultancy & instructional design"
              blurb="Clarify the problem, define the learning approach, and design experiences that are buildable and measurable."
              tag="Strategy"
              icon="ID"
              items={[
                "Discovery, needs analysis, and learning strategy",
                "Curriculum design, storyboards, and scenario writing",
                "Stakeholder alignment workshops and design sign-off",
                "Accessibility, quality assurance, and evaluation planning",
              ]}
              imageSrc="/images/heroes/glenn-hammond-site-assets-hero-services.webp"
              imageAlt="Learning strategy - notes and planning"
            />

            <ServiceCard
              title="eLearning & media development"
              blurb="Build polished learning experiences and media assets with strong UX, clean structure, and consistent design."
              tag="Build"
              icon="DEV"
              items={[
                "Storyline/Rise builds with strong UX and accessibility",
                "Reusable templates, components, and design systems",
                "Interactive video, microlearning, and supporting assets",
                "Video production, editing, and audio clean-up",
              ]}
              imageSrc="/images/heroes/glenn-hammond-site-assets-hero-services.webp"
              imageAlt="eLearning development - interface and timeline"
            />

            <ServiceCard
              title="xAPI & learning analytics"
              blurb="Instrument your learning with xAPI and dashboards so you can see what’s working - and improve it."
              tag="Data"
              icon="xAPI"
              items={[
                "xAPI implementation, debugging, and statement design",
                "LRS setup (Veracity, Learning Locker) and workflows",
                "Sheets-based parsing/cleaning for faster reporting",
                "Dashboards (Looker Studio) that turn data into insight",
              ]}
              imageSrc="/images/work/glenn-hammond-site-assets-veracity.webp"
              imageAlt="Learning analytics - dashboard and data"
            />
          </div>

          {/* Soft CTA under the grid */}
          <div className="mt-10 text-sm text-[var(--text)]/80">
            <p>
              Not sure where your project fits?{" "}
              <a href="/contact" className="font-heading text-[var(--secondary)] hover:underline">
                Get in touch
              </a>{" "}
              and we can map out the right mix of design, xAPI, and media support.
            </p>
          </div>
        </Container>
      </Section>

      {/* HOW I WORK */}
      <Section>
        <Container>
          <div className="space-y-6 fade-in-up">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/70">Approach</span>
              <h2 className="font-heading text-2xl text-[var(--text)]">How I work</h2>
              <p className="max-w-2xl text-[var(--text)]/80">
                A simple way of working: clear decisions, steady momentum, clean delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StepCard title="Discover" icon="1" text="Define the audience, constraints, and success measures." />
              <StepCard title="Design" icon="2" text="Storyboard, script, prototype, and lock scope." />
              <StepCard title="Build" icon="3" text="Develop learning, media, and templates with QA." />
              <StepCard title="Measure" icon="4" text="Use xAPI and dashboards to iterate with confidence." />
            </div>

            <div>
              <a
                href="/work"
                className="inline-flex items-center justify-center rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/15 px-5 py-3 text-sm font-heading text-[var(--text)] shadow-sm card-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary)]/40"
              >
                See examples in Work →
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}

function ServiceCard({ title, tag, icon, blurb, items, imageSrc, imageAlt }) {
  return (
    <div className="site-card overflow-hidden">
      {/* Card header image */}
      {imageSrc ? (
        <div className="relative h-44 w-full">
          <img
            src={imageSrc}
            alt={imageAlt || ""}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      ) : (
        <div className="h-14 bg-gradient-to-r from-[#F5C84C] via-[#c01e84] to-[#970067]" />
      )}

      <div className="p-8 space-y-5">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="h-10 w-10 rounded-full bg-[#F5C84C]/25 flex items-center justify-center text-[#970067] text-sm font-heading">
              {icon}
            </div>
          )}
          <div className="space-y-1">
            <h3 className="font-heading text-xl text-[var(--text)]">{title}</h3>
            {tag && (
              <span className="inline-flex items-center rounded-full border border-black/10 dark:border-white/15 bg-white/40 dark:bg-white/10 px-3 py-0.5 text-[11px] uppercase tracking-[0.18em] text-[var(--text)]/70">
                {tag}
              </span>
            )}
          </div>
        </div>

        {blurb && <p className="text-sm text-[var(--text)]/75">{blurb}</p>}

        <ul className="space-y-2 text-sm text-[var(--text)]/75">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F5C84C]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StepCard({ title, icon, text }) {
  return (
    <div className="site-card p-5">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-[#F5C84C]/25 flex items-center justify-center text-[var(--secondary)] text-sm font-heading">
          {icon}
        </div>
        <h3 className="font-heading text-base text-[var(--text)]">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-[var(--text)]/75">{text}</p>
    </div>
  );
}