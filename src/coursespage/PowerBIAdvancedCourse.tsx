// import React from "react";
// import {
//   Phone,
//   Mail,
//   Search,
//   MapPin,
//   ChevronRight,
//   CheckCircle2,
//   Award,
//   Users,
//   Clock,
//   BookOpen,
//   Briefcase,
//   Target,
//   FileSpreadsheet,
//   MessageCircle,
//   TimerReset,
//   ChartColumn,
//   Presentation,
//   MessageCircleMore,
//   ShieldCheck,
// } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa6";
// import { ChartColumnStacked } from 'lucide-react';
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Testimonials from "../components/Testimonials";
// import Exeltrainer from "./components/Exeltrainer";
// import CourseCTA from "./components/CourseCTA";

// const PowerBIAdvancedCourse = () => {
//   const courseOutcomes = [
//     "Navigate advanced Power BI structures and DAX interfaces.",
//     "Write complex DAX measures, calculated columns, and calculated tables.",
//     "Master evaluation contexts: row context, filter context, and context transitions via CALCULATE.",
//     "Troubleshoot star schema table relationships using RELATED() and RELATEDTABLE().",
//     "Develop real-world business scenarios: dynamic rankings, KPIs, and custom categorizations.",
//     "Secure datasets dynamically at scale using Row-Level Security (RLS)."
//   ];

//   const whyUpwise = [
//     {
//       title: "Expert Faculty",
//       desc: "Our trainers are Microsoft Certified Trainers (MCT) with 10+ years of experience in data analytics and corporate reporting.",
//       color: "bg-[#f07b51]",
//       icon: <Users size={20} className="text-white" />
//     },
//     {
//       title: "Practical Approach",
//       desc: "100% Hands-on training. We focus on real-world scenarios rather than just theoretical concepts.",
//       color: "bg-[#f07b51]",
//       icon: <Briefcase size={20} className="text-white" />
//     },
//     {
//       title: "Flexible Timing",
//       desc: "Weekend and weekday batches available to suit the busy schedules of working professionals.",
//       color: "bg-[#f07b51]",
//       icon: <Clock size={20} className="text-white" />
//     },
//     {
//       title: "Learning Tools",
//       desc: "Comprehensive study materials, practice datasets, and recorded sessions provided for future reference.",
//       color: "bg-[#f07b51]",
//       icon: <BookOpen size={20} className="text-white" />
//     },
//     {
//       title: "Case Study",
//       desc: "Work on live corporate case studies to build a strong portfolio and practical understanding.",
//       color: "bg-[#f07b51]",
//       icon: <Target size={20} className="text-white" />
//     },
//     {
//       title: "Certification",
//       desc: "Receive a completion certificate officially led by our MCT that adds significant value to your professional resume.",
//       color: "bg-[#f07b51]",
//       icon: <Award size={20} className="text-white" />
//     }
//   ];

//   const benefitsTarget = [
//     {
//       title: "Advanced Data Modeling",
//       desc: "Architect clean, high-performance star schemas and troubleshoot complex table relationships.",
//       icon: <ChartColumnStacked size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Advanced DAX Proficiency",
//       desc: "Write optimized DAX calculations, nesting functions, and custom measures for real-world scenarios.",
//       icon: <Presentation size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Dynamic Dashboards",
//       desc: "Build interactive capstone-level projects with advanced visual analytics and KPIs.",
//       icon: <FileSpreadsheet size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Row-Level Security",
//       desc: "Secure your enterprise data dynamically using role-based filters (RLS).",
//       icon: <Briefcase size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Improved Analytical Speed",
//       desc: "Master quick-reference formulas and table relationships to speed up business intelligence delivery.",
//       icon: <TimerReset size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Accuracy & Error Handling",
//       desc: "Solve context issues, resolve syntax errors, and debug complex DAX behaviors.",
//       icon: <CheckCircle2 size={20} className="text-[#FFFFFF]" />
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white text-slate-800 font-sans antialiased overflow-x-hidden">

