import React from 'react';
import { ArrowUpRight, Briefcase, Calendar, DocumentDownload, Location, Sms } from 'reicon-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { BottomNav } from './components/BottomNav';

const FORGEJO = 'https://git.delikesance.cloud/delikesance';

const PROJECTS = [
  { name: 'Gazes', href: `${FORGEJO}/gazes`, text: 'Streaming torrent dans le navigateur, en pair à pair.', stack: 'Go · WebRTC · BitTorrent · Next.js' },
  { name: 'AI Web Annotator', href: `${FORGEJO}/annotation-extension`, text: "Extension Chrome pour annoter une page et l'envoyer à un LLM.", stack: 'TypeScript · Chrome MV3 · Vite' },
];

const SKILLS = [
  ['Produit', 'TypeScript, Vue, Nuxt, Node.js, PostgreSQL'],
  ['Systèmes', 'Go, Docker, Nix, Kubernetes, GitLab CI'],
  ['Domaines', 'Voyage B2B (IATA NDC), pair à pair (WebRTC)'],
  ['Langues', 'Français, anglais (C1)'],
];

const Meta: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
  <span className="inline-flex items-center gap-[7px] text-muted">
    <span aria-hidden="true" className="inline-flex">{icon}</span>
    {children}
  </span>
);

export const App: React.FC = () => (
  <div className="mx-auto box-border max-w-[900px] px-[clamp(20px,5vw,48px)] pb-28 pt-[clamp(28px,6vw,72px)] sm:pb-12">
    <Navbar />
    <main>
      <Hero />

      <Section id="apropos" title="À propos">
        <p className="max-w-[620px] text-[19px] leading-[1.65]">
          Développeur fullstack basé à Perpignan, en remote chez Metis Digital. Je travaille aussi bien sur le produit (Vue, Node.js, PostgreSQL) que sur
          l'infrastructure (Go, Nix, Docker). Autodidacte, je construis aussi mes propres projets en dehors du travail.
        </p>
      </Section>

      <Section id="projets" title="Projets">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block min-h-11 border-b border-rule py-3.5 no-underline sm:border-0 sm:py-0"
          >
            <span className="flex items-center justify-between gap-3 text-xl font-semibold leading-[1.4] text-ink sm:justify-start sm:text-[19px] sm:leading-[1.5]">
              <span className="underline decoration-[#b5b5b5] decoration-1 underline-offset-[3px] group-hover:decoration-ink sm:no-underline sm:group-hover:underline">{p.name}</span>
              <span aria-hidden="true" className="inline-flex text-muted"><ArrowUpRight size={18} color="currentColor" /></span>
            </span>
            <span className="mt-1 block text-[17px] leading-[1.55] text-muted">{p.text}</span>
            <span className="block text-sm leading-[1.6] text-muted sm:text-[15px]">{p.stack}</span>
          </a>
        ))}
      </Section>

      <Section id="experience" title="Expérience">
        <div className="flex flex-col gap-2">
          <p className="text-[19px] font-semibold leading-[1.5]">Metis Digital</p>
          <p className="flex flex-col gap-1.5 text-[15px] leading-[1.5] sm:flex-row sm:flex-wrap sm:gap-x-[22px] sm:leading-[1.6]">
            <Meta icon={<Briefcase size={18} color="currentColor" />}>Développeur fullstack</Meta>
            <Meta icon={<Calendar size={18} color="currentColor" />}>Juil. 2025 – aujourd'hui</Meta>
            <Meta icon={<Location size={18} color="currentColor" />}>Remote</Meta>
          </p>
          <p className="text-[17px] leading-[1.6] text-muted">
            Plateforme de réservation de voyages B2B : intégrations de compagnies aériennes (NDC), moteur de modification de vols, tests E2E.
          </p>
        </div>
      </Section>

      <Section id="competences" title="Compétences">
        <div className="flex flex-col gap-2.5">
          {SKILLS.map(([k, v]) => (
            <p key={k} className="flex flex-col gap-0.5 text-[17px] leading-[1.55] sm:flex-row sm:flex-wrap sm:gap-x-5 sm:leading-[1.6]">
              <span className="text-[13px] text-muted sm:w-[110px] sm:shrink-0 sm:text-[17px]">{k}</span>
              <span className="sm:min-w-[260px] sm:flex-1">{v}</span>
            </p>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="-mt-1.5 flex flex-col sm:mt-0">
          {[
            { href: 'mailto:clauinangelo@proton.me', label: 'clauinangelo@proton.me', Icon: Sms },
            { href: '/resume.pdf', label: 'CV (PDF)', Icon: DocumentDownload },
          ].map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              className="flex min-h-14 items-center gap-3 border-b border-rule text-lg no-underline last:border-0 sm:min-h-0 sm:border-0 sm:text-[19px] sm:leading-[1.7] sm:underline"
            >
              <span aria-hidden="true" className="inline-flex text-muted"><Icon size={18} color="currentColor" /></span>
              <span className="min-w-0 flex-1 [overflow-wrap:anywhere] sm:flex-none">{label}</span>
              <span aria-hidden="true" className="inline-flex text-muted sm:hidden"><ArrowUpRight size={18} color="currentColor" /></span>
            </a>
          ))}
        </div>
      </Section>
    </main>
    <footer className="border-t border-rule pt-6 text-sm text-muted">© {new Date().getFullYear()} Angelo Clauin</footer>
    <BottomNav />
  </div>
);

export default App;
