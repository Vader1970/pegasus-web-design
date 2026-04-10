"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Footer() {
  const container = useRef(null);
  const pathname = usePathname();

  // Next.js route changes alter document height; ScrollTrigger must recalculate
  // or footer reveal can stay at opacity: 0 (gsap.from immediateRender).
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    refresh();
    const t0 = window.setTimeout(refresh, 0);
    const t1 = window.setTimeout(refresh, 150);
    window.addEventListener("load", refresh);
    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      window.removeEventListener("load", refresh);
    };
  }, [pathname]);

  useGSAP(() => {
    gsap.from(".gsap-footer-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        once: true,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: container });

  const handleNavClick = () => {
    window.dispatchEvent(new Event('programmaticNav'));
  };

  // Route navigation to /work should keep navbar visible for better first-view UX.
  const handleWorkNavClick = () => {};

  return (
    <footer ref={container} className={styles.footer}>
      <div className={styles.container}>
        <div className={`gsap-footer-item ${styles.content}`}>

          <div className={styles.logoWrapper}>
            <Link href="/">
            <Image
              src="/images/shared/pegasus-logo.png"
              alt="Pegasus Web Design Logo"
              fill
              sizes="(max-width: 768px) 160px, 200px"
              className={styles.logo}
            />
            </Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/#services" className={styles.link} onClick={handleNavClick}>Services</Link>
            <Link href="/work" className={styles.link} onClick={handleWorkNavClick}>Work</Link>
            <Link href="/#about" className={styles.link} onClick={handleNavClick}>About Us</Link>
            <Link href="/work/mac-auto-services" className={styles.link} onClick={handleWorkNavClick}>Case Study</Link>
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
