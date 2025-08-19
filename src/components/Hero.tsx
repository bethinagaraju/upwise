

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#FDB813] min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-16">
      {/* Left person image */}
      <img
        src="hero-girl.png" // Assuming hero-girl.png is in your public folder or correctly aliased
        alt="Smiling woman"
        className="absolute bottom-0 left-0 object-contain object-left z-10"
        style={{ maxHeight: '70vh', width: 'auto' }} // Reduced max-height
      />

      {/* Right person image */}
      <img
        src="hero-boy.png" // Assuming hero-boy.png is in your public folder or correctly aliased
        alt="Smiling man"
        className="absolute bottom-0 right-0 object-contain object-right z-10"
        style={{ maxHeight: '80vh', width: 'auto',}} // Reduced max-height and added opacity
      />

      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 tracking-tight uppercase">
          Empowering Your Teams with Real-World, Instructor-Led Training
 <br className="hidden sm:inline" />DEPEND ON THE MOST
        </h1>
        <p style={{ color: '#4a4a4a' }} className="text-xl sm:text-2xl font-semibold mb-10">
          High-Impact Blended Learning Programs <br className="hidden sm:inline" />For All Your Managers To Thrive
        </p>
        <button style={{ backgroundColor: 'white', color: '#4a4a4a' }} className="inline-flex items-center px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
          Find Out How <ArrowRight className="ml-2 w-5 h-5 text-[#FDB813]" />
        </button>
      </div>
    </section>
  );
}