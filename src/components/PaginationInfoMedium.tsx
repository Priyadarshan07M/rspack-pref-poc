
import React from 'react';
import { PaginationInfo } from './PaginationInfo';

interface PaginationInfoMediumProps {
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

export const PaginationInfoMedium: React.FC<PaginationInfoMediumProps> = ({
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
    <PaginationInfo
      className={`medium ${rounded ? 'rounded' : ''} ${outlined ? 'outlined' : ''} ${elevated ? 'elevated' : ''} ${className}`}
      style={style}
      onClick={onClick}
      title={title}
      size="medium"
      disabled={disabled}
      loading={loading}
    >
      {children}
    </PaginationInfo>
  );
};
