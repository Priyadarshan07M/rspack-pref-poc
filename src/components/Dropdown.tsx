
import React from 'react';

interface DropdownProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  className = '',
  style = {},
  onClick,
  title,
}) => {
  return (
    <div className={`dropdown ${className}`} style={style} onClick={onClick}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};
