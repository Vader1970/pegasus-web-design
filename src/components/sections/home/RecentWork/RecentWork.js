"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './RecentWork.module.css';
import ctaStyles from '../CTA/CTA.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const featuredProject = {
  type: "WEBSITE",
  title: "Mac Auto Services",
  description:
    "Full website rebuild for an automotive workshop. Built to earn trust fast and turn visitors into booked jobs.",
  link: "https://www.macautoservices.co.nz/",
  image: "/images/home/projects/mac-auto-mock-up.webp",
};

const supportingProjects = [
  {
    type: "WEBSITE",
    title: "Burst Digital",
    description: "Brand website that positioned a growing digital agency as a credible, premium partner.",
    link: "https://www.burstdigital.co.nz/",
    image: "/images/home/projects/burst-digital-mock-up.png",
  },
  {
    type: "WEBSITE",
    title: "Autistic Innovations",
    description: "Purpose-driven website built with accessibility and clarity at its core.",
    link: "https://www.autisticinnovations.co.nz/",
    image: "/images/home/projects/autistic-innovations-maoc-up.png",
  },
  {
    type: "LANDING PAGE",
    title: "Filtration Station",
    description: "Service landing page built within a Shopify store to drive installation bookings.",
    link: "https://www.filtrationstation.co.nz/pages/installation-services",
    image: "/images/home/projects/filtration-station-mock-up.png",
  },
  {
    type: "LANDING PAGE",
    title: "Master Kerb",
    description: "Landing page for a concrete kerbing business, built to generate consistent enquiries.",
    link: "https://www.masterkerb.co.nz/landing-page",
    image: "/images/home/projects/master-kerb-mock-up.png",
  },
];

export default function RecentWork() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    tl.from(".gsap-work-header", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out"
    });

    tl.from(".gsap-work-featured-img", {
      opacity: 0,
      scale: 0.97,
      duration: 1,
      ease: "power2.out"
    }, "-=0.3")
    .from(".gsap-work-featured-text", {
      opacity: 0,
      y: 16,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.6");

    tl.from(".gsap-work-card", {
      opacity: 0,
      y: 24,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.3");

    tl.from(".gsap-work-cta", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className={styles.section} id="work">
      <div className={styles.container}>

        {/* ──── Header ──── */}
        <div className={styles.header}>
          <span className={`gsap-work-header ${styles.label}`}>REAL PROJECTS</span>
          <h2 className={`gsap-work-header ${styles.heading}`}>Recent work</h2>
          <p className={`gsap-work-header ${styles.intro}`}>
            Real websites and landing pages we&apos;ve built for service-based businesses, designed to bring in more enquiries, not just look good.
          </p>
        </div>

        {/* ──── Featured Project ──── */}
        <div className={styles.featured}>
          <div className={`gsap-work-featured-img ${styles.featuredImageWrapper}`}>
            <Image
              src={featuredProject.image}
              alt={featuredProject.title}
              fill
              className={styles.projectImage}
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
          <div className={`gsap-work-featured-text ${styles.featuredContent}`}>
            <span className={styles.typeLabel}>{featuredProject.type}</span>
            <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>
            <p className={styles.featuredDescription}>
              {featuredProject.description}
            </p>
            <Link
              href={featuredProject.link}
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View project <ArrowRight size={18} className={styles.arrow} />
            </Link>
          </div>
        </div>

        {/* ──── Supporting Projects ──── */}
        <div className={styles.supportingGrid}>
          {supportingProjects.map((project, index) => (
            <div key={index} className={`gsap-work-card ${styles.card}`}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.typeLabel}>{project.type}</span>
                <h4 className={styles.cardTitle}>{project.title}</h4>
                <p className={styles.cardDescription}>{project.description}</p>
                <Link
                  href={project.link}
                  className={styles.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project <ArrowRight size={16} className={styles.arrow} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ──── Section Exit CTA ──── */}
        <div className={`gsap-work-cta ${styles.sectionCta}`}>
          <Link href="/work" className={ctaStyles.ctaButton}>
            View all work{' '}
            <ArrowRight size={20} className={ctaStyles.arrow} />
          </Link>
        </div>

      </div>
    </section>
  );
}
