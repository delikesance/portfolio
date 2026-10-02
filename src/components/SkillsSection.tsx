import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';

// [name, used daily]
const GROUPS: { title: string; skills: [string, boolean][] }[] = [
  { title: 'Frontend', skills: [['Vue 3.5', true], ['Nuxt 4', true], ['TypeScript', true], ['Vuetify 4', false], ['Pinia', false], ['Vee-Validate & Zod', false]] },
  { title: 'Backend & APIs', skills: [['Node.js & Express', true], ['Go', true], ['PostgreSQL', true], ['Sequelize', false], ['MongoDB & Redis', false], ['OpenAPI', false]] },
  { title: 'DevOps & Cloud', skills: [['Docker & Podman', true], ['Nix & NixOS', true], ['GitLab CI & Actions', false], ['Kubernetes', false], ['Grafana & OpenTelemetry', false], ['Vault & Terraform', false]] },
  { title: 'Testing', skills: [['Playwright', true], ['Mocha & Chai', false], ['Zod', false], ['Retry & circuit-breaker', false]] },
  { title: 'Protocoles', skills: [['IATA NDC', true], ['WebRTC DataChannels', true], ['BitTorrent', false], ['REST, SOAP & XML', false]] },
  { title: 'Langages', skills: [['TypeScript', true], ['JavaScript', false], ['Go', false], ['Python', false], ['Bash', false]] },
];

export const SkillsSection: React.FC = () => (
  <section id="competences" className="scroll-mt-16 px-[clamp(20px,4vw,80px)] pt-[clamp(72px,9vw,130px)]">
    <SectionHeading eyebrow="Compétences" title="La boîte à outils" sub="Les pastilles pleines sont celles que j'utilise tous les jours." />
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-4">
      {GROUPS.map((g) => (
        <Card key={g.title} className="flex flex-col gap-[18px] rounded-[20px] p-7">
          <h3 className="serif text-[28px]">{g.title}</h3>
          <div className="flex flex-wrap gap-2">
            {g.skills.map(([name, primary]) => (
              <span key={name} className={primary ? 'pill !bg-accent !text-[#111113] !ring-0 font-semibold' : 'pill'}>
                {name}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </section>
);
