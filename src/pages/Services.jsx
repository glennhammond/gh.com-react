// src/pages/Services.jsx
import React from "react";

import PageWrapper from "../components/layout/PageWrapper";
import PageIntro from "../components/layout/PageIntro";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SEO from "../components/ui/SEO.jsx";

export default function Services() {
  return (
    <PageWrapper>
      <SEO
        title="Services – Glenn Hammond"
        description="eLearning design, xAPI analytics, and video services to support modern digital learning."
      />

      {/* PAGE INTRO */}
      <Section>
        <Container>
          <PageIntro
            breadcrumb={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
            title="Services"
            intro="I help organisations design, build, and refine digital learning experiences — from early concept through to launch and analytics."
          />
        </Container>
      </Section>

      {/* SERVICES GRID */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
            {/* eLearning */}
            <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-8 space-y-4">
              <h3 className="font-heading text-xl text-[var(--text)]">
                eLearning design & Storyline
              </h3>
              <ul className="text-sm text-[var(--text)]/75 space-y-2">
                <li>End-to-end course design and development</li>
                <li>Storyline templates and component libraries</li>
                <li>Scenario-based learning and branching</li>
                <li>Accessibility-minded layouts and flows</li>
              </ul>
            </div>

            {/* xAPI */}
            <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-8 space-y-4">
              <h3 className="font-heading text-xl text-[var(--text)]">
                xAPI & learning analytics
              </h3>
              <ul className="text-sm text-[var(--text)]/75 space-y-2">
                <li>xAPI statement design and debugging</li>
                <li>LRS setup (Veracity, Learning Locker)</li>
                <li>Dashboards and reporting (Looker Studio, Sheets)</li>
                <li>Using data to improve learning experiences</li>
              </ul>
            </div>

            {/* Media */}
            <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-8 space-y-4">
              <h3 className="font-heading text-xl text-[var(--text)]">
                Video & media
              </h3>
              <ul className="text-sm text-[var(--text)]/75 space-y-2">
                <li>Interview and classroom filming</li>
                <li>Microlearning edits and explainer videos</li>
                <li>Audio cleaning and loudness normalisation</li>
                <li>Graphics, titles, and simple motion</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}