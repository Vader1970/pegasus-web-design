'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Every project is different, so we give honest, written quotes before any work starts. Most small business websites are $2,500 - $5,000. Landing pages start from $800. We’ll tell you exactly what’s included — no hidden fees, no surprises."
  },
  {
    question: "How long does a website take to build?",
    answer: "Most business websites are ready in 3 - 6 weeks from the day we receive your content. Landing pages can be turned around in 1 - 2 weeks. Every project gets a clear timeline upfront — we don’t leave you guessing."
  },
  {
    question: "Which platform is best - Framer, Webflow, or custom code?",
    answer: "It depends on your goals and how hands-on you want to be. Framer is great for businesses who want to update content themselves. Webflow is better for performance and design flexibility. Custom code suits unique requirements. We’ll recommend the right one after a free conversation — no upselling."
  },
  {
    question: "Do you only work with Christchurch businesses?",
    answer: "Not at all. We work with businesses across New Zealand and internationally. We handle everything online, so your location is never a barrier. Most of our clients are service businesses — wherever they are."
  },
  {
    question: "What do I need to get started?",
    answer: "Not much. We guide you through everything. To get started, we just need a brief overview of your business and what you’re trying to achieve. We can help with copy, photos, and direction if you’re starting from scratch — you don’t need to have everything ready."
  },
  {
    question: "Do you offer support?",
    answer: "Yes. We offer hosting and support plans that include updates, backups, SEO, security monitoring, and priority support."
  }
];

export default function FAQ() {
  // All items closed by default
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleItem = (index) => {
    // Toggles closed if clicking the currently open item, otherwise opens the requested item
    setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Frequently asked questions</h2>
          
          <div className={styles.accordion}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`${styles.item} ${isOpen ? styles.open : ''}`}
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

        </div>
      </div>
    </section>
  );
}
