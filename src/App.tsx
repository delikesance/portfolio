import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { InkLayer } from './components/InkLayer';

export const App: React.FC = () => (
  <div className="relative isolate min-h-screen overflow-x-hidden bg-background font-sans text-[#fafafa]">
    <CustomCursor />
    <InkLayer />
    <Navbar />
    <main className="relative z-10">
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
    </main>
    <div className="relative z-10">
      <Footer />
    </div>
  </div>
);

export default App;
