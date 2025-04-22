
import React from 'react';
import { ToastPrimary } from './ToastPrimary';

interface ToastPrimarySmallProps {
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

export const ToastPrimarySmall: React.FC<ToastPrimarySmallProps> = ({
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
    <ToastPrimary
      className={`small ${rounded ? 'rounded' : ''} ${outlined ? 'outlined' : ''} ${elevated ? 'elevated' : ''} ${className}`}
      style={style}
      onClick={onClick}
      title={title}
      size="small"
      disabled={disabled}
      loading={loading}
    >
      {children}
    </ToastPrimary>
  );
};
