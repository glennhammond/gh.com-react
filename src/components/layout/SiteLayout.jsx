// src/components/layout/SiteLayout.jsx
import React from "react";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
      <main className="flex-1">{children}</main>
    </div>
  );
}