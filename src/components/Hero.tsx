import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SystemTerminal } from './SystemTerminal';
import { 
  FileDown, 
  MapPin, 
  Mail, 
  ArrowRight, 
  CheckCircle,
  Terminal,
  ShieldCheck,
  Plane,
  Server
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-transparent blur-3xl -z-10 pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 blur-3xl -z-10 pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability & Location Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-xs font-mono">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Fullstack TypeScript · Node.js · Vue 3</span>
          </div>
        </div>

        {/* Main Title & Tagline */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
            Angelo <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Clauin</span>
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-slate-200 mb-4 leading-snug">
            Fullstack Developer spécialisé dans les <span className="text-sky-400">architectures B2B</span>, les <span className="text-indigo-400">intégrations NDC aériennes</span> critiques et les <span className="text-purple-400">systèmes distribués</span>.
          </p>

          <p className="text-base text-slate-400 leading-relaxed mb-8">
            {PERSONAL_INFO.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all hover:-translate-y-0.5"
            >
              <span>Explorer l'expérience NDC</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              download="Angelo_Clauin_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-white font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4 text-sky-400" />
              <span>Télécharger le CV (PDF)</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 text-slate-300 hover:text-white font-mono text-xs transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div 
              key={i} 
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-sky-400 mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive System Terminal */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              Console Interactive & Observabilité Métier
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Cliquez sur les onglets pour tester les simulateurs en direct
            </span>
          </div>
          <SystemTerminal />
        </div>

      </div>
    </section>
  );
};
