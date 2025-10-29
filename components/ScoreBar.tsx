
import React from 'react';

interface ScoreBarProps {
  label: string;
  score: number;
  type: 'positive' | 'negative';
}

export const ScoreBar: React.FC<ScoreBarProps> = ({ label, score, type }) => {
  const getBarColor = () => {
    const value = type === 'positive' ? score : 100 - score;
    if (value >= 70) return 'bg-emerald-500';
    if (value >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
        <span className={`text-sm font-bold ${getBarColor().replace('bg-', 'text-')}`}>{score}/100</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${getBarColor()}`}
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
};
