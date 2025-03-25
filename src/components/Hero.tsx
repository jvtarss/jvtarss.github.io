
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
          <div className={`lg:col-span-7 space-y-8 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
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
          
          <div className={`lg:col-span-5 flex justify-center lg:justify-end ${isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-bio-accent/20 to-white/20 rounded-2xl blur opacity-75"></div>
              <div className="relative glass-card rounded-2xl overflow-hidden h-[400px] w-[300px] md:h-[500px] md:w-[350px] backdrop-blur-xl border border-white/20 hover:border-bio-accent/30 hover:shadow-[0_0_20px_rgba(70,208,164,0.2)] transition-all duration-500">
                <div className="w-full h-full p-6 flex flex-col items-center justify-center gap-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-bio-accent/50 flex items-center justify-center hover:shadow-[0_0_15px_rgba(70,208,164,0.3)] transition-all duration-300">
                    <div className="text-3xl font-bold text-bio-accent">JT</div>
                  </div>
                  <div className="space-y-4 text-center">
                    <h3 className="text-xl font-bold text-white">João Teixeira</h3>
                    <p className="text-bio-accent font-medium">Bioinformatics Specialist</p>
                    <p className="text-white/70 text-sm">Analyzing and interpreting complex biological data to drive research innovation and solve biotechnology challenges.</p>
                    <div className="pt-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-bio-accent/20 text-bio-accent border border-bio-accent/30">
                        Available for collaborations
                      </div>
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
          className="w-10 h-10 rounded-full glass-button flex items-center justify-center cursor-pointer backdrop-blur-xl border border-white/20 hover:border-bio-accent/30 hover:shadow-[0_0_15px_rgba(70,208,164,0.3)] transition-all duration-300"
        >
          <ArrowDown className="h-5 w-5 text-white" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
