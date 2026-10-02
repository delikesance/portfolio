import { useEffect, type RefObject } from 'react';

const OFF = 'radial-gradient(0px circle at 0 0, #000, transparent)';

/**
 * The headline is a pale copy with a dark copy stacked on it (`reveal`); a mask decides where the dark shows.
 * - Mouse: a soft lamp follows the cursor with a little lag (drifting on its own when the cursor is away).
 * - Touch (coarse pointer): the finger paints dark ink into the text, thick and soft; the ink dries and
 *   fades over a few seconds. A scripted stroke plays once on load as a hint.
 * Both copies are identical, so nothing shifts.
 */
export function useHeroReveal(
  hero: RefObject<HTMLElement>,
  reveal: RefObject<HTMLElement>,
  hint: RefObject<HTMLElement>,
) {
  useEffect(() => {
    const host = hero.current;
    const rev = reveal.current;
    if (!host || !rev) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    let raf = 0;
    let last = 0;
    const cleanups: Array<() => void> = [];

    const setMask = (m: string) => { rev.style.webkitMaskImage = m; rev.style.maskImage = m; };

    if (!coarse) {
      const mouse = { x: 0, y: 0, seen: false };
      const p = { x: 0, y: 0, r: 0, init: false };
      let mask = '';
      const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.seen = true; };
      document.addEventListener('mousemove', onMove, { passive: true });
      cleanups.push(() => document.removeEventListener('mousemove', onMove));

      const frame = (now: number) => {
        raf = requestAnimationFrame(frame);
        const dt = Math.min(48, last ? now - last : 16);
        last = now;
        const r = rev.getBoundingClientRect();
        const pad = 120;
        const over = mouse.seen && mouse.x > r.left - pad && mouse.x < r.right + pad && mouse.y > r.top - pad && mouse.y < r.bottom + pad;
        let tx: number, ty: number, tr: number;
        if (over) { tx = mouse.x - r.left; ty = mouse.y - r.top; tr = 230; }
        else {
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
        if (m !== mask) { mask = m; setMask(m); }
      };
      raf = requestAnimationFrame(frame);
    } else {
      const cv = document.createElement('canvas'); // off-DOM: only used to build the mask image
      const ctx = cv.getContext('2d');
      if (!ctx) return;
      const ink = { hx: 0, hy: 0, tx: 0, ty: 0, down: false, init: false, until: 0, cleared: true, touched: false, introDone: false, t0: performance.now() + 800 };
      const pos = (e: PointerEvent): [number, number] => {
        const r = rev.getBoundingClientRect();
        return [e.clientX - r.left, e.clientY - r.top];
      };
      const onDown = (e: PointerEvent) => {
        const [x, y] = pos(e);
        ink.down = true; ink.touched = true; ink.tx = x; ink.ty = y; ink.hx = x; ink.hy = y; ink.init = false;
        try { host.setPointerCapture(e.pointerId); } catch { /* not capturable */ }
        if (hint.current) hint.current.style.opacity = '0';
      };
      const onMove = (e: PointerEvent) => { if (ink.down) { const [x, y] = pos(e); ink.tx = x; ink.ty = y; } };
      const onUp = () => { ink.down = false; };
      host.addEventListener('pointerdown', onDown);
      host.addEventListener('pointermove', onMove);
      host.addEventListener('pointerup', onUp);
      host.addEventListener('pointercancel', onUp);
      cleanups.push(() => {
        host.removeEventListener('pointerdown', onDown);
        host.removeEventListener('pointermove', onMove);
        host.removeEventListener('pointerup', onUp);
        host.removeEventListener('pointercancel', onUp);
      });

      const frame = (now: number) => {
        raf = requestAnimationFrame(frame);
        const dt = Math.min(48, last ? now - last : 16);
        last = now;
        const r = rev.getBoundingClientRect();
        const w = Math.max(1, Math.round(r.width));
        const h = Math.max(1, Math.round(r.height));
        if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }

        let drawing = ink.down;
        if (!ink.touched && !ink.introDone && !reduce) {
          const tt = (now - ink.t0) / 2800;
          if (tt > 1) ink.introDone = true;
          else if (tt >= 0) {
            ink.tx = w * (0.5 + 0.44 * Math.sin(tt * Math.PI * 7));
            ink.ty = h * (0.06 + 0.88 * tt);
            drawing = true;
            if (!ink.init) { ink.hx = ink.tx; ink.hy = ink.ty; }
          }
        }
        if (drawing) {
          const k = 1 - Math.exp(-dt / 40);
          const px = ink.hx;
          const py = ink.hy;
          ink.hx += (ink.tx - ink.hx) * k;
          ink.hy += (ink.ty - ink.hy) * k;
          ctx.globalCompositeOperation = 'source-over';
          ctx.strokeStyle = '#000'; ctx.fillStyle = '#000';
          ctx.shadowColor = '#000'; ctx.shadowBlur = 14;
          ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.lineWidth = 34;
          if (!ink.init) { ctx.beginPath(); ctx.arc(ink.hx, ink.hy, 17, 0, Math.PI * 2); ctx.fill(); ink.init = true; }
          else if (Math.hypot(ink.hx - px, ink.hy - py) > 0.2) { ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(ink.hx, ink.hy); ctx.stroke(); }
          ink.until = now + 9000; ink.cleared = false;
        }
        if (now < ink.until) {
          // The ink dries: fade it a little every frame, then hand the canvas to the mask.
          ctx.shadowBlur = 0;
          ctx.globalCompositeOperation = 'destination-out';
          ctx.fillStyle = 'rgba(0,0,0,0.012)';
          ctx.fillRect(0, 0, w, h);
          setMask(`url(${cv.toDataURL()})`);
        } else if (!ink.cleared) {
          ink.cleared = true;
          setMask(OFF);
          ctx.clearRect(0, 0, w, h);
        }
      };
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      cleanups.forEach((fn) => fn());
    };
  }, [hero, reveal, hint]);
}
