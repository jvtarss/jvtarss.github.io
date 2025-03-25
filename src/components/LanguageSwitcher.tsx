
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const LanguageSwitcher: React.FC = () => {
  const { language, translations, changeLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="text-white hover:text-bio-accent transition-colors p-2 rounded-full hover:bg-white/5"
          aria-label="Change language"
        >
          <Globe className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-bio-dark border border-white/10 text-white">
        <DropdownMenuItem 
          onClick={() => changeLanguage('en')}
          className={`cursor-pointer hover:bg-white/10 ${language === 'en' ? 'text-bio-accent' : ''}`}
        >
          {translations.english}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLanguage('pt')}
          className={`cursor-pointer hover:bg-white/10 ${language === 'pt' ? 'text-bio-accent' : ''}`}
        >
          {translations.portuguese}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
