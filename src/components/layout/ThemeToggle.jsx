import React from "react";
import { useTheme } from "../../theme/ThemeProvider.jsx";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const sunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364L16.95 5.05M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05 5.636 5.636" />
    </svg>
  );

  const moonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
    </svg>
  );

  return (
    <button
      onClick={toggleTheme}
      className="
        p-2 rounded-lg
        bg-[var(--bg-soft)]
        border border-black/10 dark:border-white/10
        text-[var(--text)]
        hover:bg-brand-primary hover:text-white
        dark:hover:bg-brand-accent
        transition-colors shadow-soft
        flex items-center justify-center
      "
      aria-label="Toggle theme"
    >
      {theme === "dark" ? sunIcon : moonIcon}
    </button>
  );
}