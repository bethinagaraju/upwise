// import React from "react";
// import { Flame } from "lucide-react";

// // Array of logo SVG components
// const logos = [
//   {
//     name: "Microsoft",
//     className: "animate-float1 left-12 top-14",
//     size: 50,
//     svg: (
//       <svg width="50" height="50" viewBox="0 0 48 48">
//         <g>
//           <rect fill="#F25022" x="1" y="1" width="22" height="22" />
//           <rect fill="#7FBA00" x="25" y="1" width="22" height="22" />
//           <rect fill="#00A4EF" x="1" y="25" width="22" height="22" />
//           <rect fill="#FFB900" x="25" y="25" width="22" height="22" />
//         </g>
//       </svg>
//     ),
//   },
//   {
//     name: "Excel",
//     className: "animate-float2 right-16 top-24",
//     size: 54,
//     svg: (
//       <svg width="54" height="54" viewBox="0 0 48 48">
//         <rect width="48" height="48" rx="8" fill="#217346" />
//         <text x="24" y="32" textAnchor="middle" fontFamily="Arial" fontWeight="bold" fontSize="22" fill="#fff">X</text>
//       </svg>
//     ),
//   },
//   {
//     name: "Power BI",
//     className: "animate-float3 left-24 bottom-20",
//     size: 54,
//     svg: (
//       <svg width="54" height="54" viewBox="0 0 48 48">
//         <rect x="9" y="20" width="6" height="17" rx="3" fill="#F3C205"/>
//         <rect x="20" y="11" width="6" height="26" rx="3" fill="#F3C205"/>
//         <rect x="31" y="16" width="6" height="21" rx="3" fill="#F3C205"/>
//       </svg>
//     ),
//   },
//   {
//     name: "Copilot",
//     className: "animate-float4 right-24 bottom-24",
//     size: 52,
//     svg: (
//       // Copilot (simplified "8" style, official color)
//       <svg width="52" height="52" viewBox="0 0 48 48">
//         <g>
//           <ellipse cx="16" cy="24" rx="10" ry="12" fill="#A3B3F7"/>
//           <ellipse cx="32" cy="24" rx="10" ry="12" fill="#75C4F9"/>
//         </g>
//       </svg>
//     ),
//   },
//   {
//     name: "Outlook",
//     className: "animate-float5 left-1/2 top-1/3",
//     size: 46,
//     svg: (
//       <svg width="46" height="46" viewBox="0 0 48 48">
//         <rect x="10" y="10" width="28" height="28" rx="3" fill="#0072C6" />
//         <rect x="10" y="14" width="28" height="9" rx="1.5" fill="#fff" />
//         <rect x="10" y="29" width="28" height="9" rx="1.5" fill="#00569C" />
//       </svg>
//     ),
//   },
//   {
//     name: "Teams",
//     className: "animate-float4 left-1/3 top-2/3",
//     size: 54,
//     svg: (
//       <svg width="54" height="54" viewBox="0 0 48 48">
//         <rect x="8" y="12" width="32" height="24" rx="4" fill="#6264A7" />
//         <circle cx="14" cy="18" r="4" fill="#D2D2FF" />
//         <rect x="20" y="18" width="16" height="12" rx="1.5" fill="#fff" />
//       </svg>
//     ),
//   },
//   {
//     name: "PowerPoint",
//     className: "animate-float3 right-4 top-1/2",
//     size: 46,
//     svg: (
//       <svg width="46" height="46" viewBox="0 0 48 48">
//         <circle cx="24" cy="24" r="20" fill="#D24726" />
//         <rect x="13" y="19" width="22" height="9" rx="2" fill="#fff" />
//         <rect x="13" y="19" width="8" height="9" rx="2" fill="#D24726" opacity="0.6"/>
//       </svg>
//     ),
//   },
// ];

