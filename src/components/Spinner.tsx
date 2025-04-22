
import React from 'react';

interface SpinnerProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  children,
  className = '',
  style = {},
  onClick,
  title,
}) => {
  return (
    <div className={`spinner ${className}`} style={style} onClick={onClick}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};
