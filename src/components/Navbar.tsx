
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { translations } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: translations.home, to: 'home' },
    { name: translations.about, to: 'about' },
    { name: translations.career, to: 'career' },
    { name: translations.projects, to: 'projects' },
    { name: translations.contact, to: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto hover:opacity-80 transition-opacity" />
            <span className="ml-2 text-white font-dm-mono text-lg">BioPortfolio</span>
          </div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="nav-link-active"
              className="nav-link cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <LanguageSwitcher />
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none ml-4"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-bio-accent" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 glass-card bg-bio-dark/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center pt-10 space-y-8 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              className="nav-link cursor-pointer"
              activeClass="nav-link-active"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
