import { Helmet } from "react-helmet";

export default function SEO({ title, description, url }) {
  return (
    <Helmet>
      <title>{title}</title>

      {description && <meta name="description" content={description} />}

      {url && <link rel="canonical" href={url} />}

      {/* Basic OG */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
    </Helmet>
  );
}
