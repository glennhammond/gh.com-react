---
title: "How to change the default words and phrases in Moodle"
date: 2013-07-31
lastmod: 2013-07-31
draft: true
categories:
  - "Export"
  - "Moodle"
tags:
  - "Moodle"
  - "Language customisation"
description: "Rename Moodle terms (e.g., 'Course' \u2192 'Module') using language customisation - without hacking core files."
slug: "how-to-change-the-default-words-and-phrases-in-moodle"
---

If you want Moodle to match your organisation’s terminology (e.g., “Course” → “Module”), use **Language customisation** rather than editing core files.

Moodle supports this properly via **Language customisation** - not by editing core files.

## Quick start: 5 changes that make Moodle feel less “university”
If you only change a handful of strings, start here.

- **My courses** → My learning
- **Courses** → Learning modules (or Catalogue)
- **Student** → Learner
- **Teacher** → Facilitator
- **Enrolment** → Access (or Registration)

Do these first, purge caches, and check the UI across admin/teacher/student roles.

## The usual pathway
1) **Site administration → Language → Language customisation**  
2) Choose your language pack (e.g., English - Australia)  
3) Open the customisation tool  
4) Search for the string you want (e.g., “course”)  
5) Override only the specific strings you need  
6) Save and update the language pack cache

## Tips
- Keep a log of every change (string id + new wording)
- Be cautious with broad terms like “course” - they appear in many contexts
- Test in multiple roles (admin, teacher, student)

_TODO: add example string overrides that work well for schools and compliance training._
