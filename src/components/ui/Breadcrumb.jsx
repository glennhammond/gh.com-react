// src/components/ui/Breadcrumb.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm text-[var(--text)]/60 flex flex-wrap items-center gap-2"
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;

        // Linked breadcrumb
        if (!isLast && item.href) {
          return (
            <React.Fragment key={`${item.label}-${i}`}>
              <Link
                to={item.href}
                className="hover:text-brand-primary transition-colors"
              >
                {item.label}
              </Link>
              <span aria-hidden="true">/</span>
            </React.Fragment>
          );
        }

        // Current page (no link)
        return (
          <span
            key={`${item.label}-${i}`}
            aria-current="page"
            className="opacity-80"
          >
            {item.label}
          </span>
        );
      })}
    </nav>
  );
}