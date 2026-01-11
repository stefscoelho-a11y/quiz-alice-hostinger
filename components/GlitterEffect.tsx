
import React, { useEffect, useState } from 'react';

const GlitterEffect: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: string; size: string; duration: string }>>([]);

  useEffect(() => {
    // Gerar 25 partículas com propriedades aleatórias
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 4 + 2}px`,
      duration: `${Math.random() * 3 + 4}s` // Entre 4 e 7 segundos para cair
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className="glitter-particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: 0.6
          }}
        />
      ))}
    </>
  );
};

export default GlitterEffect;
