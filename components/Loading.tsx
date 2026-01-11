
import React, { useState, useEffect } from 'react';
import { PRIMARY_COLOR } from '../constants';

const messages = [
  "Analisando suas preferências...",
  "Consultando arquétipos de estilo...",
  "Identificando sua paleta predominante...",
  "Cruzando dados com os 7 Estilos Universais...",
  "Quase pronto! Criando seu dossiê exclusivo..."
];

const Loading: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center min-h-[60vh]">
      <div className="relative w-24 h-24 mb-10">
        <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
        <div 
          className="absolute inset-0 border-4 rounded-full animate-spin border-t-transparent"
          style={{ borderColor: `${PRIMARY_COLOR} transparent transparent transparent` }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl animate-pulse">✨</span>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-slate-800 mb-4 transition-all duration-500">
        {messages[index]}
      </h3>
      <p className="text-slate-500 max-w-xs mx-auto">
        Estamos definindo seu estilo...
      </p>
    </div>
  );
};

export default Loading;
