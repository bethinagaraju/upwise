// // // // // // // import React from 'react';
// // // // // // // import { Target, CheckCircle } from 'lucide-react';

// // // // // // // const AboutSection: React.FC = () => {
// // // // // // //   return (
// // // // // // //     <section id="about" className="py-16 bg-white">
// // // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // // //         <div className="text-center mb-12">
// // // // // // //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Program</h2>
// // // // // // //           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
// // // // // // //         </div>
        
// // // // // // //         <div className="grid md:grid-cols-2 gap-12 items-center">
// // // // // // //           <div>
// // // // // // //             <p className="text-lg text-gray-700 mb-6 leading-relaxed">
// // // // // // //               Ignite is a hands-on, results-driven training program that helps professionals master Microsoft tools and harness the power of AI in daily work. Designed for corporate teams, Ignite upskills your workforce in Excel, PowerPoint, Outlook, Word, Teams, and Power BI — integrated with AI tools like ChatGPT and Copilot for next-level productivity.
// // // // // // //             </p>
// // // // // // //           </div>
          
// // // // // // //           <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl">
// // // // // // //             <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
// // // // // // //               <Target className="w-6 h-6 text-orange-500 mr-2" />
// // // // // // //               Who Is It For?
// // // // // // //             </h3>
// // // // // // //             <ul className="space-y-3">
// // // // // // //               <li className="flex items-center text-gray-700">
// // // // // // //                 <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
// // // // // // //                 Corporate employees across functions
// // // // // // //               </li>
// // // // // // //               <li className="flex items-center text-gray-700">
// // // // // // //                 <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
// // // // // // //                 Business analysts, MIS teams, and finance professionals
// // // // // // //               </li>
// // // // // // //               <li className="flex items-center text-gray-700">
// // // // // // //                 <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
// // // // // // //                 Managers, executives, and team leads
// // // // // // //               </li>
// // // // // // //               <li className="flex items-center text-gray-700">
// // // // // // //                 <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
// // // // // // //                 Organizations adopting digital & AI tools
// // // // // // //               </li>
// // // // // // //             </ul>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default AboutSection;










// // // // // // import React from 'react';
// // // // // // import { Target, Users, Briefcase, LineChart, Network } from 'lucide-react';

// // // // // // const audience = [
// // // // // //   {
// // // // // //     label: "Corporate employees across functions",
// // // // // //     icon: <Users className="mx-auto text-blue-600 w-12 h-12 mb-4" />,
// // // // // //   },
// // // // // //   {
// // // // // //     label: "Business analysts, MIS teams, and finance professionals",
// // // // // //     icon: <LineChart className="mx-auto text-green-600 w-12 h-12 mb-4" />,
// // // // // //   },
// // // // // //   {
// // // // // //     label: "Managers, executives, and team leads",
// // // // // //     icon: <Briefcase className="mx-auto text-orange-600 w-12 h-12 mb-4" />,
// // // // // //   },
// // // // // //   {
// // // // // //     label: "Organizations adopting digital & AI tools",
// // // // // //     icon: <Network className="mx-auto text-purple-600 w-12 h-12 mb-4" />,
// // // // // //   },
// // // // // // ];

// // // // // // const AboutSection: React.FC = () => {
// // // // // //   return (
// // // // // //     <section id="about" className="py-16 bg-white">
// // // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // // //         {/* Section 1: About */}
// // // // // //         <div className="text-center mb-12">
// // // // // //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Program</h2>
// // // // // //           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
// // // // // //           <p className="text-lg text-gray-700 mt-8 max-w-3xl mx-auto leading-relaxed">
// // // // // //             Ignite is a hands-on, results-driven training program that helps professionals master Microsoft tools and harness the power of AI in daily work. Designed for corporate teams, Ignite upskills your workforce in Excel, PowerPoint, Outlook, Word, Teams, and Power BI — integrated with AI tools like ChatGPT and Copilot for next-level productivity.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //         {/* Section 2: Audience */}
// // // // // //         <div className="mb-8">
// // // // // //           <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
// // // // // //             <Target className="w-6 h-6 text-orange-500 mr-2" />
// // // // // //             Who Is It For?
// // // // // //           </h3>
// // // // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// // // // // //             {audience.map((item, idx) => (
// // // // // //               <div key={idx} className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6 text-center shadow hover:shadow-lg transition">
// // // // // //                 {item.icon}
// // // // // //                 <div className="text-gray-800 font-medium">{item.label}</div>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default AboutSection;


