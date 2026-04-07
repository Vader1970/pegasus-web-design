"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Footer() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".gsap-footer-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 95%",
      }
    });
  }, { scope: container });

  const handleNavClick = () => {
    window.dispatchEvent(new Event('programmaticNav'));
  };

  return (
    <footer ref={container} className={styles.footer}>
      <div className={styles.container}>
        <div className={`gsap-footer-item ${styles.content}`}>

          <div className={styles.logoWrapper}>
            <Image
              src="/images/shared/pegasus-logo.png"
              alt="Pegasus Web Design Logo"
              fill
              sizes="(max-width: 768px) 160px, 200px"
              className={styles.logo}
            />
          </div>

          <nav className={styles.nav}>
            <Link href="#services" className={styles.link} onClick={handleNavClick}>What We Do</Link>
            <Link href="#work" className={styles.link} onClick={handleNavClick}>Work</Link>
            <Link href="#about" className={styles.link} onClick={handleNavClick}>About</Link>
          </nav>

        </div>

        <hr className={`gsap-footer-item ${styles.divider}`} />

        <div className={`gsap-footer-item ${styles.copyright}`}>
          <p>&copy; 2026 Pegasus Web Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
