# Build Rules

## Goal
Build a clean, scalable, maintainable Next.js project.

The code should feel:
- structured
- readable
- intentional
- production-ready

---

## Core Rules

- Use Next.js App Router
- Use JavaScript (no TypeScript)
- Use CSS Modules only
- Build section-by-section
- Do not overbuild

---

## Section Workflow

Each section must:
- live in its own folder
- have its own component file
- have its own `.module.css`

Do not:
- combine multiple sections
- reuse styles across sections
- create global section styles

---

## Scaffold Phase Rules

During initial scaffold:

- create all folders and files
- create all components
- create all CSS modules
- use placeholder `<h1>` only
- do not add real content
- do not add layout complexity

---

## Component Rules

- one component per section
- one CSS module per component
- reusable UI goes in `/ui`
- shared patterns go in `/shared`

Do not abstract early.

---

## CSS Rules

- no inline styles
- no global section styles
- no Tailwind
- no CSS-in-JS

Each component owns its styling.

---

## Markup Rules

- use semantic HTML
- keep DOM clean
- avoid unnecessary wrappers
- avoid deep nesting

---

## Content Rules

- do not invent content
- do not use lorem ipsum
- wait for real content instructions

---

## Refactoring Rules

Do not:
- rename components unnecessarily
- move files randomly
- restructure folders mid-build

---

## Performance Rules

- keep components lightweight
- avoid unnecessary imports
- avoid heavy nesting

---

## Animation Rules

- do not add animations yet
- follow `animation-guide.md` when needed
- avoid random motion

---

## Navigation Rules

- homepage follows approved section order
- case study page follows approved structure
- do not add extra pages

---

## Quality Standard

Every section should feel:
- clean
- consistent
- easy to edit

The code should look like professional frontend work — not generated clutter.