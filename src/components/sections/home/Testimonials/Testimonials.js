"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Testimonials.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const testimonials = [
  {
    logo: "/images/home/testimonials/mac-auto-services-purple.png",
    quote: "“Genuinely cared about getting everything right. The website now actually reflects the quality of our work.”",
    clientName: "Mac Auto Services",
    clientDetails: "Automotive Workshop | Christchurch",
    resultLabel: "Result",
    resultText: "+15 new clients in first month",
    resultIcon: "/images/home/testimonials/user.png" // using user icon for client volume
  },
  {
    logo: "/images/home/testimonials/autistic-innovation-purple.png",
    quote: "“Understood exactly what I needed and delivered a site that truly represents my business.”",
    clientName: "Autistic Innovations",
    clientDetails: "Support for Autistic People | Canterbury",
    resultLabel: "Result",
    resultText: "Stronger brand presence and messaging",
    resultIcon: "/images/home/testimonials/sparkler.png" // using sparkler for brand
  },
  {
    logo: "/images/home/testimonials/burst-digital-purple.png",
    quote: "“Impressed with the level of professionalism and quick turnaround. The new site now converts consistently.”",
    clientName: "Burst Digital",
    clientDetails: "Digital Marketing Agency | Auckland",
    resultLabel: "Result",
    resultText: "300% increase in conversion rate",
    resultIcon: "/images/home/testimonials/growth.png" // using growth for numbers
  }
];

export default function Testimonials() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    tl.from(".gsap-test-heading", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(".gsap-test-col", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <span className={`gsap-test-heading ${styles.label}`}>REAL RESULTS</span>
          <h2 className={`gsap-test-heading ${styles.heading}`}>Real results from real businesses</h2>
          <p className={`gsap-test-heading ${styles.subtext}`}>
            Websites designed to bring in enquiries — not just look good.
          </p>
        </div>
        
        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <div key={index} className={`gsap-test-col ${styles.column}`}>
              
              <div className={styles.logoWrapper}>
                <Image 
                  src={item.logo} 
                  alt={`${item.clientName} logo`} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
                  className={styles.logo} 
                />
              </div>
              
              <p className={styles.quote}>
                {item.quote}
              </p>
              
              <div className={styles.clientInfo}>
                <h3 className={styles.clientName}>{item.clientName}</h3>
                <span className={styles.clientDetails}>{item.clientDetails}</span>
              </div>
              
              <hr className={styles.divider} />
              
              <div className={styles.resultRow}>
                <div className={styles.resultIconWrapper}>
                  <Image 
                    src={item.resultIcon} 
                    alt={`${item.clientName} Result Icon`} 
                    width={32} 
                    height={32} 
                    className={styles.resultIcon} 
                  />
                </div>
                <div className={styles.resultContent}>
                  <span className={styles.resultLabel}>{item.resultLabel}</span>
                  <span className={styles.resultText}>{item.resultText}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className={`gsap-test-col ${styles.ctaBlock}`}>
          <h3 className={styles.ctaHeading}>Want results like this for your business?</h3>
          <Link href="/#contact" className={styles.ctaBtn}>
            Get your free proposal <ArrowRight size={18} className={styles.arrow} />
          </Link>
        </div>
      </div>
    </section>
  );
}
