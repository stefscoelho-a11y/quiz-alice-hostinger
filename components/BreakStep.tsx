
import React from 'react';
import { FunnelStep } from '../types';
import { SUCCESS_GREEN, PRIMARY_COLOR } from '../constants';

interface BreakStepProps {
  step: FunnelStep;
  onNext: () => void;
  onBack: () => void;
}

const BreakStep: React.FC<BreakStepProps> = ({ step, onNext, onBack }) => {
  return (
    <div className="w-full max-w-lg mx-auto px-6 py-10 text-center animate-in fade-in zoom-in-95 duration-500">
      <button onClick={onBack} className="absolute top-8 left-6 text-slate-400 hover:text-slate-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {step.image && (
        <div className="relative mb-8 inline-block w-full">
          {/* Efeito de brilho sutil ao fundo */}
          <div className="absolute inset-0 bg-purple-100 rounded-full blur-[80px] opacity-30"></div>
          
          <div className="relative w-full flex justify-center">
            <img 
              src={step.image} 
              alt="Visual de Apoio" 
              className="w-full h-auto block relative z-10 drop-shadow-md rounded-[2.5rem]"
            />
          </div>
        </div>
      )}

      <h2 className="text-3xl font-black text-slate-900 mb-2 leading-tight">
        {step.title}
      </h2>

      {step.subtitle && (
        <p className="text-xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>
          {step.subtitle}
        </p>
      )}

      {step.description && (
        <p className="text-slate-600 text-base leading-relaxed mb-8">
          {step.description}
        </p>
      )}

      {step.actionText && (
        <p className="text-slate-500 text-sm italic mb-8 font-medium">
          {step.actionText}
        </p>
      )}

      <button
        onClick={onNext}
        className="w-full py-5 rounded-2xl text-white text-xl font-black shadow-xl transition-all duration-300 active:scale-95 hover:brightness-105"
        style={{ 
          backgroundColor: SUCCESS_GREEN,
          boxShadow: `0 12px 25px -5px ${SUCCESS_GREEN}60`
        }}
      >
        {step.buttonText || 'CONTINUAR'}
      </button>
    </div>
  );
};

export default BreakStep;
