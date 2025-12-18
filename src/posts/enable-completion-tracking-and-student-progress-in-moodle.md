---
title: "Enable completion tracking and student progress in Moodle"
date: 2018-01-02
lastmod: 2018-01-02
draft: true
categories:
  - "Export"
tags:
  - "Moodle"
  - "Completion tracking"
  - "Reports"
description: "How to enable completion tracking and view progress reporting in Moodle (modern workflow)."
slug: "enable-completion-tracking-and-student-progress-in-moodle"
---

This is a refreshed guide to the *modern* Moodle workflow for tracking progress. (Older screenshots and menu paths changed a lot over the years.)

## 1) Turn on completion tracking site-wide

1. **Site administration → Advanced features**
2. Enable:
   - **Enable completion tracking**
   - (Optional) **Conditional access** - useful for gating content

## 2) Configure completion at course level

1. Open the course
2. **Course settings**
3. Ensure **Completion tracking** is enabled (often “Yes” / “Show activity completion conditions” depending on version)

## 3) Set completion rules per activity

For each activity/resource:
1. Edit settings
2. Find **Activity completion**
3. Choose a rule, e.g.:
- “Student can manually mark the activity as completed”
- “Show activity as complete when conditions are met”
  - view
  - receive a grade
  - pass grade
  - submit

## 4) Use reports that matter


Look for:
- **Completion report**
- **Activity completion**
- **Logs / Live logs** (behaviour evidence)
- **Gradebook** (assessment outcomes)

## Recommended setup for a typical compliance course

If you want a simple, defensible setup that works for most compliance modules, use this pattern.

**Course-level**
- Completion tracking: **On**
- Completion criteria: **Require at least one assessment or acknowledgement** (not just “viewed”)

**Activity rules (default)**
- Intro/overview page: **Require view**
- Policy/expectations: **Require view** (Book/Page)
- Key checkpoint quiz: **Require grade** + set a **pass grade**
- Acknowledgement activity (if used): **Require submission** (Assignment) *or* manual completion (only if your policy accepts it)
- Certificate (optional): issue only when the **course completion** criteria are met

**Reporting you can hand to a manager**
- Completion report (who completed + when)
- Quiz results (score/pass)
- Logs (only for disputes)

This gives you participation visibility *and* at least one piece of evidence beyond “they opened the page”.

## Notes (so it doesn’t go sideways)

- Completion tracking is only as good as the rules you set.
- Decide what “complete” means *before* you build the course - it saves rework.
- If you need deeper evidence than Moodle provides, pair SCORM completion with xAPI statements.

_TODO: add screenshots for Moodle 5.x and a quick “recommended rules” table for common activity types._
