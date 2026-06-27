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

// const PowerBIIntermediateCourse = () => {
//   const courseOutcomes = [
//     "Perform intermediate data transformation steps (Merge, Append, Unpivot) in Power Query.",
//     "Architect multi-table data models and define proper relationships in standard schemas.",
//     "Write standard DAX calculations using measures, logical functions, and date metrics.",
//     "Create interactive visual reports incorporating advanced custom charts and slicers.",
//     "Publish reports to workspace groups, schedule auto refreshes, and configure simple dashboards."
//   ];

//   const whyUpwise = [
//     {
//       title: "Expert Faculty",
//       desc: "Our trainers are industry experts with 10+ years of experience in data analytics and corporate reporting.",
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
//       title: "Advanced Power Query",
//       desc: "Master clean, complex merging, appending, and reshaping techniques.",
//       icon: <ChartColumnStacked size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Data Modeling",
//       desc: "Architect proper multi-table star schemas and manage relationships correctly.",
//       icon: <Presentation size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "DAX Proficiency",
//       desc: "Start writing basic and intermediate DAX measures to calculate metrics.",
//       icon: <FileSpreadsheet size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Interactive Dashboards",
//       desc: "Create comprehensive business intelligence layouts that capture analytical views.",
//       icon: <Briefcase size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Automated Reporting",
//       desc: "Establish scheduled refreshes to automate manual updates.",
//       icon: <TimerReset size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Robust Governance",
//       desc: "Organize reports inside secure workspaces on the Power BI Service.",
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

//       <div className="h-16 md:h-24"></div>

//       {/* === HERO SECTION === */}
//       <section className="relative bg-gradient-to-r from-[#fff3eb] to-[#ffebd6] py-16 lg:py-24 overflow-hidden pb-6">
//         <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 items-center"> 
//           <div className="space-y-4">
//             <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
//               Power BI Intermediate training program designed specifically for <br className="hidden md:block"/> professionals and business individuals.
//             </h1>
//           </div>
//           <div className="hidden md:block relative h-64 lg:h-96">
//             <div className="absolute right-0 top-0 w-full h-full bg-slate-200/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/40 shadow-lg">
//               <div className="relative w-full h-full">
//                 <img
//                   id="power-bi-intermediate-hero-img"
//                   src="/data visualization.png"
//                   alt="Power BI Intermediate Training"
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
//           To build intermediate skills in data engineering, data modeling, relationship setup, and publishing report workspaces in Power BI. By the end of this course, you will understand how to model multiple tables, write standard DAX, and automate dashboard refreshes.
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
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">ADVANCED POWER QUERY</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Merging and Appending Queries</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Unpivoting columns and pivoting operations</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Custom conditional formatting & M-code overview</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">DATA MODELING & SCHEMA</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Defining table relationships (1-to-many, many-to-many)</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Understanding active vs inactive relationship paths</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Architecting clean star schemas</li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">DAX BASICS & FUNCTIONS</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Calculated columns vs measures</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Writing SUM, AVERAGE, DIVIDE, and simple logical math</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Introduction to the CALCULATE filter modifier</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">REPORT PUBLISHING</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Publishing reports to Power BI Service</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Setting up shared workspace permissions</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Configuring scheduled data refresh gateways</li>
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
//               <p className="text-slate-700 font-medium">16 Hours</p>
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
//         courseName="Power BI Intermediate" 
//         brochureUrl="/cover.png" 
//         brochureName="Power-BI-Intermediate-Brochure.png" 
//       />

//       <Footer />

//       {/* Floating WhatsApp Icon */}
//       <div className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors z-50 border-2 border-white">
//         <FaWhatsapp size={30} className="text-white" />
//       </div>

//     </div>
//   );
// };

// export default PowerBIIntermediateCourse;



