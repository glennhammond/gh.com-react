import React from "react";
import { useTheme } from "../../theme/ThemeProvider.jsx";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="px-3 py-2 rounded-lg text-sm border border-black/10 dark:border-white/20 hover:bg-[var(--bg-soft)] transition"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
