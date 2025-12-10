import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import PageIntro from "../../components/layout/PageIntro";
import SEO from "../../components/ui/SEO.jsx";

export default function CourseStructure() {
  return (
    <PageWrapper>
      <SEO
        title="Course Structure – eLearning Design System – Glenn Hammond"
        description="Course flows for ISQ professional learning, aligning objectives, content flow, and assessment across Storyline, Rise, and H5P."
        url="https://glennhammond.com/work/elearning-design-system/course-structure"
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
                  { label: "Course Structure" },
                ]}
                title="Course structure"
                intro="Reusable course flows that keep modules focused, time-respectful, and aligned to the same learning journey."
              />
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] overflow-hidden shadow-sm">
                <img
                  src="/images/course-structure.png"
                  alt="Course structure diagram showing phases of a module"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FLOW */}
      <Section className="pt-0 md:pt-2">
        <Container className="space-y-6 md:space-y-7 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">Flow</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <PhaseCard
              title="1. Orient"
              items={[
                "Clear welcome, rationale, and estimated time.",
                "High-level objectives in teacher-friendly language.",
                "Any prerequisite knowledge or context flagged up front.",
              ]}
            />
            <PhaseCard
              title="2. Explore & practise"
              items={[
                "Core concepts introduced with concise explanation and worked examples.",
                "Opportunities to apply ideas to realistic classroom or leadership scenarios.",
                "Checks for understanding embedded regularly, not just at the end.",
              ]}
            />
            <PhaseCard
              title="3. Apply & reflect"
              items={[
                "Reflection prompts linking learning back to the participant’s role and school context.",
                "Simple action planning or next steps, ideally captured for follow-up.",
                "Pointers to ‘More’ resources without overloading the main flow.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* PATTERNS BY TOOL */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Patterns
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <DetailBlock
              title="Storyline"
              items={[
                "Scene-based structure: one scene per phase (orient, explore, apply) where appropriate.",
                "Navigation designed so participants always know where they are in the journey.",
                "Scenario-driven screens for practice, with clear feedback and links to guidance.",
              ]}
            />
            <DetailBlock
              title="Rise"
              items={[
                "Lessons mapped directly to phases in the flow.",
                "Blocks chosen to support scanning: headings, accordions, knowledge checks.",
                "Longer reference material kept in separate lessons or as downloads.",
              ]}
            />
            <DetailBlock
              title="H5P & supporting activities"
              items={[
                "H5P used for targeted practice or micro-learning, not entire courses.",
                "Activities aligned to one or two objectives at a time.",
                "Embedded within Storyline or Rise so they sit in the wider narrative.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* GOVERNANCE */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Governance
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DetailBlock
              title="Time expectations"
              items={[
                "Short courses typically sit around 30–60 minutes; extended programmes are clearly flagged.",
                "Each phase has indicative timings to help avoid scope creep.",
                "Content requests from stakeholders are checked against time limits and Core/More/Bore.",
              ]}
            />
            <DetailBlock
              title="Review checkpoints"
              items={[
                "Structure reviewed early with SMEs before content is fully written.",
                "QA ensures that assessment maps back cleanly to objectives, not just to content.",
                "Feedback from pilot groups feeds into updates to shared flows and templates.",
              ]}
            />
          </div>

          <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[var(--text)]/70 max-w-xl">
              Shared course flows make it easier for teachers and leaders to
              navigate modules, and easier for you to scale production without
              reinventing the journey every time.
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

function BulletList({ items }) {
  return (
    <ul className="space-y-2 text-sm text-[var(--text)]/75 list-none">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-2">
          <span className="mt-[3px] inline-flex h-4 w-4 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3 text-brand-primary"
              fill="currentColor"
              aria-hidden="true"
            >
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PhaseCard({ title, items }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-3">
      <h3 className="font-heading text-lg text-[var(--text)]">{title}</h3>
      <BulletList items={items} />
    </div>
  );
}

function DetailBlock({ title, items }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-3">
      <h3 className="font-heading text-lg text-[var(--text)]">{title}</h3>
      <BulletList items={items} />
    </div>
  );
}