


// // import React, { useState } from "react";
// // import {
// //   BarChart3,
// //   Database,
// //   FileSpreadsheet,
// //   GraduationCap,
// //   ShieldCheck,
// //   TrendingUp,
// //   Zap,
// //   CheckCircle,
// //   Clock,
// //   BookOpenText,
// //   MousePointerClick,
// //   Award,
// //   ChevronDown,
// //   Building2,
// //   Star
// // } from "lucide-react";
// // import { clsx } from "clsx";
// // import { twMerge } from "tailwind-merge";

// // const cn = (...inputs) => twMerge(clsx(inputs));

// // const AdvanceExcelCourseFinal = () => {
// //   const [activeModule, setActiveModule] = useState(0);
// //   const [openFaq, setOpenFaq] = useState(null);

// //   const stats = [
// //     { label: "Course Duration", value: "16 Hrs", sub: "Live Interventions" },
// //     { label: "Practical Focus", value: "100%", sub: "Hands-on Exercises" },
// //     { label: "Alumni Rating", value: "4.8/5", sub: "from 11,952+ Learners" },
// //     { label: "Impact Delivery", value: "93%", sub: "Immediate Implementation" },
// //   ];

// //   const skills = [
// //     "Excel Formulas", "Advanced Functions", "XLOOKUP Mastery", "INDEX & MATCH",
// //     "Dynamic Pivot Tables", "Pivot Charts", "Executive Dashboards", "Power Query ETL",
// //     "Conditional Formatting", "Data Validation", "Macros Automation", "Interactive Slicers",
// //   ];

// //   const curriculum = [
// //     {
// //       title: "Formulas Foundations",
// //       sub: "Module 01",
// //       icon: FileSpreadsheet,
// //       topics: ["Understanding Excel Formulas", "Cell Referencing (Relative, Absolute, Mixed)", "Autosum & Autocalculate", "3D References Across Sheets", "External Workbook Linking"],
// //     },
// //     {
// //       title: "Advanced Functions & Logic",
// //       sub: "Module 02",
// //       icon: Zap,
// //       topics: ["SUMIF & SUMIFS Data Summarization", "COUNTIF & COUNTIFS Logic", "Complex IF & Nested IF Conditions", "Error Handling (IFERROR & IFNA)", "Lookup Mechanics: VLOOKUP vs XLOOKUP", "Advanced Extraction: INDEX & MATCH"],
// //     },
// //     {
// //       title: "Data Engine & Management",
// //       sub: "Module 03",
// //       icon: Database,
// //       topics: ["Custom Multi-level Sorting", "Standard & Advanced Filter Rules", "Database Automated Subtotals", "Flash Fill Formatting", "Data Cleaning Techniques"],
// //     },
// //     {
// //       title: "Pivot Tables & Summaries",
// //       sub: "Module 04",
// //       icon: TrendingUp,
// //       topics: ["Building Bulletproof Pivot Tables", "Dynamic Pivot Charts Layouts", "Interactive Slicers UI", "Timeline Filtering Components", "Calculated Fields & Custom Items"],
// //     },
// //     {
// //       title: "Dashboards & Power Query",
// //       sub: "Module 05",
// //       icon: BarChart3,
// //       topics: ["Executive Dashboard Layout Principles", "Advanced Visual Charts & Graphs", "In-cell Sparkline Trends", "Power Query Connection Engine", "Multi-Workbook Synthesis & Merging"],
// //     },
// //   ];

// //   const benefits = [
// //     "Analyze massive raw datasets with minimal stress",
// //     "Architect interactive, executive-ready dashboards",
// //     "Automate repetitive monthly workflows securely",
// //     "Generate highly accurate corporate business reports",
// //     "Incorporate rapid-fire professional Excel shortcuts",
// //     "Maximize workspace output and team turnaround speeds",
// //   ];

// //   const clientLogos = [
// //     { name: "Partner 1", initial: "TATA" },
// //     { name: "Partner 2", initial: "EY" },
// //     { name: "Partner 3", initial: "HDFC" },
// //     { name: "Partner 4", initial: "ITC" },
// //     { name: "Partner 5", initial: "ICICI" },
// //     { name: "Partner 6", initial: "KPMG" },
// //   ];

// //   const faqs = [
// //     { q: "Who is this Advanced Excel course designed for?", a: "This course is explicitly crafted for business analysts, finance teams, HR managers, operations leads, and any professional who handles data daily and wants to jump from standard operations to advanced insights." },
// //     { q: "Will I get a certificate at the end of the training?", a: "Yes, you will receive a premium corporate training completion certificate officially signed by Upwise and our Microsoft Certified Trainer (MCT)." },
// //     { q: "Is this training fully live or pre-recorded?", a: "This is a 100% interactive, instructor-led live training session packed with real-world scenarios, dedicated query resolution, and hands-on case studies." },
// //     { q: "What are the core prerequisites for joining?", a: "A basic familiarity with the Excel interface (opening files, basic inputs, simple sums) is all you need. We build your skills systematically up to macro automation." },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      
// //       {/* === TOP BANNER / NAVIGATION === */}
// //       <nav className="border-b border-slate-100 bg-white sticky top-0 z-50 backdrop-blur-md bg-white/90">
// //         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
// //           <div className="flex items-center gap-2">
// //             <span className="text-2xl font-black tracking-tight text-slate-950">
// //               up<span className="text-orange-500">wise</span>
// //             </span>
// //             <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
// //               TRAINING
// //             </span>
// //           </div>
// //           <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
// //             <a href="#overview" className="hover:text-[#1a8b5e] transition-colors">Overview</a>
// //             <a href="#curriculum" className="hover:text-[#1a8b5e] transition-colors">Curriculum</a>
// //             <a href="#benefits" className="hover:text-[#1a8b5e] transition-colors">Benefits</a>
// //             <a href="#faq" className="hover:text-[#1a8b5e] transition-colors">FAQs</a>
// //           </div>
// //           <button className="bg-[#0f2c59] hover:bg-[#1a8b5e] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm">
// //             Contact Us
// //           </button>
// //         </div>
// //       </nav>

