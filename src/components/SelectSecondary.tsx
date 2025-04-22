
import React from 'react';
import { Select } from './Select';

interface SelectSecondaryProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
}

export const SelectSecondary: React.FC<SelectSecondaryProps> = ({
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
    <Select
      className={`secondary ${size} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''} ${className}`}
      style={style}
      onClick={disabled || loading ? undefined : onClick}
      title={title}
    >
      {loading && <span className="loading-indicator">Loading...</span>}
      {children}
    </Select>
  );
};
