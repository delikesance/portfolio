import React, { useRef } from 'react';
import { useSpotlight } from '../hooks/useSpotlight';

const HEADLINE = 'Je développe des applications web et les systèmes qui les font tourner.';
const TYPE =
  'max-w-[1000px] text-[clamp(40px,7.2vw,92px)] font-semibold leading-[1.04] tracking-[-0.028em] [grid-area:1/1]';

export const Hero: React.FC = () => {
  const reveal = useRef<HTMLDivElement>(null);
  useSpotlight(reveal);
  return (
    <div id="top" className="pb-[72px]">
      <div className="grid [padding-block:clamp(16px,4vw,48px)_clamp(24px,5vw,64px)]">
        <h1 className={`${TYPE} text-[#dcdcdc]`}>{HEADLINE}</h1>
        <div
          ref={reveal}
          aria-hidden="true"
          className={`${TYPE} pointer-events-none text-ink`}
          style={{
            WebkitMaskImage: 'radial-gradient(0px circle at 0 0, #000, transparent)',
            maskImage: 'radial-gradient(0px circle at 0 0, #000, transparent)',
          }}
        >
          {HEADLINE}
        </div>
      </div>
    </div>
  );
};