// // // // // import React from 'react';
// // // // // import { Target } from 'lucide-react';

// // // // // const audience = [
// // // // //   {
// // // // //     label: "Corporate employees across functions",
// // // // //     // Replace this URL with your real image later
// // // // //     img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=256&q=80",
// // // // //     alt: "Corporate employees",
// // // // //   },
// // // // //   {
// // // // //     label: "Business analysts, MIS teams, and finance professionals",
// // // // //     img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=facearea&w=256&q=80",
// // // // //     alt: "Business analysts",
// // // // //   },
// // // // //   {
// // // // //     label: "Managers, executives, and team leads",
// // // // //     img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=facearea&w=256&q=80",
// // // // //     alt: "Managers and executives",
// // // // //   },
// // // // //   {
// // // // //     label: "Organizations adopting digital & AI tools",
// // // // //     img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=facearea&w=256&q=80",
// // // // //     alt: "Organizations tech",
// // // // //   },
// // // // // ];

// // // // // const AboutSection: React.FC = () => {
// // // // //   return (
// // // // //     <section id="about" className="py-16 bg-white">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //         {/* Section 1: About */}
// // // // //         <div className="text-center mb-12">
// // // // //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Program</h2>
// // // // //           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
// // // // //           <p className="text-lg text-gray-700 mt-8 max-w-3xl mx-auto leading-relaxed">
// // // // //             Ignite is a hands-on, results-driven training program that helps professionals master Microsoft tools and harness the power of AI in daily work. Designed for corporate teams, Ignite upskills your workforce in Excel, PowerPoint, Outlook, Word, Teams, and Power BI — integrated with AI tools like ChatGPT and Copilot for next-level productivity.
// // // // //           </p>
// // // // //         </div>
// // // // //         {/* Section 2: Audience */}
// // // // //         <div className="mb-8">
// // // // //           <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
// // // // //             <Target className="w-6 h-6 text-orange-500 mr-2" />
// // // // //             Who Is It For?
// // // // //           </h3>
// // // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// // // // //             {audience.map((item, idx) => (
// // // // //               <div key={idx} className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-8 text-center shadow hover:shadow-lg transition">
// // // // //                 <img
// // // // //                   src={item.img}
// // // // //                   alt={item.alt}
// // // // //                   className="mx-auto mb-6 w-32 h-32 object-cover rounded-full border-2 border-blue-200 shadow"
// // // // //                   loading="lazy"
// // // // //                 />
// // // // //                 <div className="text-gray-800 font-medium">{item.label}</div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default AboutSection;








// // // // import React from 'react';
// // // // import { Target } from 'lucide-react';

// // // // // Provide two images per audience item: "img" (default) and "imgBack" (shown on hover)
// // // // const audience = [
// // // //   {
// // // //     label: "Corporate employees across functions",
// // // //     img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=256&q=80",
// // // //     imgBack: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&q=80", // Example alternate
// // // //     alt: "Corporate employees",
// // // //   },
// // // //   {
// // // //     label: "Business analysts, MIS teams, and finance professionals",
// // // //     img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=facearea&w=256&q=80",
// // // //     imgBack: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&q=80",
// // // //     alt: "Business analysts",
// // // //   },
// // // //   {
// // // //     label: "Managers, executives, and team leads",
// // // //     img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=facearea&w=256&q=80",
// // // //     imgBack: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=256&q=80",
// // // //     alt: "Managers and executives",
// // // //   },
// // // //   {
// // // //     label: "Organizations adopting digital & AI tools",
// // // //     img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=facearea&w=256&q=80",
// // // //     imgBack: "https://images.unsplash.com/photo-1502767089025-6572583495df?auto=format&fit=facearea&w=256&q=80",
// // // //     alt: "Organizations tech",
// // // //   },
// // // // ];

