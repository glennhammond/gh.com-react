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
  withWash = false,
  washStyle = undefined,
}) {
  const sectionClasses = `${sectionClassName} ${className}`.trim();
  const containerClasses = `${containerClassName}`.trim();

  return (
    <Section
      noPadding={noPadding}
      className={`${sectionClasses} ${withWash ? "relative overflow-hidden" : ""}`.trim()}
    >
      {withWash ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={washStyle}
        />
      ) : null}

      <Container className={`${containerClasses} ${withWash ? "relative" : ""}`.trim()}>
        {children}
      </Container>
    </Section>
  );
}

export default function PageHero({
  title,
  eyebrow = null,
  breadcrumb = null,
  right = null,
  children,
  plainBody = false,
  className = "",
  withWash = false,
  /**
   * Variants centralise vertical rhythm + layout so pages don’t freestyle spacing.
   * - standard: single-column hero
   * - split: two-column hero (intro left, panel right)
   * - compact: tighter padding for small pages
   */
  variant = "standard",
  /**
   * Back-compat props (try not to use per-page):
   * - noPadding, sectionClassName, containerClassName
   */
  noPadding = false,
  sectionClassName = "",
  containerClassName = "",
  introClassName = "space-y-2",
}) {
  const variants = {
    standard: {
      section: "pt-4 pb-10 md:pt-6 md:pb-12",
      container: "space-y-6",
      titleWrap: "space-y-4",
      introWrap: "max-w-3xl",
      grid: "",
    },
    split: {
      section: "pt-4 pb-10 md:pt-6 md:pb-12",
      container: "space-y-8",
      titleWrap: "space-y-4",
      introWrap: "max-w-3xl",
      grid: "grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:items-start",
    },
    compact: {
      section: "pt-3 pb-6 md:pt-4 md:pb-8",
      container: "space-y-4",
      titleWrap: "space-y-3",
      introWrap: "max-w-2xl",
      grid: "",
    },
  };

  const v = variants[variant] || variants.standard;
  const isSplitLayout = variant === "split" || Boolean(right);
  const introPanelClass = `${plainBody ? "" : "hero-text-panel"} text-[var(--text)]/78 leading-relaxed ${v.introWrap} ${introClassName}`.trim();

  const renderBreadcrumb = () => {
    if (!breadcrumb) return null;

    // If an array is provided, assume it’s Breadcrumb items
    if (Array.isArray(breadcrumb)) {
      return <Breadcrumb items={breadcrumb} />;
    }

    // Otherwise assume it’s already a rendered element
    return breadcrumb;
  };

  const washStyle = {
    background:
      "radial-gradient(1200px circle at 16% 28%, rgba(247, 244, 240, 0.95), transparent 62%)," +
      "linear-gradient(180deg, var(--hero-bg), transparent 72%)",
    backgroundRepeat: "no-repeat",
  };

  return (
    <HeroShell
      className={className}
      // Centralised rhythm first, with optional back-compat overrides appended.
      sectionClassName={`${v.section} ${sectionClassName} page-hero`.trim()}
      containerClassName={`${v.container} fade-in-up ${containerClassName}`.trim()}
      noPadding={noPadding}
      withWash={withWash}
      washStyle={withWash ? washStyle : undefined}
    >
      {renderBreadcrumb()}

      <div className={v.titleWrap}>
        {isSplitLayout ? (
          <div className={v.grid || variants.split.grid}>
            <div className="min-w-0 space-y-4">
              <header className="space-y-3">
                {eyebrow ? (
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--nostalgia-blue)]/80">
                    {eyebrow}
                  </p>
                ) : null}

                {title ? (
                  <h1 className="font-heading hero-title text-4xl md:text-5xl max-w-[18ch]">
                    {title}
                  </h1>
                ) : null}
              </header>

              <div className={introPanelClass}>{children}</div>
            </div>

            {right ? (
              <div className="w-full lg:max-w-[560px] lg:justify-self-end lg:self-start">
                {right}
              </div>
            ) : (
              <div />
            )}
          </div>
        ) : (
          <>
            <header className="space-y-3">
              {eyebrow ? (
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--nostalgia-blue)]/80">
                  {eyebrow}
                </p>
              ) : null}

              {title ? (
                <h1 className="font-heading hero-title text-4xl md:text-5xl">{title}</h1>
              ) : null}
            </header>

            <div className={introPanelClass}>{children}</div>
          </>
        )}
      </div>
    </HeroShell>
  );
}
