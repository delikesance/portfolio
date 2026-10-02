import React from 'react';
import { ArrowUpRight } from 'reicon-react';
import { Scribble } from './ui/Scribble';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';

const Tech: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((t) => (
      <span key={t} className="pill">{t}</span>
    ))}
  </div>
);

const Bullets: React.FC<{ items: string[]; className?: string }> = ({ items, className = '' }) => (
  <ul className={`list-disc space-y-2.5 pl-[18px] text-sm leading-[1.6] text-zinc-300 ${className}`}>
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

const ARCH = [
  { label: 'Navigateur client', role: 'Lecteur vidéo & nœud WebRTC P2P' },
  { label: 'Swarm P2P WebRTC', role: 'Segments partagés entre spectateurs actifs' },
  { label: 'Gazes Streaming Bridge', role: 'Moteur séquentiel Go & remux à la volée' },
  { label: 'Swarm BitTorrent public', role: 'Sources et seeders mondiaux' },
];

const FORGEJO = 'https://git.delikesance.cloud/delikesance';

/** Whole-card link to the project's Forgejo repo. */
const RepoLink: React.FC<{ href: string; name: string; className: string; children: React.ReactNode }> = ({ href, name, className, children }) => (
  <Card
    as="a"
    lean
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${name} : ouvrir le dépôt Forgejo`}
    className={`group block transition-[border-color] duration-300 hover:border-accent/50 ${className}`}
  >
    {children}
  </Card>
);

const RepoCta: React.FC<{ label: string }> = ({ label }) => (
  <span className="mono mt-1 inline-flex items-center gap-1.5 self-start text-xs text-accent">
    {label}
    <ArrowUpRight size={16} color="currentColor" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </span>
);

const OTHERS = [
  {
    badge: 'Extension Chrome MV3',
    title: 'AI Web Annotator',
    href: `${FORGEJO}/annotation-extension`,
    cta: 'Voir le dépôt Forgejo',
    sub: "Annoter n'importe quel site, exporter le contexte exact pour les LLMs.",
    desc: "Fige la page, pose des badges numérotés sur les éléments DOM, puis exporte un contexte technique précis pour ChatGPT, Claude ou Gemini.",
    items: [
      'Mode Freeze : clics et événements natifs neutralisés pour inspecter sans naviguer.',
      'Sélecteurs CSS robustes et XPath absolus générés automatiquement.',
      'Export JSON structuré + capture PNG avec badges en surimpression.',
      'CI/CD Forgejo Actions avec packaging ZIP sur tags git.',
    ],
    tech: ['TypeScript', 'Chrome MV3', 'Canvas / SVG', 'Vite', 'Tailwind'],
    scribble: { shape: 'a' as const, rotate: -10, style: { left: -90, bottom: -80 } },
  },
  {
    badge: 'Self-Hosted & DevOps',
    title: 'Cluster & Homelab',
    href: FORGEJO,
    cta: 'Voir mon Forgejo',
    sub: 'Infrastructure souveraine, déclarative et observable.',
    desc: 'Git (Gitea), serveur mail, stack média et monitoring complet, le tout décrit en code avec Nix/NixOS et des conteneurs orchestrés.',
    items: [
      'Serveurs et environnements déclaratifs avec Nix et NixOS.',
      'Métriques OpenTelemetry et tableaux de bord Grafana.',
      'Secrets centralisés et accès durcis avec HashiCorp Vault.',
      'Relais mail indépendant et pipelines automatisés.',
    ],
    tech: ['Nix / NixOS', 'Docker', 'Podman', 'Kubernetes', 'Grafana', 'Vault', 'Ansible'],
    scribble: { shape: 'b' as const, rotate: 8, style: { right: -90, bottom: -70 } },
  },
];

export const ProjectsSection: React.FC = () => (
  <section id="projets" className="scroll-mt-16 px-[clamp(20px,4vw,80px)] pt-[clamp(72px,9vw,130px)]">
    <SectionHeading eyebrow="Projets sélectionnés" title="Ce que j'ai construit" />
    <div className="flex flex-col gap-6">
      <RepoLink href={`${FORGEJO}/gazes`} name="Gazes" className="card relative flex flex-wrap gap-12 overflow-hidden p-[clamp(24px,4vw,56px)]">
        <Scribble shape="b" width={380} rotate={6} style={{ right: -80, top: -60 }} />
        <div className="relative flex min-w-0 flex-[1_1_460px] flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            <span className="pill text-accent">Open Source / Perso</span>
            <span className="pill">Streaming &amp; P2P</span>
          </div>
          <h3 className="serif text-[clamp(40px,5vw,68px)] leading-[1.02]">Gazes</h3>
          <p className="serif text-xl leading-normal text-white">Streaming torrent séquentiel avec maillage WebRTC dans le navigateur.</p>
          <p className="text-[15px] leading-[1.75] text-muted">
            Lecture instantanée depuis des essaims BitTorrent standard, sans installation. Un backend Go télécharge en priorité le début de la vidéo et remuxe à la
            volée, pendant que les spectateurs s'échangent les segments en WebRTC pour faire chuter la bande passante serveur.
          </p>
          <Bullets
            className="mt-2"
            items={[
              'Maillage P2P réduisant la charge serveur de plus de 80% lors des pics.',
              'Remuxage temps réel, pistes audio Opus/AAC et sous-titres ASS/VTT.',
              "Qualité des sources évaluée sur l'activité réelle du swarm, pas sur des deadlines fixes.",
            ]}
          />
          <Tech items={['Go', 'WebRTC', 'BitTorrent', 'Next.js', 'TypeScript', 'FFmpeg', 'Docker']} />
          <RepoCta label="Voir le dépôt Forgejo" />
        </div>
        <div className="relative flex min-w-0 flex-[1_1_320px] flex-col justify-center">
          {ARCH.map((n, i) => (
            <React.Fragment key={n.label}>
              <div className="flex flex-col gap-1 rounded-2xl bg-surface-raised px-5 py-4 ring-1 ring-inset ring-line">
                <span className="mono text-xs text-accent">0{i + 1}</span>
                <span className="text-[15px] font-semibold">{n.label}</span>
                <span className="text-[13px] text-muted">{n.role}</span>
              </div>
              {i < ARCH.length - 1 && <div className="h-[18px] w-px self-center bg-accent opacity-50" />}
            </React.Fragment>
          ))}
        </div>
      </RepoLink>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-6">
        {OTHERS.map((p) => (
          <RepoLink key={p.title} href={p.href} name={p.title} className="card relative flex flex-col gap-[18px] overflow-hidden p-[clamp(24px,3vw,40px)]">
            <Scribble shape={p.scribble.shape} width={300} rotate={p.scribble.rotate} style={p.scribble.style} />
            <div className="relative flex flex-col gap-[18px]">
              <div><span className="pill text-accent">{p.badge}</span></div>
              <h3 className="serif text-[clamp(32px,3.4vw,44px)] leading-[1.05]">{p.title}</h3>
              <p className="serif text-lg leading-normal">{p.sub}</p>
              <p className="text-[15px] leading-[1.75] text-muted">{p.desc}</p>
              <Bullets items={p.items} />
              <Tech items={p.tech} />
              <RepoCta label={p.cta} />
            </div>
          </RepoLink>
        ))}
      </div>
    </div>
  </section>
);
