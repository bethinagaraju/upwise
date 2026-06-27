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
//   Zap,
// } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa6";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Testimonials from "../components/Testimonials";
// import Exeltrainer from "./components/Exeltrainer";
// import CourseCTA from "./components/CourseCTA";

// const InnovationCreativeThinkingCourse = () => {
//   const courseOutcomes = [
//     "Apply structured Design Thinking models to unpack complex business problems.",
//     "Formulate innovative solutions using divergent ideation frameworks.",
//     "Solve organizational issues by reframing and testing assumptions.",
//     "Evaluate ideas systematically using Six Thinking Hats and prioritization metrics.",
//     "Build low-fidelity prototypes and present breakthroughs to stakeholders."
//   ];

//   const whyUpwise = [
//     {
//       title: "Expert Faculty",
//       desc: "Our trainers are industry leaders with 10+ years of experience in design thinking and creative coaching.",
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
//       title: "Design Thinking",
//       desc: "Develop customer empathy maps, identify problem roots, and build customer journeys.",
//       icon: <Presentation size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Ideation Tools",
//       desc: "Learn divergent frameworks, SCAMPER techniques, and visual brainstorming methods.",
//       icon: <Zap size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Assumptions Reframing",
//       desc: "Challenge traditional processes and explore high-potential alternatives.",
//       icon: <MessageCircleMore size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Analytical Evaluation",
//       desc: "Structure and rate ideas using matrix filters, risk scores, and voting logs.",
//       icon: <FileSpreadsheet size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Fast Prototyping",
//       desc: "Adopt failure-tolerant testing loops to refine designs rapidly.",
//       icon: <Briefcase size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Innovation Culture",
//       desc: "Bring dynamic brainstorming and ideation standards to your business teams.",
//       icon: <TimerReset size={20} className="text-[#FFFFFF]" />
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
//               Innovation & Creative Thinking program designed to build breakthrough ideas.
//             </h1>
//           </div>
//           <div className="hidden md:block relative h-64 lg:h-96">
//             <div className="absolute right-0 top-0 w-full h-full bg-slate-200/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/40 shadow-lg">
//               <div className="relative w-full h-full">
//                 <img
//                   id="innovation-hero-img"
//                   src="/Gemini_Generated_Image_zib7yrzib7yrzib7.png"
//                   alt="Innovation Program"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//               </div>

//               <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
//                 <div className="flex items-center gap-2">
//                   <span className="h-2 w-2 rounded-full bg-white/70" />
//                   <span className="text-xs font-semibold text-white/90 bg-black/20 px-3 py-1 rounded-full border border-white/20">
//                     Creativity Training
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
//           To master structured Design Thinking phases, ideation methodologies (divergent/convergent structures), prototype builds, and pitching models. Equip yourself to generate and launch breakthrough ideas.
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
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">DESIGN THINKING</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Creating empathy maps and user personas</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Defining core problem statements and pain points</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Aligning solutions to user journeys</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">COGNITIVE BRAINSTORMS</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Divergent thinking vs Convergent filter logic</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Reframing organizational constraints and assumptions</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Leading creative brainwriting and sketching sessions</li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">PROBLEM SOLVING TOOLS</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Appraising solutions using Six Thinking Hats</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Deploying SCAMPER methodologies to reshape processes</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Sorting ideas using effort-impact grids</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">CONCEPT PROTOTYPES</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Low-fidelity prototyping (sketching, storyboarding)</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Setting up fast learning and pivot metrics</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Pitching final ideas to corporate stakeholders</li>
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
//               <p className="text-slate-700 font-medium">8 Hours</p>
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
//         courseName="Innovation & Creative Thinking" 
//         brochureUrl="/cover.png" 
//         brochureName="Innovation-Creative-Thinking-Brochure.png" 
//       />

//       <Footer />

//       {/* Floating WhatsApp Icon */}
//       <div className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors z-50 border-2 border-white">
//         <FaWhatsapp size={30} className="text-white" />
//       </div>

//     </div>
//   );
// };

// export default InnovationCreativeThinkingCourse;







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
  ChartColumn,
  Presentation,
  MessageCircleMore,
  ShieldCheck,
  Zap,
  Lightbulb,
  MessageSquare,
  Network,
  Wand2,
  BrainCircuit,
  Rocket,
  CalendarDays,
  Banknote,
  MonitorSmartphone
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { ChartColumnStacked } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Exeltrainer from "./components/Exeltrainer";
import CourseCTA from "./components/CourseCTA";

