import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/profile';
import ProjectSection from './components/ProjectSection';
import ExperienceSection from './components/ExperienceSection';
import SocialSection from './components/SocialSection';

function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <ProjectSection />
        <ExperienceSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;