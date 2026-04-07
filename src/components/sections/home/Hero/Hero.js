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
      ".gsap-hero-heading-line",
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
              <span className={styles.trustText}>+15 new clients in the first month of going live.</span>
            </div>
            <div className={styles.author}>— Mac Auto Services, Christchurch</div>
          </div>

          <h1 className={styles.heading}>
            <span className="gsap-hero-heading-line" style={{ display: 'inline-block' }}>Your Web Studio for</span>{' '}
            <span className="gsap-hero-heading-line" style={{ display: 'inline-block' }}>Trades & Service Businesses.</span>
          </h1>

          <p className={`gsap-hero-text ${styles.paragraph}`}>
            Your site will load fast, look sharp, and bring in real work. No jargon. No templates. No surprises.
          </p>

          <div className={`gsap-hero-cta ${styles.ctaGroup}`}>
            <Link href="#contact" className={styles.ctaButton}>
              Get your free proposal
              <ArrowRight size={20} className={styles.arrow} />
            </Link>
            <p className={styles.smallText}>
              Free. Written. Delivered within 48 hours.
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
