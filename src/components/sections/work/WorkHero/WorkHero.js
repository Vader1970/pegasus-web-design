"use client";

import { useRef } from 'react';
import Link from 'next/link';
import styles from './WorkHero.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function WorkHero() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".gsap-work-hero", {
      opacity: 0,
      y: 20,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      delay: 0.1,
    });
  }, { scope: container });

  return (
    <section ref={container} className={styles.section}>
      <div className={styles.container}>
        <span className={`gsap-work-hero ${styles.eyebrow}`}>OUR WORK</span>
        <h1 className={`gsap-work-hero ${styles.heading}`}>
          Websites built to bring in work.
        </h1>
        <p className={`gsap-work-hero ${styles.paragraph}`}>
          A selection of websites and landing pages we&apos;ve designed for service-based businesses. Built to look sharp, load fast, and help turn visitors into enquiries.
        </p>
        <Link href="/#contact" className={`gsap-work-hero ${styles.cta}`}>
          Get your free proposal <ArrowRight size={20} className={styles.arrow} />
        </Link>
      </div>
    </section>
  );
}
