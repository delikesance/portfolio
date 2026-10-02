import React, { useState } from 'react';
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Cpu, 
  Code, 
  Terminal, 
  Globe, 
  Server, 
  ShieldCheck, 
  Check, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les compétences' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'devops', label: 'DevOps & Infra' },
    { id: 'testing', label: 'Testing & Résilience' },
    { id: 'protocols', label: 'Protocoles' },
    { id: 'languages', label: 'Langages' },
  ];

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Stack Technique & Savoir-faire</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Compétences & Technologies
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-400 max-w-md">
            Un spectre technique complet allant du composant d'interface utilisateur aux pipelines CI/CD et à l'administration bare-metal.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Groups */}
        <div className="space-y-8 mb-14">
          {filteredCategories.map((group) => (
            <div key={group.category} className="rounded-2xl bg-slate-900/50 border border-slate-800/80 p-6 backdrop-blur-sm">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                {group.title}
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/90 hover:border-sky-500/40 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      {skill.isPrimary && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                          Expert
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 leading-snug">
                      {skill.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Dual Card: Languages & Engineering Philosophy */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Languages Card */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-sky-400" />
              Langues de travail
            </h3>
            <div className="space-y-3">
              {PERSONAL_INFO.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-sm font-semibold text-slate-200">{lang.name}</span>
                  <span className="text-xs font-mono text-emerald-400">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Background */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              Parcours & Philosophie d'Ingénierie
            </h3>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2.5 text-xs sm:text-sm text-slate-300">
              <p className="font-semibold text-sky-300">
                Autodidacte passionné — programmation dès l'âge de 8 ans.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Apprentissage continu par la pratique, la conception de projets open source et le code en production. Sens aigu de la robustesse : typage strict (TypeScript/Zod), isolation reproductible (Nix), résilience réseau et tolérance aux fautes.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
