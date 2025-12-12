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
        description="Consultancy and instructional design, eLearning/media development, and xAPI learning analytics for modern digital learning."
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
            intro="I help organisations design, build, and refine digital learning experiences - from early concept through to launch and analytics."
          />

          <div className="mt-6 max-w-2xl text-white/80 space-y-3">
            <p>
              You can engage me for a single stream (strategy, build, or data), or combine them end-to-end.
              My focus is practical delivery - clear decisions, clean execution, and measurable improvement.
            </p>
            <p className="text-white/70">
              Typical outputs include storyboards and scripts, Storyline/Rise builds, video assets, xAPI statements,
              LRS configuration, and dashboards that support real reporting.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/85">ADDIE-aligned</span>
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/85">Accessibility-minded</span>
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/85">Reusable systems</span>
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/85">Analytics-ready</span>
          </div>
        </Container>
      </Section>

      {/* SERVICES GRID */}
      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
            <ServiceCard
              title="Consultancy & instructional design"
              blurb="Clarify the problem, define the learning approach, and design experiences that are buildable and measurable."
              tag="Strategy"
              icon="ID"
              items={[
                "Discovery, needs analysis, and learning strategy",
                "Curriculum design, storyboards, and scenario writing",
                "Stakeholder alignment workshops and design sign-off",
                "Accessibility, quality assurance, and evaluation planning",
              ]}
            />

            <ServiceCard
              title="eLearning & media development"
              blurb="Build polished learning experiences and media assets with strong UX, clean structure, and consistent design."
              tag="Build"
              icon="DEV"
              items={[
                "Storyline/Rise builds with strong UX and accessibility",
                "Reusable templates, components, and design systems",
                "Interactive video, microlearning, and supporting assets",
                "Video production, editing, and audio clean-up",
              ]}
            />

            <ServiceCard
              title="xAPI & learning analytics"
              blurb="Instrument your learning with xAPI and dashboards so you can see what’s working - and improve it."
              tag="Data"
              icon="xAPI"
              items={[
                "xAPI implementation, debugging, and statement design",
                "LRS setup (Veracity, Learning Locker) and workflows",
                "Sheets-based parsing/cleaning for faster reporting",
                "Dashboards (Looker Studio) that turn data into insight",
              ]}
            />
          </div>

          {/* Soft CTA under the grid */}
          <div className="mt-10 text-sm text-white/80">
            <p>
              Not sure where your project fits?{" "}
              <a
                href="/contact"
                className="font-heading text-[#F5C84C] hover:text-white hover:underline"
              >
                Get in touch
              </a>{" "}
              and we can map out the right mix of design, xAPI, and media
              support.
            </p>
          </div>
        </Container>
      </Section>

      {/* HOW I WORK */}
      <Section>
        <Container>
          <div className="space-y-6 fade-in-up">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.18em] text-white/70">
                Approach
              </span>
              <h2 className="font-heading text-2xl text-white">How I work</h2>
              <p className="max-w-2xl text-white/80">
                A lightweight process that keeps stakeholders aligned and delivery moving - without overcooking documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StepCard title="Discover" icon="1" text="Define the audience, constraints, and success measures." />
              <StepCard title="Design" icon="2" text="Storyboard, script, prototype, and lock scope." />
              <StepCard title="Build" icon="3" text="Develop learning, media, and templates with QA." />
              <StepCard title="Measure" icon="4" text="Use xAPI and dashboards to iterate with confidence." />
            </div>

            <div>
              <a
                href="/work"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-heading text-[#970067] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C84C]"
              >
                See examples in Work →
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}

function ServiceCard({ title, tag, icon, blurb, items }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/95 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-[#F5C84C] overflow-hidden">
      {/* Visual header (acts like an image without adding files) */}
      <div className="h-14 bg-gradient-to-r from-[#F5C84C] via-[#c01e84] to-[#970067]" />

      <div className="p-8 space-y-5">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="h-10 w-10 rounded-full bg-[#F5C84C]/25 flex items-center justify-center text-[#970067] text-sm font-heading">
              {icon}
            </div>
          )}
          <div className="space-y-1">
            <h3 className="font-heading text-xl text-slate-900">{title}</h3>
            {tag && (
              <span className="inline-flex items-center rounded-full border border-black/10 px-3 py-0.5 text-[11px] uppercase tracking-[0.18em] text-slate-600">
                {tag}
              </span>
            )}
          </div>
        </div>

        {blurb && <p className="text-sm text-slate-700">{blurb}</p>}

        <ul className="space-y-2 text-sm text-slate-700">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F5C84C]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StepCard({ title, icon, text }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-[#F5C84C]/25 flex items-center justify-center text-[#F5C84C] text-sm font-heading">
          {icon}
        </div>
        <h3 className="font-heading text-base text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/80">{text}</p>
    </div>
  );
}