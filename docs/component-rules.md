# Component Rules

## Goal
Keep the component system clean, reusable where appropriate, and easy to maintain.

This project should not become overengineered.
Only abstract components when there is a clear reason.

---

## Folder Rules

- Every section gets its own folder
- Every section gets:
  - one component file
  - one matching CSS Module
- Shared reusable patterns belong in shared or ui folders
- Layout components belong in layout folders

---

## Naming Rules

Use PascalCase for:
- component folders
- component filenames

Examples:
- `Hero.js`
- `Hero.module.css`
- `CaseStudyHero.js`
- `CaseStudyHero.module.css`

Do not mix naming styles.

---

## Reusable UI Components

Use `components/ui` for small reusable interface pieces such as:
- Button
- Container
- SectionHeading
- SectionLabel
- StatItem

These should remain flexible but simple.

---

## Shared Components

Use `components/shared` for repeated content structures such as:
- ProjectCard
- FAQItem
- TestimonialCard

Only create these when there is actual repeat usage.

Do not abstract too early.

---

## Section Component Rules

Section components should:
- remain focused
- own their layout
- own their styling
- not depend on global section styles
- not become giant files

If a section becomes too large, split internal parts into local subcomponents only when necessary.

---

## Page Composition Rules

Pages should compose sections in order.
Pages should not contain raw section markup directly.

Example:
- homepage page file imports homepage sections
- case study page file imports case study sections

---

## Data Rules

If content becomes repeated or easier to manage as data:
- place it in `src/data`
- keep data clean and readable
- do not overcomplicate with CMS-like abstractions

Use data files for:
- nav items
- FAQ items
- project cards
- testimonial data
- case study data

Only do this when it improves clarity.

---

## Import Rules

- keep imports clean
- do not import unused files
- do not create deep confusing import chains
- prefer direct, readable imports

---

## Styling Rules

- each component should own its own module CSS
- shared components own shared CSS
- global styles only for resets, variables, and true site-wide defaults
- do not leak styling across sections

---

## Final Standard

Components should feel:
- deliberate
- readable
- scalable
- easy to edit
- not overbuilt