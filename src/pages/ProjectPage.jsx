// src/pages/ProjectPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import ProjectImage from "../components/ProjectImage";
import SEO from "../components/SEO";

import { projects } from "../data/projects";

const placeholderImg = "/images/img-placeholder-1200.jpg";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageWrapper>
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
        description={description.slice(0, 150)}
        url={`https://glennhammond.com/work/${project.slug}`}
      />

      <Section>
        <Container className="py-10 md:py-16 space-y-10 fade-in-up max-w-4xl">
          <Link to="/work" className="text-sm text-brand-primary">
            ← Back to work
          </Link>

          {/* Hero image */}
          <div className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10">
            <ProjectImage
              src={project.image || placeholderImg}
              alt={project.title}
            />
          </div>

          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/60">
              {project.category || project.type || "Project"}
            </p>
            <h1 className="font-heading text-3xl md:text-4xl text-[var(--text)]">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-[var(--text)]/75 max-w-2xl leading-relaxed">
                {project.subtitle}
              </p>
            )}
          </header>

          {description && (
            <article className="space-y-4 text-[var(--text)]/80 leading-relaxed">
              <p>{description}</p>
            </article>
          )}
        </Container>
      </Section>
    </PageWrapper>
  );
}
