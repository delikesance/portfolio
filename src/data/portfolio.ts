export const PERSON = {
  name: 'Angelo Clauin',
  role: 'Consultant indépendant en développement logiciel',
  location: 'Perpignan, France',
  email: 'clauinangelo@proton.me',
  status: 'Freelance pour Metis Digital · télétravail · disponibilité à convenir',
  intro:
    "J'interviens sur des intégrations API et des applications métier, de l'implémentation aux tests de validation. Depuis décembre 2024, j'accompagne Metis Digital en freelance sur des intégrations aériennes NDC (Vueling, Singapore Airlines, Volotea, Air France / KLM, Kyte). En parallèle, je conçois et maintiens des logiciels en Go et en Rust : une plateforme de streaming, une application de partage pair-à-pair, un terminal pour serveurs distants.",
  github: 'https://github.com/delikesance',
  cv: '/resume.pdf',
};

export interface Project {
  id: string;
  name: string;
  year: string;
  kind: string;
  tagline: string;
  points: string[];
  stack: string[];
  image?: string;
  imageAlt?: string;
  links?: { label: string; href: string }[];
  note?: string;
}

/** Projets mis en avant (chacun vérifié contre son README / ses manifestes). */
export const FEATURED: Project[] = [
  {
    id: 'terminus',
    name: 'Terminus',
    year: '2026',
    kind: 'Terminal · Rust',
    tagline: 'Le terminal qui connaît vos serveurs : SSH, SFTP et WSL dans un terminal rendu sur GPU.',
    points: [
      'Gestionnaire d’hôtes, navigateur SFTP double panneau, palette de commandes, onglets et splits.',
      'Coffre chiffré dont la clé est dérivée par Argon2id ; mises à jour vérifiées par checksum SHA-256.',
      'Livré sur Linux (tarball, deb, rpm, Nix) et Windows (NSIS, MSI, zip portable).',
    ],
    stack: ['Rust', 'GPU rendering', 'SSH / SFTP', 'Argon2id', 'WSL', 'Nix'],
    image: '/shots/terminus.png',
    imageAlt: 'Terminus : gestionnaire d’hôtes et terminal',
    links: [{ label: 'Code', href: 'https://github.com/delikesance/terminus' }],
    note: 'Fork de Rio : l’interface et les fonctions serveur sont la couche Terminus.',
  },
  {
    id: 'gazes',
    name: 'Gazes',
    year: '2026',
    kind: 'Streaming · Go',
    tagline: 'Plateforme de streaming auto-hébergée sur BitTorrent : lecture immédiate dans le navigateur, rien d’hébergé durablement.',
    points: [
      'Ordonnancement séquentiel des pièces, annulation au seek, bascule automatique vers la source suivante.',
      'Remux à la volée (H.264/H.265 copiés en MP4 fragmenté), transcodage limité aux audios incompatibles.',
      'Lecteur web : pistes audio, sous-titres ASS via JASSUB, changement de source sans perdre la position.',
      'Comptes optionnels : argon2id, e-mails chiffrés, enveloppe de credentials ML-KEM-768, captcha à preuve de travail.',
    ],
    stack: ['Go', 'BitTorrent', 'FFmpeg', 'Redis', 'Docker', 'Caddy', 'AniList'],
    image: '/shots/gazes.webp',
    imageAlt: 'Gazes : page d’accueil avec carrousel',
    links: [{ label: 'Code', href: 'https://github.com/delikesance/gazes' }],
  },
  {
    id: 'cubelink',
    name: 'Cubelink',
    year: '2026',
    kind: 'Desktop · Rust',
    tagline: 'Application de partage pair-à-pair pour Minecraft : rejoindre la partie d’un ami avec exactement ses mods.',
    points: [
      'Transferts multi-fichiers sur QUIC (Iroh) avec réutilisation des connexions.',
      'Intégration Win32 de la fenêtre du jeu, agent Java pour ouvrir le LAN automatiquement, paquet Microsoft Store.',
      'Banc de performance, tests Win32 et 18 scénarios E2E Playwright.',
    ],
    stack: ['Rust', 'Tauri 2', 'Iroh / QUIC', 'React', 'TypeScript', 'Win32'],
    links: [{ label: 'Code', href: 'https://github.com/delikesance/cubelink' }],
  },
];

export interface IndexEntry {
  name: string;
  year: string;
  kind: string;
  what: string;
  stack: string;
  href?: string;
}

