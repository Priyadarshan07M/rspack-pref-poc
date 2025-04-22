
import React from 'react';
import { LayoutSecondary } from './LayoutSecondary';

interface LayoutSecondarySmallProps {
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

export const LayoutSecondarySmall: React.FC<LayoutSecondarySmallProps> = ({
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
    <LayoutSecondary
      className={`small ${rounded ? 'rounded' : ''} ${outlined ? 'outlined' : ''} ${elevated ? 'elevated' : ''} ${className}`}
      style={style}
      onClick={onClick}
      title={title}
      size="small"
      disabled={disabled}
      loading={loading}
    >
      {children}
    </LayoutSecondary>
  );
};
