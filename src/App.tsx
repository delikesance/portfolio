import React from 'react';
import { ArrowUpRight, Briefcase, Calendar, DocumentDownload, Location, Sms } from 'reicon-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';

const FORGEJO = 'https://git.delikesance.cloud/delikesance';

const PROJECTS = [
  { name: 'Gazes', href: `${FORGEJO}/gazes`, text: 'Streaming torrent dans le navigateur, en pair à pair.', stack: 'Go · WebRTC · BitTorrent · Next.js' },
  { name: 'AI Web Annotator', href: `${FORGEJO}/annotation-extension`, text: "Extension Chrome pour annoter une page et l'envoyer à un LLM.", stack: 'TypeScript · Chrome MV3 · Vite' },
  { name: 'Homelab', href: FORGEJO, text: 'Infrastructure auto-hébergée, décrite en code.', stack: 'Nix · Docker · Grafana · Vault' },
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
  <div className="mx-auto box-border max-w-[900px] px-[clamp(20px,5vw,48px)] pb-12 pt-[clamp(32px,6vw,72px)]">
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
          <p key={p.name} className="text-[19px] leading-[1.5]">
            <span className="font-semibold">
              <a href={p.href} target="_blank" rel="noopener noreferrer">{p.name}</a>{' '}
              <span aria-hidden="true" className="ml-0.5 inline-flex align-[-3px] text-muted"><ArrowUpRight size={18} color="currentColor" /></span>
            </span>
            <br />
            <span className="text-[17px] text-muted">{p.text}</span>
            <br />
            <span className="text-[15px] text-muted">{p.stack}</span>
          </p>
        ))}
      </Section>

      <Section id="experience" title="Expérience">
        <div className="flex flex-col gap-2">
          <p className="text-[19px] font-semibold leading-[1.5]">Metis Digital</p>
          <p className="flex flex-wrap gap-x-[22px] gap-y-1.5 text-[15px] leading-[1.6]">
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
            <p key={k} className="flex flex-wrap gap-x-5 gap-y-0.5 text-[17px] leading-[1.6]">
              <span className="w-[110px] shrink-0 text-muted">{k}</span>
              <span className="min-w-[260px] flex-1">{v}</span>
            </p>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <p className="text-[19px] leading-[1.7]">
          <span className="inline-flex items-center gap-[9px]">
            <span aria-hidden="true" className="inline-flex text-muted"><Sms size={18} color="currentColor" /></span>
            <a href="mailto:clauinangelo@proton.me">clauinangelo@proton.me</a>
          </span>
          <br />
          <span className="inline-flex items-center gap-[9px]">
            <span aria-hidden="true" className="inline-flex text-muted"><DocumentDownload size={18} color="currentColor" /></span>
            <a href="/resume.pdf">CV (PDF)</a>
          </span>
        </p>
      </Section>
    </main>
    <footer className="border-t border-rule pt-6 text-sm text-muted">© {new Date().getFullYear()} Angelo Clauin</footer>
  </div>
);

export default App;
