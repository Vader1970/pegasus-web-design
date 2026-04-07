"use client";

import { useRef } from 'react';
import Link from 'next/link';
import styles from './CTA.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function CTA() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".gsap-cta-text", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className={styles.section} id="cta">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={`gsap-cta-text ${styles.heading}`}>Ready to start?</h2>
          <p className={`gsap-cta-text ${styles.paragraph}`}>
            We’ll review your situation and send a written proposal within 48 hours - at no cost and with no obligation to proceed.
          </p>
          <div className="gsap-cta-text">
            <Link href="#contact" className={styles.link}>
              Get your free proposal <span className={styles.arrow}>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