import React from "react";
import {
  Phone,
  Mail,
  Search,
  ChevronRight,
  UserCheck,
  LayoutDashboard,
  MonitorPlay,
  Users,
  Rocket,
  ListChecks,
  Database,
  FileSpreadsheet,
  MousePointerClick,
  ShieldCheck,
  TimerReset,
  Network
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Exeltrainer from "./components/Exeltrainer";
import CourseCTA from "./components/CourseCTA";

const PowerBIIntermediateCourse = () => {
  const courseOutcomes = [
    "Design robust data models using star schema best practices.",
    "Write intermediate and advanced DAX measures including time intelligence functions.",
    "Build highly interactive reports using bookmarks, tooltips, and drill-through pages.",
    "Implement row-level security to control data access by user role.",
    "Optimise reports for performance and scalability across large datasets.",
    "Manage workspaces, datasets, and deployment pipelines in Power BI Service."
  ];

  const whyUpwise = [
    {
      title: "Expert Trainer",
      desc: "Learn from Ritu Arora, a Microsoft Certified Trainer.",
      color: "bg-[#f07b51]",
      icon: <UserCheck size={20} className="text-white" />
    },
    {
      title: "Capstone Project",
      desc: "Build an end-to-end solution: from data and modeling to DAX and interactive dashboards.",
      color: "bg-[#f07b51]",
      icon: <LayoutDashboard size={20} className="text-white" />
    },
    {
      title: "Practical Delivery",
      desc: "Instructor-led over 2 days with guided exercises and real business datasets.",
      color: "bg-[#f07b51]",
      icon: <MonitorPlay size={20} className="text-white" />
    },
    {
      title: "Target Audience",
      desc: "Ideal for Power BI Basic graduates, BI analysts, reporting professionals, finance and data teams.",
      color: "bg-[#f07b51]",
      icon: <Users size={20} className="text-white" />
    },
    {
      title: "Enterprise Ready",
      desc: "Build production-quality dashboards ready for organisation-wide deployment.",
      color: "bg-[#f07b51]",
      icon: <Rocket size={20} className="text-white" />
    },
    {
      title: "Prerequisites",
      desc: "Completion of Power BI Basic and basic familiarity with DAX (SUM, CALCULATE).",
      color: "bg-[#f07b51]",
      icon: <ListChecks size={20} className="text-white" />
    }
  ];

  const benefitsTarget = [
    {
      title: "Advanced Data Modelling",
      desc: "Master star/snowflake schemas, many-to-many relationships, and dedicated Date Tables.",
      icon: <Database size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "DAX Mastery",
      desc: "Command filter contexts, CALCULATE modifiers, X-Functions, and Time Intelligence DAX.",
      icon: <FileSpreadsheet size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Interactive Reporting",
      desc: "Create dynamic user experiences using bookmarks, buttons, drill-throughs, and custom themes.",
      icon: <MousePointerClick size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Row-Level Security (RLS)",
      desc: "Implement static and dynamic RLS to securely control data access by user roles.",
      icon: <ShieldCheck size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Performance Optimisation",
      desc: "Use the Performance Analyser and best practices to optimize DAX, models, and visuals.",
      icon: <TimerReset size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Service Governance",
      desc: "Manage Premium workspaces, dataset endorsements, gateways, and deployment pipelines.",
      icon: <Network size={20} className="text-[#FFFFFF]" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased overflow-x-hidden">

      {/* === TOP ORANGE BAR === */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-[#f07b51] text-white py-1.5 px-6 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
            <p>Upwise Training - Power BI Intermediate</p>
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
              POWER BI INTERMEDIATE <br className="hidden md:block" /> Build dynamic, performant, and enterprise-ready dashboards.
            </h1>
            <p className="text-lg text-slate-700 mt-4">
              Dive deep into advanced DAX, sophisticated data modelling, interactive report design, and enterprise governance.
            </p>
          </div>
          <div className="hidden md:block relative h-64 lg:h-96">
            <div className="absolute right-0 top-0 w-full h-full bg-slate-200/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/40 shadow-lg">
              <div className="relative w-full h-full">
                <img
                  id="power-bi-intermediate-hero-img"
                  src="/data visualization.png"
                  alt="Power BI Intermediate Training"
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
        <h2 className="text-3xl font-bold text-[#f07b51] mb-4">Programme Overview</h2>
        <p className="text-slate-600 leading-relaxed text-lg">
          Building on foundational Power BI knowledge, this advanced programme dives deep into DAX, sophisticated data modelling, interactive report design, and enterprise governance. Participants learn to build production-quality dashboards that are dynamic, performant, and ready for organisation-wide deployment with proper security controls.
        </p>
      </section>

      {/* === COURSE OUTCOMES === */}
      <section className="py-12 bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Programme Objectives</h2>
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
        <h2 className="text-2xl font-bold text-[#f07b51] text-center mb-12 uppercase tracking-wide">Course Content</h2>

        <div className="grid md:grid-cols-2 gap-12 text-sm">

          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 1: Advanced Data Modelling (2.5 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Star/Snowflake schemas and relationship management</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Bidirectional cross-filtering and many-to-many relationships</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Date Tables & Time Intelligence setup (CALENDAR, CALENDARAUTO)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Model Optimisation (Import vs. DirectQuery vs. Composite)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 2: DAX - Intermediate to Advanced (3 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Filter Context & Row Context (ALL, ALLEXCEPT, ALLSELECTED)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> CALCULATE syntax and modifiers (FILTER, KEEPFILTERS)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Iterator Functions (X-Functions) and Time Intelligence (TOTALYTD)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Variables, RANKX, and dynamic segmentation patterns</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 3: Advanced Visualisations & Report Design (2.5 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Matrix, Waterfall, Scatter, Key Influencers & Decomposition Tree</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Bookmarks, Buttons & Page Navigator for interactive routing</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Dynamic chart titles and report tooltip hover pages</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Conditional formatting, field parameters, and custom JSON themes</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 4: Row-Level Security & Service Governance (2 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Implementing Static & Dynamic Row-Level Security (RLS)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Workspace types, dataset sharing, and certification endorsement</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Gateway configurations and scheduled refreshes</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Deployment Pipelines: Development → Test → Production</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 5: Performance & Best Practices (1.5 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Performance Analyser: Measuring visual queries and DAX time</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Optimising DAX & Models: Measures vs calculated columns</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Design Accessibility: Alt text, tab order, mobile layouts</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Naming conventions and documenting the data model</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 6: Capstone Project & Certification (2.5 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> End-to-end dashboard build applying all learned concepts</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Peer review, structured feedback, and presentation</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Avoiding common Power BI pitfalls in production</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Power BI Data Analyst (PL-300) certification pathway overview</li>
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
            <p className="text-slate-600 mt-3">Comprehensive 2-day training program designed for working professionals.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
              <h3 className="text-[#f07b51] font-bold text-lg mb-2">Duration</h3>
              <p className="text-slate-700 font-medium">2 DAYS, 16 HOURS</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
              <h3 className="text-[#f07b51] font-bold text-lg mb-2">Delivery Format</h3>
              <p className="text-slate-700 font-medium">Instructor-led (classroom or virtual)</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
              <h3 className="text-[#f07b51] font-bold text-lg mb-2">Target Audience</h3>
              <p className="text-slate-700 font-medium">BI analysts & data teams</p>
            </div>

            <div className="bg-[#f07b51] rounded-2xl p-6 text-center flex flex-col justify-center">
              <h3 className="text-white font-bold text-lg mb-4">Course Fee</h3>
              <button className="bg-white text-[#f07b51] font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition-all">
                Enquire Fee Details
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
        courseName="Power BI Intermediate"
        brochureUrl="/cover.png"
        brochureName="Power-BI-Intermediate-Brochure.png"
      />

      <Footer />

      {/* Floating WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors z-50 border-2 border-white">
        <FaWhatsapp size={30} className="text-white" />
      </div>

    </div>
  );
};

export default PowerBIIntermediateCourse;