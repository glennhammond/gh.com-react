import React, { useState } from "react";

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="space-y-10 fade-in-up">
      <h2 className="font-heading text-3xl text-[var(--text)]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {items.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="
                border border-black/10 dark:border-white/10 
                rounded-2xl overflow-hidden 
                bg-[var(--bg)] 
                transition
              "
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="
                  w-full flex justify-between items-center 
                  px-6 py-4 text-left 
                  text-[var(--text)] font-medium
                "
              >
                {faq.question}

                <span
                  className={`
                    transition-transform duration-300 
                    ${isOpen ? "rotate-45" : ""}
                  `}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-[var(--text)]/70 leading-relaxed fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
