"use client";

import { useRef } from 'react';
import styles from './Process.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const steps = [
  {
    number: "01",
    title: "Discover",
    body: "We learn about your business, goals, and what success looks like."
  },
  {
    number: "02",
    title: "Plan",
    body: "We map out the structure, content strategy, and platform."
  },
  {
    number: "03",
    title: "Design",
    body: "We create the visual direction and layout."
  },
  {
    number: "04",
    title: "Build",
    body: "We develop, test, and refine everything."
  },
  {
    number: "05",
    title: "Launch & Support",
    body: "We go live - and stay around to help."
  }
];

export default function Process() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    tl.from(".gsap-process-heading", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    })
      .from(".gsap-process-step", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out"
      }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2 className={`gsap-process-heading ${styles.heading}`}>
            From first conversation to live website in 3 to 6 weeks.
          </h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={`gsap-process-step ${styles.step}`}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.body}>{step.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