//       {/* === TOP ORANGE BAR === */}
//       <div className="fixed top-0 left-0 w-full z-50">
//         <div className="bg-[#f07b51] text-white py-1.5 px-6 hidden md:block">
//           <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
//             <p>India's Leading IT Training & Placement Institute</p>
//             <div className="flex gap-4 items-center">
//               <span className="flex items-center gap-1"><Mail size={12} /> info@mazanet.com</span>
//               <span className="flex items-center gap-1"><Phone size={12} /> +91 98765 43210</span>
//             </div>
//           </div>
//         </div>
//         <Header />
//       </div>

//       {/* Spacer for sticky header */}
//       <div className="h-16 md:h-24"></div>

//       {/* === HERO SECTION === */}
//       <section className="relative bg-gradient-to-r from-[#fff3eb] to-[#ffebd6] py-16 lg:py-24 overflow-hidden pb-6">
//         <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 items-center"> 
//           <div className="space-y-4">
//             <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
//               Power BI Advanced training program designed specifically for <br className="hidden md:block"/> professionals and business individuals.
//             </h1>
//           </div>
//           <div className="hidden md:block relative h-64 lg:h-96">
//             <div className="absolute right-0 top-0 w-full h-full bg-slate-200/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/40 shadow-lg">
//               <div className="relative w-full h-full">
//                 <img
//                   id="power-bi-advanced-hero-img"
//                   src="/data visualization.png"
//                   alt="Power BI Advanced Training"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//               </div>

//               <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
//                 <div className="flex items-center gap-2">
//                   <span className="h-2 w-2 rounded-full bg-white/70" />
//                   <span className="text-xs font-semibold text-white/90 bg-black/20 px-3 py-1 rounded-full border border-white/20">
//                     Power BI Training
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* === OBJECTIVES === */}
//       <section className="py-12 max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-[#f07b51] mb-4">Objectives</h2>
//         <p className="text-slate-600 leading-relaxed text-lg">
//           To equip participants with advanced data modeling, complex DAX formulas, and robust row-level security implementation skills in Power BI. By the end of this course, participants will be able to write advanced DAX calculations, troubleshoot complex relationships, build interactive project-based dashboards, and secure datasets dynamically.
//         </p>
//       </section>

//       {/* === COURSE OUTCOMES === */}
//       <section className="py-12 bg-slate-50 relative overflow-hidden">
//         <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
//           <h2 className="text-3xl font-bold text-slate-800 mb-8">Course Outcomes</h2>
//           <div className="grid md:grid-cols-2 gap-4 text-left">
//             {courseOutcomes.map((outcome, idx) => (
//               <div key={idx} className="flex items-start gap-3">
//                 <div className="mt-1 bg-[#f07b51] rounded-sm p-0.5 flex-shrink-0">
//                   <ChevronRight size={20} className="text-white" />
//                 </div>
//                 <p className="text-lg text-slate-700 font-medium">{outcome}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* === COURSE OUTLINE === */}
//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <h2 className="text-2xl font-bold text-[#f07b51] text-center mb-12 uppercase tracking-wide">Course Outline</h2>

//         <div className="grid md:grid-cols-2 gap-12 text-sm">

