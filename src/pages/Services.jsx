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

        <ul className="mt-20 md:mt-24 space-y-3 text-base leading-6 text-[var(--text)]/80">
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

      {/* HOW I WORK */}
      <Section className="pt-8 md:pt-12">
        <Container>
          <div className="rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/72 dark:bg-white/5 p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_18px_55px_rgba(2,6,23,0.08)] fade-in-up">
            <div className="space-y-8">
              <div className="space-y-3 max-w-[70ch]">
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--text)] opacity-60">
                  How I work
                </span>
                <h2 className="font-heading text-2xl md:text-3xl text-[var(--text)]">
                  Strategy, build and measurement - connected end to end
                </h2>
                <p className="text-sm md:text-base text-[var(--text)] opacity-70 leading-7">
                  Strategy, learner experience and analytics - designed as one connected system.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <ServiceCard
                  title="Strategy"
                  tag="01"
                  items={[
                    "Define outcomes and learner journeys",
                    "Turn complex content into practical learning",
                    "Create scalable frameworks for delivery",
                  ]}
                />
                <ServiceCard
                  title="Build"
                  tag="02"
                  items={[
                    "Storyline and Rise development",
                    "Moodle platforms and onboarding flows",
                    "Reusable, production-ready systems",
                  ]}
                />
                <ServiceCard
                  title="Measurement"
                  tag="03"
                  items={[
                    "xAPI tracking and reporting",
                    "LRS workflows and QA",
                    "Insights that support improvement",
                  ]}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

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

function ServiceCard({ title, blurb, items, tag }) {
  return (
    <div className="site-card p-6 md:p-7 space-y-5">
      <div className="space-y-2">
        <h3 className="font-heading text-xl text-[var(--text)]">{title}</h3>
        {tag && (
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-purple)]">
            {tag}
          </span>
        )}
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