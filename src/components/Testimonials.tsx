import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Juliana',
    image: 'https://i.ibb.co/xtBLdhpK/lg-xpqbj-bhjvsv-min.png',
    quote: 'Em menos de um mês, comecei a faturar mais do que no meu antigo emprego. O método é simples e funciona!'
  },
  {
    name: 'Jéssica',
    image: 'https://i.ibb.co/QF6dNRQk/lg-0h8qi-img-3391-min.png',
    quote: 'Nunca imaginei que algo tão simples poderia mudar minha vida. Hoje sustento minha família com os cake sicles!'
  }
];

const Testimonials: React.FC = () => {
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
      id="depoimentos" 
      className="py-16 bg-cake-light"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-2xl md:text-4xl font-bold text-center text-frosting-dark mb-6">
            Depoimentos Reais de Alunas 🗣️
          </h2>
          
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-lg text-center text-gray-700 mb-12">
            Elas seguiram o passo a passo e transformaram uma habilidade simples em fonte de renda consistente. Agora é a sua vez!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-${200 + index * 100} relative bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg`}
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-frosting rounded-full flex items-center justify-center shadow-lg">
                  <Quote size={24} className="text-white" />
                </div>
                
                <div className="flex flex-col items-start space-y-6">
                  <img 
                    src={testimonial.image} 
                    alt={`Depoimento de ${testimonial.name}`}
                    className="w-full h-auto object-contain"
                  />
                  
                  <div>
                    <h3 className="text-2xl font-bold text-frosting-dark mb-3">{testimonial.name}</h3>
                    <p className="text-lg text-gray-700 italic leading-relaxed">{testimonial.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 mt-12 text-center">
            <a 
              href="#comprar" 
              className="inline-block bg-frosting-dark hover:bg-frosting text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              QUERO RESULTADOS COMO ESTES
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;