export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  category: 'Streaming & P2P' | 'AI & DevTools' | 'Infrastructure & Cloud';
  description: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  github?: string;
  demo?: string;
  iconName: string;
  architecture?: {
    nodes: { label: string; role: string; type: 'client' | 'bridge' | 'mesh' | 'swarm' | 'db' }[];
    description: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  ndcIntegrations: {
    airline: string;
    code: string;
    details: string[];
  }[];
  sharedInfrastructure: string[];
  testingFramework: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  category: 'frontend' | 'backend' | 'devops' | 'testing' | 'protocols' | 'languages';
  skills: {
    name: string;
    context: string;
    level?: string;
    isPrimary?: boolean;
  }[];
}

export const PERSONAL_INFO = {
  name: "Angelo Clauin",
  title: "Fullstack Developer",
  tagline: "Architecture B2B, Systèmes Distribués & Intégrations NDC Aériennes",
  location: "Perpignan, France",
  email: "clauinangelo@proton.me",
  status: "En poste · Ouvert aux échanges techniques",
  bio: "Développeur Fullstack avec une expertise pointue en TypeScript, Node.js et Vue 3 / Nuxt, spécialisé dans l'expédition d'intégrations NDC aériennes de bout en bout sur plateforme B2B de voyage. Autodidacte passionné programmant depuis l'âge de 8 ans (professionnel depuis 2025). Concepteur de solutions robustes avec Nix/NixOS, Docker et GitLab CI, administrant son propre cluster auto-hébergé (Gitea, serveur mail, stack média).",
  stats: [
    { label: "Programmation", value: "Dès 8 ans", detail: "Autodidacte passionné" },
    { label: "Features NDC vérifiées", value: "19+", detail: "Vueling, Volotea, AFKL, Kyte" },
    { label: "Disponibilité Stack", value: "Fullstack", detail: "De la base SQL aux composants Vue" },
    { label: "Infrastructure", value: "Nix & Docker", detail: "Auto-hébergement & CI/CD" }
  ],
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Professionnel courant (C1 / Full Working Proficiency)" }
  ]
};

