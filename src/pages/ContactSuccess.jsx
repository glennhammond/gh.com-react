import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/ui/SEO.jsx";

export default function ContactSuccess() {
  return (
    <>
      <SEO
        title="Message sent – Glenn Hammond"
        description="Thanks for getting in touch — I'll reply as soon as possible."
      />

      <div className="w-full flex justify-center">
        <div className="container py-32 flex flex-col items-center text-center space-y-10 fade-in-up">

          {/* ICON */}
          <div
            className="
              w-20 h-20 rounded-full 
              bg-brand-primary/10 dark:bg-brand-accent/20 
              flex items-center justify-center
              animate-pop
            "
          >
            <span className="text-4xl">✓</span>
          </div>

          {/* HEADING */}
          <h1 className="font-heading text-4xl md:text-5xl text-[var(--text)]">
            Message sent successfully
          </h1>

          {/* BODY COPY */}
          <p className="max-w-xl text-[var(--text)]/70 leading-relaxed text-lg">
            Thanks for getting in touch — I’ll get back to you as soon as
            possible. If your enquiry is time-sensitive, feel free to follow up
            via email.
          </p>

          {/* BACK BUTTONS */}
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Link
              to="/"
              className="
                px-6 py-3 rounded-xl 
                bg-[var(--text)] text-[var(--bg)]
                font-medium text-sm 
                hover:opacity-90 transition
              "
            >
              Return home
            </Link>

            <Link
              to="/work"
              className="
                px-6 py-3 rounded-xl 
                border border-black/10 dark:border-white/10
                text-[var(--text)]
                font-medium text-sm
                hover:bg-[var(--bg-soft)]
                dark:hover:bg-white/5
                transition
              "
            >
              Browse my work
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}