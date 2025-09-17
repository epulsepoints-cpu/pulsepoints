import React from 'react';
import styles from './ArticleReader.module.css';
import { ArrowLeft } from 'lucide-react';

interface ArticleReaderProps {
  article: {
    title: string;
    content: string;
    category?: string;
  };
  onBack: () => void;
  showFabBack?: boolean;
}

const ArticleReader: React.FC<ArticleReaderProps> = ({ article, onBack, showFabBack }) => {
  return (
    <div className={styles.fullscreenReader}>
      <header className={styles.header}>
        <button className={styles.backLink} onClick={onBack} aria-label="Back to News">
          <ArrowLeft size={20} style={{ marginRight: 6 }} />
          <span>Back to News</span>
        </button>
        <div className={styles.title}>{article.title}</div>
      </header>
      {article.category && (
        <div className={styles.category}>{article.category}</div>
      )}
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
      {showFabBack && (
        <button className={styles.fabBack} onClick={onBack} aria-label="Back">
          <ArrowLeft size={22} />
        </button>
      )}
    </div>
  );
};

export default ArticleReader;
