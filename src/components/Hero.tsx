import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-frosting-dark leading-tight mb-6">
            Transforme Picolés de Bolo Em Uma Renda Mensal de R$ 8.500,00 ou Mais!
            <span className="block text-[#101010] mt-2 text-2xl md:text-5xl">Mesmo Sem Experiência na Cozinha</span>
          </h1>
          
          <p className="text-lg md:text-xl text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Aprenda o método exclusivo que fez dezenas de alunas lucrarem em menos de 30 dias. Tudo pelo celular + cozinha simples.
          </p>
          
          <div className="relative w-full max-w-2xl mx-auto mb-12">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-candy-pink/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-candy-blue/20 rounded-full blur-3xl animate-float-slow"></div>
            
            <div className="relative bg-white/40 backdrop-blur-md p-6 rounded-3xl shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-candy-gradient"></div>
              <img 
                src="https://permitase-sonhar.com/wp-content/uploads/2025/05/picole-cake01-min.png" 
                alt="Picolé de Bolo (Cake Sicle)" 
                className="w-full h-auto max-h-[400px] object-contain mx-auto rounded-xl animate-float"
              />
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="#comprar" 
              className="inline-block bg-frosting-dark hover:bg-frosting text-white text-lg md:text-xl font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 relative overflow-hidden"
            >
              <span className="relative z-10">QUERO COMEÇAR HOJE</span>
              <span className="absolute inset-0 bg-white/20 animate-pulse"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;