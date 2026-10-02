import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  FileDown, 
  Mail, 
  Check, 
  Menu, 
  X, 
  Sparkles,
  Plane,
  Terminal as TerminalIcon,
  Layers,
  Cpu
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const navLinks = [
    { label: 'À propos', href: '#about', icon: Sparkles },
    { label: 'Expérience NDC', href: '#experience', icon: Plane },
    { label: 'Projets', href: '#projects', icon: Layers },
    { label: 'Compétences', href: '#skills', icon: Cpu },
    { label: 'Terminal', href: '#terminal', icon: TerminalIcon },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white font-mono font-bold text-lg shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              AC
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-[#090d16] rounded-full animate-pulse"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                Angelo Clauin
              </span>
              <span className="text-xs font-mono text-slate-400">
                Fullstack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-400" />
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Copy Email & Download CV */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-all"
              title="Copier l'email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-mono">Copié !</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            <a
              href="/resume.pdf"
              download="Angelo_Clauin_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 rounded-lg shadow-sm shadow-sky-500/25 transition-all hover:shadow-sky-500/40 hover:-translate-y-0.5"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV (PDF)</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/resume.pdf"
              download="Angelo_Clauin_Resume.pdf"
              className="p-2 text-sky-400 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700/80"
              title="Télécharger CV"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700/80"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-slate-900/95 border border-slate-800 rounded-2xl backdrop-blur-lg shadow-xl animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    <Icon className="w-4 h-4 text-sky-400" />
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-3 mt-1 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    handleCopyEmail();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  {copied ? "Copié !" : PERSONAL_INFO.email}
                </button>
                <a
                  href="/resume.pdf"
                  download="Angelo_Clauin_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl"
                >
                  <FileDown className="w-4 h-4" />
                  Télécharger le CV complet (PDF)
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
