import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
import Container from "./Container.jsx";

const navItems = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const desktopNavItems = navItems;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-black/5 dark:border-white/10 bg-white/90 dark:bg-[var(--bg)]/90 backdrop-blur-md transition-colors">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              {/* Light mode */}
              <img
                src="/images/logos/logo-glennhammond-dark.svg"
                alt="Glenn Hammond"
                className="block h-7 md:h-8 w-auto max-w-[240px] dark:hidden"
                loading="eager"
                decoding="async"
              />

              {/* Dark mode */}
              <img
                src="/images/logos/logo-glennhammond-light.svg"
                alt="Glenn Hammond"
                className="hidden h-7 md:h-8 w-auto max-w-[240px] dark:block"
                loading="eager"
                decoding="async"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-7">
              {desktopNavItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-heading tracking-wide transition-colors ${
                      isActive
                        ? "text-[var(--secondary)]"
                        : "text-[var(--text)]/80 hover:text-[var(--text)]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-[var(--secondary)] backdrop-blur-sm transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary)]/40 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 shadow-none" />

              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-[var(--secondary)] backdrop-blur-sm transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary)]/40 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 shadow-none"
              >
                {mobileOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={[
          "fixed inset-0 z-[999] md:hidden transition",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <button
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 z-0 bg-black/40 backdrop-blur-[2px]"
        />

        {/* Panel */}
        <div
          className={[
            "absolute top-0 right-0 z-10 h-full w-full sm:w-[86%] sm:max-w-sm",
            "overflow-y-auto",
            "transition-transform duration-200",
            "bg-[#1a2a6b] text-white",
            "shadow-2xl",
            "border-l border-black/10 dark:border-white/10",
            "px-5 pt-4 pb-6",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between">
            <div className="text-lg font-heading tracking-tight">Menu</div>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 bg-white/5 text-[var(--brand-primary)] shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:bg-white/10 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 text-[var(--brand-primary)]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="mt-6 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  [
                    "block rounded-lg px-4 py-4 text-[1.05rem] font-heading font-medium transition",
                    isActive
                      ? "bg-black/5 dark:bg-white/15"
                      : "hover:bg-black/5 dark:hover:bg-white/10",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/40",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="mt-6 rounded-lg border border-black/10 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/10">
            <p className="text-sm opacity-80">Want to talk about a project?</p>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex rounded-lg px-4 py-3 font-heading font-semibold bg-[var(--secondary)] text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}