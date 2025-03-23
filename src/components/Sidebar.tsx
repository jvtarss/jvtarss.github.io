
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  User, 
  Briefcase, 
  FolderKanban, 
  MessageSquare,
  Globe,
  Github
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SidebarProps {
  onToggle?: (collapsed: boolean) => void;
}

const Sidebar = ({ onToggle }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { translations, toggleLanguage, language } = useLanguage();

  useEffect(() => {
    // Check window width on mount and resize
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Call the callback when isCollapsed changes
    if (onToggle) {
      onToggle(isCollapsed);
    }
  }, [isCollapsed, onToggle]);

  const menuItems = [
    { 
      name: translations.home, 
      to: 'home', 
      icon: <Home className="h-5 w-5" /> 
    },
    { 
      name: translations.about, 
      to: 'about', 
      icon: <User className="h-5 w-5" /> 
    },
    { 
      name: translations.career, 
      to: 'career', 
      icon: <Briefcase className="h-5 w-5" /> 
    },
    { 
      name: translations.projects, 
      to: 'projects', 
      icon: <FolderKanban className="h-5 w-5" /> 
    },
    { 
      name: translations.contact, 
      to: 'contact', 
      icon: <MessageSquare className="h-5 w-5" /> 
    }
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={`fixed left-0 top-0 h-screen z-50 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-64'
      } bg-bio-dark/90 backdrop-blur-lg border-r border-white/10`}
    >
      <div className="flex flex-col h-full py-6">
        {/* Logo */}
        <div className="px-4 mb-8 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center">
              <span className="text-bio-accent font-dm-mono text-2xl font-bold">JT</span>
              <span className="ml-2 text-white font-dm-mono text-sm">BioPortfolio</span>
            </div>
          )}
          
          {/* Toggle button */}
          <button 
            onClick={toggleSidebar}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/10 hover:text-bio-accent hover:shadow-[0_0_10px_rgba(70,208,164,0.2)] transition-all duration-300"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        </div>
        
        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto px-2">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  activeClass="sidebar-menu-item-active"
                  className={`sidebar-menu-item ${isCollapsed ? 'justify-center px-2' : ''} hover:shadow-[0_0_10px_rgba(70,208,164,0.2)]`}
                >
                  {item.icon}
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Footer actions */}
        <div className="px-2 pt-4 border-t border-white/10 mt-4 space-y-2">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={`w-full sidebar-menu-item ${isCollapsed ? 'justify-center px-2' : ''} hover:shadow-[0_0_10px_rgba(70,208,164,0.2)]`}
            aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
          >
            <Globe className="h-5 w-5 text-bio-accent" />
            {!isCollapsed && <span>{translations.switchLanguage}</span>}
          </button>
          
          {/* GitHub Link */}
          <a 
            href="https://github.com/username" 
            target="_blank" 
            rel="noreferrer"
            className={`w-full sidebar-menu-item ${isCollapsed ? 'justify-center px-2' : ''} hover:shadow-[0_0_10px_rgba(70,208,164,0.2)]`}
          >
            <Github className="h-5 w-5 text-bio-accent" />
            {!isCollapsed && <span>GitHub</span>}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
