import React, { useEffect, useRef } from 'react';
import { Pointer } from 'reicon-react';

const INTERACTIVE = 'a, button, [role="button"], summary';

/**
 * Replaces the native arrow with Reicon's Pointer (https://reicon.dev/icons/pointer).
 * It tracks the real cursor with no lag, grows and turns lavender over anything clickable,
 * and squeezes on press. Only mounted for fine pointers (mouse / trackpad).
 */
export const CustomCursor: React.FC = () => {
  const box = useRef<HTMLDivElement>(null);
  const icon = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const el = box.current;
    const inner = icon.current;
    if (!el || !inner) return;
    document.documentElement.classList.add('custom-cursor');

    let hot = false;
    let down = false;
    const paint = () => {
      const s = down ? 0.82 : hot ? 1.35 : 1;
      inner.style.transform = `scale(${s})`;
      inner.style.color = hot ? '#9b8afb' : '#fafafa';
    };
    const onMove = (e: PointerEvent) => {
      // Icon tip sits ~3px/2px inside its 24px box; offset so the tip is the hotspot.
      el.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 3}px, 0)`;
      el.style.opacity = '1';
      const next = !!(e.target as Element | null)?.closest?.(INTERACTIVE);
      if (next !== hot) { hot = next; paint(); }
    };
    const onDown = () => { down = true; paint(); };
    const onUp = () => { down = false; paint(); };
    const onLeave = (e: MouseEvent) => { if (!e.relatedTarget) el.style.opacity = '0'; };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('pointerup', onUp, { passive: true });
    document.addEventListener('mouseout', onLeave, { passive: true });
    return () => {
      document.documentElement.classList.remove('custom-cursor');
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('pointerup', onUp);
      document.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return (
    <div ref={box} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0" style={{ willChange: 'transform' }}>
      <div ref={icon} className="origin-[4px_3px] text-[#fafafa] transition-[transform,color] duration-150 ease-out drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
        <Pointer size={26} weight="Filled" color="currentColor" />
      </div>
    </div>
  );
};
