// src/components/layout/PageWrapper.jsx
import React from "react";
import { useLocation } from "react-router-dom";

export default function PageWrapper({
  children,
  className = "",
  container = false,
  containerClassName = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
}) {
  const location = useLocation();

  return (
    <main className={`fade-in-up ${className}`.trim()}>
      <div
        key={location.pathname}
        className={container ? containerClassName : undefined}
      >
        {children}
      </div>
    </main>
  );
}