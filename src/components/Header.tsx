import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-candy-gradient">
          CakeSicle Pro
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-frosting-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Sobre', 'Benefícios', 'Depoimentos', 'Bônus', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-frosting-dark hover:text-candy-pink font-medium transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#comprar" 
            className="bg-frosting-dark hover:bg-frosting text-white font-bold px-6 py-2 rounded-full transition-colors"
          >
            Comprar Agora
          </a>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg p-4 rounded-b-2xl">
            <nav className="flex flex-col space-y-4">
              {['Sobre', 'Benefícios', 'Depoimentos', 'Bônus', 'FAQ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-frosting-dark hover:text-candy-pink font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#comprar" 
                className="bg-frosting-dark hover:bg-frosting text-white font-bold px-6 py-2 rounded-full transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Comprar Agora
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;