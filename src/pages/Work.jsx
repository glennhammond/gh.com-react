// src/pages/Work.jsx

import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import PageHeader from "../components/layout/PageHeader";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

import { projects } from "../data/projects";
import ProjectImage from "../components/ProjectImage";

export default function Work() {
  return (
    <PageWrapper>
      {/* ============================
          PAGE HEADER (using new system)
      ============================= */}
      <PageHeader
        title="Selected Work"
        subtitle="A collection of projects across eLearning, design systems, video, and emerging interactive learning experiences."
      >
        {/* Optional breadcrumb */}
        <nav className="text-sm text-[var(--text)]/60 flex items-center gap-2 mt-4">
          <Link to="/" className="hover:text-brand-primary">
            Home
          </Link>
          <span>/</span>
          <span>Work</span>
        </nav>
      </PageHeader>

      {/* ============================
          PROJECT GRID
      ============================= */}
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 fade-in-up">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className="
                rounded-3xl border border-black/10 dark:border-white/10
                bg-[var(--bg)]/85 shadow-sm hover:shadow-md hover:-translate-y-[2px]
                transition-all duration-200
                overflow-hidden
              "
            >
              <ProjectImage
                src={project.previewImage || "/images/placeholder-project.webp"}
                alt={project.title}
              />

              <div className="p-6 space-y-3">
                <h3 className="font-heading text-xl text-[var(--text)]">
                  {project.title}
                </h3>

                <p className="text-sm text-[var(--text)]/70 leading-relaxed">
                  {project.subtitle}
                </p>

                <span className="text-sm text-brand-primary hover:underline">
                  Explore project →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}
