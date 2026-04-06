import styles from './TrustBar.module.css';

const trustItems = [
  {
    main: "Built for trades & service businesses",
    sub: "— trusted by NZ clients"
  },
  {
    main: "90+ PageSpeed scores at launch",
    sub: "— tested on every project"
  },
  {
    main: "We recommend what’s right for you",
    sub: "— no upsells, no pressure"
  },
  {
    main: "1 month of support after launch",
    sub: "— included, no extra cost"
  }
];

export default function TrustBar() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {trustItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <p className={styles.text}>
              <span className={styles.main}>{item.main}</span>
              <span className={styles.sub}>{item.sub}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