// //       {/* === NEW COURSE HERO SECTION === */}
// //       <section id="overview" className="relative bg-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
// //         {/* Right side light green tint background matching the image */}
// //         <div className="absolute top-0 right-0 w-full lg:w-[45%] h-full bg-[#f1fcf5] pointer-events-none" />
        
// //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// //           <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
// //             {/* Left Content */}
// //             <div className="space-y-6">
// //               <p className="text-sm font-bold text-[#1a8b5e] uppercase tracking-widest">
// //                 Microsoft Certified Trainer Led Course
// //               </p>
              
// //               <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0f2c59] leading-[1.1] tracking-tight">
// //                 Advance Excel<br/>Training
// //               </h1>
              
// //               <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
// //                 A 16-hour hands-on session to help professionals analyze data, build reports, automate repetitive tasks, and create dashboard-ready Excel workbooks.
// //               </p>

// //               {/* Tags */}
// //               <div className="flex flex-wrap gap-3 pt-2">
// //                 {['16 hrs session', 'Hands-on training', 'Real-time scenarios', 'Corporate-ready curriculum'].map(tag => (
// //                   <span key={tag} className="bg-[#eefcf2] text-[#1a8b5e] border border-[#bbf7d0] px-4 py-2 rounded-full text-sm font-semibold">
// //                     {tag}
// //                   </span>
// //                 ))}
// //               </div>

// //               {/* Buttons */}
// //               <div className="flex flex-wrap gap-4 pt-6">
// //                 <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-green-500/20">
// //                   Enquire for Training
// //                 </button>
// //                 <button className="bg-white border border-slate-200 hover:border-[#0f2c59] text-[#0f2c59] font-bold px-8 py-3.5 rounded-xl transition-all shadow-sm">
// //                   View Curriculum
// //                 </button>
// //               </div>

// //               <p className="text-slate-500 text-sm pt-6">
// //                 Trainer: <span className="font-bold text-[#0f2c59]">Ritu Arora</span>, Microsoft Certified Trainer
// //               </p>
// //             </div>

// //             {/* Right Dashboard Mockup */}
// //             <div className="relative mx-auto lg:ml-auto w-full max-w-md">
// //               <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-7">
                
// //                 {/* Browser Dots */}
// //                 <div className="flex gap-2 mb-8">
// //                   <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
// //                   <div className="w-3 h-3 rounded-full bg-slate-200" />
// //                   <div className="w-3 h-3 rounded-full bg-slate-200" />
// //                 </div>

// //                 {/* Dashboard Header */}
// //                 <div className="flex justify-between items-start mb-6">
// //                   <div>
// //                     <p className="text-xs text-slate-500 font-bold mb-1">Monthly Report</p>
// //                     <h3 className="text-2xl font-bold text-[#0f2c59]">Sales Dashboard</h3>
// //                   </div>
// //                   <span className="bg-[#eefcf2] text-[#1a8b5e] text-xs font-bold px-4 py-1.5 rounded-full">
// //                     Live
// //                   </span>
// //                 </div>

// //                 {/* Data Grid */}
// //                 <div className="grid grid-cols-2 gap-4 mb-6">
                  
// //                   {/* Table */}
// //                   <div className="bg-[#f8fafc] rounded-xl p-4 border border-slate-100">
// //                     <table className="w-full text-xs text-left">
// //                       <thead>
// //                         <tr className="text-[#0f2c59] border-b border-slate-200">
// //                           <th className="pb-3 font-bold">Region</th>
// //                           <th className="pb-3 font-bold text-center">Sales</th>
// //                           <th className="pb-3 font-bold text-right">Growth</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody className="text-slate-600 font-medium">
// //                         <tr className="border-b border-slate-100">
// //                           <td className="py-3">North</td>
// //                           <td className="py-3 text-center">42K</td>
// //                           <td className="py-3 text-right">18%</td>
// //                         </tr>
// //                         <tr className="border-b border-slate-100">
// //                           <td className="py-3">West</td>
// //                           <td className="py-3 text-center">37K</td>
// //                           <td className="py-3 text-right">14%</td>
// //                         </tr>
// //                         <tr>
// //                           <td className="py-3">South</td>
// //                           <td className="py-3 text-center">31K</td>
// //                           <td className="py-3 text-right">9%</td>
// //                         </tr>
// //                       </tbody>
// //                     </table>
// //                   </div>

// //                   {/* Chart */}
// //                   <div className="bg-[#f8fafc] rounded-xl p-4 border border-slate-100 flex items-end justify-between gap-3 h-[184px]">
// //                      <div className="w-full bg-[#1a8b5e] rounded-t-md h-[45%]" />
// //                      <div className="w-full bg-[#1a8b5e] rounded-t-md h-[70%]" />
// //                      <div className="w-full bg-[#1a8b5e] rounded-t-md h-[55%]" />
// //                      <div className="w-full bg-[#1a8b5e] rounded-t-md h-[85%]" />
// //                   </div>
// //                 </div>

