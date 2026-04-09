"use client";

import { useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    tl.from(".gsap-about-img", {
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out"
    })
    .from(".gsap-about-text", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.8")
    .from(".gsap-about-benefit", {
      opacity: 0,
      x: -20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.4")
    .from(".gsap-about-panel", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.2");
  }, { scope: container });

  return (
    <section ref={container} className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Left: Image Column */}
          <div className={`gsap-about-img ${styles.imageColumn}`}>
            <Image
              src="/images/home/team/michele-and-daniel.png"
              alt="Michele and Daniel from Pegasus Web Design"
              fill
              className={styles.image}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Content Column */}
          <div className={styles.contentColumn}>
            <span className={`gsap-about-text ${styles.label}`}>WHO WE ARE</span>
            <h2 className={`gsap-about-text ${styles.heading}`}>
              We design and build high-performing websites for service businesses.
            </h2>

            <p className={`gsap-about-text ${styles.paragraph}`}>
              Most trades and service businesses lose work online — not because they&apos;re not good at what they do, but because their website doesn&apos;t show it. We fix that. We build websites that earn trust fast and turn visitors into real enquiries.
            </p>

            {/* Benefits List */}
            <ul className={styles.benefitsList}>
              {[
                "Trusted by service businesses across New Zealand",
                "Proven websites built to generate real enquiries",
                "1 month of dedicated support included after launch",
                "We recommend the right platform for your business"
              ].map((benefit, index) => (
                <li key={index} className={`gsap-about-benefit ${styles.benefitsItem}`}>
                  <div className={styles.checkIconWrapper}>
                    <Image
                      src="/images/home/team/checked-purple-dark.png"
                      alt="Check Icon"
                      width={20}
                      height={20}
                      className={styles.icon}
                    />
                  </div>
                  <span className={styles.benefitText}>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Qualifications Panel */}
            <span className={`gsap-about-text ${styles.panelLabel}`}>Our background</span>
            <div className={`gsap-about-panel ${styles.panel}`}>
              <div className={styles.panelColumns}>
                {/* Daniel */}
                <div className={styles.personColumn}>
                  <h4 className={styles.personName}>Daniel</h4>
                  <ul className={styles.qualificationList}>
                    {[
                      "Diploma in Web Design & Production",
                      "Certificate in UX Design",
                      "Certificate in Web Development",
                      "Certificate in Business Studies (Information Systems)"
                    ].map((qual, idx) => (
                      <li key={idx} className={styles.qualificationItem}>
                        <div className={styles.knowledgeIconWrapper}>
                          <Image
                            src="/images/home/team/knowledge-purple-dark.png"
                            alt="Qualification Icon"
                            width={16}
                            height={16}
                            className={styles.icon}
                          />
                        </div>
                        <span className={styles.qualificationText}>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Michele */}
                <div className={styles.personColumn}>
                  <h4 className={styles.personName}>Michele</h4>
                  <ul className={styles.qualificationList}>
                    {[
                      "Diploma in Web Design & Production",
                      "Diploma in Graphic Design"
                    ].map((qual, idx) => (
                      <li key={idx} className={styles.qualificationItem}>
                        <div className={styles.knowledgeIconWrapper}>
                          <Image
                            src="/images/home/team/knowledge-purple-dark.png"
                            alt="Qualification Icon"
                            width={16}
                            height={16}
                            className={styles.icon}
                          />
                        </div>
                        <span className={styles.qualificationText}>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
