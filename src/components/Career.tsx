
import React, { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Career = () => {
  const careerRef = useRef<HTMLDivElement>(null);
  const { translations, language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-on-scroll');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-slide-up');
              el.classList.remove('opacity-0');
            }, index * 150);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (careerRef.current) {
      observer.observe(careerRef.current);
    }

    return () => {
      if (careerRef.current) {
        observer.unobserve(careerRef.current);
      }
    };
  }, []);

  const careerItemsEN = [
    {
      title: "Bachelor in Bioprocess Engineering and Biotechnology",
      organization: "Federal University of Tocantins",
      location: "Gurupi, Tocantins, Brazil",
      period: "2022 - 2026",
      icon: <GraduationCap className="h-6 w-6 text-bio-accent" />,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/UFT_bras%C3%A3o.svg/1200px-UFT_bras%C3%A3o.svg.png"
    },
    {
      title: "Internship",
      organization: "Butantan Institute",
      location: "São Paulo, Brazil",
      period: "2026",
      icon: <Briefcase className="h-6 w-6 text-bio-accent" />,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Instituto_Butantan_logo.svg/1200px-Instituto_Butantan_logo.svg.png"
    },
    {
      title: "Marketing Director",
      organization: "Petri Júnior",
      location: "Gurupi, Brazil",
      period: "2023 - 2026",
      icon: <Briefcase className="h-6 w-6 text-bio-accent" />,
      logo: "https://via.placeholder.com/150"
    }
  ];
  
  const careerItemsPT = [
    {
      title: "Bacharelado em Engenharia de Bioprocessos e Biotecnologia",
      organization: "Universidade Federal do Tocantins",
      location: "Gurupi, Tocantins",
      period: "2022 - 2026",
      icon: <GraduationCap className="h-6 w-6 text-bio-accent" />,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/UFT_bras%C3%A3o.svg/1200px-UFT_bras%C3%A3o.svg.png"
    },
    {
      title: "Estágio",
      organization: "Instituto Butantan",
      location: "São Paulo, Brasil",
      period: "2026",
      icon: <Briefcase className="h-6 w-6 text-bio-accent" />,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Instituto_Butantan_logo.svg/1200px-Instituto_Butantan_logo.svg.png"
    },
    {
      title: "Diretor de Marketing",
      organization: "Petri Júnior",
      location: "Gurupi, Brasil",
      period: "2023 - 2026",
      icon: <Briefcase className="h-6 w-6 text-bio-accent" />,
      logo: "https://via.placeholder.com/150"
    }
  ];
  
  const careerItems = language === 'en' ? careerItemsEN : careerItemsPT;

  return (
    <section id="career" className="section-padding bg-bio-dark/50" ref={careerRef}>
      <div className="container mx-auto">
        <div className="mb-16 text-center animate-on-scroll opacity-0">
          <span className="inline-block glass-card py-1 px-3 rounded-full text-sm text-bio-accent mb-3 backdrop-blur-xl border border-white/20">
            {translations.careerTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{translations.careerSubtitle}</h2>
          <div className="h-1 w-20 bg-bio-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-bio-accent/30 via-white/10 to-bio-accent/30 md:translate-x-[-1px]"></div>

          <div className="space-y-16 relative">
            {careerItems.map((item, index) => (
              <div 
                key={index} 
                className={`animate-on-scroll opacity-0 flex flex-col md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? 'md:timeline-right' : 'md:timeline-left'
                }`}
              >
                <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:order-2'}`}>
                  <div className="neo-glass-card p-6 rounded-xl w-full max-w-md transform transition-all duration-500 hover:scale-105 backdrop-blur-xl border border-white/10 hover:border-bio-accent/30 hover:shadow-[0_0_15px_rgba(70,208,164,0.2)]">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full glass-button flex items-center justify-center mr-4 backdrop-blur-xl border border-white/20 hover:border-bio-accent/40 hover:shadow-[0_0_10px_rgba(70,208,164,0.3)] transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-white/70 text-sm">{item.organization}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center text-white/60 text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-bio-accent/70" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-bio-accent/70" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`relative py-4 flex ${index % 2 === 0 ? 'md:order-1 justify-end' : 'justify-start'}`}>
                  {/* Circle on timeline */}
                  <div className="absolute left-0 md:left-auto md:right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full neo-glass-card flex items-center justify-center border-4 border-bio-dark bg-bio-accent/20 z-10 backdrop-blur-xl">
                    <div className="w-3 h-3 rounded-full bg-bio-accent"></div>
                  </div>
                  
                  {/* Organization Logo */}
                  <div className={`hidden md:flex items-center justify-center w-[120px] h-[120px] neo-glass-card rounded-full p-4 overflow-hidden ${
                    index % 2 === 0 ? 'mr-12' : 'ml-12'
                  } backdrop-blur-xl border border-white/20 hover:border-bio-accent/30 hover:shadow-[0_0_15px_rgba(70,208,164,0.2)] transition-all duration-300`}>
                    <img 
                      src={item.logo} 
                      alt={item.organization} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
