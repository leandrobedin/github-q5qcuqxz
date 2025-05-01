import React from 'react';
import { Check } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section 
      className="py-16 bg-cake-light"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-frosting-dark mb-6">
            Destaques Finais
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              'Acesso vitalício às 25+ aulas gravadas',
              'Suporte 24/7 em grupo exclusivo e diretamente comigo',
              'Negócio escalável, Comece pequeno e cresça conforme quiser!'
            ].map((point, index) => (
              <div 
                key={index} 
                className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl shadow-md flex items-start space-x-3"
              >
                <div className="bg-frosting-dark rounded-full p-1 flex-shrink-0">
                  <Check size={16} className="text-white" />
                </div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-8">
            <p className="text-lg font-bold text-frosting-dark mb-6">
              Não perca tempo! As vagas se esgotam rápido.
            </p>
            
            <a 
              href="#comprar"
              className="inline-block bg-frosting-dark hover:bg-frosting text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              👉 QUERO INICIAR MINHA TRANSFORMAÇÃO AGORA 👈
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;