// // // // const AboutSection: React.FC = () => {
// // // //   return (
// // // //     <section id="about" className="py-16 bg-white">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         {/* Section 1: About */}
// // // //         <div className="text-center mb-12">
// // // //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Program</h2>
// // // //           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
// // // //           <p className="text-lg text-gray-700 mt-8 max-w-3xl mx-auto leading-relaxed">
// // // //             Ignite is a hands-on, results-driven training program that helps professionals master Microsoft tools and harness the power of AI in daily work. Designed for corporate teams, Ignite upskills your workforce in Excel, PowerPoint, Outlook, Word, Teams, and Power BI — integrated with AI tools like ChatGPT and Copilot for next-level productivity.
// // // //           </p>
// // // //         </div>
// // // //         {/* Section 2: Audience */}
// // // //         <div className="mb-8">
// // // //           <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
// // // //             <Target className="w-6 h-6 text-orange-500 mr-2" />
// // // //             Who Is It For?
// // // //           </h3>
// // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// // // //             {audience.map((item, idx) => (
// // // //               <div key={idx} className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-8 text-center shadow hover:shadow-lg transition">
// // // //                 {/* Rotating image swap effect */}
// // // //                 <div className="image-container mx-auto mb-6 w-32 h-32">
// // // //                   <div className="image-inner">
// // // //                     <img
// // // //                       src={item.img}
// // // //                       alt={item.alt}
// // // //                       className="image-front"
// // // //                       width={128}
// // // //                       height={128}
// // // //                       loading="lazy"
// // // //                     />
// // // //                     <img
// // // //                       src={item.imgBack}
// // // //                       alt={item.alt + ' alternate'}
// // // //                       className="image-back"
// // // //                       width={128}
// // // //                       height={128}
// // // //                       loading="lazy"
// // // //                     />
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="text-gray-800 font-medium">{item.label}</div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //       <style>{`
// // // //         .image-container {
// // // //           perspective: 1000px;
// // // //           display: inline-block;
// // // //           position: relative;
// // // //         }
// // // //         .image-inner {
// // // //           position: relative;
// // // //           width: 128px;
// // // //           height: 128px;
// // // //           transition: transform 1s cubic-bezier(.4,2,.35,1);
// // // //           transform-style: preserve-3d;
// // // //         }
// // // //         .image-container:hover .image-inner {
// // // //           transform: rotateY(360deg);
// // // //         }
// // // //         .image-front, .image-back {
// // // //           position: absolute;
// // // //           top: 0; left: 0; width: 128px; height: 128px;
// // // //           border-radius: 9999px;
// // // //           border: 2px solid #bfdbfe;
// // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// // // //           object-fit: cover;
// // // //           backface-visibility: hidden;
// // // //           transition: opacity 0.5s;
// // // //         }
// // // //         .image-back {
// // // //           transform: rotateY(180deg);
// // // //           opacity: 0;
// // // //         }
// // // //         .image-container:hover .image-back {
// // // //           opacity: 1;
// // // //         }
// // // //         .image-container:hover .image-front {
// // // //           opacity: 0;
// // // //         }
// // // //       `}</style>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default AboutSection;








// // // import React from 'react';
// // // import { Target } from 'lucide-react';

// // // const audience = [
// // //   {
// // //     label: "Corporate employees across functions",
// // //     img: "corporate-employees.png",
// // //     imgBack: "professional-diverse-international-team-young-600nw-2353374147.webp",
// // //     alt: "Corporate employees",
// // //   },
// // //   {
// // //     label: "Business analysts, MIS teams, and finance professionals",
// // //     img: "cover.png",
// // //     imgBack: "1736405454584business-analyst.webp",
// // //     alt: "Business analysts",
// // //   },
// // //   {
// // //     label: "Managers, executives, and team leads",
// // //     img: "leadership-skills.jpg",
// // //     imgBack: "18_5_23_HL_inexperienced_leader.avif",
// // //     alt: "Managers and executives",
// // //   },
// // //   {
// // //     label: "Organizations adopting digital & AI tools",
// // //     img: "types-of-organizations1.webp",
// // //     imgBack: "IS-Feature_NERC-Compliance-and-Organization-Structure.png",
// // //     alt: "Organizations tech",
// // //   },
// // // ];

