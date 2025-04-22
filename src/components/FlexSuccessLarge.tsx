
import React from 'react';
import { FlexSuccess } from './FlexSuccess';

interface FlexSuccessLargeProps {
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

export const FlexSuccessLarge: React.FC<FlexSuccessLargeProps> = ({
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
    <FlexSuccess
      className={`large ${rounded ? 'rounded' : ''} ${outlined ? 'outlined' : ''} ${elevated ? 'elevated' : ''} ${className}`}
      style={style}
      onClick={onClick}
      title={title}
      size="large"
      disabled={disabled}
      loading={loading}
    >
      {children}
    </FlexSuccess>
  );
};
