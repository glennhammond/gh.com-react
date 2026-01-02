// src/components/layout/PageWrapper.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Container from "./Container";

export default function PageWrapper({
  children,
  className = "",
  container = false,
  containerClassName = "",
}) {
  const location = useLocation();

  return (
    <main className={`fade-in-up ${className}`.trim()}>
      {container ? (
        <Container key={location.pathname} className={containerClassName}>
          {children}
        </Container>
      ) : (
        <div key={location.pathname}>{children}</div>
      )}
    </main>
  );
}