// const HeroSection: React.FC = () => {
//   return (
//     <section className="relative h-[90vh] bg-[#f89763] overflow-hidden p-24">
//       {/* Animated Background Logos */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {logos.map((item, i) => (
//           <span
//             key={i}
//             // className={`absolute opacity-25 sm:opacity-40 blur-sm transition-transform duration-500 ${item.className}`}
//             className={`absolute opacity-25 sm:opacity-40 blur-xs transition-transform duration-500 ${item.className}`}

//             style={{ zIndex: 1 }}
//             aria-hidden="true"
//           >
//             {item.svg}
//           </span>
//         ))}
//       </div>
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <div className="flex justify-center mb-6">
//             <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full flex items-center space-x-5">
//               <Flame className="w-12 h-12" />
//               <span className="text-5xl font-bold">IGNITE</span>
//             </div>
//           </div>

//           <br/>

//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//             <span className="inline-block animate-slideInLeft">Master</span>{' '}
//             <span className="inline-block animate-slideInRight">Microsoft</span>{' '}
//             <span className="inline-block animate-slideInUp">Office,</span><br />
            
//             <span className="inline-block animate-fadeInScale bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
//               AI & Power BI
//             </span>

//           </h1>
//           <p className="text-xl md:text-2xl font-bold text-[#4a4a4a] mb-8 max-w-4xl mx-auto animate-typewriter">
//             For the Future-Ready Workplace
//           </p>
//           <p className="text-lg text-[#4a4a4a] mb-10 animate-fadeInUp delay-1000">
//             By <strong className="text-[#4a4a4a] font-bold animate-pulse">Ritu Arora</strong> – <span className="text-[#4a4a4a]">Microsoft Specialist | AI Trainer | Corporate Productivity Coach</span>
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-orange-500 border-2 border-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-all">
//               Book Corporate Batch
//             </button>
//             <button className="bg-orange-500 border-2 border-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-all">
//               Download Brochure
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Custom animations */}
//       <style>
//         {`
//           @keyframes float1 { 0% { transform: translateY(0);} 50% {transform: translateY(-30px);} 100%{ transform: translateY(0);} }
//           @keyframes float2 { 0% { transform: translateX(0);} 50% {transform: translateX(-25px);} 100%{ transform: translateX(0);} }
//           @keyframes float3 { 0% { transform: scale(1);} 50% {transform: scale(1.08);} 100%{ transform: scale(1);} }
//           @keyframes float4 { 0% { transform: translateY(0);} 50% {transform: translateY(18px);} 100%{ transform: translateY(0);} }
//           @keyframes float5 { 0% { opacity: 0.15;} 50% {opacity: 0.3;} 100%{ opacity: 0.15;} }
//           .animate-float1 { animation: float1 6s ease-in-out infinite; }
//           .animate-float2 { animation: float2 7s ease-in-out infinite; }
//           .animate-float3 { animation: float3 5s ease-in-out infinite; }
//           .animate-float4 { animation: float4 8s ease-in-out infinite; }
//           .animate-float5 { animation: float5 4s ease-in-out infinite; }

//           /* Text Animations */
//           @keyframes slideInLeft {
//             0% { transform: translateX(-100px); opacity: 0; }
//             100% { transform: translateX(0); opacity: 1; }
//           }
//           @keyframes slideInRight {
//             0% { transform: translateX(100px); opacity: 0; }
//             100% { transform: translateX(0); opacity: 1; }
//           }
//           @keyframes slideInUp {
//             0% { transform: translateY(50px); opacity: 0; }
//             100% { transform: translateY(0); opacity: 1; }
//           }
//           @keyframes fadeInScale {
//             0% { transform: scale(0.8); opacity: 0; }
//             100% { transform: scale(1); opacity: 1; }
//           }
//           @keyframes typewriter {
//             0% { width: 0; opacity: 0; }
//             100% { width: 100%; opacity: 1; }
//           }
//           @keyframes fadeInUp {
//             0% { transform: translateY(30px); opacity: 0; }
//             100% { transform: translateY(0); opacity: 1; }
//           }

