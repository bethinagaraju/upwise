// // import React, { useEffect, useRef, useState } from 'react';
// // import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

// // /* ───────── LOGOS (remote URLs) ───────── */
// // interface CompanyLogo {
// //   name: string;
// //   src: string;
// //   fortune500: boolean;
// // }

// // const COMPANY_LOGOS: CompanyLogo[] = [
// //   {
// //     name: 'Microsoft',
// //     src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
// //     fortune500: true,
// //   },
// //   {
// //     name: 'Amazon',
// //     src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
// //     fortune500: true,
// //   },
// //   {
// //     name: 'Spotify',
// //     src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Accenture',
// //     src: 'https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png',
// //     fortune500: true,
// //   },
// //   {
// //     name: 'HubSpot',
// //     src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/1920px-HubSpot_Logo.svg.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Cisco',
// //     src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1920px-Cisco_logo_blue_2016.svg.png',
// //     fortune500: true,
// //   },
// // ];




// // CompanyLogo[] = [
// //   {
// //     name: 'Fake Company 1',
// //     src: 'org11.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 2',
// //     src: 'org12.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 3',
// //     src: 'org13.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 4',
// //     src: 'org14.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 5',
// //     src: 'org15.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 6',
// //     src: 'org16.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 7',
// //     src: 'org17.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 8',
// //     src: 'org18.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 9',
// //     src: 'org19.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 10',
// //     src: 'org20.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 11',
// //     src: 'org21.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 12',
// //     src: 'org22.png',
// //     fortune500: false,
// //   },
// // ];

// // /* ───────── Animated Number ───────── */
// // interface AnimatedNumberProps {
// //   value: string | number;
// //   duration?: number;
// //   play?: boolean;
// // }

// // const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
// //   value,
// //   duration = 2,
// //   play = false,
// // }) => {
// //   const target = Number(String(value).replace(/[^\d]/g, ''));
// //   const suffix = String(value).replace(/\d+/g, '');
// //   const mv = useMotionValue(0);
// //   const formatted = useTransform(mv, v => Math.floor(v).toLocaleString());
// //   const [txt, setTxt] = useState<string>('0'); // Explicitly type useState

// //   useEffect(() => {
// //     if (!play) return;
// //     const controls = animate(mv, target, { duration, ease: 'easeOut' });
// //     const unsub = formatted.on('change', v => setTxt(v));
// //     return () => {
// //       controls.stop();
// //       unsub();
// //     };
// //   }, [play, target, duration, mv, formatted]); // Added mv and formatted to dependency array

// //   return (
// //     <span>
// //       {txt}
// //       {suffix}
// //     </span>
// //   );
// // };

// // /* ───────── Main Component ───────── */
// // const ClientTrust: React.FC = () => { // Corrected component name
// //   const sectionRef = useRef<HTMLElement>(null); // Specify type for useRef
// //   const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

// //   const logosLoop = [...COMPANY_LOGOS, ...COMPANY_LOGOS];




  
// // const CompanyLogosOne: CompanyLogo[] = [
// //   {
// //     name: 'Fake Company 1',
// //     src: 'org11.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 2',
// //     src: 'org12.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 3',
// //     src: 'org13.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 4',
// //     src: 'org14.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 5',
// //     src: 'org15.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 6',
// //     src: 'org16.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 7',
// //     src: 'org17.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 8',
// //     src: 'org18.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 9',
// //     src: 'org19.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 10',
// //     src: 'org20.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 11',
// //     src: 'org21.png',
// //     fortune500: false,
// //   },
// //   {
// //     name: 'Fake Company 12',
// //     src: 'org22.png',
// //     fortune500: false,
// //   },
// // ];



// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="py-5 lg:py-10 bg-[#f89763]"
// //     >
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-12"
// //         >
// //           <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
// //             Trusted by L&amp;D teams in leading enterprises
// //           </h2>
// //           <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
// //             Join thousands of professionals from{' '}
// //             <span className="text-white font-bold">
// //               Fortune&nbsp;500 companies
// //             </span>{' '}
// //             who have transformed their skills with Upwise.
// //           </p>
// //         </motion.div>

