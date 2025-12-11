// src/pages/work/CorporateYogaAustraliaWebsite.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import PageIntro from "../../components/layout/PageIntro";
import SEO from "../../components/ui/SEO.jsx";

export default function CorporateYogaAustraliaWebsite() {
  return (
    <PageWrapper>
      <SEO
        title="Corporate Yoga Australia – Website Redesign – Glenn Hammond"
        description="Modern, conversion-focused WordPress website for Corporate Yoga Australia, designed to showcase workplace wellbeing services and drive enquiries."
        url="https://glennhammond.com/work/corporate-yoga-australia-website"
      />

      {/* HERO / INTRO */}
      <Section className="pb-4 md:pb-6">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-start">
            <div>
       <PageIntro
  breadcrumb={[
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
  ]}
  eyebrow="Corporate Yoga Australia"
  title="Corporate Yoga Australia website"
  lead="A refreshed digital presence for a national workplace wellbeing provider — focused on clarity, trust, and simple pathways to enquire."
  meta={[
    { label: "Client", value: "Corporate Yoga Australia" },
    { label: "Role", value: "UX & UI design, WordPress build" },
    { label: "Year", value: "2024" },
    { label: "Stack", value: "WordPress, HubSpot, GA4" },
  ]}
/>
            </div>

            {/* Right column: project summary card */}
            <aside className="space-y-4">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm p-5 md:p-6 shadow-sm">
                <h2 className="font-heading text-lg md:text-xl text-[var(--brand-primary)] mb-2">
                  At a glance
                </h2>
                <p className="text-sm md:text-[0.95rem] text-slate-700 dark:text-slate-200 mb-4">
                  Corporate Yoga Australia (CYA) needed a modern website that
                  better reflected their calibre of clients and made it easier
                  for HR teams and leaders to understand their programs and make
                  an enquiry.
                </p>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <li>Clear pathways for HR, leaders, and staff</li>
                  <li>Strong service storytelling, not just a list of classes</li>
                  <li>Integrated enquiries and simple lead capture</li>
                  <li>Designed to grow into a future membership offering</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-900/60 p-4 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                <p className="font-medium mb-1">
                  Placeholders ready to swap
                </p>
                <p>
                  All images on this page are using placeholder files under{" "}
                  <code className="font-mono text-[0.7rem] bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded">
                    /public/images/work/glenn-hammond-site-assets-corporate-yoga-australia.webp
                  </code>{" "}
                  — update them as soon as your final screenshots are ready.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* HERO IMAGE */}
      <Section className="pt-0 pb-8 md:pb-12 lg:pb-16">
        <Container>
          <figure className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-sm">
            <div className="aspect-[16/9] w-full">
              <img
                src="/images/work/cya-website-hero.jpg"
                alt="Corporate Yoga Australia homepage mockup"
                className="h-full w-full object-cover"
              />
            </div>
          </figure>
        </Container>
      </Section>

      {/* OVERVIEW + OBJECTIVES */}
      <Section className="py-8 md:py-12 lg:py-16 border-t border-slate-100 dark:border-slate-800">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] items-start">
            <div className="space-y-6">
              <h2 className="font-heading text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                From “brochure site” to a clear wellbeing partner
              </h2>
              <p className="text-[0.98rem] leading-relaxed text-slate-700 dark:text-slate-200">
                The previous CYA website had grown organically and was trying to
                speak to everyone at once — HR teams, leadership, and individual
                staff. Content was dense, navigation was unclear, and the value
                of ongoing workplace wellbeing support wasn’t immediately
                obvious.
              </p>
              <p className="text-[0.98rem] leading-relaxed text-slate-700 dark:text-slate-200">
                The redesign focuses on guiding busy decision-makers: What does
                CYA offer, who is it for, what outcomes can they expect, and
                how do they book a conversation? The structure also lays the
                groundwork for a future online membership and course ecosystem.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-4">
                  <h3 className="font-heading text-sm text-[var(--brand-primary)] mb-2 uppercase tracking-wide">
                    Design goals
                  </h3>
                  <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-200">
                    <li>Clean, calm visual language — not “gym marketing”</li>
                    <li>Service-first navigation with clear entry points</li>
                    <li>Mobile-first layout for on-the-go HR teams</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-4">
                  <h3 className="font-heading text-sm text-[var(--brand-primary)] mb-2 uppercase tracking-wide">
                    Experience goals
                  </h3>
                  <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-200">
                    <li>Make it effortless to understand key offerings</li>
                    <li>Reduce friction to “Book a call” or “Request a quote”</li>
                    <li>Support storytelling with case studies and social proof</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar: Project roles & deliverables */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/70 p-5">
                <h3 className="font-heading text-sm text-slate-900 dark:text-slate-50 mb-3 uppercase tracking-wide">
                  My contribution
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-800 dark:text-slate-100">
                  <li>UX mapping for HR / leaders / staff journeys</li>
                  <li>Wireframes and page architecture</li>
                  <li>Visual design system for CYA digital</li>
                  <li>WordPress build and optimisation</li>
                  <li>Analytics, events, and conversion tracking</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-5">
                <h3 className="font-heading text-sm text-slate-900 dark:text-slate-50 mb-3 uppercase tracking-wide">
                  Key deliverables
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-200">
                  <li>New homepage and core services pages</li>
                  <li>Programs / packages overview</li>
                  <li>Enquiry and lead-capture flows</li>
                  <li>Blog / resources structure for future content</li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* LAYOUT / UI SHOWCASE */}
      <Section className="py-8 md:py-12 lg:py-16 bg-slate-50 dark:bg-slate-950/60 border-y border-slate-100 dark:border-slate-800">
        <Container>
          <div className="flex items-baseline justify-between gap-4 mb-6 md:mb-8">
            <h2 className="font-heading text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
              A calm, confident visual language
            </h2>
            <p className="hidden md:block text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              UI highlights
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <figure className="col-span-1 lg:col-span-2 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
              <div className="aspect-[16/9]">
                <img
                  src="/images/work/cya-website-home-layout.jpg"
                  alt="Corporate Yoga Australia homepage layout showing hero, value props, and client logos"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="p-4 md:p-5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                Homepage hero with a clear promise, immediate context on who CYA
                works with, and direct CTAs into enquiry flows.
              </figcaption>
            </figure>

            <div className="space-y-4">
              <figure className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                <div className="aspect-[4/3]">
                  <img
                    src="/images/work/cya-website-programs.jpg"
                    alt="Programs grid showcasing Corporate Yoga Australia offerings"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="p-3.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                  Programs grid with simple labels, outcomes, and “What’s
                  included” highlights.
                </figcaption>
              </figure>

              <figure className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
                <div className="aspect-[4/3]">
                  <img
                    src="/images/work/cya-website-mobile.jpg"
                    alt="Mobile view of Corporate Yoga Australia website"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="p-3.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                  Mobile layouts prioritise quick scanning and one-tap CTAs for
                  busy HR and managers.
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </Section>

      {/* JOURNEY / PROCESS */}
      <Section className="py-8 md:py-12 lg:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.4fr)] items-start">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                Design process
              </h2>
              <p className="text-[0.98rem] text-slate-700 dark:text-slate-200 leading-relaxed">
                Even for a relatively small site, the work started with
                conversation: Who is actually landing here? What are they trying
                to decide? What information do they need before they’re willing
                to book a call or bring CYA into their workplace?
              </p>
              <p className="text-[0.98rem] text-slate-700 dark:text-slate-200 leading-relaxed">
                I mapped journeys for HR, individual staff, and leadership, then
                created a lean set of page types that could flex as the
                business grows — including space for future online programs and
                membership content.
              </p>
            </div>

            <div className="space-y-4">
              <ol className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
                <li className="relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-4 pl-5">
                  <span className="absolute left-2 top-4 h-8 w-px bg-slate-300 dark:bg-slate-600" />
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-1">
                    01 · Discovery
                  </p>
                  <p className="font-medium mb-1">
                    Business goals, audience clarity, and existing pain points
                  </p>
                  <p>
                    Understanding how CYA currently wins work, the kinds of
                    organisations they serve, and where the previous site was
                    holding them back.
                  </p>
                </li>
                <li className="relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-4 pl-5">
                  <span className="absolute left-2 top-4 h-8 w-px bg-slate-300 dark:bg-slate-600" />
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-1">
                    02 · Structure
                  </p>
                  <p className="font-medium mb-1">
                    Site map, page flows, and primary CTAs
                  </p>
                  <p>
                    Creating clear paths &quot;by intent&quot; — e.g. explore
                    programs, understand outcomes, book a call — instead of
                    dumping everything into a long services page.
                  </p>
                </li>
                <li className="relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-4 pl-5">
                  <span className="absolute left-2 top-4 h-8 w-px bg-slate-300 dark:bg-slate-600" />
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-1">
                    03 · Visual design
                  </p>
                  <p className="font-medium mb-1">
                    Calm, confident, and distinctly &quot;CYA&quot;
                  </p>
                  <p>
                    Translating CYA&apos;s in-person warmth into a clean visual
                    system: typography, colour, card layouts, and photography
                    direction that feels inclusive and non-intimidating.
                  </p>
                </li>
                <li className="relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-4 pl-5">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-1">
                    04 · Build & measurement
                  </p>
                  <p className="font-medium mb-1">
                    WordPress build, performance, and analytics
                  </p>
                  <p>
                    Implemented the layouts in WordPress, configured GA4 and key
                    events, and set up a foundation to experiment with future
                    landing pages and membership flows.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* IMPACT / RESULTS (PLACEHOLDER COPY) */}
      <Section className="py-8 md:py-12 lg:py-16 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-slate-900 dark:text-slate-50">
                Early outcomes & impact
              </h2>
              <p className="mt-2 max-w-2xl text-[0.95rem] text-slate-700 dark:text-slate-200">
                These are placeholder metrics you can update once you&apos;ve
                had a few months of live data from the new site.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-5">
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-2">
                Placeholder metric
              </p>
              <p className="font-heading text-2xl md:text-3xl text-[var(--brand-primary)] mb-1">
                +XX%
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                Increase in enquiry form completions quarter-on-quarter.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-5">
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-2">
                Placeholder metric
              </p>
              <p className="font-heading text-2xl md:text-3xl text-[var(--brand-primary)] mb-1">
                −XX%
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                Reduction in &quot;what do you actually offer?&quot; style
                questions from prospective clients.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-5">
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-2">
                Placeholder metric
              </p>
              <p className="font-heading text-2xl md:text-3xl text-[var(--brand-primary)] mb-1">
                +XX%
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                Growth in traffic to programs pages from organic search.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* GALLERY / DETAIL SHOTS */}
      <Section className="py-8 md:py-12 lg:py-16">
        <Container>
          <div className="flex items-baseline justify-between gap-4 mb-6 md:mb-8">
            <h2 className="font-heading text-xl md:text-2xl text-slate-900 dark:text-slate-50">
              Detail shots & layouts
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <figure className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
              <div className="aspect-[4/3]">
                <img
                  src="/images/work/cya-website-service-page.jpg"
                  alt="Service page layout with clear sections and CTA"
                  className="h-full w-full object-cover"
                />
              </div>
            </figure>
            <figure className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
              <div className="aspect-[4/3]">
                <img
                  src="/images/work/cya-website-testimonials.jpg"
                  alt="Testimonials and social proof section"
                  className="h-full w-full object-cover"
                />
              </div>
            </figure>
            <figure className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
              <div className="aspect-[4/3]">
                <img
                  src="/images/work/cya-website-blog.jpg"
                  alt="Blog and resources layout"
                  className="h-full w-full object-cover"
                />
              </div>
            </figure>
          </div>
        </Container>
      </Section>

      {/* NEXT PROJECT / CTA */}
      <Section className="pt-0 pb-12 md:pb-16">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-5 py-6 md:px-8 md:py-7">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                Next up
              </p>
              <h2 className="font-heading text-xl md:text-2xl text-white">
                Corporate Yoga Australia – online programs & Kajabi build
              </h2>
              <p className="mt-2 text-sm md:text-[0.95rem] text-slate-200 max-w-xl">
                Explore how the website experience extends into online
                wellbeing programs and membership content.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/work/corporate-yoga-australia-kajabi"
                className="inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium bg-white text-slate-900 hover:bg-slate-100 transition"
              >
                View CYA Kajabi project
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium border border-slate-500 text-slate-100 hover:bg-slate-800/70 transition"
              >
                Back to all work
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}