---
description: A clear and friendly guide to xAPI fundamentals.
title: Understanding xAPI for Learning Designers
date: 2025-03-04
category: xAPI
categoryColor: #00AEEF
tags: [xapi, analytics, lrs, learning-data]
---

# Understanding xAPI for Learning Designers
xAPI used to feel complicated — but once you understand the fundamentals, it becomes one of the most powerful tools you can use to improve learning experiences.

This article is a simple, friendly introduction for learning designers and developers who want to take their skills further.


## What xAPI actually is

Forget the jargon for a moment.

**xAPI is just a way of describing what a learner did in a structured, trackable format.**

It works anywhere:

- Storyline  
- H5P  
- Video  
- Custom React apps  
- A button in a website  

If the thing can run JavaScript, it can send xAPI.

---

## The core statement structure

Every statement is a small JSON object:

```json
{
  "actor": { "name": "Glenn", "mbox": "mailto:test@example.com" },
  "verb": { "id": "http://adlnet.gov/expapi/verbs/experienced" },
  "object": { "id": "https://example.com/course/slide-1" }
}