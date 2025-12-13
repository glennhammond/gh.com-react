import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 dark:border-white/10 bg-white/90 dark:bg-[var(--bg)]/90 backdrop-blur-md transition-colors">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            {/* Light mode (black logo) */}
            <img
              src="/images/logos/logo-glennhammond-dark.svg"
              alt="Glenn Hammond"
              className="h-9 md:h-10 w-auto dark:hidden"
              loading="eager"
              decoding="async"
            />

            {/* Dark mode (white logo) */}
            <img
              src="/images/logos/logo-glennhammond-light.svg"
              alt="Glenn Hammond"
              className="hidden h-9 md:h-10 w-auto dark:block"
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
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
            <ThemeToggle />

            <button
              type="button"
              aria-label="Toggle menu"
              style={{ borderColor: "rgba(255,255,255,0.85)", color: "var(--secondary)" }}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border hover:border-white bg-[var(--bg-soft)] shadow-sm backdrop-blur-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:[--tw-ring-color:var(--secondary)]"
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
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/95 dark:bg-[var(--bg)]/95 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-5 py-4">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-2 font-heading ${
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
          </div>
        </div>
      )}
    </header>
  );
}