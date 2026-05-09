import { Link } from "react-router-dom";

const highlights = [
  "Client-specific registration flow",
  "Cohort-based access model",
  "Branded Moodle participant experience",
  "Monthly wellbeing program structure",
  "Replay and resource library",
  "Mobile-friendly navigation",
  "Premium homepage and login experience",
  "Reporting-ready platform foundation",
];

const snapshot = [
  ["Client", "Corporate Yoga Australia"],
  ["Sector", "Workplace wellbeing"],
  [
    "Role",
    "Learning platform design, UX, Moodle build, registration flow, content structure, visual design",
  ],
  [
    "Platform",
    "Moodle, Boost Union, custom registration plugin, Microsoft 365 email, Vimeo",
  ],
  ["Status", "Live"],
];

export default function WellbeingStudioCaseStudy() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--bg)] text-[var(--text)]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0))]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-[1fr_0.85fr] md:py-32">
          <div className="max-w-4xl space-y-8">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--brand-purple)]/70">
              Case Study
            </p>

            <h1 className="font-heading text-4xl leading-tight text-[var(--text)] md:text-6xl">
              Wellbeing Studio
            </h1>

            <p className="max-w-3xl text-xl leading-relaxed text-[var(--text)]/82 md:text-2xl">
              A premium wellbeing learning platform for scalable workplace
              program delivery.
            </p>

            <p className="max-w-3xl text-base leading-8 text-[var(--text)]/68 md:text-lg">
              Corporate Yoga Australia needed a more scalable way to deliver
              workplace wellbeing programs online. I designed and built
              Wellbeing Studio. <br></br> A branded Moodle platform with tailored
              registration, cohort-based access, program pages, replay libraries
              and a polished participant experience.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#project"
                className="rounded-full bg-[var(--brand-purple)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[var(--brand-purple-strong)]"
              >
                View the project
              </a>

              <Link
                to="/contact"
                className="rounded-full border border-[var(--border)] bg-white/60 px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-white"
              >
                Discuss a similar platform
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="rounded-[2rem] border border-[var(--border)] bg-white/70 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#fbfaf8] text-[#1A1446]">
                <div className="flex items-center gap-2 border-b border-black/10 px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-[#EFA892]" />
                  <span className="h-3 w-3 rounded-full bg-[#8DB9E8]" />
                  <span className="h-3 w-3 rounded-full bg-[var(--brand-purple)]" />
                  <span className="ml-3 rounded-full bg-black/5 px-4 py-1 text-xs text-[#1A1446]/55">
                    studio.corporateyoga.com.au
                  </span>
                </div>

                <div className="space-y-5 p-6">
                  <div className="rounded-2xl bg-[#171043] p-3">
                    <img
                      src="/images/wellbeing-studio-pause-move-reset.jpg"
                      alt="Wellbeing Studio Pause Move Reset homepage hero"
                      className="h-auto w-full rounded-xl object-contain"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-black/10 bg-white p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#1A1446]/45">
                        Access
                      </p>
                      <p className="mt-2 font-heading text-xl">Client-aware</p>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#1A1446]/45">
                        Delivery
                      </p>
                      <p className="mt-2 font-heading text-xl">Program-ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section id="project" className="border-y border-[var(--border)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-soft)] p-8 shadow-sm md:grid-cols-[0.78fr_1.22fr] md:p-10">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--brand-purple)]/70">
                Project snapshot
              </p>
              <h2 className="font-heading text-3xl leading-tight text-[var(--text)] md:text-4xl">
                The build at a glance
              </h2>
              <p className="text-base leading-7 text-[var(--text)]/65">
                A practical mix of learning design, platform development, registration logic and participant experience design.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {snapshot.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm"
                >
                  <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--brand-purple)]/65">
                    {label}
                  </p>
                  <p className="text-sm leading-6 text-[var(--text)]/82">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[var(--bg)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[var(--brand-primary)]/70">
              Overview
            </p>
            <h2 className="font-heading text-3xl leading-tight md:text-4xl">
              From one-off sessions to a scalable digital wellbeing experience.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[var(--text)]/75">
            <p>
              Corporate Yoga Australia delivers workplace wellbeing programs,
              live sessions and digital resources. The opportunity was to create
              a more polished and scalable online experience that could support
              different clients, buildings, programs and participant groups.
            </p>

            <p>
              Wellbeing Studio was created as both a live wellbeing platform and
              a reusable model for future client-specific learning experiences.
              It combines learning design, UX, Moodle development, brand design
              and digital delivery into one practical system.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGE / SOLUTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-soft)] p-8 shadow-sm md:grid-cols-[0.78fr_1.22fr] md:p-10">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--brand-purple)]/70">
                Challenge &amp; solution
              </p>
              <h2 className="font-heading text-3xl leading-tight text-[var(--text)] md:text-4xl">
                Turning a traditional LMS into a polished participant experience.
              </h2>
              <p className="text-base leading-7 text-[var(--text)]/65">
                The goal was not just to configure Moodle. It was to create a calm, branded and repeatable delivery model that could support real client programs.
              </p>
            </div>

            <div className="grid gap-4">
              <article className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--brand-purple)]/65">
                  The challenge
                </p>
                <h3 className="mb-4 font-heading text-2xl leading-tight text-[var(--text)]">
                  The LMS needed to feel less like an LMS.
                </h3>
                <p className="text-base leading-8 text-[var(--text)]/75">
                  The platform needed to support client-specific access, simple
                  registration, polished program pages, replay delivery and future
                  reporting - without creating a clunky or confusing participant
                  experience.
                </p>
              </article>

              <article className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--brand-purple)]/65">
                  The solution
                </p>
                <h3 className="mb-4 font-heading text-2xl leading-tight text-[var(--text)]">
                  A branded platform model for repeatable delivery.
                </h3>
                <p className="text-base leading-8 text-[var(--text)]/75">
                  I designed and built a client-aware wellbeing environment where
                  users register through dedicated access links, are assigned to the
                  correct cohort, and arrive inside a calm, branded program
                  experience tailored to their organisation or group.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I BUILT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[var(--brand-primary)]/70">
              What I built
            </p>
            <h2 className="font-heading text-3xl leading-tight md:text-4xl">
              A complete foundation for client-ready wellbeing delivery.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6"
              >
                <div className="mb-5 h-10 w-10 rounded-full bg-[var(--brand-primary)]/10" />
                <h3 className="font-heading text-lg leading-snug">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH */}
      <section className="bg-[var(--brand-primary)] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-white/60">
              Design approach
            </p>
            <h2 className="font-heading text-3xl leading-tight md:text-5xl">
              Designed like a member platform, not a traditional course site.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/75">
            <p>
              The visual direction was intentionally calm, spacious and premium.
              The aim was to reduce Moodle friction and create an experience
              that felt more like a modern wellbeing membership than a standard
              learning management system.
            </p>

            <p>
              The design uses strong hero sections, generous spacing, clear
              calls to action, mobile-friendly navigation and consistent content
              patterns so participants can easily move between the monthly
              program, replays, resources and support.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-[var(--bg)]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
              <p className="mb-3 text-sm uppercase tracking-[0.16em] text-[var(--brand-primary)]/70">
                Outcome
              </p>
              <h3 className="font-heading text-2xl">Live platform</h3>
              <p className="mt-4 leading-7 text-[var(--text)]/70">
                The first version is now live and supporting real participant
                access.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
              <p className="mb-3 text-sm uppercase tracking-[0.16em] text-[var(--brand-primary)]/70">
                Foundation
              </p>
              <h3 className="font-heading text-2xl">Reusable model</h3>
              <p className="mt-4 leading-7 text-[var(--text)]/70">
                The structure can be adapted for future clients, conferences,
                cohorts and digital programs.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
              <p className="mb-3 text-sm uppercase tracking-[0.16em] text-[var(--brand-primary)]/70">
                Value
              </p>
              <h3 className="font-heading text-2xl">Scalable delivery</h3>
              <p className="mt-4 leading-7 text-[var(--text)]/70">
                CYA now has a stronger platform foundation for digital wellbeing
                delivery and future client growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM POTENTIAL */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[var(--brand-primary)]/70">
            Platform potential
          </p>

          <h2 className="font-heading text-3xl leading-tight md:text-5xl">
            The same model can support more than wellbeing.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text)]/70">
            Although created for workplace wellbeing, this platform model can be
            adapted for onboarding, compliance, professional development, client
            education, membership programs and internal capability building.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-[var(--brand-purple)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-purple-strong)]"
            >
              Discuss a similar platform
            </Link>

            <Link
              to="/"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--bg-soft)]"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}