import { Link } from "react-router-dom";

const highlights = [
  "Client-aware registration and cohort access",
  "Branded Moodle participant experience",
  "Program, replay and resource structure",
  "Reporting-ready delivery foundation",
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
              Corporate Yoga Australia (CYA) needed a scalable way to deliver
              workplace wellbeing programs online. I designed and built
              Wellbeing Studio. <br></br> A branded Moodle platform with tailored
              registration, cohort-based access, program pages, replay libraries
              and a polished participant experience.
            </p>

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

      {/* PROJECT SUMMARY */}
      <section id="project" className="border-y border-[var(--border)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 rounded-[2rem] border border-[var(--border)] bg-[var(--bg-soft)] p-6 shadow-sm md:grid-cols-[0.78fr_1.22fr] md:p-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--brand-purple)]/70">
                Project summary
              </p>
              <h2 className="font-heading text-3xl leading-tight text-[var(--text)] md:text-4xl">
                A scalable wellbeing platform built on Moodle.
              </h2>
              <p className="text-base leading-7 text-[var(--text)]/65">
                Corporate Yoga Australia needed a more polished way to deliver live wellbeing programs, resources and replays across different client groups.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {snapshot.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-sm"
                >
                  <p className="mb-1.5 text-xs uppercase tracking-[0.18em] text-[var(--brand-purple)]/65">
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

      {/* PLATFORM BUILD */}
      <section className="bg-[var(--bg)]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-sm md:p-10">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
              <div className="max-w-xl space-y-4">
                <p className="text-sm uppercase tracking-[0.22em] text-[var(--brand-purple)]/70">
                  Platform build
                </p>
                <h2 className="font-heading text-3xl leading-tight text-[var(--text)] md:text-5xl">
                  A platform shaped around the participant journey.
                </h2>
                <p className="text-base leading-8 text-[var(--text)]/68 md:text-lg">
                  The work focused on simple access, clear pathways and a structure CYA can reuse for future client programs.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-soft)] p-6 shadow-sm md:p-8">
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[var(--brand-purple)]/65">
                  Build focus
                </p>
                <h3 className="mb-4 font-heading text-2xl leading-tight text-[var(--text)] md:text-3xl">
                  Simple access, clear pathways and a reusable platform structure.
                </h3>
                <p className="text-sm leading-7 text-[var(--text)]/72 md:text-base md:leading-8">
                  Dedicated access links place participants into the right cohort, program pages guide the monthly experience, and replay/resource areas keep the platform useful beyond live sessions.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-[var(--border)] pt-8">
              <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[var(--brand-purple)]/65">
                Core build components
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-4 py-4 shadow-sm"
                  >
                    <h4 className="font-heading text-sm leading-snug text-[var(--text)]">
                      {item}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM POTENTIAL */}

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