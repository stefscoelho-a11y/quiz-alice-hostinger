
import React, { useState, useRef } from 'react';
import { FinalResult } from '../types';
import { PRIMARY_COLOR, SUCCESS_GREEN, STYLE_METADATA, VSL_CONTENT, SOFT_PINK } from '../constants';

interface VslPageProps {
  result: FinalResult;
}

const CAROUSEL_IMAGES = [
  "https://alicesalazarcursos.com.br/wp-content/uploads/2025/07/img2-1.avif",
  "https://alicesalazarcursos.com.br/wp-content/uploads/2025/07/img1.avifc",
  "https://alicesalazarcursos.com.br/wp-content/uploads/2025/07/img3.avif",
  "https://alicesalazarcursos.com.br/wp-content/uploads/2025/07/img1.avif",
  "https://alicesalazarcursos.com.br/wp-content/uploads/2025/07/img10.avif",
  "https://alicesalazarcursos.com.br/wp-content/uploads/2025/07/img9.avif",
  "https://alicesalazarcursos.com.br/wp-content/uploads/2025/07/img8.avif",
  "https://alicesalazarcursos.com.br/wp-content/uploads/2025/07/img7.avif",
  "https://alicesalazarcursos.com.br/wp-content/uploads/2025/07/img6.avif",
  "https://alicesalazarcursos.com.br/wp-content/uploads/2025/07/0000.avif",
  "https://alicesalazarcursos.com.br/wp-content/uploads/2025/07/img5.avif"
];

