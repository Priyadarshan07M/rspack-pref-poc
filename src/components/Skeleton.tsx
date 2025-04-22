
import React from 'react';

interface SkeletonProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  children,
  className = '',
  style = {},
  onClick,
  title,
}) => {
  return (
    <div className={`skeleton ${className}`} style={style} onClick={onClick}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};
