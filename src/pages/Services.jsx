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
      <Section className="pb-4 md:pb-6">
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
      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
            <ServiceCard
              title="eLearning design & Storyline"
              tag="Courses"
              icon="SL"
              items={[
                "End-to-end course design and development",
                "Storyline templates and component libraries",
                "Scenario-based learning and branching",
                "Accessibility-minded layouts and flows",
              ]}
            />

            <ServiceCard
              title="xAPI & learning analytics"
              tag="Data"
              icon="⨉"
              items={[
                "xAPI statement design and debugging",
                "LRS setup (Veracity, Learning Locker)",
                "Dashboards and reporting (Looker Studio, Sheets)",
                "Using data to improve learning experiences",
              ]}
            />

            <ServiceCard
              title="Video & media"
              tag="Media"
              icon="▶"
              items={[
                "Interview and classroom filming",
                "Microlearning edits and explainer videos",
                "Audio cleaning and loudness normalisation",
                "Graphics, titles, and simple motion",
              ]}
            />
          </div>

          {/* Soft CTA under the grid */}
          <div className="mt-10 text-sm text-[var(--text)]/70">
            <p>
              Not sure where your project fits?{" "}
              <a
                href="/contact"
                className="font-heading text-brand-primary hover:underline"
              >
                Get in touch
              </a>{" "}
              and we can map out the right mix of design, xAPI, and media
              support.
            </p>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}

function ServiceCard({ title, tag, icon, items }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/95 p-8 space-y-4 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#F97316] transition">
      <div className="flex items-center gap-3">
        {icon && (
          <div className="h-10 w-10 rounded-full bg-[#FFF1E0] flex items-center justify-center text-[#F97316] text-lg font-heading">
            {icon}
          </div>
        )}
        <div className="space-y-1">
          <h3 className="font-heading text-xl text-[var(--text)]">{title}</h3>
          {tag && (
            <span className="inline-flex items-center rounded-full border border-slate-200 px-3 py-0.5 text-[11px] uppercase tracking-[0.18em] text-[var(--text)]/60">
              {tag}
            </span>
          )}
        </div>
      </div>

      <ul className="mt-4 text-sm text-[var(--text)]/75 space-y-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}