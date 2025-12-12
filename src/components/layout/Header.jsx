// src/components/layout/Header.jsx
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
    <header
      className="
        sticky top-0 z-40
        border-b border-black/5 dark:border-white/10
        bg-white/90 dark:bg-[#020617]/90
        backdrop-blur-md
        transition-colors
      "
    >
      {/* MAIN BAR (aligned to site container) */}
      <div className="container flex items-center justify-between py-4">
        {/* LEFT: Logo / Branding */}
        <Link to="/" className="flex items-center gap-3 group ml-2 md:ml-4">
          {/* Light-mode logo (dark text) */}
          <img
            src="/images/logos/logo-glennhammond-dark.svg"
            alt="Glenn Hammond - eLearning Specialist"
            className="h-11 md:h-12 block dark:hidden"
          />
          {/* Dark-mode logo (light text) */}
          <img
            src="/images/logos/logo-glennhammond-light.svg"
            alt="Glenn Hammond - eLearning Specialist"
            className="h-11 md:h-12 hidden dark:block"
          />
        </Link>

        {/* RIGHT: Desktop nav + theme toggle */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "font-heading text-sm tracking-wide",
                    "text-slate-900 hover:text-[var(--brand-primary)]",
                    "dark:text-slate-100 dark:hover:text-[var(--brand-primary)]",
                    isActive ? "text-[var(--brand-primary)]" : "",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <ThemeToggle />
        </div>

        {/* MOBILE: burger + theme toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/20 px-3 py-2"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE NAV PANEL */}
      {mobileOpen && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white dark:bg-[#020617]">
          <nav className="container py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  [
                    "font-heading text-sm py-1",
                    "text-slate-900 hover:text-[var(--brand-primary)]",
                    "dark:text-slate-100 dark:hover:text-[var(--brand-primary)]",
                    isActive ? "text-[var(--brand-primary)]" : "",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}