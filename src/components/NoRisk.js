import React from 'react';
import repairImg from '../assets/home-repair.jpg';
import styles from '../styles/NoRisk.module.css';

export default function NoRisk() {
  return (
    <div className={styles.noRiskContainer}>
      <img src={repairImg} alt='Home Repair' />
      <div className={styles.noRiskText}>
        <h4 className={styles.noRiskHeader}>No Risk or Worries</h4>
        <p>
          No paid advertising, no monthly fees, and no contracts! Contractors
          and service providers only pay for the jobs they receive through the
          Homeowner's Referral Guide. It's that simple!
        </p>
      </div>
    </div>
  );
}
