'use client';

import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Intro */}
          <div className={styles.introColumn}>
            <h2 className={styles.heading}>Get more work</h2>
            <p className={styles.paragraph}>
              If your current website doesn't feel right - or you don't have one at all — we can help you build something that does.
            </p>
          </div>

          {/* Right Column: Form Panel */}
          <div className={styles.formColumn}>
            <div className={styles.formPanel}>
              <p className={styles.formIntro}>
                Tell us about your project and timeline. No obligation — just a conversation.
              </p>

              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input type="text" id="name" name="name" className={styles.input} />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input type="email" id="email" name="email" className={styles.input} />
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="projectType" className={styles.label}>Project type</label>
                  <select id="projectType" name="projectType" className={styles.select} defaultValue="">
                    <option value="" disabled>Select a project type</option>
                    <option value="business-website">Business website</option>
                    <option value="landing-page">Landing page</option>
                    <option value="website-redesign">Website redesign</option>
                    <option value="platform-guidance">Platform guidance</option>
                    <option value="not-sure-yet">Not sure yet</option>
                  </select>
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="help" className={styles.label}>What do you need help with?</label>
                  <textarea 
                    id="help" 
                    name="help" 
                    className={styles.textarea} 
                    placeholder="Tell us what you need help with&hellip;"
                    rows={4}
                  ></textarea>
                </div>

                <div className={styles.testimonialBlock}>
                  <span className={styles.stars}>★★★★★</span>
                  <p className={styles.testimonialText}>
                    “They genuinely cared about getting everything right”<br />
                    <span className={styles.testimonialAuthor}>-Mac Auto Services, Christchurch</span>
                  </p>
                </div>

                <p className={styles.supportLine}>
                  We’ll send your written proposal within 48 hours. No obligation.
                </p>

                <button type="submit" className={styles.submitButton}>
                  Get My Proposal <span className={styles.arrow}>&rarr;</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
