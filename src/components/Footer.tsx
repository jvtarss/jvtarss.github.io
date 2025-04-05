
import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bio-dark relative">
      {/* Back to top button */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-6">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={800}
          className="w-12 h-12 rounded-full accent-button flex items-center justify-center cursor-pointer animate-pulse backdrop-blur-md"
        >
          <ArrowUp className="h-5 w-5 text-bio-dark" />
        </Link>
      </div>
      
      <div className="container mx-auto py-12 px-4 backdrop-blur-sm bg-white/5 border-t border-white/10 rounded-t-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <div className="flex items-center">
                <span className="text-bio-accent font-dm-mono text-2xl font-bold tracking-tighter">JT</span>
                <span className="ml-2 text-white font-dm-mono text-lg">BioPortfolio</span>
              </div>
            </Link>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/jvtarss"
              target="_blank"
              rel="noreferrer"
              className="social-icon backdrop-blur-md hover:border-bio-accent/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-vitor-aires-teixeira-55b97b225/"
              target="_blank"
              rel="noreferrer"
              className="social-icon backdrop-blur-md hover:border-bio-accent/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} João Vitor Aires Teixeira. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center space-x-4">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white/60 hover:text-bio-accent transition-colors text-sm cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white/60 hover:text-bio-accent transition-colors text-sm cursor-pointer"
            >
              About
            </Link>
            <Link
              to="career"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white/60 hover:text-bio-accent transition-colors text-sm cursor-pointer"
            >
              Career
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white/60 hover:text-bio-accent transition-colors text-sm cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white/60 hover:text-bio-accent transition-colors text-sm cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
