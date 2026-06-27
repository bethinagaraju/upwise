// import React from "react";
// import {
//   Phone,
//   Mail,
//   ChevronRight,
//   Award,
//   Users,
//   Clock,
//   BookOpen,
//   Briefcase,
//   Target,
//   FileSpreadsheet,
//   TimerReset,
//   Presentation,
//   MessageCircleMore,
//   Zap,
// } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa6";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Testimonials from "../components/Testimonials";
// import Exeltrainer from "./components/Exeltrainer";
// import CourseCTA from "./components/CourseCTA";

// const EmotionalIntelligenceCourse = () => {
//   const courseOutcomes = [
//     "Recognize personal emotional triggers and regulate responses under stress.",
//     "Apply empathy maps to understand peer and team motivations.",
//     "Navigate complex social dynamics with sensitivity and tact.",
//     "Establish trust and manage leader-team relationships with authenticity.",
//     "Influence and inspire others by communicating with emotional awareness."
//   ];

//   const whyUpwise = [
//     {
//       title: "Expert Faculty",
//       desc: "Our trainers are industry leaders with 10+ years of experience in leadership development and emotional intelligence coaching.",
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
//       desc: "Comprehensive study materials, self-assessment tools, and recorded sessions provided for future reference.",
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
//       title: "Stress Regulation",
//       desc: "Learn to pause and choose thoughtful actions instead of reacting under high-pressure scenarios.",
//       icon: <Presentation size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Empathy Mapping",
//       desc: "Understand the unstated needs and motivations of teammates to guide them effectively.",
//       icon: <Zap size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Social Savvy",
//       desc: "Recognize unspoken group dynamics to guide meetings and alignments successfully.",
//       icon: <MessageCircleMore size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Authentic Relations",
//       desc: "Form genuine professional bonds that encourage transparency and collaboration.",
//       icon: <FileSpreadsheet size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Conflict Resolution",
//       desc: "De-escalate tense workplace arguments with active listening and collaborative solutions.",
//       icon: <Briefcase size={20} className="text-[#FFFFFF]" />
//     },
//     {
//       title: "Leadership Impact",
//       desc: "Exert influence by aligning with the values, goals, and emotions of other stakeholders.",
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
//               Emotional Intelligence training program built for corporate leaders.
//             </h1>
//           </div>
//           <div className="hidden md:block relative h-64 lg:h-96">
//             <div className="absolute right-0 top-0 w-full h-full bg-slate-200/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/40 shadow-lg">
//               <div className="relative w-full h-full">
//                 <img
//                   id="emotional-intelligence-hero-img"
//                   src="/Gemini_Generated_Image_u499utu499utu499.png"
//                   alt="Emotional Intelligence Program"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//               </div>

//               <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
//                 <div className="flex items-center gap-2">
//                   <span className="h-2 w-2 rounded-full bg-white/70" />
//                   <span className="text-xs font-semibold text-white/90 bg-black/20 px-3 py-1 rounded-full border border-white/20">
//                     EQ Training
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
//           To cultivate emotional intelligence by building self-awareness, deep empathy, social sensitivity, self-regulation, and relational leadership skills to guide high-performing teams.
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
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">SELF-AWARENESS & REGULATION</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Understanding the neuroscience of emotions and triggers</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Self-regulation techniques to maintain clarity under pressure</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Constructing a personal feedback loop for self-awareness</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">EMPATHY & SOCIAL SENSITIVITY</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Building deep empathy and understanding different perspectives</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Reading social cues, micro-expressions, and group dynamics</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Cultivating sensitivity across diverse backgrounds and values</li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">LEADERSHIP RELATIONSHIP MANAGEMENT</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Establishing authentic trust and open dialog as a leader</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Navigating power dynamics and resolving interpersonal conflict</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Constructive feedback loops utilizing emotional intelligence</li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">INFLUENCING & INSPIRING</h3>
//               <ul className="space-y-2 text-slate-600 px-4">
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Communicating vision with genuine emotional resonance</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Motivating teams during periods of organizational change</li>
//                 <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Building collaboration networks based on mutual respect</li>
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
//         courseName="Emotional Intelligence" 
//         brochureUrl="/cover.png" 
//         brochureName="Emotional-Intelligence-Brochure.png" 
//       />

//       <Footer />

//       {/* Floating WhatsApp Icon */}
//       <div className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors z-50 border-2 border-white">
//         <FaWhatsapp size={30} className="text-white" />
//       </div>

//     </div>
//   );
// };

// export default EmotionalIntelligenceCourse;



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
  Zap,
  BrainCircuit,
  Heart,
  Smile,
  MessagesSquare,
  Settings,
  UserCheck
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { ChartColumnStacked } from 'lucide-react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Exeltrainer from "./components/Exeltrainer";
import CourseCTA from "./components/CourseCTA";

