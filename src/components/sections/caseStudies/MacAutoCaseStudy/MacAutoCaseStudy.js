"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MacAutoCaseStudy.module.css';
import SlateBandCta from '@/components/sections/shared/SlateBandCta/SlateBandCta';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Quote } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const IMG = "/images/case-studies/mac-auto-services";

const approach = [
  {
    num: "01",
    title: "Discover",
    text: "We spent time understanding what Mac Auto does, who their customers are, and where their existing site was losing people.",
  },
  {
    num: "02",
    title: "Plan",
    text: "Mapped out the site structure around their core services, WOF inspections, repairs, and servicing, with a clear path to enquiry.",
  },
  {
    num: "03",
    title: "Design",
    text: "Created a clean, professional layout that puts trust signals front and centre. Real photos, clear messaging, no clutter.",
  },
  {
    num: "04",
    title: "Build",
    text: "Custom-coded in React for speed and performance. Every page loads fast, works on mobile, and runs smoothly across all devices.",
  },
  {
    num: "05",
    title: "Launch",
    text: "Deployed to production, tested across devices, and set up analytics so the team can track real results from day one.",
  },
];

export default function MacAutoCaseStudy() {
  const page = useRef(null);

  useGSAP(() => {
    const sections = page.current.querySelectorAll("[data-animate]");
    sections.forEach((section) => {
      const els = section.querySelectorAll(".gsap-cs");
      if (!els.length) return;
      gsap.from(els, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      });
    });
  }, { scope: page });

  return (
    <div ref={page} className={styles.page}>

      {/* ════════════════════════════════════════════
          1 — HERO
      ════════════════════════════════════════════ */}
      <section className={styles.heroSection} data-animate>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={`gsap-cs ${styles.label}`}>WEBSITE</span>
            <h1 className={`gsap-cs ${styles.heroHeading}`}>Mac Auto Services</h1>
            <p className={`gsap-cs ${styles.heroSub}`}>
              Conversion-focused website for a Christchurch automotive workshop
            </p>
            <p className={`gsap-cs ${styles.heroPara}`}>
              Mac Auto needed a website that matched the quality of their work, trustworthy, clear, and built to turn local visitors into booked jobs.
            </p>
            <div className={`gsap-cs ${styles.heroActions}`}>
              <Link
                href="https://www.macautoservices.co.nz/"
                className={styles.btnPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                View live site <ArrowRight size={18} className={styles.arrow} />
              </Link>
              <Link href="#problem" className={styles.btnSecondary}>
                Read case study <ArrowRight size={16} className={styles.arrow} />
              </Link>
            </div>
          </div>
          <div className={`gsap-cs ${styles.heroImageWrapper}`}>
            <Image
              src={`${IMG}/hero-new.png`}
              alt="Mac Auto Services website on laptop"
              fill
              className={styles.heroImage}
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2 — THE PROBLEM
      ════════════════════════════════════════════ */}
      <section id="problem" className={styles.sectionAlt} data-animate>
        <div className={styles.splitContainer}>
          <div className={styles.splitText}>
            <span className={`gsap-cs ${styles.label}`}>THE PROBLEM</span>
            <h2 className={`gsap-cs ${styles.sectionHeading}`}>
              A great workshop with a website that didn&apos;t match
            </h2>
            <ul className={`gsap-cs ${styles.bulletList}`}>
              <li>The old site looked outdated and didn&apos;t reflect the quality of their work</li>
              <li>Customers couldn&apos;t easily find services, hours, or how to book</li>
              <li>Mobile experience was poor, most local search traffic is on phones</li>
              <li>No clear call to action, visitors had nowhere obvious to go</li>
              <li>Competitors with better sites were winning the same customers</li>
            </ul>
          </div>
          <div className={`gsap-cs ${styles.splitImageWrapper}`}>
            <Image
              src={`${IMG}/shop-front.webp`}
              alt="Mac Auto Services workshop exterior"
              fill
              className={styles.splitImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3 — THE GOAL
      ════════════════════════════════════════════ */}
      <section className={styles.sectionDefault} data-animate>
        <div className={`${styles.splitContainer} ${styles.goalSplitContainer}`}>
          <div className={`gsap-cs ${styles.splitImageWrapper} ${styles.goalImage}`}>
            <Image
              src={`${IMG}/happy-customer.webp`}
              alt="Happy Mac Auto customer standing beside vehicle"
              fill
              className={styles.splitImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className={`${styles.splitText} ${styles.goalContent}`}>
            <span className={`gsap-cs ${styles.label}`}>THE GOAL</span>
            <h2 className={`gsap-cs ${styles.sectionHeading}`}>
              Build a site that earns trust and drives enquiries
            </h2>
            <ul className={`gsap-cs ${styles.bulletList}`}>
              <li>Present Mac Auto as the professional, reliable workshop they are</li>
              <li>Make it easy for visitors to find services and take action</li>
              <li>Optimise for mobile-first, where most local customers search</li>
              <li>Create a fast, modern site that builds credibility in seconds</li>
              <li>Give the team a platform they can actually grow with</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4 — OUR APPROACH
      ════════════════════════════════════════════ */}
      <section className={styles.sectionAlt} data-animate>
        <div className={styles.container}>
          <span className={`gsap-cs ${styles.label}`}>OUR APPROACH</span>
          <h2 className={`gsap-cs ${styles.sectionHeading}`}>
            From discovery to launch in five clear steps
          </h2>
          <div className={styles.approachGrid}>
            {approach.map((step) => (
              <div key={step.num} className={`gsap-cs ${styles.approachStep}`}>
                <span className={styles.stepNum}>{step.num}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5 — DESIGN DECISIONS
      ════════════════════════════════════════════ */}
      <section className={styles.sectionDefault} data-animate>
        <div className={styles.container}>
          <span className={`gsap-cs ${styles.label}`}>DESIGN DECISIONS</span>
          <h2 className={`gsap-cs ${styles.sectionHeading}`}>
            Every design choice had a reason behind it
          </h2>

          {/* Block 1 — image left */}
          <div className={`gsap-cs ${styles.designBlock}`}>
            <div className={styles.designImageWrapper}>
              <Image
                src={`${IMG}/services-hero.jpg`}
                alt="Mac Auto Services page design"
                fill
                className={styles.designImage}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className={styles.designText}>
              <h3 className={styles.designTitle}>Service pages built around real questions</h3>
              <p className={styles.designPara}>
                Each service page was structured around the questions customers actually ask, what&apos;s included, how long it takes, and how to book. No fluff, no jargon.
              </p>
            </div>
          </div>

          {/* Block 2 — image right (reversed) */}
          <div className={`gsap-cs ${styles.designBlock} ${styles.designBlockReverse}`}>
            <div className={styles.designImageWrapper}>
              <Image
                src={`${IMG}/chris-service.webp`}
                alt="Oil change service detail"
                fill
                className={styles.designImage}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className={styles.designText}>
              <h3 className={styles.designTitle}>Trust-first visual hierarchy</h3>
              <p className={styles.designPara}>
                Real workshop photos, clear pricing language, and prominent reviews are positioned to build confidence before a visitor even reads the copy. The layout earns trust in seconds.
              </p>
            </div>
          </div>

          {/* Block 3 — image left */}
          <div className={`gsap-cs ${styles.designBlock}`}>
            <div className={styles.designImageWrapper}>
              <Image
                src={`${IMG}/chris.png`}
                alt="Chris working in the workshop"
                fill
                className={styles.designImage}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className={styles.designText}>
              <h3 className={styles.designTitle}>Mobile-first, conversion-focused</h3>
              <p className={styles.designPara}>
                Over 70% of traffic comes from mobile search. Every interaction, buttons, forms, navigation, was designed for thumbs first and desktops second.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6 — THE BUILD
      ════════════════════════════════════════════ */}
      <section className={styles.sectionAlt} data-animate>
        <div className={styles.buildGrid}>
          <div className={styles.buildText}>
            <span className={`gsap-cs ${styles.label}`}>THE BUILD</span>
            <h2 className={`gsap-cs ${styles.sectionHeading}`}>
              Custom-coded for speed and reliability
            </h2>
            <p className={`gsap-cs ${styles.bodyText}`}>
              The site was built from scratch using React, no templates, no page builders. This gives Mac Auto a site that loads fast, ranks well, and can scale as their business grows.
            </p>
            <ul className={`gsap-cs ${styles.bulletList}`}>
              <li>Custom React codebase, fast, secure, future-proof</li>
              <li>Optimised images and lazy loading for performance</li>
              <li>SEO foundations built in from day one</li>
              <li>Responsive across every device and screen size</li>
            </ul>
          </div>
          <div className={`gsap-cs ${styles.buildImageWrapper}`}>
            <Image
              src="/images/home/projects/mac-auto-mock-up.webp"
              alt="Mac Auto Services website mockup"
              fill
              className={styles.buildImage}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          7 — RESULTS & PROOF (combined)
      ════════════════════════════════════════════ */}
      <section className={styles.resultsSection} data-animate>
        <div className={styles.resultsGrid}>

          {/* Left — Outcome */}
          <div className={styles.resultsText}>
            <span className={`gsap-cs ${styles.label}`}>THE OUTCOME</span>
            <h2 className={`gsap-cs ${styles.sectionHeading}`}>
              Built to convert, not just exist
            </h2>
            <ul className={`gsap-cs ${styles.bulletList}`}>
              <li>A professional presence that matches the quality of their work</li>
              <li>Clear service pages that guide visitors straight to enquiry</li>
              <li>Mobile-first design capturing 70%+ of local search traffic</li>
              <li>Trust signals that turn browsers into booked customers</li>
              <li>A fast, scalable platform built to grow with the business</li>
            </ul>
          </div>

          {/* Right — Testimonial */}
          <div className={`gsap-cs ${styles.testimonialCard}`}>
            <Quote size={36} className={styles.quoteIcon} />
            <blockquote className={styles.quoteText}>
              &ldquo;Daniel and Michele did an incredible job creating the Mac Auto Services website. From start to finish, they were professional, friendly, and extremely easy to work with.
              <br /><br />
              They took the time to really understand the business and what we wanted to achieve, and their attention to detail was outstanding. Every part of the website was thoughtfully put together - nothing felt rushed or overlooked.
              <br /><br />
              What really stood out was the care and passion they brought to the project. The website looks amazing, functions perfectly, and represents the business exactly how we envisioned.
              <br /><br />
              I would highly recommend them to anyone looking for a high-quality website with a personal touch.&rdquo;
            </blockquote>
            <div className={styles.quoteAuthor}>
              <div className={styles.authorImageWrapper}>
                <Image
                  src={`${IMG}/about-megan.jpg`}
                  alt="Megan Calvert from Mac Auto Services"
                  fill
                  className={styles.authorImage}
                />
              </div>
              <div>
                <strong className={styles.authorName}>Megan Calvert</strong>
                <span className={styles.authorRole}>Mac Auto Services</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <SlateBandCta />

    </div>
  );
}