// //                 {/* Bottom Pills */}
// //                 <div className="flex gap-2">
// //                   {['Q1', 'Q2', 'Q3', 'Q4'].map(q => (
// //                     <span key={q} className="border border-[#bbf7d0] bg-[#eefcf2] text-[#1a8b5e] text-xs font-bold px-3 py-1.5 rounded-full">
// //                       {q}
// //                     </span>
// //                   ))}
// //                 </div>

// //               </div>
// //             </div>

// //           </div>
// //         </div>
// //       </section>

// //       {/* === TRUSTED BY BANNER === */}
// //       <section className="border-y border-slate-100 bg-slate-50 py-10">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
// //             Trusted by L&D Teams in Leading Enterprises Worldwide
// //           </p>
// //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center opacity-60">
// //             {clientLogos.map((logo, index) => (
// //               <div key={index} className="h-10 flex items-center justify-center font-black text-slate-400 text-lg tracking-wider border border-dashed border-slate-300 px-6 rounded-lg select-none">
// //                 {logo.initial}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* === CREDIBILITY STATS GRID === */}
// //       <section className="py-20 max-w-7xl mx-auto px-6">
// //         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
// //           {stats.map((stat, idx) => (
// //             <div key={idx} className="bg-[#f1fcf5]/60 border border-[#bbf7d0]/60 rounded-3xl p-6 hover:bg-[#f1fcf5] transition-all">
// //               <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">{stat.label}</span>
// //               <h3 className="text-4xl font-black text-[#0f2c59] tracking-tight">{stat.value}</h3>
// //               <p className="text-sm font-medium text-slate-600 mt-1">{stat.sub}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* === INTERACTIVE SYLLABUS SECTION === */}
// //       <section id="curriculum" className="py-20 bg-slate-50 border-y border-slate-100">
// //         <div className="max-w-7xl mx-auto px-6">
          
// //           <div className="text-center max-w-3xl mx-auto mb-16">
// //             <span className="text-xs font-bold text-[#1a8b5e] uppercase tracking-[0.2em] bg-[#eefcf2] px-3 py-1 rounded-full">
// //               Detailed Roadmap
// //             </span>
// //             <h2 className="text-4xl font-black text-[#0f2c59] tracking-tight mt-4">
// //               What Your Workforce Will Master
// //             </h2>
// //             <p className="text-slate-600 mt-3">
// //               A comprehensive step-by-step systemic dive from foundational formulas to deep business dashboard orchestration.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
// //             {/* Left Interactive Tabs */}
// //             <div className="lg:col-span-5 space-y-3">
// //               {curriculum.map((module, index) => {
// //                 const isSelected = activeModule === index;
// //                 return (
// //                   <button
// //                     key={index}
// //                     onClick={() => setActiveModule(index)}
// //                     className={cn(
// //                       "w-full flex items-center gap-4 p-5 rounded-2xl text-left transition-all border",
// //                       isSelected 
// //                         ? "bg-white border-[#bbf7d0] shadow-lg shadow-green-500/5 translate-x-2" 
// //                         : "bg-transparent border-transparent hover:bg-white/60 hover:border-slate-200"
// //                     )}
// //                   >
// //                     <div className={cn(
// //                       "p-3 rounded-xl transition-all",
// //                       isSelected ? "bg-[#1a8b5e] text-white" : "bg-slate-200 text-slate-600"
// //                     )}>
// //                       <module.icon size={20} />
// //                     </div>
// //                     <div>
// //                       <span className="text-[10px] font-bold text-[#1a8b5e] uppercase tracking-widest block mb-0.5">
// //                         {module.sub}
// //                       </span>
// //                       <span className="font-bold text-[#0f2c59] block text-lg leading-tight">
// //                         {module.title}
// //                       </span>
// //                     </div>
// //                   </button>
// //                 );
// //               })}
// //             </div>

// //             {/* Right Display Panel */}
// //             <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-200/50 min-h-[360px] flex flex-col justify-between">
// //               <div>
// //                 <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
// //                   <span>Core Topics Covered</span>
// //                   <div className="h-px bg-slate-100 flex-grow" />
// //                 </div>
                
// //                 <ul className="grid sm:grid-cols-1 gap-4">
// //                   {curriculum[activeModule].topics.map((topic, idx) => (
// //                     <li key={idx} className="flex gap-3 items-start text-slate-700 font-medium group">
// //                       <CheckCircle size={18} className="text-[#1a8b5e] mt-0.5 flex-shrink-0" />
// //                       <span className="group-hover:text-[#0f2c59] transition-colors">{topic}</span>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>

// //               <div className="border-t border-slate-100 pt-6 mt-8 flex justify-between items-center text-xs font-semibold text-slate-400">
// //                 <span>Hands-on Sandbox Lab Included</span>
// //                 <span className="text-[#1a8b5e]">Live Q&A Integrated</span>
// //               </div>
// //             </div>

// //           </div>
// //         </div>
// //       </section>

