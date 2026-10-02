import React from 'react';

const LINKS = [
  ['apropos', 'À propos'],
  ['projets', 'Projets'],
  ['experience', 'Expérience'],
  ['competences', 'Compétences'],
  ['contact', 'Contact'],
];

export const Navbar: React.FC = () => (
  <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 pb-2 sm:pb-14">
    <div>
      <p className="text-[22px] font-semibold sm:text-[26px] leading-[1.3]">
        <a href="#top" className="no-underline">Angelo Clauin</a>
      </p>
      <p className="mt-0.5 text-[17px] text-muted">Développeur fullstack · Perpignan, France</p>
    </div>
    <nav aria-label="Sections" className="hidden flex-wrap gap-x-6 gap-y-1 text-base sm:flex">
      {LINKS.map(([id, label]) => (
        <a key={id} href={`#${id}`}>{label}</a>
      ))}
    </nav>
  </header>
);
