import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import PageIntro from "../../components/layout/PageIntro";
import SEO from "../../components/ui/SEO.jsx";

export default function Storyline() {
  return (
    <PageWrapper>
      <SEO
        title="Storyline Templates – eLearning Design System – Glenn Hammond"
        description="How Storyline master files, templates, and interaction patterns are standardised in the eLearning Design System."
        url="https://glennhammond.com/work/elearning-design-system/storyline"
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
                  { label: "Storyline" },
                ]}
                title="Storyline templates"
                intro="A set of Storyline master files and slides that keep navigation, visuals, and xAPI tracking consistent across ISQ modules."
              />
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] overflow-hidden shadow-sm">
                <img
                  src="/images/storyline.png"
                  alt="Storyline slide templates from the design system"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* MASTER FILES */}
      <Section className="pt-0 md:pt-2">
        <Container className="space-y-6 md:space-y-7 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Master files
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DetailBlock
              title="Base masters"
              items={[
                "Core master file for standard courses (16:9, 1920×1080).",
                "Variant masters for scenario-heavy modules and assessment-heavy modules.",
                "Built-in layouts for title, section intro, content + media, interactions, and summaries.",
              ]}
            />
            <DetailBlock
              title="Brand and UI"
              items={[
                "Navigation bar, progress indicator, and buttons aligned with the design system.",
                "Pre-configured colour themes and text styles matching the typography page.",
                "Consistent placement of logo and footer text to avoid ad hoc decisions.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* TEMPLATE SLIDES */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Template slide library
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <DetailBlock
              title="Content slides"
              items={[
                "Title + key message slide for opening sections.",
                "Two-column layouts for content and examples.",
                "Case study layouts with image or video plus narrative.",
              ]}
            />
            <DetailBlock
              title="Interaction patterns"
              items={[
                "Tabs, accordions, and click-to-reveal cards.",
                "Scenario shells for branching conversations.",
                "Drag-and-drop templates for categorisation and sequencing.",
              ]}
            />
            <DetailBlock
              title="Assessment & feedback"
              items={[
                "MCQ and multiple-response templates with consistent feedback patterns.",
                "Likert / rating-style questions for perception and reflection.",
                "Results screens with space for completion messaging and next steps.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* XAPI & TECHNICAL */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            xAPI and technical setup
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DetailBlock
              title="xAPI-ready structure"
              items={[
                "Slides and scenes named with IDs that map to the xAPI wrapper.",
                "Triggers prepared for key events (slide visited, activity completed, rating submitted).",
                "Variables pre-configured for course code, version, and wrapper integration.",
              ]}
            />
            <DetailBlock
              title="Performance & QA"
              items={[
                "Image compression guidelines built into the master file documentation.",
                "Player settings standardised for Connect&Learn delivery.",
                "QA checklist to validate navigation, accessibility focus order, and reporting.",
              ]}
            />
          </div>

          <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[var(--text)]/70 max-w-xl">
              Starting from Storyline templates aligned to the design system
              reduces build time and makes it far easier to layer in xAPI
              analytics consistently.
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
   PRESENTATIONAL COMPONENT
────────────────────────────────────────────── */

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