
import React from 'react';
import { FinalResult } from '../types';
import { PRIMARY_COLOR, SUCCESS_GREEN, STYLE_METADATA } from '../constants';

interface ResultProps {
  result: FinalResult;
  onContinue: () => void;
}

const Result: React.FC<ResultProps> = ({ result, onContinue }) => {
  const metadata = STYLE_METADATA[result.predominantKey];

  return (
    <div className="max-w-xl mx-auto px-6 py-12 animate-fade-in pb-32">
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-purple-100 text-purple-600 mb-6">
          Seu Dossiê de Estilo
        </span>
        <h2 className="text-4xl font-serif text-slate-900 mb-2 leading-tight">
          Parabéns! Confira o <br/><span style={{ color: PRIMARY_COLOR }}>resultado do seu teste de estilo</span>
        </h2>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-50 mb-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
           <svg className="w-24 h-24" viewBox="0 0 100 100" fill="currentColor">
             <path d="M0 0 L100 0 L100 100 Z" opacity="0.1" />
           </svg>
        </div>

        <div className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-full">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Predominante</span>
              <div className="text-3xl font-black text-slate-900 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: PRIMARY_COLOR }}></span>
                {result.predominant}
              </div>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Secundário</span>
              <div className="text-xl font-bold text-slate-700">{result.secondary}</div>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Terciário</span>
              <div className="text-xl font-bold text-slate-700">{result.tertiary}</div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <h4 className="text-xs font-black uppercase tracking-widest text-purple-500 mb-4">Tradução Prática:</h4>
            <p className="text-slate-700 leading-relaxed text-lg font-medium italic">
              "{result.practicalTranslation}"
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <h4 className="text-xs font-black uppercase tracking-widest text-purple-500 mb-4">Sugestão de Paleta de Cores:</h4>
            <div className="flex flex-wrap gap-4">
              {metadata.palette.map((color, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div 
                    className="w-10 h-10 rounded-full border-2 border-white shadow-md" 
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <h4 className="text-xs font-black uppercase tracking-widest text-purple-500 mb-4">3 Peças-Chave para seu Estilo:</h4>
            <ul className="space-y-3">
              {metadata.keyPieces.map((piece, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium bg-slate-50 p-3 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 text-xs font-bold">
                    {idx + 1}
                  </div>
                  {piece}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2.5rem] p-8 md:p-10 bg-[#111827] text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-20 -mr-24 -mt-24"></div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="w-full mb-8 relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-2xl"></div>
            <img 
              src="https://i.ibb.co/VYLjMQfX/Captura-de-Tela-2026-01-11-a-s-12-27-36.png" 
              alt="Elegância e Estilo" 
              className="relative w-full h-auto object-cover rounded-2xl border border-white/10 shadow-inner"
            />
          </div>

          <h3 className="text-2xl font-black mb-8 leading-tight px-2">
            Agora que você descobriu seu estilo, chegou a hora de saber como usar ele para ficar elegante sempre, sem depender de roupas caras!
          </h3>
          
          <div className="w-full mb-10 p-6 rounded-2xl bg-white/5 border border-white/10 ring-1 ring-white/20 backdrop-blur-sm">
            <p className="text-white text-lg font-bold leading-relaxed">
              A Alice preparou um próximo passo exclusivo para você. <br/>
              <span className="text-emerald-400">Clique no botão para acessar</span>
            </p>
          </div>

          <button 
            className="w-full py-6 rounded-2xl text-white text-2xl font-black shadow-lg transform transition flex items-center justify-center gap-3 animate-cta-pulse"
            style={{ 
              backgroundColor: SUCCESS_GREEN,
              boxShadow: `0 20px 40px -10px ${SUCCESS_GREEN}60`
            }}
            onClick={onContinue}
          >
            PRÓXIMO PASSO
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cta-pulse {
          0% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.03); filter: brightness(1.1); }
          100% { transform: scale(1); filter: brightness(1); }
        }
        .animate-cta-pulse {
          animation: cta-pulse 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Result;
