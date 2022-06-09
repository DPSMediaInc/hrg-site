import React from 'react';
import styles from '../styles/Different.module.css';

export default function Different() {
  return (
    <div className={styles.differentContainer}>
      <h3 className={styles.differentHeader}>
        What makes the Homeowner's Referral Guide different?
      </h3>
      <p className={styles.differentText}>
        The Homeowner's Referral Guide is the only product on the market
        designed exclusively to help senior homeowners find high quality,
        pre-screened contractors and service professionals in 50 categories of
        home-related services&mdash;everything they need to repair, maintain, or
        improve their homes!
      </p>
    </div>
  );
}
