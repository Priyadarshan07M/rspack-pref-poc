
import React from 'react';
import { Sidebar } from './Sidebar';

interface SidebarLightProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
}

export const SidebarLight: React.FC<SidebarLightProps> = ({
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
    <Sidebar
      className={`light ${size} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''} ${className}`}
      style={style}
      onClick={disabled || loading ? undefined : onClick}
      title={title}
    >
      {loading && <span className="loading-indicator">Loading...</span>}
      {children}
    </Sidebar>
  );
};
