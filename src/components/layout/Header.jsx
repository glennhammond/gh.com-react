import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
];

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  // Initialise from localStorage (or default to dark)
  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    } else {
      setTheme("dark");
    }
  }, []);

  // Apply theme class + persist
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[var(--text)] shadow-sm backdrop-blur-sm transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:[--tw-ring-color:var(--secondary)] dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
    >
      {/* Icon is purely visual - keep simple */}
      {theme === "dark" ? (
        // Sun
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m8.66-10.66l-.7.7M5.64 18.36l-.7.7M21 12h-1M4 12H3m16.66 4.66l-.7-.7M5.64 5.64l-.7-.7M12 5a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7z"
          />
        </svg>
      ) : (
        // Moon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
          />
        </svg>
      )}
    </button>
  );
}

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
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              {/* Light mode */}
              <img
                src="/images/logos/logo-glennhammond-dark.svg"
                alt="Glenn Hammond"
                className="h-11 md:h-12 w-auto dark:hidden"
                loading="eager"
                decoding="async"
              />

              {/* Dark mode */}
              <img
                src="/images/logos/logo-glennhammond-light.svg"
                alt="Glenn Hammond"
                className="hidden h-11 md:h-12 w-auto dark:block"
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
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white/70 text-[var(--text)] shadow-sm backdrop-blur-sm transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:[--tw-ring-color:var(--secondary)] dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
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
              className="h-11 w-11 grid place-items-center rounded-lg border border-black/10 bg-white/70 hover:bg-white/90 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15 transition"
            >
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

          {/* Bottom CTA - keep this */}
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