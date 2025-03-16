
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, ArrowDown, Code, GraduationCap, Beaker } from 'lucide-react';
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
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3">
                <div className="glass-card p-3 rounded-lg backdrop-blur-xl border border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-2 text-bio-accent">
                    <Code className="h-5 w-5" />
                    <span className="font-medium">Full Stack Development</span>
                  </div>
                </div>
                <div className="glass-card p-3 rounded-lg backdrop-blur-xl border border-white/10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2 text-bio-accent">
                    <GraduationCap className="h-5 w-5" />
                    <span className="font-medium">Bioinformatics</span>
                  </div>
                </div>
                <div className="glass-card p-3 rounded-lg backdrop-blur-xl border border-white/10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-center gap-2 text-bio-accent">
                    <Beaker className="h-5 w-5" />
                    <span className="font-medium">Bioprocess Engineering</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 py-4">
              <img src="https://skillicons.dev/icons?i=react,ts,nodejs,python" alt="Skills" className="animate-fade-in" style={{ animationDelay: '0.7s' }} />
              <img src="https://skillicons.dev/icons?i=tailwind,figma,docker,aws" alt="More Skills" className="animate-fade-in" style={{ animationDelay: '0.8s' }} />
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
              <div className="relative glass-card rounded-2xl overflow-hidden h-[400px] w-[300px] md:h-[500px] md:w-[350px] animate-float backdrop-blur-xl border border-white/20">
                <div className="w-full h-full p-6 flex flex-col items-center justify-center gap-8">
                  <div className="w-full h-2/3 glass-card rounded-xl overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 font-dm-mono">
                      Profile Image
                    </div>
                  </div>
                  <div className="w-full space-y-3">
                    <div className="h-8 w-full glass-card rounded-md animate-pulse"></div>
                    <div className="h-4 w-2/3 glass-card rounded-md animate-pulse"></div>
                    <div className="h-4 w-full glass-card rounded-md animate-pulse"></div>
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
