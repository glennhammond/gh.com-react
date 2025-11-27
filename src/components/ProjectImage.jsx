import React, { useState } from "react";

export default function ProjectImage({
  src,
  alt = "",
  wide = false,
  className = "",
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl 
        border border-black/10 dark:border-white/10
        shadow-sm 
        ${wide ? "w-full" : ""}
        ${className}
      `}
    >
      {/* Blurred placeholder */}
      <div
        className={`
          absolute inset-0 w-full h-full 
          bg-[var(--bg-soft)] 
          blur-xl scale-105 
          transition-opacity duration-700
          ${loaded ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`
          w-full h-auto object-cover 
          transition-all duration-700
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />
    </div>
  );
}
