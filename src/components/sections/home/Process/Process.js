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
    body: "We map out the structure, messaging, and platform direction."
  },
  {
    number: "03",
    title: "Design",
    body: "We shape the visual direction and create a layout that feels clear and professional."
  },
  {
    number: "04",
    title: "Build",
    body: "We develop, test, and refine everything so it works properly across devices."
  },
  {
    number: "05",
    title: "Launch & Support",
    body: "We get your site live and stay around to help after launch."
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

    // 1. Heading and Intro stagger
    tl.from(".gsap-process-heading", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });

    // 2. Animate each step block sequentially, and its internals stagger inside
    const stepsElements = gsap.utils.toArray(".gsap-process-step");
    
    // We establish an absolute timing baseline so the steps cascade rapidly
    const baseOffset = 0.3; 

    stepsElements.forEach((step, index) => {
      const q = gsap.utils.selector(step);
      const pos = baseOffset + (index * 0.12); // Speed up the sequence: each step begins 0.12s after prefix

      tl.from(step, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out"
      }, pos)
        .from(q(".gsap-anim-item"), {
          opacity: 0,
          y: 10,
          duration: 0.4,
          stagger: 0.08, // Rapidly fire number -> title -> body
          ease: "power2.out"
        }, pos + 0.05); // Start inner animation almost immediately after wrapper hits
    });

  }, { scope: container });

  return (
    <section ref={container} className={styles.section} id="process">
      <div className={styles.container}>

        <div className={styles.header}>
          <span className={`gsap-process-heading ${styles.label}`}>OUR PROCESS</span>
          <h2 className={`gsap-process-heading ${styles.heading}`}>
            From first conversation to live website in 3 to 6 weeks.
          </h2>
          <p className={`gsap-process-heading ${styles.processIntro}`}>
            A clear, structured process designed to get your site live quickly, without confusion or delays.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={`gsap-process-step ${styles.step}`}>
              <div className={styles.stepContent}>
                <span className={`gsap-anim-item ${styles.number}`}>{step.number}</span>
                <h3 className={`gsap-anim-item ${styles.title}`}>{step.title}</h3>
                <p className={`gsap-anim-item ${styles.body}`}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
