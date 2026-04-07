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
    main: "Built for trades & service businesses",
    sub: "— trusted by NZ clients"
  },
  {
    main: "90+ PageSpeed scores at launch",
    sub: "— tested on every project"
  },
  {
    main: "We recommend what’s right for you",
    sub: "— no upsells, no pressure"
  },
  {
    main: "1 month of support after launch",
    sub: "— included, no extra cost"
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