// //         {/* Logo Marquee */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           viewport={{ once: true }}
// //           className="relative overflow-hidden"
// //         >
// //           <motion.div
// //             animate={{ x: ['0%', '-50%'] }}
// //             transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
// //             className="flex gap-12 lg:gap-16 items-center"
// //           >
// //             {logosLoop.map((logo, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 whileHover={{ scale: 1.08 }}
// //                 className="flex-shrink-0 w-40 flex flex-col items-center"
// //               >
// //                 <img
// //                   src={logo.src}
// //                   alt={logo.name}
// //                   referrerPolicy="no-referrer"
// //                   className="max-h-12 object-contain mb-2"
// //                 />
// //                 <span className="text-xs font-medium text-white">
// //                   {logo.name}
// //                 </span>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </motion.div>

// //         <br/>

// //         {/* ////////////////////////// */}

// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           viewport={{ once: true }}
// //           className="relative overflow-hidden"
// //         >
// //           <motion.div
// //             animate={{ x: ['-50%', '0%'] }}
// //             transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
// //             className="flex gap-12 lg:gap-16 items-center"
// //           >
// //             {logosLoop.map((logo, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 whileHover={{ scale: 1.08 }}
// //                 className="flex-shrink-0 w-40 flex flex-col items-center"
// //               >
// //                 <img
// //                   src={logo.src}
// //                   alt={logo.name}
// //                   referrerPolicy="no-referrer"
// //                   className="max-h-12 object-contain mb-2"
// //                 />
// //                 <span className="text-xs font-medium text-white">
// //                   {logo.name}
// //                 </span>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </motion.div>

// //         <br/>

// //         {/* /////////////////////////////////    */}


// //          <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           viewport={{ once: true }}
// //           className="relative overflow-hidden"
// //         >
// //           <motion.div
// //             animate={{ x: ['0%', '-50%'] }}
// //             transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
// //             className="flex gap-12 lg:gap-16 items-center"
// //           >
// //             {logosLoop.map((logo, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 whileHover={{ scale: 1.08 }}
// //                 className="flex-shrink-0 w-40 flex flex-col items-center"
// //               >
// //                 <img
// //                   src={logo.src}
// //                   alt={logo.name}
// //                   referrerPolicy="no-referrer"
// //                   className="max-h-12 object-contain mb-2"
// //                 />
// //                 <span className="text-xs font-medium text-white">
// //                   {logo.name}
// //                 </span>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default ClientTrust; // Corrected export name











// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// interface CompanyLogo {
//   name: string;
//   src: string;
//   fortune500: boolean;
// }

// const COMPANY_LOGOS_ONE: CompanyLogo[] = [
//   {
//     name: 'Microsoft',
//     src: '11.png',
//     fortune500: true,
//   },
//   {
//     name: 'Amazon',
//     src: '12.png',
//     fortune500: true,
//   },
//   {
//     name: 'Spotify',
//     src: '13.png',
//     fortune500: false,
//   },
//   {
//     name: 'Accenture',
//     src: '14.png',
//     fortune500: true,
//   },
//   {
//     name: 'Accenture',
//     src: 'org5.png',
//     fortune500: true,
//   },
//   {
//     name: 'Accenture',
//     src: 'org7.png',
//     fortune500: true,
//   },
//   {
//     name: 'Accenture',
//     src: 'org8.png',
//     fortune500: true,
//   },
//   {
//     name: 'Accenture',
//     src: 'org9.png',
//     fortune500: true,
//   },
//   {
//     name: 'Accenture',
//     src: 'org10.png',
//     fortune500: true,
//   },
//   {
//     name: 'Fake Company 1',
//     src: 'org11.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 2',
//     src: 'org6.png',
//     fortune500: false,
//   },
// ];

// const COMPANY_LOGOS_TWO: CompanyLogo[] = [
  
//   {
//     name: 'Fake Company 2',
//     src: 'org12.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 3',
//     src: 'org13.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 4',
//     src: 'org14.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 5',
//     src: 'org15.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 6',
//     src: 'org16.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 7',
//     src: 'org17.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 8',
//     src: 'org18.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 9',
//     src: 'org19.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 10',
//     src: 'org20.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 11',
//     src: 'org21.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 12',
//     src: 'org22.png',
//     fortune500: false,
//   },
// ];

// const COMPANY_LOGOS_THREE: CompanyLogo[] = [