// //       {/* === MASTERED SKILLS CLOUD === */}
// //       <section className="py-24 max-w-5xl mx-auto px-6 text-center">
// //         <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] block mb-3">Resume Competencies</span>
// //         <h2 className="text-4xl font-black text-[#0f2c59] tracking-tight mb-12">Program Competency Standard</h2>
// //         <div className="flex flex-wrap justify-center gap-3">
// //           {skills.map((skill, idx) => (
// //             <span key={idx} className="bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold px-5 py-3 rounded-xl text-sm transition-all hover:border-[#1a8b5e] hover:bg-[#f1fcf5] hover:text-[#1a8b5e] cursor-default">
// //               {skill}
// //             </span>
// //           ))}
// //         </div>
// //       </section>

// //       {/* === TEAM ROI BENEFIT GRID === */}
// //       <section id="benefits" className="py-20 bg-[#0f2c59] text-white rounded-[40px] mx-4 my-12 overflow-hidden relative shadow-2xl">
// //         <div className="absolute inset-0 bg-gradient-to-br from-[#1a8b5e]/20 via-transparent to-transparent pointer-events-none" />
        
// //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// //           <div className="text-center max-w-3xl mx-auto mb-16">
// //             <span className="text-xs font-bold text-[#22c55e] uppercase tracking-[0.2em]">Impact Assessment</span>
// //             <h2 className="text-4xl font-black text-white tracking-tight mt-3">Strategic Workforce Outcomes</h2>
// //           </div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {benefits.map((benefit, idx) => (
// //               <div key={idx} className="bg-[#153666] border border-[#1e457d] rounded-2xl p-6 flex gap-4 items-start hover:border-[#22c55e]/50 transition-colors">
// //                 <div className="w-8 h-8 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center justify-center text-[#22c55e] font-bold text-xs flex-shrink-0">
// //                   0{idx + 1}
// //                 </div>
// //                 <p className="text-slate-300 font-medium text-sm leading-relaxed pt-1">{benefit}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* === CORPORATE TESTIMONIALS === */}
// //       <section className="py-20 bg-[#f1fcf5]/40 border-y border-[#bbf7d0]/50">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="text-center mb-12">
// //             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Feedback Metrics</span>
// //             <h2 className="text-3xl font-black text-[#0f2c59] mt-2">What Our Learners Say</h2>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-shadow">
// //               <div className="flex text-[#22c55e] gap-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
// //               <p className="text-slate-600 italic text-sm leading-relaxed">"The 16-hour session completely overhauled our internal operational analytics speed. The dashboard architecture segment saved our management teams hours of tracking work weekly."</p>
// //               <div>
// //                 <p className="font-bold text-[#0f2c59] text-sm">L&D Lead Executive</p>
// //                 <p className="text-xs text-slate-400">Fortune 500 Enterprise Partner</p>
// //               </div>
// //             </div>
// //             <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-shadow">
// //               <div className="flex text-[#22c55e] gap-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
// //               <p className="text-slate-600 italic text-sm leading-relaxed">"Excellent systematic workflow coverage. XLOOKUP mastery, conditional formatting structures, and macro introductions were taught elegantly using actual industry case situations."</p>
// //               <div>
// //                 <p className="font-bold text-[#0f2c59] text-sm">Senior Business Analyst</p>
// //                 <p className="text-xs text-slate-400">Global Financial Operations Hub</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* === ACCORDION FAQS SECTION === */}
// //       <section id="faq" className="py-20 max-w-4xl mx-auto px-6">
// //         <div className="text-center mb-12">
// //           <span className="text-xs font-bold text-[#1a8b5e] uppercase tracking-[0.2em]">Clarifications</span>
// //           <h2 className="text-4xl font-black text-[#0f2c59] tracking-tight mt-2">Frequently Asked Questions</h2>
// //         </div>

// //         <div className="space-y-4">
// //           {faqs.map((faq, idx) => {
// //             const isOpen = openFaq === idx;
// //             return (
// //               <div key={idx} className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all bg-white">
// //                 <button
// //                   onClick={() => setOpenFaq(isOpen ? null : idx)}
// //                   className="w-full flex items-center justify-between p-6 text-left font-bold text-[#0f2c59] hover:bg-slate-50 transition-colors"
// //                 >
// //                   <span className="text-base pr-4">{faq.q}</span>
// //                   <ChevronDown size={18} className={cn("text-slate-400 transition-transform duration-300 flex-shrink-0", isOpen && "rotate-180 text-[#1a8b5e]")} />
// //                 </button>
// //                 <div className={cn("grid transition-all duration-300 ease-in-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
// //                   <div className="overflow-hidden">
// //                     <p className="p-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50 bg-slate-50/40">
// //                       {faq.a}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </section>

// //       {/* === LEAD INTAKE / INQUIRY FORM === */}
// //       <section id="contact" className="py-20 bg-gradient-to-t from-[#f1fcf5] to-white border-t border-[#eefcf2]">
// //         <div className="max-w-6xl mx-auto px-6">
// //           <div className="grid lg:grid-cols-12 gap-12 bg-white border border-slate-100 shadow-xl shadow-slate-200/40 rounded-[36px] overflow-hidden p-8 lg:p-12 relative">
            
// //             <div className="absolute top-0 left-0 w-2 h-full bg-[#22c55e]" />

