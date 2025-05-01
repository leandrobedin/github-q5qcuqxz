import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cake-light py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-candy-gradient inline-block">
              CakeSicle Pro
            </h2>
          </div>
          
          <p className="text-gray-700 mb-6">
            © {new Date().getFullYear()} CakeSicle Pro. Todos os direitos reservados.
          </p>
          
          <p className="text-sm text-gray-600 flex items-center justify-center">
            Feito com <Heart size={16} className="text-candy-pink mx-1 animate-pulse" /> para empreendedoras de todo o Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;