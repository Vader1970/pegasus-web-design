"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './WorkGrid.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const projects = [
  {
    type: "Website",
    title: "Burst Digital",
    summary: "Brand website that positioned a growing digital agency as a credible, premium partner.",
    image: "/images/home/projects/burst-digital-mock-up.png",
    liveSite: "https://www.burstdigital.co.nz/",
    caseStudy: null,
    category: "websites",
    featured: false,
  },
  {
    type: "Website",
    title: "Autistic Innovations",
    summary: "Purpose-driven website built with accessibility and clarity at its core.",
    image: "/images/home/projects/autistic-innovations-maoc-up.png",
    liveSite: "https://www.autisticinnovations.co.nz/",
    caseStudy: null,
    category: "websites",
    featured: false,
  },
  {
    type: "Website",
    title: "Cleghorn Roofing",
    summary: "Professional site for a roofing company — clear services, strong trust signals, and easy contact.",
    image: "/images/home/projects/cleghorn-mock-up.png",
    liveSite: "https://cleghorn-roofing.vercel.app/",
    caseStudy: null,
    category: "websites",
    featured: false,
  },
  {
    type: "Landing Page",
    title: "Tilyard Plumbing",
    summary: "Custom-coded landing page inside Wix — turning paid traffic into phone calls.",
    image: "/images/home/projects/tilyard-plumbing-mock-up.png",
    liveSite: "https://www.tilyardplumbing.co.nz/landing-page",
    caseStudy: null,
    category: "landing-pages",
    featured: false,
  },
  {
    type: "Landing Page",
    title: "Filtration Station",
    summary: "Service landing page built within a Shopify store to drive installation bookings.",
    image: "/images/home/projects/filtration-station-mock-up.png",
    liveSite: "https://www.filtrationstation.co.nz/pages/installation-services",
    caseStudy: null,
    category: "landing-pages",
    featured: false,
  },
  {
    type: "Landing Page",
    title: "Innlist Holiday Homes",
    summary: "Custom-coded page built within platform constraints to showcase property listings.",
    image: "/images/home/projects/innlist-mock-up.png",
    liveSite: "https://www.innlist.co.nz/landing-page/",
    caseStudy: null,
    category: "landing-pages",
    featured: false,
  },
  {
    type: "Landing Page",
    title: "Master Kerb",
    summary: "Landing page for a concrete kerbing business — built to generate consistent enquiries.",
    image: "/images/home/projects/master-kerb-mock-up.png",
    liveSite: "https://www.masterkerb.co.nz/landing-page",
    caseStudy: null,
    category: "landing-pages",
    featured: false,
  },
  {
    type: "Landing Page",
    title: "Gee Quiz",
    summary: "Clean landing page designed to drive engagement and event bookings.",
    image: "/images/home/projects/gee-quiz-mock-up.png",
    liveSite: "https://www.geequiz.co.nz/landing-page",
    caseStudy: null,
    category: "landing-pages",
    featured: false,
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Websites", value: "websites" },
  { label: "Landing Pages", value: "landing-pages" },
];

export default function WorkGrid() {
  const container = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    tl.from(".gsap-wg-filter", {
      opacity: 0,
      y: 12,
      duration: 0.5,
      ease: "power2.out"
    })
    .from(".gsap-wg-card", {
      opacity: 0,
      y: 24,
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.out"
    }, "-=0.2");
  }, { scope: container });

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section ref={container} className={styles.section}>
      <div className={styles.container}>

        {/* ── Filter Bar ── */}
        <div className={`gsap-wg-filter ${styles.filterBar}`}>
          {filters.map((f) => (
            <button
              key={f.value}
              className={`${styles.filterBtn} ${activeFilter === f.value ? styles.filterActive : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── Project Grid ── */}
        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <div key={index} className={`gsap-wg-card ${styles.card}`}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardType}>{project.type}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardSummary}>{project.summary}</p>
                <div className={styles.cardActions}>
                  <Link
                    href={project.liveSite}
                    className={styles.cardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live site <ArrowRight size={16} className={styles.arrow} />
                  </Link>
                  {project.caseStudy && (
                    <Link href={project.caseStudy} className={styles.cardLinkSecondary}>
                      Case study <ArrowRight size={14} className={styles.arrow} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
