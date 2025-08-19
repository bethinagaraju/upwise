

// // import React, { useState, useEffect } from "react";

// // interface Testimonial {
// //   id: number;
// //   quote: string;
// //   author: string;
// //   title: string;
// //   companyLogo: string;
// //   companyName: string;
// // }

// // export default function Statistics(): JSX.Element {
// //   const testimonials: Testimonial[] = [
// //     {
// //       id: 0,
// //       quote: "Significant increase in proficiency on key skills",
// //       author: "VIVEK PATIL",
// //       title: "Deputy Manager, Proposal Estimation, Sales & Services",
// //       companyLogo: "https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png",
// //       companyName: "Accenture",
// //     },
// //     {
// //       id: 1,
// //       quote: "More than 20% of the cohort promoted within 3 months of program completion",
// //       author: "KAUMUDI MAHAJAN",
// //       title: "VP, Marketing, Disney India",
// //       companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
// //       companyName: "Amazon",
// //     },
// //     {
// //       id: 2,
// //       quote: "The program truly transformed our team's productivity and collaboration.",
// //       author: "ANNA SMITH",
// //       title: "HR Director, Tech Solutions",
// //       companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
// //       companyName: "Microsoft",
// //     },
// //     {
// //       id: 3,
// //       quote: "Excellent content and delivery. Our employees are more engaged than ever.",
// //       author: "JOHN DOE",
// //       title: "Head of L&D, Global Corp",
// //       companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1920px-Cisco_logo_blue_2016.svg.png",
// //       companyName: "Cisco",
// //     },
// //     {
// //       id: 4,
// //       quote: "A measurable impact on leadership skills across all levels of management.",
// //       author: "SARAH CONNOR",
// //       title: "Training Manager, Finance Group",
// //       companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/1920px-HubSpot_Logo.svg.png",
// //       companyName: "HubSpot",
// //     },
// //     {
// //       id: 5,
// //       quote: "The blended learning approach was highly effective and well-received by all participants.",
// //       author: "MICHAEL BROWN",
// //       title: "Operations Lead, Retail Chain",
// //       companyLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
// //       companyName: "Spotify",
// //     },
// //   ];

// //   const [startIndex, setStartIndex] = useState(0);

// //   const goToNext = () =>
// //     setStartIndex((prev) => (prev + 2) % testimonials.length);
// //   const goToPrev = () =>
// //     setStartIndex((prev) =>
// //       prev - 2 < 0 ? (testimonials.length + (prev - 2)) % testimonials.length : prev - 2
// //     );

// //   useEffect(() => {
// //     const t = setInterval(goToNext, 5000);
// //     return () => clearInterval(t);
// //   }, []);

// //   return (
// //     <section className="text-white relative overflow-hidden bg-[#f89763] py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="relative z-10 max-w-7xl mx-auto">
// //         <div className="text-center mb-12">
// //           <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#4a4a4a]">
// //             Why You Can Count On Us
// //           </h2>
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
// //           <Stat number="99" suffix="%" label="Learner NPS" subLabel="from 15,004 learners" />
// //           <Stat number="96" suffix="%" label="Highest Program Completion" />
// //           <Stat number="4.5" label="Course Feedback Rating from" subLabel="30,000+ course completions" />
// //         </div>

// //         <div className="flex justify-center">
// //           <Stat number="700,000+" label="Global Learners From 25+ Countries…" />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // interface StatProps {
// //   number: string;
// //   suffix?: string;
// //   label: string;
// //   subLabel?: string;
// // }

// // function Stat({ number, suffix, label, subLabel }: StatProps) {
// //   return (
// //     <div className="text-center px-4">
// //       <div className="font-bold mb-4 text-[48px] sm:text-[80px] md:text-[120px] leading-none text-white">
// //         {number}
// //         {suffix && (
// //           <span className="text-[24px] sm:text-[40px] md:text-[60px] align-top">
// //             {suffix}
// //           </span>
// //         )}
// //       </div>
// //       <p className="text-base sm:text-lg md:text-xl text-[#4a4a4a] font-medium">
// //         {label}
// //         {subLabel && <br />}
// //         {subLabel}
// //       </p>
// //     </div>
// //   );
// // }



