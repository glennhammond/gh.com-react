// src/pages/ElearningDesignSystemOverview.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import PageIntro from "../components/layout/PageIntro";
import SEO from "../components/ui/SEO.jsx";

export default function ElearningDesignSystemOverview() {
  return (
    <PageWrapper>
      <SEO
        title="eLearning Design System Overview – Glenn Hammond"
        description="How a reusable eLearning design system streamlines Storyline, Rise, and H5P development."
        url="https://glennhammond.com/work/elearning-design-system/overview"
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
                  { label: "Overview" },
                ]}
                title="eLearning Design System Overview"
                intro="A reusable design system for Storyline, Rise, and H5P that standardises UI, improves learner experience, and speeds up course development."
              />
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] overflow-hidden shadow-sm">
                <img
                  src="/images/elearning-design-system.png"
                  alt="Preview of the eLearning Design System layouts"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* OBJECTIVES */}
      <Section className="pt-0 md:pt-2">
        <Container className="space-y-6 md:space-y-7 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Objectives
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ObjectiveCard
              title="Visual & instructional consistency"
              items={[
                "Align all modules with ISQ brand guidelines.",
                "Use common layouts, interactions, and feedback patterns.",
                "Create a recognisable experience across Storyline, Rise, and H5P.",
              ]}
            />
            <ObjectiveCard
              title="Streamlined development"
              items={[
                "Pre-prepared assets and templates reduce rebuild time.",
                "Central patterns mean less rework and fewer errors.",
                "Supports rapid development for an expanding PD catalogue.",
              ]}
            />
            <ObjectiveCard
              title="Stronger learner experience"
              items={[
                "Apply UX best practice to navigation and content flow.",
                "Reduce cognitive load through chunking and clear hierarchy.",
                "Make key actions and next steps unambiguous.",
              ]}
            />
            <ObjectiveCard
              title="Accessibility & analytics ready"
              items={[
                "Bake WCAG 2.1 AA into layouts and components.",
                "Provide consistent patterns for alt text, focus and contrast.",
                "Design components with xAPI tracking and reporting in mind.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* COMPONENT LIBRARY */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-heading text-2xl text-[var(--text)]">
              Component library
            </h2>
            <p className="text-sm text-[var(--text)]/70 max-w-md">
              Components are built for modular reuse across Storyline, Rise and
              H5P. Each pattern has guidance for when to use it, and how it
              supports learning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ComponentGroup
              title="Navigation"
              items={[
                "Progress indicators (linear & modular)",
                "Primary / secondary buttons",
                "Global / in-module menus",
                "Tabs (vertical / horizontal)",
              ]}
            />
            <ComponentGroup
              title="Presentation"
              items={[
                "Column-based layouts",
                "Text blocks (standard, emphasis, quote)",
                "Card grids & flip cards",
                "Accordions",
                "Modal pop-ups / lightboxes",
                "Icon and imagery patterns",
              ]}
            />
            <ComponentGroup
              title="Guidance & instruction"
              items={[
                "Learning objective layouts",
                "Pre-course instruction screens",
                "Information / hint call-outs",
                "Tooltips & help layers",
              ]}
            />
            <ComponentGroup
              title="Interactive"
              items={[
                "Click-to-reveal (text & image)",
                "Scenario / branching shells",
                "Decision-making activities",
                "Drag-and-drop interactions",
              ]}
            />
            <ComponentGroup
              title="Assessment"
              items={[
                "Multiple choice / multiple select",
                "True / false",
                "Confidence-based questions",
                "Likert-style surveys",
                "Drag-and-drop assessments",
                "Results & summary screens",
              ]}
            />
            <ComponentGroup
              title="Feedback & support"
              items={[
                "Feedback layers (correct / incorrect / try again)",
                "Progress / completion messages",
                "Alert patterns (info, success, warning)",
                "Resource library (PDFs, links)",
                "FAQ layouts",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* DESIGN SYSTEM COMPONENTS */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Design system components
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DetailBlock
              title="Visual identity"
              items={[
                "Font pairing: Century Gothic for headings, Open Sans for body copy.",
                "Colour palette aligned with ISQ branding, with roles for backgrounds, accents and feedback.",
                "Iconography and imagery guidelines to keep courses visually coherent.",
                "Button styles, layout templates and media treatments defined once and reused.",
              ]}
            />
            <DetailBlock
              title="Functional templates"
              items={[
                "Branded Storyline master files for consistent navigation and structure.",
                "Slide templates for intros, outcomes, case studies, interactions and knowledge checks.",
                "Pre-built Storyline interactions (tabs, click-and-reveal, quizzes).",
                "Reference patterns for Rise and H5P so cross-platform modules still feel like one ecosystem.",
              ]}
            />
            <DetailBlock
              title="UX & accessibility"
              items={[
                "Clear navigation and calls to action on every screen.",
                "Structured content model that supports chunking and visual hierarchy.",
                "WCAG 2.1 AA baked into contrast, focus order, alt text and keyboard access.",
                "Considered use of motion, audio and video to support—not distract from—learning.",
              ]}
            />
            <DetailBlock
              title="Asset management & governance"
              items={[
                "Centralised template and asset library in SharePoint or Notion.",
                "Version control and naming conventions for courses and components.",
                "Documented contribution model for updating or extending the system.",
                "Example builds and recipes teams can copy and adapt.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* PROCESS / VALUE */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Streamlined development & consistency
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <DetailBlock
              title="Streamlined development process"
              items={[
                "Central design system means faster production and fewer design decisions per course.",
                "Shared patterns keep review conversations focused on content, not layout.",
                "QA checklist aligned with the system before publishing.",
                "Scales easily to new PD topics and formats while staying on brand.",
                "Future-ready with support for xAPI tracking and analytics.",
              ]}
            />
            <DetailBlock
              title="Visual & instructional consistency"
              items={[
                "Professional course presentation reinforces ISQ’s credibility.",
                "Common structures simplify learner navigation and reduce friction.",
                "Instructional patterns (objectives, practice, feedback, reflection) are applied consistently.",
                "Overall delivery reflects contemporary standards in professional learning.",
              ]}
            />
          </div>

          <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[var(--text)]/70 max-w-xl">
              The eLearning Design System is a living asset. As new modules are
              built and tested with teachers and school leaders, successful
              patterns are fed back into the library, improving both speed and
              quality over time.
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
   SMALL PRESENTATIONAL COMPONENTS
────────────────────────────────────────────── */

function ObjectiveCard({ title, items }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-3">
      <h3 className="font-heading text-lg text-[var(--text)]">{title}</h3>
      <ul className="space-y-2 text-sm text-[var(--text)]/75">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-brand-primary/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComponentGroup({ title, items }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-3">
      <h3 className="font-heading text-lg text-[var(--text)]">{title}</h3>
      <ul className="space-y-1.5 text-sm text-[var(--text)]/75">
        {items.map((item, idx) => (
          <li key={idx}>• {item}</li>
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