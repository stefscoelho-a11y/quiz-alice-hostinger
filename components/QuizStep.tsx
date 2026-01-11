
import React, { useState, useEffect } from 'react';
import { FunnelStep, StyleKey } from '../types';
import { PRIMARY_COLOR, SOFT_PINK, SUCCESS_GREEN, SOFT_PINK_CARD } from '../constants';

interface QuizStepProps {
  step: FunnelStep;
  onAnswer: (answer: string | string[]) => void;
  onBack: () => void;
  isFirst: boolean;
}

const QuizStep: React.FC<QuizStepProps> = ({ step, onAnswer, onBack, isFirst }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setSelected([]);
    setIsExiting(false);
  }, [step.id]);

  const handleOptionClick = (optionText: string) => {
    if (step.multiple) {
      setSelected(prev => {
        if (prev.includes(optionText)) return prev.filter(t => t !== optionText);
        if (prev.length >= (step.maxSelections || 3)) return prev;
        return [...prev, optionText];
      });
    } else {
      setSelected([optionText]);
    }
  };

  const handleNext = () => {
    if (selected.length > 0) {
      setIsExiting(true);
      setTimeout(() => onAnswer(step.multiple ? selected : selected[0]), 300);
    }
  };

  const hasImages = step.options?.[0]?.image !== undefined;

  return (
    <div className={`w-full max-w-md mx-auto px-6 py-8 transition-all duration-300 ${isExiting ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0 animate-in fade-in slide-in-from-right-8'}`}>
      <div className="flex items-center justify-between mb-8">
         {!isFirst ? (
           <button onClick={onBack} className="text-slate-400 hover:text-slate-600 flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
             </svg>
             Voltar
           </button>
         ) : <div />}
         <div className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
           {step.multiple ? `Escolha até ${step.maxSelections}` : 'Seleção Única'}
         </div>
      </div>

      <h2 className={`text-3xl font-serif text-slate-900 mb-2 leading-tight ${hasImages ? 'text-center' : ''}`}>
        {step.title}
      </h2>
      {step.subtitle && <p className={`text-slate-500 mb-8 text-sm leading-relaxed ${hasImages ? 'text-center' : ''}`}>{step.subtitle}</p>}

      {hasImages ? (
        // Grid Layout para cards com imagem (ex: Idade)
        <div className="grid grid-cols-2 gap-4">
          {step.options?.map((option, idx) => {
            const isSelected = selected.includes(option.text);
            return (
              <button
                key={option.text}
                onClick={() => handleOptionClick(option.text)}
                className={`flex flex-col rounded-2xl overflow-hidden border-4 transition-all duration-300 transform ${
                  isSelected ? 'scale-[1.03] ring-4 ring-purple-100' : 'hover:scale-[1.02]'
                }`}
                style={{ 
                  borderColor: isSelected ? PRIMARY_COLOR : 'transparent',
                  animationDelay: `${idx * 100}ms`
                }}
              >
                <div className="h-44 w-full overflow-hidden">
                   <img src={option.image} alt={option.text} className="w-full h-full object-cover" />
                </div>
                <div 
                  className="py-3 text-center font-black text-lg transition-colors"
                  style={{ 
                    backgroundColor: SOFT_PINK_CARD,
                    color: isSelected ? PRIMARY_COLOR : '#334155' // Slate-700
                  }}
                >
                  {option.text}
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        // Layout Padrão com Emojis na Esquerda e Radio na Direita
        <div className="space-y-4">
          {step.options?.map((option, idx) => {
            const isSelected = selected.includes(option.text);
            return (
              <button
                key={option.text}
                onClick={() => handleOptionClick(option.text)}
                className={`w-full flex items-center p-5 rounded-2xl border-2 transition-all duration-300 text-left group gap-4 ${
                  isSelected 
                    ? 'shadow-md scale-[1.01]' 
                    : 'border-slate-50 bg-white hover:border-slate-100'
                }`}
                style={{ 
                  backgroundColor: isSelected ? SOFT_PINK : 'white',
                  borderColor: isSelected ? PRIMARY_COLOR : undefined,
                  animationDelay: `${idx * 50}ms`
                }}
              >
                {option.emoji && (
                  <span className="text-2xl flex-shrink-0 grayscale-[0.5] group-hover:grayscale-0 transition-all">
                    {option.emoji}
                  </span>
                )}
                <span className={`flex-1 text-base font-medium transition-colors ${isSelected ? 'text-purple-700' : 'text-slate-600'}`}>
                  {option.text}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  isSelected ? 'border-transparent scale-110' : 'border-slate-100 group-hover:border-slate-200'
                }`}
                style={{ backgroundColor: isSelected ? PRIMARY_COLOR : 'transparent' }}>
                  {isSelected && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}

      <div className="mt-10">
        <button
          onClick={handleNext}
          disabled={selected.length === 0}
          className={`w-full py-5 rounded-2xl text-white text-xl font-black shadow-xl transition-all duration-300 active:scale-[0.98] ${
            selected.length > 0 ? 'opacity-100 translate-y-0 hover:brightness-105' : 'opacity-40 cursor-not-allowed translate-y-2'
          }`}
          style={{ 
            backgroundColor: SUCCESS_GREEN,
            boxShadow: selected.length > 0 ? `0 10px 30px -5px ${SUCCESS_GREEN}60` : 'none'
          }}
        >
          {step.buttonText || 'Próximo Passo'}
        </button>
      </div>
    </div>
  );
};

export default QuizStep;
