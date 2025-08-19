// import React from 'react';
// import { motion } from 'framer-motion';
// import { Star, Users2, TrendingUp } from 'lucide-react';

// const highlights = [
//   {
//     icon: Star,
//     title: '25+ Years of Excellence',
//     body:
//       'Over two decades of delivering corporate learning solutions that stick. Fortune 500s choose us for lasting impact.',
//     gradient: 'from-yellow-400 via-orange-300 to-amber-500',
//     iconBg: 'from-yellow-500 to-yellow-600',
//   },
//   {
//     icon: Users2,
//     title: 'People‑First Pedagogy',
//     body:
//       'Our methodology prioritizes human growth, psychological safety, and collaborative team dynamics for real‑world change.',
//     gradient: 'from-[#FB9E3A] via-[#F9D67A] to-[#F7C948]',
//     iconBg: 'from-sky-500 to-sky-600',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Proven, Measurable Results',
//     body:
//       '99% NPS, 30k+ professionals upskilled, and best‑in‑class ROI dashboards—data that speaks louder than claims.',
//     gradient: 'from-[#FB9E3A] via-[#F9D67A] to-[#F7C948]',
//     iconBg: 'from-emerald-500 to-emerald-600',
//   },
// ];

// const WhyUpwise: React.FC = () => {
//   return (
//     <section id="about" className="relative overflow-hidden py-16 lg:py-20 bg-[#f89763]">
//       {/* Background decorations */}
//       <div className="absolute -top-44 -left-32 w-96 h-96 bg-gradient-to-br from-warm-coral-200 to-light-peach-200 rounded-full blur-3xl opacity-40 pointer-events-none" />
//       <div className="absolute -bottom-64 -right-40 w-[28rem] h-[28rem] bg-gradient-to-br from-terracotta-300 to-warm-coral-300 rounded-full blur-3xl opacity-30 pointer-events-none" />

//       <div className="max-w-5xl mx-auto px-4 sm:px-6">
//         {/* Section Tag */}
//         <motion.span
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="inline-block mb-6 px-4 py-2 text-sm font-semibold rounded-full border border-white text-white"
//         >
//           ✨ Why Choose Upwise?
//         </motion.span>

//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.15 }}
//           viewport={{ once: true }}
//           className="text-center text-5xl lg:text-6xl font-extrabold tracking-tight text-deep-navy-800 mb-16"
//         >
//           Clarity-Driven Learning with{' '}
//           <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
//             Proven Impact
//           </span>
//         </motion.h2>

//         {/* Highlight Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {highlights.map(({ icon: Icon, title, body, gradient, iconBg }, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
//               viewport={{ once: true }}
//               className="relative overflow-hidden rounded-3xl p-px group transition-transform duration-300 ease-in-out hover:scale-[1.025]"
//             >
//               {/* Gradient Border */}
//               <div
//                 className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient}`}
//               />

//               {/* Glassy Inner Card */}
//               <div className="relative z-10 h-full w-full rounded-3xl bg-white/75 backdrop-blur-md p-8 shadow-xl">
//                 <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${iconBg} shadow-md`}>
//                   <Icon size={24} className="text-white" />
//                 </div>
//                 <h3 className="mb-3 text-lg font-semibold text-deep-navy-800">
//                   {title}
//                 </h3>
//                 <p className="text-sm leading-relaxed text-soft-grey-600">
//                   {body}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUpwise;









import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users2, TrendingUp } from 'lucide-react';
import Theorys from './Theorys';

const highlights = [
  {
    icon: Star,
    title: '25+ Years of Excellence',
    body:
      'Over two decades of delivering corporate learning solutions that stick. Fortune 500s choose us for lasting impact.',
    gradient: 'from-yellow-400 via-orange-300 to-amber-500',
    iconBg: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Users2,
    title: 'People‑First Pedagogy',
    body:
      'Our methodology prioritizes human growth, psychological safety, and collaborative team dynamics for real‑world change.',
    gradient: 'from-[#FB9E3A] via-[#F9D67A] to-[#F7C948]',
    iconBg: 'from-sky-500 to-sky-600',
  },
  {
    icon: TrendingUp,
    title: 'Proven, Measurable Results',
    body:
      '99% NPS, 30k+ professionals upskilled, and best‑in‑class ROI dashboards—data that speaks louder than claims.',
    gradient: 'from-[#FB9E3A] via-[#F9D67A] to-[#F7C948]',
    iconBg: 'from-emerald-500 to-emerald-600',
  },
];

const WhyUpwise: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden py-16 lg:py-20 bg-[#f89763]">
      {/* Background decorations */}
      <div
        className="absolute -top-44 -left-32 w-96 h-96 rounded-full blur-3xl opacity-40 pointer-events-none"
        // style={{
        //   background: 'radial-gradient(circle at center, #fcd5b2, #f8b76d)',
        // }}

        style={{
          background: 'radial-gradient(circle at center, #ffffffff, #f8976334)',
        }}
      />
      <div
        className="absolute -bottom-64 -right-40 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #ea9a73, #f39763)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block mb-6 px-4 py-2 text-sm font-semibold rounded-full bg-white border border-[#f89763] text-[#f89763]"
        >
          ✨ Why Choose Upwise?
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a1a2e] mb-16"
        >
          Clarity-Driven Learning with{' '}
          <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
            Proven Impact
          </span>
        </motion.h2>

     
        <Theorys />

      </div>
    </section>
  );
};

export default WhyUpwise;
