
import React from 'react';
import { ToastLight } from './ToastLight';

interface ToastLightXLargeProps {
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

export const ToastLightXLarge: React.FC<ToastLightXLargeProps> = ({
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
    <ToastLight
      className={`xlarge ${rounded ? 'rounded' : ''} ${outlined ? 'outlined' : ''} ${elevated ? 'elevated' : ''} ${className}`}
      style={style}
      onClick={onClick}
      title={title}
      size="xlarge"
      disabled={disabled}
      loading={loading}
    >
      {children}
    </ToastLight>
  );
};
