// src/pages/Services.jsx

import React from "react";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import PageWrapper from "../components/layout/PageWrapper";
import PageHeader from "../components/layout/PageHeader";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

export default function Services() {
  return (
    <PageWrapper>
      <SEO
        title="Services — Glenn Hammond"
        description="eLearning design, Storyline development, xAPI analytics, design systems, and video production."
        url="https://glennhammond.com/services"
      />

      <PageHeader
        title="Services"
        subtitle="Support across instructional design, analytics, design systems, and multimedia production."
      >
        <nav className="text-sm text-[var(--text)]/60 flex items-center gap-2 mt-4">
          <Link to="/" className="hover:text-brand-primary">
            Home
          </Link>
          <span>/</span>
          <span>Services</span>
        </nav>
      </PageHeader>

      <Section>
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 fade-in-up">
          <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-8 space-y-4">
            <h3 className="font-heading text-2xl text-[var(--text)]">
              eLearning Design
            </h3>
            <p className="text-[var(--text)]/75 leading-relaxed">
              Full instructional design services including scripting,
              storyboards, content builds, scenario writing, and modern
              workflows using Storyline, Rise, and H5P.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-8 space-y-4">
            <h3 className="font-heading text-2xl text-[var(--text)]">
              xAPI & Analytics
            </h3>
            <p className="text-[var(--text)]/75 leading-relaxed">
              Clean, structured xAPI statements, ActivityID strategy, Veracity
              integration, and Looker Studio dashboards grounded in real data.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-8 space-y-4">
            <h3 className="font-heading text-2xl text-[var(--text)]">
              Design Systems
            </h3>
            <p className="text-[var(--text)]/75 leading-relaxed">
              Scalable Figma design systems for learning, slides, UI kits,
              typography, patterns, and reusable components.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-8 space-y-4">
            <h3 className="font-heading text-2xl text-[var(--text)]">
              Video & Media
            </h3>
            <p className="text-[var(--text)]/75 leading-relaxed">
              Filming, editing, audio mastering, colour grading, motion, and
              microlearning content for PD and marketing.
            </p>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
