import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Left: Image Column */}
          <div className={styles.imageColumn}>
            <Image
              src="/images/home/team/michele-and-daniel.png"
              alt="Michele and Daniel from Pegasus Web Design"
              fill
              className={styles.image}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Content Column */}
          <div className={styles.contentColumn}>
            <h2 className={styles.heading}>
              We design and build high-performing websites for service businesses.
            </h2>

            <p className={styles.paragraph}>
              We kept seeing the same thing - great trades and service businesses losing work online. Not because they weren’t good, but because their website didn’t show it. Michele and Daniel bring formal qualifications in web design, graphic design, and UX to every project. And we work exclusively in your world - trades, services, the businesses that make NZ run.
            </p>

            {/* Benefits List */}
            <ul className={styles.benefitsList}>
              {[
                "NZ-wide clients.",
                "9+ conversion-focused projects delivered.",
                "1 month support included after launch",
                "We recommend the right platform for your needs"
              ].map((benefit, index) => (
                <li key={index} className={styles.benefitsItem}>
                  <div className={styles.checkIconWrapper}>
                    <Image
                      src="/images/home/team/checked-purple-dark.png"
                      alt="Check Icon"
                      width={20}
                      height={20}
                      className={styles.icon}
                    />
                  </div>
                  <span className={styles.benefitText}>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Qualifications Panel */}
            <div className={styles.panel}>
              <h3 className={styles.panelHeading}>Qualifications</h3>

              <div className={styles.panelColumns}>
                {/* Daniel */}
                <div className={styles.personColumn}>
                  <h4 className={styles.personName}>Daniel</h4>
                  <ul className={styles.qualificationList}>
                    {[
                      "Diploma in Web Design & Production",
                      "Certificate in UX Design",
                      "Certificate in Web Development",
                      "Certificate in Business Studies (Information Systems)"
                    ].map((qual, idx) => (
                      <li key={idx} className={styles.qualificationItem}>
                        <div className={styles.knowledgeIconWrapper}>
                          <Image
                            src="/images/home/team/knowledge-purple-dark.png"
                            alt="Qualification Icon"
                            width={20}
                            height={20}
                            className={styles.icon}
                          />
                        </div>
                        <span className={styles.qualificationText}>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Michele */}
                <div className={styles.personColumn}>
                  <h4 className={styles.personName}>Michele</h4>
                  <ul className={styles.qualificationList}>
                    {[
                      "Diploma in Web Design & Production",
                      "Diploma in Graphic Design"
                    ].map((qual, idx) => (
                      <li key={idx} className={styles.qualificationItem}>
                        <div className={styles.knowledgeIconWrapper}>
                          <Image
                            src="/images/home/team/knowledge-purple-dark.png"
                            alt="Qualification Icon"
                            width={20}
                            height={20}
                            className={styles.icon}
                          />
                        </div>
                        <span className={styles.qualificationText}>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
