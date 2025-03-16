
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { translations } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pl-0 md:pl-16 lg:pl-64"
      ref={heroRef}
    >
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div id="bioinfoBg" className="absolute inset-0 z-0 opacity-20"></div>
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-bio-accent/10 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-bio-accent/10 rounded-full filter blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 transition-opacity duration-1000 opacity-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div>
              <div className="inline-block glass-card py-1 px-3 rounded-full text-sm text-bio-accent mb-4 backdrop-blur-xl border border-white/10 animate-pulse">
                {translations.heroSubtitle}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {translations.heroTitle.split(" ")[0]} <span className="text-bio-accent">{translations.heroTitle.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
                {translations.heroDescription}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 py-4">
              <img src="https://skillicons.dev/icons?i=react,ts,nodejs,python" alt="Skills" className="animate-fade-in" style={{ animationDelay: '0.4s' }} />
              <img src="https://skillicons.dev/icons?i=tailwind,figma,docker,aws" alt="More Skills" className="animate-fade-in" style={{ animationDelay: '0.6s' }} />
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noreferrer"
                className="social-icon backdrop-blur-xl border border-white/20 hover:border-bio-accent/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noreferrer"
                className="social-icon backdrop-blur-xl border border-white/20 hover:border-bio-accent/50 transition-all duration-300"
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
                className="accent-button inline-flex items-center px-6 py-3 rounded-lg cursor-pointer backdrop-blur-xl hover:shadow-[0_0_15px_rgba(144,255,52,0.5)] transition-all duration-500"
              >
                {translations.learnMore}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-in-right opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-bio-accent/20 to-white/20 rounded-2xl blur opacity-75 animate-pulse"></div>
              <div className="relative glass-card rounded-2xl overflow-hidden h-[400px] w-[300px] md:h-[500px] md:w-[350px] animate-float backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <div className="text-white/50 text-center p-6">
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="border-2 border-dashed border-white/30 rounded-xl w-full h-full flex items-center justify-center p-4">
                      <span className="font-dm-mono">Photo here</span>
                    </div>
                  </div>
                </div>
              </div>
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
          className="w-10 h-10 rounded-full glass-button flex items-center justify-center cursor-pointer backdrop-blur-xl border border-white/20 hover:border-bio-accent/30 transition-all duration-300"
        >
          <ArrowDown className="h-5 w-5 text-white" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
