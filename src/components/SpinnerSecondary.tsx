
import React from 'react';
import { Spinner } from './Spinner';

interface SpinnerSecondaryProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
}

export const SpinnerSecondary: React.FC<SpinnerSecondaryProps> = ({
  children,
  className = '',
  style = {},
  onClick,
  title,
  size = 'medium',
  disabled = false,
  loading = false,
}) => {
  return (
    <Spinner
      className={`secondary ${size} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''} ${className}`}
      style={style}
      onClick={disabled || loading ? undefined : onClick}
      title={title}
    >
      {loading && <span className="loading-indicator">Loading...</span>}
      {children}
    </Spinner>
  );
};
