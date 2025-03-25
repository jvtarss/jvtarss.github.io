
import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { translations } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pl-0 transition-all duration-300"
      ref={heroRef}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 transition-opacity duration-1000">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className={`lg:col-span-12 space-y-8 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
            <div>
              <div className="inline-block glass-card py-1 px-3 rounded-full text-sm text-bio-accent mb-4 backdrop-blur-xl border border-white/10">
                {translations.heroSubtitle}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {translations.heroTitle.split(" ")[0]} <span className="text-bio-accent">{translations.heroTitle.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
                {translations.heroDescription}
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noreferrer"
                className="social-icon backdrop-blur-xl border border-white/20 hover:border-bio-accent/50 hover:shadow-[0_0_15px_rgba(70,208,164,0.3)] transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noreferrer"
                className="social-icon backdrop-blur-xl border border-white/20 hover:border-bio-accent/50 hover:shadow-[0_0_15px_rgba(70,208,164,0.3)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            <div className="pt-4">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={800}
                offset={-70}
                className="accent-button inline-flex items-center px-6 py-3 rounded-lg cursor-pointer backdrop-blur-xl hover:shadow-[0_0_15px_rgba(70,208,164,0.5)] transition-all duration-500"
              >
                {translations.learnMore}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={800}
          offset={-70}
          className="w-10 h-10 rounded-full glass-button flex items-center justify-center cursor-pointer backdrop-blur-xl border border-white/20 hover:border-bio-accent/30 hover:shadow-[0_0_15px_rgba(70,208,164,0.3)] transition-all duration-300"
        >
          <ArrowDown className="h-5 w-5 text-white" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
