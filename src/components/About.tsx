
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { translations } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-slide-up');
              el.classList.remove('opacity-0');
            }, index * 200);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const skills = [
    'Python', 'R', 'Shell/Bash', 'Git', 'Linux',
    'VSCode', 'VIM', 'GitHub', 'MySQL', 'SQLite'
  ];

  return (
    <section id="about" className="section-padding" ref={aboutRef}>
      <div className="container mx-auto">
        <div className="mb-16 text-center animate-on-scroll opacity-0">
          <span className="inline-block glass-card py-1 px-3 rounded-full text-sm text-bio-accent mb-3 backdrop-blur-xl border border-white/20">
            {translations.aboutTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations.aboutSubtitle}</h2>
          <div className="h-1 w-20 bg-bio-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 animate-on-scroll opacity-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-bio-accent/30 to-white/10 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative glass-card rounded-2xl overflow-hidden h-[400px] w-full backdrop-blur-xl border border-white/20">
                <div className="w-full h-full flex flex-col items-center justify-center text-white/50 text-center p-6">
                  <div className="border-2 border-dashed border-white/30 rounded-xl w-full h-full flex items-center justify-center p-4">
                    <span className="font-dm-mono">Photo here</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold mb-6 text-bio-accent">{translations.aboutRoleTitle}</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              {translations.aboutDescription}
            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-medium mb-4">{translations.techStack}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="neo-glass-card py-3 px-4 text-center rounded-lg hover:border-bio-accent/50 transition-all duration-300 animate-on-scroll opacity-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-sm font-dm-mono">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-on-scroll opacity-0" style={{ animationDelay: '0.5s' }}>
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noreferrer"
                className="accent-button inline-flex items-center px-6 py-3 rounded-lg backdrop-blur-xl hover:shadow-[0_0_15px_rgba(70,255,140,0.5)] transition-all duration-500"
              >
                {translations.viewGitHub}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
