"use client";

import { useRef } from "react";
import Link from "next/link";
import styles from "./ServicesAlt.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ChevronRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const services = [
  {
    title: "Website Redesigns",
    description: "Fix what's costing you work. See the before and after.",
    href: "/work/mac-auto-services",
    featured: true,
  },

  {
    title: "Landing Pages",
    description: "Designed to turn visitors into enquiries. See examples.",
    href: "#landing-page-projects",
    featured: false,
  },
  {
    title: "Business Websites",
    description: "Professional, fast websites built for real service businesses.",
    href: "#work",
    featured: false,
  },

  {
    title: "Platform Guidance",
    description: "We help you choose the right setup.",
    href: "#contact",
    featured: false,
  },
];

export default function ServicesAlt() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
      });

      tl.from(".gsap-services-alt-text", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }).from(
        ".gsap-services-alt-row",
        {
          opacity: 0,
          y: 16,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.4"
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className={styles.section}
      id="services-alt"
      aria-label="Services overview"
    >
      <div className={styles.container}>
        <div className={styles.contentColumn}>
          <span className={`gsap-services-alt-text ${styles.label}`}>
            HOW WE HELP
          </span>
          <h2 className={`gsap-services-alt-text ${styles.heading}`}>
            What do you need help with?
          </h2>
          <p className={`gsap-services-alt-text ${styles.paragraph}`}>
            No templates. Everything is built around what your business actually needs.
          </p>
          <p className={`gsap-services-alt-text ${styles.paragraph}`}>
            Whether you need more enquiries, a clearer message, or a complete rebuild, we focus on what will actually move your business forward.
          </p>
          <div className="gsap-services-alt-text">
            <Link href="#work" className={styles.ctaLink}>
              See some of our work <ArrowRight size={20} className={styles.arrow} />
            </Link>
          </div>
        </div>

        <div className={styles.listColumn}>
          <ul className={styles.serviceList}>
            {services.map((service) => (
              <li key={service.title}>
                <Link
                  href={service.href}
                  className={`gsap-services-alt-row ${styles.serviceRow} ${service.featured ? styles.serviceRowFeatured : ""}`}
                  aria-label={`View details for ${service.title}`}
                >
                  <h3
                    className={`${styles.serviceTitle} ${service.featured ? styles.serviceTitleFeatured : ""}`}
                  >
                    {service.title}
                  </h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <span className={styles.rowIndicator} aria-hidden>
                    <ChevronRight
                      size={18}
                      strokeWidth={2}
                      className={styles.rowChevron}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
