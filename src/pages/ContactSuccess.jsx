// src/pages/ContactSuccess.jsx
import React from "react";
import { Link } from "react-router-dom";

import SEO from "../components/ui/SEO.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

export default function ContactSuccess() {
  return (
    <>
      <SEO
        title="Message sent – Glenn Hammond"
        description="Thanks for getting in touch. I'll respond as soon as possible."
      />

      <div className="w-full flex justify-center">
        <div className="container py-32 space-y-10 text-center fade-in-up">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
              { label: "Success" },
            ]}
          />

          <div className="w-20 h-20 rounded-full bg-brand-primary/10 dark:bg-brand-accent/20 flex items-center justify-center animate-pop mx-auto">
            <span className="text-4xl">✓</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl text-[var(--text)]">
            Message sent successfully
          </h1>

          <p className="max-w-xl mx-auto text-[var(--text)]/70 leading-relaxed text-lg">
            Thanks for getting in touch - I’ll reply as soon as I can. If your enquiry is time-sensitive, feel free to follow up.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-10 md:pt-12">
            <Link
              to="/"
              className="px-6 py-3 rounded-xl bg-[var(--text)] text-[var(--bg)] font-medium text-sm hover:opacity-90 transition"
            >
              Return home
            </Link>

            <Link
              to="/work"
              className="px-6 py-3 rounded-xl border border-black/10 dark:border-white/10 text-[var(--text)] font-medium text-sm hover:bg-[var(--bg-soft)] transition"
            >
              Browse my work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}