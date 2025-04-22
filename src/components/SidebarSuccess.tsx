
import React from 'react';
import { Sidebar } from './Sidebar';

interface SidebarSuccessProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
}

export const SidebarSuccess: React.FC<SidebarSuccessProps> = ({
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
      className={`success ${size} ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''} ${className}`}
      style={style}
      onClick={disabled || loading ? undefined : onClick}
      title={title}
    >
      {loading && <span className="loading-indicator">Loading...</span>}
      {children}
    </Sidebar>
  );
};
