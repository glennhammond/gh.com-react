import Container from "./Container";

export default function PageHeader({ title, subtitle, children }) {
  return (
    <header className="pt-14 md:pt-16 pb-8 md:pb-10 border-b border-black/5 dark:border-white/10">
      <Container>
        <h1 className="font-heading text-4xl sm:text-5xl mb-4 text-[var(--text)]">
          {title}
        </h1>

        {subtitle && (
          <p className="max-w-2xl text-lg opacity-80 mb-6">
            {subtitle}
          </p>
        )}

        {children}
      </Container>
    </header>
  );
}