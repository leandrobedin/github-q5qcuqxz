import React from 'react';
import { Video, FileText, UserCheck, Award, ShoppingCart, Users } from 'lucide-react';

const features = [
  {
    icon: <Video className="text-candy-blue" size={32} />,
    title: '25+ Aulas HD',
    description: 'Acesso vitalício a todas as aulas em alta definição'
  },
  {
    icon: <FileText className="text-candy-pink" size={32} />,
    title: '+100 Receitas',
    description: 'Cake Sicles simples, recheados e premium para todos os gostos'
  },
  {
    icon: <ShoppingCart className="text-candy-purple" size={32} />,
    title: 'Apostila Completa',
    description: 'Ingredientes, quantidades e fornecedores recomendados'
  },
  {
    icon: <UserCheck className="text-candy-green" size={32} />,
    title: 'Módulo de Vendas',
    description: 'Estratégias para vender pelo Instagram, WhatsApp e iFood'
  },
  {
    icon: <Award className="text-candy-yellow" size={32} />,
    title: 'Plano de Negócio',
    description: 'Precificação, embalagens, delivery e muito mais'
  },
  {
    icon: <Users className="text-candy-red" size={32} />,
    title: 'Suporte + Grupo VIP',
    description: 'Suporte direto e acesso ao grupo exclusivo de alunas'
  },
];

const CourseFeatures: React.FC = () => {
  return (
    <section 
      className="py-16 bg-gradient-to-b from-white to-cake-light"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#101010] mb-12">
            O QUE VOCÊ RECEBE
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-gray-100 p-8 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-[#101010] mb-3">{feature.title}</h3>
                <p className="text-[#101010] text-center">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-gray-100 p-8">
            <h3 className="text-xl md:text-2xl font-bold text-center text-[#101010] mb-6">
              Por que vale a pena?
            </h3>
            
            <ul className="space-y-4">
              {[
                'Extremamente chamativo – fotos que vendem sozinhas no Instagram.',
                'Concorrência quase nula – seja a primeira na sua cidade.',
                'Margem de lucro altíssima – preço de venda até 5 × o custo.',
                'Totalmente personalizável – datas festivas, kits corporativos, festas infantis.'
              ].map((point, index) => (
                <li 
                  key={index} 
                  className="flex items-start"
                >
                  <span className="inline-flex items-center justify-center bg-frosting-dark text-white rounded-full w-6 h-6 mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-lg text-[#101010]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;