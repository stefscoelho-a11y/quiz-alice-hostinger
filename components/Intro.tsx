
import React from 'react';
import { PRIMARY_COLOR, SUCCESS_GREEN } from '../constants';

interface IntroProps {
  onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-8 max-w-lg mx-auto animate-in fade-in duration-700">
      <h1 className="text-4xl font-black text-slate-900 mb-6 mt-8 leading-[1.15] tracking-tight">
        Descubra seus <span style={{ color: PRIMARY_COLOR }}>3 Estilos Universais</span> e nunca mais gaste dinheiro comprando roupas erradas
      </h1>
      
      <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
        Faça esse <span className="text-slate-900 font-bold">teste gratuito</span> de 2 minutos e saiba exatamente o que <span className="text-slate-900 font-bold">combina com você</span> (gastando pouco)
      </p>

      <div className="relative mb-12 group w-full max-w-[320px]">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        
        {/* Imagem com proporção 3:4 (altura reduzida em relação ao 9:16) */}
        <div className="relative bg-white p-2 rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <img 
            src="https://i.ibb.co/XRm6BNX/Captura-de-Tela-2026-01-09-a-s-20-41-02.png" 
            alt="Descubra seu estilo" 
            className="w-full aspect-[3/4] object-cover rounded-2xl"
          />
        </div>
      </div>

      <button 
        onClick={onStart}
        className="w-full py-5 rounded-2xl text-white text-xl font-black shadow-2xl transform transition active:scale-95 hover:brightness-110 flex items-center justify-center gap-3 group"
        style={{ 
          backgroundColor: SUCCESS_GREEN,
          boxShadow: `0 20px 40px -12px ${SUCCESS_GREEN}80`
        }}
      >
        COMEÇAR O TESTE AGORA
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  );
};

export default Intro;