//           {/* Left Column */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">FOUNDATIONS & SYNTAX</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Session Kickoff & recap of Power BI basics</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Why DAX is important & objective of DAX focus</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Calculated Columns vs Measures vs Calculated Tables</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> DAX Syntax, data types, referencing, and structure</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Implicit vs Explicit Calculations</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">EVALUATION CONTEXTS</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> What is context in DAX?</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Row Context vs Filter Context</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Simple explanation with table visuals</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Context transition via CALCULATE() function</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">DAX LOOKUP FUNCTIONS</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Using RELATED() and RELATEDTABLE() functions</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Practical lookup use cases in star schema</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Table relationship troubleshooting</li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">BUSINESS IMPLEMENTATION</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Write DAX formulas for real-world business use cases</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Dynamic flags, rankings, KPIs, and categorization</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Nesting functions for complex criteria</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Advanced DAX and Row-Level Security (RLS) policies</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">PRACTICAL APPLICATION</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Solve a scenario using all covered DAX topics</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Create rich visuals using custom calculated measures</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Peer review and MCT trainer feedback sessions</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">WRAP-UP & EFFICIENCY</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Tips for DAX engine optimization and efficiency</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Troubleshooting common DAX evaluation errors</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Recommended learning path and resources</li>
//               </ul>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* === COURSE DETAILS === */}
//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-slate-800">Course Details</h2>
//             <p className="text-slate-600 mt-3">Flexible learning options designed for students and working professionals.</p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6">
//             <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
//               <h3 className="text-[#f07b51] font-bold text-lg mb-2">Duration</h3>
//               <p className="text-slate-700 font-medium">24 Hours</p>
//             </div>

//             <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
//               <h3 className="text-[#f07b51] font-bold text-lg mb-2">Mode</h3>
//               <p className="text-slate-700 font-medium">Online & Offline</p>
//             </div>

//             <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
//               <h3 className="text-[#f07b51] font-bold text-lg mb-2">Batch Timings</h3>
//               <p className="text-slate-700 font-medium">Weekday & Weekend Batches</p>
//             </div>

//             <div className="bg-[#f07b51] rounded-2xl p-6 text-center flex flex-col justify-center">
//               <h3 className="text-white font-bold text-lg mb-4">Course Fee</h3>
//               <button className="bg-white text-[#f07b51] font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition-all">
//                 Enquire Fee Details
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* === WHY UPWISE === */}
//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-[#f07b51]">Why Upwise?</h2>
//         </div>
//         <div className="grid md:grid-cols-2 gap-6">
//           {whyUpwise.map((item, idx) => (
//             <div key={idx} className="flex items-stretch bg-[#fff3eb]/60 rounded-lg overflow-hidden border border-[#f07b51]/20">
//               <div className={`${item.color} w-16 flex items-center justify-center flex-shrink-0 relative`}>
//                 {item.icon}
//                 <div className={`absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 ${item.color} rotate-45`} />
//               </div>
//               <div className="p-4 pl-6">
//                 <h3 className="font-bold text-slate-800 text-base mb-1">{item.title}</h3>
//                 <p className="text-base text-slate-600 leading-relaxed">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* === BENEFITS TARGET === */}
//       <section className="py-20 bg-slate-100 rounded-tl-[100px] mt-10">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">What You Will Gain</h2>
//           <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 pt-4">
//             {benefitsTarget.map((benefit, idx) => (
//               <div key={idx} className="bg-white rounded-2xl p-6 relative shadow-sm border border-slate-200">
//                 <div className="absolute -top-6 -left-4 bg-[#f07b51] w-12 h-12 rounded-full border-4 border-slate-100 flex items-center justify-center shadow-sm">
//                   {benefit.icon}
//                 </div>
//                 <h3 className="font-bold text-[#f07b51] text-lg mt-4 mb-2">{benefit.title}</h3>
//                 <p className="text-base text-slate-600 leading-relaxed">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Exeltrainer/>

//       <Testimonials/>

//       <CourseCTA 
//         courseName="Power BI Advanced" 
//         brochureUrl="/cover.png" 
//         brochureName="Power-BI-Advanced-Brochure.png" 
//       />

//       <Footer />

//       {/* Floating WhatsApp Icon */}
//       <div className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors z-50 border-2 border-white">
//         <FaWhatsapp size={30} className="text-white" />
//       </div>

//     </div>
//   );
// };

// export default PowerBIAdvancedCourse;







