// src/pages/Services.jsx
import React from "react";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SEO from "../components/ui/SEO.jsx";
import PageHero from "../components/layout/PageHero";

export default function Services() {
  return (
    <PageWrapper>
      <SEO
        title="Services - Glenn Hammond"
        description="Consultancy and instructional design, eLearning/media development, and xAPI learning analytics for modern digital learning."
      />

      {/* PAGE INTRO */}
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        title="Services"
        right={
          <div className="hidden md:block">
            <div className="site-card overflow-hidden">
              <div className="relative aspect-[16/10] w-full">
                <img
                  src="/images/heroes/glenn-hammond-site-assets-hero-services.webp"
                  alt="Services hero"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        }
      >
        <div className="md:hidden site-card overflow-hidden mb-6">
          <div className="relative aspect-[16/10] w-full">
            <img
              src="/images/heroes/glenn-hammond-site-assets-hero-services.webp"
              alt="Services hero"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <p>
          Engage me for one stream - strategy, build, or analytics - or combine them end-to-end.
          I focus on practical delivery: clear decisions, clean execution, measurable improvement.
        </p>
        <div className="space-y-0">
          <p className="text-[var(--text)]/80">Typical outputs:</p>
          <style>{`
            .service-bullets-hero { list-style: none !important; padding: 0 !important; padding-left: 2.25rem !important; }
            .service-bullets-hero li { list-style: none !important; padding: 0 !important; }
            .service-bullets-hero li::marker { content: none !important; }
            .service-bullets-hero li::before { content: none !important; }
          `}</style>
          <ul className="service-bullets-hero w-full text-left list-none m-0 mt-6 space-y-6 text-base leading-7 text-[var(--text)]/80">
            {[
              "eLearning consultancy + ID",
              "Storyboards and scripts",
              "Storyline/Rise builds",
              "Video and graphic assets",
              "xAPI statement design and instrumentation",
              "LRS setup and reporting workflows",
            ].map((item) => (
              <li key={item} className="list-none relative pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 -translate-x-[18px] text-[var(--secondary)] leading-none text-[15px] top-[0.42em]"
                >
                  ★
                </span>
                <span className="block">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageHero>

      {/* SERVICES GRID */}
      <Section className="pt-10 md:pt-14">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
            <ServiceCard
              title="Consultancy & instructional design"
              blurb="Get clarity, lock the approach, and design learning that’s buildable and measurable."
              items={[
                "Discovery, needs analysis, and learning strategy",
                "Curriculum design, storyboards, scripts, and scenarios",
                "Stakeholder workshops and fast design sign-off",
                "Accessibility, QA, and evaluation planning",
              ]}
              imageSrc="/images/heroes/glenn-hammond-site-assets-hero-services.webp"
              imageAlt="Learning strategy - notes and planning"
            />

            <ServiceCard
              title="eLearning & media development"
              blurb="Build polished learning and media with strong UX, clean structure, and consistent design."
              items={[
                "Storyline/Rise builds - accessibility and QA baked in",
                "Reusable templates, components, and design systems",
                "Microlearning, interactions, and supporting assets",
                "Video production, editing, and audio clean-up",
              ]}
              imageSrc="/images/heroes/glenn-hammond-site-assets-hero-services.webp"
              imageAlt="eLearning development - interface and timeline"
            />

            <ServiceCard
              title="xAPI & learning analytics"
              blurb="Track what’s happening with xAPI and dashboards - then use the data to improve."
              items={[
                "xAPI implementation, debugging, and statement design",
                "LRS setup (Veracity, Learning Locker) and workflows",
                "Parsing and cleaning (Sheets-first) for faster reporting",
                "Looker Studio dashboards that turn data into decisions",
              ]}
              imageSrc="/images/work/glenn-hammond-site-assets-veracity.webp"
              imageAlt="Learning analytics - dashboard and data"
            />
          </div>

          {/* Soft CTA under the grid */}
          <div className="mt-10 text-sm text-[var(--text)]/80">
            <p>
              Not sure where your project fits?{" "}
              <a href="/contact" className="font-heading text-[var(--secondary)] hover:underline">
                Get in touch
              </a>{" "}
              and we’ll map the right mix of design, build, and analytics.
            </p>
          </div>
        </Container>
      </Section>

      {/* HOW I WORK */}
      <Section>
        <Container>
          <div className="space-y-6 fade-in-up">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/70">Approach</span>
              <h2 className="font-heading text-2xl text-[var(--text)]">How I work</h2>
              <p className="max-w-2xl text-[var(--text)]/80">
                A simple process - clear decisions, steady momentum, clean delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StepCard title="Discover" icon="1" text="Define the audience, constraints, and what success looks like." />
              <StepCard title="Design" icon="2" text="Storyboard, script, prototype - then lock scope." />
              <StepCard title="Build" icon="3" text="Develop learning and media - with QA and accessibility." />
              <StepCard title="Measure" icon="4" text="Use xAPI and dashboards to iterate with confidence." />
            </div>

            <div>
              <a
                href="/work"
                className="inline-flex items-center justify-center rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/15 px-5 py-3 text-sm font-heading text-[var(--text)] shadow-sm card-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary)]/40"
              >
                See work examples →
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}

function ServiceCard({ title, blurb, items, imageSrc, imageAlt }) {
  return (
    <div className="site-card overflow-hidden">
      {/* Card header image */}
      {imageSrc ? (
        <div className="relative h-44 w-full">
          <img
            src={imageSrc}
            alt={imageAlt || ""}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      ) : (
        <div className="h-14 bg-gradient-to-r from-[#F5C84C] via-[#c01e84] to-[#970067]" />
      )}

      <div className="p-8 space-y-5">
        <div>
          <h3 className="font-heading text-xl text-[var(--text)]">{title}</h3>
        </div>

        {blurb && <p className="text-base leading-7 text-[var(--text)]/75">{blurb}</p>}

        <style>{`
          .service-bullets { list-style: none !important; margin: 0 !important; padding: 0 !important; }
          .service-bullets li { list-style: none !important; }
          .service-bullets li::marker { content: none !important; }
          .service-bullets li::before { content: none !important; }
        `}</style>
        <ul className="service-bullets w-full text-left list-none m-0 p-0 space-y-3 text-base leading-7 text-[var(--text)]/75">
          {items.map((item) => (
            <li key={item} className="list-none flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className="shrink-0 w-[14px] -ml-[2px] text-[var(--secondary)] leading-none text-[15px] mt-[0.42em]"
              >
                ★
              </span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StepCard({ title, icon, text }) {
  return (
    <div className="site-card p-5">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-[color:var(--secondary)]/12 border border-[color:var(--secondary)]/25 flex items-center justify-center text-[var(--secondary)] text-sm font-heading shadow-sm">
          {icon}
        </div>
        <h3 className="font-heading text-base text-[var(--text)]">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-[var(--text)]/75">{text}</p>
    </div>
  );
}