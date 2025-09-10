// // // import React, { useState, useEffect } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// // // const Testimonials: React.FC = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);
// // //   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

// // //   const testimonials = [
// // //     {
// // //       name: 'Yushi Kambe',
// // //       role: 'Vice President',
// // //       company: 'Sumitomo Mitsui Banking Corporation',
// // //       image: 'mohapatra.png',
// // //       rating: 5,
// // //       text: 'Really appreciate Ritu ji for conducting the corporate MS excel session. Attended both Intermediate and Advanced class, and learnt advanced features of Excel including Macro which was quite helpful for the work. Your Kind and patient guidance definitely accelerated the learning.'
// // //     },
// // //     {
// // //       name: 'Pratyush Raj Samal',
// // //       role: 'Financial Planning and Analysis',
// // //       company: ' Hitachi Energy',
// // //       image: 'honeywell.png',
// // //       rating: 5,
// // //       text: 'Ritu demonstrated a deep knowledge in excel workings and shared her expertise in a pleasant and comprehensible manner. Although the training session lasted for a few days only, I have learnt from her more than I could expect. Her patience to attend each and everyone\'s questions is something I will always value.'
// // //     },
// // //     {
// // //       name: 'Siddhesh Shinde',
// // //       role: 'Valuation Professional',
// // //       company: 'CBRE',
// // //       image: 'kgjltjsk.png',
// // //       rating: 5,
// // //       text: 'Thank you Ritu ma\'am for a great Excel workshop. Great presentation style with lots of opportunities to ask queries. I have learned many new tools and how to work smartly. I recommend every Student and employee to go through this workshop.'
// // //     },
// // //     {
// // //       name: 'Amit P',
// // //       role: ' Chief Financial Officer',
// // //       company: 'Psychotropics India Ltd.',
// // //       image: 'amit.png',
// // //       rating: 5,
// // //       text: 'Recently, I attended one of your Advanced Excel and Powerpoint training programs organized by CII. It was terrific and the way you explained everything in detail was quite insightful. I have been working on Microsoft Excel for more than a decade, however I wasnt aware of new features which could come handy for doing my routine work. I\'m glad I attended your session. Thank you..!!'
// // //     },
// // //     {
// // //       name: 'Janmejoya Mohapatra',
// // //       role: ' Chief Executive Officer',
// // //       company: 'JJ Financial Services & Consultants',
// // //       image: 'ddsills1.png',
// // //       rating: 5,
// // //       text: 'Ritu Arora was our trainer in imparting excel skills to us. She is really an excellent trainer, who possesses enough knowledge on excel. Her teaching methodology is quite systematic, easy learning & example based which enabled us to grasp the excel skills in a very short time. I really appreciate her & look forward to learning more in future.'
// // //     }
// // //   ];

// // //   const stats = [
// // //     { number: '99%', label: 'NPS Score', color: 'text-[#f89763]' },
// // //     { number: '30,000+', label: 'Learners Trained', color: 'text-[#f89763]' },
// // //     { number: '4.8/5', label: 'Average Rating', color: 'text-[#f89763]' },
// // //     { number: '500+', label: 'Companies', color: 'text-[#f89763]' }
// // //   ];

// // //   useEffect(() => {
// // //     if (!isAutoPlaying) return;
    
// // //     const interval = setInterval(() => {
// // //       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
// // //     }, 5000);

// // //     return () => clearInterval(interval);
// // //   }, [isAutoPlaying, testimonials.length]);

// // //   const nextTestimonial = () => {
// // //     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
// // //     setIsAutoPlaying(false);
// // //   };

// // //   const prevTestimonial = () => {
// // //     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
// // //     setIsAutoPlaying(false);
// // //   };

// // //   return (
// // //     <section id="testimonials" className="py-20 lg:py-32 bg-white">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         {/* Section Header */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8 }}
// // //           viewport={{ once: true }}
// // //           className="text-center mb-16"
// // //         >
// // //           <h2 className="text-4xl lg:text-5xl font-bold text-[#f89763] mb-6">
// // //             What Our Learners Say
// // //           </h2>
// // //           <p className="text-xl text-soft-grey-600 max-w-3xl mx-auto">
// // //             Discover how professionals and organizations have transformed their skills and achieved remarkable results with Upwise.
// // //           </p>
// // //         </motion.div>


