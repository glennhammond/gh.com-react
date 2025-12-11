// src/components/layout/PageIntro.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function PageIntro({
  breadcrumb,
  eyebrow,
  title,
  lead,
  meta,
  children,
}) {
  return (
    <div className="space-y-4 md:space-y-5">
      {/* Breadcrumb */}
      {Array.isArray(breadcrumb) && breadcrumb.length > 0 && (
        <nav
          aria-label="Breadcrumb"
          className="mb-1 text-xs md:text-sm text-slate-500 dark:text-slate-400"
        >
          <ol className="flex flex-wrap items-center gap-1.5">
            {breadcrumb.map((item, index) => {
              const isLast = index === breadcrumb.length - 1;
              return (
                <li key={item.href ?? item.label} className="flex items-center">
                  {!isLast && item.href ? (
                    <Link
                      to={item.href}
                      className="hover:text-[var(--brand-primary)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      {item.label}
                    </span>
                  )}
                  {!isLast && (
                    <span className="mx-1 text-slate-400 dark:text-slate-500">
                      /
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      {/* Eyebrow */}
      {eyebrow && (
        <p className="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-[var(--brand-primary)]">
          {eyebrow}
        </p>
      )}

      {/* Title */}
      {title && (
        <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl text-slate-900 dark:text-slate-50">
          {title}
        </h1>
      )}

      {/* Lead / intro text */}
      {lead && (
        <p className="max-w-2xl text-[0.95rem] md:text-base leading-relaxed text-slate-700 dark:text-slate-200">
          {lead}
        </p>
      )}

      {/* Meta grid: e.g. Client / Role / Year / Stack */}
      {Array.isArray(meta) && meta.length > 0 && (
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-xs md:text-sm pt-2">
          {meta.map((item) => (
            <div key={item.label} className="space-y-0.5">
              <dt className="uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {item.label}
              </dt>
              <dd className="font-medium text-slate-900 dark:text-slate-100">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {/* Optional extra content passed in */}
      {children && <div className="pt-2">{children}</div>}
    </div>
  );
}