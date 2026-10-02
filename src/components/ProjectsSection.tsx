import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { 
  Film, 
  Crosshair, 
  Server, 
  ExternalLink, 
  Github, 
  Check, 
  ArrowUpRight,
  Layers,
  Cpu,
  Network,
  Share2
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string>('gazes');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Film':
        return <Film className="w-5 h-5 text-indigo-400" />;
      case 'Crosshair':
        return <Crosshair className="w-5 h-5 text-emerald-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-sky-400" />;
      default:
        return <Layers className="w-5 h-5 text-sky-400" />;
    }
  };

  const current = PROJECTS.find((p) => p.id === activeProject) || PROJECTS[0];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
              <Network className="w-3.5 h-3.5" />
              <span>Systèmes & Projets Personnels</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projets Conçus & Déployés
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-400 max-w-md">
            Des moteurs de streaming pair-à-pair aux extensions de prompt engineering IA et clusters souverains.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project.id)}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeProject === project.id
                  ? 'bg-slate-900 border-indigo-500/60 shadow-lg shadow-indigo-950/30'
                  : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                {getIcon(project.iconName)}
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {project.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">{project.title}</h3>
              <p className="text-xs text-slate-400 line-clamp-2">{project.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Active Project Full Showcase */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Column: Details & Highlights */}
            <div className="flex-1 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {current.title}
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {current.category}
                  </span>
                </div>
                <p className="text-base font-medium text-slate-300 mb-3">
                  {current.subtitle}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {current.longDescription}
                </p>
              </div>

              {/* Technical Highlights */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Points Techniques Clés
                </h4>
                <ul className="space-y-2.5">
                  {current.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Technologies Employées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {current.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950 border border-slate-800 text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Architecture Diagram / Visual Representation */}
            <div className="w-full lg:w-96 shrink-0 rounded-xl bg-slate-950 border border-slate-800 p-5 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                  <Share2 className="w-4 h-4" />
                  Topologie & Flux Données
                </span>
                <span className="text-[10px] text-slate-500">Live Blueprint</span>
              </div>

              {current.id === 'gazes' && (
                <div className="mt-4 space-y-3">
                  <div className="p-3 rounded-lg bg-slate-900 border border-indigo-500/30 text-center">
                    <span className="text-indigo-300 font-semibold block">Navigateur Client (Web Player)</span>
                    <span className="text-[11px] text-slate-400">Lecteur HLS/MSE & noeud P2P</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-slate-500 text-[11px]">
                    <span>↕ (WebRTC DataChannels)</span>
                  </div>

                  <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/40 text-center">
                    <span className="text-sky-300 font-semibold block">Swarm WebRTC P2P (Spectateurs)</span>
                    <span className="text-[11px] text-slate-400">Partage direct sans frais serveur</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-slate-500 text-[11px]">
                    <span>↕ (Fallback HTTP / Remux)</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <span className="text-purple-300 font-semibold block">Gazes Streaming Bridge (Go)</span>
                    <span className="text-[11px] text-slate-400">Sequential Engine & Transcodage</span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-slate-500 text-[11px]">
                    <span>↕ (BitTorrent TCP/uTP/DHT)</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <span className="text-slate-400 block text-[11px]">Swarm BitTorrent Public</span>
                  </div>
                </div>
              )}

              {current.id === 'annotation-extension' && (
                <div className="mt-4 space-y-3">
                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/40 text-center">
                    <span className="text-emerald-300 font-semibold block">Page Web Cible (Freeze Mode)</span>
                    <span className="text-[11px] text-slate-400">Blocage événements & survol DOM</span>
                  </div>

                  <div className="flex items-center justify-center text-slate-500 text-[11px]">
                    <span>↓ (Pointage & Badging)</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <span className="text-white font-semibold block">Inspecteur d'éléments</span>
                    <span className="text-[11px] text-slate-400">Génération sélecteur CSS & XPath</span>
                  </div>

                  <div className="flex items-center justify-center text-slate-500 text-[11px]">
                    <span>↓ (Double Export Contexte)</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-sky-300 font-semibold text-[11px] block">Capture PNG</span>
                      <span className="text-[10px] text-slate-500">Badges surimposés</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <span className="text-amber-300 font-semibold text-[11px] block">Payload JSON</span>
                      <span className="text-[10px] text-slate-500">Dimensions & DOM</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-500/30 text-center">
                    <span className="text-indigo-300 text-xs font-semibold block">LLM Ready</span>
                    <span className="text-[10px] text-slate-400">ChatGPT, Claude, Gemini</span>
                  </div>
                </div>
              )}

              {current.id === 'homelab-cluster' && (
                <div className="mt-4 space-y-3">
                  <div className="p-3 rounded-lg bg-slate-900 border border-sky-500/40 text-center">
                    <span className="text-sky-300 font-semibold block">NixOS / Nix Declarative Host</span>
                    <span className="text-[11px] text-slate-400">Zero drift, isolation par flake</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                      <span className="text-white block font-medium">Gitea</span>
                      <span className="text-[10px] text-slate-500">CI/CD & Git repos</span>
                    </div>
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                      <span className="text-white block font-medium">Mail Server</span>
                      <span className="text-[10px] text-slate-500">DMARC/DKIM/SPF</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <span className="text-purple-300 font-semibold block">HashiCorp Vault</span>
                    <span className="text-[11px] text-slate-400">Secrets & Certificats TLS</span>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-center">
                    <span className="text-emerald-300 font-semibold block">Grafana + OpenTelemetry</span>
                    <span className="text-[11px] text-slate-400">Monitoring & Distributed Tracing</span>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
