
import React from 'react';
import { ToggleLight } from './ToggleLight';

interface ToggleLightMediumProps {
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

export const ToggleLightMedium: React.FC<ToggleLightMediumProps> = ({
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
    <ToggleLight
      className={`medium ${rounded ? 'rounded' : ''} ${outlined ? 'outlined' : ''} ${elevated ? 'elevated' : ''} ${className}`}
      style={style}
      onClick={onClick}
      title={title}
      size="medium"
      disabled={disabled}
      loading={loading}
    >
      {children}
    </ToggleLight>
  );
};
