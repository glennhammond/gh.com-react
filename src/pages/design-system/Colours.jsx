// src/pages/design-system/Colours.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import SEO from "../../components/ui/SEO.jsx";
import Breadcrumb from "../../components/ui/Breadcrumb.jsx";

const neutrals = [
  { name: "Neutral 700", hex: "#1F1F1F" },
  { name: "Neutral 600", hex: "#4B4B4B" },
  { name: "Neutral 500", hex: "#8E8E8E" },
  { name: "Neutral 400", hex: "#CACACA" },
  { name: "Neutral 300", hex: "#E1E1E1" },
  { name: "Neutral 200", hex: "#EEEEEE" },
];

const primary = [
  { name: "Primary", hex: "#005680" },
  { name: "Primary 80", hex: "#15C5CE" },
  { name: "Primary 60", hex: "#47CFD6" },
  { name: "Primary 40", hex: "#7DDDE1" },
  { name: "Primary 20", hex: "#B0EBEC" },
  { name: "Primary 10", hex: "#DFF7F7" },
];

const secondary = [
  { name: "Secondary", hex: "#FFC72A" },
  { name: "Secondary", hex: "#FF8156" },
  { name: "Secondary", hex: "#FFA487" },
  { name: "Secondary", hex: "#FFC8B6" },
  { name: "Secondary", hex: "#FFE1D6" },
  { name: "Secondary", hex: "#FFF2EE" },
];

const tertiary = [
  { name: "Tertiary", hex: "#DAD3C5" },
  { name: "Tertiary", hex: "#FF8156" },
  { name: "Tertiary", hex: "#FFA487" },
  { name: "Tertiary", hex: "#FFC8B6" },
  { name: "Tertiary", hex: "#FFE1D6" },
  { name: "Tertiary", hex: "#FFF2EE" },
];

const error = [
  { name: "Error", hex: "#A22B2A" },
  { name: "Danger 600", hex: "#F64C4C" },
  { name: "Danger 500", hex: "#EB6F70" },
  { name: "Danger 400", hex: "#F49898" },
  { name: "Danger 300", hex: "#FFCCD2" },
  { name: "Danger 200", hex: "#FFEBEE" },
  { name: "Danger 100", hex: "#FEF2F2" },
  { name: "Danger 50", hex: "#FFFBFB" },
];

const warning = [
  { name: "Warning", hex: "#F28B00" },
  { name: "Warning 80", hex: "" },
  { name: "Warning 60", hex: "" },
  { name: "Warning 40", hex: "" },
  { name: "Warning 20", hex: "" },
  { name: "Warning 10", hex: "" },
  { name: "Warning 100", hex: "" },
  { name: "Warning 50", hex: "" },
];

const success = [
  { name: "Success", hex: "#38B449" },
  { name: "Success 600", hex: "#47B881" },
  { name: "Success 500", hex: "#6BC497" },
  { name: "Success 400", hex: "#97D4B4" },
  { name: "Success 300", hex: "#C0E5D1" },
  { name: "Success 200", hex: "#E5F5EC" },
  { name: "Success 100", hex: "#F2FAF6" },
  { name: "Success 50", hex: "#FBFEFC" },
];

const info = [
  { name: "Info", hex: "#1967D2" },
  { name: "Info 600", hex: "#3B82F6" },
  { name: "Info 500", hex: "#4BA1FF" },
  { name: "Info 400", hex: "#93C8FF" },
  { name: "Info 300", hex: "#BDDDFF" },
  { name: "Info 200", hex: "#E4F2FF" },
  { name: "Info 100", hex: "#F1F8FF" },
  { name: "Info 50", hex: "#F8FCFF" },
];

function SwatchRow({ title, description, items }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-heading text-xl md:text-2xl text-[var(--text)] mb-1">
          {title}
        </h2>
        {description && (
          <p className="text-sm md:text-base text-[var(--text)]/70 max-w-3xl">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {items.map((item, index) => (
          <div
            key={item.name + index}
            className="rounded-2xl border border-black/10 dark:border-white/10 bg-[var(--bg)] overflow-hidden flex flex-col"
          >
            <div
              className="h-20 w-full"
              style={{
                backgroundColor: item.hex || "#F3F4F6", // light grey placeholder
              }}
            />
            <div className="px-4 py-3 text-sm">
              <div className="font-medium text-[var(--text)]/90">
                {item.name}
              </div>
              {item.hex && (
                <div className="text-[11px] uppercase tracking-[0.16em] text-[var(--text)]/60 mt-1">
                  {item.hex}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Colours() {
  return (
    <PageWrapper>
      <SEO
        title="Colours – eLearning Design System"
        description="Colour tokens for the eLearning design system: neutrals, primary, secondary and semantic palettes for UI and learning content."
      />

      <Section>
        <Container className="space-y-10 fade-in-up max-w-6xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Work", href: "/work" },
              { label: "eLearning Design System", href: "/work/elearning-design-system" },
              { label: "Colours" },
            ]}
          />

          {/* Page intro */}
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/60">
              Assets
            </p>
            <h1 className="font-heading text-3xl md:text-4xl text-[var(--text)]">
              Colours
            </h1>
            <p className="text-[var(--text)]/75 max-w-3xl leading-relaxed">
              Express hierarchy, establish brand identity, give meaning and
              indicate states. These palettes are used across Storyline
              templates, web UI and supporting graphics.
            </p>
          </header>

          <div className="space-y-10 md:space-y-12">
            <SwatchRow
              title="Neutral colours"
              description="Neutral colours can be paired with any brand colour for backgrounds, text, borders and surfaces."
              items={neutrals}
            />

            <SwatchRow title="Primary colours" items={primary} />

            <SwatchRow title="Secondary colours" items={secondary} />

            <SwatchRow title="Tertiary colours" items={tertiary} />

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-heading text-2xl text-[var(--text)]">
                  Semantic colours
                </h2>
                <p className="text-sm md:text-base text-[var(--text)]/70 max-w-3xl">
                  Semantic colours have specific meaning – they should be used
                  for states such as success, error and warning rather than for
                  general decoration.
                </p>
              </div>

              <div className="space-y-10">
                <SwatchRow
                  title="Error"
                  description="Used for errors, destructive actions and critical messaging."
                  items={error}
                />

                <SwatchRow
                  title="Warning"
                  description="Used to signal caution, in-progress states or non-blocking issues."
                  items={warning}
                />

                <SwatchRow
                  title="Success"
                  description="Used to indicate success, completion or positive outcomes."
                  items={success}
                />

                <SwatchRow
                  title="Info"
                  description="Used for neutral informational messaging and status."
                  items={info}
                />
              </div>
            </div>

            <Link
              to="/work/elearning-design-system"
              className="inline-flex text-sm text-brand-primary hover:underline"
            >
              ← Back to eLearning Design System
            </Link>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}