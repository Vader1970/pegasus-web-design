"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Problem.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const cards = [
  {
    icon: "/images/home/icons/outdated-design.png",
    title: "Outdated design",
    text: "Your website doesn't reflect the quality of your business.",
    alt: "Outdated design icon"
  },
  {
    icon: "/images/home/icons/slow-performance.png",
    title: "Slow performance",
    text: "Pages take too long to load, causing users to leave.",
    alt: "Slow performance icon"
  },
  {
    icon: "/images/home/icons/confusion-structure.png",
    title: "Confusing structure",
    text: "Users don't know where to go or what to do.",
    alt: "Confusing structure icon"
  },
  {
    icon: "/images/home/icons/not-converting.png",
    title: "Not converting",
    text: "Visitors leave without getting in touch.",
    alt: "Not converting icon"
  }
];

export default function Problem() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    tl.from(".gsap-problem-text", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
    .from(".gsap-problem-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className={styles.section}>
      <div className={styles.container}>

        {/* Left Content */}
        <div className={styles.contentColumn}>
          <h2 className={`gsap-problem-text ${styles.heading}`}>
            If your website doesn't reflect how good your business actually is, it's costing you.
          </h2>
          <p className={`gsap-problem-text ${styles.paragraph}`}>
            Most businesses we work with aren't struggling because of their service, they're struggling because their website doesn't represent it properly.
          </p>
          <div className="gsap-problem-text">
            <Link href="#services" className={styles.ctaLink}>
              See how we fix it <ArrowRight size={20} className={styles.arrow} />
            </Link>
          </div>
        </div>

        {/* Right Cards Grid */}
        <div className={styles.gridColumn}>
          <div className={styles.cardsGrid}>
            {cards.map((card, index) => (
              <div key={index} className={`gsap-problem-card ${styles.card}`}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={card.icon}
                    alt={card.alt}
                    width={48}
                    height={48}
                    className={styles.icon}
                  />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
