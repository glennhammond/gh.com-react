import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../../components/layout/PageWrapper";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import PageIntro from "../../components/layout/PageIntro";
import SEO from "../../components/ui/SEO.jsx";

export default function AssetRegister() {
  return (
    <PageWrapper>
      <SEO
        title="Asset Register – eLearning Design System – Glenn Hammond"
        description="How templates, components, and media are stored, named, and versioned in the eLearning Design System asset register."
        url="https://glennhammond.com/work/elearning-design-system/asset-register"
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
                  { label: "Asset Register" },
                ]}
                title="Asset register"
                intro="A single source of truth for Storyline masters, template files, imagery, and reusable components."
              />
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] overflow-hidden shadow-sm">
                <img
                  src="/images/asset-register.png"
                  alt="Screenshot of folders and assets in an organised library"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* STRUCTURE */}
      <Section className="pt-0 md:pt-2">
        <Container className="space-y-6 md:space-y-7 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Folder structure
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DetailBlock
              title="Top-level folders"
              items={[
                "01_Foundations – colours, typography, icon sets, grid and layout references.",
                "02_Templates – Storyline masters, Rise starter lessons, H5P baseline activities.",
                "03_Components – reusable interactions, slides, and visual patterns.",
                "04_Media – approved imagery, illustration, audio, and video elements.",
              ]}
            />
            <DetailBlock
              title="Project links"
              items={[
                "Each project references assets in the central library rather than maintaining copies.",
                "Where custom variations are required, they are clearly labelled and linked back to the original.",
                "Documentation pages in Notion/SharePoint point to the correct location for each asset type.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* NAMING & VERSIONING */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Naming and version control
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DetailBlock
              title="Naming conventions"
              items={[
                "Files follow the pattern: [Tool]_[Topic]_[Type]_v[Major].[Minor].[YYYYMMDD].",
                "Example: SLN_CP2026_Master_v1.2_20251210.story.",
                "Media files include subject and orientation where relevant (e.g. img-classroom-primary-landscape.jpg).",
              ]}
            />
            <DetailBlock
              title="Version guidelines"
              items={[
                "Major version increases when interaction patterns or structure change significantly.",
                "Minor version increases for copy tweaks, accessibility improvements, or bug fixes.",
                "Change log maintained alongside assets so developers know which version to start from.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* ACCESS & GOVERNANCE */}
      <Section>
        <Container className="space-y-8 fade-in-up">
          <h2 className="font-heading text-2xl text-[var(--text)]">
            Access and governance
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DetailBlock
              title="Access"
              items={[
                "Read access for the wider content and media team.",
                "Edit access restricted to design system maintainers.",
                "Clear contact listed for requesting new templates or updates.",
              ]}
            />
            <DetailBlock
              title="Maintenance"
              items={[
                "Regular review cycle to archive outdated patterns and files.",
                "Updated templates are announced with a short summary of what changed and why.",
                "Retired assets are moved to an Archive folder, not deleted, to preserve history.",
              ]}
            />
          </div>

          <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-[var(--text)]/70 max-w-xl">
              A disciplined asset register keeps production predictable. New
              courses start from known good foundations instead of hunting for
              the latest version.
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
      <div className="space-y-2 text-sm text-[var(--text)]/75">
        {items.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>
    </div>
  );
}