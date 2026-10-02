import React from 'react';
import { Briefcase, Code, FaceSmile, Folder, Sms } from 'reicon-react';
import { useActiveSection } from '../hooks/useActiveSection';

const TABS = [
  { id: 'apropos', label: 'À propos', Icon: FaceSmile },
  { id: 'projets', label: 'Projets', Icon: Folder },
  { id: 'experience', label: 'Expérience', Icon: Briefcase },
  { id: 'competences', label: 'Compétences', Icon: Code },
  { id: 'contact', label: 'Contact', Icon: Sms },
];
const IDS = TABS.map((t) => t.id);

/** Thumb-zone navigation for phones: fixed at the bottom, the section on screen is marked. */
export const BottomNav: React.FC = () => {
  const active = useActiveSection(IDS);
  return (
    <nav
      aria-label="Sections"
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-rule bg-white/95 px-1.5 pb-[max(env(safe-area-inset-bottom),12px)] backdrop-blur-md sm:hidden"
    >
      {TABS.map(({ id, label, Icon }) => {
        const on = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-current={on ? 'true' : undefined}
            className={`flex min-h-16 min-w-0 flex-1 flex-col items-center justify-center gap-1 pt-1.5 no-underline shadow-[inset_0_2px_0_transparent] ${
              on ? 'font-semibold text-ink !shadow-[inset_0_2px_0_#111]' : 'text-muted'
            }`}
          >
            <Icon size={22} color="currentColor" />
            <span className="text-[11px] leading-tight">{label}</span>
          </a>
        );
      })}
    </nav>
  );
};
