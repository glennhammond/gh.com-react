// src/pages/ProjectPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import ProjectImage from "../components/ProjectImage";
import SEO from "../components/ui/SEO.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

import { projects } from "../data/projects";

// Sections for the eLearning Design System grid
const elearningSections = [
  {
    slug: "overview",
    title: "eLearning Design System",
    href: "/work/elearning-design-system/overview",
    // use the main design system image here
    image: "/images/elearning-design-system.png",
  },
  {
    slug: "atomic-design",
    title: "Atomic Design",
    href: "/work/elearning-design-system/atomic-design",
    image: "/images/atomic-design.png",
  },
  {
    slug: "core-more-bore",
    title: "Core, More & Bore",
    href: "/work/elearning-design-system/core-more-bore",
    image: "/images/core-more-bore.png",
  },
  {
    slug: "colours",
    title: "Colours",
    href: "/work/elearning-design-system/colours",
    image: "/images/colours.png",
  },
  {
    slug: "typography",
    title: "Typography",
    href: "/work/elearning-design-system/typography",
    image: "/images/typography.png",
  },
  {
    slug: "images-icons",
    title: "Images & Icons",
    href: "/work/elearning-design-system/images-icons",
    image: "/images/icons.png",
  },
  {
    slug: "course-structure",
    title: "Course Structure",
    href: "/work/elearning-design-system/course-structure",
    image: "/images/course-structure.png",
  },
  {
    slug: "asset-register",
    title: "Asset Register",
    href: "/work/elearning-design-system/asset-register",
    image: "/images/asset-register.png",
  },
  {
    slug: "storyline",
    title: "Storyline",
    href: "/work/elearning-design-system/storyline",
    image: "/images/storyline.png",
  },
];

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageWrapper>
        <SEO title="Project not found – Glenn Hammond" />
        <Section>
          <Container className="py-24 text-center space-y-4">
            <h1 className="font-heading text-3xl text-[var(--text)]">
              Project not found
            </h1>
            <Link to="/work" className="text-sm text-brand-primary">
              ← Back to work
            </Link>
          </Container>
        </Section>
      </PageWrapper>
    );
  }

  const description =
    project.longDescription || project.description || project.subtitle || "";

  // Only special-case the eLearning Design System page
  const isElearningDesignSystem = slug === "elearning-design-system";

  return (
    <PageWrapper>
      <SEO
        title={`${project.title} — Glenn Hammond`}
        description={description.slice(0, 160)}
      />

      <Section>
        <Container className="space-y-12 fade-in-up max-w-4xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Work", href: "/work" },
              { label: project.title },
            ]}
          />

          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/60">
              {project.category || "Project"}
            </p>
            <h1 className="font-heading text-4xl text-[var(--text)]">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-[var(--text)]/70 leading-relaxed max-w-2xl">
                {project.subtitle}
              </p>
            )}
          </header>

          {/* Hero image – shown for all projects EXCEPT eLearning Design System */}
          {!isElearningDesignSystem && (
            <div className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm">
              <ProjectImage src={project.image} alt={project.title} />
            </div>
          )}

          {/* Body copy */}
          {description && (
            <article className="text-[var(--text)]/80 leading-relaxed space-y-4">
              <p>{description}</p>
            </article>
          )}

          {/* eLearning Design System grid */}
          {isElearningDesignSystem && (
            <div className="pt-10 border-t border-slate-200/70 space-y-6">
              <h2 className="font-heading text-2xl text-[var(--text)]">
                Explore the system
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {elearningSections.map((item) => (
                  <Link
                    key={item.slug}
                    to={item.href}
                    className="group flex flex-col rounded-2xl bg-white shadow-sm border border-slate-200 overflow-hidden transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70"
                  >
                    {/* Image area */}
                    <div className="flex-1 flex items-center justify-center px-8 pt-8 pb-4 bg-slate-50">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-24 w-auto object-contain"
                      />
                    </div>

                    {/* Label area */}
                    <div className="px-6 py-4 bg-white border-t border-slate-200">
                      <h3 className="font-semibold text-base text-[var(--text)]">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link
            to="/work"
            className="text-sm text-brand-primary hover:underline inline-block"
          >
            ← Back to all work
          </Link>
        </Container>
      </Section>
    </PageWrapper>
  );
}