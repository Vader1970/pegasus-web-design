import styles from './Process.module.css';

const steps = [
  {
    number: "01",
    title: "Discover",
    body: "We learn about your business, goals, and what success looks like."
  },
  {
    number: "02",
    title: "Plan",
    body: "We map out the structure, content strategy, and platform."
  },
  {
    number: "03",
    title: "Design",
    body: "We create the visual direction and layout."
  },
  {
    number: "04",
    title: "Build",
    body: "We develop, test, and refine everything."
  },
  {
    number: "05",
    title: "Launch & Support",
    body: "We go live - and stay around to help."
  }
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.heading}>
            From first conversation to<br className={styles.desktopBreak} /> live website in 3 to 6 weeks.
          </h2>
        </div>
        
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.body}>{step.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
