import React from "react";
import { Link } from "react-router-dom";

export function PageIntro({
  breadcrumb = [],
  eyebrow,
  title,
  subtitle,
  right,
  children,
}) {
  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-12 items-start">
      {right && (
        <div className="md:col-span-5 order-first md:order-last md:pt-10 lg:pt-12">
          {right}
        </div>
      )}

      <div className={`${right ? "md:col-span-7" : "md:col-span-12"} order-last md:order-first`}>
        <div className="space-y-5">
          {Array.isArray(breadcrumb) && breadcrumb.length > 0 && (
            <nav aria-label="Breadcrumb" className="text-sm">
              <ol className="flex flex-wrap items-center gap-2 text-slate-600 dark:text-slate-300">
                {breadcrumb.map((item, idx) => {
                  const isLast = idx === breadcrumb.length - 1;
                  const label = item?.label ?? "";
                  const href = item?.href;

                  return (
                    <li key={`${label}-${idx}`} className="flex items-center gap-2">
                      {href && !isLast ? (
                        <Link
                          to={href}
                          className="hover:text-[var(--brand-primary)] transition-colors"
                        >
                          {label}
                        </Link>
                      ) : (
                        <span
                          className={
                            isLast
                              ? "text-slate-900 dark:text-white"
                              : "text-slate-600 dark:text-slate-300"
                          }
                        >
                          {label}
                        </span>
                      )}

                      {!isLast && <span className="opacity-40">/</span>}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          {eyebrow && (
            <p className="text-sm font-medium tracking-wide uppercase text-slate-500 dark:text-slate-400">
              {eyebrow}
            </p>
          )}

          {title && (
            <h1 className="font-heading text-4xl md:text-5xl leading-tight tracking-[-0.02em] text-[var(--brand-primary)]">
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-prose">
              {subtitle}
            </p>
          )}

          {children ? (
            <div className="mt-6 max-w-2xl space-y-4 [&>p]:m-0">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PageIntro;