// // // const AboutSection: React.FC = () => {
// // //   return (
// // //     <section id="about" className="py-16 bg-white">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         {/* Section 1: About */}
// // //         <div className="text-center mb-12">
// // //           <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">About the Program</h2>
// // //           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto"></div>
// // //           <p className="text-lg text-gray-700 mt-8 max-w-3xl mx-auto leading-relaxed">
// // //             Ignite is a hands-on, results-driven training program that helps professionals master Microsoft tools and harness the power of AI in daily work. Designed for corporate teams, Ignite upskills your workforce in Excel, PowerPoint, Outlook, Word, Teams, and Power BI — integrated with AI tools like ChatGPT and Copilot for next-level productivity.
// // //           </p>
// // //         </div>
// // //         {/* Section 2: Audience */}
// // //         <div className="mb-8">
// // //           <h3 className="text-2xl font-bold text-orange-500 mb-8 flex items-center justify-center">
// // //             <Target className="w-6 h-6 text-orange-500 mr-2" />
// // //             Who Is It For?
// // //           </h3>
// // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// // //             {audience.map((item, idx) => (
// // //               <div key={idx} className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-8 text-center shadow hover:shadow-lg transition">
// // //                 {/* Rotating image swap effect */}
// // //                 <div className="flip-container mx-auto mb-6 w-32 h-32">
// // //                   <div className="flipper w-full h-full">
// // //                     <img
// // //                       src={item.img}
// // //                       alt={item.alt}
// // //                       className="front absolute w-full h-full object-cover rounded-full border-2 border-blue-200 shadow"
// // //                       loading="lazy"
// // //                     />
// // //                     <img
// // //                       src={item.imgBack}
// // //                       alt={item.alt + ' alternate'}
// // //                       className="back absolute w-full h-full object-cover rounded-full border-2 border-orange-200 shadow"
// // //                       loading="lazy"
// // //                     />
// // //                   </div>
// // //                 </div>
// // //                 <div className="text-gray-800 font-medium">{item.label}</div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <style>{`
// // //         .flip-container {
// // //           perspective: 1000px;
// // //           width: 128px;
// // //           height: 128px;
// // //           position: relative;
// // //         }
// // //         .flipper {
// // //           position: relative;
// // //           width: 100%;
// // //           height: 100%;
// // //           transition: transform 0.6s cubic-bezier(.4,2,.35,1);
// // //           transform-style: preserve-3d;
// // //         }
// // //         .flip-container:hover .flipper {
// // //           transform: rotateY(180deg);
// // //         }
// // //         .front, .back {
// // //           backface-visibility: hidden;
// // //           position: absolute;
// // //           top: 0; left: 0;
// // //           width: 128px;
// // //           height: 128px;
// // //         }
// // //         .front {
// // //           z-index: 2;
// // //           transform: rotateY(0deg);
// // //         }
// // //         .back {
// // //           z-index: 1;
// // //           transform: rotateY(180deg);
// // //         }
// // //       `}</style>
// // //     </section>
// // //   );
// // // };

// // // export default AboutSection;









// // import React from 'react';
// // import { Target } from 'lucide-react';

// // const audience = [
// //   {
// //     label: "Corporate employees across functions",
// //     img: "corporate-employees.png",
// //     imgBack: "professional-diverse-international-team-young-600nw-2353374147.webp",
// //     alt: "Corporate employees",
// //   },
// //   {
// //     label: "Business analysts, MIS teams, and finance professionals",
// //     img: "cover.png",
// //     imgBack: "1736405454584business-analyst.webp",
// //     alt: "Business analysts",
// //   },
// //   {
// //     label: "Managers, executives, and team leads",
// //     img: "leadership-skills.jpg",
// //     imgBack: "18_5_23_HL_inexperienced_leader.avif",
// //     alt: "Managers and executives",
// //   },
// //   {
// //     label: "Organizations adopting digital & AI tools",
// //     img: "types-of-organizations1.webp",
// //     imgBack: "IS-Feature_NERC-Compliance-and-Organization-Structure.png",
// //     alt: "Organizations tech",
// //   },
// // ];

