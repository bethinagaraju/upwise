import React, { useState } from 'react';
import { 
  Flame, 
  Target, 
  Users, 
  CheckCircle, 
  BarChart3, 
  FileSpreadsheet, 
  Presentation, 
  MessageSquare,
  Clock,
  Award,
  Mail,
  Globe,
  Phone,
  Calendar,
  Download,
  ChevronDown,
  ChevronUp,
  Star,
  Building2,
  BookOpen,
  Zap
} from 'lucide-react';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProgramHighlights from '../components/ProgramHighlights';

import FeatureStepsSection from '../components/FeatureStepsSection';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import ExcelEssentialsCard from '../components/ExcelEssentialsCard';
import IgniteHeader from '../components/IgniteHeader';

interface ProgramModule {
  title: string;
  duration: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  color: string;
}
import Header from '../components/Header';

function Ignite() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const programModules: ProgramModule[] = [
    {
      title: "Microsoft Excel",
      duration: "8 or 16 hours",
      description: "Master Excel from basics to advanced features with AI integration",
      details: [
        "Excel Essentials (8 hrs): Formulas, functions, formatting, pivot tables",
        "Data validation & basic dashboards",
        "Intro to Power Query",
        "Advanced Excel (16 hrs): Power Pivot, advanced dashboards",
        "Lookup functions, dynamic ranges, macros",
        "Excel + AI integration (ChatGPT, Copilot)"
      ],
      icon: <FileSpreadsheet className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      title: "Power BI",
      duration: "8, 16, or 24 hours",
      description: "Transform data into insights with comprehensive Power BI training",
      details: [
        "Basics (8 hrs): Connecting data, basic visuals, intro to Power Query",
        "Intermediate (16 hrs): Data modeling, DAX formulas, publishing dashboards",
        "Advanced (24 hrs): Advanced DAX, row-level security",
        "Project-based dashboard builds"
      ],
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-yellow-500"
    },
    {
      title: "AI Tools in Microsoft Office",
      duration: "Integrated module",
      description: "Harness AI power in your daily Microsoft Office workflows",
      details: [
        "ChatGPT prompts for Excel, Word, and PowerPoint",
        "Microsoft 365 Copilot features for task automation",
        "AI extensions and add-ins for day-to-day productivity"
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      title: "PowerPoint & Presenting",
      duration: "4-8 hours",
      description: "Create impactful presentations with AI-powered design",
      details: [
        "Visual storytelling, smart templates, and animation",
        "Using AI to create scripts, slides, and charts",
        "Enhancing design with SmartArt and transitions"
      ],
      icon: <Presentation className="w-6 h-6" />,
      color: "bg-red-500"
    },
    {
      title: "Outlook, Teams & Collaboration",
      duration: "4-6 hours",
      description: "Optimize workplace collaboration and communication",
      details: [
        "Email efficiency, scheduling, calendar management",
        "Teams for meetings, file sharing, and live collaboration",
        "AI for auto-summarizing and drafting responses"
      ],
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      title: "MS Word Essentials",
      duration: "3-4 hours",
      description: "Master document creation and collaboration",
      details: [
        "Formatting, styles, templates, and smart document workflows",
        "Collaborating on Word docs across Teams and SharePoint",
        "Proofing and summarizing content using AI"
      ],
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-indigo-500"
    }
  ];

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
  

      {/* <Header/> */}
      <IgniteHeader/>

      

      <HeroSection/>




      

      <AboutSection/>


      <ExcelEssentialsCard/>


      {/* Delivery Options */}
      <section style={{ background: '#f89763' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] mb-4">Delivery Options</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white via-white-500 to-orange-white mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:scale-105 transition duration-300 ease-in-out">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#f89763] mb-2">In-person Training</h3>
              <p className="text-gray-600">On-site corporate training at your office</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:scale-105 transition duration-300 ease-in-out">
              <Globe className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#f89763] mb-2">Virtual Live Training</h3>
              <p className="text-gray-600">Interactive online sessions with real-time support</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:scale-105 transition duration-300 ease-in-out">
              <Building2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#f89763] mb-2">Custom Corporate Batches</h3>
              <p className="text-gray-600">Tailored programs for your organization</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:scale-105 transition duration-300 ease-in-out">
              <Clock className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#f89763] mb-2">Flexible Durations</h3>
              <p className="text-gray-600">8 / 16 / 24 hours with hands-on practice</p>
            </div>
          </div>
        </div>
      </section>

     


     
     
      <Footer/>
    </div>
  );
}

export default Ignite;