// //             <div className="lg:col-span-5 flex flex-col justify-between space-y-8 pl-4">
// //               <div>
// //                 <h2 className="text-4xl font-black text-[#0f2c59] tracking-tight leading-none mb-4">
// //                   Partner with us to unlock your team's potential.
// //                 </h2>
// //                 <p className="text-slate-600 font-medium">
// //                   Let us tailor a bespoke live intervention specific to your organization's custom reporting datasets and operational needs.
// //                 </p>
// //               </div>
// //               <div className="space-y-3 text-sm font-semibold text-slate-500">
// //                 <p className="flex items-center gap-2"><Award className="text-[#1a8b5e]" size={16}/> Official Corporate Assessment Logs Included</p>
// //                 <p className="flex items-center gap-2"><ShieldCheck className="text-[#1a8b5e]" size={16}/> Globally Valid MCT Completion Certification</p>
// //               </div>
// //             </div>

// //             <form className="lg:col-span-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
// //               <div className="grid sm:grid-cols-2 gap-4">
// //                 <div className="space-y-1.5">
// //                   <label className="text-xs font-bold text-slate-500 uppercase">Your Name</label>
// //                   <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#22c55e] font-medium" placeholder="John Doe" />
// //                 </div>
// //                 <div className="space-y-1.5">
// //                   <label className="text-xs font-bold text-slate-500 uppercase">Corporate Email ID</label>
// //                   <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#22c55e] font-medium" placeholder="john@enterprise.com" />
// //                 </div>
// //               </div>
// //               <div className="space-y-1.5">
// //                 <label className="text-xs font-bold text-slate-500 uppercase">Organization Name</label>
// //                 <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#22c55e] font-medium" placeholder="Acme International" />
// //               </div>
// //               <div className="space-y-1.5">
// //                 <label className="text-xs font-bold text-slate-500 uppercase">Training Specific Needs / Message</label>
// //                 <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-[#22c55e] font-medium resize-none" placeholder="Let us know your rough cohort size or specific topic requests..." />
// //               </div>
// //               <button type="submit" className="w-full bg-[#0f2c59] hover:bg-[#1a8b5e] text-white font-bold py-4 rounded-xl transition-all shadow-md">
// //                 Submit Corporate Enquiry
// //               </button>
// //             </form>

// //           </div>
// //         </div>
// //       </section>

// //       {/* === BRANDED FOOTER === */}
// //       <footer className="bg-slate-950 text-slate-400 text-sm">
// //         <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
// //           <div className="space-y-3 col-span-2 md:col-span-1">
// //             <div className="flex items-center gap-2">
// //               {/* Keep Upwise logo color original here for brand consistency */}
// //               <span className="text-xl font-black text-white tracking-tight">up<span className="text-orange-500">wise</span></span>
// //             </div>
// //             <p className="text-xs text-slate-500 leading-relaxed">
// //               Delivering top-tier live corporate technology execution capabilities to workforces globally.
// //             </p>
// //           </div>
// //           <div className="space-y-2">
// //             <p className="font-bold text-white text-xs uppercase tracking-wider">Programs</p>
// //             <p className="text-xs hover:text-white cursor-pointer transition-colors">Advanced Excel</p>
// //             <p className="text-xs hover:text-white cursor-pointer transition-colors">Business Intelligence</p>
// //           </div>
// //           <div className="space-y-2">
// //             <p className="font-bold text-white text-xs uppercase tracking-wider">Company</p>
// //             <p className="text-xs hover:text-white cursor-pointer transition-colors">About Upwise</p>
// //             <p className="text-xs hover:text-white cursor-pointer transition-colors">Contact Us</p>
// //           </div>
// //           <div className="space-y-2">
// //             <p className="font-bold text-white text-xs uppercase tracking-wider">Support</p>
// //             <p className="text-xs hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
// //             <p className="text-xs hover:text-white cursor-pointer transition-colors">Terms of Service</p>
// //           </div>
// //         </div>
// //         <div className="max-w-7xl mx-auto px-6 py-6 border-t border-slate-900 text-center text-xs text-slate-600">
// //           &copy; {new Date().getFullYear()} Upwise Training. All rights reserved. Microsoft and Excel are trademarks of Microsoft Corp.
// //         </div>
// //       </footer>

// //     </div>
// //   );
// // };

// // export default AdvanceExcelCourseFinal;









// // // import { Helmet } from "react-helmet-async";

// // // import CourseNavbar from "../components/course/CourseNavbar";
// // // import CourseHero from "../components/course/CourseHero";
// // // import TrustedCompanies from "../components/course/TrustedCompanies";
// // // import CourseStats from "../components/course/CourseStats";
// // // import CurriculumSection from "../components/course/CurriculumSection";
// // // import SkillsSection from "../components/course/SkillsSection";
// // // import BenefitsSection from "../components/course/BenefitsSection";
// // // import TestimonialsSection from "../components/course/TestimonialsSection";
// // // import FAQSection from "../components/course/FAQSection";
// // // import ContactSection from "../components/course/ContactSection";
// // // import CourseFooter from "../components/course/CourseFooter";

// // // const AdvanceExcelCourse = () => {
// // //   const stats = [
// // //     {
// // //       label: "Course Duration",
// // //       value: "16 Hrs",
// // //       sub: "Live Interventions",
// // //     },
// // //     {
// // //       label: "Practical Focus",
// // //       value: "100%",
// // //       sub: "Hands-on Exercises",
// // //     },
// // //     {
// // //       label: "Alumni Rating",
// // //       value: "4.8/5",
// // //       sub: "11,952+ Learners",
// // //     },
// // //     {
// // //       label: "Impact Delivery",
// // //       value: "93%",
// // //       sub: "Immediate Implementation",
// // //     },
// // //   ];

