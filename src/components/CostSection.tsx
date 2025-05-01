import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ingredientImages = [
  { url: 'https://i.ibb.co/LDsJd9HM/lg-2w8yq-26-min.png', alt: 'Ingredientes para Cake Sicle 1' },
  { url: 'https://i.ibb.co/x82km5f5/lg-yec1h-27-min.png', alt: 'Ingredientes para Cake Sicle 2' },
  { url: 'https://i.ibb.co/whvy2JCb/lg-6a9j0-23-min.png', alt: 'Ingredientes para Cake Sicle 3' },
  { url: 'https://i.ibb.co/zVXK9fCM/lg-2qlox-22-min.png', alt: 'Ingredientes para Cake Sicle 4' },
];

const costProfitImages = [
  { url: 'https://i.ibb.co/JRWmpB8p/lg-rs1zq-32-min.png', alt: 'Custo x Lucro 1' },
  { url: 'https://i.ibb.co/RG6q67Yk/lg-n5bhz-24-min.png', alt: 'Custo x Lucro 2' },
  { url: 'https://i.ibb.co/LzhfLpjS/lg-j8rkb-19-min.png', alt: 'Custo x Lucro 3' },
  { url: 'https://i.ibb.co/HDrn9bQc/lg-e6vi5-20-min.png', alt: 'Custo x Lucro 4' },
];

const CostSection: React.FC = () => {
  const [ingredientIndex, setIngredientIndex] = useState(0);
  const [costProfitIndex, setCostProfitIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation on scroll
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

  // Ingredients carousel controls
  const nextIngredientSlide = () => {
    setIngredientIndex((prevIndex) => (prevIndex + 1) % ingredientImages.length);
  };

  const prevIngredientSlide = () => {
    setIngredientIndex((prevIndex) => 
      prevIndex === 0 ? ingredientImages.length - 1 : prevIndex - 1
    );
  };

  // Cost/Profit carousel controls
  const nextCostProfitSlide = () => {
    setCostProfitIndex((prevIndex) => (prevIndex + 1) % costProfitImages.length);
  };

  const prevCostProfitSlide = () => {
    setCostProfitIndex((prevIndex) => 
      prevIndex === 0 ? costProfitImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-2xl md:text-4xl font-bold text-center text-frosting-dark mb-4">
            A Melhor Parte 🎯
          </h2>
          
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-xl font-semibold text-center text-candy-pink mb-12">
            Custo Baixíssimo!
          </p>
          
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 text-lg text-center text-gray-700 mb-12">
            Você aproveita ingredientes que já tem em casa e investe quase zero para começar.
          </p>
          
          {/* Ingredients Carousel */}
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 relative mb-16">
            <div className="relative overflow-hidden rounded-3xl h-[300px] md:h-[400px] bg-cake-light shadow-xl">
              <div className="h-full flex transition-transform duration-500" style={{ transform: `translateX(-${ingredientIndex * 100}%)` }}>
                {ingredientImages.map((image, index) => (
                  <div key={index} className="h-full min-w-full flex items-center justify-center p-4 md:p-8">
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="max-h-full max-w-full object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>
              
              {/* Controls */}
              <button 
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-frosting-dark rounded-full p-2 shadow-md transition-all"
                onClick={prevIngredientSlide}
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-frosting-dark rounded-full p-2 shadow-md transition-all"
                onClick={nextIngredientSlide}
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {ingredientImages.map((_, index) => (
                  <button 
                    key={index} 
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === ingredientIndex ? 'bg-frosting-dark w-6' : 'bg-frosting/40'
                    }`}
                    onClick={() => setIngredientIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <h3 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 text-xl md:text-2xl font-bold text-center text-frosting-dark mb-8">
            Custo de Fabricação x Lucro: 🤑
          </h3>
          
          {/* Cost/Profit Carousel */}
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 relative">
            <div className="relative overflow-hidden rounded-3xl h-[300px] md:h-[400px] bg-cake-light shadow-xl">
              <div className="h-full flex transition-transform duration-500" style={{ transform: `translateX(-${costProfitIndex * 100}%)` }}>
                {costProfitImages.map((image, index) => (
                  <div key={index} className="h-full min-w-full flex items-center justify-center p-4 md:p-8">
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="max-h-full max-w-full object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>
              
              {/* Controls */}
              <button 
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-frosting-dark rounded-full p-2 shadow-md transition-all"
                onClick={prevCostProfitSlide}
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-frosting-dark rounded-full p-2 shadow-md transition-all"
                onClick={nextCostProfitSlide}
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {costProfitImages.map((_, index) => (
                  <button 
                    key={index} 
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === costProfitIndex ? 'bg-frosting-dark w-6' : 'bg-frosting/40'
                    }`}
                    onClick={() => setCostProfitIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostSection;