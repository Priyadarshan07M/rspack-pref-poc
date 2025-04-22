
import React from 'react';
import { SelectSuccess } from './SelectSuccess';

interface SelectSuccessXLargeProps {
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

export const SelectSuccessXLarge: React.FC<SelectSuccessXLargeProps> = ({
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
    <SelectSuccess
      className={`xlarge ${rounded ? 'rounded' : ''} ${outlined ? 'outlined' : ''} ${elevated ? 'elevated' : ''} ${className}`}
      style={style}
      onClick={onClick}
      title={title}
      size="xlarge"
      disabled={disabled}
      loading={loading}
    >
      {children}
    </SelectSuccess>
  );
};
