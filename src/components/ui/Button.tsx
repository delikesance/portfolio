import React, { useRef } from 'react';
import { ArrowRight } from 'reicon-react';

interface Props {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

/**
 * Pill button with an ink-fill hover: a lavender circle grows from where the cursor
 * entered and retreats toward where it left, while the button leans toward the cursor.
 */
export const Button: React.FC<Props> = ({ href, variant = 'primary', children }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setOrigin = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || reduce) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) * 0.12;
    const dy = (e.clientY - r.top - r.height / 2) * 0.25;
    el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
  };

  const onLeave = (e: React.PointerEvent<HTMLAnchorElement>) => {
    setOrigin(e);
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <a
      ref={ref}
      href={href}
      className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
      onPointerEnter={setOrigin}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <span className="btn-label">{children}</span>
      <span className="btn-arrow" aria-hidden="true">
        <ArrowRight size={18} color="currentColor" />
      </span>
    </a>
  );
};
