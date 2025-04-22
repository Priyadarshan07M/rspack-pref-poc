
import React from 'react';
import { TooltipSecondary } from './TooltipSecondary';

interface TooltipSecondaryMediumProps {
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

export const TooltipSecondaryMedium: React.FC<TooltipSecondaryMediumProps> = ({
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
    <TooltipSecondary
      className={`medium ${rounded ? 'rounded' : ''} ${outlined ? 'outlined' : ''} ${elevated ? 'elevated' : ''} ${className}`}
      style={style}
      onClick={onClick}
      title={title}
      size="medium"
      disabled={disabled}
      loading={loading}
    >
      {children}
    </TooltipSecondary>
  );
};
