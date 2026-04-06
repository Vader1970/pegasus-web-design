# Responsive Rules

## Goal
The website must be fully responsive, readable, and visually correct across:
- desktop
- laptop
- tablet
- mobile

Responsiveness is not optional.
Every section must be designed and built mobile-first in a clean and scalable way.

---

## Core Responsive Principles

- Use mobile-first CSS
- Use fluid layouts
- Use flexbox and grid appropriately
- Avoid fixed widths on layout blocks
- Avoid hardcoded heights unless essential
- Let content define height wherever possible
- Keep readable spacing at every breakpoint
- Prioritise clarity and usability over exact desktop mirroring

---

## Breakpoint Guidance

Use these breakpoints as a guide:
- Mobile: default
- Tablet: `768px`
- Desktop: `1024px`
- Large desktop: `1280px`
- Wide desktop: `1440px`

Do not add excessive breakpoints.

---

## Container Rules

- Sections should use consistent horizontal padding
- Content should never sit too close to screen edges
- Use inner containers to control line length and layout width
- Do not allow text blocks to become too wide

Suggested container padding:
- Mobile: `24px`
- Tablet: `32px`
- Desktop: `64px`

---

## Typography Responsiveness

- Headings should scale fluidly using `clamp()` where useful
- Paragraph text should remain highly readable on small screens
- Avoid tiny text
- Avoid giant desktop type collapsing poorly on mobile
- Check line breaks on headings at tablet and mobile widths

---

## Layout Behavior

### On mobile
- Stacked layouts are preferred
- Reduce columns to single-column where appropriate
- Preserve strong vertical rhythm
- Keep CTAs visible and usable
- Avoid cramped cards

### On tablet
- Use 2-column layouts where natural
- Maintain breathing room

### On desktop
- Use stronger side-by-side compositions
- Balance visual and text columns
- Keep layout intentional and clean

---

## Image Rules

- Images should scale responsively
- Avoid distortion
- Avoid fixed height crops unless deliberately designed
- Maintain clean aspect ratios
- Use object-fit appropriately where needed

---

## Section-Specific Guidance

### Hero
- Text and image may stack on smaller screens
- Keep strong headline readability
- Keep CTA accessible without excessive scrolling
- Do not let image dominate the viewport on mobile

### Trust bar
- Allow stat items to stack or wrap cleanly
- Keep spacing even
- Avoid tiny, cramped text

### Services / cards
- Collapse gracefully
- Keep card padding generous
- Ensure card titles and body text remain readable

### Recent work
- Featured project may stack on smaller screens
- Secondary project cards should form clean rows or columns
- Maintain visual clarity on touch devices

### About
- Team image and text should stack well
- Maintain strong content width control

### FAQ
- Accordion items should stay easy to tap
- Do not reduce tappable area too far

### Contact / CTA
- Forms must remain easy to complete on mobile
- Inputs should be full width where appropriate
- Buttons should remain large enough for touch

### Footer
- Footer columns should stack neatly
- Keep spacing comfortable
- Avoid compressed multi-column mobile layouts

---

## Things to Avoid

Do not:
- use fixed pixel widths for large layout blocks
- force desktop layouts onto tablet/mobile
- rely on overflow tricks
- use magic-number spacing to fix layout problems
- create horizontal scroll
- use tiny tap targets
- allow headings to break awkwardly if avoidable

---

## Final Standard

Responsive design should feel:
- intentional
- clean
- readable
- premium
- not like a compromised desktop layout

The mobile experience must feel designed, not reduced.