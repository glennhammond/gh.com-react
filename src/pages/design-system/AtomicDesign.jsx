// src/pages/design-system/AtomicDesign.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import PageIntro from "../../components/layout/PageIntro";
import SEO from "../../components/ui/SEO.jsx";

export default function AtomicDesign() {
  return (
    <PageWrapper>
      <SEO
        title="Atomic Design – eLearning Design System – Glenn Hammond"
        description="How the eLearning Design System uses atomic design to connect typography, components, and templates across Storyline, Rise, and H5P."
        url="https://glennhammond.com/work/elearning-design-system/atomic-design"
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
                  { label: "Atomic Design" },
                ]}
                title="Atomic design in the eLearning system"
                lead="The eLearning Design System is structured using atomic design principles. That means every screen in Storyline, Rise, and H5P is built from a small, reusable set of foundations and components."
              />
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] overflow-hidden shadow-sm">
                <img
                  src="/images/atomic-design.png"
                  alt="Atomic design visual for the eLearning Design System"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* WHY ATOMIC DESIGN */}
      <Section className="pt-0 md:pt-2">
        <Container className="space-y-6 md:space-y-7 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Why atomic design for eLearning?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ReasonBlock
              title="Consistent experiences"
              items={[
                "The same typography, colour roles, and interaction patterns appear across all modules.",
                "Learners quickly recognise how content behaves, regardless of topic or platform.",
                "Design debt is reduced because new ideas build on existing patterns instead of starting from scratch.",
              ]}
            />
            <ReasonBlock
              title="Faster, more scalable builds"
              items={[
                "Designers and developers work from a shared library of approved components.",
                "Changes to a foundation (for example a button style) cascade through templates.",
                "New Storyline or Rise builds can be assembled from existing patterns rather than re-invented.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* LEVELS */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Mapping atomic design to Storyline, Rise, and H5P
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <LevelBlock
              level="Atoms"
              summary="Foundations that everything else is built from."
              examples={[
                "Typography tokens for headings, body, captions, and labels.",
                "Colour roles for backgrounds, accents, alerts, and feedback states.",
                "Icon set and basic shapes used across navigation and content.",
                "Spacing and elevation rules used to create rhythm and hierarchy.",
              ]}
            />
            <LevelBlock
              level="Molecules"
              summary="Simple combinations of atoms that form small UI elements."
              examples={[
                "Buttons with icons and labels.",
                "Form fields with labels, hints, and error messaging.",
                "Progress indicators combining colour, type, and iconography.",
                "Tag / pill components for meta information (time, difficulty, topic).",
              ]}
            />
            <LevelBlock
              level="Organisms"
              summary="Clusters of molecules that work together as sections."
              examples={[
                "Course hero header with title, meta tags, and CTA.",
                "Tab sets for organising content into clear sections.",
                "Card grids for modules, scenarios, or resources.",
                "Question blocks that package stem, options, and feedback.",
              ]}
            />
            <LevelBlock
              level="Templates"
              summary="Page-level structures that define layout without final content."
              examples={[
                "Storyline slide templates for intros, outcomes, scenarios, and checks.",
                "Rise lesson skeletons for concept–practice–reflection flows.",
                "H5P layout patterns for interactive content and practice activities.",
                "Reusable content blocks for case studies, reflections, and summaries.",
              ]}
            />
            <LevelBlock
              level="Pages"
              summary="Fully composed screens and modules using all the above."
              examples={[
                "A complete Storyline scene combining multiple templates and organisms.",
                "A finished Rise lesson built from pre-defined blocks and components.",
                "A cohesive H5P activity that mirrors navigation and visual rules.",
                "End-to-end courses that feel consistent but remain flexible per topic.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* PRACTICAL IMPACT */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Practical impact for teams
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <DetailBlock
              title="Design & development"
              items={[
                "New modules start from templates rather than blank canvases.",
                "Design decisions are pushed into system foundations instead of one-off courses.",
                "Prototypes can be produced quickly to test with teachers and school leaders.",
              ]}
            />
            <DetailBlock
              title="Governance & evolution"
              items={[
                "Updates to atoms (for example brand colour tweaks) flow into higher levels over time.",
                "The library can grow as new successful patterns emerge from real projects.",
                "The system becomes a shared reference point across ID, media, and technical teams.",
              ]}
            />
          </div>

          <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[var(--text)]/70 max-w-xl">
              Atomic design keeps the eLearning Design System grounded in real
              course builds. Every new project is a chance to refine atoms and
              components, rather than adding another disconnected one-off.
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

function ReasonBlock({ title, items }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-3">
      <h3 className="font-heading text-lg text-[var(--text)]">{title}</h3>
      <ul className="list-disc space-y-2 text-sm text-[var(--text)]/75">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function LevelBlock({ level, summary, examples }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-3">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-heading text-lg text-[var(--text)]">
          {level}
        </h3>
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/60">
          Atomic level
        </p>
      </div>
      <p className="text-sm text-[var(--text)]/75">{summary}</p>
      <ul className="list-disc space-y-2 text-sm text-[var(--text)]/75">
        {examples.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function DetailBlock({ title, items }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-3">
      <h3 className="font-heading text-lg text-[var(--text)]">{title}</h3>
      <ul className="list-disc space-y-2 text-sm text-[var(--text)]/75">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}