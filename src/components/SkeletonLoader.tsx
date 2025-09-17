import React from 'react';
import './SkeletonLoader.css';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = '100%',
  height = '1.5rem',
  borderRadius = '0.5rem',
  style = {},
  className = '',
}) => (
  <div
    className={`skeleton-loader ${className}`}
    style={{ width, height, borderRadius, ...style }}
    aria-busy="true"
    aria-label="Loading..."
  />
);

export default SkeletonLoader;
