import React from 'react';
import { Flame } from 'lucide-react';

const NavigationBar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Flame className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-900">IGNITE</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#program" className="text-gray-700 hover:text-blue-600 transition-colors">Program</a>
            <a href="#trainer" className="text-gray-700 hover:text-blue-600 transition-colors">Trainer</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
