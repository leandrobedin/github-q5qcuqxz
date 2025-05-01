import React from 'react';
import { Gift, Check, Sparkles } from 'lucide-react';

const bonuses = [
  {
    icon: <Sparkles className="text-candy-pink" size={24} />,
    title: 'Coberturas de Chocolate Pro',
    value: 'R$ 197',
    desc: 'Técnicas exclusivas para coberturas profissionais que encantam clientes'
  },
  {
    icon: <Sparkles className="text-candy-blue" size={24} />,
    title: '30 Receitas de Bolos Clássicos',
    value: 'R$ 147',
    desc: 'As melhores receitas de bolos para usar como base nos seus cake sicles'
  },
  {
    icon: <Sparkles className="text-candy-purple" size={24} />,
    title: 'Guia de Vendas Online',
    value: 'R$ 97',
    desc: 'Estratégias para vender nas redes sociais e multiplique seus lucros'
  },
  {
    icon: <Sparkles className="text-candy-green" size={24} />,
    title: 'Lista de Fornecedores Premium',
    value: 'R$ 67',
    desc: 'Acesso aos melhores fornecedores com preços especiais'
  },
  {
    icon: <Sparkles className="text-candy-yellow" size={24} />,
    title: 'Grupo VIP de Networking',
    value: 'R$ 47',
    desc: 'Conecte-se com outras empreendedoras e amplie sua rede'
  }
];

const BonusSection: React.FC = () => {
  return (
    <section 
      id="bônus" 
      className="py-16 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-candy-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-candy-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-frosting-dark p-4 rounded-full">
              <Gift size={40} className="text-white" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#101010] mb-4">
            BÔNUS EXCLUSIVOS
          </h2>
          
          <p className="text-xl text-center text-candy-pink font-bold mb-12">
            Somente Hoje!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {bonuses.map((bonus, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-gray-100 p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-frosting text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  GRÁTIS
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="bg-white p-4 rounded-2xl shadow-lg mr-4">
                    {bonus.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-[#101010]">{bonus.title}</h3>
                    <div className="flex items-center">
                      <span className="text-gray-500 line-through mr-2">{bonus.value}</span>
                      <span className="text-candy-pink font-bold">GRÁTIS!</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-[#101010] pl-12">{bonus.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-frosting to-frosting-dark p-1 rounded-3xl shadow-lg">
            <div className="bg-white p-6 md:p-8 rounded-3xl">
              <h3 className="text-xl md:text-2xl font-bold text-center text-[#101010] mb-6">
                Valor Total dos Bônus: <span className="text-frosting-dark">R$ 555,00</span>
              </h3>
              
              <p className="text-lg text-center text-[#101010] mb-8">
                Tudo isso <span className="font-bold text-candy-pink">GRÁTIS</span> para quem garantir a vaga <span className="font-bold">HOJE</span>!
              </p>
              
              <div className="text-center">
                <a 
                  href="#comprar" 
                  className="inline-block bg-frosting-dark hover:bg-frosting text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  QUERO GARANTIR MEU ACESSO + BÔNUS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;