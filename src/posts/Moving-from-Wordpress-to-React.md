---
title: Moving from WordPress to React
slug: moving-from-wordpress-to-react
date: 2025-12-21
category: Building in public
summary: A practical write-up of my migration from a WordPress portfolio to a React build - including content migration, SEO, redirects, and the little details that matter.
image: /images/blog/blog-Moving-from-WordPress-to-React.jpg
---

I’ve run my personal site on WordPress for years. It did the job - I could publish, tweak pages quickly, and lean on plugins when I needed extra functionality.

But as my work shifted (more productised services, more interactive examples, more “this is how I build”), WordPress started to feel like I was constantly negotiating with a theme, a page builder, and a plugin stack - instead of designing the experience properly.

So I moved my portfolio from WordPress to a React site.

This post is the honest version - what pushed me to do it, what I kept, what broke, and the checklist I wish I’d had at the start.

## Why I left WordPress (even though it works)

WordPress is brilliant at what it’s built for: publishing and content management. My issue wasn’t “WordPress is bad” - it was that my site needed to behave more like a designed product than a templated blog.

My main reasons:

- **Design control**: I wanted a consistent design system across pages, not “close enough” sections patched together with builder settings.
- **Performance and bloat**: I was tired of chasing down plugin overhead, unused CSS/JS, and theme quirks.
- **Reusable components**: I wanted the site to be built from intentional UI blocks - hero, cards, grids, case study sections - that I could reuse and refine.
- **Development workflow**: Git-based versioning, branching, local dev, predictable deploys. No more “what changed?” mysteries.

## What I moved to (high level)

My current setup looks like this:

- **React** for the UI
- **Vite** for fast local development and builds
- **React Router** for routing
- **Tailwind** (plus my own CSS variables/tokens) for styling
- **Vercel** for deployment
- **Markdown (or JS data)** for posts and project content (for now)

That last point matters: I didn’t replace WordPress with a whole new CMS on day one. I started simple to get the site shipped, then improved the content workflow afterwards.

## The migration plan that actually worked

### Freeze the old site and inventory everything
Before touching code, I listed:

- Core pages (Home, Services, Work, About, Contact)
- Portfolio items / case studies
- Blog posts worth keeping (not everything deserves to be migrated)
- Any “hidden” URLs that still get traffic (old categories, tag pages, random WordPress slugs)

This becomes your redirect list later.

### Design the new structure first
I treated the React build like a product:

- A consistent hero pattern (spacing, breadcrumbs, heading rhythm)
- Standard card styles (work cards, post cards, service cards)
- Typography rules (scale, line length, body rhythm)
- Spacing system (section padding, grid gaps)

This is the part that makes the site feel “designed”, not just “rebuilt”.

### Migrate content in the simplest way possible
I avoided over-engineering early.

- Projects became a `projects` data file.
- Posts became a `posts` list (sorted by date).
- Images went into a clean `public/images/...` structure.

Later, I can switch to a CMS (or MDX) if I want. But the first goal was: ship a clean, fast, consistent site.

### Redirects: the unsexy part that matters most
If you’ve been on WordPress for a while, you’ve got legacy URLs floating around in Google, backlinks, and people’s bookmarks.

The migration isn’t “done” until redirects are handled.

My rules:

- Redirect old WordPress slugs to the closest equivalent new page.
- If a page no longer exists and there’s no equivalent, redirect to the most relevant hub (Work, Blog, Services) - not the homepage.
- Keep the redirect list in version control so it doesn’t become tribal knowledge.

### SEO basics: keep it boring and correct
I didn’t try to “SEO hack” anything. I just made sure the fundamentals were solid:

- One clear H1 per page
- Sensible titles and meta descriptions
- Open Graph images where possible
- Clean internal linking (Work -> case study -> Services CTA)
- Correct canonical URLs if needed
- A sitemap and robots.txt (depending on setup)

## What surprised me (the gotchas)

A few things caught me out:

- **Date formats**: WordPress exports can be inconsistent (ISO, DD/MM/YYYY, timestamps). Sorting “latest posts” sounds trivial until it isn’t.
- **Images and paths**: what used to be handled by WP media now needs naming conventions and discipline.
- **The temptation to rebuild everything**: it’s easy to turn a site migration into a never-ending product build. I had to keep shipping momentum.
- **Redirect edge cases**: WordPress query-string URLs and odd permalink variants need attention (some hosts are stricter than others).

## The wins (why I’m glad I did it)

Once it was live, the benefits were immediate:

- The site feels like a cohesive system - not a collection of pages.
- Changes are fast and predictable.
- Styling is consistent across every layout.
- I can build pages that match my actual skill set - especially for interactive work and modern learning prototypes.

And honestly - it’s more enjoyable. That matters when you’re maintaining your own site.

## If you’re considering the same move

Here’s the simplest advice I can give:

- Don’t start with the perfect CMS decision. Start with shipping the site.
- Treat the migration like a product redesign, not a content copy-paste exercise.
- Redirects are not optional.
- Keep your content scope tight - migrate the best, archive the rest.

If you want, I can also share a practical checklist template (inventory, redirect mapping, SEO checks, launch QA) that you can reuse for future migrations.