import React from 'react';
import { CheckCircle, Download, MessageSquare, Mail, Globe } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ignite Your Team's Productivity?</h2>
          <p className="text-xl opacity-90">Get started with a custom training program today</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">Book a Corporate Batch</span>
              </div>
              <div className="flex items-center space-x-4">
                <Download className="w-6 h-6 text-green-400" />
                <span className="text-lg">Request Detailed Brochure</span>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="w-6 h-6 text-green-400" />
                <span className="text-lg">Talk to Ritu Arora</span>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:training@rituarora.in" className="hover:underline">training@rituarora.in</a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5" />
                <a href="https://www.rituarora.in" className="hover:underline">www.rituarora.in</a>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <textarea
                placeholder="Training Requirements"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
