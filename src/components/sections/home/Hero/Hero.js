import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left: Content */}
        <div className={styles.content}>
          
          {/* Trust Line */}
          <div className={styles.trustLine}>
            <div className={styles.trustRow}>
              <span className={styles.stars}>★★★★★</span>
              <span className={styles.trustText}>+15 new clients in the first month of going live.</span>
            </div>
            <div className={styles.author}>— Mac Auto Services, Christchurch</div>
          </div>

          <h1 className={styles.heading}>
            Your Web Studio for Trades & Service Businesses.
          </h1>

          <p className={styles.paragraph}>
            Your site will load fast, look sharp, and bring in real work.
            <br className={styles.desktopBreak} />
            No jargon. No templates. No surprises.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#contact" className={styles.ctaButton}>
              Get your free proposal
              <span className={styles.arrow}>&rarr;</span>
            </Link>
            <p className={styles.smallText}>
              Free. Written. Delivered within 48 hours.
            </p>
          </div>
          
        </div>

        {/* Right: Image */}
        <div className={styles.imageColumn}>
          <div className={styles.glow}></div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/home/hero/hero-transparent.png"
              alt="Pegasus Web Design Mockup"
              fill
              priority
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.heroImage}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
