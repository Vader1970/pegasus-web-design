"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import styles from './Services.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const servicesOptions = [
  {
    title: "Landing Pages",
    subtitle: "Turn more clicks into calls",
    body: "Focused pages designed to clearly communicate your offer and turn traffic into real calls."
  },
  {
    title: "Business Websites",
    subtitle: "Build trust from the first visit",
    body: "Professional websites built to make your business easy to understand, trust, and choose."
  },
  {
    title: "Website Redesigns",
    subtitle: "Fix what’s not working",
    body: "We rebuild underperforming websites into something clearer, faster, and designed to win you more work."
  },
  {
    title: "Platform Guidance",
    subtitle: "Choose the right foundation",
    body: "Not sure what platform to use? We’ll guide you toward the right setup based on your goals, budget, and long-term needs."
  }
];

export default function Services() {
  const container = useRef(null);
  // All items closed by default
  const [openIndex, setOpenIndex] = useState(-1);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    tl.from(".gsap-services-text", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
    .from(".gsap-services-accordion", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.4");
  }, { scope: container });

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section ref={container} className={styles.section} id="services">
      <div className={styles.container}>
        
        {/* Left Column: Content */}
        <div className={styles.contentColumn}>
          <h2 className={`gsap-services-text ${styles.heading}`}>What we can help you with</h2>
          <p className={`gsap-services-text ${styles.paragraph}`}>
            No templates. Everything is built around what your business actually needs.
          </p>
          <p className={`gsap-services-text ${styles.paragraph}`}>
            Whether you need more work, a clearer message, or a complete rebuild, we focus on what will actually move your business forward.
          </p>
          <div className="gsap-services-text">
            <Link href="#work" className={styles.ctaLink}>
              View our work <ArrowRight size={20} className={styles.arrow} />
            </Link>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className={styles.accordionColumn}>
          <div className={styles.accordion}>
            {servicesOptions.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={`gsap-services-accordion ${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
                  <button 
                    className={styles.accordionHeader} 
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.headerContent}>
                      <h3 className={styles.accordionTitle}>{service.title}</h3>
                    </div>
                    <span className={styles.chevron}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  <div className={styles.accordionBodyWrapper}>
                    <div className={styles.accordionBody}>
                      <div className={styles.accordionContentPadding}>
                        <p className={styles.accordionSubtitle}>{service.subtitle}</p>
                        <p className={styles.accordionText}>{service.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