// // //         {/* Testimonials Carousel */}
// // //         <motion.div
// // //           initial={{ opacity: 0 }}
// // //           whileInView={{ opacity: 1 }}
// // //           transition={{ duration: 0.8, delay: 0.4 }}
// // //           viewport={{ once: true }}
// // //           className="relative"
// // //         >
// // //           <div className="bg-gradient-to-br from-light-peach-50 to-soft-grey-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
// // //             {/* Background Quote Icon */}
// // //             {/* <div className="absolute top-8 right-8 opacity-10">
// // //               <Quote size={120} className="text-terracotta-600" />
// // //             </div> */}

// // //             <AnimatePresence mode="wait">
// // //               <motion.div
// // //                 key={currentIndex}
// // //                 initial={{ opacity: 0, x: 100 }}
// // //                 animate={{ opacity: 1, x: 0 }}
// // //                 exit={{ opacity: 0, x: -100 }}
// // //                 transition={{ duration: 0.5 }}
// // //                 className="relative z-10"
// // //               >
// // //                 <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
// // //                   {/* Testimonial Content */}
// // //                   <div>
// // //                     {/* Stars */}
// // //                     <div className="flex items-center gap-1 mb-6">
// // //                       {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
// // //                         <Star key={i} size={20} className="text-yellow-400 fill-current" />
// // //                       ))}
// // //                     </div>

// // //                     {/* Quote */}
// // //                     <blockquote className="text-xl lg:text-2xl text-deep-navy-800 font-medium leading-relaxed mb-8">
// // //                       "{testimonials[currentIndex].text}"
// // //                     </blockquote>

// // //                     {/* Author Info */}
// // //                     <div className="flex items-center gap-4">
// // //                       <img
// // //                         src={testimonials[currentIndex].image}
// // //                         alt={testimonials[currentIndex].name}
// // //                         className="w-16 h-16 rounded-full object-cover"
// // //                       />
// // //                       <div>
// // //                         <div className="font-semibold text-deep-navy-800 text-lg">
// // //                           {testimonials[currentIndex].name}
// // //                         </div>
// // //                         <div className="text-soft-grey-600">
// // //                           {testimonials[currentIndex].role}
// // //                         </div>
// // //                         <div className="text-[#f89763] font-bold">
// // //                           {testimonials[currentIndex].company}
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Image/Visual */}
// // //                   <div className="relative">
// // //                     <motion.div
// // //                       whileHover={{ scale: 1.05 }}
// // //                       transition={{ duration: 0.3 }}
// // //                       className="relative"
// // //                     >
// // //                       <img
// // //                         src="person1.png"
// // //                         alt="Training session"
// // //                         className="rounded-2xl shadow-lg w-full"
// // //                       />
// // //                       <div className="absolute inset-0 bg-gradient-to-br from-terracotta-600/20 to-warm-coral-500/20 rounded-2xl" />
// // //                     </motion.div>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             </AnimatePresence>

// // //             {/* Navigation */}
// // //             <div className="flex items-center justify-between mt-8">
// // //               {/* Dots Indicator */}
// // //               <div className="flex items-center gap-2">
// // //                 {testimonials.map((_, index) => (
// // //                   <button
// // //                     key={index}
// // //                     onClick={() => {
// // //                       setCurrentIndex(index);
// // //                       setIsAutoPlaying(false);
// // //                     }}
// // //                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
// // //                       index === currentIndex
// // //                         ? 'bg-terracotta-600 w-8'
// // //                         : 'bg-soft-grey-300 hover:bg-soft-grey-400'
// // //                     }`}
// // //                   />
// // //                 ))}
// // //               </div>