// import React, { useState, useEffect } from "react";
// import CountUp from "react-countup";

// interface Testimonial {
//   id: number;
//   quote: string;
//   author: string;
//   title: string;
//   companyLogo: string;
//   companyName: string;
// }

// export default function Statistics(): JSX.Element {
//   const testimonials: Testimonial[] = [
//     // (Your testimonials stay here, unchanged)
//   ];

//   const [startIndex, setStartIndex] = useState(0);

//   const goToNext = () =>
//     setStartIndex((prev) => (prev + 2) % testimonials.length);
//   const goToPrev = () =>
//     setStartIndex((prev) =>
//       prev - 2 < 0 ? (testimonials.length + (prev - 2)) % testimonials.length : prev - 2
//     );

//   useEffect(() => {
//     const t = setInterval(goToNext, 5000);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <section className="text-white relative overflow-hidden bg-[#f89763] py-12 px-4 sm:px-6 lg:px-8">
//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#4a4a4a]">
//             Why You Can Count On Us
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
//           <Stat number={99} suffix="%" label="Learner NPS" subLabel="from 15,004 learners" />
//           <Stat number={96} suffix="%" label="Highest Program Completion" />
//           <Stat number={4.5} label="Course Feedback Rating from" subLabel="30,000+ course completions" decimals={1} />
//         </div>

//         <div className="flex justify-center">
//           <Stat number={700000} label="Global Learners From 25+ Countries…" separator="," />
//         </div>
//       </div>
//     </section>
//   );
// }

// interface StatProps {
//   number: number;
//   suffix?: string;
//   label: string;
//   subLabel?: string;
//   decimals?: number;
//   separator?: string;
// }

// function Stat({ number, suffix, label, subLabel, decimals = 0, separator }: StatProps) {
//   return (
//     <div className="text-center px-4">
//       <div className="font-bold mb-4 text-[48px] sm:text-[80px] md:text-[120px] leading-none text-white">
//         <CountUp
//           end={number}
//           duration={2.5}
//           suffix={suffix}
//           decimals={decimals}
//           separator={separator}
//         />
//       </div>
//       <p className="text-base sm:text-lg md:text-xl text-[#4a4a4a] font-medium">
//         {label}
//         {subLabel && <br />}
//         {subLabel}
//       </p>
//     </div>
//   );
// }






import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  companyLogo: string;
  companyName: string;
}

export default function Statistics(): JSX.Element {
  const testimonials: Testimonial[] = [
    // (Your testimonials stay here, unchanged)
  ];

  const [startIndex, setStartIndex] = useState(0);

  const goToNext = () =>
    setStartIndex((prev) => (prev + 2) % testimonials.length);
  const goToPrev = () =>
    setStartIndex((prev) =>
      prev - 2 < 0 ? (testimonials.length + (prev - 2)) % testimonials.length : prev - 2
    );

  useEffect(() => {
    const t = setInterval(goToNext, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="text-white relative overflow-hidden bg-[#f89763] py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#4a4a4a]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why You Can Count On Us
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <Stat number={100} suffix="%" label="Satisfaction rate"/>
          <Stat number={96} suffix="%" label="Highest Program Completion" />
          <Stat number={4.5} label="Course Feedback Rating from" subLabel="30,000+ course completions" decimals={1} />
        </div>

        <div className="flex justify-center">
          <Stat number={100000} label="Global Learners From 25+ Countries…" separator="," suffix="+" />
        </div>
      </div>
    </section>
  );
}

interface StatProps {
  number: number;
  suffix?: string;
  label: string;
  subLabel?: string;
  decimals?: number;
  separator?: string;
}

function Stat({ number, suffix, label, subLabel, decimals = 0, separator }: StatProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="text-center px-4">
      <div className="font-bold mb-4 text-[48px] sm:text-[80px] md:text-[120px] leading-none text-white">
        {inView ? (
          <CountUp
            end={number}
            duration={2.5}
            suffix={suffix}
            decimals={decimals}
            separator={separator}
          />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <p className="text-base sm:text-lg md:text-xl text-[#4a4a4a] font-medium">
        {label}
        {subLabel && <br />}
        {subLabel}
      </p>
    </div>
  );
}