// // const AboutSection: React.FC = () => {
// //   return (
// //     <section id="about" className="bg-yellow-400 py-16 relative z-0 overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         {/* Section 1: About */}
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About the Program</h2>
// //           <div className="w-24 h-1 bg-white mx-auto" />
// //           <p className="text-lg text-gray-100 mt-8 max-w-3xl mx-auto leading-relaxed">
// //             Ignite is a hands-on, results-driven training program that helps professionals master Microsoft tools and harness the power of AI in daily work. Designed for corporate teams, Ignite upskills your workforce in Excel, PowerPoint, Outlook, Word, Teams, and Power BI — integrated with AI tools like ChatGPT and Copilot for next-level productivity.
// //           </p>
// //         </div>

// //         {/* Section 2: Audience Overlap Cards */}
// //         <div className="text-center mb-12">
// //           <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
// //             <Target className="w-6 h-6 text-white mr-2" />
// //             Who Is It For?
// //           </h3>
// //           <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:-mx-4 px-2">
// //             {audience.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white rounded-3xl shadow-xl px-8 py-10 text-left relative z-10 w-full lg:w-[340px] lg:mx-4"
// //                 style={{
// //                   marginLeft: index !== 0 ? '-80px' : '0',
// //                   zIndex: 10 - index,
// //                 }}
// //               >
// //                 <div className="text-4xl font-bold text-yellow-500 mb-4">{index + 1}</div>
// //                 <p className="text-gray-800 leading-relaxed text-base">{item.label}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutSection;


// import React from 'react';
// import { Target } from 'lucide-react';

// const audience = [
//   {
//     label: "Corporate employees across functions",
//     img: "corporate-employees.png",
//     imgBack: "professional-diverse-international-team-young-600nw-2353374147.webp",
//     alt: "Corporate employees",
//   },
//   {
//     label: "Business analysts, MIS teams, and finance professionals",
//     img: "cover.png",
//     imgBack: "1736405454584business-analyst.webp",
//     alt: "Business analysts",
//   },
//   {
//     label: "Managers, executives, and team leads",
//     img: "leadership-skills.jpg",
//     imgBack: "18_5_23_HL_inexperienced_leader.avif",
//     alt: "Managers and executives",
//   },
//   {
//     label: "Organizations adopting digital & AI tools",
//     img: "types-of-organizations1.webp",
//     imgBack: "IS-Feature_NERC-Compliance-and-Organization-Structure.png",
//     alt: "Organizations tech",
//   },
// ];

// const AboutSection: React.FC = () => {
//   return (
//     <section id="about" style={{           background: 'radial-gradient(circle at center, #ffffffff, #f8976334)',         }} className="py-16 relative z-0 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section 1: About */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#f89763] mb-4">About the Program</h2>
//           <div className="w-24 h-1 bg-white mx-auto" />
//           <p className="text-lg text-[#4a4a4a] mt-8 max-w-3xl mx-auto leading-relaxed">
//             Ignite is a hands-on, results-driven training program that helps professionals master Microsoft tools and harness the power of AI in daily work. Designed for corporate teams, Ignite upskills your workforce in Excel, PowerPoint, Outlook, Word, Teams, and Power BI — integrated with AI tools like ChatGPT and Copilot for next-level productivity.
//           </p>
//         </div>