// // //               {/* Arrow Navigation */}
// // //               <div className="flex items-center gap-2">
// // //                 <motion.button
// // //                   whileHover={{ scale: 1.1 }}
// // //                   whileTap={{ scale: 0.9 }}
// // //                   onClick={prevTestimonial}
// // //                   className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#f89763] hover:text-[#f89763] transition-colors duration-200"
// // //                 >
// // //                   <ChevronLeft size={20} />
// // //                 </motion.button>
// // //                 <motion.button
// // //                   whileHover={{ scale: 1.1 }}
// // //                   whileTap={{ scale: 0.9 }}
// // //                   onClick={nextTestimonial}
// // //                   className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#f89763] hover:text-[#f89763] transition-colors duration-200"
// // //                 >
// // //                   <ChevronRight size={20} />
// // //                 </motion.button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </motion.div>


// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Testimonials;














// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// // const Testimonials: React.FC = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

// //   const testimonials = [
// //     {
// //       name: 'Yushi Kambe',
// //       role: 'Vice President',
// //       company: 'Sumitomo Mitsui Banking Corporation',
// //       image: 'mohapatra.png',
// //       rating: 5,
// //       text: 'Really appreciate Ritu ji for conducting the corporate MS excel session...'
// //     },
// //     {
// //       name: 'Pratyush Raj Samal',
// //       role: 'Financial Planning and Analysis',
// //       company: 'Hitachi Energy',
// //       image: 'honeywell.png',
// //       rating: 5,
// //       text: 'Ritu demonstrated a deep knowledge in excel workings and shared her expertise...'
// //     },
// //     {
// //       name: 'Siddhesh Shinde',
// //       role: 'Valuation Professional',
// //       company: 'CBRE',
// //       image: 'kgjltjsk.png',
// //       rating: 5,
// //       text: 'Thank you Ritu ma\'am for a great Excel workshop...'
// //     },
// //     {
// //       name: 'Amit P',
// //       role: 'Chief Financial Officer',
// //       company: 'Psychotropics India Ltd.',
// //       image: 'amit.png',
// //       rating: 5,
// //       text: 'Recently, I attended one of your Advanced Excel and Powerpoint training programs...'
// //     },
// //     {
// //       name: 'Janmejoya Mohapatra',
// //       role: 'Chief Executive Officer',
// //       company: 'JJ Financial Services & Consultants',
// //       image: 'ddsills1.png',
// //       rating: 5,
// //       text: 'Ritu Arora was our trainer in imparting excel skills to us...'
// //     }
// //   ];

// //   useEffect(() => {
// //     if (!isAutoPlaying) return;

// //     const interval = setInterval(() => {
// //       setCurrentIndex((prev) => (prev + 2) % testimonials.length);
// //     }, 6000);

// //     return () => clearInterval(interval);
// //   }, [isAutoPlaying, testimonials.length]);

// //   const next = () => {
// //     setCurrentIndex((prev) => (prev + 2) % testimonials.length);
// //     setIsAutoPlaying(false);
// //   };

// //   const prev = () => {
// //     setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
// //     setIsAutoPlaying(false);
// //   };

// //   const visibleTestimonials = [
// //     testimonials[currentIndex],
// //     testimonials[(currentIndex + 1) % testimonials.length],
// //   ];

// //   return (
// //     <section id="testimonials" className="py-20 lg:py-32 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Section Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl lg:text-5xl font-bold text-[#f89763] mb-6">
// //             What Our Learners Say
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             Discover how professionals and organizations have transformed their skills and achieved remarkable results with Upwise.
// //           </p>
// //         </motion.div>

// //         {/* Testimonials Grid */}
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={currentIndex}
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -50 }}
// //             transition={{ duration: 0.6 }}
// //             className="grid gap-8 md:grid-cols-2"
// //           >
// //             {visibleTestimonials.map((testimonial, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-gradient-to-br from-light-peach-50 to-soft-grey-50 p-6 rounded-3xl shadow-md"
// //               >
// //                 <div className="flex items-center gap-1 mb-4">
// //                   {[...Array(testimonial.rating)].map((_, i) => (
// //                     <Star key={i} size={18} className="text-yellow-400 fill-current" />
// //                   ))}
// //                 </div>
// //                 <blockquote className="text-lg text-gray-800 mb-6">"{testimonial.text}"</blockquote>
// //                 <div className="flex items-center gap-4">
// //                   <img
// //                     src={testimonial.image}
// //                     alt={testimonial.name}
// //                     className="w-14 h-14 rounded-full object-cover"
// //                   />
// //                   <div>
// //                     <div className="font-semibold text-gray-900">{testimonial.name}</div>
// //                     <div className="text-gray-600 text-sm">{testimonial.role}</div>
// //                     <div className="text-[#f89763] font-bold text-sm">{testimonial.company}</div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </motion.div>
// //         </AnimatePresence>

