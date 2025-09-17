import React from 'react';
import styles from './ModuleBanner.module.css';

export default function ModuleBanner({ onClick }: { onClick?: () => void }) {
  return (
    <div className={styles.moduleBanner}>
      <div className={styles.moduleBannerText}>
        📈 Complete modules to progress on your <b>ECG Mastery Roadmap</b>
      </div>
      {onClick && (
        <button className={styles.moduleBannerBtn} onClick={onClick}>
          Start Your Next Module
        </button>
      )}
    </div>
  );
}