export const EXPERIENCE_METIS: Experience = {
  company: "Metis Digital",
  role: "Fullstack Developer",
  location: "Perpignan, France",
  period: "Juil. 2025 – Présent",
  isCurrent: true,
  description: "Développement de l'Online Booking Tool (OBT) — plateforme de voyage B2B multi-services utilisée par les agences pour rechercher, réserver et gérer vols, hôtels, trains et locations de voitures (flux SBT et agent-driven).",
  ndcIntegrations: [
    {
      airline: "Vueling (VY)",
      code: "VY",
      details: [
        "Implémentation intégrale de bout en bout : Shopping, Pricing, Réservation paiement instantané, Sièges post-booking.",
        "Intégration poussée des services ServiceList et SeatAvailability.",
        "19 fonctionnalités ancillaires (bagages, sièges, options) vérifiées et validées de bout en bout en production."
      ]
    },
    {
      airline: "Volotea (V7)",
      code: "V7",
      details: [
        "Gestion fine des frais de carte bancaire (card fees) et support du règlement BSP.",
        "Support complet des modes de réservation combiné vs par tronçon (per-leg).",
        "Diagnostic et correction d'un bug critique de duplication de passager et de doublement de tarif dans le flux sandbox Kyte."
      ]
    },
    {
      airline: "Air France / KLM (AFKL)",
      code: "AFKL",
      details: [
        "Développement de correctifs au niveau de la couche adaptateur : normalisation des dates de vol.",
        "Déduplication intelligente des lignes de bagages.",
        "Mécanismes de fallback résilients pour les données passagers APIS (Advance Passenger Information)."
      ]
    },
    {
      airline: "GOKYTE / Kyte GDS Aggregator",
      code: "KYTE",
      details: [
        "Intégration complète de l'agrégateur GDS Kyte avec distribution des frais bancaires.",
        "Normalisation et durcissement des réponses d'erreurs GDS hétérogènes.",
        "Implémentation de logiques avancées de retry automatique pour la récupération de réservations."
      ]
    }
  ],
  sharedInfrastructure: [
    "safeClone : utilitaire interne de clonage profond ultra-rapide sécurisé contre les références circulaires.",
    "Normalisation unifiée de la sélection des vols et gestion de panier multi-transporteurs.",
    "Moteur de calcul de conversion tarifaire multi-devises haute précision.",
    "Contribution majeure au moteur de Reshop (réémission de billets et modification de vol multi-compagnies).",
    "Conception de plans de tests E2E pour l'intégration NDC Singapore Airlines (SQ)."
  ],
  testingFramework: [
    "Framework de tests E2E Playwright data-driven avec scénarios validés par Zod.",
    "Pattern Page Objects modulaire et maintenable.",
    "API interne de résilience et de réessais (retry) pour absorber la latence et les instabilités des bacs à sable partenaires."
  ],
  techStack: [
    "Nuxt 4", "Vue 3.5", "TypeScript", "Vuetify 4", "Pinia", "Vee-Validate",
    "Node.js", "Express", "Sequelize ORM", "PostgreSQL",
    "Playwright", "Zod", "GitLab CI", "Nix (devenv)", "Docker"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "gazes",
    title: "Gazes 🎬⚡",
    subtitle: "Streaming Torrent P2P séquentiel avec maillage WebRTC in-browser",
    badge: "Open Source / Perso",
    category: "Streaming & P2P",
    description: "Plateforme de streaming vidéo pair-à-pair scalable et économique. Téléchargement séquentiel BitTorrent combiné à une distribution maillée WebRTC directement dans le navigateur (« YouTube for Torrents »).",
    longDescription: "Gazes permet une lecture vidéo instantanée à partir d'essaims BitTorrent standard sans nécessiter d'installation client. Le backend en Go assure le téléchargement séquentiel prioritaire et le transcodage/remuxage à la volée (AV1/HEVC/VP9 vers flux compatible navigateur), tandis que les spectateurs s'échangent les segments vidéo via WebRTC Datachannels, divisant drastiquement les coûts de bande passante serveur.",
    highlights: [
      "Moteur séquentiel haute performance écrit en Go pour prioriser les chunks du début de vidéo.",
      "Maillage WebRTC in-browser (P2P Mesh) réduisant la charge serveur de plus de 80% lors de forts pics de spectateurs.",
      "Pipeline de remuxage temps réel et adaptation automatique des pistes audio (Opus/AAC) et sous-titres (ASS/VTT).",
      "Évaluation dynamique de la qualité des sources torrent basée sur l'activité réelle du swarm plutôt que des deadlines fixes.",
      "Algorithme intelligent de matching des noms d'épisodes et filtres anti-doublons."
    ],
    techStack: ["Go", "WebRTC", "BitTorrent (uTP/DHT)", "Next.js", "TypeScript", "Docker", "FFmpeg", "WebSockets"],
    iconName: "Film",
    architecture: {
      nodes: [
        { label: "Navigateur Client", role: "Lecteur vidéo & noeud WebRTC P2P", type: "client" },
        { label: "Swarm P2P WebRTC", role: "Partage de segments entre spectateurs actifs", type: "mesh" },
        { label: "Gazes Streaming Bridge", role: "Moteur séquentiel Go & remux à la volée", type: "bridge" },
        { label: "Swarm BitTorrent Public", role: "Sources et seeders distribués mondiaux", type: "swarm" }
      ],
      description: "Le flux démarre instantanément via le Streaming Bridge Go qui remuxe le conteneur MKV/AV1, puis les spectateurs connectés prennent le relais en distribuant les segments en WebRTC."
    }
  },
  {
    id: "annotation-extension",
    title: "AI Web Annotator 🎯",
    subtitle: "Extension Chrome MV3 pour l'annotation interactive et le prompt engineering IA",
    badge: "Extension Chrome MV3",
    category: "AI & DevTools",
    description: "Extension de navigateur permettant de figer n'importe quel site, d'annoter visuellement ses éléments DOM avec des badges numérotés, et d'exporter un contexte technique ultra-précis pour les LLMs.",
    longDescription: "Conçue pour accélérer les workflows avec ChatGPT, Claude et Gemini, cette extension résout le problème de l'imprécision des instructions d'interface. Elle permet de pointer précisément des éléments web en figeant le comportement de la page, en générant des sélecteurs CSS robustes, des chemins XPath absolus, les dimensions exactes et une capture d'écran PNG avec badges surimposés.",
    highlights: [
      "Mode Freeze & Capture : neutralisation complète des clics et événements natifs pour inspecter sans navigation intempestive.",
      "Génération automatique d'identifiants DOM robustes (sélecteurs CSS optimisés et XPath fiables).",
      "Capture d'écran haute fidélité avec marquage vectoriel numéroté en surimpression directe.",
      "Export combiné : JSON structuré (rects, classes, tags, texte visible) + PNG pour une compréhension multimodale parfaite par l'IA.",
      "Pipeline CI/CD Forgejo Actions automatisé avec packaging d'artefacts ZIP sur tags git."
    ],
    techStack: ["TypeScript", "Chrome Extension MV3", "DOM API", "Canvas / SVG", "Vite", "Tailwind CSS"],
    iconName: "Crosshair"
  },
  {
    id: "homelab-cluster",
    title: "Personal Cluster & Homelab 🖥️",
    subtitle: "Infrastructure souveraine et auto-hébergée haute résilience",
    badge: "Self-Hosted & DevOps",
    category: "Infrastructure & Cloud",
    description: "Cluster privé auto-hébergé hébergeant Git (Gitea), un serveur mail sécurisé, une stack média complète, avec monitoring complet OpenTelemetry & Grafana.",
    longDescription: "Gestion de l'infrastructure sous forme de code (IaC) à l'aide de configurations Nix/NixOS reproductibles, de conteneurs Docker/Podman orchestrés, et d'automatisation CI/CD. Centralisation des secrets avec HashiCorp Vault et observabilité continue avec Grafana.",
    highlights: [
      "Gestion d'environnement et de serveurs déclaratifs avec Nix et NixOS.",
      "Stack d'observabilité complète avec métriques OpenTelemetry et tableaux de bord Grafana.",
      "Hébergement souverain : instances Git sécurisées, relais mail indépendant et pipelines automatisés.",
      "Secrets management et durcissement des accès avec HashiCorp Vault et réseaux isolés."
    ],
    techStack: ["Nix / NixOS", "Docker", "Podman", "Kubernetes", "Grafana", "OpenTelemetry", "HashiCorp Vault", "Ansible"],
    iconName: "Server"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    category: "frontend",
    skills: [
      { name: "Vue 3 & Vue 3.5", context: "Architecture modulaire de l'Online Booking Tool B2B", isPrimary: true },
      { name: "Nuxt 4", context: "Applications SSR/SPA haute performance", isPrimary: true },
      { name: "TypeScript", context: "Typage strict de bout en bout (Zod, modèles NDC)", isPrimary: true },
      { name: "Vuetify 4", context: "Composants d'interface métier riches et accessibles" },
      { name: "Pinia", context: "Gestion d'état global du panier et des flux de réservation" },
      { name: "Vee-Validate & Zod", context: "Validation déclarative et sûre des formulaires voyageurs" }
    ]
  },
  {
    title: "Backend & APIs",
    category: "backend",
    skills: [
      { name: "Node.js & Express", context: "APIs B2B haute charge et moteurs d'agrégation", isPrimary: true },
      { name: "Go (Golang)", context: "Moteurs système, streaming séquentiel & réseaux P2P", isPrimary: true },
      { name: "PostgreSQL", context: "Modélisation de schémas relationnels et requêtes optimisées", isPrimary: true },
      { name: "Sequelize ORM", context: "Gestion transactionnelle et migrations de données" },
      { name: "MongoDB & Redis", context: "Cache de disponibilité, sessions et stockage documentaire" },
      { name: "OpenAPI / Swagger", context: "Documentation vivante et contrats d'interface stricts" }
    ]
  },
  {
    title: "DevOps & Cloud",
    category: "devops",
    skills: [
      { name: "Docker & Podman", context: "Conteneurisation reproductible dev/prod", isPrimary: true },
      { name: "Nix & NixOS", context: "Environnements devenv déclaratifs et zéro dérive", isPrimary: true },
      { name: "GitLab CI & GitHub Actions", context: "Pipelines E2E, packaging et déploiements continus" },
      { name: "Kubernetes", context: "Orchestration et déploiement de microservices" },
      { name: "Grafana & OpenTelemetry", context: "Observabilité, métriques et traçabilité applicative" },
      { name: "HashiCorp Vault & Terraform", context: "Secrets sécurisés et provisioning d'infrastructure" }
    ]
  },
  {
    title: "Testing & Résilience",
    category: "testing",
    skills: [
      { name: "Playwright", context: "Suites de tests E2E data-driven avec Zod & Page Objects", isPrimary: true },
      { name: "Mocha & Chai", context: "Tests unitaires et d'intégration des calculateurs tarifaires" },
      { name: "Zod Schema Validation", context: "Sécurisation stricte des contrats de données aux frontières" },
      { name: "Stratégies Retry & Circuit-Breaker", context: "Tolérance aux pannes des API partenaires distantes" }
    ]
  },
  {
    title: "Protocoles & Métier",
    category: "protocols",
    skills: [
      { name: "IATA NDC (New Distribution Capability)", context: "Shopping, Pricing, OrderCreate, SeatAvailability, Ancillaries", isPrimary: true },
      { name: "WebRTC DataChannels", context: "Maillage P2P et échanges de paquets vidéo en temps réel", isPrimary: true },
      { name: "BitTorrent Protocol", context: "Sequential downloading, DHT, uTP, Swarm analytics" },
      { name: "REST & SOAP / XML", context: "Intégrations GDS legacy et APIs modernes" }
    ]
  },
  {
    title: "Langages de programmation",
    category: "languages",
    skills: [
      { name: "TypeScript", context: "Langage de prédilection, typage avancé et patterns OOP/FP", isPrimary: true },
      { name: "JavaScript (ESNext)", context: "Écosystème Node.js et Web moderne" },
      { name: "Go", context: "Programmation concurrente (goroutines, channels, streaming)" },
      { name: "Python", context: "Scripting, tooling et automatisation" },
      { name: "Bash", context: "Administration système Linux et scripts de build" }
    ]
  }
];
