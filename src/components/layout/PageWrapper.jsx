// src/components/layout/PageWrapper.jsx
import React from "react";

export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      {children}
    </div>
  );
}