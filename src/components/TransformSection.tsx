import React, { useEffect, useRef } from 'react';
import { Sparkles, Home, DollarSign } from 'lucide-react';

const TransformSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-2xl md:text-4xl font-bold text-center text-frosting-dark mb-12">
            Fique Em Casa e Transforme Sua Vida
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Home className="text-candy-pink" size={32} />,
                title: 'Trabalhe de Casa',
                text: 'Sem experiência prévia, computador ou investimento alto!'
              },
              {
                icon: <DollarSign className="text-candy-blue" size={32} />,
                title: 'Fature R$8.500,00+',
                text: 'Siga o passo a passo do curso e comece em menos de 30 dias'
              },
              {
                icon: <Sparkles className="text-candy-purple" size={32} />,
                title: 'Acesso Vitalício',
                text: 'Tudo está gravado, com suporte direto e acesso para sempre'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-${index * 100} bg-white border border-frosting/20 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center text-frosting-dark mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-center">{feature.text}</p>
              </div>
            ))}
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 bg-gradient-to-b from-frosting-light to-frosting p-8 rounded-3xl shadow-lg text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              Agora é a Sua Chance!
            </h3>
            
            <p className="text-lg text-white mb-4">
              🔥 Você vai continuar olhando de longe para o sucesso?
            </p>
            
            <p className="text-lg text-white mb-8">
              Ou vai dar o primeiro passo e se tornar a primeira pessoa na sua cidade a vender Cake Sicles?
            </p>
            
            <a 
              href="#comprar"
              className="inline-block bg-white hover:bg-gray-100 text-frosting-dark text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              👉 QUERO GARANTIR MINHA VAGA COM DESCONTO 👈
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;