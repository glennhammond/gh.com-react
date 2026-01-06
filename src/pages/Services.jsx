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

        <div className="rounded-2xl border border-[rgba(26,20,70,0.18)] bg-[var(--bg-soft)] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.10),0_3px_0_rgba(0,0,0,0.10)] md:max-w-[60ch] md:bg-white/55 md:p-6 md:shadow-[0_18px_44px_rgba(0,0,0,0.10),0_4px_0_rgba(0,0,0,0.10)] lg:p-7">
          <p className="font-heading text-lg leading-7 text-[var(--text)]">
            I design learning that drives measurable improvement.
          </p>
          <div className="mt-4">
            <ul className="mt-2 grid gap-y-3 gap-x-6 sm:grid-cols-2 text-base leading-6 text-[var(--text)]/80">
              {[
                "Learning strategy and solution design",
                "Frameworks, templates, and design systems",
                "Analytics-first learning design (xAPI when needed)",
                "LRS setup and reporting workflows",
                "Delivery support in Storyline/Rise (when it adds value)",
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
                "Video, graphics, and supporting assets as needed",
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