//           .animate-slideInLeft { animation: slideInLeft 1s ease-out forwards; }
//           .animate-slideInRight { animation: slideInRight 1s ease-out 0.3s forwards; }
//           .animate-slideInUp { animation: slideInUp 1s ease-out 0.6s forwards; }
//           .animate-fadeInScale { animation: fadeInScale 1.2s ease-out 0.9s forwards; }
//           .animate-typewriter { 
//             animation: typewriter 2s ease-out 1.2s forwards;
//             overflow: hidden;
//             white-space: nowrap;
//             margin: 0 auto;
//           }
//           .animate-fadeInUp { animation: fadeInUp 1s ease-out 1.5s forwards; }
//           .delay-1000 { animation-delay: 1.5s; }
//         `}
//       </style>
//     </section>
//   );
// };

// export default HeroSection;











import React from "react";
import { Flame } from "lucide-react";

// Array of logo SVG components
const logos = [
  {
    name: "Microsoft",
    className: "animate-float1 left-1/4 top-1/4 sm:left-12 sm:top-14",
    svg: (
      <svg width="50" height="50" viewBox="0 0 48 48">
        <g>
          <rect fill="#F25022" x="1" y="1" width="22" height="22" />
          <rect fill="#7FBA00" x="25" y="1" width="22" height="22" />
          <rect fill="#00A4EF" x="1" y="25" width="22" height="22" />
          <rect fill="#FFB900" x="25" y="25" width="22" height="22" />
        </g>
      </svg>
    ),
  },
  {
    name: "Excel",
    className: "animate-float2 right-1/4 top-1/2 sm:right-16 sm:top-24",
    svg: (
      <svg width="54" height="54" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#217346" />
        <text x="24" y="32" textAnchor="middle" fontFamily="Arial" fontWeight="bold" fontSize="22" fill="#fff">X</text>
      </svg>
    ),
  },
  {
    name: "Power BI",
    className: "animate-float3 left-1/4 bottom-1/4 sm:left-24 sm:bottom-20",
    svg: (
      <svg width="54" height="54" viewBox="0 0 48 48">
        <rect x="9" y="20" width="6" height="17" rx="3" fill="#F3C205"/>
        <rect x="20" y="11" width="6" height="26" rx="3" fill="#F3C205"/>
        <rect x="31" y="16" width="6" height="21" rx="3" fill="#F3C205"/>
      </svg>
    ),
  },
  {
    name: "Copilot",
    className: "animate-float4 right-1/4 bottom-1/4 sm:right-24 sm:bottom-24",
    svg: (
      <svg width="52" height="52" viewBox="0 0 48 48">
        <g>
          <ellipse cx="16" cy="24" rx="10" ry="12" fill="#A3B3F7"/>
          <ellipse cx="32" cy="24" rx="10" ry="12" fill="#75C4F9"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Outlook",
    className: "animate-float5 left-1/2 top-1/3 sm:left-1/2 sm:top-1/3",
    svg: (
      <svg width="46" height="46" viewBox="0 0 48 48">
        <rect x="10" y="10" width="28" height="28" rx="3" fill="#0072C6" />
        <rect x="10" y="14" width="28" height="9" rx="1.5" fill="#fff" />
        <rect x="10" y="29" width="28" height="9" rx="1.5" fill="#00569C" />
      </svg>
    ),
  },
  {
    name: "Teams",
    className: "animate-float4 left-1/3 top-2/3 sm:left-1/3 sm:top-2/3",
    svg: (
      <svg width="54" height="54" viewBox="0 0 48 48">
        <rect x="8" y="12" width="32" height="24" rx="4" fill="#6264A7" />
        <circle cx="14" cy="18" r="4" fill="#D2D2FF" />
        <rect x="20" y="18" width="16" height="12" rx="1.5" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "PowerPoint",
    className: "animate-float3 right-1/4 top-1/2 sm:right-4 sm:top-1/2",
    svg: (
      <svg width="46" height="46" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="#D24726" />
        <rect x="13" y="19" width="22" height="9" rx="2" fill="#fff" />
        <rect x="13" y="19" width="8" height="9" rx="2" fill="#D24726" opacity="0.6"/>
      </svg>
    ),
  },
];

const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        background: "radial-gradient(circle at center, #ffffffff, #f8976334)",
      }}
      className="relative h-screen overflow-hidden p-6 sm:p-24"
    >
      {/* Animated Background Logos */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {logos.map((item, i) => (
          <span
            key={i}
            className={`absolute opacity-25 sm:opacity-40 blur-xs transition-transform duration-500 ${item.className}`}
            style={{ zIndex: 1 }}
            aria-hidden="true"
          >
            {item.svg}
          </span>
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center space-x-3 sm:space-x-5">
              <Flame className="w-8 h-8 sm:w-12 sm:h-12" />
              <span className="text-2xl sm:text-5xl font-bold">IGNITE</span>
            </div>
          </div>

          <br/>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="inline-block animate-slideInLeft text-[#f89763]">Master</span>{' '}
          <span className="inline-block animate-slideInRight text-[#f89763]">Microsoft</span>{' '}
          <span className="inline-block animate-slideInUp text-[#f89763]">Office,</span><br />
            
            <span className="inline-block animate-fadeInScale bg-gradient-to-r from-[#f89763] to-[#f89763] bg-clip-text text-transparent">
              AI & Power BI
            </span>
          </h1>
          <p className="text-lg md:text-2xl font-bold text-[#4a4a4a] mb-8 max-w-4xl mx-auto animate-typewriter">
            For the Future-Ready Workplace
          </p>
          <p className="text-md sm:text-lg text-[#4a4a4a] mb-10 animate-fadeInUp delay-1000">
            By <strong className="text-[#f89763] font-bold animate-pulse">Ritu Arora</strong> – <span className="text-[#4a4a4a]">Microsoft Specialist | AI Trainer | Corporate Productivity Coach</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 border-2 border-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-all">
              Book Corporate Batch
            </button>
            <button className="bg-orange-500 border-2 border-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
      {/* Custom animations */}
      <style>
        {`
          @keyframes float1 { 0% { transform: translateY(0);} 50% {transform: translateY(-30px);} 100%{ transform: translateY(0);} }
          @keyframes float2 { 0% { transform: translateX(0);} 50% {transform: translateX(-25px);} 100%{ transform: translateX(0);} }
          @keyframes float3 { 0% { transform: scale(1);} 50% {transform: scale(1.08);} 100%{ transform: scale(1);} }
          @keyframes float4 { 0% { transform: translateY(0);} 50% {transform: translateY(18px);} 100%{ transform: translateY(0);} }
          @keyframes float5 { 0% { opacity: 0.15;} 50% {opacity: 0.3;} 100%{ opacity: 0.15;} }
          .animate-float1 { animation: float1 6s ease-in-out infinite; }
          .animate-float2 { animation: float2 7s ease-in-out infinite; }
          .animate-float3 { animation: float3 5s ease-in-out infinite; }
          .animate-float4 { animation: float4 8s ease-in-out infinite; }
          .animate-float5 { animation: float5 4s ease-in-out infinite; }

          /* Text Animations */
          @keyframes slideInLeft {
            0% { transform: translateX(-100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            0% { transform: translateX(100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInUp {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeInScale {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes typewriter { 
            from { width: 0; }
            to { width: 100%; }
          }
          .animate-typewriter {
            overflow: hidden;
            white-space: nowrap;
            margin: 0 auto;
            animation: typewriter 2s ease-out 1.2s forwards;
          }
          @keyframes fadeInUp {
            0% { transform: translateY(30px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }

          .animate-slideInLeft { animation: slideInLeft 1s ease-out forwards; }
          .animate-slideInRight { animation: slideInRight 1s ease-out 0.3s forwards; }
          .animate-slideInUp { animation: slideInUp 1s ease-out 0.6s forwards; }
          .animate-fadeInScale { animation: fadeInScale 1.2s ease-out 0.9s forwards; }
          .delay-1000 { animation-delay: 1.5s; }
        `}
      </style>
    </section>
  );
};

export default HeroSection;