const VslPage: React.FC<VslPageProps> = ({ result }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const offerRef = useRef<HTMLDivElement>(null);
  const metadata = STYLE_METADATA[result.predominantKey];

  const scrollToOffer = () => {
    offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const ctaButton = (text: string, isCheckout = false) => (
    <button 
      className="w-full py-6 rounded-2xl text-white text-2xl font-black shadow-2xl transform transition active:scale-95 hover:brightness-110 flex items-center justify-center gap-3"
      style={{ backgroundColor: SUCCESS_GREEN }}
      onClick={isCheckout ? () => alert("Redirecionando para o Checkout Seguro...") : scrollToOffer}
    >
      {text}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </button>
  );

  return (
    <div className="bg-[#FDFCFD] animate-fade-in overflow-x-hidden">
      {/* Dobra 1 - Video Section (9x16 Vertical) */}
      <section className="px-6 py-12 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          Essa é a chance de usar todo poder do seu Estilo <br/>
          <span style={{ color: PRIMARY_COLOR }}>{result.predominant}</span> ao seu favor!
        </h1>
        <p className="text-slate-600 text-lg mb-8 font-medium">
          Assista ao vídeo rápido para entender como se vestir bem gastando pouco
        </p>

        <div className="relative aspect-[9/16] w-full max-w-[320px] mx-auto bg-slate-900 rounded-[2rem] shadow-2xl mb-10 overflow-hidden border-8 border-white">
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${metadata.vslVideoId}?autoplay=0&rel=0`}
            title="Vídeo de Vendas"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {ctaButton("QUERO ME VESTIR BEM")}
      </section>

      {/* Dobra 2 - Carrossel de Looks (Auto-scroll Infinito) */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6 mb-12">
          <h2 className="text-3xl font-black leading-tight">Veja como a Alice monta looks sofisticados com <span className="text-purple-600">POUCO DINHEIRO!</span></h2>
        </div>
        
        <div className="relative w-full flex overflow-hidden">
          <div className="flex animate-marquee gap-6 py-4">
            {/* Primeira sequência de imagens */}
            {CAROUSEL_IMAGES.map((img, i) => (
              <div key={`look-a-${i}`} className="min-w-[240px] md:min-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-slate-50">
                <img 
                  src={img} 
                  alt={`Look Alice ${i}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicação para loop infinito sem falhas */}
            {CAROUSEL_IMAGES.map((img, i) => (
              <div key={`look-b-${i}`} className="min-w-[240px] md:min-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-slate-50">
                <img 
                  src={img} 
                  alt={`Look Alice Copy ${i}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-6 mt-8">
          <div className="flex justify-center gap-2 mb-4">
             <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
             <div className="w-2 h-2 rounded-full bg-purple-200"></div>
             <div className="w-2 h-2 rounded-full bg-purple-200"></div>
          </div>
          <p className="text-slate-500 font-medium">E você vai aprender todo passo a passo para montar os seus</p>
        </div>
      </section>

      {/* Dobra 3 - Para quem é */}
      <section className="py-20 px-6 bg-[#FDFCFD]">
        <div className="max-w-xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="https://alicesalazarcursos.com.br/wp-content/uploads/2024/10/eeo_conhe.png" 
              alt="Alice Salazar - Conhecimento de Estilo" 
              className="max-w-[220px] h-auto"
            />
          </div>
          <h2 className="text-3xl font-black mb-10 leading-tight">O Curso Vista-se Bem Gastando Pouco foi pensado para:</h2>
          <ul className="space-y-4 text-left">
            {[
              "Mulheres que não querem gastar dinheiro comprando errado.",
              "Quem deseja ficar na moda, economizando.",
              "Pessoas que desejam ser elogiadas pelo bom gosto.",
              "Deixar qualquer amiga louca, querendo saber como você mudou tanto."
            ].map((item, i) => (
              <li key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 items-center">
                <span className="text-2xl">✅</span>
                <span className="font-bold text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12">{ctaButton("QUERO ME VESTIR BEM")}</div>
        </div>
      </section>

      {/* Dobra 4 - Antes/Depois */}
      <section className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#FDFCFD] to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-red-400">Agora, você pode estar passando por isso…</h3>
              <ul className="space-y-4 opacity-80 font-medium">
                <li>• Comprando roupas caras e sentindo que nada fica bom</li>
                <li>• Guarda-roupa cheio, mas sensação de "nada para vestir"</li>
                <li>• Achando que ser estilosa é só pra quem tem dinheiro</li>
                <li>• Repetindo combinações por medo de errar</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-emerald-400">Depois do curso, você vai estar vivendo o oposto:</h3>
              <ul className="space-y-4 font-bold">
                <li>• Looks elegantes gastando muito menos do que imagina</li>
                <li>• Saber exatamente o que comprar e o que NÃO comprar</li>
                <li>• Usar o que já tem no armário com estratégia</li>
                <li>• Se olhar no espelho e se reconhecer finalmente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 5 - O que aprender */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-16">O que você vai aprender?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VSL_CONTENT.modules.map((m, i) => (
              <div 
                key={i} 
                className="p-8 rounded-[2rem] border border-purple-50 shadow-sm text-left group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default"
                style={{ backgroundColor: SOFT_PINK }}
              >
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110 duration-500">{m.icon}</div>
                <h4 className="font-black text-slate-900 mb-3 text-lg leading-tight group-hover:text-purple-600 transition-colors">{m.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dobra 6 - Bônus */}
      <section className="py-20 px-6 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-black mb-12">Garantindo sua vaga HOJE você leva <span className="text-purple-600">2 Presentes Exclusivos:</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Bônus 1 */}
            <div className="bg-white rounded-[2.5rem] shadow-xl relative overflow-hidden border-t-8 border-purple-500 flex flex-col group transition-all duration-500 hover:shadow-2xl">
               <span className="absolute top-4 right-4 bg-purple-100/90 backdrop-blur-sm text-purple-700 font-black text-[10px] px-3 py-1 rounded-full z-20">BÔNUS 1</span>
               <div className="h-60 w-full relative overflow-hidden bg-slate-100">
                 <img 
                   src="https://alicesalazarcursos.com.br/wp-content/uploads/2025/03/capa9.avif" 
                   alt="Bônus 1" 
                   className="h-full w-full object-cover transform group-hover:scale-110 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
               </div>
               <div className="p-8 pt-6 flex flex-col flex-1">
                 <h4 className="text-xl font-black mb-4">🎁 O Segredo das Mulheres Ricas</h4>
                 <p className="text-slate-500 text-sm mb-6 flex-1 font-medium">Visual de luxo usando roupas acessíveis sem ninguém perceber.</p>
                 <div className="flex items-center gap-3">
                   <span className="line-through text-slate-300 font-black text-lg">R$ 147</span>
                   <span className="text-emerald-500 font-black text-2xl">DE GRAÇA!</span>
                 </div>
               </div>
            </div>

            {/* Card Bônus 2 */}
            <div className="bg-white rounded-[2.5rem] shadow-xl relative overflow-hidden border-t-8 border-purple-500 flex flex-col group transition-all duration-500 hover:shadow-2xl">
               <span className="absolute top-4 right-4 bg-purple-100/90 backdrop-blur-sm text-purple-700 font-black text-[10px] px-3 py-1 rounded-full z-20">BÔNUS 2</span>
               <div className="h-60 w-full relative overflow-hidden bg-slate-100">
                 <img 
                   src="https://alicesalazarcursos.com.br/wp-content/uploads/2025/03/lista-secreta.avif" 
                   alt="Bônus 2" 
                   className="h-full w-full object-cover transform group-hover:scale-110 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
               </div>
               <div className="p-8 pt-6 flex flex-col flex-1">
                 <h4 className="text-xl font-black mb-4">🎁 A Lista Secreta de Lojas Baratas</h4>
                 <p className="text-slate-500 text-sm mb-6 flex-1 font-medium">Lojas escondidas onde a Alice compra suas próprias roupas com preços absurdos.</p>
                 <div className="flex items-center gap-3">
                   <span className="line-through text-slate-300 font-black text-lg">R$ 97</span>
                   <span className="text-emerald-500 font-black text-2xl">DE GRAÇA!</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 7 - Oferta */}
      <section ref={offerRef} className="py-24 px-6 text-center">
        <div className="max-w-lg mx-auto bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-[80px] opacity-30 -mr-16 -mt-16"></div>
          
          {/* Mockup Image Area */}
          <div className="relative mb-8 transform hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full"></div>
            <img 
              src="https://alicesalazarcursos.com.br/wp-content/uploads/2025/04/mockup-todos-os-cursos.avif" 
              alt="Mockup Alice Salazar Cursos" 
              className="relative w-full rounded-2xl border border-white/5 shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white font-black px-4 py-2 rounded-xl text-xs shadow-lg transform rotate-6 border-2 border-slate-900">
              ACESSO IMEDIATO
            </div>
          </div>

          <h2 className="text-2xl font-black mb-8 leading-tight">Apenas HOJE você garante:</h2>
          <ul className="text-left space-y-3 mb-10 opacity-90 text-sm font-medium">
            <li className="flex items-center gap-2"><span className="text-emerald-400">✅</span> Curso Completo Vista-se Bem Gastando Pouco</li>
            <li className="flex items-center gap-2"><span className="text-emerald-400">✅</span> Bônus: O Segredo das Mulheres Ricas</li>
            <li className="flex items-center gap-2"><span className="text-emerald-400">✅</span> Bônus: A Lista Secreta de Lojas Baratas</li>
            <li className="flex items-center gap-2"><span className="text-emerald-400">✅</span> Garantia de 7 Dias</li>
            <li className="flex items-center gap-2"><span className="text-emerald-400">✅</span> Acesso Imediato e vitalício</li>
          </ul>
          
          <p className="text-slate-400 text-lg">De <span className="line-through text-red-500 font-black">R$297</span> por apenas</p>
          <div className="my-6">
             <span className="text-white font-black text-2xl block mb-2">12x de</span>
             <h3 className="text-6xl font-black text-orange-500 tracking-tight">R$ 10,03</h3>
             <p className="text-white font-bold mt-4 text-xl">ou R$ 97 à vista</p>
          </div>
          {ctaButton("QUERO ME INSCREVER COM DESCONTO", true)}
        </div>
      </section>

      {/* Dobra 8 - Garantia */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <img 
            src="https://alicesalazarcursos.com.br/wp-content/uploads/2023/04/GARANTIA-B.png" 
            className="w-48 h-auto mx-auto mb-8" 
            alt="Selo de Garantia Alice Salazar" 
          />
          <h2 className="text-3xl font-black mb-6">Você não tem nada a perder!</h2>
          <p className="text-slate-600 mb-10 leading-relaxed font-medium">
            Se em até 7 dias você sentir que o curso não é pra você, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </p>
          {ctaButton("QUERO ENTRAR SEM RISCO")}
        </div>
      </section>

      {/* Dobra 9 - FAQ */}
      <section className="py-24 px-6 bg-[#FDFCFD] mb-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {VSL_CONTENT.faq.map((f, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left font-bold flex justify-between items-center text-slate-800 transition-colors hover:bg-slate-50"
                >
                  <span className="flex-1">{f.q}</span>
                  <span className={`flex-shrink-0 ml-4 transition-transform duration-300 text-purple-400 ${openFaq === i ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Minimalista */}
      <footer className="py-12 border-t border-slate-100 text-center opacity-40 text-[10px] font-bold uppercase tracking-widest px-6">
        <p>© 2024 Alice Salazar - Todos os direitos reservados</p>
        <p className="mt-2">Políticas de Privacidade | Termos de Uso</p>
      </footer>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default VslPage;
