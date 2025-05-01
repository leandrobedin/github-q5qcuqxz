import React, { useEffect, useRef, useState } from 'react';
import { Clock, AlertTriangle, Check, Shield, Gift } from 'lucide-react';

const UrgencySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        const newMinutes = newSeconds < 0 ? prev.minutes - 1 : prev.minutes;
        const newHours = newMinutes < 0 ? prev.hours - 1 : prev.hours;
        
        return {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

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
      id="comprar" 
      className="py-16 bg-gradient-to-b from-cake-light to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-2xl md:text-4xl font-bold text-center text-frosting-dark mb-6">
            Sua Oportunidade de Transformação
          </h2>
          
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-xl text-center text-candy-pink mb-12">
            Comece Seu Negócio de Sucesso Hoje Mesmo!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <AlertTriangle className="text-frosting" size={24} />,
                text: 'Últimas 4 vagas disponíveis - Turma se encerrando!'
              },
              {
                icon: <AlertTriangle className="text-frosting" size={24} />,
                text: 'Desconto EXCLUSIVO de 88% - Oferta por tempo limitado!'
              },
              {
                icon: <Shield className="text-frosting" size={24} />,
                text: 'Garantia incondicional de 30 dias - Risco ZERO para você!'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-${index * 100} bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex items-start space-x-4`}
              >
                <div className="bg-white p-2 rounded-full shadow-sm">
                  {item.icon}
                </div>
                <p className="text-lg text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl mb-12">
            <div className="mb-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-frosting-dark mb-2">
                ⚠️ ATENÇÃO: Esta oferta expira em:
              </h3>
              
              <div className="flex justify-center items-center space-x-4">
                <div className="flex items-center">
                  <Clock size={24} className="text-frosting-dark mr-2" />
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Horas', value: timeLeft.hours },
                    { label: 'Minutos', value: timeLeft.minutes },
                    { label: 'Segundos', value: timeLeft.seconds }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-frosting-dark text-white text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-lg">
                        {String(item.value).padStart(2, '0')}
                      </div>
                      <span className="text-sm text-gray-600">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mb-12">
              <div className="mb-8">
                <p className="text-xl text-gray-700 mb-4">Investimento único:</p>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-2xl text-gray-400 line-through mb-2">De R$ 247,00</span>
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl text-black">Por apenas</span>
                    <div className="text-6xl md:text-7xl font-bold text-black my-2">R$ 30,00</div>
                    <span className="text-2xl md:text-3xl text-black">à vista</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-4">
                  Menos de R$ 0,10 por dia - Acesso vitalício!
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 mb-8">
                <h4 className="text-xl font-bold text-frosting-dark mb-4">
                  O Que Você Recebe Hoje:
                </h4>
                <ul className="space-y-3 text-left">
                  {[
                    'Curso completo com mais de 25 aulas em HD',
                    'Mais de 100 receitas exclusivas e testadas',
                    'Suporte personalizado no grupo VIP',
                    'Apostila digital completa',
                    'Certificado de conclusão',
                    'Todos os bônus exclusivos'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Check size={20} className="text-frosting-dark mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-frosting-light/20 rounded-2xl p-6 mb-8">
                <h4 className="text-xl font-bold text-frosting-dark mb-4">
                  Por Que Investir Agora?
                </h4>
                <ul className="space-y-3 text-left">
                  {[
                    'Comece seu negócio com investimento mínimo',
                    'Mercado em crescimento e pouca concorrência',
                    'Suporte completo para seu sucesso',
                    'Método testado e aprovado por centenas de alunas',
                    'Garantia de satisfação ou seu dinheiro de volta'
                  ].map((reason, index) => (
                    <li key={index} className="flex items-center">
                      <Gift size={20} className="text-candy-pink mr-2 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="https://go.pepper.com.br/qq3ha"
                className="inline-block text-[#2E7D32] text-2xl md:text-3xl font-bold"
              >
                👉 QUERO GARANTIR MINHA VAGA COM 88% DE DESCONTO 👈
              </a>
              
              <div className="mt-6 flex items-center justify-center space-x-2">
                <Shield size={20} className="text-frosting-dark" />
                <p className="text-gray-600">
                  Pagamento 100% seguro via cartão de crédito, boleto ou Pix
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;