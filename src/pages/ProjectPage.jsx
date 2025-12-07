// src/pages/ProjectPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import ProjectImage from "../components/ProjectImage";
import SEO from "../components/ui/SEO.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import PageHeader from "../components/layout/PageHeader";

import { projects } from "../data/projects";

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

          {/* Hero image */}
          <div className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm">
            <ProjectImage src={project.image} alt={project.title} />
          </div>

          {/* Body */}
          {description && (
            <article className="text-[var(--text)]/80 leading-relaxed space-y-4">
              <p>{description}</p>
            </article>
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