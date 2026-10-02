import { useEffect, useState } from 'react';

/** The id of the section crossing the middle of the viewport ('' while on the hero). */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('');
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) setActive(ids.includes(en.target.id) ? en.target.id : ''); }),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['top', ...ids].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [ids]);
  return active;
}
