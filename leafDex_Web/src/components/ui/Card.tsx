import React, { ReactNode } from 'react';
import './Card.css';

interface CardProps {
  /** Main content to display in the card */
  children: ReactNode;
  /** Optional title for the card */
  title?: string;
  /** Optional footer content */
  footer?: ReactNode;
  /** Custom CSS class name */
  className?: string;
  /** Optional on-click handler */
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  footer,
  className = '',
  onClick,
}) => {
  return (
    <div className={`card ${className}`} onClick={onClick}>
      {title && <div className="card-header">{title}</div>}
      <div className="card-content">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
