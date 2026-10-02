import React from 'react';

interface Props {
  eyebrow: string;
  title: string;
  sub?: string;
}

export const SectionHeading: React.FC<Props> = ({ eyebrow, title, sub }) => (
  <div className="flex flex-col gap-3.5 mb-10">
    <span className="mono text-xs uppercase tracking-[0.12em] text-accent">{eyebrow}</span>
    <div className="flex items-center gap-6">
      <h2 className="serif shrink-0 text-[clamp(34px,4.4vw,56px)] leading-[1.05]">{title}</h2>
      <div className="h-px flex-1 bg-[#333335]" />
    </div>
    {sub && <p className="max-w-[640px] text-base leading-[1.7] text-muted">{sub}</p>}
  </div>
);
