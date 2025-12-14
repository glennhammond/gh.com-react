import React from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window === "undefined") return "dark";
    try {
      const stored = localStorage.getItem("theme");
      return stored === "light" || stored === "dark" ? stored : "dark";
    } catch {
      return "dark";
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white/70 text-[var(--text)] shadow-sm backdrop-blur-sm hover:bg-white/90 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15"
    >
      <span aria-hidden className="text-sm leading-none">
        {isDark ? "☾" : "☀"}
      </span>
    </button>
  );
}