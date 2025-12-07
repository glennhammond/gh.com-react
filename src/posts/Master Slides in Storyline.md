---
title: Using Master Slides in Storyline
summary: Storyline master slides drive consistency, scalability, and brand control across every course you build.
date: 2025-11-30
category: Storyline
categoryColor: #9C27B0
tags: [storyline, authoring-tools, production, development]
image: /images/img-placeholder-1200.jpg
---

## Why I Always Start with Master Slides… and Then Abandon Them

I’ve been using Articulate tools since the Presenter and Quizmaker days, long before Storyline even existed.

And for as long as I can remember, I’ve always started each new project by building my master slides — only to end up ignoring them and designing directly on blank slides instead.

If that sounds familiar, you’re not alone.

The truth is, Storyline’s master slide system can feel more like a formality than a foundation — *until you structure it like a design system*.

This guide is about doing exactly that: treating your Storyline master slides as the central design system that drives consistency, scalability, and brand control across every course you build.

---

## The Purpose of a Master System

Master slides aren’t just for saving time — they’re for building courses that scale.

When done right, they deliver:

- **Consistency** – typography, colours, and spacing that never drift.
- **Scalability** – one update, many courses.
- **Resilience** – when the brand or accessibility standards change, you fix it once.

Think of it as your **Storyline design system**: the Figma components of your eLearning world.

---

## The Hierarchy: Masters and Layouts

Storyline uses two structural layers:

1. **Slide Masters** – global formatting, persistent elements, and backgrounds.
2. **Layouts** – templates for specific screen types (e.g. content, scenario, quiz).

### Recommended Architecture

| Level | Purpose | Example Names |
| --- | --- | --- |
| Master A | Core course design | `Main_Master` |
| Layouts | Course layouts | `01_Title`, `02_Content_Left_Image`, `03_Checkpoint`, `04_Feedback` |
| Master B | Scenario or branching sections | `Scenario_Master` |
| Layouts | Scene types | `S1_Intro`, `S2_Choice`, `S3_Outcome` |
| Master C | Assessment design | `Quiz_Master` |
| Layouts | Question templates | `Q1_MC`, `Q2_DragDrop`, `Q3_Results` |

💡 **Tip:** Prefix layout names with numbers to control order and keep the dropdown tidy.

---

## Design System Thinking

### Typography

Stick to two defined text styles — heading and body.

| Style | Font | Use |
| --- | --- | --- |
| Heading | Century Gothic / Avant Garde Gothic Pro | Slide titles and section headers |
| Body | Open Sans / Calibri | Main content and labels |

Keep your line spacing tight and predictable — 100–110% for headings, 120–130% for body.

### Colour Tokens

| Token | Example | Use |
| --- | --- | --- |
| Accent 1 | ISQ Green `#38B449` | Primary |
| Accent 2 | ISQ Orange `#F28B00` | Secondary |
| Accent 3 | Neutral `#F5F4F0` | Backgrounds |
| Accent 4 | Dark `#1A1A1A` | Text and contrast |
| Accent 5 | Highlight `#E6F0F5` | Hover and feedback |

Create a **Design Tokens** layout in your master showing all colour swatches and text samples.

It’s a quick internal reference and keeps brand accuracy intact.

---

## Building a Master System — Step by Step

### 1. Start from a Blank Theme

Never build on an Articulate preset — it’s packed with hidden elements.

Start clean.

### 2. Create a New Master

Name it clearly (`Main_Master`, `Scenario_Master`, `Quiz_Master`).

### 3. Add Persistent Elements

Logos, navigation backgrounds, progress bars, and footer elements all belong here.

### 4. Build Layout Variants

Duplicate the base layout and modify for your main slide types:

- Title
- Content left image
- Content right image
- Scenario choice
- Feedback
- Knowledge check

### 5. Lock and Name Everything

Lock non-editable elements and name everything logically (`txt_Title`, `btn_Next`, `bg_LeftPanel`).

### 6. Add Optional Layers

Include persistent layers for:

- Closed captions
- Audio control
- Brand overlays
- Progress tracking

---

## Grids and Safe Zones

- **Resolution:** 1920 × 1080 (16:9)
- **Outer margin:** 60px
- **Inner padding:** 24px
- **Baseline grid:** 40px

💡 **Create a “Safe Zone” overlay** (a transparent shape) to ensure on-screen text and visuals don’t clash with navigation or logos.

---

## Master-Level Triggers and Variables

Here’s where your template starts feeling *smart*.

| Trigger | Example | Purpose |
| --- | --- | --- |
| `Timeline starts → Change state of btn_Next to Normal` | Resets nav buttons | Keeps navigation consistent |
| `When variable Section changes → Set text of txt_SectionTitle` | Updates section name dynamically | Reduces manual edits |
| `When user clicks btn_Captions → Toggle captions layer` | Accessibility | Reusable captions layer |

Add global variables for:

- `var_Brand` (e.g. ISQ, CYA, GH)
- `var_Section`
- `var_Progress`

---

## Feedback and Layers

Use your master for **feedback design**, not just colour consistency.

Create layers named:

- `Correct`
- `Incorrect`
- `Try Again`

Each layer can include consistent visuals, transitions, and sound cues.

They’ll be inherited by all quiz and knowledge check slides automatically.

---
