import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function SiteLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />

      <main className="flex-1 w-full py-10">{children}</main>

      <Footer />
    </div>
  );
}
