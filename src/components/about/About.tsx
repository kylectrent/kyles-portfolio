import styles from './About.module.css';

import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src={getImageUrl('about/about.png')}
          alt="about-image"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              className={styles.aboutItemImg}
              src={getImageUrl('about/cursorIcon.png')}
              alt="cursor-icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.aboutItemImg}
              src={getImageUrl('about/serverIcon.png')}
              alt="server-icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and API's
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.aboutItemImg}
              src={getImageUrl('about/qualityIcon.png')}
              alt="quality-icon"
            />
            <div className={styles.aboutItemText}>
              <h3>QA Automation</h3>
              <p>
                Detail-driven QA Automation Engineer with expertise in ensuring
                seamless performance across POS systems
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.aboutItemImg}
              src={getImageUrl('about/sharepointIcon.png')}
              alt="sharepoint-icon"
            />
            <div className={styles.aboutItemText}>
              <h3>SharePoint Dev</h3>
              <p>
                I design and build beautiful, custom SharePoint websites that
                are both visually engaging and tailored to each team's unique
                workflow
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
