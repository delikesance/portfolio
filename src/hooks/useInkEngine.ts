import { useEffect, type RefObject } from 'react';

interface Point { x: number; y: number; t: number }
interface Sample { x: number; y: number; s: number }

const LIFE = 900;
const RADIUS = 15;
const LOW = 4; // card light canvases render at 1/LOW resolution (cheap, and naturally soft)
const REACH = 420; // px behind the head over which the trail's width/brightness falls off
const TAPER = 70; // px over which the very end of the tail thins to nothing
const BLEED = 32; // card light canvases extend this far past the card so the blur has no dark edge

/**
 * One ink trail for the whole page. A smoothed head follows the cursor and leaves a tapered
 * scribble that retracts into it. Behind the page it is drawn as ink (fixed canvas); inside every
 * `[data-light]` card, where the card's own background would hide it, the same trail is redrawn
 * wider onto the card's `canvas[data-light-canvas]` so the scribble becomes a light source in that
 * card. `[data-lean]` cards also lean a few px toward the cursor. `#heroGrid` gets a lavender
 * grid light under the head. Everything runs in one rAF loop that sleeps when nothing moves.
 */
export function useInkEngine(page: RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const cv = page.current;
    if (!cv) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-light]'));
    const lean = new Map<HTMLElement, number>();
    const dirty = new Map<HTMLElement, boolean>();

    const mouse = { x: 0, y: 0, seen: false, btn: null as HTMLElement | null };
    let charge = 0; // light absorbed by a hovered button (decays); drives the button's glow
    let litBtn: HTMLElement | null = null;
    const head = { x: 0, y: 0, init: false };
    const pts: Point[] = [];
    let spot = 0;
    let last = 0;
    let mask = '';
    let raf = 0;

    const stamp = (c: CanvasRenderingContext2D, x: number, y: number, s: number, grow: number, mul: number) => {
      const k = Math.pow(s, 1.4);
      c.fillStyle = `rgb(${Math.round(9 + 146 * k)},${Math.round(9 + 129 * k)},${Math.round(11 + 240 * k)})`;
      c.beginPath();
      c.arc(x, y, Math.max(0.2, RADIUS * mul * grow * Math.pow(s, 1.1)), 0, Math.PI * 2);
      c.fill();
    };

    const frame = (now: number) => {
      const dt = Math.min(48, last ? now - last : 16);
      last = now;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // The trail lives in page coordinates so it stays put on the page while you scroll.
      const sx = window.scrollX;
      const sy = window.scrollY;
      let busy = false;

      // A hovered button sucks the light in: the head is drawn to its centre and the trail contracts into it.
      const btn = mouse.seen && mouse.btn && mouse.btn.isConnected ? mouse.btn : null;
      const br = btn ? btn.getBoundingClientRect() : null;
      const bx = br ? br.left + br.width / 2 + sx : 0;
      const by = br ? br.top + br.height / 2 + sy : 0;
      let absorbed = 0;

      // head
      if (mouse.seen) {
        const tx = br ? bx : mouse.x + sx;
        const ty = br ? by : mouse.y + sy;
        if (!head.init) { head.x = tx; head.y = ty; head.init = true; }
        const k = 1 - Math.exp(-dt / (br ? 90 : 55));
        const px = head.x;
        const py = head.y;
        head.x += (tx - head.x) * k;
        head.y += (ty - head.y) * k;
        const lp = pts[pts.length - 1];
        if (!lp || Math.hypot(head.x - lp.x, head.y - lp.y) > 0.8) pts.push({ x: head.x, y: head.y, t: now });
        if (Math.hypot(head.x - px, head.y - py) > 0.05 || Math.hypot(tx - head.x, ty - head.y) > 0.4) busy = true;
      }
      if (br) {
        // The tail reels in along the path (not the whole shape at once), so the light
        // visibly retracts into the button, which gets brighter as it takes it in.
        let eat = 1.9 * dt;
        while (eat > 0 && pts.length > 1) {
          const a = pts[0];
          const b = pts[1];
          const seg = Math.hypot(b.x - a.x, b.y - a.y);
          if (seg <= eat) { eat -= seg; absorbed += seg; pts.shift(); }
          else { a.x += ((b.x - a.x) / seg) * eat; a.y += ((b.y - a.y) / seg) * eat; absorbed += eat; eat = 0; }
        }
      }
      charge = charge * Math.exp(-dt / 450) + absorbed * 0.006;
      const level = Math.min(1, charge);
      if (litBtn && litBtn !== btn) litBtn.style.setProperty('--absorb', '0');
      if (btn) { btn.style.setProperty('--absorb', level.toFixed(3)); litBtn = btn; } else if (litBtn && level < 0.01) litBtn = null;
      else if (litBtn) litBtn.style.setProperty('--absorb', level.toFixed(3));
      if (level > 0.01 || absorbed > 0) busy = true;
      while (pts.length && now - pts[0].t > LIFE) pts.shift();
      if (pts.length) busy = true;

      // hero grid light
      const gr = document.getElementById('heroGrid');
      if (gr) {
        const r = gr.getBoundingClientRect();
        const over = mouse.seen && mouse.y >= r.top && mouse.y <= r.bottom;
        spot += ((over ? 1 : 0) - spot) * (1 - Math.exp(-dt / 160));
        const m = spot > 0.01
          ? `radial-gradient(${(260 * spot).toFixed(1)}px circle at ${(head.x - sx - r.left).toFixed(1)}px ${(head.y - sy - r.top).toFixed(1)}px, #000, transparent)`
          : 'radial-gradient(0px circle at 0px 0px, #000, transparent)';
        if (m !== mask) { mask = m; gr.style.webkitMaskImage = m; gr.style.maskImage = m; }
        if (spot > 0.01) busy = true;
      }

      // trail geometry, shared by every canvas
      const n = pts.length;
      const samples: Sample[] = [];
      let grow = 0;
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      if (n >= 2) {
        const cum = [0];
        for (let i = 1; i < n; i++) cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
        const total = cum[n - 1];
        if (total >= 3) {
          // Width and brightness depend on absolute distance from the head and from the tail end,
          // never on the trail's total length, so a retracting tail erodes pixel by pixel
          // instead of the whole shape rescaling.
          grow = 1;
          for (let i = 1; i < n; i++) {
            const d = cum[i] - cum[i - 1];
            const steps = Math.max(1, Math.ceil(d / 2));
            for (let j = 1; j <= steps; j++) {
              const f = j / steps;
              // Back to viewport coordinates for drawing.
              const x = pts[i - 1].x + (pts[i].x - pts[i - 1].x) * f - sx;
              const y = pts[i - 1].y + (pts[i].y - pts[i - 1].y) * f - sy;
              const dTail = cum[i - 1] + d * f;
              const e = Math.min(1, dTail / TAPER);
              const near = Math.max(0, 1 - (total - dTail) / REACH);
              samples.push({ x, y, s: e * e * (3 - 2 * e) * Math.pow(near, 0.8) });
              if (x < minX) minX = x; if (x > maxX) maxX = x;
              if (y < minY) minY = y; if (y > maxY) maxY = y;
            }
          }
        }
      }

      // page ink (behind content)
      const dpr = window.devicePixelRatio || 1;
      const cw = Math.round(vw * dpr);
      const ch = Math.round(vh * dpr);
      if (cv.width !== cw || cv.height !== ch) { cv.width = cw; cv.height = ch; }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, vw, vh);
      ctx.globalCompositeOperation = 'lighten';
      for (const p of samples) stamp(ctx, p.x, p.y, p.s, grow, 1);

      // card light + lean
      const reach = RADIUS * 2.3 + 40;
      for (const card of cards) {
        const r = card.getBoundingClientRect();
        const visible = r.bottom > -50 && r.top < vh + 50 && r.right > -50 && r.left < vw + 50;
        const lc = card.querySelector<HTMLCanvasElement>('canvas[data-light-canvas]');
        if (lc && visible) {
          const hit = samples.length > 0 && maxX > r.left - reach && minX < r.right + reach && maxY > r.top - reach && minY < r.bottom + reach;
          if (hit || dirty.get(card)) {
            const w = Math.ceil((r.width + BLEED * 2) / LOW);
            const h = Math.ceil((r.height + BLEED * 2) / LOW);
            if (lc.width !== w || lc.height !== h) { lc.width = w; lc.height = h; }
            const c = lc.getContext('2d');
            if (c) {
              c.setTransform(1, 0, 0, 1, 0, 0);
              c.globalCompositeOperation = 'source-over';
              c.clearRect(0, 0, w, h);
              if (hit) {
                c.setTransform(1 / LOW, 0, 0, 1 / LOW, -(r.left - BLEED) / LOW, -(r.top - BLEED) / LOW);
                c.globalCompositeOperation = 'lighten';
                for (const p of samples) stamp(c, p.x, p.y, p.s, grow, 2.3);
              }
            }
            dirty.set(card, hit);
          }
        }
        if (card.hasAttribute('data-lean')) {
          const hover = mouse.seen && mouse.x >= r.left && mouse.x <= r.right && mouse.y >= r.top && mouse.y <= r.bottom;
          const cur = lean.get(card) ?? 0;
          const want = hover ? 1 : 0;
          const s = cur + (want - cur) * (1 - Math.exp(-dt / 160));
          lean.set(card, s);
          if (Math.abs(want - s) > 0.004) busy = true;
          const cx = (head.x - sx - r.left - r.width / 2) / (r.width / 2);
          const cy = (head.y - sy - r.top - r.height / 2) / (r.height / 2);
          const nx = Math.max(-1, Math.min(1, cx));
          const ny = Math.max(-1, Math.min(1, cy));
          card.style.transform = `translate3d(${(nx * 5 * s).toFixed(2)}px, ${(ny * 4 * s - 2 * s).toFixed(2)}px, 0)`;
        }
      }

      raf = busy ? requestAnimationFrame(frame) : 0;
    };

    const wake = () => { if (!raf) { last = 0; raf = requestAnimationFrame(frame); } };
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.seen = true;
      mouse.btn = (e.target as Element | null)?.closest?.('.btn') as HTMLElement | null;
      wake();
    };
    const onOut = (e: MouseEvent) => { if (!e.relatedTarget) { mouse.seen = false; wake(); } };
    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });
    window.addEventListener('scroll', wake, { passive: true });
    window.addEventListener('resize', wake, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseout', onOut);
      window.removeEventListener('scroll', wake);
      window.removeEventListener('resize', wake);
    };
  }, [page]);
}
