
import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style = {},
  onClick,
  title,
}) => {
  return (
    <div className={`card ${className}`} style={style} onClick={onClick}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};
