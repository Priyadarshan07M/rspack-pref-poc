
import React from 'react';
import { SidebarPrimary } from './SidebarPrimary';

interface SidebarPrimaryLargeProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  elevated?: boolean;
}

export const SidebarPrimaryLarge: React.FC<SidebarPrimaryLargeProps> = ({
  children,
  className = '',
  style = {},
  onClick,
  title,
  disabled = false,
  loading = false,
  rounded = false,
  outlined = false,
  elevated = false,
}) => {
  return (
    <SidebarPrimary
      className={`large ${rounded ? 'rounded' : ''} ${outlined ? 'outlined' : ''} ${elevated ? 'elevated' : ''} ${className}`}
      style={style}
      onClick={onClick}
      title={title}
      size="large"
      disabled={disabled}
      loading={loading}
    >
      {children}
    </SidebarPrimary>
  );
};
