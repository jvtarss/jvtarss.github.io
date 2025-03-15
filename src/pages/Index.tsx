
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Career from '../components/Career';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bio-dark">
      <Navbar />
      <Hero />
      <About />
      <Career />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
