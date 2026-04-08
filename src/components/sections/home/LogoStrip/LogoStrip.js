"use client";

import { useRef } from 'react';
import Image from 'next/image';
import styles from './LogoStrip.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const logos = [
  { src: "/images/home/logos/tilyards.jpg", alt: "Tilyards" },
  { src: "/images/home/logos/mac-auto-services.png", alt: "Mac Auto Services" },
  { src: "/images/home/logos/filtration-station.png", alt: "Filtration Station" },
  { src: "/images/home/logos/autistic-innovations.png", alt: "Autistic Innovations" },
  { src: "/images/home/logos/burst-diital.png", alt: "Burst Digital" },
  { src: "/images/home/logos/master-kerb.png", alt: "Master Kerb & Concrete" },
  { src: "/images/home/logos/gee-quiz.png", alt: "Gee Quiz" },
  { src: "/images/home/logos/innlist.png", alt: "Innlist" },
];

export default function LogoStrip() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%",
      }
    });

    tl.from(".gsap-logo-header", {
      opacity: 0,
      y: 16,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out"
    })
    .from(".gsap-logo-marquee", {
      opacity: 0,
      duration: 1,
      ease: "power1.out"
    }, "-=0.3");
  }, { scope: container });

  const renderLogos = () =>
    logos.map((logo, index) => (
      <div key={index} className={styles.logoItem}>
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          sizes="140px"
          className={styles.logoImage}
        />
      </div>
    ));

  return (
    <section ref={container} className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2 className={`gsap-logo-header ${styles.heading}`}>
            Businesses we&apos;ve worked with
          </h2>
          <p className={`gsap-logo-header ${styles.subtext}`}>
            A few of the businesses we&apos;ve helped with clearer, better-performing websites.
          </p>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={`gsap-logo-marquee ${styles.marqueeWrapper}`}>
            <div className={styles.marqueeTrack}>
              <div className={styles.marqueeGroup}>{renderLogos()}</div>
              <div className={styles.marqueeGroup} aria-hidden="true">{renderLogos()}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
