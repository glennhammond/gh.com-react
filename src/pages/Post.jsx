import React from "react";
import { useParams, Link } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SEO from "../components/SEO";

import { posts } from "../posts/posts";
import { marked } from "marked";

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageWrapper>
        <Section>
          <Container>
            <h1 className="font-heading text-3xl">Post not found</h1>
            <Link to="/blog" className="text-brand-primary hover:underline">
              ← Back to blog
            </Link>
          </Container>
        </Section>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <SEO title={`${post.title} — Glenn Hammond`} description={post.summary} />

      <Section>
        <Container className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="font-heading text-4xl mb-6">{post.title}</h1>
          <p className="text-sm opacity-60 mb-10">
            {new Date(post.date).toLocaleDateString("en-AU")}
          </p>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}
          />

          <Link
            to="/blog"
            className="block mt-12 text-brand-primary hover:underline"
          >
            ← Back to blog
          </Link>
        </Container>
      </Section>
    </PageWrapper>
  );
}
