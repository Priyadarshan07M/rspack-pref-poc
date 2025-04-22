
import React from 'react';
import { Dropdown } from './Dropdown';

interface DropdownLightProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
}

export const DropdownLight: React.FC<DropdownLightProps> = ({
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
    <Dropdown
      className={`light ${size} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''} ${className}`}
      style={style}
      onClick={disabled || loading ? undefined : onClick}
      title={title}
    >
      {loading && <span className="loading-indicator">Loading...</span>}
      {children}
    </Dropdown>
  );
};
