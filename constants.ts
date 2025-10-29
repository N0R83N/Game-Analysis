
import { type Translations } from './types';

interface TranslationMap {
  tr: Translations;
  en: Translations;
}

export const translations: TranslationMap = {
  tr: {
    title: "Oyun Etkisi Simülatörü",
    subtitle: "Popüler Video Oyunlarının Derinlemesine Etki Analizi",
    description: "Bir oyunun adını girin ve Gemini AI'nin toplumsal, psikolojik etkilerini, risklerini ve gelecekteki potansiyelini analiz etmesini izleyin.",
    inputPlaceholder: "Oyun adını girin (örn. Cyberpunk 2077)",
    buttonText: "Analiz Et",
    loadingText: "Analiz ediliyor, lütfen bekleyin...",
    analysisFor: "için Analiz",
    impactScores: "Etki Puanları",
    socialImpact: "Toplumsal Etki",
    psychologicalImpact: "Psikolojik Etki",
    addictionRisk: "Bağımlılık Riski",
    societalImpacts: "Toplumsal Etkiler",
    psychologicalEffects: "Psikolojik Etkiler",
    benefitsAndRisks: "Faydalar ve Riskler",
    ageAppropriateness: "Yaş Uygunluğu",
    addictionPotential: "Bağımlılık Potansiyeli",
    futurePredictions: "Gelecek Tahminleri",
    error: {
      title: "Hata!",
      api: "Analiz sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
      empty: "Lütfen bir oyun adı girin.",
    },
    languageName: "English",
  },
  en: {
    title: "Game Impact Simulator",
    subtitle: "In-Depth Impact Analysis of Popular Video Games",
    description: "Enter the name of a game and watch Gemini AI analyze its societal, psychological impacts, risks, and future potential.",
    inputPlaceholder: "Enter game name (e.g., The Witcher 3)",
    buttonText: "Analyze",
    loadingText: "Analyzing, please wait...",
    analysisFor: "Analysis For",
    impactScores: "Impact Scores",
    socialImpact: "Social Impact",
    psychologicalImpact: "Psychological Impact",
    addictionRisk: "Addiction Risk",
    societalImpacts: "Societal Impacts",
    psychologicalEffects: "Psychological Effects",
    benefitsAndRisks: "Benefits and Risks",
    ageAppropriateness: "Age Appropriateness",
    addictionPotential: "Addiction Potential",
    futurePredictions: "Future Predictions",
    error: {
      title: "Error!",
      api: "An error occurred during the analysis. Please try again later.",
      empty: "Please enter a game name.",
    },
    languageName: "Türkçe",
  }
};
