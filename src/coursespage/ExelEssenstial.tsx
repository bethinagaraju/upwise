
import React from "react";
import {
  Phone,
  Mail,
  Search,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Award,
  Users,
  Clock,
  BookOpen,
  Briefcase,
  Target,
  FileSpreadsheet,

  MessageCircle,

    TimerReset,
  ChartColumn,
  Presentation,

  MessageCircleMore,
  ShieldCheck,
  icons,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { ChartColumnStacked } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import { Download, ArrowRight } from "lucide-react";

const ExcelEssentials = () => {
  const courseOutcomes = [
    "Navigate the Excel interface with ease.",
    "Use basic and advanced formulas and functions.",
    "Manage, sort, format, and visualize data.",
    "Create and use PivotTables and PivotCharts.",
    "Apply advanced analysis techniques.",
    "Automate repetitive tasks using macros and VBA."
  ];

  const whyMazanet = [
    {
      title: "Expert Faculty",
      desc: "Our trainers are industry experts with 10+ years of experience in data analytics and corporate reporting.",
      color: "bg-[#f07b51]",
      icon: <Users size={20} className="text-white" />
    },
    {
      title: "Practical Approach",
      desc: "100% Hands-on training. We focus on real-world scenarios rather than just theoretical concepts.",
      color: "bg-[#f07b51]",
      icon: <Briefcase size={20} className="text-white" />
    },
    {
      title: "Flexible Timing",
      desc: "Weekend and weekday batches available to suit the busy schedules of working professionals.",
      color: "bg-[#f07b51]",
      icon: <Clock size={20} className="text-white" />
    },
    {
      title: "Learning Tools",
      desc: "Comprehensive study materials, practice datasets, and recorded sessions provided for future reference.",
      color: "bg-[#f07b51]",
      icon: <BookOpen size={20} className="text-white" />
    },
    {
      title: "Case Study",
      desc: "Work on live corporate case studies to build a strong portfolio and practical understanding.",
      color: "bg-[#f07b51]",
      icon: <Target size={20} className="text-white" />
    },
    {
      title: "Certification",
      desc: "Receive an ISO-certified completion certificate that adds significant value to your professional resume.",
      color: "bg-[#f07b51]",
      icon: <Award size={20} className="text-white" />
    }
  ];

  const benefitsTarget = [
    {
      title: "Improved Efficiency",
      desc: "Master shortcuts and automation to complete hours of reporting work in a fraction of the time.",
      icon: <TimerReset size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Data Analysis",
      desc: "Turn raw datasets into meaningful insights using advanced formulas and pivot structures.",
      icon: <ChartColumnStacked size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Better Decision Making",
      desc: "Create interactive dashboards that help stakeholders visualize trends and make informed choices.",
      icon: <Presentation size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Career Advancement",
      desc: "Excel mastery is a highly sought-after skill that opens doors to promotions and better roles.",
      icon: <Briefcase size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Effective Communication",
      desc: "Present complex data clearly and professionally using advanced charting and visualization tools.",
      icon: <MessageCircle size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Accuracy and Confidence",
      desc: "Reduce manual errors through data validation, auditing tools, and structured formulas.",
      icon: <CheckCircle2 size={20} className="text-[#FFFFFF]" />
    }
  ];

  const corporatePrograms = [
    {
      title: "Power BI",
      desc: "Transform your company's data into rich visuals and extract business intelligence for enhanced decision making."
    },
    {
      title: "SQL Server",
      desc: "Master database management, complex queries, and data extraction techniques for robust backend handling."
    },
    {
      title: "Python",
      desc: "Learn versatile programming for data analysis, automation, and building scalable business applications."
    },
    {
      title: "Data Science",
      desc: "Dive into predictive analytics, machine learning models, and deep statistical analysis for the modern enterprise."
    }
  ];

   

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased overflow-x-hidden">
      
      {/* === TOP ORANGE BAR === */}



<div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-[#f07b51] text-white py-1.5 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
          <p>India's Leading IT Training & Placement Institute</p>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1"><Mail size={12} /> info@mazanet.com</span>
            <span className="flex items-center gap-1"><Phone size={12} /> +91 98765 43210</span>
          </div>
        </div>
      </div>
  <Header />
</div>
   

      {/* === HERO SECTION === */}
      <section className="relative bg-gradient-to-r from-[#fff3eb] to-[#ffebd6] py-16 lg:py-24 overflow-hidden pb-6">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 items-center"> 
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Excel Champion training program designed specifically for <br className="hidden md:block"/> professionals and business individuals.
            </h1>
          </div>
          <div className="hidden md:block relative h-64 lg:h-96">
            <div className="absolute right-0 top-0 w-full h-full bg-slate-200/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/40 shadow-lg">
              <div className="relative w-full h-full">
                <img
                  id="advance-excel-hero-img-1"
                  src="https://cce.sydney.edu.au/s/images/articles/7-little-known-ways-excel-can-boost-productivity.jpg"
                  alt="Excel Training"
                  className="absolute inset-0 w-full h-full object-cover"
                />


              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/70" />
                  <span className="text-xs font-semibold text-white/90 bg-black/20 px-3 py-1 rounded-full border border-white/20">
                    Excel Training
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* === OBJECTIVES === */}
      <section className="py-12 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#f07b51] mb-4">Objectives</h2>
        <p className="text-slate-600 leading-relaxed text-lg">
          To equip participants with the knowledge and skills required to effectively navigate and utilize Microsoft Excel for data analysis, reporting, and automation. By the end of this course, participants will be able to perform advanced calculations, create dynamic dashboards, and streamline their daily workflows.
        </p>
      </section>

      {/* === COURSE OUTCOMES === */}
      <section className="py-12 bg-slate-50 relative overflow-hidden">
   
        {/* <div className="absolute left-0 top-0 w-64 h-64 opacity-5 pointer-events-none">
          <Target size={256} />
        </div> */}

        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Course Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            {courseOutcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 bg-[#f07b51] rounded-sm p-0.5 flex-shrink-0">
                  <ChevronRight size={20} className="text-white" />
                </div>
                <p className="text-lg text-slate-700 font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* === COURSE OUTLINE === */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#f07b51] text-center mb-12 uppercase tracking-wide">Course Outline</h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-sm">
          
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">BASIC EXCEL</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Introduction to Excel Interface</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Workbook and Worksheet Navigation</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Basic Data Entry and Formatting</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Customizing the Quick Access Toolbar</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">DATA MANAGEMENT</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Sorting Data (Single & Multi-level)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Applying Filters and Advanced Filters</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Data Validation Rules & Dropdown Lists</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Removing Duplicates and Text-to-Columns</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">FORMULAS AND FUNCTIONS</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Mathematical Functions (SUM, AVERAGE, COUNT)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Logical Functions (IF, AND, OR, IFERROR)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Lookup Functions (VLOOKUP, HLOOKUP, XLOOKUP, INDEX, MATCH)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Text Functions (LEFT, RIGHT, MID, CONCATENATE)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Date and Time Functions (TODAY, NOW, DATEDIF)</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">DATA VISUALIZATION</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Creating Column, Pie, Line, and Bar Charts</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Advanced Chart Formatting & Dynamic Charts</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Sparklines and Conditional Formatting</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">ADVANCED DATA ANALYSIS</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Creating and Formatting PivotTables</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> PivotCharts and Slicers for Interactive Dashboards</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> What-If Analysis (Goal Seek, Data Tables, Scenario Manager)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Introduction to Power Query</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">MACROS AND VBA</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Introduction to Macros and the Developer Tab</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Recording, Running, and Editing Macros</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Relative vs. Absolute Referencing in Macros</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Assigning Macros to Buttons and Shapes</li>
              </ul>
            </div>
          </div>

        </div>
      </section>


      <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-800">
        Course Details
      </h2>
      <p className="text-slate-600 mt-3">
        Flexible learning options designed for students and working professionals.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-6">
      {/* Duration */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
        <h3 className="text-[#f07b51] font-bold text-lg mb-2">
          Duration
        </h3>
        <p className="text-slate-700 font-medium">
          30 Hours
        </p>
      </div>

      {/* Mode */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
        <h3 className="text-[#f07b51] font-bold text-lg mb-2">
          Mode
        </h3>
        <p className="text-slate-700 font-medium">
          Online & Offline
        </p>
      </div>

      {/* Batch Timings */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
        <h3 className="text-[#f07b51] font-bold text-lg mb-2">
          Batch Timings
        </h3>
        <p className="text-slate-700 font-medium">
          Weekday & Weekend Batches
        </p>
      </div>

      {/* Fee Enquiry */}
      <div className="bg-[#f07b51] rounded-2xl p-6 text-center flex flex-col justify-center">
        <h3 className="text-white font-bold text-lg mb-4">
          Course Fee
        </h3>

        <button className="bg-white text-[#f07b51] font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition-all">
          Enquire Fee Details
        </button>
      </div>
    </div>
  </div>
</section>



      {/* === WHY MAZANET === */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#f07b51]">Why Upwise?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {whyMazanet.map((item, idx) => (
            <div key={idx} className="flex items-stretch bg-[#fff3eb]/60 rounded-lg overflow-hidden border border-[#f07b51]/20">
              <div className={`${item.color} w-16 flex items-center justify-center flex-shrink-0 relative`}>
                {item.icon}
             
                <div className={`absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 ${item.color} rotate-45`} />
              </div>
              <div className="p-4 pl-6">
                <h3 className="font-bold text-slate-800 text-base mb-1">{item.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === BENEFITS TARGET === */}
      <section className="py-20 bg-slate-100 rounded-tl-[100px] mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">What You Will Gain</h2>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 pt-4">
            {benefitsTarget.map((benefit, idx) => (
               
              <div key={idx} className="bg-white rounded-2xl p-6 relative shadow-sm border border-slate-200">
                <div className="absolute -top-6 -left-4 bg-[#f07b51] w-12 h-12 rounded-full border-4 border-slate-100 flex items-center justify-center shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-[#f07b51] text-lg mt-4 mb-2">{benefit.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* === CORPORATE TRAINING PROGRAMS === */}
      {/* <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-10 tracking-wide">Our Corporate Training Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporatePrograms.map((prog, idx) => (
              <div key={idx} className="bg-white border border-[#f07b51]/20 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-[#f07b51] font-bold mb-3">{prog.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* === FOOTER === */}
      {/* <footer className="bg-[#111] text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#f07b51] rotate-45 flex items-center justify-center">
                <div className="w-3 h-3 bg-[#111] rotate-45" />
              </div>
              <span className="text-xl font-bold text-white">Mazanet</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Empowering professionals and enterprises with high-end corporate training, skill development, and top-tier placements.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[#f07b51]">Home</a></li>
              <li><a href="#" className="hover:text-[#f07b51]">About Us</a></li>
              <li><a href="#" className="hover:text-[#f07b51]">Corporate Training</a></li>
              <li><a href="#" className="hover:text-[#f07b51]">Placements</a></li>
              <li><a href="#" className="hover:text-[#f07b51]">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Training Programs</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[#f07b51]">Advanced Excel</a></li>
              <li><a href="#" className="hover:text-[#f07b51]">Power BI</a></li>
              <li><a href="#" className="hover:text-[#f07b51]">SQL Server</a></li>
              <li><a href="#" className="hover:text-[#f07b51]">Python Full Stack</a></li>
              <li><a href="#" className="hover:text-[#f07b51]">Data Science</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#f07b51] flex-shrink-0" />
                <span>123 Tech Park, Phase 2, Industrial Estate, City Center, 400001</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-[#f07b51] flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[#f07b51] flex-shrink-0" />
                <span>info@mazanet.com</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#f07b51] cursor-pointer transition-colors"><Facebook size={14} /></div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#f07b51] cursor-pointer transition-colors"><Twitter size={14} /></div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#f07b51] cursor-pointer transition-colors"><Linkedin size={14} /></div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#f07b51] cursor-pointer transition-colors"><Instagram size={14} /></div>
            </div>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Mazanet. All rights reserved.
        </div>
      </footer> */}

      <AboutUs />

      <Testimonials/>

      <section className="py-20 bg-gradient-to-r from-[#f07b51] to-[#ff9b73]">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      Ready to Master Advanced Excel?
    </h2>

    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
      Transform your Excel skills with hands-on projects, real-world case
      studies, and expert-led training.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="flex items-center justify-center gap-2 bg-white text-[#f07b51] font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
        Enrol Now
        <ArrowRight size={18} />
      </button>

      <button className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#f07b51] transition-all">
        <Download size={18} />
        Download Brochure
      </button>
    </div>
  </div>
</section>

       <Footer />

      {/* Floating WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors z-50 border-2 border-white">
        {/* <Whatsapp size={30} className="text-white" /> */}
        <FaWhatsapp size={30} className="text-white" />
      </div>

    </div>
  );
};

export default ExcelEssentials;