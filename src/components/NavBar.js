import React from 'react';
import styles from '../styles/NavBar.module.css';
import logo from '../assets/hrg-logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className={styles.header_container}>
      <div className={styles.logo}>
        <img src={logo} alt='Homeowners Resource Guide logo' />
      </div>
      <nav>
        <ul className={styles.nav_ul}>
          <li className={styles.nav_li}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.nav_li}>
            <Link to='/faq'>FAQ</Link>
          </li>
          <li className={styles.nav_li}>
            <Link to='/about'>About Us</Link>
          </li>
          <li className={styles.nav_li}>
            <Link to='/guide'>The Guide</Link>
          </li>
          <li className={styles.nav_li}>
            <Link to='/calculator'>Job Calculator</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
