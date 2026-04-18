"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./OurServices.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const services = [
  {
    title: "Website Redesigns",
    body:
      "We rebuild outdated or underperforming websites so they look more professional, load faster, and turn more visitors into real enquiries.",
  },
  {
    title: "Business Websites",
    body:
      "Custom-built websites for service businesses that need clear messaging, strong trust signals, and a straightforward path for visitors to get in touch.",
  },
  {
    title: "Landing Pages",
    body:
      "Single-focus pages designed for ads, campaigns, or specific services, built to guide visitors toward action and turn clicks into qualified leads.",
  },
  {
    title: "Platform Guidance",
    body:
      "Straightforward advice on the right platform for your business, helping you choose a setup that fits your goals, budget, and long-term growth.",
  },
];

export default function OurServices() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray(".gsap-our-card");
        /* First card stays fully visible; scroll-scrub fade only for cards 2–4 */
        if (cards[0]) {
          gsap.set(cards[0], { opacity: 1, y: 0 });
        }

        cards.slice(1).forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                end: () =>
                  window.matchMedia("(max-width: 900px)").matches
                    ? "+=200"
                    : "+=280",
                scrub: 0.9,
                invalidateOnRefresh: true,
              },
            }
          );
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
      id="our-services"
      aria-labelledby="our-services-heading"
    >
      <div className={styles.inner}>
        <div className={styles.container}>
          <div className={styles.contentColumn}>
            <span className={styles.label}>OUR SERVICES</span>
            <h2 id="our-services-heading" className={styles.heading}>
              How we can help
            </h2>
            <p className={styles.paragraph}>
              We build websites and landing pages for service businesses, with a
              focus on trust, performance, and enquiries—so visitors understand
              what you offer and feel confident getting in touch.
            </p>
            <div>
              <Link href="#work" className={styles.ctaLink}>
                See our work →
              </Link>
            </div>
          </div>

          <div className={styles.cardsColumn}>
            <div className={styles.cardStack}>
              {services.map((service) => (
                <article
                  key={service.title}
                  className={`gsap-our-card ${styles.card}`}
                >
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardBody}>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
