import React, { useRef } from 'react';
import { useInkEngine } from '../hooks/useInkEngine';

/** Fixed, full-viewport canvas behind the page content where the cursor's scribble is drawn. */
export const InkLayer: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  useInkEngine(canvas);
  return <canvas ref={canvas} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.34]" />;
};
