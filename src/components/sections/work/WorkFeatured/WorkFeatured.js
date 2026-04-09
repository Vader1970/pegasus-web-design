"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './WorkFeatured.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const featured = {
  type: "WEBSITE",
  title: "Mac Auto Services",
  summary:
    "A conversion-focused website for a Christchurch automotive workshop, designed to build trust quickly and turn local visitors into enquiries.",
  meta: [
    { label: "Industry", value: "Automotive" },
    { label: "Platform", value: "Custom coded" },
    { label: "Focus", value: "Trust, clarity, enquiries" },
  ],
  liveSite: "https://www.macautoservices.co.nz/",
  caseStudy: "/work/mac-auto-services",
  image: "/images/home/projects/mac-auto-mock-up.webp",
};

export default function WorkFeatured() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    tl.from(".gsap-wf-img", {
      opacity: 0,
      scale: 0.97,
      duration: 1,
      ease: "power2.out"
    })
    .from(".gsap-wf-content", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.6");
  }, { scope: container });

  return (
    <section ref={container} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Image */}
          <div className={`gsap-wf-img ${styles.imageWrapper}`}>
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className={styles.image}
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>

          {/* Content */}
          <div className={styles.content}>
            <span className={`gsap-wf-content ${styles.typeLabel}`}>{featured.type}</span>
            <h2 className={`gsap-wf-content ${styles.title}`}>{featured.title}</h2>
            <p className={`gsap-wf-content ${styles.summary}`}>{featured.summary}</p>

            <div className={`gsap-wf-content ${styles.metaRow}`}>
              {featured.meta.map((item, i) => (
                <div key={i} className={styles.metaItem}>
                  <span className={styles.metaLabel}>{item.label}</span>
                  <span className={styles.metaValue}>{item.value}</span>
                </div>
              ))}
            </div>

            <div className={`gsap-wf-content ${styles.actions}`}>
              <Link
                href={featured.liveSite}
                className={styles.primaryBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                View live site <ArrowRight size={18} className={styles.arrow} />
              </Link>
              {featured.caseStudy && (
                <Link href={featured.caseStudy} className={styles.secondaryLink}>
                  View case study <ArrowRight size={16} className={styles.arrow} />
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
