
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage, translations } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage}
      className="ml-4 glass-button px-3 py-1 rounded-full text-sm font-medium backdrop-blur-xl border border-white/20 hover:border-bio-accent/50 transition-all duration-300"
      aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
    >
      {translations.switchLanguage}
    </button>
  );
};

export default LanguageSwitcher;
