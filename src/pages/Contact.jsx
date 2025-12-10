// src/pages/Contact.jsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import SEO from "../components/ui/SEO.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  // Auto-hide toast
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(false), 2500);
      return () => clearTimeout(t);
    }
  }, [toast]);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const form = event.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mqanpoeg", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
      setToast(true);

      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

      setTimeout(() => navigate("/contact-success"), 800);
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      <SEO
        title="Contact – Glenn Hammond"
        description="Get in touch to discuss eLearning design, Storyline development, UX, xAPI analytics, or digital learning projects."
      />

      <div className="w-full flex justify-center">
        <div className="container py-24 space-y-24">

          {/* ==================== BREADCRUMB ==================== */}
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />

          {/* ==================== MAIN GRID ==================== */}
          <section
            ref={formRef}
            className="grid grid-cols-1 lg:grid-cols-3 gap-16 fade-in-up"
          >
            {/* LEFT SIDE — CONTACT INFO */}
            <div className="space-y-6">
              <h2 className="font-heading text-xl text-[var(--text)]">
                Contact details
              </h2>

              <p className="text-[var(--text)]/70 leading-relaxed">
                Based in Brisbane. Work everywhere
              </p>

              <div className="space-y-2">
                <p className="text-sm text-[var(--text)]/60">Email</p>
                <a
                  href="mailto:hello@glennhammond.com"
                  className="text-brand-primary dark:text-brand-accent hover:opacity-80"
                >
                  hello@glennhammond.com
                </a>
              </div>

              <iframe
                title="map"
                loading="lazy"
                className="w-full h-64 rounded-xl border border-black/10 dark:border-white/10"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.006050509483!2d153.024!3d-27.480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI4JzQ4LjAiUyAxNTPCsDAxJzI0LjQiRQ!5e0!3m2!1sen!2sau!4v0000000000000"
              />
            </div>

            {/* RIGHT SIDE — FORM */}
            <form
              onSubmit={handleSubmit}
              className="
                lg:col-span-2 
                grid grid-cols-1 md:grid-cols-2 gap-6
                fade-in-up
              "
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[var(--text)]/60">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="
                    px-4 py-3 rounded-xl 
                    bg-[var(--bg)] 
                    border border-black/10 dark:border-white/10
                    text-[var(--text)]
                    focus:outline-none focus:ring-2
                    focus:ring-brand-primary/30 dark:focus:ring-brand-accent/30
                  "
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-[var(--text)]/60">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="
                    px-4 py-3 rounded-xl 
                    bg-[var(--bg)] 
                    border border-black/10 dark:border-white/10
                    text-[var(--text)]
                    focus:outline-none focus:ring-2
                    focus:ring-brand-primary/30 dark:focus:ring-brand-accent/30
                  "
                  placeholder="you@example.com"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm text-[var(--text)]/60">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="
                    px-4 py-3 rounded-xl 
                    bg-[var(--bg)] 
                    border border-black/10 dark:border-white/10
                    text-[var(--text)]
                    focus:outline-none focus:ring-2
                    focus:ring-brand-primary/30 dark:focus:ring-brand-accent/30
                    resize-none
                  "
                  placeholder="Tell me about your project…"
                />
              </div>

              {/* Submit button */}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="
                    w-full md:w-auto
                    px-8 py-4 rounded-xl 
                    bg-[var(--text)] text-[var(--bg)]
                    text-sm font-medium 
                    hover:opacity-90 transition shadow-sm
                    disabled:opacity-40 disabled:cursor-not-allowed
                    flex items-center gap-2
                  "
                >
                  {status === "sending" && "Sending…"}
                  {status === "success" && "Sent ✓"}
                  {status === "idle" && "Send message"}
                  {status === "error" && "Try again"}
                </button>
              </div>

              {status === "error" && (
                <p className="md:col-span-2 text-sm text-red-500 pt-2">
                  Something went wrong — please try again.
                </p>
              )}
            </form>
          </section>

          {/* Toast */}
          {toast && (
            <div
              className="
                fixed bottom-6 right-6 
                bg-[var(--text)] text-[var(--bg)]
                px-5 py-3 rounded-xl shadow-lg
                animate-slide-up
              "
            >
              Message sent 👍
            </div>
          )}
        </div>
      </div>
    </>
  );
}