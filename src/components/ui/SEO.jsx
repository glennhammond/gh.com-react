// src/components/ui/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet";

const SITE = {
  name: "Glenn Hammond",
  title: "Glenn Hammond - eLearning, xAPI, Design",
  description:
    "Award-winning eLearning specialist in Brisbane designing engaging, data-informed learning in Storyline, Rise and Moodle with xAPI and LRS reporting.",
  url: "https://glennhammond.com",
  // Update this if/when you add a default share image
  image: "https://glennhammond.com/og-default.png",
  twitterHandle: "", // e.g. "@glennhammond" (optional)
};

function normaliseUrl(input) {
  if (!input) return "";
  // Absolute URL
  if (/^https?:\/\//i.test(input)) return input;
  // Relative path
  const path = input.startsWith("/") ? input : `/${input}`;
  return `${SITE.url}${path}`;
}

export default function SEO({
  title,
  description,
  canonical,
  image,
  type = "website",
  noindex = false,
  jsonLd, // object or array of objects
}) {
  const metaTitle = title ? `${title} | ${SITE.title}` : SITE.title;
  const metaDescription = description || SITE.description;

  const canonicalUrl = canonical ? normaliseUrl(canonical) : "";
  const ogImage = normaliseUrl(image || SITE.image);

  const robots = noindex ? "noindex, nofollow" : "index, follow";

  const scripts = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      {/* Basic */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={robots} />

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {SITE.twitterHandle ? (
        <meta name="twitter:site" content={SITE.twitterHandle} />
      ) : null}

      {/* JSON-LD */}
      {scripts.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}