import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, CheckCircle2, Server, Plane, Film, Code } from 'lucide-react';

export const SystemTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ndc' | 'whoami' | 'gazes' | 'homelab'>('ndc');
  const [runningStep, setRunningStep] = useState(3);

  return (
    <div id="terminal" className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950/90 shadow-2xl shadow-sky-950/30 backdrop-blur-xl">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
            workstation@perpignan: ~/projects/runtime
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-lg border border-slate-800/80 text-xs font-mono">
          <button
            onClick={() => setActiveTab('ndc')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'ndc'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Plane className="w-3 h-3 text-sky-400" />
            ndc-pipeline
          </button>
          <button
            onClick={() => setActiveTab('gazes')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'gazes'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Film className="w-3 h-3 text-indigo-400" />
            gazes-mesh
          </button>
          <button
            onClick={() => setActiveTab('homelab')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'homelab'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Server className="w-3 h-3 text-emerald-400" />
            homelab-cluster
          </button>
          <button
            onClick={() => setActiveTab('whoami')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'whoami'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code className="w-3 h-3 text-purple-400" />
            whoami
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto min-h-[310px]">
        {activeTab === 'ndc' && (
          <div className="space-y-3">
            <div className="text-slate-500 flex items-center justify-between pb-2 border-b border-slate-800/80">
              <span className="text-sky-400 font-semibold flex items-center gap-2">
                $ metis-cli ndc-integration --carrier=VY,V7,AFKL --validate-e2e
              </span>
              <button 
                onClick={() => setRunningStep((prev) => (prev % 4) + 1)}
                className="text-[11px] px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3 h-3" /> Rejouer pipeline
              </button>
            </div>

            <div className="grid gap-2">
              <div className="flex items-start gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-200">[AirShoppingRQ/RS]</span> Vueling (VY) & Volotea (V7)
                  <p className="text-xs text-slate-400 font-normal">
                    Flux unifié normalisé. Cartographie des cabines, segments de vol et taxes aéroportuaires.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-200">[OfferPrice & Ancillaries]</span> SeatAvailability & ServiceList
                  <p className="text-xs text-slate-400 font-normal">
                    19 fonctionnalités ancillaires vérifiées. Gestion fine des frais bancaires (card fee distribution) & BSP settlement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-200">[Resilience Layer & GDS Kyte]</span> Normalized Retry Engine
                  <p className="text-xs text-slate-400 font-normal">
                    Fix sandbox Kyte : élimination duplication passagers et double facturation. Fallback APIS pour Air France/KLM.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 text-sky-400 bg-sky-950/30 p-2.5 rounded-lg border border-sky-800/40">
                <Play className="w-4 h-4 mt-0.5 shrink-0 text-sky-400 animate-pulse" />
                <div>
                  <span className="font-semibold text-sky-300">[OrderCreate & Instant Payment]</span> Statut : 200 OK (PNR émis)
                  <p className="text-xs text-slate-300 font-normal mt-0.5">
                    Tests Playwright E2E data-driven validés avec schémas Zod stricts. Couverture multi-compagnies verte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gazes' && (
          <div className="space-y-3">
            <div className="text-slate-500 pb-2 border-b border-slate-800/80">
              <span className="text-indigo-400 font-semibold">$ gazes-engine --swarm-eval=active --remux=av1-opus</span>
            </div>
            <div className="space-y-2">
              <p className="text-emerald-400">✔ BitTorrent Sequential Engine : Chunks 0..15 chargés en priorité (TTFB: 240ms)</p>
              <p className="text-indigo-300">⚡ On-The-Fly Remuxing : Matroska MKV (AV1 + Opus) ➔ WebM / MP4 HLS WebRTC stream</p>
              <p className="text-sky-300">
                🌐 In-Browser WebRTC Mesh : 12 pairs connectés sur le swarm local
                <br />
                <span className="text-slate-400 text-xs ml-4">
                  ↳ 84% de bande passante offloadée du serveur via WebRTC DataChannels P2P.
                </span>
              </p>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                <div className="flex justify-between text-slate-400">
                  <span>Playback Buffer: 45s</span>
                  <span className="text-emerald-400">Swarm Health: 100% (No stutter)</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded mt-1.5 overflow-hidden flex">
                  <div className="bg-sky-500 h-full w-2/5" title="Direct HTTP/Bridge (Initial chunks)"></div>
                  <div className="bg-indigo-500 h-full w-3/5" title="WebRTC Peer-to-Peer Mesh chunks"></div>
                </div>
                <div className="flex gap-4 mt-2 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky-500"></span> Bridge Go initial</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> P2P WebRTC mesh (Gratuit)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'homelab' && (
          <div className="space-y-3">
            <div className="text-slate-500 pb-2 border-b border-slate-800/80">
              <span className="text-emerald-400 font-semibold">$ nixos-rebuild dry-run && cluster-ctl health</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-slate-300 font-medium">
                  <span>gitea.self-hosted</span>
                  <span className="text-emerald-400 text-[11px]">● ACTIVE</span>
                </div>
                <p className="text-slate-500 text-[11px] mt-1">GitLab/Forgejo pipelines & code storage</p>
              </div>

              <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-slate-300 font-medium">
                  <span>mail-server.cluster</span>
                  <span className="text-emerald-400 text-[11px]">● SECURED</span>
                </div>
                <p className="text-slate-500 text-[11px] mt-1">DKIM, SPF, DMARC 100/100 score</p>
              </div>

              <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-slate-300 font-medium">
                  <span>grafana.otel.node</span>
                  <span className="text-emerald-400 text-[11px]">● STREAMING</span>
                </div>
                <p className="text-slate-500 text-[11px] mt-1">OpenTelemetry spans & host metrics</p>
              </div>

              <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between text-slate-300 font-medium">
                  <span>hashicorp-vault</span>
                  <span className="text-emerald-400 text-[11px]">● UNSEALED</span>
                </div>
                <p className="text-slate-500 text-[11px] mt-1">Dynamic secrets & API key tokens</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic">
              Configuré avec Nix/NixOS et Docker/Podman pour une reproductibilité absolue.
            </p>
          </div>
        )}

        {activeTab === 'whoami' && (
          <div className="space-y-2 text-slate-300">
            <span className="text-purple-400 font-semibold">$ cat developer.json</span>
            <pre className="text-xs bg-slate-900/70 p-3 rounded-lg border border-slate-800 text-sky-200 overflow-x-auto">
{`{
  "name": "Angelo Clauin",
  "title": "Fullstack Developer",
  "location": "Perpignan, France",
  "email": "clauinangelo@proton.me",
  "profile": "Autodidacte (développe depuis l'âge de 8 ans, pro depuis 2025)",
  "specialties": [
    "Fullstack TypeScript / Node.js / Vue 3 & Nuxt 4",
    "Airline NDC integrations (IATA XML/REST)",
    "Distributed P2P networks (WebRTC, BitTorrent, Go)",
    "Self-hosted infrastructure (NixOS, Docker, Grafana, OpenTelemetry)"
  ],
  "currentRole": "Fullstack Developer @ Metis Digital (Online Booking Tool B2B)",
  "philosophy": "Pragmatisme, contrats stricts Zod, résilience applicative et infrastructure déclarative"
}`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