// // //   const clientLogos = [
// // //     "TATA",
// // //     "EY",
// // //     "HDFC",
// // //     "ITC",
// // //     "ICICI",
// // //     "KPMG",
// // //   ];

// // //   return (
// // //     <>


// // //       {/* <CourseNavbar /> */}

// // //       <CourseHero />

// // //       <TrustedCompanies
// // //         clientLogos={clientLogos}
// // //       />

// // //       <CourseStats stats={stats} />

// // //       <CurriculumSection />

// // //       <SkillsSection />

// // //       <BenefitsSection />

// // //       <TestimonialsSection />

// // //       <FAQSection />

// // //       <ContactSection />

// // //       <CourseFooter />
// // //     </>
// // //   );
// // // };

// // // export default AdvanceExcelCourse;





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
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
//   MessageCircle
// } from "lucide-react";

// const AdvanceExcelCourseFinal = () => {
//   const courseOutcomes = [
//     "Navigate the Excel interface with ease.",
//     "Use basic and advanced formulas and functions.",
//     "Manage, sort, format, and visualize data.",
//     "Create and use PivotTables and PivotCharts.",
//     "Apply advanced analysis techniques.",
//     "Automate repetitive tasks using macros and VBA."
//   ];

//   const whyMazanet = [
//     {
//       title: "Expert Faculty",
//       desc: "Our trainers are industry experts with 10+ years of experience in data analytics and corporate reporting.",
//       color: "bg-yellow-500",
//       icon: <Users size={20} className="text-white" />
//     },
//     {
//       title: "Practical Approach",
//       desc: "100% Hands-on training. We focus on real-world scenarios rather than just theoretical concepts.",
//       color: "bg-teal-500",
//       icon: <Briefcase size={20} className="text-white" />
//     },
//     {
//       title: "Flexible Timing",
//       desc: "Weekend and weekday batches available to suit the busy schedules of working professionals.",
//       color: "bg-red-500",
//       icon: <Clock size={20} className="text-white" />
//     },
//     {
//       title: "Learning Tools",
//       desc: "Comprehensive study materials, practice datasets, and recorded sessions provided for future reference.",
//       color: "bg-cyan-600",
//       icon: <BookOpen size={20} className="text-white" />
//     },
//     {
//       title: "Case Study",
//       desc: "Work on live corporate case studies to build a strong portfolio and practical understanding.",
//       color: "bg-purple-600",
//       icon: <Target size={20} className="text-white" />
//     },
//     {
//       title: "Certification",
//       desc: "Receive an ISO-certified completion certificate that adds significant value to your professional resume.",
//       color: "bg-blue-800",
//       icon: <Award size={20} className="text-white" />
//     }
//   ];

//   const benefitsTarget = [
//     {
//       title: "Improved Efficiency",
//       desc: "Master shortcuts and automation to complete hours of reporting work in a fraction of the time."
//     },
//     {
//       title: "Data Analysis",
//       desc: "Turn raw datasets into meaningful insights using advanced formulas and pivot structures."
//     },
//     {
//       title: "Better Decision Making",
//       desc: "Create interactive dashboards that help stakeholders visualize trends and make informed choices."
//     },
//     {
//       title: "Career Advancement",
//       desc: "Excel mastery is a highly sought-after skill that opens doors to promotions and better roles."
//     },
//     {
//       title: "Effective Communication",
//       desc: "Present complex data clearly and professionally using advanced charting and visualization tools."
//     },
//     {
//       title: "Accuracy and Confidence",
//       desc: "Reduce manual errors through data validation, auditing tools, and structured formulas."
//     }
//   ];

//   const corporatePrograms = [
//     {
//       title: "Power BI",
//       desc: "Transform your company's data into rich visuals and extract business intelligence for enhanced decision making."
//     },
//     {
//       title: "SQL Server",
//       desc: "Master database management, complex queries, and data extraction techniques for robust backend handling."
//     },
//     {
//       title: "Python",
//       desc: "Learn versatile programming for data analysis, automation, and building scalable business applications."
//     },
//     {
//       title: "Data Science",
//       desc: "Dive into predictive analytics, machine learning models, and deep statistical analysis for the modern enterprise."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white text-slate-800 font-sans antialiased overflow-x-hidden">
      
//       {/* === TOP GREEN BAR === */}
//       <div className="bg-[#6db53c] text-white py-1.5 px-6 hidden md:block">
//         <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
//           <p>India's Leading IT Training & Placement Institute</p>
//           <div className="flex gap-4 items-center">
//             <span className="flex items-center gap-1"><Mail size={12} /> info@mazanet.com</span>
//             <span className="flex items-center gap-1"><Phone size={12} /> +91 98765 43210</span>
//           </div>
//         </div>
//       </div>

//       {/* === NAVIGATION === */}
//       <nav className="bg-white sticky top-0 z-50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <div className="relative flex items-center justify-center">
//               <div className="w-8 h-8 bg-blue-600 rotate-45 flex items-center justify-center">
//                 <div className="w-4 h-4 bg-white rotate-45" />
//               </div>
//             </div>
//             <span className="text-2xl font-black tracking-tight text-[#0f4c81]">
//               Mazanet
//             </span>
//           </div>

