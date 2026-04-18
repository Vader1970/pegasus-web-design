"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.set(container.current, { visibility: "visible" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // All elements have the same animation as the image
    tl.from([
      ".gsap-hero-image",
      ".gsap-hero-trust",
      ".gsap-hero-heading",
      ".gsap-hero-text",
      ".gsap-hero-cta"
    ], {
      scale: 1.05,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className={styles.section} style={{ visibility: 'hidden' }}>
      <div className={styles.container}>

        {/* Left: Content */}
        <div className={styles.content}>

          {/* Trust Line */}
          <div className={`gsap-hero-trust ${styles.trustLine}`}>
            <div className={styles.trustRow}>
              <span className={styles.stars}>★★★★★</span>
              <span className={styles.trustText}>Trusted by NZ service businesses</span>
            </div>
            <div className={styles.author}>
              +15 new clients generated in first month (Mac Auto Services)
            </div>
          </div>

          <h1 className={`gsap-hero-heading ${styles.heading}`}>
            If your website doesn't reflect how good your business actually is, it's costing you work.
          </h1>

          <p className={`gsap-hero-text ${styles.paragraph}`}>
            We design fast, modern websites that turn visitors into real enquiries.
          </p>

          <div className={`gsap-hero-cta ${styles.ctaGroup}`}>
            <Link href="#contact" className={styles.ctaButton}>
              Get your free consultation
              <ArrowRight size={20} className={styles.arrow} />
            </Link>
            <p className={styles.microText}>
              No obligation. No pressure.
            </p>
          </div>

        </div>

        {/* Right: Image */}
        <div className={`gsap-hero-image ${styles.imageColumn}`}>
          <div className={styles.glow}></div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/home/hero/hero-transparent.png"
              alt="Pegasus Web Design Mockup"
              fill
              priority
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.heroImage}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
