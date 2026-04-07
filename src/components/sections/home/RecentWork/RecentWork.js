"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './RecentWork.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const secondaryProjects = [
  {
    type: "WEBSITE",
    title: "Burst Digital",
    description: "Modern brand website for a digital services company.",
    link: "https://www.burstdigital.co.nz/",
    image: "/images/home/projects/burst-digital-mock-up.png"
  },
  {
    type: "WEBSITE",
    title: "Autistic Innovations",
    description: "Purpose-driven website with accessibility focus.",
    link: "https://www.autisticinnovations.co.nz/",
    image: "/images/home/projects/autistic-innovations-maoc-up.png"
  },
  {
    type: "WEBSITE",
    title: "Cleghorn Roofing",
    description: "Professional website for a roofing business.",
    link: "https://cleghorn-roofing.vercel.app/",
    image: "/images/home/projects/cleghorn-mock-up.png"
  },
  {
    type: "LANDING PAGE",
    title: "Tilyard Plumbing",
    description: "Custom-coded landing page built inside of Wix.",
    link: "https://www.tilyardplumbing.co.nz/landing-page",
    image: "/images/home/projects/tilyard-plumbing-mock-up.png"
  },
  {
    type: "LANDING PAGE",
    title: "Filtration Station",
    description: "Service landing page within a Shopify store.",
    link: "https://www.filtrationstation.co.nz/pages/installation-services",
    image: "/images/home/projects/filtration-station-mock-up.png"
  },
  {
    type: "LANDING PAGE",
    title: "Innlist Holiday Homes",
    description: "Custom-coded page built within platform constraints.",
    link: "https://www.innlist.co.nz/landing-page/",
    image: "/images/home/projects/innlist-mock-up.png"
  },
  {
    type: "LANDING PAGE",
    title: "Master Kerb",
    description: "High-converting landing page for a service business.",
    link: "https://www.masterkerb.co.nz/landing-page",
    image: "/images/home/projects/master-kerb-mock-up.png"
  },
  {
    type: "LANDING PAGE",
    title: "Gee Quiz",
    description: "Clean landing page designed to drive engagement.",
    link: "https://www.geequiz.co.nz/landing-page",
    image: "/images/home/projects/gee-quiz-mock-up.png"
  }
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
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
    .from(".gsap-work-featured-img", {
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.4")
    .from(".gsap-work-featured-text", {
      opacity: 0,
      x: -20,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.8")
    .from(".gsap-work-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className={styles.section} id="work">
      <div className={styles.container}>

        {/* Part 1: Heading Area */}
        <div className={styles.header}>
          <h2 className={`gsap-work-header ${styles.heading}`}>Recent work</h2>
          <p className={`gsap-work-header ${styles.intro}`}>
            Real projects for real businesses — built to bring in work
          </p>
        </div>

        {/* Part 2: Featured Project Row */}
        <div className={styles.featuredRow}>
          <div className={`gsap-work-featured-img ${styles.featuredImageWrapper}`}>
            <Image
              src="/images/home/projects/mac-auto-mock-up.webp"
              alt="Mac Auto Services Website"
              fill
              className={styles.projectImage}
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
          <div className={`gsap-work-featured-text ${styles.featuredContent}`}>
            <span className={styles.typeLabel}>WEBSITE</span>
            <h3 className={styles.featuredTitle}>Mac Auto Services</h3>
            <p className={styles.featuredDescription}>
              Conversion-focused website for an automotive workshop.
            </p>
            <Link
              href="https://www.macautoservices.co.nz/"
              className={styles.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View site <span className={styles.arrow}>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Part 3: Secondary Project Grid */}
        <div className={styles.secondaryGrid}>
          {secondaryProjects.map((project, index) => (
            <div key={index} className={`gsap-work-card ${styles.projectCard}`}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.typeLabel}>{project.type}</span>
                <h4 className={styles.cardTitle}>{project.title}</h4>
                <p className={styles.cardDescription}>{project.description}</p>
                <Link 
                  href={project.link} 
                  className={styles.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View site <span className={styles.arrow}>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
