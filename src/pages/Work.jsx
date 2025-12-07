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

export default function Work() {
  return (
    <PageWrapper>
      <SEO
        title="Work – Portfolio"
        description="Selected projects across eLearning, UX for learning, Storyline templates, xAPI, and digital media."
      />

      {/* PAGE INTRO – matches About/Services/Blog */}
      <Section>
        <Container>
          <PageIntro
            breadcrumb={[
              { label: "Home", href: "/" },
              { label: "Work" },
            ]}
            title="Selected work"
            intro="A few projects that show how I bring learning design, UX, xAPI, and media together."
          />
        </Container>
      </Section>

      {/* PROJECTS GRID */}
      <Section>
        <Container>
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
        </Container>
      </Section>
    </PageWrapper>
  );
}