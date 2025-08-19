import React, { useState, useRef, useEffect } from 'react';
import {
  Clock,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  FileSpreadsheet,
  BarChart3,
  Zap,
  Presentation,
  MessageSquare,
  FileText,
} from 'lucide-react';

interface ProgramModule {
  title: string;
  duration: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  color: string;
  imageUrl: string;
  imageAlt: string;
}

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
      "Excel + AI integration (ChatGPT, Copilot)",
    ],
    icon: <FileSpreadsheet className="w-7 h-7" aria-label="Excel" />,
    color: "bg-green-100",
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Person working on Excel spreadsheet",
  },
  {
    title: "Power BI",
    duration: "8, 16, or 24 hours",
    description: "Transform data into insights with comprehensive Power BI training",
    details: [
      "Basics (8 hrs): Connecting data, basic visuals, intro to Power Query",
      "Intermediate (16 hrs): Data modeling, DAX formulas, publishing dashboards",
      "Advanced (24 hrs): Advanced DAX, row-level security",
      "Project-based dashboard builds",
    ],
    icon: <BarChart3 className="w-7 h-7" aria-label="Power BI" />,
    color: "bg-yellow-100",
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Data analysis dashboard",
  },
  {
    title: "AI Tools in Microsoft Office",
    duration: "Integrated module",
    description: "Harness AI power in your daily Microsoft Office workflows",
    details: [
      "ChatGPT prompts for Excel, Word, and PowerPoint",
      "Microsoft 365 Copilot features for task automation",
      "AI extensions and add-ins for day-to-day productivity",
    ],
    icon: <Zap className="w-7 h-7" aria-label="AI Tools" />,
    color: "bg-purple-100",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "AI powered workspace",
  },
  {
    title: "PowerPoint & Presenting",
    duration: "4-8 hours",
    description: "Create impactful presentations with AI-powered design",
    details: [
      "Visual storytelling, smart templates, and animation",
      "Using AI to create scripts, slides, and charts",
      "Enhancing design with SmartArt and transitions",
    ],
    icon: <Presentation className="w-7 h-7" aria-label="PowerPoint" />,
    color: "bg-red-100",
    imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Person presenting slides",
  },
  {
    title: "Outlook, Teams & Collaboration",
    duration: "4-6 hours",
    description: "Optimize workplace collaboration and communication",
    details: [
      "Email efficiency, scheduling, calendar management",
      "Teams for meetings, file sharing, and live collaboration",
      "AI for auto-summarizing and drafting responses",
    ],
    icon: <MessageSquare className="w-7 h-7" aria-label="Collaboration" />,
    color: "bg-blue-100",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Team collaboration",
  },
  {
    title: "MS Word Essentials",
    duration: "3-4 hours",
    description: "Master document creation and collaboration",
    details: [
      "Formatting, styles, templates, and smart document workflows",
      "Collaborating on Word docs across Teams and SharePoint",
      "Proofing and summarizing content using AI",
    ],
    icon: <FileText className="w-7 h-7" aria-label="Word" />,
    color: "bg-indigo-100",
    imageUrl: "https://images.unsplash.com/photo-1550355296-c5a8e992f004?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Person working on document",
  },
];

