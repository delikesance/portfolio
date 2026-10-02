import React, { useEffect, useState } from 'react';

const LINKS = [
  { id: 'projets', label: 'Projets' },
  { id: 'experience', label: 'Expérience' },
  { id: 'competences', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [active, setActive] = useState('');

  // The selected pill is the section currently on screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id === 'top' ? '' : en.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['top', ...LINKS.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 bg-background/80 px-[clamp(20px,4vw,80px)] py-4 backdrop-blur-md">
      <a href="#top" className="inline-flex h-9 items-center rounded-full bg-surface px-4 text-base font-bold tracking-[-0.04em] ring-1 ring-inset ring-line">
        <span>Angelo <span className="text-accent">Clauin</span></span>
      </a>
      <nav aria-label="Sections" className="inline-flex flex-wrap gap-0.5 rounded-full bg-surface p-0.5 ring-1 ring-inset ring-line">
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            aria-current={active === l.id ? 'true' : undefined}
            className={`inline-flex h-9 items-center rounded-full px-4 text-[13px] transition-colors ${
              active === l.id ? 'bg-[#fafafa] font-semibold text-[#111111]' : 'font-medium text-muted hover:text-white'
            }`}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
