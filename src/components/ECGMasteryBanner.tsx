import React from 'react';
import styles from './ECGMasteryBanner.module.css';

export default function ECGMasteryBanner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerText}>
        <span role="img" aria-label="chart">📈</span> Complete modules to progress on your <b>ECG Mastery Roadmap</b>
      </div>
    </div>
  );
}
