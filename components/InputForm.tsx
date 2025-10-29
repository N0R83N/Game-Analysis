
import React from 'react';
import { type Translations } from '../types';
import { SparklesIcon } from './Icons';

interface InputFormProps {
  gameName: string;
  setGameName: (name: string) => void;
  onAnalyze: () => void;
  isLoading: boolean;
  translations: Translations;
}

export const InputForm: React.FC<InputFormProps> = ({ gameName, setGameName, onAnalyze, isLoading, translations }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze();
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
        <input
          type="text"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          placeholder={translations.inputPlaceholder}
          className="w-full px-5 py-3 text-base text-slate-900 dark:text-white bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out outline-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 dark:disabled:bg-indigo-800 disabled:cursor-not-allowed transition-all duration-200"
        >
          <SparklesIcon className="w-5 h-5 mr-2 -ml-1"/>
          {translations.buttonText}
        </button>
      </form>
    </div>
  );
};
