
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
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
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-bio-dark relative">
        <BioinformaticsBackground />
        <Sidebar />
        <Hero />
        <About />
        <Career />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
