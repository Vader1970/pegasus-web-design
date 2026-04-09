'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './FAQ.module.css';
import ctaStyles from '../CTA/CTA.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Most small business websites fall between $2,500 - $5,000. Landing pages start from $800. We give you an honest, written quote before any work starts, no hidden fees."
  },
  {
    question: "How long does it take?",
    answer: "Most sites are live within 3 - 6 weeks. Landing pages can be turned around in 1 - 2 weeks. You'll get a clear timeline upfront so there are no surprises."
  },
  {
    question: "Which platform do you recommend?",
    answer: "We'll recommend the best option based on your goals, not what's easiest for us. Whether that's Framer, Webflow, or custom code, you'll know exactly why before we start."
  },
  {
    question: "What do I need to get started?",
    answer: "Just a rough idea of what your business needs. We handle the rest, from copy direction to design to launch. You don't need anything ready."
  },
  {
    question: "What happens after launch?",
    answer: "Every project includes 1 month of free support. After that, we offer ongoing hosting and care plans covering updates, security, and priority support."
  }
];

export default function FAQ() {
  const container = useRef(null);
  const [openIndex, setOpenIndex] = useState(-1);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    tl.from(".gsap-faq-heading", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(".gsap-faq-item", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.4")
    .from(".gsap-faq-cta", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");
  }, { scope: container });

  const toggleItem = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <section ref={container} className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={`gsap-faq-heading ${styles.label}`}>COMMON QUESTIONS</span>
          <h2 className={`gsap-faq-heading ${styles.heading}`}>Frequently asked questions</h2>
          
          <div className={styles.accordion}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`gsap-faq-item ${styles.item} ${isOpen ? styles.open : ''}`}
                >
                  <button 
                    className={styles.questionButton} 
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionText}>{faq.question}</span>
                    <svg 
                      className={styles.chevron} 
                      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  <div className={styles.answerWrapper}>
                    <div className={styles.answerInner}>
                      <p className={styles.answerText}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className={`gsap-faq-item ${styles.microTrust}`}>
            Still unsure? We&apos;ll walk you through everything, no pressure.
          </p>

          <div className={`gsap-faq-cta ${styles.ctaWrap}`}>
            <Link href="#contact" className={ctaStyles.ctaButton}>
              Get your free proposal{' '}
              <ArrowRight size={20} className={ctaStyles.arrow} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
