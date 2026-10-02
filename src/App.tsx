import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans relative selection:bg-sky-500/30 selection:text-sky-200">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none -z-10 opacity-70"></div>

      <Navbar />

      <main className="flex-1">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
