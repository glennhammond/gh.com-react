// src/components/ui/Breadcrumb.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-1">
      <ol className="flex flex-wrap items-center text-xs font-medium">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const label = item?.label ?? "";

          const to = item?.to ?? null;
          const href = item?.href ?? null;
          const isExternal = typeof href === "string" && /^https?:\/\//i.test(href);

          const showLink = !isLast && (to || href);

          return (
            <li key={`${label || "crumb"}-${i}`} className="flex items-center">
              {showLink ? (
                to ? (
                  <Link
                    to={to}
                    className="text-[var(--secondary)] hover:text-[var(--secondary)]/90 underline-offset-4 hover:underline transition-colors"
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="text-[var(--secondary)] hover:text-[var(--secondary)]/90 underline-offset-4 hover:underline transition-colors"
                  >
                    {label}
                  </a>
                )
              ) : (
                <span aria-current="page" className="text-[var(--text)]">
                  {label}
                </span>
              )}

              {!isLast && (
                <span aria-hidden="true" className="mx-1 select-none text-[var(--text)]/40">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}