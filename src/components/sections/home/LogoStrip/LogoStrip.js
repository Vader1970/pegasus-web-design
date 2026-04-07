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

    tl.from(".gsap-logo-heading", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(".gsap-logo-item", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={`gsap-logo-heading ${styles.heading}`}>Businesses we've worked with</h2>
        </div>
        
        <div className={styles.grid}>
          {logos.map((logo, index) => (
            <div key={index} className={`gsap-logo-item ${styles.logoItem}`}>
              <Image 
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
