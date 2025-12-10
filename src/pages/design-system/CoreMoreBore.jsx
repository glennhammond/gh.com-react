// src/pages/design-system/CoreMoreBore.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import PageIntro from "../../components/layout/PageIntro";
import SEO from "../../components/ui/SEO.jsx";

export default function CoreMoreBore() {
  return (
    <PageWrapper>
      <SEO
        title="Core, More & Bore – eLearning Design System – Glenn Hammond"
        description="How the Core, More & Bore model shapes content, interaction depth, and time investment across Storyline, Rise, and H5P builds."
        url="https://glennhammond.com/work/elearning-design-system/core-more-bore"
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
                  { label: "Core, More & Bore" },
                ]}
                title="Core, More & Bore"
                intro="A simple model for deciding what must be covered, what can extend learning, and what risks overwhelming or boring participants."
              />
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] overflow-hidden shadow-sm">
                <img
                  src="/images/core-more-bore.png"
                  alt="Diagram showing core, more and bore content tiers"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* MODEL SUMMARY */}
      <Section className="pt-0 md:pt-2">
        <Container className="space-y-6 md:space-y-7 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Using Core, More & Bore in course design
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <TierCard
              label="Core"
              summary="What every participant must understand and be able to do."
              bullets={[
                "Legislative requirements, critical processes, and non-negotiable behaviours.",
                "Mapped directly to learning objectives and assessment.",
                "Designed for clarity, reinforcement, and recall – not decoration.",
              ]}
            />
            <TierCard
              label="More"
              summary="Optional depth that adds value without being mandatory."
              bullets={[
                "Case studies, extended examples, and deeper explanations.",
                "Supports more experienced participants without slowing everyone down.",
                "Often surfaced as expandable content, tabs, accordions, or resources.",
              ]}
            />
            <TierCard
              label="Bore"
              summary="Content that sounds important but doesn’t meaningfully change practice."
              bullets={[
                "Long policy verbatims, dense theory, or duplicated information.",
                "Tends to increase seat time without improving transfer.",
                "Best handled as downloadable reference, not on-screen copy.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* APPLYING THE MODEL */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            How the model shapes the design system
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DetailBlock
              title="Screen and template choices"
              items={[
                "Core content drives the main screen template and primary narrative path.",
                "More content is placed into secondary components: tabs, accordions, flip cards, or sidebars.",
                "Bore content is pushed into downloads, links, or removed entirely when it doesn’t support objectives.",
              ]}
            />
            <DetailBlock
              title="Interaction and time on task"
              items={[
                "Core content uses focused interactions: key checks, scenarios, and reflection prompts.",
                "More content offers optional interactions for those who want to dig deeper.",
                "Seat time is protected by stripping out interactions that don’t add diagnostic or reflective value.",
              ]}
            />
            <DetailBlock
              title="Storyline, Rise & H5P patterns"
              items={[
                "Storyline scenes are structured so the main timeline follows Core, with side-paths for More.",
                "Rise lessons separate Core blocks from optional ‘Deep dive’ or ‘Want to know more?’ blocks.",
                "H5P activities emphasise Core practice, while additional context is provided through linked resources.",
              ]}
            />
            <DetailBlock
              title="Stakeholder conversations"
              items={[
                "The model provides shared language when reviewing content with SMEs and leaders.",
                "Requests to add more detail are challenged with: ‘Is this Core, or is it More?’",
                "Helps maintain focus on what changes behaviour rather than satisfying ‘nice to know’ urges.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* EXAMPLES */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Example: applying Core, More & Bore
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <ExampleBlock
              heading="Policy content"
              core={[
                "Plain-language summary of what staff must do.",
                "Key definitions and thresholds that affect decisions.",
                "Escalation steps and who to contact.",
              ]}
              more={[
                "Selected clauses linked back to the original policy.",
                "Short scenario showing the policy in context.",
              ]}
              bore={[
                "Full policy reproduced on screen.",
                "Historical background and legal references.",
              ]}
            />
            <ExampleBlock
              heading="Procedural content"
              core={[
                "Critical path: the minimum steps required to complete the task safely and correctly.",
                "Clear responsibilities – who does what, when.",
              ]}
              more={[
                "Tips and good-practice variations from experienced practitioners.",
                "Optional checklists and job aids for download.",
              ]}
              bore={[
                "Screens that repeat what users already see in their system.",
                "Multiple screenshots for trivial actions.",
              ]}
            />
            <ExampleBlock
              heading="Conceptual content"
              core={[
                "Simple, concrete explanation of the idea in the workplace context.",
                "One or two strong examples that connect directly to practice.",
              ]}
              more={[
                "Alternative models, frameworks, or academic terminology.",
                "Links to readings or longer videos for those who want them.",
              ]}
              bore={[
                "Lengthy theory without clear application.",
                "Diagrams that don’t affect what learners actually do.",
              ]}
            />
          </div>

          <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[var(--text)]/70 max-w-xl">
              Building Core, More & Bore into the eLearning Design System keeps
              courses focused, respectful of teachers&rsquo; time, and closely
              aligned to real-world decisions.
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

function TierCard({ label, summary, bullets }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-3">
      <h3 className="font-heading text-lg text-[var(--text)]">{label}</h3>
      <p className="text-sm text-[var(--text)]/75">{summary}</p>
      <ul className="space-y-2 text-sm text-[var(--text)]/75">
        {bullets.map((item, idx) => (
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

function ExampleBlock({ heading, core, more, bore }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-4">
      <h3 className="font-heading text-lg text-[var(--text)]">{heading}</h3>

      <div className="space-y-3 text-sm text-[var(--text)]/75">
        <div>
          <p className="font-semibold text-[var(--text)]">Core</p>
          <ul className="space-y-1 list-disc list-inside">
            {core.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-[var(--text)]">More</p>
          <ul className="space-y-1 list-disc list-inside">
            {more.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-[var(--text)]">Bore</p>
          <ul className="space-y-1 list-disc list-inside">
            {bore.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}