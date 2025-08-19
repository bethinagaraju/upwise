import React from 'react';
import { Users, Globe, Building2, Clock } from 'lucide-react';

const DeliveryOptions: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Delivery Options</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">In-person Training</h3>
            <p className="text-gray-600">On-site corporate training at your office</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Globe className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Virtual Live Training</h3>
            <p className="text-gray-600">Interactive online sessions with real-time support</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Building2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Corporate Batches</h3>
            <p className="text-gray-600">Tailored programs for your organization</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Clock className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Durations</h3>
            <p className="text-gray-600">8 / 16 / 24 hours with hands-on practice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryOptions;
