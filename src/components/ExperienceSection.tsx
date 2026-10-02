import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';

const NDC = [
  { code: 'VY', name: 'Vueling', items: ['Intégration de bout en bout : Shopping, Pricing, réservation à paiement instantané, sièges post-booking.', 'ServiceList et SeatAvailability en profondeur.', '19 fonctionnalités ancillaires validées en production.'] },
  { code: 'V7', name: 'Volotea', items: ['Frais de carte bancaire et règlement BSP.', 'Réservation combinée ou par tronçon (per-leg).', "Correction d'un bug critique de passager dupliqué et de tarif doublé dans le sandbox Kyte."] },
  { code: 'AFKL', name: 'Air France / KLM', items: ['Normalisation des dates de vol dans la couche adaptateur.', 'Déduplication des lignes de bagages.', 'Fallbacks résilients sur les données passagers APIS.'] },
  { code: 'KYTE', name: 'GoKyte / GDS', items: ["Intégration de l'agrégateur GDS avec distribution des frais bancaires.", 'Durcissement des erreurs GDS hétérogènes.', 'Retry automatique pour la récupération de réservations.'] },
];

const SHARED = [
  'safeClone : clonage profond rapide, sûr face aux références circulaires.',
  'Sélection de vols unifiée et panier multi-transporteurs.',
  'Conversion tarifaire multi-devises haute précision.',
  'Contribution majeure au moteur de Reshop (réémission et modification de vol).',
  "Plans de tests E2E pour l'intégration NDC Singapore Airlines (SQ).",
];

const TESTS = [
  'Framework E2E Playwright data-driven, scénarios validés par Zod.',
  'Pattern Page Objects modulaire.',
  'API interne de retry pour absorber la latence des sandbox partenaires.',
];

const STACK = ['Nuxt 4', 'Vue 3.5', 'TypeScript', 'Vuetify 4', 'Pinia', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'Playwright', 'Zod', 'GitLab CI', 'Nix (devenv)', 'Docker'];

const ListCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <Card className="min-w-0 flex-[1_1_380px] rounded-[20px] p-7">
    <h3 className="serif mb-4 text-[26px]">{title}</h3>
    <ul className="list-disc space-y-2.5 pl-[18px] text-sm leading-[1.65] text-muted">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </Card>
);

export const ExperienceSection: React.FC = () => (
  <section id="experience" className="scroll-mt-16 px-[clamp(20px,4vw,80px)] pt-[clamp(72px,9vw,130px)]">
    <SectionHeading
      eyebrow="Expérience"
      title="Metis Digital"
      sub="Développeur fullstack · Perpignan · juil. 2025 à aujourd'hui. Je construis l'Online Booking Tool, une plateforme de voyage B2B où les agences cherchent, réservent et gèrent vols, hôtels, trains et locations de voitures."
    />
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
      {NDC.map((c) => (
        <Card key={c.code} className="flex flex-col gap-3.5 rounded-[20px] p-7">
          <div className="flex items-baseline justify-between gap-3">
            <span className="serif text-[44px] leading-none text-accent">{c.code}</span>
            <span className="text-sm font-semibold">{c.name}</span>
          </div>
          <ul className="list-disc space-y-2.5 pl-[18px] text-sm leading-[1.65] text-muted">
            {c.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
    <div className="mt-4 flex flex-wrap gap-4">
      <ListCard title="Infrastructure partagée" items={SHARED} />
      <ListCard title="Tests & résilience" items={TESTS} />
    </div>
    <div className="mt-6 flex flex-wrap gap-2">
      {STACK.map((t) => (
        <span key={t} className="pill">{t}</span>
      ))}
    </div>
  </section>
);
