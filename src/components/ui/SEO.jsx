// src/components/ui/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ title, description }) {
  const siteTitle = "Glenn Hammond – eLearning, xAPI, Design";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && (
        <meta name="description" content={description} />
      )}
    </Helmet>
  );
}