import React from 'react';
import { Check, DollarSign, Users, Star, ShoppingBag } from 'lucide-react';

const benefits = [
  {
    icon: <DollarSign className="text-candy-pink" size={24} />,
    text: 'Custo de produção baixo – Use ingredientes que já tem em casa!'
  },
  {
    icon: <Star className="text-candy-yellow" size={24} />,
    text: 'Margem de lucro altíssima – Venda cada unidade por até R$12,00!'
  },
  {
    icon: <Users className="text-candy-blue" size={24} />,
    text: 'Zero concorrência – Será a única na sua cidade a oferecer esse produto!'
  },
  {
    icon: <ShoppingBag className="text-candy-green" size={24} />,
    text: 'Fácil de aprender – Curso para iniciantes, com passo a passo detalhado.'
  },
  {
    icon: <Check className="text-candy-purple" size={24} />,
    text: 'Venda online ou presencial – Estratégias para você lucrar sem sair de casa!'
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section 
      id="benefícios" 
      className="py-16 bg-gradient-to-b from-cake-light to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#101010] mb-12">
            Por Que Esse Negócio Funciona?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-white p-4 rounded-2xl shadow-lg mr-4">
                  {benefit.icon}
                </div>
                <p className="text-lg text-[#101010]">{benefit.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#comprar" 
              className="inline-block bg-frosting hover:bg-frosting-dark text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              QUERO COMEÇAR HOJE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;