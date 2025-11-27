---
title: "Building the ISQ eLearning Design System"
description: "A look at the design foundations behind the ISQ eLearning ecosystem."
date: "2025-02-10"
---

# Building the ISQ eLearning Design System

For years I was rebuilding the same UI components, layouts, and interactions every time we started a new course. Different colours. Different text styles. Slightly different grids. Everything worked, but nothing was consistent — and time was getting wasted.

So I decided to fix it.

This post breaks down how I approached building a unified design system for ISQ’s eLearning, why it matters, and what I’ve learned.

---

## Why a design system for eLearning?

Unlike product design, eLearning doesn't typically get the luxury of a full UX pipeline or a dedicated design team. Consistency is often an afterthought.

But a design system helps with:

### ✔ **Speed**
Reusable layouts, components, and visual rules reduce the time from idea → working prototype.

### ✔ **Quality**
Every slide, interaction, and asset looks like it belongs to the same ecosystem.

### ✔ **Accessibility**
Consistent patterns = predictable navigation and clearer content.

### ✔ **Scalability**
When building multiple courses for multiple cohorts, a shared system keeps everything aligned.

---

## The foundations

I built the system around a few non-negotiables:

### **1. Clear typography**
- **Headings:** Avant Garde Gothic  
- **Body:** Open Sans  
- Hierarchy defined for desktop + mobile  
- Line-length and rhythm tuned for readability  

### **2. A flexible grid**
Storyline isn’t responsive, but the design can be.  
I use:

- A 12-column conceptual grid  
- Defined safe zones  
- Spacing tokens based off a 4px baseline  

### **3. Colour tokens**
ISQ colours expressed as semantic roles:

| Token | Colour | Purpose |
|-------|--------|---------|
| `--brand-primary` | ISQ Green | Buttons, highlights |
| `--brand-warning` | Orange | Alerts, branching scenarios |
| `--brand-accent` | Navy | Headings, anchors |

### **4. Component library**
Reusable elements include:

- **Section headers**  
- **Callout boxes**  
- **Interactive hotspots**  
- **Progress indicators**  
- **xAPI-ready buttons**  

Each one built in both Figma and Storyline.

---

## xAPI baked in

Most design systems focus purely on visuals. Mine includes **data structure**:

- Standard verbs (`experienced`, `completed`, `answered`, `selected`)  
- Activity IDs mapped to the design system  
- Naming conventions  
- Variable-driven slide tracking  

It’s a design system + analytics system in one.

---

## Before & after

The difference has been huge:

| Before | After |
|--------|--------|
| Every project looked slightly different | Everything lives in one visual language |
| Inconsistent branding | Clean, flexible, predictable |
| Rebuilding patterns every time | Drag-and-drop components |
| No xAPI structure | Built-in tracking & naming rules |

---

## What’s next?

A few things I’m planning:

- Publishing the system as its own microsite  
- Versioning (v1 → v1.1 → v2)  
- React equivalents of the same components  
- A Storyline → React migration path  

This design system is becoming the backbone of all new ISQ learning products — and it’s only getting better from here.