// //         {/* Navigation */}
// //         <div className="flex items-center justify-between mt-10">
// //           <div className="flex gap-2">
// //             {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => {
// //                   setCurrentIndex(i * 2);
// //                   setIsAutoPlaying(false);
// //                 }}
// //                 className={`w-3 h-3 rounded-full ${
// //                   currentIndex === i * 2 ? 'bg-[#f89763] w-6' : 'bg-gray-300 hover:bg-gray-400'
// //                 } transition-all duration-300`}
// //               />
// //             ))}
// //           </div>
// //           <div className="flex gap-2">
// //             <motion.button
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.9 }}
// //               onClick={prev}
// //               className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-[#f89763]"
// //             >
// //               <ChevronLeft size={18} />
// //             </motion.button>
// //             <motion.button
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.9 }}
// //               onClick={next}
// //               className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-[#f89763]"
// //             >
// //               <ChevronRight size={18} />
// //             </motion.button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Testimonials;





// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// const Testimonials: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [direction, setDirection] = useState(1); // for horizontal animation

//   const testimonials = [
//     {
//       name: 'Yushi Kambe',
//       role: 'Vice President',
//       company: 'Sumitomo Mitsui Banking Corporation',
//       image: 'mohapatra.png',
//       rating: 5,
//       text: 'Really appreciate Ritu ji for conducting the corporate MS excel session. Attended both Intermediate and Advanced class, and learnt advanced features of Excel including Macro which was quite helpful for the work. Your Kind and patient guidance definitely accelerated the learning.'
//     },
//     {
//       name: 'Pratyush Raj Samal',
//       role: 'Financial Planning and Analysis',
//       company: 'Hitachi Energy',
//       image: 'honeywell.png',
//       rating: 5,
//       text: 'Ritu demonstrated a deep knowledge in excel workings and shared her expertise in a pleasant and comprehensible manner. Although the training session lasted for a few days only, I have learnt from her more than I could expect. Her patience to attend each and everyone\'s questions is something I will always value.'
//     },
//     {
//       name: 'Siddhesh Shinde',
//       role: 'Valuation Professional',
//       company: 'CBRE',
//       image: 'kgjltjsk.png',
//       rating: 5,
//       text: 'Thank you Ritu ma\'am for a great Excel workshop. Great presentation style with lots of opportunities to ask queries. I have learned many new tools and how to work smartly. I recommend every Student and employee to go through this workshop.'
//     },
//     {
//       name: 'Amit P',
//       role: 'Chief Financial Officer',
//       company: 'Psychotropics India Ltd.',
//       image: 'amit.png',
//       rating: 5,
//       text: 'Recently, I attended one of your Advanced Excel and Powerpoint training programs organized by CII. It was terrific and the way you explained everything in detail was quite insightful. I have been working on Microsoft Excel for more than a decade, however I wasnt aware of new features which could come handy for doing my routine work. I\'m glad I attended your session. Thank you..!!'
//     },
//     {
//       name: 'Janmejoya Mohapatra',
//       role: 'Chief Executive Officer',
//       company: 'JJ Financial Services & Consultants',
//       image: 'ddsills1.png',
//       rating: 5,
//       text: 'Ritu Arora was our trainer in imparting excel skills to us. She is really an excellent trainer, who possesses enough knowledge on excel. Her teaching methodology is quite systematic, easy learning & example based which enabled us to grasp the excel skills in a very short time. I really appreciate her & look forward to learning more in future.'
//     }
//   ];

//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 2) % testimonials.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, testimonials.length]);

//   const next = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 2) % testimonials.length);
//     setIsAutoPlaying(false);
//   };

//   const prev = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
//     setIsAutoPlaying(false);
//   };

//   const visibleTestimonials = [
//     testimonials[currentIndex],
//     testimonials[(currentIndex + 1) % testimonials.length],
//   ];

