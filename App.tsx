
import React, { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { type AnalysisResult, type Language, type Theme } from './types';
import { translations } from './constants';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { AnalysisDisplay } from './components/AnalysisDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('tr');
  const [gameName, setGameName] = useState('');
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'tr' ? 'en' : 'tr'));
  };

  const handleAnalyze = useCallback(async () => {
    if (!gameName.trim()) {
      setError(translations[language].error.empty);
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API key is not configured.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const langInstruction = language === 'tr' ? 'Tüm yanıtı Türkçe olarak oluştur.' : 'Generate the entire response in English.';
      const prompt = `
        ${langInstruction}
        Analyze the video game "${gameName}". 
        Provide a detailed analysis covering: societal impacts, psychological effects, benefits and risks, age appropriateness, addiction potential, and future predictions.
        Also, provide numerical scores from 0 to 100 for social impact (where 100 is highly positive), psychological impact (where 100 is highly positive), and addiction risk (where 100 is extremely high risk).
        Return the response strictly as a JSON object matching the provided schema. Do not include any markdown formatting like \`\`\`json in the output.
      `;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              societal_impacts: { type: Type.STRING },
              psychological_effects: { type: Type.STRING },
              benefits_and_risks: { type: Type.STRING },
              age_appropriateness: { type: Type.STRING },
              addiction_potential: { type: Type.STRING },
              future_predictions: { type: Type.STRING },
              scores: {
                type: Type.OBJECT,
                properties: {
                  social_impact: { type: Type.NUMBER },
                  psychological_impact: { type: Type.NUMBER },
                  addiction_risk: { type: Type.NUMBER },
                },
              },
            },
          },
        },
      });

      const responseText = response.text.trim();
      const parsedJson = JSON.parse(responseText);
      setAnalysis(parsedJson);

    } catch (err) {
      console.error("API Error:", err);
      setError(translations[language].error.api);
    } finally {
      setIsLoading(false);
    }
  }, [gameName, language]);

  const currentTranslations = translations[language];

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header
        theme={theme}
        language={language}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
        translations={currentTranslations}
      />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            {currentTranslations.subtitle}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {currentTranslations.description}
          </p>
        </div>

        <InputForm
          gameName={gameName}
          setGameName={setGameName}
          onAnalyze={handleAnalyze}
          isLoading={isLoading}
          translations={currentTranslations}
        />

        {isLoading && <LoadingSpinner translations={currentTranslations} />}

        {error && (
          <div className="mt-8 max-w-2xl mx-auto bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg relative text-center" role="alert">
            <strong className="font-bold">{currentTranslations.error.title}</strong>
            <span className="block sm:inline ml-2">{error}</span>
          </div>
        )}
        
        {analysis && !isLoading && (
          <AnalysisDisplay 
            gameName={gameName} 
            analysis={analysis} 
            translations={currentTranslations}
          />
        )}
      </main>
    </div>
  );
};

export default App;
