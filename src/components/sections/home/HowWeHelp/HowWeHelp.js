"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./HowWeHelp.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/* -----------------------------------------------------------
   Inline SVG placeholders
   Minimal, consistent stroke icons — easy to swap later.
------------------------------------------------------------ */
const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

const RedesignIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 9h18" />
    <path d="M8 14l2 2 4-4" />
  </svg>
);

const BusinessIcon = () => (
  <svg {...iconProps}>
    <path d="M3 20V10l9-6 9 6v10" />
    <path d="M9 20v-6h6v6" />
  </svg>
);

const LandingIcon = () => (
  <svg {...iconProps}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8" />
    <path d="M8 12h5" />
    <path d="M8 17h4" />
  </svg>
);

const SeoIcon = () => (
  <svg {...iconProps}>
    <circle cx="11" cy="11" r="6" />
    <path d="M20 20l-3.5-3.5" />
    <path d="M11 8v6" />
    <path d="M8 11h6" />
  </svg>
);

const PlatformIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
    <path d="M3 12l9 4.5 9-4.5" />
    <path d="M3 16.5l9 4.5 9-4.5" />
  </svg>
);

/* -----------------------------------------------------------
   Service data
   `placement` drives the bento row sizing:
     "top"    — spans 3 of 6 cols (2 cards per row)
     "bottom" — spans 2 of 6 cols (3 cards per row)
------------------------------------------------------------ */
const services = [
  {
    key: "redesigns",
    title: "Website Redesigns",
    body:
      "We rebuild outdated or underperforming websites so they look more professional, load faster, and turn more visitors into real enquiries.",
    Icon: RedesignIcon,
    placement: "top",
  },
  {
    key: "business",
    title: "Business Websites",
    body:
      "Custom-built websites for service businesses that need clear messaging, strong trust signals, and a straightforward path for visitors to get in touch.",
    Icon: BusinessIcon,
    placement: "top",
  },
  {
    key: "landing",
    title: "Landing Pages",
    body:
      "Single-focus pages designed for ads, campaigns, or specific services, built to guide visitors toward action and turn clicks into qualified leads.",
    Icon: LandingIcon,
    placement: "bottom",
  },
  {
    key: "seo",
    title: "SEO Optimisation",
    body:
      "We improve your website's structure, content, and search visibility so more of the right people can find your business online. From on-page SEO to technical improvements, we focus on practical changes that support long-term growth.",
    Icon: SeoIcon,
    placement: "bottom",
  },
  {
    key: "platform",
    title: "Platform Guidance",
    body:
      "Straightforward advice on the right platform for your business, helping you choose a setup that fits your goals, budget, and long-term growth.",
    Icon: PlatformIcon,
    placement: "bottom",
  },
];

export default function HowWeHelp() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".gsap-hwh-text", {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 82%",
          },
        });

        gsap.from(".gsap-hwh-card", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 72%",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className={styles.section}
      id="how-we-help"
      aria-labelledby="how-we-help-heading"
    >
      <div className={styles.container}>
        {/* Top intro — single-column header, mirrors the Process section */}
        <header className={styles.header}>
          <span className={`gsap-hwh-text ${styles.label}`}>HOW WE HELP</span>
          <h2
            id="how-we-help-heading"
            className={`gsap-hwh-text ${styles.heading}`}
          >
            What do you need help with?
          </h2>
          <p className={`gsap-hwh-text ${styles.paragraph}`}>
            No templates. Everything is built around what your business actually
            needs.
          </p>
          <p className={`gsap-hwh-text ${styles.paragraph}`}>
            Whether you need more enquiries, a clearer message, or a complete
            rebuild, we focus on what will actually move your business forward.
          </p>
          <div className={`gsap-hwh-text ${styles.ctaRow}`}>
            <Link href="#work" className={styles.ctaLink}>
              See some of our work
              <ArrowRight
                size={20}
                className={styles.arrow}
                aria-hidden="true"
              />
            </Link>
          </div>
        </header>

        {/* Bento grid — 2 cards on top row, 3 cards on bottom row */}
        <div className={styles.bento} role="list">
          {services.map(({ key, title, body, Icon, placement }) => (
            <article
              key={key}
              role="listitem"
              className={`gsap-hwh-card ${styles.card} ${styles[`card_${placement}`]}`}
            >
              <span className={styles.cardGlow} aria-hidden="true" />
              <div className={styles.cardIcon}>
                <Icon />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
