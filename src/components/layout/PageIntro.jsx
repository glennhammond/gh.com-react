import Breadcrumb from "../ui/Breadcrumb";

export default function PageIntro({
  breadcrumb,
  title,
  intro,
  meta,
}) {
  return (
    <div className="space-y-6 fade-in-up">
      {breadcrumb && <Breadcrumb items={breadcrumb} />}

      <div className="space-y-4 max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl text-[var(--text)]">
          {title}
        </h1>

        {intro && (
          <p className="text-[var(--text)]/70 leading-relaxed">
            {intro}
          </p>
        )}
      </div>

      {meta && <div>{meta}</div>}
    </div>
  );
}