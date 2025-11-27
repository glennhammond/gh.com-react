// src/components/CaseStudySection.jsx
import React from "react";

export default function CaseStudySection({
  title,
  children,
  eyebrow,
  wide = false,
  padded = true,
  id,
}) {
  return (
    <section
      id={id}
      className={`
        w-full 
        ${padded ? "py-16 md:py-20" : "py-8"}
        fade-in-up
      `}
    >
      <div
        className={`
          ${wide ? "max-w-6xl" : "max-w-3xl"}
          mx-auto space-y-6
        `}
      >
        {/* Eyebrow label (optional) */}
        {eyebrow && (
          <p className="uppercase tracking-wide text-xs text-[var(--text)]/50">
            {eyebrow}
          </p>
        )}

        {/* Title */}
        {title && (
          <h2 className="font-heading text-2xl md:text-3xl text-[var(--text)] leading-tight">
            {title}
          </h2>
        )}

        {/* Content */}
        <div className="text-[var(--text)]/80 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}
