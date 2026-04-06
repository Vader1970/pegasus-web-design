import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          
          <div className={styles.logoWrapper}>
            <Image 
              src="/images/shared/pegasus-logo.png"
              alt="Pegasus Web Design Logo"
              fill
              sizes="(max-width: 768px) 160px, 200px"
              className={styles.logo}
            />
          </div>
          
          <nav className={styles.nav}>
            <Link href="#work" className={styles.link}>Work</Link>
            <Link href="#services" className={styles.link}>Services</Link>
            <Link href="#case-study" className={styles.link}>Case Study</Link>
            <Link href="#about" className={styles.link}>About</Link>
          </nav>
          
        </div>
        
        <hr className={styles.divider} />
        
        <div className={styles.copyright}>
          <p>&copy; 2026 Pegasus Web Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
