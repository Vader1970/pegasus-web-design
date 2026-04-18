"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./ServicePage.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * Reusable service-page template.
 *
 * Renders the same layout for every `/services/[slug]` page — only the
 * content object changes. Visuals, spacing, and typography intentionally
 * match the homepage and case study design system.
 */
export default function ServicePage({ service }) {
  const page = useRef(null);

  useGSAP(
    () => {
      const sections = page.current.querySelectorAll("[data-animate]");
      sections.forEach((section) => {
        const els = section.querySelectorAll(".gsap-sp");
        if (!els.length) return;
        gsap.from(els, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });
    },
    { scope: page }
  );

  const {
    eyebrow,
    title,
    subtitle,
    heroParagraph,
    hero,
    overview,
    helpsWith,
    included,
    outcomes,
    featured,
    cta,
  } = service;

  return (
    <div ref={page} className={styles.page}>
      {/* ════════════════════════════════════════════
          1 — HERO
      ════════════════════════════════════════════ */}
      <section className={styles.heroSection} data-animate>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={`gsap-sp ${styles.label}`}>{eyebrow}</span>
            <h1 className={`gsap-sp ${styles.heroHeading}`}>{title}</h1>
            <p className={`gsap-sp ${styles.heroSub}`}>{subtitle}</p>
            <p className={`gsap-sp ${styles.heroPara}`}>{heroParagraph}</p>
            <div className={`gsap-sp ${styles.heroActions}`}>
              <Link href="/#contact" className={styles.btnPrimary}>
                Get your free consultation
                <ArrowRight size={18} className={styles.arrow} aria-hidden="true" />
              </Link>
              <Link href="/#how-we-help" className={styles.btnSecondary}>
                All services
                <ArrowRight size={16} className={styles.arrow} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className={`gsap-sp ${styles.heroImageWrapper}`}>
            <Image
              src={hero.image}
              alt={hero.alt}
              fill
              className={styles.heroImage}
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2 — OVERVIEW
      ════════════════════════════════════════════ */}
      <section className={styles.sectionAlt} data-animate>
        <div className={styles.narrowContainer}>
          <span className={`gsap-sp ${styles.label}`}>{overview.label}</span>
          <h2 className={`gsap-sp ${styles.sectionHeading}`}>{overview.heading}</h2>
          <p className={`gsap-sp ${styles.overviewBody}`}>{overview.body}</p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3 — WHAT IT HELPS WITH
      ════════════════════════════════════════════ */}
      <section className={styles.sectionDefault} data-animate>
        <div className={styles.container}>
          <div className={styles.blockHeader}>
            <span className={`gsap-sp ${styles.label}`}>{helpsWith.label}</span>
            <h2 className={`gsap-sp ${styles.sectionHeading}`}>{helpsWith.heading}</h2>
          </div>
          <ul className={`gsap-sp ${styles.bulletList}`}>
            {helpsWith.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4 — WHAT'S INCLUDED
      ════════════════════════════════════════════ */}
      <section className={styles.sectionAlt} data-animate>
        <div className={styles.container}>
          <div className={styles.blockHeader}>
            <span className={`gsap-sp ${styles.label}`}>{included.label}</span>
            <h2 className={`gsap-sp ${styles.sectionHeading}`}>{included.heading}</h2>
          </div>
          <ul className={`gsap-sp ${styles.checkGrid}`}>
            {included.bullets.map((item) => (
              <li key={item} className={styles.checkItem}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span className={styles.checkText}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5 — OUTCOMES / WHY IT MATTERS
      ════════════════════════════════════════════ */}
      <section className={styles.sectionDefault} data-animate>
        <div className={styles.container}>
          <div className={styles.blockHeader}>
            <span className={`gsap-sp ${styles.label}`}>{outcomes.label}</span>
            <h2 className={`gsap-sp ${styles.sectionHeading}`}>{outcomes.heading}</h2>
          </div>
          <ul className={`gsap-sp ${styles.bulletList}`}>
            {outcomes.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6 — FEATURED / RELATED WORK
      ════════════════════════════════════════════ */}
      {featured ? (
        <section className={styles.sectionAlt} data-animate>
          <div className={styles.featuredGrid}>
            <div className={`gsap-sp ${styles.featuredImageWrapper}`}>
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                className={styles.featuredImage}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <div className={styles.featuredText}>
              <span className={`gsap-sp ${styles.label}`}>{featured.label}</span>
              <h2 className={`gsap-sp ${styles.sectionHeading}`}>{featured.heading}</h2>
              <p className={`gsap-sp ${styles.bodyText}`}>{featured.body}</p>
              {featured.caption ? (
                <p className={`gsap-sp ${styles.featuredCaption}`}>
                  <Quote size={16} className={styles.captionIcon} aria-hidden="true" />
                  {featured.caption}
                </p>
              ) : null}
              {featured.href ? (
                <Link href={featured.href} className={`gsap-sp ${styles.featuredLink}`}>
                  {featured.linkLabel || "See more"}
                  <ArrowRight size={18} className={styles.arrow} aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* ════════════════════════════════════════════
          7 — FINAL CTA (slate band)
      ════════════════════════════════════════════ */}
      <section className={styles.ctaSection} data-animate>
        <div className={styles.ctaContent}>
          <h2 className={`gsap-sp ${styles.ctaHeading}`}>{cta.heading}</h2>
          <p className={`gsap-sp ${styles.ctaPara}`}>{cta.body}</p>
          <Link href="/#contact" className={`gsap-sp ${styles.ctaBtn}`}>
            Get your free consultation
            <ArrowRight size={18} className={styles.arrow} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
