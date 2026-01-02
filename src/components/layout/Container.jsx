import React from "react";

// Single source of truth for site gutters + max width
export const CONTENT_WRAP = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";

export default function Container({ children, className = "" }) {
  return (
    <div className={`${CONTENT_WRAP} ${className}`.trim()}>
      {children}
    </div>
  );
}