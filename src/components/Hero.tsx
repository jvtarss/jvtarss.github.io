import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
      ref={heroRef}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-bio-accent/10 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-bio-accent/10 rounded-full filter blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 transition-opacity duration-1000 opacity-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div>
              <div className="inline-block glass-card py-1 px-3 rounded-full text-sm text-bio-accent mb-4 animate-pulse">
                Bioinformatician & Bioprocess Engineer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Hi, I'm <span className="text-bio-accent">João Teixeira</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
                Combining computational biology with biotechnology to solve complex biological problems
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
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
                className="accent-button inline-flex items-center px-6 py-3 rounded-lg cursor-pointer"
              >
                Learn more
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slide-in-right opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-bio-accent/20 to-white/20 rounded-2xl blur opacity-75 animate-pulse"></div>
              <div className="relative glass-card rounded-2xl overflow-hidden h-[400px] w-[300px] md:h-[500px] md:w-[350px] animate-float">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="João Teixeira"
                  className="w-full h-full object-cover"
                />
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
          className="w-10 h-10 rounded-full glass-button flex items-center justify-center cursor-pointer"
        >
          <ArrowDown className="h-5 w-5 text-white" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
