import Image from 'next/image';
import Link from 'next/link';
import styles from './RecentWork.module.css';

const secondaryProjects = [
  {
    type: "WEBSITE",
    title: "Burst Digital",
    description: "Modern brand website for a digital services company.",
    link: "#",
    image: "/images/home/projects/burst-digital-mock-up.png"
  },
  {
    type: "WEBSITE",
    title: "Autistic Innovations",
    description: "Purpose-driven website with accessibility focus.",
    link: "#",
    image: "/images/home/projects/autistic-innovations-maoc-up.png"
  },
  {
    type: "WEBSITE",
    title: "Cleghorn Roofing",
    description: "Professional website for a roofing business.",
    link: "#",
    image: "/images/home/projects/cleghorn-mock-up.png"
  },
  {
    type: "LANDING PAGE",
    title: "Tilyard Plumbing",
    description: "Custom-coded landing page built inside of Wix.",
    link: "#",
    image: "/images/home/projects/tilyard-plumbing-mock-up.png"
  },
  {
    type: "LANDING PAGE",
    title: "Filtration Station",
    description: "Service landing page within a Shopify store.",
    link: "#",
    image: "/images/home/projects/filtration-station-mock-up.png"
  },
  {
    type: "LANDING PAGE",
    title: "Innlist Holiday Homes",
    description: "Custom-coded page built within platform constraints.",
    link: "#",
    image: "/images/home/projects/innlist-mock-up.png"
  },
  {
    type: "LANDING PAGE",
    title: "Master Kerb",
    description: "High-converting landing page for a service business.",
    link: "#",
    image: "/images/home/projects/master-kerb-mock-up.png"
  },
  {
    type: "LANDING PAGE",
    title: "Gee Quiz",
    description: "Clean landing page designed to drive engagement.",
    link: "#",
    image: "/images/home/projects/gee-quiz-mock-up.png"
  }
];

export default function RecentWork() {
  return (
    <section className={styles.section} id="work">
      <div className={styles.container}>

        {/* Part 1: Heading Area */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Recent work</h2>
          <p className={styles.intro}>
            Real projects for real businesses — built to bring in work
          </p>
        </div>

        {/* Part 2: Featured Project Row */}
        <div className={styles.featuredRow}>
          <div className={styles.featuredImageWrapper}>
            <Image
              src="/images/home/projects/mac-auto-mock-up.webp"
              alt="Mac Auto Services Website"
              fill
              className={styles.projectImage}
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
          <div className={styles.featuredContent}>
            <span className={styles.typeLabel}>WEBSITE</span>
            <h3 className={styles.featuredTitle}>Mac Auto Services</h3>
            <p className={styles.featuredDescription}>
              Conversion-focused website for an automotive workshop.
            </p>
            <Link href="/work/mac-auto-services" className={styles.projectLink}>
              View site <span className={styles.arrow}>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Part 3: Secondary Project Grid */}
        <div className={styles.secondaryGrid}>
          {secondaryProjects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.typeLabel}>{project.type}</span>
                <h4 className={styles.cardTitle}>{project.title}</h4>
                <p className={styles.cardDescription}>{project.description}</p>
                <Link href={project.link} className={styles.projectLink}>
                  View site <span className={styles.arrow}>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
