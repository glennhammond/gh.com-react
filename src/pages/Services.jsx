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
        description="Strategy, Storyline/Rise builds, and xAPI analytics - practical delivery end-to-end."
      />

      <PageHero
        eyebrow="End-to-end learning delivery"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        title="Services"
        right={
          <div className="hidden md:block">
            <div className="hero-image-frame grain">
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
        <div className="md:hidden hero-image-frame grain mb-6">
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

        <div className="mt-4 md:mt-0 rounded-2xl border border-[rgba(26,20,70,0.18)] bg-[var(--bg-soft)] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.10),0_3px_0_rgba(0,0,0,0.10)] md:max-w-[48ch] md:bg-white/55 md:p-6 md:shadow-[0_18px_44px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)] lg:p-7">

 
          <div className="mt-4">
            <ul className="mt-2 grid gap-y-3 gap-x-6 md:grid-cols-2 text-base leading-6 text-[var(--text)]/80">
              {[
                "Learning strategy and instructional design",
                "Storyline and Rise builds",
                "Video, graphics, and supporting assets",
                "xAPI tracking and wrappers",
                "LRS setup and reporting",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-[14px] -ml-[2px] text-[#8CB8E7] leading-none text-[15px] mt-[0.42em]"
                  >
                    ★
                  </span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageHero>

      {/* SERVICES GRID */}
      <Section className="pt-10 md:pt-14">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
            <ServiceCard
              title="Learning strategy & instructional design"
              blurb="Pinpoint what’s not working, choose the right solution, and design learning you can track."
              items={[
                "Discovery, needs analysis, and performance goals",
                "Curriculum maps, storyboards, scripts, and scenarios",
                "Workshops that align stakeholders and keep decisions moving",
                "Accessibility, QA planning, and evaluation approach",
              ]}
            />

            <ServiceCard
              title="eLearning & media production"
              blurb="Modern Storyline and Rise builds. Consistent UX, structure, and reusable design system."
              items={[
                "Storyline and Rise builds - accessibility and QA included",
                "Reusable templates, components, and design systems",
                "Microlearning, interactions, job aids, and supporting assets",
                "Video editing, graphics, and audio polish",
              ]}
            />

            <ServiceCard
              title="xAPI & learning analytics"
              blurb="Instrument the learning, make the data usable, then turn it into reporting that supports decisions."
              items={[
                "xAPI design, wrappers, debugging, and validation",
                "LRS setup and workflows (Veracity, Learning Locker)",
                "Flattening and cleaning (Sheets-first) for faster analysis",
              ]}
            />
          </div>

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
    </PageWrapper>
  );
}

function ServiceCard({ title, blurb, items }) {
  return (
    <div className="site-card p-8 space-y-5">
      <div>
        <h3 className="font-heading text-xl text-[var(--text)]">{title}</h3>
      </div>

      {blurb && <p className="text-base leading-7 text-[var(--text)]/75">{blurb}</p>}

      <ul className="space-y-3 text-base leading-7 text-[var(--text)]/75">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span
              aria-hidden="true"
              className="shrink-0 w-[14px] -ml-[2px] text-[#8CB8E7] leading-none text-[15px] mt-[0.42em]"
            >
              ★
            </span>
            <span className="flex-1">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}