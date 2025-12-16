// src/components/layout/SiteLayout.jsx
import React from "react";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}