


import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function ElevateHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Keeping max-w-7xl for better content alignment, as seen in image */}
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Harappa Logo - using text for now, but ideally an SVG or image */}
              {/* The image shows a small square graphic to the left of "HARAPPA" */}
              {/* For precise logo, you'd embed an SVG or image here. */}
              {/* Using a placeholder div for the graphic. */}
              
              <span className="text-gray-800 text-2xl font-bold tracking-tight">
              
                <img src='/upwise-logo.jpg' alt="Harappa Logo" width="120" height="70" onClick={() => {window.location.href = '/';}}/>
               
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {/* Reduced space-x-8 to space-x-6 for less gap */}
            <ul className="flex space-x-12"> 
              
              <li>
                <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-semibold flex items-center">
                  Home  {/* Changed icon color to yellow */}
                </a>
              </li>

              <li>
                <a href="#programs" className="text-gray-700 hover:text-gray-900 transition-colors font-semibold flex items-center">
                  Ignite  {/* Changed icon color to yellow */}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors font-semibold flex items-center">
                  Elevate  {/* Changed icon color to yellow */}
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-semibold flex items-center">
                  Empower  {/* Changed icon color to yellow */}
                </a>
              </li>



            </ul>
          </nav>

          {/* Desktop Button - Reduced padding/margin for less gap */}
          

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Ignite</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Elevate</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Empower</a>
              {/* <a href="#contact">
              <button className="w-full mt-3 bg-[#009bea] text-white px-6 py-2 rounded-md hover:bg-[#0088d1] transition-colors font-semibold rounded-lg">
                Contact Us
              </button>
              </a> */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}