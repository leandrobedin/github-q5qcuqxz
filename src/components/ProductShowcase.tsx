import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const productImages = [
  { url: 'https://i.ibb.co/V07G1dX7/lg-bd4kn-30-min.png', alt: 'Cake Sicle Chocolate' },
  { url: 'https://i.ibb.co/WNj50XWR/lg-jd6u5-31-min.png', alt: 'Cake Sicle Morango' },
  { url: 'https://i.ibb.co/DDKtQ2Hs/lg-sxe7z-28-min.png', alt: 'Cake Sicle Frutas' },
  { url: 'https://i.ibb.co/G4BgTq77/lg-9wgmk-29-min.png', alt: 'Cake Sicle Decorado' },
];

const ProductShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Pause auto-slide on hover
  const pauseAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeAutoSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
  };

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

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-2xl md:text-4xl font-bold text-center text-frosting-dark mb-8">
            O Que Você Vai Produzir (e Vender)
          </h2>
          
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-lg text-center text-gray-700 mb-12">
            Alguns dos Cake Sicles que ensinamos no módulo "Receitas Premium"
          </p>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 relative mb-12">
            <div 
              className="relative overflow-hidden rounded-3xl h-[300px] md:h-[500px] bg-cake-light shadow-xl"
              onMouseEnter={pauseAutoSlide}
              onMouseLeave={resumeAutoSlide}
            >
              {/* Carousel */}
              <div className="h-full flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {productImages.map((image, index) => (
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
                onClick={prevSlide}
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-frosting-dark rounded-full p-2 shadow-md transition-all"
                onClick={nextSlide}
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {productImages.map((_, index) => (
                  <button 
                    key={index} 
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex ? 'bg-frosting-dark w-6' : 'bg-frosting/40'
                    }`}
                    onClick={() => goToSlide(index)}
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

export default ProductShowcase;