import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors z-50 border-2 border-white"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={30} className="text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
