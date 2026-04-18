"use client";

import { useRef } from 'react';
import Link from 'next/link';
import styles from './Problem.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/* -----------------------------------------------------------
   Inline SVG icons — identical visual system to HowWeHelp
   (22×22, viewBox 0 0 24 24, 1.6 stroke, round line caps/joins).
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

const OutdatedIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 20h8" />
    <path d="M12 17v3" />
  </svg>
);

const SlowIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const NavigateIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5z" />
  </svg>
);

const TrustIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z" />
  </svg>
);

const cards = [
  {
    Icon: OutdatedIcon,
    title: "Looks outdated",
    text: "Visitors judge your business in seconds. If your site looks unprofessional, they assume the business is too.",
  },
  {
    Icon: SlowIcon,
    title: "Loads too slowly",
    text: "Slow websites lose impatient visitors before they even see what you do.",
  },
  {
    Icon: NavigateIcon,
    title: "Hard to navigate",
    text: "If people can't quickly find what they need, they leave instead of getting in touch.",
  },
  {
    Icon: TrustIcon,
    title: "Doesn't build trust",
    text: "No reviews, no proof, no clear next step, so people choose someone else.",
  },
];

export default function Problem() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    tl.from(".gsap-problem-text", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
      .from(".gsap-problem-card", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className={styles.section}>
      <div className={styles.container}>

        {/* Left Content */}
        <div className={styles.contentColumn}>
          <span className={`gsap-problem-text ${styles.label}`}>THE REAL PROBLEM</span>
          <h2 className={`gsap-problem-text ${styles.heading}`}>
            Why your website isn't bringing in work
          </h2>
          <p className={`gsap-problem-text ${styles.paragraph}`}>
            Most businesses aren't losing work because of their service, they're losing it because their website fails to create trust in those first few seconds.
          </p>
          <div className="gsap-problem-text">
            <Link href="#services" className={styles.ctaLink}>
              See how we fix it <ArrowRight size={20} className={styles.arrow} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Right Cards Grid */}
        <div className={styles.gridColumn}>
          <div className={styles.cardsGrid}>
            {cards.map(({ Icon, title, text }) => (
              <article key={title} className={`gsap-problem-card ${styles.card}`}>
                <div className={styles.iconBadge}>
                  <Icon />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{text}</p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
