import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import PageIntro from "../../components/layout/PageIntro";
import SEO from "../../components/ui/SEO.jsx";

export default function Typography() {
  return (
    <PageWrapper>
      <SEO
        title="Typography – eLearning Design System – Glenn Hammond"
        description="Typography guidelines for the eLearning Design System, covering font pairing, hierarchy, accessibility, and usage across Storyline, Rise, and H5P."
        url="https://glennhammond.com/work/elearning-design-system/typography"
      />

      {/* HERO / INTRO */}
      <Section className="pb-4 md:pb-6">
        <Container>
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center">
            <div>
              <PageIntro
                breadcrumb={[
                  { label: "Home", href: "/" },
                  { label: "Work", href: "/work" },
                  {
                    label: "eLearning Design System",
                    href: "/work/elearning-design-system",
                  },
                  { label: "Typography" },
                ]}
                title="Typography"
                intro="A simple, robust type system built around Century Gothic and Open Sans. It keeps course content readable, on brand, and accessible across all platforms."
              />
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] overflow-hidden shadow-sm">
                <img
                  src="/images/design-system-typography.png"
                  alt="Typography styles for headings and body text"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* TYPE STACK */}
      <Section className="pt-0 md:pt-2">
        <Container className="space-y-6 md:space-y-7 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Type stack and roles
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <TypeCard
              label="Headings"
              font="Century Gothic"
              usage={[
                "Page titles, slide titles, major section headings.",
                "Used at H1–H3 levels with generous line-height.",
                "Left-aligned for learning content, centre-aligned sparingly for hero moments.",
              ]}
            />
            <TypeCard
              label="Body"
              font="Open Sans"
              usage={[
                "Paragraph copy, captions, feedback text, and UI labels.",
                "Default size 16px–18px for body copy depending on context.",
                "Line length targeted at 60–80 characters per line for readability.",
              ]}
            />
            <TypeCard
              label="Meta & UI"
              font="Open Sans (uppercase / small caps)"
              usage={[
                "Pills, tags, breadcrumbs, time estimates, and microcopy.",
                "Smaller sizes (12–14px) with increased letterspacing.",
                "Used to add structure, not to carry core instructional content.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* SCALE & HIERARCHY */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Scale, hierarchy, and emphasis
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DetailBlock
              title="Type scale"
              items={[
                "H1: 40–44px for main titles (Storyline scene titles, key Rise lesson headings).",
                "H2: 28–32px for primary section headings.",
                "H3: 20–24px for in-slide blocks (e.g. cards, accordions, tabs).",
                "Body: 16–18px, with 1.5 line-height as default.",
              ]}
            />
            <DetailBlock
              title="Hierarchy & emphasis"
              items={[
                "Heading size and weight communicate structure – avoid over-using bold body text.",
                "Use bold sparingly for key phrases, thresholds, or actions.",
                "Italics kept for titles or specific emphasis, not long passages.",
                "Lists used for scanning; no more than 5–7 bullets per block where possible.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* ACCESSIBILITY */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Accessibility and platform specifics
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DetailBlock
              title="Accessibility rules"
              items={[
                "Text contrast meets WCAG 2.1 AA against background colours.",
                "Minimum body size 14px for dense UI, 16px for standard reading.",
                "Avoid text embedded in images for anything that must be read or assessed.",
                "Headings follow a logical order to support screen readers.",
              ]}
            />
            <DetailBlock
              title="Storyline, Rise, and H5P"
              items={[
                "Storyline text styles mirror the type scale so developers do not style ad hoc.",
                "Rise blocks use default styles but map to the same roles (headings, body, meta).",
                "H5P activities use the closest available type styles; any custom CSS follows the same scale.",
                "Where platforms differ, priority is given to legibility and hierarchy over perfect visual match.",
              ]}
            />
          </div>

          <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[var(--text)]/70 max-w-xl">
              A consistent type system reduces design drift, speeds up slide
              build, and keeps courses readable on everything from laptops to
              older school devices.
            </p>

            <Link
              to="/work/elearning-design-system"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-medium bg-[var(--text)] text-[var(--bg)] hover:opacity-90 transition"
            >
              Back to project overview →
            </Link>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}

/* ──────────────────────────────────────────────
   PRESENTATIONAL COMPONENTS
────────────────────────────────────────────── */

function TypeCard({ label, font, usage }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-3">
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/60">
        {label}
      </p>
      <p className="font-heading text-lg text-[var(--text)]">{font}</p>
      <ul className="space-y-2 text-sm text-[var(--text)]/75">
        {usage.map((item, idx) => (
          <li key={idx} className="list-disc list-inside">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetailBlock({ title, items }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-3">
      <h3 className="font-heading text-lg text-[var(--text)]">{title}</h3>
      <ul className="space-y-2 text-sm text-[var(--text)]/75">
        {items.map((item, idx) => (
          <li key={idx} className="list-disc list-inside">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}