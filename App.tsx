
import React, { useState, useCallback } from 'react';
import { AppState, UserAnswers, StyleScore, FinalResult, StyleKey } from './types';
import { FUNNEL_STEPS, STYLES_MAP, SUCCESS_GREEN } from './constants';
import { generateStyleTranslation } from './services/geminiService';
import Header from './components/Header';
import Intro from './components/Intro';
import QuizStep from './components/QuizStep';
import BreakStep from './components/BreakStep';
import Loading from './components/Loading';
import Result from './components/Result';
import VslPage from './components/VslPage';
import GlitterEffect from './components/GlitterEffect';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('intro');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [finalResult, setFinalResult] = useState<FinalResult | null>(null);

  const calculateResults = useCallback(async (currentAnswers: UserAnswers): Promise<FinalResult> => {
    const scores: Record<StyleKey, number> = {
      CL: 0, RO: 0, NA: 0, CR: 0, EL: 0, MO: 0, SE: 0
    };

    FUNNEL_STEPS.forEach(step => {
      if (step.type === 'question' && !step.isSegmentation) {
        const answer = currentAnswers[step.id];
        if (!answer) return;
        const options = Array.isArray(answer) ? answer : [answer];
        options.forEach(optText => {
          const option = step.options?.find(o => o.text === optText);
          if (option?.style) {
            const points = step.id === 5 ? 1 : 2;
            scores[option.style] += points;
          }
        });
      }
    });

    const sortedScores: StyleScore[] = Object.entries(scores)
      .map(([key, score]) => ({ key: key as StyleKey, name: STYLES_MAP[key as StyleKey], score }))
      .sort((a, b) => b.score - a.score);

    const top3 = sortedScores.slice(0, 3);
    const translation = await generateStyleTranslation(top3);

    return {
      predominant: top3[0].name,
      predominantKey: top3[0].key,
      secondary: top3[1].name,
      tertiary: top3[2].name,
      practicalTranslation: translation
    };
  }, []);

  const handleNext = useCallback(async (answer?: string | string[]) => {
    const newAnswers = { ...answers };
    const step = FUNNEL_STEPS[currentStepIndex];
    if (answer !== undefined) {
      newAnswers[step.id] = answer;
      setAnswers(newAnswers);
    }

    if (currentStepIndex < FUNNEL_STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      setState('analyzing');
      const result = await calculateResults(newAnswers);
      setFinalResult(result);
      setState('result');
    }
  }, [answers, currentStepIndex, calculateResults]);

  const handleBack = useCallback(() => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    } else {
      setState('intro');
    }
  }, [currentStepIndex]);

  const getFakeProgress = () => {
    if (state === 'intro' || state === 'vsl') return 0;
    if (state === 'result' || state === 'analyzing') return 100;
    const linearProgress = (currentStepIndex + 1) / FUNNEL_STEPS.length;
    return Math.min(Math.sqrt(linearProgress) * 100, 98);
  };

  const currentStep = FUNNEL_STEPS[currentStepIndex];

  return (
    <div className="min-h-screen bg-[#FDFCFD] flex flex-col font-sans selection:bg-purple-100 relative">
      <GlitterEffect />
      {state !== 'intro' && state !== 'analyzing' && state !== 'vsl' && <Header progress={getFakeProgress()} />}
      
      <main className="flex-1 overflow-x-hidden relative z-10">
        {state === 'intro' && <Intro onStart={() => setState('funnel')} />}
        {state === 'funnel' && (
          currentStep.type === 'question' ? (
            <QuizStep step={currentStep} onAnswer={handleNext} onBack={handleBack} isFirst={currentStepIndex === 0} />
          ) : (
            <BreakStep step={currentStep} onNext={handleNext} onBack={handleBack} />
          )
        )}
        {state === 'analyzing' && <Loading />}
        {state === 'result' && finalResult && <Result result={finalResult} onContinue={() => {
          setState('vsl');
          window.scrollTo(0, 0);
        }} />}
        {state === 'vsl' && finalResult && <VslPage result={finalResult} />}
      </main>
    </div>
  );
};

export default App;
