import React, { useRef } from 'react';
import { Brush } from 'reicon-react';
import { useHeroReveal } from '../hooks/useHeroReveal';

const HEADLINE = 'Je développe des applications web et les systèmes qui les font tourner.';
const TYPE =
  'max-w-[1000px] text-[clamp(40px,7.2vw,92px)] font-semibold leading-[1.04] tracking-[-0.03em] [grid-area:1/1]';

export const Hero: React.FC = () => {
  const hero = useRef<HTMLDivElement>(null);
  const reveal = useRef<HTMLDivElement>(null);
  const hint = useRef<HTMLParagraphElement>(null);
  useHeroReveal(hero, reveal, hint);
  return (
    <div id="top" className="pb-10 pt-10 sm:pb-[72px] sm:pt-0">
      <div
        ref={hero}
        className="grid select-none [padding-block:0] sm:[padding-block:clamp(16px,4vw,48px)_clamp(24px,5vw,64px)] [@media(pointer:coarse)]:touch-none"
      >
        <h1 className={`${TYPE} text-[#dcdcdc]`}>{HEADLINE}</h1>
        <div
          ref={reveal}
          aria-hidden="true"
          className={`${TYPE} pointer-events-none text-ink`}
          style={{
            WebkitMaskImage: 'radial-gradient(0px circle at 0 0, #000, transparent)',
            maskImage: 'radial-gradient(0px circle at 0 0, #000, transparent)',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        >
          {HEADLINE}
        </div>
      </div>
      <p
        ref={hint}
        className="mt-[18px] hidden items-center gap-2 text-sm text-muted transition-opacity duration-500 [@media(pointer:coarse)]:flex"
      >
        <Brush size={16} color="currentColor" />
        Peins sur le titre avec ton doigt
      </p>
    </div>
  );
};