const ProgramHighlights: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const detailsRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  // For height animation, measure content height dynamically
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    if (detailsRefs.current.length === 0) return;
    const newHeights = detailsRefs.current.map((el) => (el ? el.scrollHeight : 0));
    setHeights(newHeights);
  }, [expandedModule]);

  return (
    <section id="program" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

<h2 className="text-4xl font-extrabold mb-12 text-center drop-shadow-sm" style={{ color: '#ffa500' }}>
          Program Highlights
        </h2>

        <h1>hello</h1>
        

        <div className="space-y-20">
          {programModules.map((module, index) => {
            const isEven = index % 2 === 1;
            const expanded = expandedModule === index;

            return (
              <section
                key={index}
                className={`${module.color} rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 relative overflow-hidden`}
                aria-expanded={expanded}
              >
                {/* Row 1: Title */}
                <h3
                  className="text-3xl font-extrabold text-gray-900 mb-10 text-center flex items-center justify-center space-x-3 select-none cursor-pointer"
                  onClick={() => toggleModule(index)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') toggleModule(index);
                  }}
                  aria-controls={`details-${index}`}
                  aria-expanded={expanded}
                >
                  <span
                    className={`p-1 rounded-md transition-colors ${
                      expanded ? 'bg-opacity-70 bg-gray-300' : 'bg-transparent'
                    }`}
                  >
                    {module.icon}
                  </span>
                  <span style={{ color: '#ffa500' }}>{module.title}</span>
                  <span className="ml-4 text-gray-600">
                    {expanded ? (
                      <ChevronUp aria-hidden />
                    ) : (
                      <ChevronDown aria-hidden />
                    )}
                  </span>
                </h3>

                {/* Row 2: Two-column layout */}
                <div
                  className={`flex flex-col md:flex-row items-center gap-12 max-md:gap-6`}
                >
                  {!isEven ? (
                    <>
                      {/* Image Left */}
                      <div className="md:w-1/2 overflow-hidden rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 cursor-pointer">
                        <img
                          src={module.imageUrl}
                          alt={module.imageAlt}
                          className="w-full h-72 object-cover rounded-xl"
                          loading="lazy"
                        />
                      </div>
                      {/* Content Right */}
                      <div className="md:w-1/2 text-gray-800">
                        <p className="mb-4 flex items-center text-gray-900 font-semibold leading-tight text-lg">
                          <Clock className="w-5 h-5 mr-2 text-gray-600" />
                          {module.duration}
                        </p>
                        <p className="mb-8 text-gray-700">{module.description}</p>
                        <button
                          onClick={() => toggleModule(index)}
                          className="inline-flex items-center gap-1 text-blue-600 hover:underline focus:outline-none font-semibold"
                          aria-expanded={expanded}
                          aria-controls={`details-${index}`}
                        >
                          {expanded ? 'Hide Details' : 'Show Details'}
                          {expanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                        <div
                          id={`details-${index}`}
                          ref={(el) => (detailsRefs.current[index] = el)}
                          className={`mt-6 overflow-hidden transition-all duration-500 ease-in-out`}
                          style={{
                            maxHeight: expanded ? heights[index] + 24 || 0 : 0,
                            opacity: expanded ? 1 : 0,
                          }}
                          aria-hidden={!expanded}
                        >
                          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                            {module.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mr-2 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Content Left */}
                      <div className="md:w-1/2 text-gray-800 order-last md:order-first">
                        <p className="mb-4 flex items-center text-gray-900 font-semibold leading-tight text-lg">
                          <Clock className="w-5 h-5 mr-2 text-gray-600" />
                          {module.duration}
                        </p>
                        <p className="mb-8 text-gray-700">{module.description}</p>
                        <button
                          onClick={() => toggleModule(index)}
                          className="inline-flex items-center gap-1 text-blue-600 hover:underline focus:outline-none font-semibold"
                          aria-expanded={expanded}
                          aria-controls={`details-${index}`}
                        >
                          {expanded ? 'Hide Details' : 'Show Details'}
                          {expanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                        <div
                          id={`details-${index}`}
                          ref={(el) => (detailsRefs.current[index] = el)}
                          className={`mt-6 overflow-hidden transition-all duration-500 ease-in-out`}
                          style={{
                            maxHeight: expanded ? heights[index] + 24 || 0 : 0,
                            opacity: expanded ? 1 : 0,
                          }}
                          aria-hidden={!expanded}
                        >
                          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                            {module.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mr-2 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {/* Image Right */}
                      <div className="md:w-1/2 overflow-hidden rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 cursor-pointer order-first md:order-last">
                        <img
                          src={module.imageUrl}
                          alt={module.imageAlt}
                          className="w-full h-72 object-cover rounded-xl"
                          loading="lazy"
                        />
                      </div>
                    </>
                  )}
                </div>
                {/* subtle shadow overlay */}
                <div
                  className={`${module.color.replace('100', '400')} absolute top-0 left-0 right-0 bottom-0 opacity-5 pointer-events-none rounded-2xl`}
                  aria-hidden="true"
                />
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
