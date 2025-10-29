
import React from 'react';
import { type AnalysisResult, type Translations } from '../types';
import { ScoreBar } from './ScoreBar';
import { ImpactCard } from './ImpactCard';
import { UsersIcon, BrainIcon, ShieldCheckIcon, CalendarIcon, PuzzlePieceIcon, TrendingUpIcon } from './Icons';

interface AnalysisDisplayProps {
  gameName: string;
  analysis: AnalysisResult;
  translations: Translations;
}

export const AnalysisDisplay: React.FC<AnalysisDisplayProps> = ({ gameName, analysis, translations }) => {
  const analysisSections = [
    {
      title: translations.societalImpacts,
      content: analysis.societal_impacts,
      icon: <UsersIcon className="w-7 h-7" />
    },
    {
      title: translations.psychologicalEffects,
      content: analysis.psychological_effects,
      icon: <BrainIcon className="w-7 h-7" />
    },
    {
      title: translations.benefitsAndRisks,
      content: analysis.benefits_and_risks,
      icon: <ShieldCheckIcon className="w-7 h-7" />
    },
    {
      title: translations.ageAppropriateness,
      content: analysis.age_appropriateness,
      icon: <CalendarIcon className="w-7 h-7" />
    },
    {
      title: translations.addictionPotential,
      content: analysis.addiction_potential,
      icon: <PuzzlePieceIcon className="w-7 h-7" />
    },
    {
      title: translations.futurePredictions,
      content: analysis.future_predictions,
      icon: <TrendingUpIcon className="w-7 h-7" />
    },
  ];

  return (
    <div className="mt-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white">
        <span className="text-indigo-500 dark:text-indigo-400 font-extrabold">{gameName}</span> {translations.analysisFor}
      </h2>

      <div className="mt-8 max-w-4xl mx-auto bg-white dark:bg-slate-800/50 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold mb-6">{translations.impactScores}</h3>
        <div className="space-y-5">
          <ScoreBar label={translations.socialImpact} score={analysis.scores.social_impact} type="positive" />
          <ScoreBar label={translations.psychologicalImpact} score={analysis.scores.psychological_impact} type="positive" />
          <ScoreBar label={translations.addictionRisk} score={analysis.scores.addiction_risk} type="negative" />
        </div>
      </div>
      
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {analysisSections.map((section, index) => (
          <ImpactCard key={index} title={section.title} icon={section.icon}>
            {section.content}
          </ImpactCard>
        ))}
      </div>
    </div>
  );
};
