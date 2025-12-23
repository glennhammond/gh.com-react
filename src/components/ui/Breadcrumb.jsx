// src/components/ui/Breadcrumb.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-[var(--text)]/60">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const to = item?.to ?? item?.href;

          return (
            <li key={`${item?.label ?? "crumb"}-${i}`} className="flex items-center">
              {!isLast && to ? (
                <Link
                  to={to}
                  className="text-[var(--secondary)] hover:text-[var(--secondary)]/90 underline-offset-4 hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-[var(--text)]/80">
                  {item.label}
                </span>
              )}

              {!isLast && <span aria-hidden="true" className="mx-2 text-[var(--text)]/40">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}