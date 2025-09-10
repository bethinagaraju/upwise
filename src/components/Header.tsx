




import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="upwise-logo.jpg"
                alt="Harappa Logo"
                width="120"
                height="70"
                onClick={() => (window.location.href = '/')}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-12 relative">
              <li>
                <a
                  href="/#about-us"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-semibold"
                >
                  About Us
                </a>
              </li>

              {/* Programs with dropdown */}
              <li className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 font-semibold focus:outline-none">
                  Programs
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition opacity duration-200">
                  <ul className="py-2">
                    <li>
                      <a
                        href="/ignite"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Ignite
                      </a>
                    </li>
                    <li>
                      <a
                        href="/elevate"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Elevate
                      </a>
                    </li>
                    <li>
                      <a
                        href="/empower"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Empower
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a
                  href="/#testimonials"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-semibold"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="/resources"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-semibold"
                >
                  Resources
                </a>
              </li>

              <li>
                <a
                  href="/gallery"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-semibold"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center ml-8">
            <a
              href="/#contact"
              className="bg-blue-500 text-white px-5 py-2.5 rounded-md hover:bg-blue-600 transition-colors font-semibold shadow-md text-base"
            >
              Contact Us
            </a>
          </div>

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
              <a
                href="/#about-us"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                About Us
              </a>

              {/* Mobile version of Programs as simple links */}
              <div>
                <p className="px-3 py-2 font-medium text-gray-700">Programs</p>
                <a
                  href="/ignite"
                  className="block pl-6 py-2 text-gray-600 hover:text-blue-600"
                >
                  Ignite
                </a>
                <a
                  href="#"
                  className="block pl-6 py-2 text-gray-600 hover:text-blue-600"
                >
                  Elevate
                </a>
                <a
                  href="#"
                  className="block pl-6 py-2 text-gray-600 hover:text-blue-600"
                >
                  Empower
                </a>
              </div>

              <a
                href="/#testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Testimonials
              </a>
              <a
                href="/resources"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Resources
              </a>
              <a href="/#contact">
                <button className="w-full mt-3 bg-[#009bea] text-white px-6 py-2 rounded-md hover:bg-[#0088d1] transition-colors font-semibold rounded-lg">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
