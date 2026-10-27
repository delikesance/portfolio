export const PERSON = {
  name: 'Angelo Clauin',
  role: 'Développeur fullstack',
  location: 'Perpignan, France',
  email: 'clauinangelo@proton.me',
  status: 'En poste chez Metis Digital · ouvert aux échanges techniques',
  intro:
    "Chez Metis Digital, je livre des intégrations NDC (Vueling, Volotea, Air France / KLM, Kyte) de la base SQL jusqu'à l'interface Vue, avec les tests E2E qui les tiennent debout. En dehors, je construis des systèmes complets en Rust et en Go : un terminal GPU, un agent de code, une plateforme de streaming, un moteur d'échecs. Ce qui me motive : les problèmes où le protocole, la sécurité et les performances comptent autant que l'interface.",
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
    id: 'forge',
    name: 'Forge',
    year: '2026',
    kind: 'Agent de code · Rust',
    tagline: 'Agent de programmation en terminal, écrit de zéro : boucle d’agent, outils, rôles et garde-fou de permissions appliqué dans le code.',
    points: [
      'Workspace Cargo de 23 crates, dont le binaire forge-cli.',
      '15 rôles embarqués (product-owner, architecte, ingénieur API/UI…) qui délèguent à des sous-agents.',
      'Environnement de dev reproductible : blueprint JSON validé, Dockerfile rendu et testé par Forge.',
      'Moteur TUI maison, client MCP (stdio, HTTP, SSE), sessions persistantes en JSONL.',
    ],
    stack: ['Rust', 'TUI', 'MCP', 'Docker', 'SQLite'],
    links: [{ label: 'Code', href: 'https://github.com/delikesance/forge-agents' }],
  },
  {
    id: 'chessy',
    name: 'Chessy',
    year: '2026',
    kind: 'Jeu en ligne · Rust + React',
    tagline: 'Échecs en ligne où chaque joueur utilise des compétences qui modifient les règles.',
    points: [
      'Moteur d’échecs en Rust (CPU-bound, validé par perft) qui simule chaque compétence pour lister les coups légaux.',
      '27 compétences jouables, classement Elo, file d’appariement, amis en temps réel, reprise après déconnexion.',
      'Mode solo contre l’IA « Sage » réglable de 400 à 2800 Elo ; parties d’évaluation pour estimer son niveau.',
      'Client React avec Phaser et Three.js ; raretés des compétences forgées calibrées par simulation (600 échantillons sur 12 positions fixes).',
    ],
    stack: ['Rust', 'React', 'Phaser', 'Three.js', 'Vite', 'SQLite', 'Docker'],
    note: 'Projet mené avec garder500.',
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
  { name: 'a11y-report', year: '2026', kind: 'CLI', what: 'Audits d’accessibilité (axe-core, WCAG 2.x) en rapport client français : références RGAA, score, devis de correction.', stack: 'Node.js · Playwright' },
  { name: 'AI Web Annotator', year: '2026', kind: 'Extension Chrome', what: 'Annoter des éléments DOM et exporter capture, structure et prompt pour les outils d’IA.', stack: 'JavaScript · MV3' },
  { name: 'JEV Highlighter', year: '2026', kind: 'Extension Chrome', what: 'Surligne les sélections préférées par un modèle sur une page de bookmaker ; ne clique et ne parie jamais.', stack: 'JavaScript · node:test' },
  { name: 'shh', year: '2026', kind: 'Démon SSH', what: 'Messagerie directe chiffrée sur SSH, sans installation : identité = clé publique, X25519 + ChaCha20-Poly1305.', stack: 'Go' },
  { name: 'Bot Creator', year: '2026', kind: 'Contribution', what: 'Application Flutter pour créer, lancer et superviser des bots Discord ; contribution à la refonte desktop et à la charte graphique (dépôt ketsuna-org).', stack: 'Flutter · Dart' },
];

export const EXPERIENCE = {
  company: 'Metis Digital',
  role: 'Développeur fullstack',
  period: 'Juillet 2025 – aujourd’hui',
  place: 'Perpignan',
  summary:
    'Online Booking Tool B2B : les agences y cherchent, réservent et gèrent vols, hôtels, trains et locations. Je livre des intégrations NDC de bout en bout, de la base SQL aux composants Vue.',
  items: [
    { k: 'Vueling', v: 'Intégration complète : shopping, pricing, réservation avec paiement instantané, sièges post-booking, services ancillaires.' },
    { k: 'Volotea', v: 'Frais de carte, règlement BSP, réservation combinée ou par tronçon ; correction d’un doublon passager/tarif en sandbox.' },
    { k: 'Air France / KLM', v: 'Correctifs d’adaptateur : normalisation des dates, déduplication des bagages, repli sur les données APIS.' },
    { k: 'Kyte (GDS)', v: 'Agrégateur GDS : distribution des frais, durcissement des erreurs hétérogènes, retries de récupération.' },
    { k: 'Qualité', v: 'Framework E2E Playwright data-driven (Zod, Page Objects) ; plans de test pour Singapore Airlines.' },
  ],
  stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Vuetify', 'Pinia', 'Express', 'Sequelize', 'PostgreSQL', 'Playwright', 'Zod', 'GitLab CI', 'Nix', 'Docker'],
};

export const SKILLS: { title: string; items: string[] }[] = [
  { title: 'Langages', items: ['TypeScript', 'Rust', 'Go', 'JavaScript', 'Python', 'Bash'] },
  { title: 'Front', items: ['Vue 3 / Nuxt', 'React', 'Tailwind', 'Vite', 'Extensions MV3'] },
  { title: 'Back & données', items: ['Node.js / Express', 'PostgreSQL', 'SQLite', 'Redis', 'Sequelize'] },
  { title: 'Infra & outillage', items: ['Docker', 'Nix / NixOS', 'GitLab CI', 'Caddy', 'Self-hosting'] },
  { title: 'Qualité', items: ['Playwright', 'Zod', 'perft & simulation', 'node:test', 'Vitest'] },
  { title: 'Domaines', items: ['IATA NDC', 'BitTorrent', 'SSH / SFTP', 'Crypto appliquée', 'Agents LLM / MCP'] },
];

export const LANGUAGES = [
  { name: 'Français', level: 'langue maternelle' },
  { name: 'Anglais', level: 'professionnel' },
];