//           {/* Links */}
//           <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
//             <a href="#" className="hover:text-[#6db53c]">HOME</a>
//             <a href="#" className="hover:text-[#6db53c]">ABOUT US</a>
//             <a href="#" className="text-[#6db53c]">CORPORATE TRAINING</a>
//             <a href="#" className="hover:text-[#6db53c]">PLACEMENTS</a>
//             <a href="#" className="hover:text-[#6db53c]">CONTACT US</a>
//             <Search size={18} className="text-slate-500 cursor-pointer hover:text-[#6db53c]" />
//           </div>

//           {/* Call button */}
//           <div className="hidden md:flex items-center gap-2 bg-[#6db53c] text-white px-4 py-2 rounded font-bold text-sm">
//             <Phone size={16} /> 1800-123-4567
//           </div>
//         </div>
//       </nav>

//       {/* === HERO SECTION === */}
//       <section className="relative bg-gradient-to-r from-[#d9f1ff] to-[#e6f4f1] py-16 lg:py-24 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 items-center">
//           <div className="space-y-4">
//             <h1 className="text-3xl md:text-5xl font-bold text-[#0f4c81] leading-tight">
//               Advance Excel training program designed specifically for <br className="hidden md:block"/> professionals and business individuals.
//             </h1>
//           </div>
//           {/* Mocking the right side image with a placeholder block simulating the layout */}
//           <div className="hidden md:block relative h-64 lg:h-96">
//             <div className="absolute right-0 top-0 w-full h-full bg-slate-200/50 rounded-xl overflow-hidden backdrop-blur-sm flex items-center justify-center border border-white/40 shadow-lg">
//                <span className="text-slate-400 font-medium">[ Hero Image Placeholder ]</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* === OBJECTIVES === */}
//       <section className="py-12 max-w-4xl mx-auto px-6 text-center">
//         <h2 className="text-2xl font-bold text-[#6db53c] mb-4">Objectives</h2>
//         <p className="text-slate-600 leading-relaxed text-sm">
//           To equip participants with the knowledge and skills required to effectively navigate and utilize Microsoft Excel for data analysis, reporting, and automation. By the end of this course, participants will be able to perform advanced calculations, create dynamic dashboards, and streamline their daily workflows.
//         </p>
//       </section>

//       {/* === COURSE OUTCOMES === */}
//       <section className="py-12 bg-slate-50 relative overflow-hidden">
//         {/* Decorative background lines */}
//         <div className="absolute left-0 top-0 w-64 h-64 opacity-5 pointer-events-none">
//           <Target size={256} />
//         </div>
        
//         <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
//           <h2 className="text-2xl font-bold text-slate-800 mb-8">Course Outcomes</h2>
//           <div className="grid md:grid-cols-2 gap-4 text-left">
//             {courseOutcomes.map((outcome, idx) => (
//               <div key={idx} className="flex items-start gap-3">
//                 <div className="mt-1 bg-[#6a359c] rounded-sm p-0.5 flex-shrink-0">
//                   <ChevronRight size={14} className="text-white" />
//                 </div>
//                 <p className="text-sm text-slate-700 font-medium">{outcome}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* === WHY MAZANET === */}
//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-2xl font-bold text-[#6db53c]">Why Mazanet?</h2>
//         </div>
//         <div className="grid md:grid-cols-2 gap-6">
//           {whyMazanet.map((item, idx) => (
//             <div key={idx} className="flex items-stretch bg-blue-50/50 rounded-lg overflow-hidden border border-blue-100">
//               <div className={`${item.color} w-16 flex items-center justify-center flex-shrink-0 relative`}>
//                 {item.icon}
//                 {/* Speech bubble pointer effect */}
//                 <div className={`absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 ${item.color} rotate-45`} />
//               </div>
//               <div className="p-4 pl-6">
//                 <h3 className="font-bold text-[#0f4c81] text-sm mb-1">{item.title}</h3>
//                 <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* === BENEFITS TARGET === */}
//       <section className="py-20 bg-slate-100 rounded-tl-[100px] mt-10">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-2xl font-bold text-slate-800 mb-12 text-center">Benefits Target</h2>
//           <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 pt-4">
//             {benefitsTarget.map((benefit, idx) => (
//               <div key={idx} className="bg-white rounded-2xl p-6 relative shadow-sm border border-slate-200">
//                 <div className="absolute -top-6 -left-4 bg-[#6db53c] w-12 h-12 rounded-full border-4 border-slate-100 flex items-center justify-center shadow-sm">
//                   <CheckCircle2 size={24} className="text-white" />
//                 </div>
//                 <h3 className="font-bold text-[#6db53c] text-sm mt-4 mb-2">{benefit.title}</h3>
//                 <p className="text-xs text-slate-600 leading-relaxed">{benefit.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* === COURSE OUTLINE === */}
//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <h2 className="text-2xl font-bold text-[#6db53c] text-center mb-12 uppercase tracking-wide">Course Outline</h2>
        
//         <div className="grid md:grid-cols-2 gap-12 text-sm">
          
