"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "@/components/sections/caseStudies/MacAutoCaseStudy/MacAutoCaseStudy.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * Final slate-band CTA (same markup/styles/animation as MacAutoCaseStudy ctaSection).
 */
export default function SlateBandCta() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;
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
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2 className={`gsap-cs ${styles.ctaHeading}`}>
          Ready to turn your website into your best salesperson?
        </h2>
        <p className={`gsap-cs ${styles.ctaPara}`}>
          We design fast, high-converting websites for trades and service businesses, built to bring in real enquiries, not just look good.
        </p>
        <Link href="/#contact" className={`gsap-cs ${styles.ctaBtn}`}>
          Get your free proposal <ArrowRight size={18} className={styles.arrow} />
        </Link>
      </div>
    </section>
  );
}