//   const slideVariants = {
//     enter: (dir: number) => ({
//       x: dir > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (dir: number) => ({
//       x: dir > 0 ? -300 : 300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <section id="testimonials" className="py-20 lg:py-32 bg-[#f89763]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
//             What Our Learners Say
//           </h2>
//           <p className="text-xl text-[#4a4a4a] max-w-3xl mx-auto">
//             Discover how professionals and organizations have transformed their skills and achieved remarkable results with Upwise.
//           </p>
//         </motion.div>

//         {/* Testimonials with horizontal animation */}
//         <div className="relative overflow-hidden">
//           <AnimatePresence initial={false} custom={direction} mode="wait">
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.5 }}
//               className="grid gap-8 md:grid-cols-2"
//             >
//               {visibleTestimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-6 rounded-3xl shadow-md"
//                 >
//                   <div className="flex items-center gap-1 mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} size={18} className="text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                   <blockquote className="text-lg text-gray-800 mb-6 leading-relaxed">
//                     "{testimonial.text}"
//                   </blockquote>
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-14 h-14 rounded-full object-cover"
//                     />
//                     <div>
//                       <div className="font-semibold text-gray-900">{testimonial.name}</div>
//                       <div className="text-gray-600 text-sm">{testimonial.role}</div>
//                       <div className="text-[#f89763] font-bold text-sm">{testimonial.company}</div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Navigation */}
//         <div className="flex items-center justify-between mt-10">

//           <div className="flex gap-2">
//             {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => {
//                   setDirection(i * 2 > currentIndex ? 1 : -1);
//                   setCurrentIndex(i * 2);
//                   setIsAutoPlaying(false);
//                 }}
//                 className={`w-3 h-3 rounded-full ${
//                   currentIndex === i * 2 ? 'bg-[#ffffff] w-6' : 'bg-gray-300 hover:bg-gray-400'
//                 } transition-all duration-300`}
//               />
//             ))}
//           </div>

//           <div className="flex gap-2">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={prev}
//               className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-[#f89763]"
//             >
//               <ChevronLeft size={18} />
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={next}
//               className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-[#f89763]"
//             >
//               <ChevronRight size={18} />
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;









