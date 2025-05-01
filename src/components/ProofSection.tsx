import React from 'react';

const ProofSection: React.FC = () => {
  return (
    <section 
      id="sobre" 
      className="py-16 bg-gradient-to-b from-white to-cake-light"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-frosting-dark mb-12">
            Prova de Resultados — O que você pode conquistar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-candy-pink mb-4">Veja o faturamento da Andreza (Janeiro):</h3>
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://i.ibb.co/HL2Pys01/md-ou4r7-img-849f02d1ca2d-1.jpg" 
                  alt="Prova de faturamento" 
                  className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-bold">R$ 8.500,00+ em um único mês!</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Testando sobremesas, descobri uma oportunidade quase desconhecida: <span className="font-bold text-frosting-dark">Cake Sicle (picolé de bolo)</span>.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Com um método enxuto, hoje minhas alunas faturam de <span className="font-bold text-frosting-dark">R$ 8.500,00 a R$ 12.000,00 por mês</span> e você será a próxima.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ela atingiu esse número aplicando <span className="font-bold text-frosting-dark">exatamente a estratégia que você vai dominar hoje</span>, usando apenas celular + cozinha comum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;