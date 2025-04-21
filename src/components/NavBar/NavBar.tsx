import { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from './NavBar.module.css';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuyBtn}
          src={
            menuOpen
              ? getImageUrl('nav/closeMenu.svg')
              : getImageUrl('nav/menuIcon.svg')
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        ></img>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
