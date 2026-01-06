// src/pages/ProjectPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SEO from "../components/ui/SEO.jsx";
import PageHero from "../components/layout/PageHero";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

import { projects } from "../data/projects";

// Sections for the eLearning Design System grid
const elearningSections = [
  {
    slug: "overview",
    title: "eLearning Design System",
    description: "What this system is, how it works, and how to use it.",
    // Overview is this ProjectPage itself
    href: "/design-system",
    image: "/images/elearning-design-system.png",
  },
  {
    slug: "atomic-design",
    title: "Atomic Design",
    description: "A simple component mindset to keep builds consistent and scalable.",
    href: "/design-system/atomic-design",
    image: "/images/atomic-design.png",
  },
  {
    slug: "core-more-bore",
    title: "Core, More & Bore",
    description: "A practical content model for balancing essentials, depth, and extras.",
    href: "/design-system/core-more-bore",
    image: "/images/core-more-bore.png",
  },
  {
    slug: "colours",
    title: "Colours",
    description: "Palette, contrast, and usage rules for clear, accessible screens.",
    href: "/design-system/colours",
    image: "/images/colours.png",
  },
  {
    slug: "typography",
    title: "Typography",
    description: "Hierarchy, sizing, and spacing decisions for readable learning.",
    href: "/design-system/typography",
    image: "/images/typography.png",
    fallbackImage: "/images/design-system-typography.png",
  },
  {
    slug: "images-icons",
    title: "Images & Icons",
    description: "Image style, icon rules, and visual consistency across courses.",
    href: "/design-system/images-icons",
    image: "/images/icons.png",
  },
  {
    slug: "course-structure",
    title: "Course Structure",
    description: "A repeatable course layout with predictable sections and flow.",
    href: "/design-system/course-structure",
    image: "/images/course-structure.png",
  },
  {
    slug: "asset-register",
    title: "Asset Register",
    description: "How I manage assets, naming, and source files for clean handover.",
    href: "/design-system/asset-register",
    image: "/images/asset-register.png",
  },
  {
    slug: "storyline",
    title: "Storyline",
    description: "Storyline standards for templates, interactions, and maintainable builds.",
    href: "/design-system/storyline",
    image: "/images/storyline.png",
  },
];

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageWrapper>
        <SEO title="Project not found – Glenn Hammond" />
        <Section>
          <Container className="py-24 text-center space-y-4">
            <h1 className="font-heading text-3xl text-[var(--text)]">
              Project not found
            </h1>
            <Link to="/work" className="text-sm text-brand-primary">
              ← Back to work
            </Link>
          </Container>
        </Section>
      </PageWrapper>
    );
  }

  const description =
    project.longDescription || project.description || project.subtitle || "";

  // Only special-case the eLearning Design System page
  const isElearningDesignSystem = slug === "elearning-design-system";

  const lead = isElearningDesignSystem
    ? "Standards for layout, typography, templates, interaction, accessibility, and Storyline - so builds stay consistent, maintainable, and easy to update."
    : project.subtitle || project.description || project.longDescription || "";

  const heroRight = (
    <div className="hidden lg:block w-full max-w-xl">
      <div className="site-card overflow-hidden">
        <div className="relative aspect-[16/9] w-full">
          <img
            src={project.heroImage || project.image}
            alt={project.title}
            className="w-full h-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: project.title },
  ];

  return (
    <PageWrapper>
      <SEO
        title={`${project.title} — Glenn Hammond`}
        description={description.slice(0, 160)}
      />

      {/* Custom plain-text hero for the eLearning Design System (no boxed lead) */}
      {isElearningDesignSystem ? (
        <Section noPadding className="pb-4 md:pb-6">
          <Container className="pt-4 pb-4 md:pt-6 md:pb-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="space-y-4">
                <Breadcrumb items={breadcrumbItems} />

                <header className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--nostalgia-blue)]/80">
                    eLearning design system
                  </p>

                  <h1 className="font-heading text-4xl md:text-5xl leading-[0.95] tracking-tight text-[var(--hero-accent)]">
                    {project.title}
                  </h1>

                  <p className="max-w-3xl text-sm md:text-base leading-relaxed text-[var(--text)]/75">
                    {lead}
                  </p>
                </header>

                <div className="pt-1">
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 text-xs text-[var(--text)]/70 hover:text-[var(--text)] transition"
                  >
                    ← Back to all work
                  </Link>
                </div>
              </div>

              {heroRight}
            </div>
          </Container>
        </Section>
      ) : (
        <PageHero
          breadcrumb={breadcrumbItems}
          eyebrow={project.category || "Project"}
          title={project.title}
          lead={lead}
          containerClassName="pt-4 pb-4 md:pt-6 md:pb-6"
          right={heroRight}
        >
          {project.client ? (
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--text)]/60">
              {project.client}
            </p>
          ) : null}

          {project.highlights?.length ? (
            <ul className="space-y-2 text-base text-neutral-700/90 dark:text-white/80 max-w-2xl">
              {project.highlights.slice(0, 4).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          ) : null}

          <div className="pt-1">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs text-[var(--text)]/70 hover:text-[var(--text)] transition"
            >
              ← Back to all work
            </Link>
          </div>
        </PageHero>
      )}

      <Section className="pt-4 md:pt-6">
        <Container className="space-y-10 max-w-6xl">
          {/* eLearning Design System grid */}
          {isElearningDesignSystem && (
            <div className="space-y-5">
              <div className="space-y-2">
                <h2 className="font-heading text-2xl text-[var(--brand-primary)]">
                  Explore the system
                </h2>
                <p className="text-[var(--text)]/70 leading-relaxed max-w-2xl">
                  Explore the key building blocks - from structure and typography through to Storyline standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {elearningSections.map((item) => (
                  <Link
                    key={item.slug}
                    to={item.href}
                    className="group flex flex-col rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70 !transform-none"
                  >
                    {/* Image area */}
                    <div className="aspect-[16/9] w-full bg-black/5 dark:bg-white/5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          const el = e.currentTarget;
                          const placeholder =
                            "data:image/svg+xml;utf8," +
                            encodeURIComponent(
                              `<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='900'>
                                <rect width='100%' height='100%' fill='rgba(0,0,0,0.04)'/>
                                <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                                  font-family='Arial, sans-serif' font-size='36' fill='rgba(0,0,0,0.45)'>
                                  Image
                                </text>
                              </svg>`
                            );

                          // First try a per-card fallback image (useful for the Typography card)
                          if (
                            item.fallbackImage &&
                            el.src.indexOf(item.fallbackImage) === -1
                          ) {
                            el.src = item.fallbackImage;
                            return;
                          }

                          // Final fallback: embedded placeholder so there is never a broken image
                          el.onerror = null;
                          el.src = placeholder;
                        }}
                      />
                    </div>

                    {/* Label area */}
                    <div className="px-6 py-4 bg-white/70 dark:bg-white/5 border-t border-black/10 dark:border-white/10">
                      <h3 className="font-semibold text-base text-[var(--text)]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--text)]/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {!isElearningDesignSystem && !project.body ? (
            <div className="pt-6">
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 md:p-8">
                <h2 className="font-heading text-2xl text-[var(--brand-primary)]">
                  Case study coming soon
                </h2>
                <p className="mt-3 text-base md:text-lg leading-relaxed text-neutral-700/90 dark:text-white/80 max-w-3xl">
                  I’m still writing this one up. In the meantime, the headline and hero image give you the high-level context - and you can explore other work while this page is being expanded.
                </p>
                <div className="mt-5">
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-2 text-sm text-[var(--text)] hover:bg-white/80 dark:hover:bg-white/10 transition"
                  >
                    Browse all work →
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </Container>
      </Section>
    </PageWrapper>
  );
}