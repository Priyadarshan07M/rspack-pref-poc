
import React from 'react';
import { DropdownWarning } from './DropdownWarning';

interface DropdownWarningLargeProps {
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

export const DropdownWarningLarge: React.FC<DropdownWarningLargeProps> = ({
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
    <DropdownWarning
      className={`large ${rounded ? 'rounded' : ''} ${outlined ? 'outlined' : ''} ${elevated ? 'elevated' : ''} ${className}`}
      style={style}
      onClick={onClick}
      title={title}
      size="large"
      disabled={disabled}
      loading={loading}
    >
      {children}
    </DropdownWarning>
  );
};
