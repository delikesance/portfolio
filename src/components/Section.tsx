import React from 'react';

interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
}

/** A labelled row: small caps label on the left, content on the right (stacks on phones). */
export const Section: React.FC<Props> = ({ id, title, children }) => (
  <section id={id} className="flex flex-wrap gap-x-12 gap-y-3 border-t border-rule py-12">
    <h2 className="w-[150px] shrink-0 text-sm font-normal uppercase leading-[1.7] tracking-[0.04em] text-muted">{title}</h2>
    <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-[22px]">{children}</div>
  </section>
);
