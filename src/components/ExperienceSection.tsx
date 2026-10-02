import React, { useState } from 'react';
import { EXPERIENCE_METIS } from '../data/portfolioData';
import { 
  Briefcase, 
  Plane, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  TestTube2, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Cpu
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedCarrier, setSelectedCarrier] = useState<number>(0);

  return (
    <section id="experience" className="py-20 relative bg-slate-950/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Production & B2B Travel Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Expérience Professionnelle
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-400 max-w-md">
            Développement de flux transactionnels haute fiabilité, protocoles IATA NDC et automatisation de tests de bout en bout.
          </p>
        </div>

        {/* Company Card: Metis Digital */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {EXPERIENCE_METIS.company}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  {EXPERIENCE_METIS.role}
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-1">
                {EXPERIENCE_METIS.location} · <span className="text-slate-300 font-medium">{EXPERIENCE_METIS.period}</span>
              </p>
            </div>

            {/* Platform Scope Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
              <Plane className="w-4 h-4 text-sky-400" />
              <span>Online Booking Tool (OBT) multi-services B2B</span>
            </div>
          </div>

          {/* Role Description */}
          <div className="mt-6 mb-8 text-slate-300 text-sm sm:text-base leading-relaxed">
            {EXPERIENCE_METIS.description}
          </div>

          {/* Sub-section 1: Airline NDC Integrations with interactive carrier tabs */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-semibold text-white flex items-center gap-2">
                <Plane className="w-4 h-4 text-sky-400" />
                Intégrations NDC Aériennes de Bout en Bout
              </h4>
              <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                Sélectionnez une compagnie pour voir les spécificités
              </span>
            </div>

            {/* Carrier Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {EXPERIENCE_METIS.ndcIntegrations.map((item, idx) => (
                <button
                  key={item.code}
                  onClick={() => setSelectedCarrier(idx)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    selectedCarrier === idx
                      ? 'bg-sky-950/40 border-sky-500/50 text-white shadow-md shadow-sky-900/20'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-mono text-sky-400 font-bold">{item.code}</div>
                  <div className="text-sm font-semibold truncate">{item.airline.split('(')[0]}</div>
                </button>
              ))}
            </div>

            {/* Carrier Details Box */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/90">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                <span className="text-sm font-semibold text-sky-300">
                  {EXPERIENCE_METIS.ndcIntegrations[selectedCarrier].airline}
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/50">
                  Vérifié en production
                </span>
              </div>
              <ul className="space-y-2.5">
                {EXPERIENCE_METIS.ndcIntegrations[selectedCarrier].details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sub-section 2: Shared Infrastructure & Tooling */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                Infrastructure Partagée & Tooling Métier
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                {EXPERIENCE_METIS.sharedInfrastructure.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-mono text-xs">↳</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub-section 3: Playwright E2E & Resilience */}
            <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <TestTube2 className="w-4 h-4 text-emerald-400" />
                Qualité, Résilience & Framework E2E
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                {EXPERIENCE_METIS.testingFramework.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono text-xs">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
              Stack Technologique Metis Digital
            </div>
            <div className="flex flex-wrap gap-1.5">
              {EXPERIENCE_METIS.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800/90 text-slate-300 border border-slate-700/80 hover:border-sky-500/40 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
