// src/components/layout/Footer.jsx

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        border-t border-black/10 dark:border-white/10 
        bg-[var(--bg)]/80 dark:bg-[var(--bg)]/60
        backdrop-blur-md
        py-8 text-sm 
        text-[var(--text)]/70 
        transition-colors
      "
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* LEFT: Name & Copyright */}
        <span className="text-[var(--text)]/80">© {year} Glenn Hammond</span>

        {/* RIGHT: Mini tagline */}
        <span className="opacity-70 text-xs tracking-wide">
          Brisbane · eLearning · design · video
        </span>
      </div>
    </footer>
  );
}
