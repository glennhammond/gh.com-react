// src/theme/ThemeProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// Use a namespaced key so nothing else on the site accidentally overwrites it.
const THEME_STORAGE_KEY = "gh.theme";

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  // Default to light unless the user has explicitly chosen dark (stored under our key).
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "dark" ? "dark" : "light";
  });

  // Apply theme to <html> and persist
  useEffect(() => {
    const root = document.documentElement;

    // Toggle the actual Tailwind dark-mode class
    root.classList.toggle("dark", theme === "dark");

    // Persist theme for next load (under our namespaced key)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    // Clean up old key to prevent collisions / accidental forcing.
    // (Safe even if it doesn't exist.)
    window.localStorage.removeItem("theme");
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}