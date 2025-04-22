
import React from 'react';

interface TableProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  title?: string;
}

export const Table: React.FC<TableProps> = ({
  children,
  className = '',
  style = {},
  onClick,
  title,
}) => {
  return (
    <div className={`table ${className}`} style={style} onClick={onClick}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
};