//   {
//     name: 'Fake Company 6',
//     src: 'org23.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 7',
//     src: 'org24.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 8',
//     src: 'org25.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 9',
//     src: 'org26.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 10',
//     src: 'org27.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 11',
//     src: 'org28.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 12',
//     src: 'org29.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 13',
//     src: 'org30.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 14',
//     src: 'org31.png',
//     fortune500: false,
//   },
//   {
//     name: 'Fake Company 15',
//     src: 'org32.png',
//     fortune500: false,
//   },
// ];

// const ClientTrust: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

//   // Duplicate arrays for seamless marquee effect
//   const logosLoopOne = [...COMPANY_LOGOS_ONE, ...COMPANY_LOGOS_ONE];
//   const logosLoopTwo = [...COMPANY_LOGOS_TWO, ...COMPANY_LOGOS_TWO];
//   const logosLoopThree = [...COMPANY_LOGOS_THREE, ...COMPANY_LOGOS_THREE];

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         background: "radial-gradient(circle at center, #ffffffff, #f8976334)",
//       }}
//       className="py-5 lg:py-10"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl lg:text-4xl font-bold text-[#f89763] mb-4">
//             Trusted by L&amp;D teams in leading enterprises
//           </h2>

//           <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
//             Join thousands of professionals from{' '}
//             <span className="text-[#f89763] font-bold">Fortune&nbsp;500 companies</span>{' '}
//             who have transformed their skills with Upwise.
//           </p>

//         </motion.div>

//         {/* Logo Marquee One */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="relative overflow-hidden "
//         >
//           <motion.div
//             animate={{ x: ['0%', '-50%'] }}
//             transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
//             className="flex gap-12 lg:gap-16 items-center"
//           >
//             {logosLoopOne.map((logo, idx) => (
//               <motion.div
//                 key={`one-${idx}`}
//                 whileHover={{ scale: 1.08 }}
//                 className="flex-shrink-0 w-48 flex flex-col items-center"
//               >
//                 <img
//                   src={logo.src}
//                   alt={logo.name}
//                   referrerPolicy="no-referrer"
//                   className="object-contain"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Logo Marquee Two */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="relative overflow-hidden mb-8"
//         >
//           <motion.div
//             animate={{ x: ['-50%', '0%'] }}
//             transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
//             className="flex gap-12 lg:gap-16 items-center"
//           >
//             {logosLoopTwo.map((logo, idx) => (
//               <motion.div
//                 key={`two-${idx}`}
//                 whileHover={{ scale: 1.08 }}
//                 className="flex-shrink-0 w-48 flex flex-col items-center"
//               >
//                 <img
//                   src={logo.src}
//                   alt={logo.name}
//                   referrerPolicy="no-referrer"
//                   className="object-contain mb-2"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Logo Marquee Three */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="relative overflow-hidden"
//         >
//           <motion.div
//             animate={{ x: ['0%', '-50%'] }}
//             transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
//             className="flex gap-12 lg:gap-16 items-center"
//           >
//             {logosLoopThree.map((logo, idx) => (
//               <motion.div
//                 key={`three-${idx}`}
//                 whileHover={{ scale: 1.08 }}
//                 className="flex-shrink-0 w-48 flex flex-col items-center"
//               >
//                 <img
//                   src={logo.src}
//                   alt={logo.name}
//                   referrerPolicy="no-referrer"
//                   className="object-contain mb-2"
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ClientTrust;


















import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// Define the type for a company logo
interface CompanyLogo {
  name: string;
  src: string;
  fortune500: boolean;
}

// Dummy data for logos. Replace with your actual image paths.
const COMPANY_LOGOS_ONE: CompanyLogo[] = [
  {
    name: 'Microsoft',
    src: '11.png',
    fortune500: true,
  },
  {
    name: 'Amazon',
    src: '12.png',
    fortune500: true,
  },
  {
    name: 'Spotify',
    src: '13.png',
    fortune500: false,
  },
  {
    name: 'Accenture',
    src: '14.png',
    fortune500: true,
  },
  {
    name: 'Accenture',
    src: 'org5.png',
    fortune500: true,
  },
  {
    name: 'Accenture',
    src: 'org7.png',
    fortune500: true,
  },
  {
    name: 'Accenture',
    src: 'org8.png',
    fortune500: true,
  },
  {
    name: 'Accenture',
    src: 'org9.png',
    fortune500: true,
  },
  {
    name: 'Accenture',
    src: 'org10.png',
    fortune500: true,
  },
  {
    name: 'Fake Company 1',
    src: 'org11.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 2',
    src: 'org6.png',
    fortune500: false,
  },
];

