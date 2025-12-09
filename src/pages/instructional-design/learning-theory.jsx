// src/pages/instructional-design/learning-theory.jsx
import React from "react";
import { Link } from "react-router-dom";

import PageWrapper from "../../components/layout/PageWrapper";
import PageIntro from "../../components/layout/PageIntro";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import SEO from "../../components/ui/SEO.jsx";

const THEORY_CARDS = [
  {
    title: "Behaviourism",
    href: "/instructional-design/learning-theory/behaviourism",
    description:
      "Learning as a change in observable behaviour, shaped by conditioning, feedback and reinforcement.",
  },
  {
    title: "Cognitivism",
    href: "/instructional-design/learning-theory/cognitivism",
    description:
      "How learners process, organise, store and retrieve information – and what that means for structuring content.",
  },
  {
    title: "Constructivism",
    href: "/instructional-design/learning-theory/constructivism",
    description:
      "Learners actively construct meaning from experience, reflection and collaboration, rather than absorbing facts.",
  },
  {
    title: "Connectivism",
    href: "/instructional-design/learning-theory/connectivism",
    description:
      "Learning across networks of people, tools and resources in a digital world, where connection and curation matter.",
  },
  {
    title: "Andragogy",
    href: "/instructional-design/learning-theory/andragogy",
    description:
      "Principles of adult learning: relevance, self-direction, problem-centred tasks and immediate application.",
  },
  {
    title: "Assessment & learning models",
    href: "/instructional-design/assessment-and-learning-models",
    description:
      "How assessment approaches and design models connect with learning theory in real instructional design work.",
  },
];

export default function LearningTheory() {
  return (
    <PageWrapper>
      <SEO
        title="Learning Theories in Instructional Design – Glenn Hammond"
        description="A practical overview of Behaviourism, Cognitivism, Constructivism, Connectivism, Andragogy and assessment models, and how they inform modern instructional design and eLearning."
      />

      <Section>
        <Container className="space-y-10 md:space-y-12">
          <PageIntro
            breadcrumb={[
              { label: "Home", href: "/" },
              { label: "Learning theories" },
            ]}
            title="Learning theories in instructional design"
          >
            <p className="text-base md:text-lg text-[var(--text)]/80">
              The first part of my Instructional Design and Technology course
              focused on learning theories – the foundations that underpin
              effective teaching and learning. This page brings that work
              together and reframes it through the lens of my practice as an
              eLearning specialist: how these theories actually shape the way I
              design professional learning, online courses and digital
              resources.
            </p>
            <p className="text-base md:text-lg text-[var(--text)]/80">
              I focus on five core theories – Behaviourism, Cognitivism,
              Constructivism, Connectivism and Andragogy – alongside the
              assessment and learning models that connect them to real projects.
              Think of them as lenses I switch between when designing, rather
              than separate camps to pick and defend.
            </p>
          </PageIntro>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {THEORY_CARDS.map((card) => (
              <Link
                key={card.title}
                to={card.href}
                className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)]/80 backdrop-blur-sm p-6 md:p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[var(--brand-primary)]/60 transition-all duration-200"
              >
                <div className="space-y-3">
                  <h2 className="text-lg md:text-xl font-semibold tracking-tight text-[var(--text)]">
                    {card.title}
                  </h2>
                  <p className="text-sm md:text-base text-[var(--text)]/75 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center text-sm font-medium text-[var(--brand-primary)] group-hover:translate-x-1 transition-transform">
                  <span>Read more</span>
                  <span aria-hidden="true" className="ml-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Subtle CTA block */}
          <div className="mt-4 md:mt-6 rounded-2xl border border-dashed border-[var(--border-subtle)] bg-[var(--surface-elevated)]/70 p-5 md:p-6">
            <h2 className="text-base md:text-lg font-semibold text-[var(--text)] mb-2">
              Applying theory to real projects
            </h2>
            <p className="text-sm md:text-base text-[var(--text)]/80 mb-3">
              In practice, I rarely use one theory in isolation. A typical
              project might blend Behaviourism for feedback and reinforcement,
              Cognitivism for structure, Constructivism for scenarios and
              Andragogy to keep everything relevant and respectful for busy
              adults.
            </p>
            <p className="text-sm md:text-base text-[var(--text)]/80">
              If you&apos;d like help applying these ideas to your organisation&apos;s
              learning, you can find out more on my{" "}
              <Link
                to="/consultancy"
                className="underline underline-offset-4 decoration-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
              >
                specialist eLearning consultancy services
              </Link>{" "}
              page.
            </p>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}