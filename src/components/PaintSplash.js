import React from 'react';
import paintImg from '../assets/paint-brush.png';
import styles from '../styles/PaintSplash.module.css';

export default function PaintSplash() {
  return (
    <div className={styles.paintSplash}>
      <img className={styles.paintImg} src={paintImg} alt='Paint Splash' />
      <p className={styles.paintText}>
        Keep your name in front of your{' '}
        <span className={styles.ital}>best</span> potential
        customers&mdash;senior homeowners. Seniors prefer print to all other
        media and want this high quality, big print directory of pre-screened
        service providers.
      </p>
    </div>
  );
}
