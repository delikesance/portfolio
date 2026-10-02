import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Check, 
  FileDown, 
  MapPin, 
  ArrowUp, 
  Heart,
  Plane,
  Terminal,
  ShieldCheck
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-500/10 blur-3xl -z-10 pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 mb-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2 block">
                Contact & Collaboration
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Échangeons sur vos projets complexes & architectures B2B
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Intégrations IATA NDC, architectures haute concurrence, plateformes Vue/Nuxt, microservices Go/Node.js ou infrastructure souveraine.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs border border-slate-700 transition-all shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Email copié !</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>

              <a
                href="/resume.pdf"
                download="Angelo_Clauin_Resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-xs shadow-lg shadow-sky-500/25 transition-all hover:shadow-sky-500/40"
              >
                <FileDown className="w-4 h-4" />
                <span>Télécharger le CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links & Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800/80 gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 font-semibold">{PERSONAL_INFO.name}</span>
            <span>— Fullstack Developer ({PERSONAL_INFO.location})</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Autodidacte dès 8 ans · Pro depuis 2025</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