const COMPANY_LOGOS_TWO: CompanyLogo[] = [
  
  {
    name: 'Fake Company 2',
    src: 'org12.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 3',
    src: 'org13.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 4',
    src: 'org14.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 5',
    src: 'org15.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 6',
    src: 'org16.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 7',
    src: 'org17.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 8',
    src: 'org18.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 9',
    src: 'org19.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 10',
    src: 'org20.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 11',
    src: 'org21.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 12',
    src: 'org22.png',
    fortune500: false,
  },
];

const COMPANY_LOGOS_THREE: CompanyLogo[] = [

  {
    name: 'Fake Company 6',
    src: 'org23.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 7',
    src: 'org24.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 8',
    src: 'org25.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 9',
    src: 'org26.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 10',
    src: 'org27.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 11',
    src: 'org28.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 12',
    src: 'org29.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 13',
    src: 'org30.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 14',
    src: 'org31.png',
    fortune500: false,
  },
  {
    name: 'Fake Company 15',
    src: 'org32.png',
    fortune500: false,
  },
];

// Combine and use a single array for simplicity if all logos are in one row in the image
const allLogos = [...COMPANY_LOGOS_ONE, ...COMPANY_LOGOS_TWO, ...COMPANY_LOGOS_THREE];
const logosInFirstRow = allLogos.slice(0, 7);
const logosInSecondRow = allLogos.slice(7, 14);
const logosInThirdRow = allLogos.slice(14, 21);


const ClientTrust: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Duplicate arrays for a seamless marquee effect
  const logosLoopOne = [...logosInFirstRow, ...logosInFirstRow];
  const logosLoopTwo = [...logosInSecondRow, ...logosInSecondRow];
  const logosLoopThree = [...logosInThirdRow, ...logosInThirdRow];

  // A reusable component for the logo image to avoid repetition
  const LogoImage = ({ logo }: { logo: CompanyLogo }) => (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="flex-shrink-0 w-48" // Sets the width for spacing
    >
      {/* FIX APPLIED HERE:
        - A wrapper div is added with a fixed height (h-20)
        - Flexbox is used to center the image vertically and horizontally
      */}
      <div className="h-28 flex items-center justify-center">
        <img
          src={logo.src}
          alt={logo.name}
          referrerPolicy="no-referrer"
          // max-h-full ensures the image doesn't exceed the container's height
          className="max-h-full object-contain"
        />
      </div>
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      style={{
        background: "radial-gradient(circle at center, #ffffffff, #f8f8f8)",
      }}
      className="py-10 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#f89763] mb-4">
            Trusted by L&amp;D Teams in Leading Enterprises
          </h2>
          {/* <p className="text-lg text-[#5a5a5a] max-w-3xl mx-auto">
            Our training programs are trusted by thousands of professionals from top global companies, including Fortune 500s.
          </p> */}

          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Join thousands of professionals from{' '}
            <span className="text-[#f89763] font-bold">Fortune&nbsp;500 companies</span>{' '}
            who have transformed their skills with Upwise.
          </p>

        </motion.div>

        {/* Logo Marquees Container */}
        <div className="relative flex flex-col gap-6 overflow-hidden">
          {/* Marquee One (Scrolls Left) */}
          <motion.div
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4 lg:gap-8 items-center"
          >
            {logosLoopOne.map((logo, idx) => (
              <LogoImage key={`one-${idx}`} logo={logo} />
            ))}
          </motion.div>

          {/* Marquee Two (Scrolls Right) */}
          <motion.div
            animate={{ x: ['-100%', '0%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4 lg:gap-8 items-center"
          >
            {logosLoopTwo.map((logo, idx) => (
              <LogoImage key={`two-${idx}`} logo={logo} />
            ))}
          </motion.div>


          <motion.div
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4 lg:gap-8 items-center"
          >
            {logosLoopThree.map((logo, idx) => (
              <LogoImage key={`three-${idx}`} logo={logo} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ClientTrust;

