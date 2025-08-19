// // // // // // // // // // "use client"

// // // // // // // // // // import React, { useState, useEffect } from "react"
// // // // // // // // // // import { motion, AnimatePresence } from "framer-motion"

// // // // // // // // // // const features = [
// // // // // // // // // //   {
// // // // // // // // // //     step: 'Step 1',
// // // // // // // // // //     title: 'Learn the Basics',
// // // // // // // // // //     content: 'Start your Web3 journey by learning the basics of blockchain.',
// // // // // // // // // //     image: 'https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop'
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     step: 'Step 2',
// // // // // // // // // //     title: 'Deep Dive',
// // // // // // // // // //     content: 'Dive deep into blockchain fundamentals and smart contract development.',
// // // // // // // // // //     image: 'https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop'
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     step: 'Step 3',
// // // // // // // // // //     title: 'Build Projects',
// // // // // // // // // //     content: 'Graduate with hands-on Web3 experience through building decentralized applications.',
// // // // // // // // // //     image: 'https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop'
// // // // // // // // // //   },
// // // // // // // // // // ]

// // // // // // // // // // function FeatureStepsSection() {
// // // // // // // // // //   const [currentFeature, setCurrentFeature] = useState(0)
// // // // // // // // // //   const [progress, setProgress] = useState(0)
// // // // // // // // // //   const autoPlayInterval = 4000 // ms
// // // // // // // // // //   const imageHeight = "h-[500px]"

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const timer = setInterval(() => {
// // // // // // // // // //       if (progress < 100) {
// // // // // // // // // //         setProgress(prev => prev + 100 / (autoPlayInterval / 100))
// // // // // // // // // //       } else {
// // // // // // // // // //         setCurrentFeature(prev => (prev + 1) % features.length)
// // // // // // // // // //         setProgress(0)
// // // // // // // // // //       }
// // // // // // // // // //     }, 100)
// // // // // // // // // //     return () => clearInterval(timer)
// // // // // // // // // //   }, [progress])

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="p-8 md:p-12">
// // // // // // // // // //       <div className="max-w-7xl mx-auto w-full">
// // // // // // // // // //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
// // // // // // // // // //           Your Journey Starts Here
// // // // // // // // // //         </h2>

// // // // // // // // // //         <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
// // // // // // // // // //           {/* Left Text Section */}
// // // // // // // // // //           <div className="order-2 md:order-1 space-y-8">
// // // // // // // // // //             {features.map((feature, index) => (
// // // // // // // // // //               <motion.div
// // // // // // // // // //                 key={index}
// // // // // // // // // //                 className="flex items-center gap-6 md:gap-8"
// // // // // // // // // //                 initial={{ opacity: 0.3 }}
// // // // // // // // // //                 animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
// // // // // // // // // //                 transition={{ duration: 0.5 }}
// // // // // // // // // //               >
// // // // // // // // // //                 <motion.div
// // // // // // // // // //                   className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 ${
// // // // // // // // // //                     index === currentFeature
// // // // // // // // // //                       ? "bg-blue-600 border-blue-600 text-white scale-110"
// // // // // // // // // //                       : "bg-gray-200 border-gray-400"
// // // // // // // // // //                   }`}
// // // // // // // // // //                 >
// // // // // // // // // //                   {index <= currentFeature ? (
// // // // // // // // // //                     <span className="text-lg font-bold">✓</span>
// // // // // // // // // //                   ) : (
// // // // // // // // // //                     <span className="text-lg font-semibold">{index + 1}</span>
// // // // // // // // // //                   )}
// // // // // // // // // //                 </motion.div>

// // // // // // // // // //                 <div className="flex-1">
// // // // // // // // // //                   <h3 className="text-xl md:text-2xl font-semibold">
// // // // // // // // // //                     {feature.title || feature.step}
// // // // // // // // // //                   </h3>
// // // // // // // // // //                   <p className="text-sm md:text-lg text-gray-500">
// // // // // // // // // //                     {feature.content}
// // // // // // // // // //                   </p>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </motion.div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Right Image Section */}
// // // // // // // // // //           <div className={`order-1 md:order-2 relative ${imageHeight} overflow-hidden rounded-lg`}>
// // // // // // // // // //             <AnimatePresence mode="wait">
// // // // // // // // // //               {features.map((feature, index) =>
// // // // // // // // // //                 index === currentFeature ? (
// // // // // // // // // //                   <motion.div
// // // // // // // // // //                     key={index}
// // // // // // // // // //                     className="absolute inset-0 rounded-lg overflow-hidden"
// // // // // // // // // //                     initial={{ y: 100, opacity: 0, rotateX: -20 }}
// // // // // // // // // //                     animate={{ y: 0, opacity: 1, rotateX: 0 }}
// // // // // // // // // //                     exit={{ y: -100, opacity: 0, rotateX: 20 }}
// // // // // // // // // //                     transition={{ duration: 0.5, ease: "easeInOut" }}
// // // // // // // // // //                   >
// // // // // // // // // //                     <img
// // // // // // // // // //                       src={feature.image}
// // // // // // // // // //                       alt={feature.step}
// // // // // // // // // //                       className="w-full h-full object-cover"
// // // // // // // // // //                     />
// // // // // // // // // //                     <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/50 to-transparent" />
// // // // // // // // // //                   </motion.div>
// // // // // // // // // //                 ) : null
// // // // // // // // // //               )}
// // // // // // // // // //             </AnimatePresence>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   )
// // // // // // // // // // }

// // // // // // // // // // export default FeatureStepsSection








// // // // // // "use client"

// // // // // // import React, { useState, useEffect } from "react"
// // // // // // import { motion, AnimatePresence } from "framer-motion"

// // // // // // const feature = {
// // // // // //   step: "Module 1",
// // // // // //   title: "Microsoft Excel",
// // // // // //   duration: "8 or 16 hours",
// // // // // //   description: "Master Excel from basics to advanced features with AI integration",
// // // // // //   details: [
// // // // // //     "Excel Essentials (8 hrs): Formulas, functions, formatting, pivot tables",
// // // // // //     "Data validation & basic dashboards",
// // // // // //     "Intro to Power Query",
// // // // // //     "Advanced Excel (16 hrs): Power Pivot, advanced dashboards",
// // // // // //     "Lookup functions, dynamic ranges, macros",
// // // // // //     "Excel + AI integration (ChatGPT, Copilot)",
// // // // // //   ],
// // // // // //   images: [
// // // // // //     "https://images.unsplash.com/photo-1581093588401-6c89f6cf8f01?auto=format&fit=crop&w=2070&q=80",
// // // // // //     "https://images.unsplash.com/photo-1580894908360-7f0576c7c39a?auto=format&fit=crop&w=2070&q=80",
// // // // // //     "https://images.unsplash.com/photo-1580915411957-25ef2014f36e?auto=format&fit=crop&w=2070&q=80",
// // // // // //     "https://images.unsplash.com/photo-1580913431530-2b6b16b3dfcd?auto=format&fit=crop&w=2070&q=80",
// // // // // //     "https://images.unsplash.com/photo-1580894732444-9521f9d2cfb7?auto=format&fit=crop&w=2070&q=80",
// // // // // //     "https://images.unsplash.com/photo-1580894894510-0c2f1a2615df?auto=format&fit=crop&w=2070&q=80",
// // // // // //   ],
// // // // // // }

// // // // // // function FeatureStepsSection() {
// // // // // //   const [currentStep, setCurrentStep] = useState(0)
// // // // // //   const [progress, setProgress] = useState(0)
// // // // // //   const autoPlayInterval = 4000 // ms
// // // // // //   const imageHeight = "h-[500px]"

// // // // // //   useEffect(() => {
// // // // // //     const timer = setInterval(() => {
// // // // // //       if (progress < 100) {
// // // // // //         setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
// // // // // //       } else {
// // // // // //         setCurrentStep((prev) => (prev + 1) % feature.details.length)
// // // // // //         setProgress(0)
// // // // // //       }
// // // // // //     }, 100)
// // // // // //     return () => clearInterval(timer)
// // // // // //   }, [progress])

// // // // // //   return (
// // // // // //     <div className="p-8 md:p-12">
// // // // // //       <div className="max-w-7xl mx-auto w-full">
// // // // // //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
// // // // // //           Your Journey Starts Here
// // // // // //         </h2>

// // // // // //         <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
// // // // // //           {/* Text Section */}
// // // // // //           <div className="order-2 md:order-1 space-y-6">
// // // // // //             <motion.div
// // // // // //               className="w-fit px-4 py-2 rounded-full text-sm font-semibold bg-blue-600 text-white"
// // // // // //               initial={{ opacity: 0 }}
// // // // // //               animate={{ opacity: 1 }}
// // // // // //               transition={{ duration: 0.4 }}
// // // // // //             >
// // // // // //               {feature.step}
// // // // // //             </motion.div>

// // // // // //             <h3 className="text-2xl md:text-3xl font-semibold">{feature.title}</h3>
// // // // // //             <p className="text-sm text-gray-500 font-medium">{feature.duration}</p>
// // // // // //             <p className="text-md md:text-lg text-gray-700">{feature.description}</p>

// // // // // //             <div className="mt-4 space-y-4">
// // // // // //               {feature.details.map((item, index) => (
// // // // // //                 <motion.div
// // // // // //                   key={index}
// // // // // //                   initial={{ opacity: 0.3, scale: 0.95 }}
// // // // // //                   animate={{
// // // // // //                     opacity: index === currentStep ? 1 : 0.5,
// // // // // //                     scale: index === currentStep ? 1.05 : 1,
// // // // // //                   }}
// // // // // //                   transition={{ duration: 0.4 }}
// // // // // //                   className="flex items-start gap-4"
// // // // // //                 >
// // // // // //                   <div
// // // // // //                     className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 font-bold 
// // // // // //                       ${index === currentStep
// // // // // //                         ? "bg-blue-600 border-blue-600 text-white"
// // // // // //                         : "bg-gray-200 border-gray-400 text-gray-700"
// // // // // //                       }`}
// // // // // //                   >
// // // // // //                     {index + 1}
// // // // // //                   </div>
// // // // // //                   <p className="text-sm md:text-base">{item}</p>
// // // // // //                 </motion.div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Image Section */}
// // // // // //           <div className={`order-1 md:order-2 relative ${imageHeight} overflow-hidden rounded-lg`}>
// // // // // //             <AnimatePresence mode="wait">
// // // // // //               <motion.div
// // // // // //                 key={currentStep}
// // // // // //                 className="absolute inset-0 rounded-lg overflow-hidden"
// // // // // //                 initial={{ y: 100, opacity: 0, rotateX: -20 }}
// // // // // //                 animate={{ y: 0, opacity: 1, rotateX: 0 }}
// // // // // //                 exit={{ y: -100, opacity: 0, rotateX: 20 }}
// // // // // //                 transition={{ duration: 0.5, ease: "easeInOut" }}
// // // // // //               >
// // // // // //                 <img
// // // // // //                   src={feature.images[currentStep]}
// // // // // //                   alt={`Step ${currentStep + 1}`}
// // // // // //                   className="w-full h-full object-cover"
// // // // // //                 />
// // // // // //                 <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/50 to-transparent" />
// // // // // //               </motion.div>
// // // // // //             </AnimatePresence>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default FeatureStepsSection





// // // // // "use client"

// // // // // import React, { useState, useEffect } from "react"
// // // // // import { motion, AnimatePresence } from "framer-motion"

// // // // // const feature = {
// // // // //   step: "Module 1",
// // // // //   title: "Microsoft Excel",
// // // // //   duration: "8 or 16 hours",
// // // // //   description: "Master Excel from basics to advanced features with AI integration",
// // // // //   details: [
// // // // //     "Excel Essentials (8 hrs): Formulas, functions, formatting, pivot tables",
// // // // //     "Data validation & basic dashboards",
// // // // //     "Intro to Power Query",
// // // // //     "Advanced Excel (16 hrs): Power Pivot, advanced dashboards",
// // // // //     "Lookup functions, dynamic ranges, macros",
// // // // //     "Excel + AI integration (ChatGPT, Copilot)",
// // // // //   ],
// // // // //   images: [
// // // // //     "https://images.unsplash.com/photo-1581093588401-6c89f6cf8f01?auto=format&fit=crop&w=2070&q=80",
// // // // //     "https://images.unsplash.com/photo-1580894908360-7f0576c7c39a?auto=format&fit=crop&w=2070&q=80",
// // // // //     "https://images.unsplash.com/photo-1580915411957-25ef2014f36e?auto=format&fit=crop&w=2070&q=80",
// // // // //     "https://images.unsplash.com/photo-1580913431530-2b6b16b3dfcd?auto=format&fit=crop&w=2070&q=80",
// // // // //     "https://images.unsplash.com/photo-1580894732444-9521f9d2cfb7?auto=format&fit=crop&w=2070&q=80",
// // // // //     "https://images.unsplash.com/photo-1580894894510-0c2f1a2615df?auto=format&fit=crop&w=2070&q=80",
// // // // //   ],
// // // // // }

// // // // // function FeatureStepsSection() {
// // // // //   const [currentStep, setCurrentStep] = useState(0)
// // // // //   const [progress, setProgress] = useState(0)
// // // // //   const autoPlayInterval = 4000 // ms
// // // // //   const imageHeight = "h-[500px]"

// // // // //   useEffect(() => {
// // // // //     const timer = setInterval(() => {
// // // // //       if (progress < 100) {
// // // // //         setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
// // // // //       } else {
// // // // //         setCurrentStep((prev) => (prev + 1) % feature.details.length)
// // // // //         setProgress(0)
// // // // //       }
// // // // //     }, 100)
// // // // //     return () => clearInterval(timer)
// // // // //   }, [progress])

// // // // //   return (
// // // // //     <div className="p-8 md:p-12">
// // // // //       <div className="max-w-7xl mx-auto w-full">
// // // // //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
// // // // //           Your Journey Starts Here
// // // // //         </h2>

// // // // //         <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
// // // // //           {/* Text Section */}
// // // // //           <div className="order-2 md:order-1 space-y-6">
// // // // //             <motion.div
// // // // //               className="w-fit px-4 py-2 rounded-full text-sm font-semibold bg-blue-600 text-white"
// // // // //               initial={{ opacity: 0 }}
// // // // //               animate={{ opacity: 1 }}
// // // // //               transition={{ duration: 0.4 }}
// // // // //             >
// // // // //               {feature.step}
// // // // //             </motion.div>

// // // // //             <h3 className="text-2xl md:text-3xl font-semibold">{feature.title}</h3>
// // // // //             <p className="text-sm text-gray-500 font-medium">{feature.duration}</p>
// // // // //             <p className="text-md md:text-lg text-gray-700">{feature.description}</p>

// // // // //             <div className="mt-4 space-y-4">
// // // // //               {feature.details.map((item, index) => (
// // // // //                 <motion.div
// // // // //                   key={index}
// // // // //                   initial={{ opacity: 0.3, scale: 0.95 }}
// // // // //                   animate={{
// // // // //                     opacity: index === currentStep ? 1 : 0.5,
// // // // //                     scale: index === currentStep ? 1.05 : 1,
// // // // //                   }}
// // // // //                   transition={{ duration: 0.4 }}
// // // // //                   className="flex items-start gap-4"
// // // // //                 >
// // // // //                   <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold text-blue-600">
// // // // //                     {/* Option A: Number */}
// // // // //                     {index === currentStep ? <span className="text-xl">{index + 1}</span> : index + 1}

// // // // //                     {/* Option B: Use this instead if you want a checkmark for active step */}
// // // // //                     {/* {index === currentStep ? "✓" : index + 1} */}
// // // // //                   </div>
// // // // //                   <p className="text-sm md:text-base">{item}</p>
// // // // //                 </motion.div>





// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Image Section */}
// // // // //           <div className={`order-1 md:order-2 relative ${imageHeight} overflow-hidden rounded-lg`}>
// // // // //             <AnimatePresence mode="wait">
// // // // //               <motion.div
// // // // //                 key={currentStep}
// // // // //                 className="absolute inset-0 rounded-lg overflow-hidden"
// // // // //                 initial={{ y: 100, opacity: 0, rotateX: -20 }}
// // // // //                 animate={{ y: 0, opacity: 1, rotateX: 0 }}
// // // // //                 exit={{ y: -100, opacity: 0, rotateX: 20 }}
// // // // //                 transition={{ duration: 0.5, ease: "easeInOut" }}
// // // // //               >
// // // // //                 <img
// // // // //                   src={feature.images[currentStep]}
// // // // //                   alt={`Step ${currentStep + 1}`}
// // // // //                   className="w-full h-full object-cover"
// // // // //                 />
// // // // //                 <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/50 to-transparent" />
// // // // //               </motion.div>
// // // // //             </AnimatePresence>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default FeatureStepsSection









// // // // "use client"

// // // // import React, { useState, useEffect } from "react"
// // // // import { motion, AnimatePresence } from "framer-motion"

// // // // const feature = {
// // // //   step: "Module 1",
// // // //   title: "Microsoft Excel",
// // // //   duration: "8 or 16 hours",
// // // //   description: "Master Excel from basics to advanced features with AI integration",
// // // //   details: [
// // // //     "Excel Essentials (8 hrs): Formulas, functions, formatting, pivot tables",
// // // //     "Data validation & basic dashboards",
// // // //     "Intro to Power Query",
// // // //     "Advanced Excel (16 hrs): Power Pivot, advanced dashboards",
// // // //     "Lookup functions, dynamic ranges, macros",
// // // //     "Excel + AI integration (ChatGPT, Copilot)",
// // // //   ],
// // // //   images: [
// // // //     "hero-boy.png",
// // // //     "hero-girl.png",
// // // //     "https://images.unsplash.com/photo-1580915411957-25ef2014f36e?auto=format&fit=crop&w=2070&q=80",
// // // //     "https://images.unsplash.com/photo-1580913431530-2b6b16b3dfcd?auto=format&fit=crop&w=2070&q=80",
// // // //     "https://images.unsplash.com/photo-1580894732444-9521f9d2cfb7?auto=format&fit=crop&w=2070&q=80",
// // // //     "https://images.unsplash.com/photo-1580894894510-0c2f1a2615df?auto=format&fit=crop&w=2070&q=80",
// // // //   ],
// // // // }

// // // // function FeatureStepsSection() {
// // // //   const [currentStep, setCurrentStep] = useState(0)
// // // //   const [progress, setProgress] = useState(0)
// // // //   const autoPlayInterval = 4000 // ms
// // // //   const imageHeight = "h-[500px]"

// // // //   useEffect(() => {
// // // //     const timer = setInterval(() => {
// // // //       if (progress < 100) {
// // // //         setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
// // // //       } else {
// // // //         setCurrentStep((prev) => (prev + 1) % feature.details.length)
// // // //         setProgress(0)
// // // //       }
// // // //     }, 100)
// // // //     return () => clearInterval(timer)
// // // //   }, [progress, feature.details.length])

// // // //   return (
// // // //     <div className="p-8 md:p-12">
// // // //       <div className="max-w-7xl mx-auto w-full">
// // // //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
// // // //           Your Journey Starts Here
// // // //         </h2>

// // // //         <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
// // // //           {/* Text Section */}
// // // //           <div className="order-2 md:order-1 space-y-6">
// // // //             {/* <motion.div
// // // //               className="w-fit px-4 py-2 rounded-full text-sm font-semibold bg-blue-600 text-white"
// // // //               initial={{ opacity: 0 }}
// // // //               animate={{ opacity: 1 }}
// // // //               transition={{ duration: 0.4 }}
// // // //             >
// // // //               {feature.step}
// // // //             </motion.div> */}

// // // //             <h3 className="text-2xl md:text-3xl font-semibold">{feature.title}</h3>
// // // //             <p className="text-sm text-gray-500 font-medium">{feature.duration}</p>
// // // //             <p className="text-md md:text-lg text-gray-700">{feature.description}</p>

// // // //             <div className="mt-4 space-y-4">
// // // //               {feature.details.map((item, index) => (
// // // //                 <motion.div
// // // //                   key={index}
// // // //                   initial={{ opacity: 0.3, scale: 0.95 }}
// // // //                   animate={{
// // // //                     opacity: index === currentStep ? 1 : 0.5,
// // // //                     scale: index === currentStep ? 1.05 : 1,
// // // //                   }}
// // // //                   transition={{ duration: 0.4 }}
// // // //                   className="text-sm md:text-base"
// // // //                 >
// // // //                   <p>{item}</p>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* Image Section */}
// // // //           <div className={`order-1 md:order-2 relative ${imageHeight} overflow-hidden rounded-lg`}>
// // // //             <AnimatePresence mode="wait">
// // // //               {feature.images.map(
// // // //                 (image, index) =>
// // // //                   index === currentStep && (
// // // //                     <motion.div
// // // //                       key={index}
// // // //                       className="absolute inset-0 rounded-lg overflow-hidden"
// // // //                       initial={{ y: 100, opacity: 0, rotateX: -20 }}
// // // //                       animate={{ y: 0, opacity: 1, rotateX: 0 }}
// // // //                       exit={{ y: -100, opacity: 0, rotateX: 20 }}
// // // //                       transition={{ duration: 0.5, ease: "easeInOut" }}
// // // //                     >
// // // //                       <img
// // // //                         src={image}
// // // //                         alt={`Step ${currentStep + 1}`}
// // // //                         className="w-full h-full object-cover"
// // // //                         loading="lazy"
// // // //                       />
// // // //                       <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/50 to-transparent" />
// // // //                     </motion.div>
// // // //                   ),
// // // //               )}
// // // //             </AnimatePresence>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default FeatureStepsSection



// // // "use client"

// // // import React from "react"
// // // import { motion, AnimatePresence } from "framer-motion"

// // // interface Feature {
// // //   title: string
// // //   duration: string
// // //   description: string
// // //   details: string[]
// // //   image: string
// // // }

// // // const features: Feature[] = [
// // //   {
// // //     title: "Microsoft Excel",
// // //     duration: "8 or 16 hours",
// // //     description: "Master Excel from basics to advanced features with AI integration",
// // //     details: [
// // //       "Excel Essentials (8 hrs): Formulas, functions, formatting, pivot tables",
// // //       "Data validation & basic dashboards",
// // //       "Intro to Power Query",
// // //       "Advanced Excel (16 hrs): Power Pivot, advanced dashboards",
// // //       "Lookup functions, dynamic ranges, macros",
// // //       "Excel + AI integration (ChatGPT, Copilot)",
// // //     ],
// // //     image: "https://images.unsplash.com/photo-1537432376769-00a0c1969d7e?auto=format&fit=crop&w=2070&q=80",
// // //   },
// // //   {
// // //     title: "Power BI",
// // //     duration: "8, 16, or 24 hours",
// // //     description: "Transform data into insights with comprehensive Power BI training",
// // //     details: [
// // //       "Basics (8 hrs): Connecting data, basic visuals, intro to Power Query",
// // //       "Intermediate (16 hrs): Data modeling, DAX formulas, publishing dashboards",
// // //       "Advanced (24 hrs): Advanced DAX, row-level security",
// // //       "Project-based dashboard builds",
// // //     ],
// // //     image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=2070&q=80",
// // //   },
// // //   {
// // //     title: "AI Tools in Microsoft Office",
// // //     duration: "Integrated module",
// // //     description: "Harness AI power in your daily Microsoft Office workflows",
// // //     details: [
// // //       "ChatGPT prompts for Excel, Word, and PowerPoint",
// // //       "Microsoft 365 Copilot features for task automation",
// // //       "AI extensions and add-ins for day-to-day productivity",
// // //     ],
// // //     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80",
// // //   },
// // //   {
// // //     title: "PowerPoint & Presenting with Impact",
// // //     duration: "4-8 hours",
// // //     description: "Create impactful presentations with AI-powered design",
// // //     details: [
// // //       "Visual storytelling, smart templates, and animation",
// // //       "Using AI to create scripts, slides, and charts",
// // //       "Enhancing design with SmartArt and transitions",
// // //     ],
// // //     image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=2070&q=80",
// // //   },
// // //   {
// // //     title: "Outlook, Teams & Workplace Collaboration",
// // //     duration: "4-6 hours",
// // //     description: "Optimize workplace collaboration and communication",
// // //     details: [
// // //       "Email efficiency, scheduling, calendar management",
// // //       "Teams for meetings, file sharing, and live collaboration",
// // //       "AI for auto-summarizing and drafting responses",
// // //     ],
// // //     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80",
// // //   },
// // //   {
// // //     title: "MS Word Essentials",
// // //     duration: "3-4 hours",
// // //     description: "Master document creation and collaboration",
// // //     details: [
// // //       "Formatting, styles, templates, and smart document workflows",
// // //       "Collaborating on Word docs across Teams and SharePoint",
// // //       "Proofing and summarizing content using AI",
// // //     ],
// // //     image: "https://images.unsplash.com/photo-1550355296-c5a8e992f004?auto=format&fit=crop&w=2070&q=80",
// // //   },
// // //   {
// // //     title: "Microsoft Office + AI Tools",
// // //     duration: "",
// // //     description: "Boost productivity with integrated AI across Microsoft Office tools",
// // //     details: [
// // //       "PowerPoint: Smart design, animation, AI-based slide writing",
// // //       "Outlook: Email automation, calendar management",
// // //       "Word: Templates, formatting, document protection",
// // //       "Teams: File sharing, meeting tools, collaboration",
// // //       "ChatGPT & Copilot: Prompting for Excel, Word, and PowerPoint automation",
// // //     ],
// // //     image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=2070&q=80",
// // //   },
// // // ]

// // // function FeatureStepsSectionStacked() {
// // //   return (
// // //     <div className="p-8 md:p-12">
// // //       <div className="max-w-7xl mx-auto w-full space-y-16">
// // //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
// // //           Program Highlights
// // //         </h2>
// // //         {features.map((feature, idx) => (
// // //           <div
// // //             key={idx}
// // //             className="flex flex-col lg:flex-row gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden"
// // //           >
// // //             {/* Image */}
// // //             <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
// // //               <AnimatePresence mode="wait">
// // //                 <motion.img
// // //                   key={feature.image}
// // //                   src={feature.image}
// // //                   alt={feature.title}
// // //                   className="absolute inset-0 w-full h-full object-cover"
// // //                   initial={{ y: 80, opacity: 0 }}
// // //                   animate={{ y: 0, opacity: 1 }}
// // //                   exit={{ y: -80, opacity: 0 }}
// // //                   transition={{ duration: 0.5 }}
// // //                 />
// // //               </AnimatePresence>
// // //               <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
// // //             </div>
// // //             {/* Content */}
// // //             <div className="w-full lg:w-1/2 p-8">
// // //               <h3 className="text-2xl md:text-3xl font-semibold mb-2">{feature.title}</h3>
// // //               {feature.duration && (
// // //                 <p className="text-sm text-gray-500 font-medium mb-1">{feature.duration}</p>
// // //               )}
// // //               <p className="text-md md:text-lg text-gray-700 mb-4">{feature.description}</p>
// // //               <ul className="mt-4 space-y-4">
// // //                 {feature.details.map((item, i) => (
// // //                   <li key={i}>
// // //                     <motion.p
// // //                       initial={{ opacity: 0.5, scale: 0.98 }}
// // //                       animate={{ opacity: 1, scale: 1 }}
// // //                       transition={{ duration: 0.35, delay: 0.08 * i }}
// // //                       className="text-sm md:text-base"
// // //                     >
// // //                       {item}
// // //                     </motion.p>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default FeatureStepsSectionStacked










// // "use client"

// // import React from "react"
// // import { motion, AnimatePresence } from "framer-motion"

// // interface Feature {
// //   title: string
// //   duration: string
// //   description: string
// //   details: string[]
// //   image: string
// // }

// // const features: Feature[] = [
// //   {
// //     title: "Microsoft Excel",
// //     duration: "8 or 16 hours",
// //     description: "Master Excel from basics to advanced features with AI integration",
// //     details: [
// //       "Excel Essentials (8 hrs): Formulas, functions, formatting, pivot tables",
// //       "Data validation & basic dashboards",
// //       "Intro to Power Query",
// //       "Advanced Excel (16 hrs): Power Pivot, advanced dashboards",
// //       "Lookup functions, dynamic ranges, macros",
// //       "Excel + AI integration (ChatGPT, Copilot)",
// //     ],
// //     image: "https://images.unsplash.com/photo-1537432376769-00a0c1969d7e?auto=format&fit=crop&w=2070&q=80",
// //   },
// //   {
// //     title: "Power BI",
// //     duration: "8, 16, or 24 hours",
// //     description: "Transform data into insights with comprehensive Power BI training",
// //     details: [
// //       "Basics (8 hrs): Connecting data, basic visuals, intro to Power Query",
// //       "Intermediate (16 hrs): Data modeling, DAX formulas, publishing dashboards",
// //       "Advanced (24 hrs): Advanced DAX, row-level security",
// //       "Project-based dashboard builds",
// //     ],
// //     image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=2070&q=80",
// //   },
// //   {
// //     title: "AI Tools in Microsoft Office",
// //     duration: "Integrated module",
// //     description: "Harness AI power in your daily Microsoft Office workflows",
// //     details: [
// //       "ChatGPT prompts for Excel, Word, and PowerPoint",
// //       "Microsoft 365 Copilot features for task automation",
// //       "AI extensions and add-ins for day-to-day productivity",
// //     ],
// //     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80",
// //   },
// //   {
// //     title: "PowerPoint & Presenting with Impact",
// //     duration: "4-8 hours",
// //     description: "Create impactful presentations with AI-powered design",
// //     details: [
// //       "Visual storytelling, smart templates, and animation",
// //       "Using AI to create scripts, slides, and charts",
// //       "Enhancing design with SmartArt and transitions",
// //     ],
// //     image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=2070&q=80",
// //   },
// //   {
// //     title: "Outlook, Teams & Workplace Collaboration",
// //     duration: "4-6 hours",
// //     description: "Optimize workplace collaboration and communication",
// //     details: [
// //       "Email efficiency, scheduling, calendar management",
// //       "Teams for meetings, file sharing, and live collaboration",
// //       "AI for auto-summarizing and drafting responses",
// //     ],
// //     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80",
// //   },
// //   {
// //     title: "MS Word Essentials",
// //     duration: "3-4 hours",
// //     description: "Master document creation and collaboration",
// //     details: [
// //       "Formatting, styles, templates, and smart document workflows",
// //       "Collaborating on Word docs across Teams and SharePoint",
// //       "Proofing and summarizing content using AI",
// //     ],
// //     image: "https://images.unsplash.com/photo-1550355296-c5a8e992f004?auto=format&fit=crop&w=2070&q=80",
// //   },
// //   {
// //     title: "Microsoft Office + AI Tools",
// //     duration: "",
// //     description: "Boost productivity with integrated AI across Microsoft Office tools",
// //     details: [
// //       "PowerPoint: Smart design, animation, AI-based slide writing",
// //       "Outlook: Email automation, calendar management",
// //       "Word: Templates, formatting, document protection",
// //       "Teams: File sharing, meeting tools, collaboration",
// //       "ChatGPT & Copilot: Prompting for Excel, Word, and PowerPoint automation",
// //     ],
// //     image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=2070&q=80",
// //   },
// // ]

// // function FeatureStepsSectionStacked() {
// //   return (
// //     <div className="p-8 md:p-12">
// //       <div className="max-w-7xl mx-auto w-full space-y-16">
// //         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
// //           Program Highlights
// //         </h2>
// //         {features.map((feature, idx) => (
// //           <div
// //             key={idx}
// //             className={`flex flex-col lg:flex-row ${
// //               idx % 2 === 1 ? "lg:flex-row-reverse" : ""
// //             } gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden`}
// //           >
// //             {/* Image */}
// //             <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
// //               <AnimatePresence mode="wait">
// //                 <motion.img
// //                   key={feature.image}
// //                   src={feature.image}
// //                   alt={feature.title}
// //                   className="absolute inset-0 w-full h-full object-cover"
// //                   initial={{ y: 80, opacity: 0 }}
// //                   animate={{ y: 0, opacity: 1 }}
// //                   exit={{ y: -80, opacity: 0 }}
// //                   transition={{ duration: 0.5 }}
// //                 />
// //               </AnimatePresence>
// //               <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
// //             </div>
// //             {/* Content */}
// //             <div className="w-full lg:w-1/2 p-8">
// //               <h3 className="text-2xl md:text-3xl font-semibold mb-2">
// //                 {feature.title}
// //               </h3>
// //               {feature.duration && (
// //                 <p className="text-sm text-gray-500 font-medium mb-1">
// //                   {feature.duration}
// //                 </p>
// //               )}
// //               <p className="text-md md:text-lg text-gray-700 mb-4">
// //                 {feature.description}
// //               </p>
// //               <ul className="mt-4 space-y-4">
// //                 {feature.details.map((item, i) => (
// //                   <li key={i}>
// //                     <motion.p
// //                       initial={{ opacity: 0.5, scale: 0.98 }}
// //                       animate={{ opacity: 1, scale: 1 }}
// //                       transition={{ duration: 0.35, delay: 0.08 * i }}
// //                       className="text-sm md:text-base"
// //                     >
// //                       {item}
// //                     </motion.p>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }

// // export default FeatureStepsSectionStacked





// "use client"

// import React from "react"
// import { motion, AnimatePresence } from "framer-motion"

// interface FeatureProps {
//   title: string
//   duration: string
//   description: string
//   details: string[]
//   image: string
//   reverse?: boolean
// }

// function Feature({
//   title,
//   duration,
//   description,
//   details,
//   image,
//   reverse = false,
// }: FeatureProps) {
//   return (
//     <div
//       className={`flex flex-col lg:flex-row ${
//         reverse ? "lg:flex-row-reverse" : ""
//       } gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden`}
//     >
//       {/* Image */}
//       <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={image}
//             src={image}
//             alt={title}
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ y: 80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -80, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//         <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="w-full lg:w-1/2 p-8">
//         <h3 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h3>
//         {duration && (
//           <p className="text-sm text-gray-500 font-medium mb-1">{duration}</p>
//         )}
//         <p className="text-md md:text-lg text-gray-700 mb-4">{description}</p>
//         <ul className="mt-4 space-y-4">
//           {details.map((item, i) => (
//             <li key={i}>
//               <motion.p
//                 initial={{ opacity: 0.5, scale: 0.98 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.35, delay: 0.08 * i }}
//                 className="text-sm md:text-base"
//               >
//                 {item}
//               </motion.p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// function MicrosoftExcel() {
//   return (
//     <Feature
//       title="Microsoft Excel"
//       duration="8 or 16 hours"
//       description="Excel Essentials (8 hrs)"
//       details={[
//         "Formulas, functions, formatting, pivot tables",
//         "Data validation & basic dashboards",
//         "Intro to Power Query",
//         "Advanced Excel (16 hrs): Power Pivot, advanced dashboards",
//         "Lookup functions, dynamic ranges, macros",
//         "Excel + AI integration (ChatGPT, Copilot)",
//       ]}
//       image="https://images.unsplash.com/photo-1537432376769-00a0c1969d7e?auto=format&fit=crop&w=2070&q=80"
//       reverse={false}
//     />
//   )
// }

// function PowerBI() {
//   return (
//     <Feature
//       title="Power BI"
//       duration="8, 16, or 24 hours"
//       description="Transform data into insights with comprehensive Power BI training"
//       details={[
//         "Basics (8 hrs): Connecting data, basic visuals, intro to Power Query",
//         "Intermediate (16 hrs): Data modeling, DAX formulas, publishing dashboards",
//         "Advanced (24 hrs): Advanced DAX, row-level security",
//         "Project-based dashboard builds",
//       ]}
//       image="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=2070&q=80"
//       reverse={true}
//     />
//   )
// }

// function AIToolsInMicrosoftOffice() {
//   return (
//     <Feature
//       title="AI Tools in Microsoft Office"
//       duration="Integrated module"
//       description="Harness AI power in your daily Microsoft Office workflows"
//       details={[
//         "ChatGPT prompts for Excel, Word, and PowerPoint",
//         "Microsoft 365 Copilot features for task automation",
//         "AI extensions and add-ins for day-to-day productivity",
//       ]}
//       image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80"
//       reverse={false}
//     />
//   )
// }

// function PowerPointPresentingWithImpact() {
//   return (
//     <Feature
//       title="PowerPoint & Presenting with Impact"
//       duration="4-8 hours"
//       description="Create impactful presentations with AI-powered design"
//       details={[
//         "Visual storytelling, smart templates, and animation",
//         "Using AI to create scripts, slides, and charts",
//         "Enhancing design with SmartArt and transitions",
//       ]}
//       image="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=2070&q=80"
//       reverse={true}
//     />
//   )
// }

// function OutlookTeamsWorkplaceCollaboration() {
//   return (
//     <Feature
//       title="Outlook, Teams & Workplace Collaboration"
//       duration="4-6 hours"
//       description="Optimize workplace collaboration and communication"
//       details={[
//         "Email efficiency, scheduling, calendar management",
//         "Teams for meetings, file sharing, and live collaboration",
//         "AI for auto-summarizing and drafting responses",
//       ]}
//       image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80"
//       reverse={false}
//     />
//   )
// }

// function MSWordEssentials() {
//   return (
//     <Feature
//       title="MS Word Essentials"
//       duration="3-4 hours"
//       description="Master document creation and collaboration"
//       details={[
//         "Formatting, styles, templates, and smart document workflows",
//         "Collaborating on Word docs across Teams and SharePoint",
//         "Proofing and summarizing content using AI",
//       ]}
//       image="https://images.unsplash.com/photo-1550355296-c5a8e992f004?auto=format&fit=crop&w=2070&q=80"
//       reverse={true}
//     />
//   )
// }

// function MicrosoftOfficePlusAITools() {
//   return (
//     <Feature
//       title="Microsoft Office + AI Tools"
//       duration=""
//       description="Boost productivity with integrated AI across Microsoft Office tools"
//       details={[
//         "PowerPoint: Smart design, animation, AI-based slide writing",
//         "Outlook: Email automation, calendar management",
//         "Word: Templates, formatting, document protection",
//         "Teams: File sharing, meeting tools, collaboration",
//         "ChatGPT & Copilot: Prompting for Excel, Word, and PowerPoint automation",
//       ]}
//       image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=2070&q=80"
//       reverse={false}
//     />
//   )
// }

// function FeatureStepsSectionStacked() {
//   return (
//     <div className="p-8 md:p-12">
//       <div className="max-w-7xl mx-auto w-full space-y-16">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
//           Program Highlights
//         </h2>

//         <MicrosoftExcel />
//         <PowerBI />
//         <AIToolsInMicrosoftOffice />
//         <PowerPointPresentingWithImpact />
//         <OutlookTeamsWorkplaceCollaboration />
//         <MSWordEssentials />
//         <MicrosoftOfficePlusAITools />
//       </div>
//     </div>
//   )
// }

// export default FeatureStepsSectionStacked













"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"

// function MicrosoftExcel() {
//   return (
//     <div className="flex flex-col lg:flex-row gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">
//       {/* Image */}
//       <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key="excel-image"
//             src="https://images.unsplash.com/photo-1537432376769-00a0c1969d7e?auto=format&fit=crop&w=2070&q=80"
//             alt="Microsoft Excel"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ y: 80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -80, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//         <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="w-full lg:w-1/2 p-8">
//         <h3 className="text-2xl md:text-3xl font-semibold mb-2">Microsoft Excel</h3>
//         <p className="text-sm text-gray-500 font-medium mb-1">8 or 16 hours</p>
//         <p className="text-md md:text-lg text-gray-700 mb-4">Master Excel from basics to advanced features with AI integration</p>
//         <ul className="mt-4 space-y-4">
//           {[
//             "Excel Essentials (8 hrs): Formulas, functions, formatting, pivot tables",
//             "Data validation & basic dashboards",
//             "Intro to Power Query",
//             "Advanced Excel (16 hrs): Power Pivot, advanced dashboards",
//             "Lookup functions, dynamic ranges, macros",
//             "Excel + AI integration (ChatGPT, Copilot)",
//           ].map((item, i) => (
//             <li key={i}>
//               <motion.p
//                 initial={{ opacity: 0.5, scale: 0.98 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.35, delay: 0.08 * i }}
//                 className="text-sm md:text-base"
//               >
//                 {item}
//               </motion.p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// function MicrosoftExcel() {
//   return (
//     <div className="flex flex-col lg:flex-row gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">

//       {/* Image */}
//       <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
     
//         <AnimatePresence mode="wait">
//           <motion.img
//             key="excel-image"
//             src="https://images.unsplash.com/photo-1537432376769-00a0c1969d7e?auto=format&fit=crop&w=2070&q=80"
//             alt="Microsoft Excel"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ y: 80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -80, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//         <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
//       </div>

//       {/* Content - Left side divided into two parts */}
      
//         {/* Left info - Title and main duration */}
        

//         {/* Right info - Two parts for Excel Essentials (8 hrs) & (16 hrs) */}
//         <div className="space-y-6">
        
//           {/* Excel Essentials 8 hrs */}
//           <div>
//             <h4 className="text-xl font-semibold text-blue-600 mb-2">
//               Excel Essentials (8 hrs):
//             </h4>
//             <ul className="list-disc list-inside text-gray-700 space-y-1">
//               {[
//                 "Formulas, functions, formatting, pivot tables",
//                 "Data validation & basic dashboards",
//                 "Intro to Power Query",
//               ].map((item, i) => (
//                 <li key={i} className="text-sm md:text-base">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Excel Essentials 16 hrs */}
//           <div>
//             <h4 className="text-xl font-semibold text-blue-600 mb-2">
//               Excel Essentials (16 hrs):
//             </h4>
//             <ul className="list-disc list-inside text-gray-700 space-y-1">
//               {[
//                 "Power Pivot, advanced dashboards",
//                 "Lookup functions, dynamic ranges, macros",
//                 "Excel + AI integration (ChatGPT, Copilot)",
//               ].map((item, i) => (
//                 <li key={i} className="text-sm md:text-base">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



function MicrosoftExcel() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">
      
      {/* Image */}
      <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
        <AnimatePresence mode="wait">
          <motion.img
            key="excel-image"
            src="exel-1.png"
            alt="Microsoft Excel"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Content - single div containing all info */}
      <div className="w-full lg:w-1/2 p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-3">
          Microsoft Excel <span className="text-orange-400">(8 or 16 hours)</span>
        </h3>
        <p className="text-md md:text-lg text-gray-400 mb-6">
          Master Excel from basics to advanced features with AI integration
        </p>

        {/* Excel Essentials (8 hrs) */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-orange-400 mb-2">
            Excel Essentials (8 hrs):
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {[
              "Formulas, functions, formatting, pivot tables",
              "Data validation & basic dashboards",
              "Intro to Power Query",
            ].map((item, i) => (
              <li key={i} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Excel Essentials (16 hrs) */}
        <div>
          <h4 className="text-xl font-semibold text-orange-400 mb-2">
            Excel Essentials (16 hrs):
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {[
              "Power Pivot, advanced dashboards",
              "Lookup functions, dynamic ranges, macros",
              "Excel + AI integration (ChatGPT, Copilot)",
            ].map((item, i) => (
              <li key={i} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}




// function PowerBI() {
//   return (
//     <div className="flex flex-col lg:flex-row-reverse gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">
//       {/* Image */}
//       <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key="powerbi-image"
//             src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=2070&q=80"
//             alt="Power BI"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ y: 80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -80, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//         <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="w-full lg:w-1/2 p-8">
//         <h3 className="text-2xl md:text-3xl font-semibold mb-2">Power BI</h3>
//         <p className="text-sm text-gray-500 font-medium mb-1">8, 16, or 24 hours</p>
//         <p className="text-md md:text-lg text-gray-700 mb-4">
//           Transform data into insights with comprehensive Power BI training
//         </p>
//         <ul className="mt-4 space-y-4">
//           {[
//             "Basics (8 hrs): Connecting data, basic visuals, intro to Power Query",
//             "Intermediate (16 hrs): Data modeling, DAX formulas, publishing dashboards",
//             "Advanced (24 hrs): Advanced DAX, row-level security",
//             "Project-based dashboard builds",
//           ].map((item, i) => (
//             <li key={i}>
//               <motion.p
//                 initial={{ opacity: 0.5, scale: 0.98 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.35, delay: 0.08 * i }}
//                 className="text-sm md:text-base"
//               >
//                 {item}
//               </motion.p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }



function PowerBI() {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">
      
      {/* Image */}
      <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
        <AnimatePresence mode="wait">
          <motion.img
            key="powerbi-image"
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=2070&q=80"
            alt="Power BI"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Content - single div */}
      <div className="w-full lg:w-1/2 p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-3">
          Power BI <span className="text-orange-400">(8, 16, or 24 hours)</span>
        </h3>

        <p className="text-md md:text-lg text-gray-700 mb-6">
          Transform data into insights with comprehensive Power BI training
        </p>

        {/* Basics (8 hrs) */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-orange-300 mb-2">
            Basics (8 hrs):
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {[
              "Connecting data",
              "Basic visuals",
              "Intro to Power Query",
            ].map((item, i) => (
              <li key={i} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Intermediate (16 hrs) */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-orange-300 mb-2">
            Intermediate (16 hrs):
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {[
              "Data modeling",
              "DAX formulas",
              "Publishing dashboards",
            ].map((item, i) => (
              <li key={i} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Advanced (24 hrs) */}
        <div>
          <h4 className="text-xl font-semibold text-orange-300 mb-2">
            Advanced (24 hrs):
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {[
              "Advanced DAX",
              "Row-level security",
              "Project-based dashboard builds",
            ].map((item, i) => (
              <li key={i} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}



// AIToolsInMicrosoftOffice



// function AIToolsInMicrosoftOffice() {
//   return (
//     <div className="flex flex-col lg:flex-row gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">
//       {/* Image */}
//       <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key="ai-tools-image"
//             src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80"
//             alt="AI Tools in Microsoft Office"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ y: 80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -80, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//         <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="w-full lg:w-1/2 p-8">
//         <h3 className="text-2xl md:text-3xl font-semibold mb-2">AI Tools in Microsoft Office</h3>
//         <p className="text-sm text-gray-500 font-medium mb-1">Integrated module</p>
//         <p className="text-md md:text-lg text-gray-700 mb-4">
//           Harness AI power in your daily Microsoft Office workflows
//         </p>
//         <ul className="mt-4 space-y-4">
//           {[
//             "ChatGPT prompts for Excel, Word, and PowerPoint",
//             "Microsoft 365 Copilot features for task automation",
//             "AI extensions and add-ins for day-to-day productivity",
//           ].map((item, i) => (
//             <li key={i}>
//               <motion.p
//                 initial={{ opacity: 0.5, scale: 0.98 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.35, delay: 0.08 * i }}
//                 className="text-sm md:text-base"
//               >
//                 {item}
//               </motion.p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// function AIToolsInMicrosoftOffice() {
//   return (
//     <div className="flex flex-col lg:flex-row gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">
//       {/* Image and Content Combined */}
//       <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key="ai-tools-image"
//             src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80"
//             alt="AI Tools in Microsoft Office"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ y: 80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -80, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//         <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
//       </div>

//       <div className="w-full lg:w-1/2 p-8">
//         <h3 className="text-2xl md:text-3xl font-bold mb-3">AI Tools in Microsoft Office</h3>
//         <p className="text-md md:text-lg text-gray-700 mb-6">
//           Harness AI power in your daily Microsoft Office workflows
//         </p>
//         <ul className="list-disc list-inside text-gray-700 space-y-2">
//           {[
//             "ChatGPT prompts for Excel, Word, and PowerPoint",
//             "Microsoft 365 Copilot features for task automation",
//             "AI extensions and add-ins for day-to-day productivity",
//           ].map((item, i) => (
//             <li key={i} className="text-sm md:text-base">
//               <motion.p
//                 initial={{ opacity: 0.5, scale: 0.98 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.35, delay: 0.08 * i }}
//               >
//                 {item}
//               </motion.p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }


function AIToolsInMicrosoftOffice() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">
      
      {/* Image */}
      <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
        <AnimatePresence mode="wait">
          <motion.img
            key="excel-image"
            src="microsoft-ai.jpg"
            alt="Microsoft Excel"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Content - single div containing all info */}
      <div className="w-full lg:w-1/2 p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-3">
          AI Tools in Microsoft Office
        </h3>
        <p className="text-md md:text-lg text-gray-700 mb-6">
          Harness AI power in your daily Microsoft Office workflows
        </p>

        {/* Excel Essentials (8 hrs) */}
        <div className="mb-6">
         
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {[
              "ChatGPT prompts for Excel, Word, and PowerPoint",
              "Microsoft 365 Copilot features for task automation",
              "Microsoft 365 Copilot features for task automation",
            ].map((item, i) => (
              <li key={i} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Excel Essentials (16 hrs) */}
        {/* <div>
          <h4 className="text-xl font-semibold text-blue-600 mb-2">
            Excel Essentials (16 hrs):
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {[
              "Power Pivot, advanced dashboards",
              "Lookup functions, dynamic ranges, macros",
              "Excel + AI integration (ChatGPT, Copilot)",
            ].map((item, i) => (
              <li key={i} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  )
}




function OutlookTeamsWorkplaceCollaboration() {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">
      
      {/* Image */}
      <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
        <AnimatePresence mode="wait">
          <motion.img
            key="powerbi-image"
            src="word-pdf.jpg"
            alt="Power BI"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Content - single div */}
      <div className="w-full lg:w-1/2 p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-3">
          PowerPoint & Presenting with Impact
        </h3>

        <p className="text-md md:text-lg text-gray-700 mb-6">
          Create impactful presentations with AI-powered design for PowerPoint & Presenting with Impact
        </p>

        {/* Basics (8 hrs) */}
        <div className="mb-6">
          
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {[
              "Visual storytelling, smart templates, and animation",
"Using AI to create scripts, slides, and charts",
"Enhancing design with SmartArt and transitions"
            ].map((item, i) => (
              <li key={i} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Intermediate (16 hrs) */}
        
      </div>
    </div>
  )
}






// function OutlookTeamsWorkplaceCollaboration() {
//   return (
//     <div className="flex flex-col lg:flex-row gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">
//       {/* Image */}
//       <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key="outlook-teams-image"
//             src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80"
//             alt="Outlook, Teams & Workplace Collaboration"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ y: 80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -80, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//         <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="w-full lg:w-1/2 p-8">
//         <h3 className="text-2xl md:text-3xl font-semibold mb-2">Outlook, Teams & Workplace Collaboration</h3>
//         <p className="text-sm text-gray-500 font-medium mb-1">4-6 hours</p>
//         <p className="text-md md:text-lg text-gray-700 mb-4">
//           Optimize workplace collaboration and communication
//         </p>
//         <ul className="mt-4 space-y-4">
//           {[
//             "Email efficiency, scheduling, calendar management",
//             "Teams for meetings, file sharing, and live collaboration",
//             "AI for auto-summarizing and drafting responses",
//           ].map((item, i) => (
//             <li key={i}>
//               <motion.p
//                 initial={{ opacity: 0.5, scale: 0.98 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.35, delay: 0.08 * i }}
//                 className="text-sm md:text-base"
//               >
//                 {item}
//               </motion.p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }


// function OutlookTeamsWorkplaceCollaboration() {
//   return (
//     <div className="flex flex-col lg:flex-row gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">

//       {/* Image */}
//       <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key="outlook-teams-image"
//             src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80"
//             alt="Outlook, Teams & Workplace Collaboration"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ y: 80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -80, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//         <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="w-full lg:w-1/2 p-8">
//         <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
//           <span className="text-green-600 text-lg">✅</span>
//           <span>Outlook, Teams & Workplace Collaboration</span>
//           <span className="text-blue-600 text-base ml-2 font-semibold">(4-6 hours)</span>
//         </h3>

//         <p className="text-md md:text-lg text-gray-700 mb-6">
//           Optimize workplace collaboration and communication
//         </p>

//         <ul className="list-disc list-inside text-gray-700 space-y-2">
//           {[
//             "Email efficiency, scheduling, calendar management",
//             "Teams for meetings, file sharing, and live collaboration",
//             "AI for auto-summarizing and drafting responses",
//           ].map((item, i) => (
//             <li key={i} className="text-sm md:text-base">
//               <motion.p
//                 initial={{ opacity: 0.5, scale: 0.98 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.35, delay: 0.08 * i }}
//               >
//                 {item}
//               </motion.p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }


// function Outlooks() {
//   return (
//     <div className="flex flex-col lg:flex-row gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">
      
//       {/* Image */}
//       <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key="excel-image"
//             src="https://images.unsplash.com/photo-1537432376769-00a0c1969d7e?auto=format&fit=crop&w=2070&q=80"
//             alt="Microsoft Excel"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ y: 80, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -80, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//         <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
//       </div>

//       {/* Content - single div containing all info */}
//       <div className="w-full lg:w-1/2 p-8">
//         <h3 className="text-2xl md:text-3xl font-bold mb-3">
//           AI Tools in Microsoft Office
//         </h3>
//         <p className="text-md md:text-lg text-gray-700 mb-6">
//           Harness AI power in your daily Microsoft Office workflows
//         </p>

//         {/* Excel Essentials (8 hrs) */}
//         <div className="mb-6">
         
//           <ul className="list-disc list-inside text-gray-700 space-y-1">
//             {[
//               "ChatGPT prompts for Excel, Word, and PowerPoint",
//               "Microsoft 365 Copilot features for task automation",
//               "Microsoft 365 Copilot features for task automation",
//             ].map((item, i) => (
//               <li key={i} className="text-sm md:text-base">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Excel Essentials (16 hrs) */}
//         {/* <div>
//           <h4 className="text-xl font-semibold text-blue-600 mb-2">
//             Excel Essentials (16 hrs):
//           </h4>
//           <ul className="list-disc list-inside text-gray-700 space-y-1">
//             {[
//               "Power Pivot, advanced dashboards",
//               "Lookup functions, dynamic ranges, macros",
//               "Excel + AI integration (ChatGPT, Copilot)",
//             ].map((item, i) => (
//               <li key={i} className="text-sm md:text-base">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div> */}
//       </div>
//     </div>
//   )
// }


function OutlookTalks() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">
      
      {/* Image */}
      <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
        <AnimatePresence mode="wait">
          <motion.img
            key="excel-image"
            src="exel-1.png"
            alt="Microsoft Excel"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Content - single div containing all info */}
      <div className="w-full lg:w-1/2 p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-3">
            Outlook, Teams & Workplace Collaboration
        </h3>
        <p className="text-md md:text-lg text-gray-700 mb-6">
          Optimize workplace collaboration and communication with Outlook and Teams
        </p>

        {/* Excel Essentials (8 hrs) */}
        <div className="mb-6">
         
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {[
              "Email efficiency, scheduling, calendar management",
"Teams for meetings, file sharing, and live collaboration",
"AI for auto-summarizing and drafting responses",
            ].map((item, i) => (
              <li key={i} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Excel Essentials (16 hrs) */}
        {/* <div>
          <h4 className="text-xl font-semibold text-blue-600 mb-2">
            Excel Essentials (16 hrs):
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {[
              "Power Pivot, advanced dashboards",
              "Lookup functions, dynamic ranges, macros",
              "Excel + AI integration (ChatGPT, Copilot)",
            ].map((item, i) => (
              <li key={i} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  )
}




function MSWordEssentials() {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">
      {/* Image */}
      <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
        <AnimatePresence mode="wait">
          <motion.img
            key="msword-image"
            src="word-pdf.jpg"
            alt="MS Word Essentials"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 p-8">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-orange-400">MS Word Essentials (3-4 hours)</h3>
        {/* <p className="text-sm text-orange-400 font-medium mb-1">3-4 hours</p> */}
        <p className="text-md md:text-lg text-gray-700 mb-4">Master document creation and collaboration</p>
        <ul className="mt-4 space-y-4">
          {[
            "Formatting, styles, templates, and smart document workflows",
            "Collaborating on Word docs across Teams and SharePoint",
            "Proofing and summarizing content using AI",
          ].map((item, i) => (
            <li key={i}>
              <motion.p
                initial={{ opacity: 0.5, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.08 * i }}
                className="text-sm md:text-base"
              >
                {item}
              </motion.p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function MicrosoftOfficePlusAITools() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center rounded-2xl shadow-lg bg-white overflow-hidden">
      {/* Image */}
      <div className="w-full lg:w-1/2 h-[300px] md:h-[420px] lg:h-[500px] relative flex-shrink-0">
        <AnimatePresence mode="wait">
          <motion.img
            key="office-ai-image"
            src="microsoft-AI.png"
            alt="Microsoft Office + AI Tools"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 p-8">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-orange-400">Microsoft Office + AI Tools</h3>
        {/* No duration */}
        <p className="text-md md:text-lg text-gray-700 mb-4">
          Boost productivity with integrated AI across Microsoft Office tools
        </p>
        <ul className="mt-4 space-y-4">
          {[
            "PowerPoint: Smart design, animation, AI-based slide writing",
            "Outlook: Email automation, calendar management",
            "Word: Templates, formatting, document protection",
            "Teams: File sharing, meeting tools, collaboration",
            "ChatGPT & Copilot: Prompting for Excel, Word, and PowerPoint automation",
          ].map((item, i) => (
            <li key={i}>
              <motion.p
                initial={{ opacity: 0.5, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.08 * i }}
                className="text-sm md:text-base"
              >
                {item}
              </motion.p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function FeatureStepsSectionStacked() {
  return (
    <div className="p-8 md:p-12">
      <div className="max-w-7xl mx-auto w-full space-y-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-orange-500">
          Program Highlights
        </h2>

        <MicrosoftExcel />
        <PowerBI />
        <AIToolsInMicrosoftOffice />
        {/* <PowerPointPresentingWithImpact /> */}
        <OutlookTeamsWorkplaceCollaboration />
        <OutlookTalks/>
        <MSWordEssentials />
        <MicrosoftOfficePlusAITools />
      </div>
    </div>
  )
}

export default FeatureStepsSectionStacked