import React from "react";
import {
  Phone,
  Mail,
  Search,
  ChevronRight,
  CheckCircle2,
  Award,
  Users,
  Clock,
  BookOpen,
  Briefcase,
  Target,
  FileSpreadsheet,
  TimerReset,
  Presentation,
  UserCheck,
  MonitorPlay,
  Rocket,
  ListChecks,
  Database,
  Network,
  MousePointerClick,
  Code,
  CalendarDays,
  Banknote,
  MonitorSmartphone,
  Lightbulb
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Exeltrainer from "./components/Exeltrainer";
import CourseCTA from "./components/CourseCTA";

const PowerBIAdvancedCourse = () => {
  const courseOutcomes = [
    "Navigate advanced DAX syntax, data types, and implicit vs explicit calculations.",
    "Understand evaluation contexts including Row Context and Filter Context.",
    "Master context transitions using the CALCULATE function.",
    "Troubleshoot table relationships and star schemas using RELATED() and RELATEDTABLE().",
    "Apply business scenarios to build dynamic flags, rankings, and custom KPIs.",
    "Complete a capstone project utilizing all DAX topics with trainer feedback."
  ];

  const whyUpwise = [
    {
      title: "Expert Trainer",
      desc: "Learn directly from Ritu Arora, a Microsoft Certified Trainer.",
      color: "bg-[#f07b51]",
      icon: <UserCheck size={20} className="text-white" />
    },
    {
      title: "Capstone Project",
      desc: "Solve a real-world scenario using all DAX topics and create rich visuals.",
      color: "bg-[#f07b51]",
      icon: <Target size={20} className="text-white" />
    },
    {
      title: "Practical Delivery",
      desc: "Instructor-led training focused on applied business scenarios and troubleshooting.",
      color: "bg-[#f07b51]",
      icon: <MonitorPlay size={20} className="text-white" />
    },
    {
      title: "Target Audience",
      desc: "Specifically designed for participants already familiar with Power BI basics.",
      color: "bg-[#f07b51]",
      icon: <Users size={20} className="text-white" />
    },
    {
      title: "DAX Efficiency",
      desc: "Learn advanced tips for DAX efficiency and nesting functions.",
      color: "bg-[#f07b51]",
      icon: <Rocket size={20} className="text-white" />
    },
    {
      title: "Prerequisites",
      desc: "Understanding of foundational Power BI concepts is required.",
      color: "bg-[#f07b51]",
      icon: <ListChecks size={20} className="text-white" />
    }
  ];

  const benefitsTarget = [
    {
      title: "Advanced DAX Syntax",
      desc: "Master formula referencing, data types, and structural rules in DAX.",
      icon: <Code size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Context Mastery",
      desc: "Understand the core difference between row context and filter context.",
      icon: <Network size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Lookup Functions",
      desc: "Seamlessly navigate star schemas using RELATED() and RELATEDTABLE().",
      icon: <Database size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Dynamic KPIs",
      desc: "Write DAX formulas to create dynamic flags, rankings, and categorizations.",
      icon: <Presentation size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Error Troubleshooting",
      desc: "Learn how to resolve common DAX errors and table relationship issues.",
      icon: <TimerReset size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Strategic Implementation",
      desc: "Know exactly when to use calculated columns vs measures vs calculated tables.",
      icon: <Lightbulb size={20} className="text-[#FFFFFF]" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased overflow-x-hidden">

      {/* === TOP ORANGE BAR === */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-[#f07b51] text-white py-1.5 px-6 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
            <p>Upwise Training - Power BI Advance</p>
            <div className="flex gap-4 items-center">
              <span className="flex items-center gap-1"><Mail size={12} /> support@upwisetraining.com</span>
              <span className="flex items-center gap-1"><Search size={12} /> www.upwisetraining.com</span>
            </div>
          </div>
        </div>
        <Header />
      </div>

      <div className="h-16 md:h-24"></div>

      {/* === HERO SECTION === */}
      <section className="relative bg-gradient-to-r from-[#fff3eb] to-[#ffebd6] py-16 lg:py-24 overflow-hidden pb-6">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              POWER BI ADVANCE <br className="hidden md:block" /> Deep dive into DAX concepts and practical application.
            </h1>
            <p className="text-lg text-slate-700 mt-4">
              Designed specifically for participants familiar with Power BI basics.
            </p>
          </div>
          <div className="hidden md:block relative h-64 lg:h-96">
            <div className="absolute right-0 top-0 w-full h-full bg-slate-200/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/40 shadow-lg">
              <div className="relative w-full h-full">
                <img
                  id="power-bi-advanced-hero-img"
                  src="/data visualization.png"
                  alt="Power BI Advanced Training"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/70" />
                  <span className="text-xs font-semibold text-white/90 bg-black/20 px-3 py-1 rounded-full border border-white/20">
                    Upwise Training
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === OBJECTIVES === */}
      <section className="py-12 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#f07b51] mb-4">Programme Objective</h2>
        <p className="text-slate-600 leading-relaxed text-lg">
          Deep dive into DAX concepts, syntax, functions, and practical application in Power BI. By the end of this course, participants will understand complex evaluation contexts, build dynamic business indicators, and apply advanced lookup functions to master their data models.
        </p>
      </section>

      {/* === COURSE OUTCOMES === */}
      <section className="py-12 bg-slate-50 relative overflow-hidden">
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
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">SESSION KICKOFF & DAX BASICS</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Recap of Power BI basics & Objective of today's session (DAX-focused)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Why DAX is important & Where it is used</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Calculated Columns vs Measures vs Calculated Tables</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Understanding where to use what in the model</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">DAX SYNTAX & EVALUATION CONTEXT</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Formula bar, referencing, and Implicit vs Explicit calculations</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Data types: Number, Text, Date, Boolean</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Row Context vs Filter Context (with table visual examples)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Context transition via CALCULATE function</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">LOOKUP FUNCTIONS & BUSINESS SCENARIOS</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Using RELATED() and RELATEDTABLE() in star schemas</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Table relationship troubleshooting</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Write DAX formulas for real business scenarios</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Dynamic flags, rankings, KPIs, categorization & Nesting functions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">CAPSTONE PROJECT & WRAP-UP</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Solve a scenario using all DAX topics & Create visuals</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Peer review & Trainer feedback session</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Tips for DAX efficiency & Troubleshooting common errors</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Defining the learning path ahead</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* === COURSE DETAILS === */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Course Details</h2>
            <p className="text-slate-600 mt-3">Advanced training specifically tailored for business intelligence professionals.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
              <Clock className="text-[#f07b51] mb-3" size={28} strokeWidth={1.5} />
              <h3 className="text-slate-800 font-bold text-lg mb-2">Duration</h3>
              <p className="text-slate-600 font-medium">8 Hours (1 Day)</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
              <MonitorSmartphone className="text-[#f07b51] mb-3" size={28} strokeWidth={1.5} />
              <h3 className="text-slate-800 font-bold text-lg mb-2">Mode</h3>
              <p className="text-slate-600 font-medium">Online & Offline</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
              <CalendarDays className="text-[#f07b51] mb-3" size={28} strokeWidth={1.5} />
              <h3 className="text-slate-800 font-bold text-lg mb-2">Batch Timings</h3>
              <p className="text-slate-600 font-medium">Weekday & Weekend Batches</p>
            </div>

            <div className="bg-[#f07b51] rounded-2xl p-6 text-center flex flex-col justify-center items-center">

              <h3 className="text-white font-bold text-lg mb-4">Course Fee</h3>
              <button className="bg-white text-[#f07b51] font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition-all w-full">
                Enquire Fee
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* === WHY UPWISE === */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#f07b51]">Why Upwise?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {whyUpwise.map((item, idx) => (
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

      <Exeltrainer />

      <Testimonials />

      <CourseCTA
        courseName="Power BI Advance"
        brochureUrl="/cover.png"
        brochureName="Power-BI-Advance-Brochure.pdf"
      />

      <Footer />

      {/* Floating WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors z-50 border-2 border-white">
        <FaWhatsapp size={30} className="text-white" />
      </div>

    </div>
  );
};

export default PowerBIAdvancedCourse;