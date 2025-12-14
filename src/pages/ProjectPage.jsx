// src/pages/ProjectPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import ProjectImage from "../components/ProjectImage";
import SEO from "../components/ui/SEO.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

import { projects } from "../data/projects";

// Sections for the eLearning Design System grid
const elearningSections = [
  {
    slug: "overview",
    title: "eLearning Design System",
    description: "What this system is, how it works, and how to use it.",
    href: "/work/elearning-design-system/overview",
    image: "/images/elearning-design-system.png",
  },
  {
    slug: "atomic-design",
    title: "Atomic Design",
    description: "A simple component mindset to keep builds consistent and scalable.",
    href: "/work/elearning-design-system/atomic-design",
    image: "/images/atomic-design.png",
  },
  {
    slug: "core-more-bore",
    title: "Core, More & Bore",
    description: "A practical content model for balancing essentials, depth, and extras.",
    href: "/work/elearning-design-system/core-more-bore",
    image: "/images/core-more-bore.png",
  },
  {
    slug: "colours",
    title: "Colours",
    description: "Palette, contrast, and usage rules for clear, accessible screens.",
    href: "/work/elearning-design-system/colours",
    image: "/images/colours.png",
  },
  {
    slug: "typography",
    title: "Typography",
    description: "Hierarchy, sizing, and spacing decisions for readable learning.",
    href: "/work/elearning-design-system/typography",
    image: "/images/typography.png",
    fallbackImage: "/images/design-system-typography.png",
  },
  {
    slug: "images-icons",
    title: "Images & Icons",
    description: "Image style, icon rules, and visual consistency across courses.",
    href: "/work/elearning-design-system/images-icons",
    image: "/images/icons.png",
  },
  {
    slug: "course-structure",
    title: "Course Structure",
    description: "A repeatable course layout with predictable sections and flow.",
    href: "/work/elearning-design-system/course-structure",
    image: "/images/course-structure.png",
  },
  {
    slug: "asset-register",
    title: "Asset Register",
    description: "How I manage assets, naming, and source files for clean handover.",
    href: "/work/elearning-design-system/asset-register",
    image: "/images/asset-register.png",
  },
  {
    slug: "storyline",
    title: "Storyline",
    description: "Storyline standards for templates, interactions, and maintainable builds.",
    href: "/work/elearning-design-system/storyline",
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

  return (
    <PageWrapper>
      <SEO
        title={`${project.title} — Glenn Hammond`}
        description={description.slice(0, 160)}
      />

      <Section>
        {/* slightly tighter vertical spacing for this page overall */}
        <Container className="space-y-10 fade-in-up max-w-4xl bg-transparent !bg-transparent border-0 !border-0 shadow-none !shadow-none rounded-none !rounded-none">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Work", href: "/work" },
              { label: project.title },
            ]}
          />

          {isElearningDesignSystem ? (
            <div className="grid gap-10 md:grid-cols-12 items-start">
              <div className="space-y-4 md:col-span-7 bg-transparent !bg-transparent p-0 !p-0 rounded-none !rounded-none shadow-none !shadow-none border-0 !border-0">
                <h1 className="font-heading text-4xl text-[var(--text)]">
                  {project.title}
                </h1>
                <p className="text-[var(--text)]/70 leading-relaxed max-w-2xl">
                  A reusable framework for modern eLearning - designed for consistency, accessibility, and maintainable builds.
                </p>

                <p className="text-[var(--text)]/70 leading-relaxed max-w-2xl">
                  This design system brings together the decisions that make eLearning feel polished and coherent: hierarchy, spacing, templates, interaction conventions, and build standards. It helps me deliver faster, keep quality predictable, and make updates simpler over time.
                </p>
              </div>

              <div className="md:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-sm !transform-none !transition-none">
                  <ProjectImage src={project.image} alt={`${project.title} cover`} />
                </div>
              </div>
            </div>
          ) : (
            <>
              <header className="space-y-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/60">
                  {project.category || "Project"}
                </p>
                <h1 className="font-heading text-4xl text-[var(--text)]">
                  {project.title}
                </h1>
                {project.subtitle && (
                  <p className="text-[var(--text)]/70 leading-relaxed max-w-2xl">
                    {project.subtitle}
                  </p>
                )}
              </header>

              <div className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm">
                <ProjectImage src={project.image} alt={project.title} />
              </div>
            </>
          )}

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
                          if (item.fallbackImage && el.src.indexOf(item.fallbackImage) === -1) {
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

          <Link
            to="/work"
            className="text-sm text-brand-primary hover:underline inline-block"
          >
            ← Back to all work
          </Link>
        </Container>
      </Section>
    </PageWrapper>
  );
}