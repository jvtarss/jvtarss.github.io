
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Career from '../components/Career';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BioinformaticsBackground from '../components/BioinformaticsBackground';
import Sidebar from '../components/Sidebar';
import { LanguageProvider } from '../contexts/LanguageContext';

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleSidebarToggle = (collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-bio-dark relative">
        <BioinformaticsBackground />
        <Sidebar onToggle={handleSidebarToggle} />
        <div 
          className={`transition-all duration-300 ease-in-out ${
            sidebarCollapsed ? 'pl-16' : 'pl-0 md:pl-16 lg:pl-64'
          }`}
        >
          <Hero />
          <About />
          <Career />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
