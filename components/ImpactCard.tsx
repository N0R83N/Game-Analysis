
import React from 'react';

interface ImpactCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const ImpactCard: React.FC<ImpactCardProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 h-full">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-4 text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
        {children}
      </p>
    </div>
  );
};
