import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-amber-700">Safiri Kenya</div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#destinations" className="text-gray-700 hover:text-amber-600 transition-colors">Destinations</a>
            <a href="#experiences" className="text-gray-700 hover:text-amber-600 transition-colors">Experiences</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#destinations" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Destinations</a>
            <a href="#experiences" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Experiences</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-amber-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};