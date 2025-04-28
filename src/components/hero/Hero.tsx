import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kyle</h1>
        <p className={styles.description}>I'm a software engineer with a passion for creating beautiful websites</p>
        <a className={styles.contactBtn} href="mailto:kylectrent@gmail.com">Contact Me</a>
      </div>
      <img className={styles.heroImg} src={getImageUrl('hero/hero.png')} alt="hero-image"/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
