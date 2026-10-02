import React from 'react';
import { Scribble } from './ui/Scribble';
import { Button } from './ui/Button';

const GRID_MASK_OFF = 'radial-gradient(0px circle at 0px 0px, #000, transparent)';
const GRID_LINES =
  'linear-gradient(rgba(155,138,251,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(155,138,251,.5) 1px, transparent 1px)';

export const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-[clamp(20px,4vw,80px)] pt-[clamp(64px,10vw,140px)] pb-[clamp(64px,9vw,120px)]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(250,250,250,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,250,.05) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        backgroundPosition: '-1px -1px',
      }}
    >
      <Scribble shape="a" width={460} rotate={-8} opacity={0.07} style={{ right: '4%', top: 40 }} />
      <Scribble shape="b" width={420} rotate={10} opacity={0.05} style={{ left: -120, bottom: -60 }} />
      <div
        id="heroGrid"
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: GRID_LINES,
          backgroundSize: '48px 48px',
          backgroundPosition: '-1px -1px',
          WebkitMaskImage: GRID_MASK_OFF,
          maskImage: GRID_MASK_OFF,
        }}
      />

      <div className="relative flex max-w-[820px] flex-col items-start gap-7">
        <span className="mono inline-flex h-9 items-center gap-2.5 rounded-full bg-surface px-4 text-xs text-muted ring-1 ring-inset ring-line">
          <span className="h-2 w-2 rounded-full bg-accent" />
          En poste · Ouvert aux échanges techniques
        </span>
        <h1 className="serif text-[clamp(40px,5.6vw,88px)] leading-[1.02]">
          Je conçois et construis des logiciels, <em className="text-accent">du premier octet à la prod.</em>
        </h1>
        <p className="max-w-[640px] text-lg leading-[1.7] text-muted">
          <strong className="font-semibold text-white">Angelo Clauin</strong>, développeur fullstack à Perpignan. TypeScript, Node.js, Vue 3 / Nuxt,
          et un cluster auto-hébergé sous NixOS. 13 ans de pratique : une passion née à 8 ans, devenue un métier.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Button href="#projets">Voir les projets</Button>
          <Button href="/resume.pdf" variant="secondary">Télécharger le CV</Button>
        </div>
      </div>
    </section>
  );
};
