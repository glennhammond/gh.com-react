import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

const navItems = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-40 
        border-b border-black/10 dark:border-white/10 
        bg-[var(--bg)]/80 dark:bg-[var(--bg)]/60 
        backdrop-blur-md 
        transition-colors
      "
    >
      <div className="container flex items-center justify-between py-4">
        {/* LEFT: Branding (links to home) */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/favicon.svg"
            alt="Glenn Hammond logo"
            className="h-9 w-9 shadow-soft"
          />

          <div className="leading-tight">
            <div className="font-heading text-[var(--text)] tracking-wide text-sm">
              Glenn Hammond
            </div>
            <div className="text-[var(--text)]/60 text-xs">
              eLearning · design · video
            </div>
          </div>
        </Link>

        {/* RIGHT: Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={`
                text-[var(--text)]/80 
                hover:text-brand-primary 
                dark:hover:text-brand-accent 
                transition-colors
              `}
            >
              {item.label}
            </NavLink>
          ))}

          <ThemeToggle />
        </nav>

        {/* RIGHT: Mobile hamburger */}
        <button
          className="md:hidden text-[var(--text)] text-xl px-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="
            md:hidden border-t border-black/10 dark:border-white/10 
            bg-[var(--bg)]/95 dark:bg-[var(--bg)]/70 
            backdrop-blur-md
          "
        >
          <nav className="flex flex-col gap-3 p-6 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="
                  py-1 
                  text-[var(--text)] 
                  hover:text-brand-primary 
                  dark:hover:text-brand-accent
                  transition-colors
                "
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-4">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}