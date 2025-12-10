import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import PageIntro from "../../components/layout/PageIntro";
import SEO from "../../components/ui/SEO.jsx";

export default function ImagesIcons() {
  return (
    <PageWrapper>
      <SEO
        title="Images & Icons – eLearning Design System – Glenn Hammond"
        description="Guidelines for images, illustration, and iconography in the eLearning Design System, including style, accessibility, and usage patterns."
        url="https://glennhammond.com/work/elearning-design-system/images-icons"
      />

      {/* HERO / INTRO */}
      <Section className="pb-4 md:pb-6">
        <Container>
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center">
            <div>
              <PageIntro
                breadcrumb={[
                  { label: "Home", href: "/" },
                  { label: "Work", href: "/work" },
                  {
                    label: "eLearning Design System",
                    href: "/work/elearning-design-system",
                  },
                  { label: "Images & Icons" },
                ]}
                title="Images & Icons"
                intro="Imagery and iconography that feel modern, calm, and educational – without turning every slide into a marketing billboard."
              />
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] overflow-hidden shadow-sm">
                <img
                  src="/images/icons.png"
                  alt="Example of image and icon treatments in the design system"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* IMAGE STYLE */}
      <Section className="pt-0 md:pt-2">
        <Container className="space-y-6 md:space-y-7 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Image style and treatments
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DetailBlock
              title="Photography"
              items={[
                "Neutral, natural light, and authentic school settings – no exaggerated stock poses.",
                "Where possible, use Queensland school contexts and uniforms to ground the learning.",
                "Avoid busy backgrounds; focus on people, relationships, and key objects.",
                "Subtle vignette or overlay used to keep text readable when placed on images.",
              ]}
            />
            <DetailBlock
              title="Illustration & diagrams"
              items={[
                "Simple line or flat illustration aligned to the ISQ colour palette.",
                "Used for concepts, processes, or where photography would be distracting.",
                "Diagrams designed to be readable at typical laptop resolutions and projected in workshops.",
                "Where diagrams are complex, provide a downloadable PDF version for zooming.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* ICONS */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Iconography system
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <DetailBlock
              title="Style"
              items={[
                "Simple stroke-based icons with rounded corners to match the UI.",
                "Consistent stroke weight and corner radius across all icons.",
                "Limited use of colour – usually a single accent colour plus neutral base.",
              ]}
            />
            <DetailBlock
              title="Usage"
              items={[
                "Icons support meaning; they do not replace labels entirely.",
                "Used for navigation, status (info/success/warning), and calls to action.",
                "Avoid decorative icons that do not reinforce the message or action.",
              ]}
            />
            <DetailBlock
              title="Accessibility"
              items={[
                "Icons never carry critical information on their own – always paired with text.",
                "Sufficient contrast between icon and background.",
                "Icons used consistently (the same icon always means the same thing).",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* ACCESSIBILITY & TECHNICAL */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Accessibility & technical considerations
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DetailBlock
              title="Alt text and descriptions"
              items={[
                "Functional images (buttons, icons) use alt text that describes the action.",
                "Decorative images are marked as decorative so screen readers can skip them.",
                "Complex diagrams are accompanied by a short textual summary or transcript.",
              ]}
            />
            <DetailBlock
              title="Implementation across tools"
              items={[
                "Storyline uses image fills and masks aligned to standard slide layouts.",
                "Rise images follow block-level guidance (image + text, full-width banners, etc.).",
                "H5P activities use lighter imagery to avoid performance issues on lower-spec devices.",
                "File sizes are optimised for Connect&Learn delivery without losing clarity.",
              ]}
            />
          </div>

          <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[var(--text)]/70 max-w-xl">
              A consistent approach to imagery and icons keeps modules visually
              aligned while still leaving space for topic-specific storytelling.
            </p>

            <Link
              to="/work/elearning-design-system"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-medium bg-[var(--text)] text-[var(--bg)] hover:opacity-90 transition"
            >
              Back to project overview →
            </Link>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}

/* ──────────────────────────────────────────────
   PRESENTATIONAL COMPONENT
────────────────────────────────────────────── */

function DetailBlock({ title, items }) {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-3">
      <h3 className="font-heading text-lg text-[var(--text)]">{title}</h3>
      <ul className="space-y-2 text-sm text-[var(--text)]/75">
        {items.map((item, idx) => (
          <li key={idx} className="list-disc list-inside">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}