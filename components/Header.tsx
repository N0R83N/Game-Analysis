
import React from 'react';
import { type Theme, type Language, type Translations } from '../types';
import { SunIcon, MoonIcon, GlobeAltIcon } from './Icons';

interface HeaderProps {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  translations: Translations;
}

export const Header: React.FC<HeaderProps> = ({ theme, language, toggleTheme, toggleLanguage, translations }) => {
  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">{translations.title}</h1>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center text-sm font-medium p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle language"
            >
              <GlobeAltIcon className="w-5 h-5 mr-1.5" />
              {translations.languageName}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
