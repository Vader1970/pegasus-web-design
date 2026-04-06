import Image from 'next/image';
import styles from './LogoStrip.module.css';

const logos = [
  { src: "/images/home/logos/tilyards.jpg", alt: "Tilyards" },
  { src: "/images/home/logos/mac-auto-services.png", alt: "Mac Auto Services" },
  { src: "/images/home/logos/filtration-station.png", alt: "Filtration Station" },
  { src: "/images/home/logos/autistic-innovations.png", alt: "Autistic Innovations" },
  { src: "/images/home/logos/burst-diital.png", alt: "Burst Digital" },
  { src: "/images/home/logos/master-kerb.png", alt: "Master Kerb & Concrete" },
  { src: "/images/home/logos/gee-quiz.png", alt: "Gee Quiz" },
  { src: "/images/home/logos/innlist.png", alt: "Innlist" },
];

export default function LogoStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.heading}>Businesses we've worked with</h2>
        </div>
        
        <div className={styles.grid}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <Image 
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
