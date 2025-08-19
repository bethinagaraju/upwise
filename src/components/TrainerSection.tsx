import React from 'react';
import { Users, Building2, Award } from 'lucide-react';

const TrainerSection: React.FC = () => {
  return (
    <section id="trainer" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Trainer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Ritu Arora</h3>
              <p className="text-lg text-gray-600">Microsoft Specialist | AI Educator | Corporate Trainer</p>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              Ritu Arora is a certified Microsoft Specialist, AI Educator, and Corporate Trainer with 20+ years of experience. She has trained over 100,000 professionals across 3,000+ companies in India and abroad, including sessions for ADNOC (UAE). Known for simplifying tech and driving outcomes, Ritu makes learning practical, interactive, and impactful.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">100,000+</div>
                <div className="text-gray-600">Professionals Trained</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Building2 className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">3,000+</div>
                <div className="text-gray-600">Companies</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">20+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
