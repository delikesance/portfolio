import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Scribble } from './ui/Scribble';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

export const Footer: React.FC = () => (
  <>
    <section id="contact" className="scroll-mt-16 px-[clamp(20px,4vw,80px)] py-[clamp(72px,9vw,130px)]">
      <Card className="relative flex flex-wrap items-center justify-between gap-8 overflow-hidden p-[clamp(28px,5vw,64px)]">
        <Scribble shape="a" width={320} rotate={-8} style={{ left: -70, top: -60 }} />
        <Scribble shape="b" width={360} rotate={6} style={{ right: -60, bottom: -70 }} />
        <div className="relative flex max-w-[620px] flex-[1_1_420px] flex-col gap-3.5">
          <h2 className="serif text-[clamp(36px,5vw,64px)] leading-[1.05]">Parlons de votre prochain système.</h2>
          <p className="text-base leading-[1.7] text-muted">
            Intégrations B2B, architecture distribuée, infra déclarative : je réponds volontiers aux échanges techniques.
          </p>
        </div>
        <div className="relative flex w-[260px] max-w-full flex-col gap-3">
          <Button href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</Button>
          <Button href="/resume.pdf" variant="secondary">Télécharger le CV</Button>
        </div>
      </Card>
    </section>
    <footer className="mono flex flex-wrap justify-between gap-3 border-t border-line px-[clamp(20px,4vw,80px)] py-7 text-xs text-muted">
      <span>© {new Date().getFullYear()} Angelo Clauin</span>
      <span>Perpignan, France · Français natif · Anglais C1</span>
    </footer>
  </>
);
