import React from 'react';

interface CardProps {
  as?: 'div' | 'a';
  /** Leans a few px toward the cursor on hover (see useInkEngine). */
  lean?: boolean;
  className?: string;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

/**
 * Card surface. The cursor's scribble trail is redrawn inside it as a soft, grainy light
 * (canvas + grain layers sit under the content; useInkEngine paints them).
 */
export const Card: React.FC<CardProps> = ({ as = 'div', lean, className = '', children, ...rest }) =>
  React.createElement(
    as,
    { ...rest, 'data-light': '', 'data-lean': lean ? '' : undefined, className: `card ${className}` },
    <canvas data-light-canvas="" aria-hidden="true" className="card-light" />,
    <span aria-hidden="true" className="card-grain" />,
    children,
  );
