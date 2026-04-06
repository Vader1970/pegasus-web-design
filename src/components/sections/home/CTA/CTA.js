import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Ready to start?</h2>
          <p className={styles.paragraph}>
            We’ll review your situation and send a written proposal within 48 hours - at no cost and with no obligation to proceed.
          </p>
          <Link href="#contact" className={styles.link}>
            Get your free proposal <span className={styles.arrow}>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
