# Directory Setup Rules

## Goal
Create a clean, scalable Next.js project structure for the Pegasus Web Design website.

This project includes:
- the homepage
- a dedicated case study page for Mac Auto Services
- section-by-section build workflow
- CSS Modules for every section/component

Important:
- Use **Next.js App Router**
- Use **JavaScript**
- Use **CSS Modules only**
- Do not add Tailwind
- Do not add TypeScript
- Do not add real section content yet unless explicitly asked
- Create a strong directory structure first
- Each section should have its own folder, component file, and `module.css` file
- For now, all section components should only contain a placeholder `<h1>` or minimal heading showing what the section is

---

## Tech Stack
- Framework: Next.js
- Router: App Router
- Language: JavaScript
- Styling: CSS Modules
- Animations: GSAP / ScrollTrigger later when requested
- Do not install animation libraries yet unless explicitly asked
- Keep setup clean and minimal

---

## Root Project Structure

Create this structure:

```bash
pegasus-web-design/
├── public/
│   ├── images/
│   │   ├── home/
│   │   │   ├── hero/
│   │   │   ├── logos/
│   │   │   ├── projects/
│   │   │   ├── team/
│   │   │   └── icons/
│   │   ├── case-studies/
│   │   │   └── mac-auto-services/
│   │   │       ├── hero/
│   │   │       ├── screens/
│   │   │       ├── before-after/
│   │   │       └── gallery/
│   │   └── shared/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── work/
│   │       └── mac-auto-services/
│   │           └── page.js
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.js
│   │   │   │   └── Navbar.module.css
│   │   │   └── Footer/
│   │   │       ├── Footer.js
│   │   │       └── Footer.module.css
│   │   │
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   │   ├── Button.js
│   │   │   │   └── Button.module.css
│   │   │   ├── SectionHeading/
│   │   │   │   ├── SectionHeading.js
│   │   │   │   └── SectionHeading.module.css
│   │   │   ├── Container/
│   │   │   │   ├── Container.js
│   │   │   │   └── Container.module.css
│   │   │   ├── SectionLabel/
│   │   │   │   ├── SectionLabel.js
│   │   │   │   └── SectionLabel.module.css
│   │   │   └── StatItem/
│   │   │       ├── StatItem.js
│   │   │       └── StatItem.module.css
│   │   │
│   │   ├── sections/
│   │   │   ├── home/
│   │   │   │   ├── Hero/
│   │   │   │   │   ├── Hero.js
│   │   │   │   │   └── Hero.module.css
│   │   │   │   ├── TrustBar/
│   │   │   │   │   ├── TrustBar.js
│   │   │   │   │   └── TrustBar.module.css
│   │   │   │   ├── Problem/
│   │   │   │   │   ├── Problem.js
│   │   │   │   │   └── Problem.module.css
│   │   │   │   ├── Services/
│   │   │   │   │   ├── Services.js
│   │   │   │   │   └── Services.module.css
│   │   │   │   ├── Process/
│   │   │   │   │   ├── Process.js
│   │   │   │   │   └── Process.module.css
│   │   │   │   ├── LogoStrip/
│   │   │   │   │   ├── LogoStrip.js
│   │   │   │   │   └── LogoStrip.module.css
│   │   │   │   ├── RecentWork/
│   │   │   │   │   ├── RecentWork.js
│   │   │   │   │   └── RecentWork.module.css
│   │   │   │   ├── About/
│   │   │   │   │   ├── About.js
│   │   │   │   │   └── About.module.css
│   │   │   │   ├── CTA/
│   │   │   │   │   ├── CTA.js
│   │   │   │   │   └── CTA.module.css
│   │   │   │   ├── FAQ/
│   │   │   │   │   ├── FAQ.js
│   │   │   │   │   └── FAQ.module.css
│   │   │   │   ├── Testimonials/
│   │   │   │   │   ├── Testimonials.js
│   │   │   │   │   └── Testimonials.module.css
│   │   │   │   └── Contact/
│   │   │   │       ├── Contact.js
│   │   │   │       └── Contact.module.css
│   │   │   │
│   │   │   └── caseStudies/
│   │   │       └── MacAutoServices/
│   │   │           ├── CaseStudyHero/
│   │   │           │   ├── CaseStudyHero.js
│   │   │           │   └── CaseStudyHero.module.css
│   │   │           ├── CaseStudyIntro/
│   │   │           │   ├── CaseStudyIntro.js
│   │   │           │   └── CaseStudyIntro.module.css
│   │   │           ├── CaseStudyProblem/
│   │   │           │   ├── CaseStudyProblem.js
│   │   │           │   └── CaseStudyProblem.module.css
│   │   │           ├── CaseStudyApproach/
│   │   │           │   ├── CaseStudyApproach.js
│   │   │           │   └── CaseStudyApproach.module.css
│   │   │           ├── CaseStudyDesignBuild/
│   │   │           │   ├── CaseStudyDesignBuild.js
│   │   │           │   └── CaseStudyDesignBuild.module.css
│   │   │           ├── CaseStudyKeyScreens/
│   │   │           │   ├── CaseStudyKeyScreens.js
│   │   │           │   └── CaseStudyKeyScreens.module.css
│   │   │           ├── CaseStudyPerformance/
│   │   │           │   ├── CaseStudyPerformance.js
│   │   │           │   └── CaseStudyPerformance.module.css
│   │   │           ├── CaseStudyPlatform/
│   │   │           │   ├── CaseStudyPlatform.js
│   │   │           │   └── CaseStudyPlatform.module.css
│   │   │           ├── CaseStudyImprovements/
│   │   │           │   ├── CaseStudyImprovements.js
│   │   │           │   └── CaseStudyImprovements.module.css
│   │   │           ├── CaseStudyOutcome/
│   │   │           │   ├── CaseStudyOutcome.js
│   │   │           │   └── CaseStudyOutcome.module.css
│   │   │           ├── CaseStudyTestimonial/
│   │   │           │   ├── CaseStudyTestimonial.js
│   │   │           │   └── CaseStudyTestimonial.module.css
│   │   │           └── CaseStudyCTA/
│   │   │               ├── CaseStudyCTA.js
│   │   │               └── CaseStudyCTA.module.css
│   │   │
│   │   └── shared/
│   │       ├── ProjectCard/
│   │       │   ├── ProjectCard.js
│   │       │   └── ProjectCard.module.css
│   │       ├── TestimonialCard/
│   │       │   ├── TestimonialCard.js
│   │       │   └── TestimonialCard.module.css
│   │       └── FAQItem/
│   │           ├── FAQItem.js
│   │           └── FAQItem.module.css
│   │
│   ├── data/
│   │   ├── homeData.js
│   │   ├── siteData.js
│   │   └── caseStudies/
│   │       └── macAutoServicesData.js
│   │
│   ├── styles/
│   │   └── variables.css
│   │
│   └── utils/
│       ├── constants.js
│       └── helpers.js
│
├── .gitignore
├── jsconfig.json
├── package.json
└── README.md