const InnovationCreativeThinkingCourse = () => {
  const courseOutcomes = [
    "Understand the neuroscience of creativity and how to unlock it deliberately at work.",
    "Apply structured creative thinking tools including SCAMPER, lateral thinking, and Six Thinking Hats.",
    "Use the design thinking process to develop human-centred solutions to real business challenges.",
    "Facilitate effective brainstorming sessions that generate quantity and quality of ideas.",
    "Build a team environment that fosters psychological safety and active idea-sharing.",
    "Move from ideas to implementation using prioritisation frameworks and 30-day experiments."
  ];

  const whyUpwise = [
    {
      title: "Expert Trainer",
      desc: "Learn directly from Ritu Arora, a Microsoft Certified Trainer.",
      color: "bg-[#f07b51]",
      icon: <Users size={20} className="text-white" />
    },
    {
      title: "Experiential Format",
      desc: "Highly experiential with 70% activities, group challenges, and design sprints.",
      color: "bg-[#f07b51]",
      icon: <Briefcase size={20} className="text-white" />
    },
    {
      title: "Practical Toolkit",
      desc: "Includes an innovation toolkit participants take away for use with their own teams.",
      color: "bg-[#f07b51]",
      icon: <Clock size={20} className="text-white" />
    },
    {
      title: "Resource Sharing",
      desc: "Share successful experiments, no matter how small.",
      color: "bg-[#f07b51]",
      icon: <BookOpen size={20} className="text-white" />
    },
    {
      title: "Target Audience",
      desc: "Open to all professionals regardless of role or experience level.",
      color: "bg-[#f07b51]",
      icon: <Target size={20} className="text-white" />
    },
    {
      title: "Prerequisites",
      desc: "No formal prerequisites needed to get started.",
      color: "bg-[#f07b51]",
      icon: <Award size={20} className="text-white" />
    }
  ];

  const benefitsTarget = [
    {
      title: "Innovation Mindset",
      desc: "Learn about the neuroscience of creativity, divergent thinking, and building innovation rituals.",
      icon: <BrainCircuit size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Brainstorming & Ideation",
      desc: "Run brainwriting, round-robin co-creation, and mind-mapping sessions safely.",
      icon: <MessageSquare size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Creativity Tools",
      desc: "Unlock business breakthroughs by deploying the SCAMPER methodology and Six Thinking Hats.",
      icon: <Lightbulb size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Design Thinking",
      desc: "Deploy five-stage HCD, empathy mapping, and journey maps on real challenges.",
      icon: <Wand2 size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Idea to Implementation",
      desc: "Pitch ideas clearly using impacted validation sheets and 2x2 feasibility grids.",
      icon: <Network size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "30-Day Experiments",
      desc: "Design quick sprints, testable hypotheses, and accountability actions.",
      icon: <Rocket size={20} className="text-[#FFFFFF]" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased overflow-x-hidden">

      {/* === TOP ORANGE BAR === */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-[#f07b51] text-white py-1.5 px-6 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
            <p>Upwise Training - Innovation & Creative Thinking</p>
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
              INNOVATION & CREATIVE THINKING <br className="hidden md:block" /> Unlock ideation and transform ideas into solutions.
            </h1>
            <p className="text-lg text-slate-700 mt-4">
              Designed for managers, team leads, and professionals seeking to develop problem-solving capabilities.
            </p>
          </div>
          <div className="hidden md:block relative h-64 lg:h-96">
            <div className="absolute right-0 top-0 w-full h-full bg-slate-200/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/40 shadow-lg">
              <div className="relative w-full h-full">
                <img
                  id="innovation-hero-img"
                  src="/Gemini_Generated_Image_zib7yrzib7yrzib7.png"
                  alt="Innovation Program"
                  className="absolute inset-0 w-full h-full object-fit"
                />
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* === OBJECTIVES === */}
      <section className="py-12 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#f07b51] mb-4">Programme Overview</h2>
        <p className="text-slate-600 leading-relaxed text-lg">
          Innovation is not a talent reserved for a creative few - it is a skill that can be deliberately developed. This immersive programme equips participants with the mindsets, frameworks, and tools to generate bold ideas, challenge assumptions, and turn creative thinking into tangible business solutions. Through experiential activities, real-world case studies, and a guided design thinking sprint, participants develop the ability to think differently - and to lead others to do the same.
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
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 1: The Innovation Mindset (1.5 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Defining innovation vs. creativity vs. invention</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Carol Dweck growth mindset and unlocking beginner's mind (Shoshin)</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Amy Edmondson psychological safety and cognitive diversity dynamics</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 2: Creative Thinking Techniques (2 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Brainwriting (6-3-5 method), round-robin, and improv sharing rules</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> SCAMPER methodology with worked business examples</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Edward de Bono Six Thinking Hats group application</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 3: Design Thinking Sprint (2.5 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Stanford d.school HCD disciplines and Crazy 8s prototyping models</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Empathy mapping, user journey plots, and 'How Might We' problem setups</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Rapid prototyping stories and testing loops</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 4: Ideas to Implementation (2 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> One-page Idea Napkins and 2x2 impact-effort matrices</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Structuring 30-day corporate ideation experiments</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Innovation rituals: hackathons, ideation reviews, and retrospectives</li>
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
            <p className="text-slate-600 mt-3">70% experiential activities, group challenges, and design sprints.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
              <Clock className="text-[#f07b51] mb-3" size={28} strokeWidth={1.5} />
              <h3 className="text-slate-800 font-bold text-lg mb-2">Duration</h3>
              <p className="text-slate-600 font-medium">1 DAY, 8 HOURS</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
              <MonitorSmartphone className="text-[#f07b51] mb-3" size={28} strokeWidth={1.5} />
              <h3 className="text-slate-800 font-bold text-lg mb-2">Format</h3>
              <p className="text-slate-600 font-medium">Experiential (70% activities)</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
              <Users className="text-[#f07b51] mb-3" size={28} strokeWidth={1.5} />
              <h3 className="text-slate-800 font-bold text-lg mb-2">Audience</h3>
              <p className="text-slate-600 font-medium">Managers, problem-solvers</p>
            </div>

            <div className="bg-[#f07b51] rounded-2xl p-6 text-center flex flex-col justify-center items-center">

              <h3 className="text-white font-bold text-lg mb-4">Course Fee</h3>
              <button className="bg-white text-[#f07b51] font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition-all w-full">
                Enquire Now
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
        courseName="Innovation & Creative Thinking"
        brochureUrl="/cover.png"
        brochureName="Innovation-Creative-Thinking-Brochure.png"
      />

      <Footer />

      {/* Floating WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors z-50 border-2 border-white">
        <FaWhatsapp size={30} className="text-white" />
      </div>

    </div>
  );
};

export default InnovationCreativeThinkingCourse;