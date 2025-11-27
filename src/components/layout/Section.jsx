import Container from "./Container";

export default function Section({
  children,
  className = "",
  noPadding = false,
}) {
  return (
    <section className={`${noPadding ? "" : "py-16"} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
