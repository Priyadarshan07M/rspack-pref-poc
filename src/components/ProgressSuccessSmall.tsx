
import React from 'react';
import { ProgressSuccess } from './ProgressSuccess';

interface ProgressSuccessSmallProps {
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

export const ProgressSuccessSmall: React.FC<ProgressSuccessSmallProps> = ({
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
    <ProgressSuccess
      className={`small ${rounded ? 'rounded' : ''} ${outlined ? 'outlined' : ''} ${elevated ? 'elevated' : ''} ${className}`}
      style={style}
      onClick={onClick}
      title={title}
      size="small"
      disabled={disabled}
      loading={loading}
    >
      {children}
    </ProgressSuccess>
  );
};
