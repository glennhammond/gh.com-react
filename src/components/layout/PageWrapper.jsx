// src/components/layout/PageWrapper.jsx
import React from "react";
import { useLocation } from "react-router-dom";

export default function PageWrapper({ children, className = "" }) {
  const location = useLocation();

  return (
    <main className={`fade-in-up ${className}`.trim()}>
      <div key={location.pathname}>{children}</div>
    </main>
  );
}