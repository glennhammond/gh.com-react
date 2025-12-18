// src/components/layout/PageHero.jsx
import React from "react";
import Section from "./Section";
import Container from "./Container";
import PageIntro from "./PageIntro";

// Shared hero wrapper so Home and internal pages follow the same hero system
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
  breadcrumb,
  right = null,
  children,
  className = "",
  noPadding = true,
  sectionClassName = "pb-4 md:pb-6",
  containerClassName = "pt-10 pb-4 md:pt-12 md:pb-6",
  introClassName = "mt-6 max-w-2xl space-y-3",
}) {
  return (
    <HeroShell
      className={className}
      sectionClassName={sectionClassName}
      containerClassName={containerClassName}
      noPadding={noPadding}
    >
      <PageIntro breadcrumb={breadcrumb} title={title} right={right}>
        {children ? <div className={introClassName}>{children}</div> : null}
      </PageIntro>
    </HeroShell>
  );
}