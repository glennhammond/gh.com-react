import React from 'react';

export default function PageHero({ title, right }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex flex-col justify-center">
        {title ? (
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[var(--text)]">
            {title}
          </h1>
        ) : null}

        {right ? (
          <div className="pt-6 lg:hidden">
            {right}
          </div>
        ) : null}
      </div>

      {right ? <div className="hidden lg:block w-full">{right}</div> : null}
    </section>
  );
}
---
title: Moving from WordPress to React
slug: moving-from-wordpress-to-react
date: 21/12/2025
category: Building in public
summary: A practical write-up of my migration from a WordPress portfolio to a React build - including content migration, SEO, redirects, and the little details that matter.
---

I’ve had my personal site on WordPress for years.

It worked. I could publish quickly, tweak pages whenever I felt like it, and lean on plugins when I needed something done yesterday.

But over time it started to feel like I was building my portfolio *around* a theme, a page builder, and a plugin stack - instead of designing the experience properly.

So I rebuilt my portfolio as a React site.

This is the honest version - what pushed me to do it, what I kept, what broke, and the checklist I wish I’d had before I started.

## Why I moved off WordPress

This isn’t a WordPress takedown. WordPress is excellent at publishing.

My problem was simpler: my site needed to behave more like a designed product than a templated blog.

A few reasons it stopped fitting:

- **Design control** - I wanted a consistent system across pages, not “close enough” sections patched together with settings.
- **Performance and bloat** - I got tired of chasing plugin overhead, unused CSS/JS, and theme quirks.
- **Reusable components** - I wanted deliberate building blocks (hero, cards, grids, case study sections) that I can reuse and refine.
- **Workflow** - Git, branches, local dev, predictable deploys. No more “what changed?” mystery.

## What I moved to

My setup is straightforward:

- **React** for UI
- **Vite** for fast local development and builds
- **React Router** for routing
- **Tailwind** (plus my own CSS tokens/variables) for styling
- **Vercel** for deployment
- **Markdown (or JS data)** for posts and project content (for now)

That last part is deliberate. I didn’t replace WordPress with a full CMS on day one. I kept it simple so I could ship.

## The migration plan that actually worked

### Freeze the old site and make an inventory

Before I touched code, I wrote a list of what actually mattered:

- Core pages (Home, Services, Work, About, Contact)
- Portfolio items worth keeping
- Blog posts worth keeping (not everything deserves a second life)
- The weird legacy URLs that still get traffic (old categories, tag pages, random WordPress slugs)

That last point becomes your redirect list later.

### Design the structure first

I treated the rebuild like a product redesign.

I locked in:

- One consistent hero pattern (spacing, breadcrumbs, heading rhythm)
- Standard card styles (work cards, post cards, service cards)
- Typography rules (scale, line length, body rhythm)
- A spacing system (section padding, grid gaps)

This is the difference between “I rebuilt my website” and “this looks like a designer built it”.

### Migrate content the simple way

Early on, I avoided over-engineering.

- Projects became a data file.
- Posts became Markdown files.
- Images went into a tidy `public/images/...` structure.

Later I can move to MDX or a CMS if it’s worth it. The first goal was shipping a clean, fast, consistent site.

### Redirects - the unsexy part that matters most

If you’ve been on WordPress for a while, you’ve got old URLs floating around in Google, backlinks, and bookmarks.

The migration isn’t done until redirects are sorted.

My rules:

- Redirect old WordPress slugs to the closest equivalent new page.
- If a page no longer exists and there’s no equivalent, redirect to the most relevant hub (Work, Blog, Services) - not the homepage.
- Keep the redirect list in version control so it doesn’t become tribal knowledge.

### SEO basics - keep it boring and correct

I didn’t try to “SEO hack” anything. I just made sure the fundamentals were solid:

- One clear H1 per page
- Sensible titles and meta descriptions
- Open Graph images where possible
- Clean internal linking (Work -> case study -> Services CTA)
- Canonicals if needed
- Sitemap and robots.txt (depending on your setup)

## The gotchas

A few things caught me out:

- **Date formats** - WordPress exports are inconsistent (ISO, DD/MM/YYYY, timestamps). Sorting “latest posts” sounds easy until it isn’t.
- **Images and paths** - WordPress media hides a lot of mess. In React, you need naming conventions and discipline.
- **The temptation to rebuild everything** - a migration can turn into a never-ending product build if you’re not careful.
- **Redirect edge cases** - query-string URLs and odd permalink variants need attention (some hosts are stricter than others).

## Why I’m glad I did it

Once it was live, the wins were immediate:

- The site feels like one cohesive system - not a collection of pages.
- Changes are fast and predictable.
- Styling is consistent across every layout.
- I can show work that matches how I actually build - especially interactive prototypes and modern learning examples.

And honestly, it’s more enjoyable to maintain. That matters.

## If you’re considering the same move

Here’s my take:

- Don’t start by trying to pick the perfect CMS. Ship the site first.
- Treat the migration like a product redesign, not a copy-paste exercise.
- Redirects are not optional.
- Keep the scope tight - migrate the best, archive the rest.

If you want, I can turn this into a proper checklist (inventory, redirect mapping, SEO checks, launch QA) so you can reuse it for future migrations.