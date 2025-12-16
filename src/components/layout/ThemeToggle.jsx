
import React from "react";

function SunIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`text-[var(--brand-primary)] ${className}`}
      {...props}
    >
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path d="M12 2.5v2" />
      <path d="M12 19.5v2" />
      <path d="M4.22 4.22l1.42 1.42" />
      <path d="M18.36 18.36l1.42 1.42" />
      <path d="M2.5 12h2" />
      <path d="M19.5 12h2" />
      <path d="M4.22 19.78l1.42-1.42" />
      <path d="M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`text-[var(--brand-primary)] ${className}`}
      {...props}
    >
      <path d="M21 13.2A8 8 0 1 1 10.8 3a6.5 6.5 0 0 0 10.2 10.2Z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window === "undefined") return "light";
    try {
      const stored = localStorage.getItem("theme");
      return stored === "light" || stored === "dark" ? stored : "light";
    } catch {
      return "light";
    }
  });

  React.useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.toggle("dark", isDark);
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    const root = document.documentElement;

    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 250);

    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={
        "inline-flex items-center justify-center h-10 w-10 " +
        "rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm " +
        "text-[var(--brand-primary)] shadow-[0_10px_24px_rgba(0,0,0,0.18)] " +
        "transition hover:bg-white/10 hover:-translate-y-[1px] active:translate-y-0 " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]/50"
      }
    >
      {isDark ? (
        <SunIcon className="h-[18px] w-[18px]" />
      ) : (
        <MoonIcon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}