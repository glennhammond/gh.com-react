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
        description="Learning strategy, delivery frameworks, and analytics - measurable improvement end-to-end."
      />

      <PageHero
        variant="split"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        eyebrow="What I do"
        title="Services"
        right={
          <div className="hidden md:block self-start">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_14px_34px_rgba(0,0,0,0.10),0_3px_0_rgba(0,0,0,0.10)] dark:border-white/10 dark:bg-white/5">
              <img
                src="/images/heroes/glenn-hammond-site-assets-hero-services.webp"
                alt="Services hero"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        }
      >
        <div className="md:hidden mb-6">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_14px_34px_rgba(0,0,0,0.10),0_3px_0_rgba(0,0,0,0.10)] dark:border-white/10 dark:bg-white/5">
            <img
              src="/images/heroes/glenn-hammond-site-assets-hero-services.webp"
              alt="Services hero"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="space-y-3 max-w-3xl text-sm md:text-base leading-relaxed text-[var(--text)]/75">
          <p>
            I design learning that drives measurable improvement - strategy, build, and measurement working together.
          </p>
          <p>
            Use me for end-to-end delivery, or plug me in where the project needs stronger structure, cleaner UX, or better data.
          </p>
        </div>

        <ul className="mt-6 space-y-3 text-base leading-6 text-[var(--text)]/80">
          {[
            "Learning strategy and solution design",
            "Frameworks, templates, and design systems",
            "Analytics-first learning design & xAPI",
            "LRS setup and reporting workflows",
            "Delivery support in Storyline/Rise",
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
      </PageHero>

      {/* SERVICES GRID */}
      <Section className="pt-10 md:pt-14">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up">
            <ServiceCard
              title="Learning strategy & solution design"
              blurb="Define the performance gap, choose the right approach, and design learning that’s buildable, testable, and trackable."
              items={[
                "Discovery, needs analysis, and performance goals",
                "Learning architecture, modality decisions, and program structure",
                "Sign-off-ready storyboards, scripts, and scenario design",
                "Workshops that align stakeholders and keep decisions moving",
                "Accessibility, QA planning, and evaluation approach",
              ]}
            />

            <ServiceCard
              title="Frameworks, systems & delivery support"
              blurb="Reusable patterns and consistent UX that make learning easier to build, maintain, and scale. Delivery support when it de-risks the work."
              items={[
                "Modular design systems for Storyline and Rise",
                "Reusable templates, components, and accessibility patterns",
                "Prototyping complex interactions and learning flows",
                "Delivery support in Storyline/Rise when it unblocks the project",
                "Video, graphics, and supporting assets",
              ]}
            />

            <ServiceCard
              title="Learning data & analytics"
              blurb="Design measurement in from day one - make the data usable, then turn it into reporting that supports decisions."
              items={[
                "xAPI strategy, wrappers, debugging, and validation",
                "LRS setup and workflows (Veracity, Learning Locker)",
                "Sheets-first flattening and cleaning for faster analysis",
                "Dashboards and reporting that go beyond completion rates",
              ]}
            />
          </div>

          <div className="mt-10 text-sm text-[var(--text)]/80">
            <p>
              Not sure what you need yet?{" "}
              <a href="/contact" className="font-heading text-[var(--secondary)] hover:underline">
                Get in touch
              </a>{" "}
              and we’ll work out the right mix of strategy, frameworks, and measurement.
            </p>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}

function ServiceCard({ title, blurb, items }) {
  return (
    <div className="site-card p-6 md:p-7 space-y-5">
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