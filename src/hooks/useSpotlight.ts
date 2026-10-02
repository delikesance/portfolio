import { useEffect, type RefObject } from 'react';

/**
 * Reveal-by-light: `reveal` is a copy of the headline in full ink, stacked on a pale copy.
 * A soft mask over it follows the cursor with a little lag (or drifts on its own when the
 * cursor is away), so the text reads as lit by a lamp. No layout change: both copies are identical.
 */
export function useSpotlight(reveal: RefObject<HTMLElement>) {
  useEffect(() => {
    const rev = reveal.current;
    if (!rev) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = { x: 0, y: 0, seen: false };
    const p = { x: 0, y: 0, r: 0, init: false };
    let last = 0;
    let mask = '';
    let raf = 0;

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.seen = true; };
    document.addEventListener('mousemove', onMove, { passive: true });

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(48, last ? now - last : 16);
      last = now;
      const r = rev.getBoundingClientRect();
      const pad = 120;
      const over = mouse.seen && mouse.x > r.left - pad && mouse.x < r.right + pad && mouse.y > r.top - pad && mouse.y < r.bottom + pad;
      let tx: number, ty: number, tr: number;
      if (over) {
        tx = mouse.x - r.left; ty = mouse.y - r.top; tr = 230;
      } else {
        const t = reduce ? 0 : now; // idle: the light drifts on its own
        tx = r.width * (0.5 + 0.34 * Math.sin(t / 2300));
        ty = r.height * (0.5 + 0.3 * Math.sin(t / 1700 + 1.2));
        tr = 170;
      }
      if (!p.init) { p.x = tx; p.y = ty; p.r = tr; p.init = true; }
      const k = 1 - Math.exp(-dt / (over ? 110 : 260));
      p.x += (tx - p.x) * k;
      p.y += (ty - p.y) * k;
      p.r += (tr - p.r) * (1 - Math.exp(-dt / 220));
      const m = `radial-gradient(${p.r.toFixed(1)}px circle at ${p.x.toFixed(1)}px ${p.y.toFixed(1)}px, #000 0%, #000 45%, transparent 100%)`;
      if (m !== mask) { mask = m; rev.style.webkitMaskImage = m; rev.style.maskImage = m; }
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
    };
  }, [reveal]);
}
