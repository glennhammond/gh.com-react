// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

import { projects } from "../data/projects";
import { posts } from "../posts/posts";
import ProjectImage from "../components/ProjectImage";
import SEO from "../components/ui/SEO.jsx";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <PageWrapper>
      <SEO
        title="Glenn Hammond — eLearning Specialist, Designer & Developer"
        description="Modern, evidence-informed learning design, Storyline development, xAPI analytics, and high-quality media for organisations."
        url="https://glennhammond.com/"
      />

      {/* HERO */}
      <Section noPadding>
        <Container className="py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center fade-in-up">
          {/* Left */}
          <div className="space-y-8">
         <h1 className="font-heading text-5xl md:text-6xl leading-tight text-[var(--text)] font-semibold">
  Better Learning by Design
</h1>
            <p className="text-[var(--text)]/75 max-w-md leading-relaxed">
              I design digital learning experiences. Blending instructional design, media production and learning analytics.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/work"
                className="px-6 py-3 rounded-xl bg-[var(--text)] text-[var(--bg)] shadow-sm hover:opacity-90 text-sm font-medium"
              >
                View my work
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-[var(--bg)] hover:bg-[var(--bg-soft)] text-sm font-medium"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Right */}
<div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white shadow-sm fade-in-up overflow-hidden">
  {/* Image sits directly in the card and controls its own aspect ratio */}
  <img
    src="/images/portfolio-elearning-design-system.jpg"
    alt="Featured project preview"
    className="w-full h-auto block"
  />

  {/* Your existing text content goes inside here */}
  <div className="p-6">
    <h3 className="text-sm font-semibold mb-2">Featured project</h3>
    <p className="text-sm text-slate-600 mb-3">
      A complete redesign of ISQ’s Child Protection learning suite — built for
      clarity, navigation, and accessibility.
    </p>
    <a
      href="work/elearning-design-system"
      className="text-sm font-medium text-sky-700 hover:text-sky-800"
    >
      Explore project →
    </a>
  </div>
</div>
        </Container>
      </Section>


      {/* SERVICES PREVIEW */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            What I do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard
              title="eLearning design"
              text="Instructional design, Storyline development, scenario writing, and learning systems."
            />
            <ServiceCard
              title="xAPI & analytics"
              text="xAPI strategy, debugging, Veracity/Learning Locker setup, and dashboards that reveal insight."
            />
            <ServiceCard
              title="Video & media"
              text="Interview filming, microlearning content, editing, colour grading, and audio mastering."
            />
          </div>

          <Link
            to="/services"
            className="text-sm text-brand-primary hover:underline inline-block"
          >
            View all services →
          </Link>
        </Container>
      </Section>

      {/* LATEST POSTS */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Latest writing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-[var(--bg)] p-6 space-y-3 hover:-translate-y-1 hover:shadow-md transition"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/60">
                  Blog
                </span>
                <h3 className="font-heading text-lg text-[var(--text)]">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--text)]/70">{post.summary}</p>
                <span className="text-sm text-brand-primary">Read more →</span>
              </Link>
            ))}
          </div>

          <Link
            to="/blog"
            className="text-sm text-brand-primary hover:underline inline-block"
          >
            View all posts →
          </Link>
        </Container>
      </Section>
          {/* FEATURED WORK */}
      <Section>
        <Container className="space-y-10 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Featured work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)] overflow-hidden hover:-translate-y-[2px] hover:shadow-md transition"
              >
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                />
                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-xl">{project.title}</h3>
                  <p className="text-sm opacity-70">{project.subtitle}</p>
                  <span className="text-sm text-brand-primary">
                    Explore project →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/work"
            className="text-sm text-brand-primary hover:underline inline-block"
          >
            View all projects →
          </Link>
        </Container>
      </Section>
    </PageWrapper>
  );
}

function ServiceCard({ title, text }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 p-8 bg-[var(--bg)]/95 space-y-4">
      <h3 className="font-heading text-xl text-[var(--text)]">{title}</h3>
      <p className="text-sm opacity-75">{text}</p>
    </div>
  );
}