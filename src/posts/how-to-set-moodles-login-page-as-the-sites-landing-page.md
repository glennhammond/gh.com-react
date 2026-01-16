---
title: "How to set Moodle's login page as the site's landing page"
date: 2013-07-30
lastmod: 2013-07-30
status: draft
categories:
  - "Export"
  - "Moodle"
tags:
  - "Moodle"
  - "Login"
  - "Front page"
description: "Set Moodle to land on login (or a custom public page) depending on your audience and security needs."
slug: "how-to-set-moodles-login-page-as-the-sites-landing-page"
---

If your Moodle is mainly for enrolled users (not public browsing), it often makes sense to make the **login page** the first thing people see. It reduces confusion, avoids accidental access to empty course shells, and keeps the site feeling purposeful.

There are three common approaches, depending on whether your Moodle needs a public-facing front page.

## Option A - Link directly to the login page (fastest)
If you just want a clean entry point, you don’t need to change any Moodle settings.

- Use this URL:
  - `/login/index.php`

This is usually enough if your LMS lives on a subdomain like `lms.yoursite.com` and access is by invitation/enrolment.

**Good for:** small/internal sites, pilots, test instances, and most school staff PD LMS setups.

## Option B - Force everyone to log in (lock it down)
If you don’t want any anonymous browsing at all, force authentication.

1) Go to **Site administration → Security → Site security settings**
2) Enable **Force users to log in** (wording can vary slightly)

What this does:
- Unauthenticated users are redirected to log in
- Most pages are no longer visible to guests

**Good for:** staff-only sites, compliance training, or anything with sensitive content.

## Option C - Keep a public front page, but make it lean
If you have mixed audiences (e.g., prospective participants + enrolled users), keep a public front page - but keep it tight.

Recommended front page elements:
- A one-line description of what the site is
- Who it’s for
- A clear **Log in** call-to-action
- Minimal blocks (avoid clutter)

Then configure what shows for logged-in users vs guests.

### Moodle front page display settings (Moodle 5.1+)
Paths can vary by theme, but these are the places to check:

- **Site administration → Appearance → Front page**
  - **Front page items** (for logged-in users)
  - **Front page items when logged in** (naming may vary)
  - **Front page items when not logged in** (guests)

A clean default pattern:
- **Guests:** Site summary + Log in button (or no items)
- **Logged in:** Course overview / Dashboard link

## What I recommend (quick rule)
- If Moodle is *not* intended for public browsing: start with **Option A**, then add **Option B** if you want to fully lock it down.
- If you need a public presence: use **Option C** and keep it minimal.

## Quick troubleshooting

**I’m still seeing the old front page**
- Purge caches: **Site administration → Development → Purge caches**

**Guests can still browse courses**
- Check guest access settings and the “Force users to log in” setting (Option B)

**I want `/` to go to `/login/index.php`**
- The simplest way is to link people directly (Option A).
- If you must rewrite the root URL, do it at the web server / reverse proxy level (and test carefully).

_TODO: add screenshots for Moodle 5.1 Front page settings and an example “lean public front page” layout._