import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { image } from 'framer-motion/client';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const testimonials = [
    {
      name: 'Yushi Kambe',
      role: 'Vice President',
      company: 'Sumitomo Mitsui Banking Corporation',
      image: 'mohapatra.png',
      rating: 5,
      text: 'Really appreciate Ritu ji for conducting the corporate MS excel session. Attended both Intermediate and Advanced class, and learnt advanced features of Excel including Macro which was quite helpful for the work. Your Kind and patient guidance definitely accelerated the learning.'
    },
    {
      name: 'Pratyush Raj Samal',
      role: 'Financial Planning and Analysis',
      company: 'Hitachi Energy',
      image: 'honeywell.png',
      rating: 5,
      text: 'Ritu demonstrated a deep knowledge in excel workings and shared her expertise in a pleasant and comprehensible manner. Although the training session lasted for a few days only, I have learnt from her more than I could expect. Her patience to attend each and everyone\'s questions is something I will always value.'
    },
    {
      name: 'Siddhesh Shinde',
      role: 'Valuation Professional',
      company: 'CBRE',
      image: 'kgjltjsk.png',
      rating: 5,
      text: 'Thank you Ritu ma\'am for a great Excel workshop. Great presentation style with lots of opportunities to ask queries. I have learned many new tools and how to work smartly. I recommend every Student and employee to go through this workshop.'
    },
    {
      name: 'Amit P',
      role: 'Chief Financial Officer',
      company: 'Psychotropics India Ltd.',
      image: 'amit.png',
      rating: 5,
      text: 'Recently, I attended one of your Advanced Excel and Powerpoint training programs organized by CII. It was terrific and the way you explained everything in detail was quite insightful. I have been working on Microsoft Excel for more than a decade, however I wasnt aware of new features which could come handy for doing my routine work. I\'m glad I attended your session. Thank you..!!'
    },
    {
      name: 'Janmejoya Mohapatra',
      role: 'Chief Executive Officer',
      company: 'JJ Financial Services & Consultants',
      image: 'ddsills1.png',
      rating: 5,
      text: 'Ritu Arora was our trainer in imparting excel skills to us. She is really an excellent trainer, who possesses enough knowledge on excel. Her teaching methodology is quite systematic, easy learning & example based which enabled us to grasp the excel skills in a very short time. I really appreciate her & look forward to learning more in future.'
    },
    {
      name: 'Zach Quast',
      role: ' Business Development',
      company: 'Lineage',
      image: 'picid1.jpg',
      rating: 5,
      text: 'I recently completed Ritu’s virtual seminar, "Excelerate Your Skills with Advanced Excel Functions," and it was an incredibly valuable experience. I thought I had a good understanding of Excel basics, but Ritu’s insights and techniques elevated my skills to a whole new level. The tips and shortcuts she shared have already made me more efficient—not just in Excel but in other programs as well.'
    },
    {
      name: 'Shambavi Vaidiyanathan',
      role: 'Risk Data Analyst',
      company: 'Mosaic Insurance',
      image: 'picid2.jpg',
      rating: 5,
      text: 'Rithu Ma\'am has been so helpful, kind and patient as a teacher. I feel so much more confident and equipped with Excel within the first few classes. She is such a lovely teacher and would recommend her to anyone who wants to an expert of excel and successfully navigate all of its powerful tools. :)'
    },
    {
      name: 'Rinku Patel',
      role: 'Global OHS Coordinator',
      company:'Teleperformance Group',
      image: 'picid3.jpg',
      rating: 5,
      text : 'Experienced Safety Manager with a demonstrated history of working in the outsourcing/offshoring industry. Skilled in Coaching, Training Needs Analysis, Team Building, Contact Centers, and Training Delivery. Strong operations professional with a Bachelor of Arts (B.A.) focused in Sociology from Sikkim Manipal University - Distance Education.'
    },
    {
      name: ' Raman Mishra',
      role: 'Driving Digital Media Excellence',
      company: 'Emami Limited',
      image: 'picid4.jpg',
      rating: 5,
      text: 'Ritu is on point when it comes to keeping a knowledge session crisp. I had attended one of her session in my previous organisation and I still carry those learning’s with me.'
    },
    {
      name: 'Siddhesh Shinde',
      role: 'Manager - Technical',
      company: 'HDFC Bank || Architect',
      image : 'picid5.jpg',
      rating: 5,
      text: 'Thank you Ritu ma’am for a great Excel workshop.   Great presentation style with lots of opportunities to ask queries. I have learned many new tools and how to work smartly. i recommend every Student and employee to go through this workshop.'
    },
    {
      name: 'Nidhi Mehra',
      role: 'CHRO',
      company: 'HONO',
      image: 'picid6.jpg',
      rating: 5,
      text: 'Ritu is an excellent Trainer. Have attended her Microsoft Excel and Presentation session. She does Magic to both the excel and presentation. She also shares lots of tips and tricks which makes work faster and easier. Personally one of favourite trainer. Thank you for making it so simple for us. God bless!!'
    },
    {
      name: 'Pratyush Raj Samal',
      role: 'Financial Planning and Analysis',
      company: 'Hitachi Energy',
      image: 'picid7.jpg',
      rating: 5,
      text: 'Ritu demonstrated a deep knowledge in excel workings and shared her expertise in a pleasant and comprehensible manner. Although the training session lasted for a few days only, I have learnt from her more than I could expect. Her patience to attend each and everyone’s questions is something I will always value.'
    },
    {
      name: 'Rashmeet Saluja',
      role: 'Finance Manager',
      company: 'Mimecast',
      image: 'picid8.jpg',
      rating: 5,
      text: 'Ritu mam is a great teacher with a lot of knowledge on advanced excel. She handles questions with a lot of patience!'
    },
     {
      name: 'Abdul Hadi Khan',
      role: 'General Manager Marketing',
      company: 'India Expo Mart Ltd.',
      image: 'picid9.jpg',
      rating: 5,
      text: 'It was really informative and was able to learn new skills which I may use in my professional carrier. I must thank rituji for being patient with us and resolving all our queries.'
    },

    {
      name: 'Sameer Siddiqui',
      role: 'Corporate Training Manager',
      company: 'Danube',
      image: 'picid10.jpg',
      rating: 5,
      text: 'I have attended an online session delivered by Ritu and found it very helpful for my Assignments. In a session of almost 8 hours, the audience never felt exhausted. Thanks Ritu for a power packed session.'
    },

    {
      name: 'Chetan Patel',
      role: 'HR Head',
      company: 'ASTRA POLYMERS',
      image: 'picid11.jpg',
      rating: 5,
      text: 'Hello Mam, being a corporate professional working with PowerPoint and Excel is very much essential on daily basis. So it was a great leading worship for me which is going to be helpful me in my personal as well as professional carrer.\n\nSo I feel proud to attend this training for 4 days because I had learn many new techniques, shortcuts & some formulas. I will delivered good results in my organisation by utilising all the learning’s during last 4 days.\n\nThanks a lot mam for the wonderful session.'
    },
    {
      name: 'Mansi Ahuja',
      role: 'Senior Key Account Manager',
      company: 'CarTrade Tech',
      image: 'picid12.jpg',
      rating: 5,
      text: 'Ritu, has great knowledge of PPT and Excel. She recently came to Radio Mirchi for training and it was just fantastic. She has a great knowledge and expertise !!!'
    },

    {
      name: 'Riti Goswami',
      role: 'Deputy Manager',
      company: 'Radio Mirchi',
      image: 'picid13.jpg',
      rating: 5,
      text: 'I have attended the MS-Excel & MS-PPT training in my company which was given by Ms. Ritu Arora and I\'m extremely thankful to her for this training. The session has cleared alot of my doubts and taught me so many new and insightful things. Her training style is very interactive and she\'s very patient with everyone. :)'
    },

    {
      name: 'Palak Kumra',
      role: 'Senior Brand Manager',
      company: 'boAt lifestyle',
      image: 'picid14.jpg',
      rating: 5,
      text: 'I attended Microsoft Excel workshop by Ritu in my company. She taught us about excel in depth and with so much calmness. Her teaching method was very interactive and informative. I got to learn so much from her session! I\'m glad that I attended her session. Looking forward to more such sessions with her :)'
    },

     {
      name: 'Lakshay Madan',
      role: 'Accountant Manager',
      company: 'Entertainment Network India Ltd',
      image: 'picid15.jpg',
      rating: 5,
      text: 'It was a great experience attending her training on PowerPoint. She is an expert in the domain. Got to learn various new tools which i hope will come handy in my field of work.'
    },

    {
      name: 'SAJIB DHAR',
      role: 'Manager - Digital Ad Revenue',
      company: 'Bookmyshow',
      image: 'picid16.jpg',
      rating: 5,
      text: 'It is not an easy task to handle and train people from different domain and different level of hierarchy in same session. Ritu handled that with ease. She has covered most important tools of Ms excel in a interactive, engaging and fun way. I thank her for conducting such a session.'
    },

  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const visibleTestimonials =
    window.innerWidth < 768
      ? [testimonials[currentIndex]] // only one on small screens
      : [
          testimonials[currentIndex],
          testimonials[(currentIndex + 1) % testimonials.length],
        ];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      style={{
        background: "radial-gradient(circle at center, #ffffffff, #f8976334)",
      }}
      className="py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f89763] mb-4">
            What Our Learners Say
          </h2>

          <p className="text-base sm:text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Discover how professionals and organizations have transformed their skills and achieved remarkable results with Upwise.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#f89763] bg-opacity-40 p-6 rounded-3xl shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-base sm:text-lg text-gray-800 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      <div className="text-[#f89763] font-bold text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 flex-col sm:flex-row gap-6 sm:gap-0">
          {/* Dots */}
          <div className="flex gap-2 justify-center sm:justify-start">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i * 2 > currentIndex ? 1 : -1);
                  setCurrentIndex(i * 2);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === i * 2 ? 'bg-white w-6' : 'bg-gray-300 hover:bg-gray-400'
                } transition-all duration-300`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2 justify-center sm:justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-[#f89763]"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-[#f89763]"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
