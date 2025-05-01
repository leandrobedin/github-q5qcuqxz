import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: 'Preciso de um computador para ter acesso aos módulos?',
    answer: 'Não, você pode acessar as aulas de qualquer dispositivo com internet, como um computador, celular ou tablet.'
  },
  {
    question: 'É difícil aprender?',
    answer: 'Não, o curso foi projetado para ser fácil de acompanhar, mesmo para quem não tem experiência prévia na cozinha.'
  },
  {
    question: 'Vou aprender a fazer bolo também?',
    answer: 'Sim, irá aprender a fazer mais de 30 tipos de bolo para colocar nos seus picolés.'
  },
  {
    question: 'Preciso investir muito dinheiro para começar?',
    answer: 'Não, no curso recomendamos os materiais básicos que você pode usar. A maioria dos utensílios são simples, fáceis de encontrar e provavelmente você já os tem em casa. Além disso, você economiza muito Maria, pois pode ter muitos dos ingredientes em casa também.'
  },
  {
    question: 'Terei suporte?',
    answer: 'Sim, você terá acesso a um grupo exclusivo e à nossa equipe de suporte Maria, que estará disponível para responder todas as suas perguntas e te ajudar no processo.'
  },
  {
    question: 'E se eu não gostar do curso?',
    answer: 'Você tem 30 dias para testar o curso e, se não gostar, basta cancelar, sem perguntas.'
  },
  {
    question: 'A plataforma é Segura?',
    answer: 'É uma plataforma de pagamentos e de hospedagem de cursos 100% segura, onde colocamos o nosso curso pois tem o melhor carregamento do mercado em vista de outras plataformas. Em estatísticas, é a melhor, pois visamos sempre o melhor para nossas alunas!'
  },
  {
    question: 'Quanto tempo vai levar para eu aprender a fazer os cakes sincles?',
    answer: 'O curso é prático e direto, permitindo que você aprenda no seu ritmo. Em poucos dias, com dedicação, já estará fazendo picolés de bolo incríveis. A média é em menos de 1 semana! Mas como sei que você é super inteligente Maria tenho certeza que em poucos dias já terá aprendido tudo!'
  },
  {
    question: 'Preciso de experiência prévia na cozinha para fazer o curso?',
    answer: 'Não, o curso é pensado para iniciantes, pessoas que não sabem absolutamente nada de cozinha e também para aqueles que já têm alguma experiência, mas desejam se especializar em cake sincle.'
  },
  {
    question: 'Os ingredientes são fáceis de encontrar?',
    answer: 'Sim, todos os ingredientes são muito fáceis de encontrar. Além disso, fornecemos uma lista com os melhores fornecedores do mundo gratuitamente.'
  },
  {
    question: 'O curso oferece certificado?',
    answer: 'Sim, ao finalizar o curso, você receberá um certificado digital que reconhece suas habilidades em confeitaria de cake sicle Maria.'
  },
  {
    question: 'O que acontece se eu não tiver tempo para ver tudo de uma vez?',
    answer: 'Sem problema! tudo estará disponível para você acessar quando quiser e quantas vezes quiser. O acesso é vitalício!'
  },
  {
    question: 'Vou aprender a vender meus picolés de bolo?',
    answer: 'Sim, além das técnicas de produção, o curso inclui dicas e estratégias de marketing para que você comece a vender e lucrar com seus picolés de bolo.'
  },
  {
    question: 'Vou realmente ganhar R$8.500,00 por mês com cake sincle?',
    answer: 'Você vai ganhar até mais que isso; esse valor é apenas uma base e uma garantia de que você lucrará no primeiro mês se aplicar tudo o que ensinamos. Mas, em média, nossas alunas ganham R$12.000,00 no mês, sem esforço nem dor de cabeça e muito menos a ajuda de ninguém. Quem tem 2 funcionárias está ganhando a média de R$20.000,00 no mês!'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-frosting-dark mb-12">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button 
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-frosting-dark">{item.question}</span>
                  <span>
                    {openIndex === index ? 
                      <ChevronUp className="text-frosting" size={20} /> : 
                      <ChevronDown className="text-frosting" size={20} />
                    }
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-gray-200">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="#comprar" 
              className="inline-block bg-frosting-dark hover:bg-frosting text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              QUERO GARANTIR MINHA VAGA AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;