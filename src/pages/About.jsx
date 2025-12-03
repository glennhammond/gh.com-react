// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../components/layout/PageWrapper";
import PageHeader from "../components/layout/PageHeader";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SEO from "../components/ui/SEO.jsx";

export default function About() {
  return (
    <PageWrapper>
    <SEO
  title="About Glenn Hammond – eLearning, UX, Analytics, Video"
  description="Learn more about Glenn Hammond: eLearning specialist, designer, and video producer based in Brisbane."
/>

      {/* ============================
          PAGE HEADER
      ============================= */}
      <PageHeader
        title="I design and build learning experiences that actually feel good to use."
        subtitle="I’m Glenn Hammond — an eLearning specialist, designer, and videographer based in Brisbane. I design professional learning for teachers at Independent Schools Queensland, and create selected projects through my own practice and partners like Corporate Yoga Australia."
      >
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--text)]/60 flex items-center gap-2 mt-4">
          <Link to="/" className="hover:text-brand-primary">Home</Link>
          <span>/</span>
          <span>About</span>
        </nav>
      </PageHeader>

      {/* ============================
          HERO SECTION (TEXT + PORTRAIT)
      ============================= */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-12 items-start fade-in-up">
          {/* Text side */}
          <div className="space-y-6">
            <p className="text-[var(--text)]/75 leading-relaxed">
              My work sits at the intersection of{" "}
              <span className="font-medium">
                
                pedagogy, UX, learning analytics, and media
              
              </span>
              . . I care about experiences that are clear, respectful of people’s
             
              time, and grounded in evidence.
            </p>

            <p className="text-[var(--text)]/75 leading-relaxed">
              I help organisations design meaningful, modern learning — blending
             
              instructional design, scenario development, multimedia, xAPI, and
             
              thoughtful visual design to support genuine performance.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                to="/contact"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3 rounded-xl
                  bg-[var(--text)] text-[var(--bg)]
                  text-sm font-medium hover:opacity-90 transition shadow-sm
                "
              >
                Let’s talk about a project →
              </Link>

              <Link
                to="/work"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3 rounded-xl
                  border border-black/10 dark:border-white/15
                  text-sm font-medium text-[var(--text)]
                  bg-[var(--bg)] hover:bg-[var(--bg-soft)]
                  transition
                "
              >
                View selected work
              </Link>
            </div>
          </div>

          {/* Meta card */}
          <aside
            className="
              rounded-3xl border border-black/10 dark:border-white/10
              bg-[var(--bg)]/95 shadow-sm p-6 space-y-6
            "
          >
            <div className="flex items-center justify-center">
              <img
                src="/images/gh-profile.jpg"
                alt="Glenn Hammond"
                className="w-56 h-56 rounded-2xl object-cover border border-black/10 dark:border-white/10 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/60">
                
                Snapshot
              
              </p>
              <h2 className="font-heading text-lg text-[var(--text)]">
                
                Glenn Hammond
              
              </h2>
              <p className="text-sm text-[var(--text)]/70">
                
                eLearning Specialist · Instructional Designer · Video Producer
              
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="mt-[3px] text-xs text-[var(--text)]/50">
                  
                  📍
                
                </span>
                <div>
                  <p className="font-medium text-[var(--text)]/90">Location</p>
                  <p className="text-[var(--text)]/70">
                    
                    Brisbane, Australia (AEST)
                  
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-[3px] text-xs text-[var(--text)]/50">
                  
                  🎓
                
                </span>
                <div>
                  <p className="font-medium text-[var(--text)]/90">
                    
                    Focus areas
                  
                  </p>
                  <p className="text-[var(--text)]/70">
                    Professional learning, child protection training, blended
                   
                    learning, capability building.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* ============================
          DESIGN PHILOSOPHY
      ============================= */}
      <Section>
        <div
          className="
            rounded-3xl p-10 md:p-14
            bg-gradient-to-br from-brand-primary/10 via-[var(--bg-soft)] to-brand-accent/10
            border border-black/5 dark:border-white/5
            space-y-6 fade-in-up
          "
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/60">
            
            Design philosophy
          
          </p>

          <h2 className="font-heading text-3xl md:text-4xl text-[var(--text)]">
            Clarity, empathy, and evidence shape everything I build.
          </h2>

          <p className="text-[var(--text)]/75 max-w-3xl leading-relaxed">
            I believe learning tools should feel intuitive, reduce cognitive
           
            load, and support genuine performance — not add friction. My process
           
            blends user research, UX patterns, visual design systems, and
            analytics analytics to ensure learning feels purposeful and usable.
          </p>
        </div>
      </Section>

      {/* ============================
          WHAT I DO (unchanged)
      ============================= */}
      <Section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 fade-in-up">
          {/* KEEP YOUR EXISTING WHAT I DO GRID HERE */}
        </section>
      </Section>

      {/* ============================
          TIMELINE
      ============================= */}
      <Section>
        <h2 className="font-heading text-xl text-[var(--text)] mb-6">
          
          A quick timeline
        
        </h2>

        <div className="space-y-8 border-l border-black/10 dark:border-white/10 pl-6 fade-in-up">
          {/* ISQ */}
          <div className="relative">
            <span className="absolute -left-[0.65rem] top-1 w-3 h-3 rounded-full bg-brand-primary shadow" />
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text)]/60">
              
              2020 – Present
            
            </p>
            <p className="font-medium text-[var(--text)] mt-1">
              eLearning Specialist – Independent Schools Queensland
            </p>
            <p className="text-sm text-[var(--text)]/70 mt-1 max-w-2xl">
              Designing professional learning across Queensland’s non-state
             
              schools, specialising in child protection and digital pedagogy.
            </p>
          </div>

          {/* Corporate Yoga */}
          <div className="relative">
            <span className="absolute -left-[0.65rem] top-1 w-3 h-3 rounded-full bg-brand-accent shadow" />
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text)]/60">
              
              Ongoing
            
            </p>
            <p className="font-medium text-[var(--text)] mt-1">
              
              Corporate Yoga Australia – Digital & Learning
            
            </p>
            <p className="text-sm text-[var(--text)]/70 mt-1 max-w-2xl">
              Designing digital learning assets, wellbeing content, and modern
             
              marketing materials to support healthier workplaces.
            </p>
          </div>

          {/* Freelance */}
          <div className="relative">
            <span className="absolute -left-[0.65rem] top-1 w-3 h-3 rounded-full bg-[var(--text)]/70 shadow" />
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text)]/60">
              
              Earlier
            
            </p>
            <p className="font-medium text-[var(--text)] mt-1">
              
              Freelance creative + learning work
            
            </p>
            <p className="text-sm text-[var(--text)]/70 mt-1 max-w-2xl">
              A blend of instructional design, multimedia, and digital projects
             
              across industries.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================
          TOOLS + PERSONAL
      ============================= */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 fade-in-up">
          {/* Tools */}
          <div className="space-y-5">
            <h2 className="font-heading text-xl text-[var(--text)]">
              
              Tools & workflow
            
            </h2>
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-4">
              <ul className="text-sm text-[var(--text)]/75 space-y-2">
                <li>
                  
                  <strong>Learning:</strong> Storyline, Rise, H5P, xAPI, LRS
                 
                  (Veracity, Learning Locker)
                
                </li>
                <li>
                  
                  <strong>Design:</strong> Figma, design systems, wireframing,
                 
                  accessibility
                
                </li>
                <li>
                  
                  <strong>Media:</strong> Adobe Premiere, Audition, Photoshop
                
                </li>
                <li>
                  
                  <strong>Tech:</strong> React, Vite, Tailwind, GA4
                
                </li>
              </ul>
            </div>
          </div>

          {/* Personal */}
          <div className="space-y-5">
            <h2 className="font-heading text-xl text-[var(--text)]">
              
              The human side
            
            </h2>
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-[var(--bg)]/95 p-6 space-y-4">
              <p className="text-[var(--text)]/75 leading-relaxed">
                When I’m not designing learning, you’ll find me exploring music,
               
                vinyl culture, filming creative projects, and experimenting with
               
                digital tools. I enjoy the craft behind making things — both the

                technicaltechnical sideside and the more expressive “feel” that good design
               
                brings.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================
          CTA STRIP
      ============================= */}
      <Section>
        <div
          className="
            rounded-3xl p-8 md:p-10
            bg-gradient-to-r from-brand-primary/12 via-[var(--bg-soft)] to-brand-accent/12
            border border-black/5 dark:border-white/5
            flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10
            fade-in-up
          "
        >
          <div className="space-y-2 max-w-xl">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--text)]/60">
              
              Next step
            
            </p>
            <h2 className="font-heading text-2xl text-[var(--text)]">
              Want to talk about a course, product or prototype?
            </h2>
            <p className="text-sm text-[var(--text)]/75 leading-relaxed">
              Whether you need a full course redesign, support with xAPI and
             
              analytics, or a more modern approach to digital learning, I’m
             
              happy to explore what might work.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              to="/contact"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-xl
                bg-[var(--text)] text-[var(--bg)]
                text-sm font-medium hover:opacity-90 transition shadow-sm
              "
            >
              Send a message →
            </Link>

            <Link
              to="/work"
              className="text-xs text-[var(--text)]/70 underline-offset-2 hover:underline"
            >
              Or browse selected work
            </Link>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}

