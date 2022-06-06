import React from 'react';
import styles from '../styles/MarketInfo.module.css';

export default function MarketInfo() {
  return (
    <div className={styles.marketInfo}>
      <div className={styles.marketInfoContainer}>
        <h3 className={styles.marketType}>The Right Homes</h3>
        <p className={styles.marketText}>
          The Referral Guide will be mailed to 100,000 high value, single-family
          homes in St. Louis County.
        </p>
      </div>
      <div className={styles.marketInfoContainer}>
        <h3 className={styles.marketType}>The Right Homeowners</h3>
        <p className={styles.marketText}>
          The Referral Guide will be mailed to seniors 55 and older. Seniors
          prefer print to any other media and spend more on their homes than any
          other consumer group.
        </p>
      </div>
      <div className={styles.marketInfoContainer}>
        <h3 className={styles.marketType}>The Right Market</h3>
        <p className={styles.marketText}>
          The Referral Guide will be distributed to high value, senior-owned
          homes in St. Louis County. High value homes mean high-value
          opportunity for contractors and service providers.
        </p>
      </div>
    </div>
  );
}
