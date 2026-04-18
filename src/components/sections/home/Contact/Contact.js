'use client';

import { useRef } from 'react';
import styles from './Contact.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Check } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Contact() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    tl.from(".gsap-contact-text", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
    .from(".gsap-contact-reassurance", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4")
    .from(".gsap-contact-panel", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");

    // Run the full contact reveal sequence at 2x speed.
    tl.timeScale(2);
  }, { scope: container });

  return (
    <section ref={container} className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Intro */}
          <div className={styles.introColumn}>
            <span className={`gsap-contact-text ${styles.sectionLabel}`}>Contact</span>
            <h2 className={`gsap-contact-text ${styles.heading}`}>Get more work</h2>
            <p className={`gsap-contact-text ${styles.paragraph}`}>
              If your current website doesn&apos;t feel right, or you don&apos;t have one at all, we can help you build something that does.
            </p>
            <div className={`gsap-contact-reassurance ${styles.reassuranceGroup}`}>
              <ul className={styles.reassuranceList} aria-label="What to expect">
                <li className={styles.reassuranceItem}>
                  <Check className={styles.reassuranceIcon} size={14} strokeWidth={2} aria-hidden />
                  <span>No obligation - just a conversation</span>
                </li>
                <li className={styles.reassuranceItem}>
                  <Check className={styles.reassuranceIcon} size={14} strokeWidth={2} aria-hidden />
                  <span>Clear next steps within 48 hours</span>
                </li>
                <li className={styles.reassuranceItem}>
                  <Check className={styles.reassuranceIcon} size={14} strokeWidth={2} aria-hidden />
                  <span>Built around your business, not templates</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Form Panel */}
          <div className={styles.formColumn}>
            <div className={`gsap-contact-panel ${styles.formPanel}`}>
              <p className={styles.formIntro}>
                Tell us a bit about your business and we&apos;ll be in touch to arrange your free consultation.
              </p>

              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input type="text" id="name" name="name" className={styles.input} />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input type="email" id="email" name="email" className={styles.input} />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="projectType" className={styles.label}>Project type</label>
                  <select id="projectType" name="projectType" className={styles.select} defaultValue="">
                    <option value="" disabled>Select a project type</option>
                    <option value="business-website">I need more enquiries</option>
                    <option value="landing-page">My website looks outdated</option>
                    <option value="website-redesign">I need a new website</option>
                    <option value="platform-guidance">My site is slow or not converting</option>
                    <option value="not-sure-yet">Not sure yet</option>
                  </select>
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="help" className={styles.label}>What do you need help with?</label>
                  <textarea 
                    id="help" 
                    name="help" 
                    className={styles.textarea} 
                    placeholder="Tell us what you need help with…"
                    rows={4}
                  ></textarea>
                </div>

                <div className={styles.formFooter}>
                  <div className={styles.testimonialBlock}>
                    <span className={styles.stars}>★★★★★</span>
                    <p className={styles.testimonialText}>
                      “They genuinely cared about getting everything right”<br />
                      <span className={styles.testimonialAuthor}>-Mac Auto Services, Christchurch</span>
                    </p>
                  </div>

                  <p className={styles.supportLine}>
                    We&apos;ll be in touch to arrange your free consultation. No obligation.
                  </p>

                  <div className={styles.submitWrap}>
                    <button type="submit" className={styles.submitButton}>
                      Start my project <ArrowRight size={20} className={styles.arrow} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