//           {/* Left Column */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#6db53c]">BASIC EXCEL</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Introduction to Excel Interface</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Workbook and Worksheet Navigation</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Basic Data Entry and Formatting</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Customizing the Quick Access Toolbar</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#6db53c]">DATA MANAGEMENT</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Sorting Data (Single & Multi-level)</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Applying Filters and Advanced Filters</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Data Validation Rules & Dropdown Lists</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Removing Duplicates and Text-to-Columns</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#6db53c]">FORMULAS AND FUNCTIONS</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Mathematical Functions (SUM, AVERAGE, COUNT)</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Logical Functions (IF, AND, OR, IFERROR)</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Lookup Functions (VLOOKUP, HLOOKUP, XLOOKUP, INDEX, MATCH)</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Text Functions (LEFT, RIGHT, MID, CONCATENATE)</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Date and Time Functions (TODAY, NOW, DATEDIF)</li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#6db53c]">DATA VISUALIZATION</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Creating Column, Pie, Line, and Bar Charts</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Advanced Chart Formatting & Dynamic Charts</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Sparklines and Conditional Formatting</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#6db53c]">ADVANCED DATA ANALYSIS</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Creating and Formatting PivotTables</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> PivotCharts and Slicers for Interactive Dashboards</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> What-If Analysis (Goal Seek, Data Tables, Scenario Manager)</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Introduction to Power Query</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#6db53c]">MACROS AND VBA</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Introduction to Macros and the Developer Tab</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Recording, Running, and Editing Macros</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Relative vs. Absolute Referencing in Macros</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4c81] mt-1.5 flex-shrink-0" /> Assigning Macros to Buttons and Shapes</li>
//               </ul>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* === CORPORATE TRAINING PROGRAMS === */}
//       <section className="py-16 bg-slate-50 border-t border-slate-200">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-2xl font-bold text-center text-slate-800 mb-10 tracking-wide">Our Corporate Training Programs</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {corporatePrograms.map((prog, idx) => (
//               <div key={idx} className="bg-white border border-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
//                 <h3 className="text-blue-600 font-bold mb-3">{prog.title}</h3>
//                 <p className="text-xs text-slate-600 leading-relaxed">{prog.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* === FOOTER === */}
//       <footer className="bg-[#111] text-slate-300 py-12">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          
//           <div className="space-y-4">
//             <div className="flex items-center gap-2">
//               <div className="w-6 h-6 bg-[#6db53c] rotate-45 flex items-center justify-center">
//                 <div className="w-3 h-3 bg-[#111] rotate-45" />
//               </div>
//               <span className="text-xl font-bold text-white">Mazanet</span>
//             </div>
//             <p className="text-xs leading-relaxed text-slate-400">
//               Empowering professionals and enterprises with high-end corporate training, skill development, and top-tier placements.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Quick Links</h4>
//             <ul className="space-y-2 text-xs">
//               <li><a href="#" className="hover:text-[#6db53c]">Home</a></li>
//               <li><a href="#" className="hover:text-[#6db53c]">About Us</a></li>
//               <li><a href="#" className="hover:text-[#6db53c]">Corporate Training</a></li>
//               <li><a href="#" className="hover:text-[#6db53c]">Placements</a></li>
//               <li><a href="#" className="hover:text-[#6db53c]">Careers</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Training Programs</h4>
//             <ul className="space-y-2 text-xs">
//               <li><a href="#" className="hover:text-[#6db53c]">Advanced Excel</a></li>
//               <li><a href="#" className="hover:text-[#6db53c]">Power BI</a></li>
//               <li><a href="#" className="hover:text-[#6db53c]">SQL Server</a></li>
//               <li><a href="#" className="hover:text-[#6db53c]">Python Full Stack</a></li>
//               <li><a href="#" className="hover:text-[#6db53c]">Data Science</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contact Us</h4>
//             <ul className="space-y-3 text-xs">
//               <li className="flex gap-3">
//                 <MapPin size={16} className="text-[#6db53c] flex-shrink-0" />
//                 <span>123 Tech Park, Phase 2, Industrial Estate, City Center, 400001</span>
//               </li>
//               <li className="flex gap-3 items-center">
//                 <Phone size={16} className="text-[#6db53c] flex-shrink-0" />
//                 <span>+91 98765 43210</span>
//               </li>
//               <li className="flex gap-3 items-center">
//                 <Mail size={16} className="text-[#6db53c] flex-shrink-0" />
//                 <span>info@mazanet.com</span>
//               </li>
//             </ul>
//             <div className="flex gap-3 mt-6">
//               <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#6db53c] cursor-pointer transition-colors"><Facebook size={14} /></div>
//               <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#6db53c] cursor-pointer transition-colors"><Twitter size={14} /></div>
//               <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#6db53c] cursor-pointer transition-colors"><Linkedin size={14} /></div>
//               <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#6db53c] cursor-pointer transition-colors"><Instagram size={14} /></div>
//             </div>
//           </div>

//         </div>
//         <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
//           &copy; {new Date().getFullYear()} Mazanet. All rights reserved.
//         </div>
//       </footer>

//       {/* Floating WhatsApp Icon */}
//       <div className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors z-50 border-2 border-white">
//         <MessageCircle size={30} className="text-white" />
//       </div>

//     </div>
//   );
// };

// export default AdvanceExcelCourseFinal;



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
import Exeltrainer from "./components/Exeltrainer";
import CourseCTA from "./components/CourseCTA";

const AdvanceExcelCourseFinal = () => {
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

      {/* <AboutUs /> */}

      <Exeltrainer/>

      <Testimonials/>

      <CourseCTA/>



       <Footer />

      {/* Floating WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors z-50 border-2 border-white">
        {/* <Whatsapp size={30} className="text-white" /> */}
        <FaWhatsapp size={30} className="text-white" />
      </div>

    </div>
  );
};

export default AdvanceExcelCourseFinal;












