"use client";

import { useRef } from "react";
import Link from "next/link";
import styles from "./Services.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const services = [
  {
    title: "Website Redesigns",
    sentences: [
      "We rebuild outdated or underperforming websites so they look more professional, load faster, and turn more visitors into real enquiries."
    ],
  },
  {
    title: "Business Websites",
    sentences: [
      "Custom-built websites for service businesses that need clear messaging, strong trust signals, and a straightforward path for visitors to get in touch."
    ],
  },
  {
    title: "Landing Pages",
    sentences: [
      "Single-focus pages designed for ads, campaigns, or specific services, built to guide visitors toward action and turn clicks into qualified leads."
    ],
  },
  {
    title: "Platform Guidance",
    sentences: [
      "Straightforward advice on the right platform for your business, helping you choose a setup that fits your goals, budget, and long-term growth."
    ],
  },
];

export default function Services() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      });

      tl.from(".gsap-services-text", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }).from(
        ".gsap-services-row",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.4"
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.contentColumn}>
          <span className={`gsap-services-text ${styles.label}`}>HOW WE HELP</span>
          <h2 className={`gsap-services-text ${styles.heading}`}>
            What do you need help with?
          </h2>
          <p className={`gsap-services-text ${styles.paragraph}`}>
            No templates. Everything is built around what your business actually needs.
          </p>
          <p className={`gsap-services-text ${styles.paragraph}`}>
            Whether you need more enquiries, a clearer message, or a complete rebuild,
            we focus on what will actually move your business forward.
          </p>
          <div className="gsap-services-text">
            <Link href="#work" className={styles.ctaLink}>
              See some of our work <ArrowRight size={20} className={styles.arrow} />
            </Link>
          </div>
        </div>

        <div className={styles.rowsColumn}>
          <ul className={styles.rowsList}>
            {services.map((service) => (
              <li key={service.title} className={`gsap-services-row ${styles.serviceRow}`}>
                <div className={styles.rowInner}>
                  <h3 className={styles.rowTitle}>{service.title}</h3>
                  <div className={styles.rowBody}>
                    {service.sentences.map((sentence, i) => (
                      <p key={i} className={styles.rowText}>
                        {sentence}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
