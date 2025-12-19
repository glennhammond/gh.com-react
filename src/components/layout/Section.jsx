// src/components/layout/Section.jsx
import React from "react";
import Container from "./Container";

export default function Section({
  children,
  className = "",
  containerClassName = "",
  noPadding = false,
}) {
  return (
    <section className={`${noPadding ? "" : "py-16"} ${className}`.trim()}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
