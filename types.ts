
export type Theme = 'light' | 'dark';
export type Language = 'tr' | 'en';

export interface AnalysisResult {
  societal_impacts: string;
  psychological_effects: string;
  benefits_and_risks: string;
  age_appropriateness: string;
  addiction_potential: string;
  future_predictions: string;
  scores: {
    social_impact: number;
    psychological_impact: number;
    addiction_risk: number;
  };
}

export interface Translations {
  title: string;
  subtitle: string;
  description: string;
  inputPlaceholder: string;
  buttonText: string;
  loadingText: string;
  analysisFor: string;
  impactScores: string;
  socialImpact: string;
  psychologicalImpact: string;
  addictionRisk: string;
  societalImpacts: string;
  psychologicalEffects: string;
  benefitsAndRisks: string;
  ageAppropriateness: string;
  addictionPotential: string;
  futurePredictions: string;
  error: {
    title: string;
    api: string;
    empty: string;
  };
  languageName: string;
}
