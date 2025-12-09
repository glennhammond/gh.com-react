// src/pages/Work.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SEO from "../components/ui/SEO.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import PageIntro from "../components/layout/PageIntro";

import { projects } from "../data/projects";

// Focus areas / sectors based on your real client work
const focusAreas = [
  {
    id: "elearning-design-system",
    label: "Design system",
    title: "eLearning Design System",
    overview:
      "A practical framework I use to keep course design consistent and efficient across projects.",
    highlights: [
      "Design tokens, variables, and reusable components",
      "Figma-to-Storyline workflow for faster builds",
      "Accessible 16:9 templates with optional xAPI hooks",
    ],
    value:
      "Developed and refined across long-term projects, so new modules stay on-brand and easy to maintain.",
  },
  {
    id: "aviation",
    label: "Aviation",
    title: "Aviation",
    overview:
      "eLearning modules for the Civil Aviation Safety Authority (CASA), where procedure and clarity are critical.",
    highlights: [
      "SCORM and xAPI-enabled Storyline courses",
      "Scenario-based activities around real aviation tasks",
      "Content aligned with CASA requirements and guidance",
    ],
    value:
      "Gives aviation staff structured training they can revisit when they need a clear reference.",
  },
  {
    id: "education-compliance",
    label: "Education",
    title: "Education – Compliance & PD (ISQ)",
    overview:
      "Long-term work with Independent Schools Queensland on compliance and professional learning for non-state schools.",
    highlights: [
      "Modules aligned with Queensland and Australian legislation",
      "Storyline and Rise builds using a Core–More–Bore approach",
      "Resources tailored to teachers, principals, and board members",
    ],
    value:
      "Helps schools meet obligations while supporting staff practice and governance.",
  },
  {
    id: "education-early-years",
    label: "Education",
    title: "Education – Early Years (Goodstart)",
    overview:
      "Professional learning for Goodstart Institute of Early Learning and other early childhood contexts.",
    highlights: [
      "Scenarios drawn from everyday early childhood practice",
      "Focus on wellbeing, safety, and quality interactions",
      "Short, practical activities rather than long lectures",
    ],
    value:
      "Provides realistic examples and strategies educators can use straight away with children and families.",
  },
  {
    id: "health-wellbeing",
    label: "Wellbeing",
    title: "Health & Wellbeing (Corporate Yoga Australia)",
    overview:
      "Courses and digital content supporting workplace wellbeing with Corporate Yoga Australia.",
    highlights: [
      "Approachable modules on wellbeing, stress and resilience",
      "Reflection activities that support small, realistic changes",
      "Options to sit alongside broader wellbeing initiatives",
    ],
    value:
      "Gives organisations structured, repeatable learning that complements in-person wellbeing programmes.",
  },
  {
    id: "corporate-training",
    label: "Corporate",
    title: "Corporate Training (LMIT and others)",
    overview:
      "Custom training for organisations such as the Line Management Institute of Training.",
    highlights: [
      "Bespoke eLearning and short how-to units",
      "Consistent design using my eLearning Design System",
      "SCORM/xAPI integration with existing LMS platforms",
    ],
    value:
      "Fits how teams actually work, without needing to start from scratch each time something changes.",
  },
  {
    id: "business-management",
    label: "Capability",
    title: "Business Management",
    overview:
      "Modules on communication, project work, and day-to-day leadership drawn from real organisational contexts.",
    highlights: [
      "Scenario-based activities instead of theory-heavy slides",
      "Focus on change, feedback and everyday decision-making",
      "SCORM/xAPI support to track completion and progress",
    ],
    value:
      "Gives staff practical tools they can adapt to their own role and organisation.",
  },
];

export default function Work() {
  return (
    <PageWrapper>
      <SEO
        title="Work – Portfolio"
        description="A sample of the projects I’ve delivered over the past 15+ years across education, aviation, health and corporate training, combining instructional design, UX for learning, media production and analytics."
      />

      {/* PAGE INTRO + PROJECT GRID TOGETHER */}
      <Section>
        <Container className="space-y-14 md:space-y-16">
          <PageIntro
            breadcrumb={[
              { label: "Home", href: "/" },
              { label: "Work" },
            ]}
            title="Work"
            intro="Examples of the work I’ve done with organisations like ISQ, CASA, Goodstart, Corporate Yoga Australia and LMIT, blending instructional design, UX for learning and media."
          />

          {/* PROJECTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-12 fade-in-up">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="
                  group relative flex flex-col justify-between
                  rounded-3xl border border-[var(--accent-soft-2)]
                  bg-[var(--bg-soft)]
                  px-8 pt-0 pb-7
                  shadow-sm shadow-[var(--accent-soft-2)]
                  hover:-translate-y-0.5 hover:shadow-md hover:shadow-[var(--accent-soft)]
                  hover:border-[var(--accent)]
                  transition-transform transition-shadow duration-200 ease-out
                  cursor-pointer overflow-hidden
                "
              >
                {/* Image / placeholder */}
                <div className="mb-5 -mx-8 bg-[var(--bg-soft)]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain"
                    />
                  ) : (
                    <div
                      className="
                        h-40 w-full
                        bg-gradient-to-br from-[var(--accent-soft)] to-[var(--color-brand-soft)]
                        flex items-center justify-center
                      "
                    >
                      <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--accent-strong)]/80">
                        {project.category || "Case study"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Text content */}
                <div className="space-y-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    {project.category || "Case study"}
                  </p>

                  <h3 className="text-xl font-semibold text-[var(--text)]">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <p className="text-sm text-[var(--muted)]">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                {/* Divider + meta + CTA */}
                <hr className="mt-5 mb-3 border-t border-[var(--accent-soft-2)]" />

                <div className="flex items-center justify-between text-xs md:text-sm">
                  <span className="text-[var(--muted)]">
                    {project.meta || "eLearning · Case study"}
                  </span>
                  <span
                    className="
                      inline-flex items-center gap-1
                      text-[var(--accent)] font-medium
                      group-hover:text-[var(--accent-strong)]
                    "
                  >
                    View project
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* FOCUS AREAS / SECTORS */}
          <section className="pt-6 md:pt-10 border-t border-[var(--accent-soft-2)]">
            <div className="space-y-6 md:space-y-8">
              <div className="max-w-3xl">
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--text)]">
                  Areas I specialise in
                </h2>
                <p className="mt-2 text-sm md:text-base text-[var(--muted)]">
                  A snapshot of the sectors and organisations I’ve worked with,
                  and the types of problems I usually help solve.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
                {focusAreas.map((area) => (
                  <div
                    key={area.id}
                    className="
                      rounded-2xl border border-[var(--accent-soft-2)]
                      bg-[var(--bg-soft)]
                      p-5 md:p-6
                      shadow-sm
                    "
                  >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)] mb-2">
                      {area.label}
                    </p>
                    <h3 className="text-lg font-semibold text-[var(--text)]">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {area.overview}
                    </p>

                    <ul className="mt-3 space-y-1.5 text-sm text-[var(--text)]">
                      {area.highlights.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-[var(--accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {area.value && (
                      <p className="mt-3 text-xs md:text-sm text-[var(--muted)]">
                        <span className="font-medium text-[var(--text)]">
                          Value:&nbsp;
                        </span>
                        {area.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </Section>
    </PageWrapper>
  );
}