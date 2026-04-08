"use client";

import { useRef } from 'react';
import styles from './TrustBar.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const trustItems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 19.5L10 15.5M8.5 10.5L5.5 7.5C4.7 6.7 4.7 5.4 5.5 4.6C6.3 3.8 7.6 3.8 8.4 4.6L11.4 7.6M17.5 22.5L13.8 18.8M20.3 14.7L23.4 17.8C24.2 18.6 24.2 19.9 23.4 20.7C22.6 21.5 21.3 21.5 20.5 20.7L17.4 17.6M10.8 8.2L19.8 17.2M16.4 6.2L21.8 5.4L21 10.8L18.9 12.9L14.3 8.3L16.4 6.2Z" stroke="#6467F2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    main: "Built for tradies & service businesses",
    sub: "Trusted by NZ clients"
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4.5" y="5.5" width="19" height="13" rx="2.5" stroke="#6467F2" strokeWidth="1.8" />
        <path d="M10 22.5H18M14 18.5V22.5" stroke="#6467F2" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 14C10.2 11.7 12 10.5 14.4 10.5C16.1 10.5 17.5 11.1 18.8 12.3" stroke="#6467F2" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17.1 9.8L19.1 12.5L15.8 13.2" stroke="#6467F2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    main: "Fast websites that bring in enquiries",
    sub: "Built for real-world use"
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" stroke="#6467F2" strokeWidth="1.8" />
        <path d="M10.5 14H17.5" stroke="#6467F2" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18.5 7.5L9.5 20.5" stroke="#6467F2" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    main: "No upsells. No pressure.",
    sub: "Just honest advice"
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11.5C9 8.73858 11.2386 6.5 14 6.5C16.7614 6.5 19 8.73858 19 11.5V13.5C19 14.6046 19.8954 15.5 21 15.5V16.5C21 19.8137 18.3137 22.5 15 22.5H13C9.68629 22.5 7 19.8137 7 16.5V15.5C8.10457 15.5 9 14.6046 9 13.5V11.5Z" stroke="#6467F2" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M11.5 16.5C12.2 17.3 13 17.7 14 17.7C15 17.7 15.8 17.3 16.5 16.5" stroke="#6467F2" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20.5 8.5L22.5 10.5M22.5 8.5L20.5 10.5" stroke="#6467F2" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    main: "Support after launch",
    sub: "We don’t disappear"
  }
];

export default function TrustBar() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".gsap-trust-item", {
      opacity: 0,
      y: 15,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%", // earlier trigger for small bar
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className={styles.section}>
      <div className={styles.container}>
        {trustItems.map((item, index) => (
          <div key={index} className={`gsap-trust-item ${styles.item}`}>
            <div className={styles.iconWrapper}>{item.icon}</div>
            <p className={styles.text}>
              <span className={styles.main}>{item.main}</span>
              <span className={styles.sub}>{item.sub}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
