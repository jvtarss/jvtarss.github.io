
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LoadingScreen = ({ onFinished }: { onFinished: () => void }) => {
  const [progress, setProgress] = useState(0);
  const { language } = useLanguage();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 3000);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onFinished]);
  
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bio-dark">
      <div className="relative w-64 h-64 mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-36 h-36 rounded-full border-4 border-bio-accent/30 opacity-75"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border-4 border-bio-accent/20 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 flex items-center justify-center text-bio-accent text-5xl font-bold">
            JT
          </div>
        </div>
      </div>
      
      <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-bio-accent rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="mt-4 text-white/70">
        {language === 'en' ? 'Loading bioinformatics portfolio...' : 'Carregando portfólio de bioinformática...'}
        <span className="inline-block ml-1">{progress}%</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