/** Tous les autres projets, une ligne chacun. */
export const INDEX: IndexEntry[] = [
  { name: 'Hive', year: '2026', kind: 'Plugin TUI', what: 'Panneau d’arbre d’agents (coût, quotas, fil de discussion) et apprentissage automatique de skills de projet.', stack: 'TypeScript', href: 'https://github.com/delikesance/agents-tree' },
  { name: 'Claude Everywhere', year: '2026', kind: 'Extension Firefox', what: 'Poser une question à Claude sur la page lue ; réponses en flux dans un panneau latéral, bibliothèque locale.', stack: 'TypeScript · MV3', href: 'https://github.com/delikesance/claude-everywhere' },
  { name: 'a11y-report', year: '2026', kind: 'CLI', what: 'Audits d’accessibilité (axe-core, WCAG 2.x) en rapport client français : références RGAA, score, devis de correction.', stack: 'Node.js · Playwright', href: 'https://github.com/delikesance/a11y-report' },
  { name: 'AI Web Annotator', year: '2026', kind: 'Extension Chrome', what: 'Annoter des éléments DOM et exporter capture, structure et prompt pour les outils d’IA.', stack: 'JavaScript · MV3', href: 'https://github.com/delikesance/annotation-extension' },
  { name: 'JEV Highlighter', year: '2026', kind: 'Extension Chrome', what: 'Surligne les sélections préférées par un modèle sur une page de bookmaker ; ne clique et ne parie jamais.', stack: 'JavaScript · node:test', href: 'https://github.com/delikesance/jev-highlighter' },
  { name: 'shh', year: '2026', kind: 'Démon SSH', what: 'Messagerie directe chiffrée sur SSH, sans installation : identité = clé publique, X25519 + ChaCha20-Poly1305.', stack: 'Go', href: 'https://github.com/delikesance/shh' },
  { name: 'Bot Creator', year: '2026', kind: 'Contribution', what: 'Application Flutter pour créer, lancer et superviser des bots Discord ; contribution à la refonte desktop et à la charte graphique (dépôt ketsuna-org).', stack: 'Flutter · Dart' },
  { name: 'Bot Creator Support', year: '2026', kind: 'Bénévolat', what: 'Bot Discord de support par tickets et panel web multilingue pour la communauté Bot Creator.', stack: 'Bun · TypeScript · SQLite', href: 'https://github.com/delikesance/bot-creator-support' },
  { name: 'Chessy', year: '2026', kind: 'Contribution', what: 'Échecs en ligne à compétences, projet de garder500 : contributions ponctuelles.', stack: 'Rust · React', href: 'https://github.com/garder500/chessy' },
];

export const EXPERIENCE = {
  company: 'Metis Digital',
  role: 'Développeur fullstack indépendant',
  period: 'Décembre 2024 – aujourd’hui',
  place: 'Télétravail',
  summary:
    'Online Booking Tool B2B : les agences y cherchent, réservent et gèrent vols, hôtels, trains et locations. Je développe des intégrations aériennes au sein d’une équipe produit, des parcours backend/frontend aux tests E2E et aux dossiers de certification.',
  items: [
    { k: 'Vueling', v: 'Recherche, tarification, réservation, paiement IFG/BSP et 3DS2, annulation, remises résident et famille nombreuse, calendrier tarifaire ; 10 cas de certification E2E.' },
    { k: 'Singapore Airlines', v: 'Intégration NDC et préparation du tableau de certification.' },
    { k: 'Volotea', v: 'Frais de carte, règlement BSP, réservation combinée ou par tronçon ; correction d’un doublon passager/tarif en sandbox.' },
    { k: 'Air France / KLM', v: 'Correctifs d’adaptateur : normalisation des dates, déduplication des bagages, repli sur les données APIS.' },
    { k: 'Kyte (GDS)', v: 'Agrégateur GDS : distribution des frais, durcissement des erreurs hétérogènes, retries de récupération.' },
    { k: 'Tests', v: 'Tests E2E Vueling et Singapore Airlines sur le framework Playwright existant (Zod, Page Objects).' },
  ],
  stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Vuetify', 'Pinia', 'Express', 'Sequelize', 'PostgreSQL', 'Playwright', 'Zod', 'GitLab CI'],
};

/** Trois piliers, chacun adossé à une preuve concrète (projet ou poste). */
export const PILLARS: { title: string; text: string; proof: string }[] = [
  {
    title: 'Livre chez un client',
    text: 'Intégrations aériennes NDC sur une plateforme de réservation B2B : API Node, base PostgreSQL, interface Nuxt, tests E2E, certifications fournisseur.',
    proof: 'Metis Digital',
  },
  {
    title: 'Conçoit et maintient',
    text: 'Logiciels en Go et en Rust, du protocole à l’interface : streaming BitTorrent en production, partage pair-à-pair, terminal pour serveurs distants, démon SSH chiffré.',
    proof: 'Gazes · Cubelink · Terminus · shh',
  },
  {
    title: 'Outils et diagnostic',
    text: 'Outils développeur et extensions qui branchent des LLM sur le web, audits d’accessibilité, tests E2E et bancs de performance.',
    proof: 'Hive · Claude Everywhere · a11y-report',
  },
];

/** Ordre = niveau de maîtrise, qui est aussi ce que le marché demande le plus. */
export const SKILL_GROUPS: { title: string; items: string[]; lead?: boolean }[] = [
  { title: 'Maîtrise', lead: true, items: ['TypeScript', 'Vue 3 / Nuxt', 'Node.js', 'PostgreSQL', 'Rust', 'Go', 'Docker', 'Tests E2E (Playwright)'] },
  { title: 'Solide', items: ['React', 'Agents LLM / MCP', 'CI/CD (GitLab CI)', 'Sécurité appliquée (Argon2id, X25519, ML-KEM)', 'Nix / NixOS', 'Linux, Caddy'] },
  { title: 'Aussi', items: ['JavaScript', 'Python (scripts, outillage)', 'Bash', 'Tailwind, Vite', 'SQLite, Redis', 'Extensions navigateur MV3', 'IATA NDC', 'BitTorrent, SSH / SFTP'] },
];

export const LANGUAGES = [
  { name: 'Français', level: 'langue maternelle' },
  { name: 'Anglais', level: 'écrit technique régulier, oral professionnel' },
];