//         {/* Section 2: Audience Overlap Cards - LEFT OVERLAP */}
//         <div className="text-center mb-12">
//           <h3 className="text-3xl font-bold text-[#f89763] mb-8 flex items-center justify-center">
//             <Target className="w-6 h-6 text-[#f89763] mr-2" />
//             Who Is It For?
//           </h3>
//           <div className="flex flex-col lg:flex-row-reverse items-stretch justify-center gap-6 lg:-mx-4 px-2">
//             {audience.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-3xl shadow-[0_0_10px_#f89763] px-12 py-10 text-left relative z-10 w-full lg:w-[340px] lg:mx-4"
//                 style={{
//                   marginRight: index !== 0 ? '-80px' : '0',
//                   zIndex: 10 - index,
//                 }}
//               >
//                 <div className="text-5xl font-bold text-[#f89763] mb-4">{window.innerWidth < 1000 ? index + 1 : 4 - index}</div>
//                 <p style={{fontSize: '1.2rem'}} className="text-[#4a4a4a] leading-relaxed">{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;







import React from 'react';
import { Target } from 'lucide-react';

// Add CSS for text/card animation and hover via a <style> tag
const styles = `
@keyframes fadeMoveUp {
  0% { opacity: 0; transform: translateY(15px);}
  100% { opacity: 1; transform: translateY(0);}
}
.card-animation {
  animation: fadeMoveUp 0.7s ease forwards;
  opacity: 0;
  transition: transform 0.3s cubic-bezier(.17,.67,.83,.67), box-shadow 0.3s;
}
.card-animation:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #f89763;
}
`;

const audience = [
  {
    label: "Corporate employees across functions",
    img: "corporate-employees.png",
    imgBack: "professional-diverse-international-team-young-600nw-2353374147.webp",
    alt: "Corporate employees",
  },
  {
    label: "Business analysts, MIS teams, and finance professionals",
    img: "cover.png",
    imgBack: "1736405454584business-analyst.webp",
    alt: "Business analysts",
  },
  {
    label: "Managers, executives, and team leads",
    img: "leadership-skills.jpg",
    imgBack: "18_5_23_HL_inexperienced_leader.avif",
    alt: "Managers and executives",
  },
  {
    label: "Organizations adopting digital & AI tools",
    img: "types-of-organizations1.webp",
    imgBack: "IS-Feature_NERC-Compliance-and-Organization-Structure.png",
    alt: "Organizations tech",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about"
    style={{
        background: '#f89763',
      }} className="py-16 relative z-0 overflow-hidden">
      {/* Animation styles */}
      <style>{styles}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 1: About */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ animationDelay: '0s' }}
          >
            About the Program
          </h2>
          <div
            className="w-24 h-1 bg-white mx-auto"
            style={{ animationDelay: '0.2s' }}
          />
          <p
            className="text-lg text-[#4a4a4a] mt-8 max-w-3xl mx-auto leading-relaxed card-animation"
            style={{ animationDelay: '0.4s' }}
          >
            Ignite is a hands-on, results-driven training program that helps professionals master Microsoft tools and harness the power of AI in daily work. Designed for corporate teams, Ignite upskills your workforce in Excel, PowerPoint, Outlook, Word, Teams, and Power BI — integrated with AI tools like ChatGPT and Copilot for next-level productivity.
          </p>
        </div>
        {/* Section 2: Audience Overlap Cards - LEFT OVERLAP */}
        <div className="text-center mb-12">
          <h3
            className="text-3xl font-bold text-[#ffffff] mb-8 flex items-center justify-center "
            style={{ animationDelay: '0.6s' }}
          >
            <Target className="w-6 h-6 text-[#ffffff] mr-2" />
            Who Is It For?
          </h3>
          <div className="flex flex-col lg:flex-row-reverse items-stretch justify-center gap-6 lg:-mx-4 px-2">
            {audience.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-[0_0_10px_#f89763] px-12 py-10 text-left relative z-10 w-full lg:w-[340px] lg:mx-4 card-animation"
                style={{
                  marginRight: index !== 0 ? '-80px' : '0',
                  zIndex: 10 - index,
                  animationDelay: `${0.8 + index * 0.5}s`,
                }}
              >
                <div className="text-5xl font-bold text-[#f89763] mb-4">
                  {window.innerWidth < 1000 ? index + 1 : 4 - index}
                </div>
                <p style={{ fontSize: '1.2rem' }} className="text-[#4a4a4a] leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
