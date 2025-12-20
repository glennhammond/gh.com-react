// src/components/layout/PageHero.jsx
import React from "react";
import Section from "./Section";
import Container from "./Container";
import Breadcrumb from "../ui/Breadcrumb.jsx";

export function HeroShell({
  children,
  className = "",
  sectionClassName = "",
  containerClassName = "",
  noPadding = false,
}) {
  return (
    <Section noPadding={noPadding} className={`${sectionClassName} ${className}`.trim()}>
      <Container className={containerClassName}>{children}</Container>
    </Section>
  );
}

export default function PageHero({
  title,
  eyebrow = null,
  breadcrumb = null,
  right = null,
  children,
  className = "",
  noPadding = true,
  sectionClassName = "pb-4 md:pb-6",
  containerClassName = "pt-10 pb-4 md:pt-12 md:pb-6",
  introClassName = "space-y-3",
}) {
  const renderBreadcrumb = () => {
    if (!breadcrumb) return null;

    // If an array is provided, assume it’s Breadcrumb items
    if (Array.isArray(breadcrumb)) {
      return <Breadcrumb items={breadcrumb} />;
    }

    // Otherwise assume it’s already a rendered element
    return breadcrumb;
  };

  return (
    <HeroShell
      className={className}
      sectionClassName={sectionClassName}
      containerClassName={`space-y-10 fade-in-up max-w-6xl ${containerClassName}`}
      noPadding={noPadding}
    >
      {renderBreadcrumb()}

      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <header className="space-y-4">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/60">
              {eyebrow}
            </p>
          ) : null}

          {title ? (
            <h1 className="font-heading text-4xl md:text-5xl text-[var(--text)]">
              {title}
            </h1>
          ) : null}

          {children ? (
            <div className={`text-[var(--text)]/75 max-w-3xl leading-relaxed ${introClassName}`.trim()}>
              {children}
            </div>
          ) : null}
        </header>

        {right ? <div className="w-full">{right}</div> : null}
      </div>
    </HeroShell>
  );
}