const EmotionalIntelligenceCourse = () => {
  const courseOutcomes = [
    "Understand the science of emotional intelligence and why it drives performance and wellbeing.",
    "Develop deeper self-awareness of personal emotions, triggers, and behavioural patterns.",
    "Build self-management skills to regulate emotions and respond rather than react.",
    "Strengthen social awareness by reading others accurately and building empathy.",
    "Master relationship management tools to navigate conflict and build high-trust teams."
  ];

  const whyUpwise = [
    {
      title: "Expert Faculty",
      desc: "Learn directly from Ritu Arora, a Microsoft Certified Trainer.",
      color: "bg-[#f07b51]",
      icon: <UserCheck size={20} className="text-white" />
    },
    {
      title: "Practical Approach",
      desc: "Highly experiential and reflective, delivered in a psychologically safe environment.",
      color: "bg-[#f07b51]",
      icon: <Briefcase size={20} className="text-white" />
    },
    {
      title: "Learning Tools",
      desc: "Includes self-assessment, paired and group exercises, and real-situation practice.",
      color: "bg-[#f07b51]",
      icon: <Clock size={20} className="text-white" />
    },
    {
      title: "Target Audience",
      desc: "Suitable for all professionals at any level - individual contributors, managers, and leaders.",
      color: "bg-[#f07b51]",
      icon: <BookOpen size={20} className="text-white" />
    },
    {
      title: "Personal Plan",
      desc: "Leave with a personal EQ development plan: specific habits, practices, and a 30-day commitment.",
      color: "bg-[#f07b51]",
      icon: <Target size={20} className="text-white" />
    },
    {
      title: "Certification",
      desc: "Receive a completion certificate that adds significant value to your professional resume.",
      color: "bg-[#f07b51]",
      icon: <Award size={20} className="text-white" />
    }
  ];

  const benefitsTarget = [
    {
      title: "Self-Awareness",
      desc: "Unpack the physiology of emotions and map your personal emotional triggers.",
      icon: <BrainCircuit size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Self-Management",
      desc: "Regulate responses under pressure and learn to pause instead of react.",
      icon: <ShieldCheck size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Social Awareness",
      desc: "Develop deep empathy, perspective-taking, and active listening models.",
      icon: <Heart size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Relationship Management",
      desc: "Build rapport, repair friction, and influence through emotional connection.",
      icon: <Smile size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Conflict Resolution",
      desc: "Approach conflict with curiosity, de-escalate friction, and separate person from problem.",
      icon: <MessagesSquare size={20} className="text-[#FFFFFF]" />
    },
    {
      title: "Leadership Impact",
      desc: "Inspire and motivate others through clear emotional communication, matching message to mood.",
      icon: <Settings size={20} className="text-[#FFFFFF]" />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased overflow-x-hidden">

      {/* === TOP ORANGE BAR === */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-[#f07b51] text-white py-1.5 px-6 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
            <p>Upwise Training - Emotional Intelligence</p>
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
              EMOTIONAL INTELLIGENCE <br className="hidden md:block" /> Develop self-awareness, empathy, and leadership impact.
            </h1>
            <p className="text-lg text-slate-700 mt-4">
              Designed for professionals at all levels - individual contributors, managers, and leaders seeking stronger relationships.
            </p>
          </div>
          <div className="hidden md:block relative h-64 lg:h-96">
            <div className="absolute right-0 top-0 w-full h-full bg-slate-200/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/40 shadow-lg">
              <div className="relative w-full h-full">
                <img
                  id="emotional-intelligence-hero-img"
                  src="/Gemini_Generated_Image_u499utu499utu499.png"
                  alt="Emotional Intelligence Program"
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
          Emotional intelligence (EQ) is consistently shown to be a stronger predictor of success and leadership effectiveness than IQ or technical skill alone. The good news: unlike IQ, emotional intelligence can be developed. This programme builds practical capability across the four domains of EQ - self-awareness, self-management, social awareness, and relationship management - giving participants tools to manage their own emotions, read others accurately, navigate conflict, and build stronger, more trusting relationships at work and beyond.
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
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 1: Foundations of EQ (1.5 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> The science of emotional intelligence and why it drives performance and wellbeing</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> The emotional brain: amygdala hijack and physiological responses to stress</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> The four-quadrant EQ framework (Goleman/Bradberry) overview</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 2: Self-Awareness & Self-Management (2 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Identifying personal emotional triggers and blind spots</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Self-regulation techniques: the power of the pause and reframing thoughts</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Managing emotional reactivity during high-pressure scenarios</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 3: Social Awareness (2 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Reading people: observing micro-expressions, body language, and tone</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Developing cognitive empathy: stepping into others' perspectives safely</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Organisational antenna: tuning into team moods, morale, and unstated needs</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-4 bg-slate-100 py-2 px-4 border-l-4 border-[#f07b51]">Module 4: Relationship Management (2.5 Hours)</h3>
              <ul className="space-y-2 text-slate-600 px-4">
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Authentic communication: being specific, consistent, and emotionally honest</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Conflict de-escalation: approaching friction with curiosity, separating person from problem</li>
                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-[#f07b51] mt-1.5 flex-shrink-0" /> Giving difficult messages with empathy, clarity, and relationship preservation</li>
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
            <p className="text-slate-600 mt-3">Highly experiential and reflective learning options.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
              <Clock className="text-[#f07b51] mb-3" size={28} strokeWidth={1.5} />
              <h3 className="text-slate-800 font-bold text-lg mb-2">Duration</h3>
              <p className="text-slate-600 font-medium">1 DAY (8 HOURS)</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
              <Presentation className="text-[#f07b51] mb-3" size={28} strokeWidth={1.5} />
              <h3 className="text-slate-800 font-bold text-lg mb-2">Format</h3>
              <p className="text-slate-600 font-medium">Experiential & reflective</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
              <Users className="text-[#f07b51] mb-3" size={28} strokeWidth={1.5} />
              <h3 className="text-slate-800 font-bold text-lg mb-2">Audience</h3>
              <p className="text-slate-600 font-medium">All Professionals</p>
            </div>

            <div className="bg-[#f07b51] rounded-2xl p-6 text-center flex flex-col justify-center items-center">

              <h3 className="text-white font-bold text-lg mb-4">Course Fee</h3>
              <button className="bg-white text-[#f07b51] font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition-all w-full">
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
        courseName="Emotional Intelligence"
        brochureUrl="/cover.png"
        brochureName="Emotional-Intelligence-Brochure.png"
      />

      <Footer />

      {/* Floating WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors z-50 border-2 border-white">
        <FaWhatsapp size={30} className="text-white" />
      </div>

    </div>
  );
};

export default EmotionalIntelligenceCourse;