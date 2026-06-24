



// import React from "react";
// import { ArrowUpRight, ArrowRight } from "lucide-react";

// interface Program {
//   title: string;
//   subtitle: string;
//   image: string;
//   logoImage: string;
//   bottomBandColorClass: string;
//   link: string;
//   arrowDirection: "right" | "up-right";
// }

// export default function Programs() {
//   const programs: Program[] = [
//     {
//       title: "Ignite",
//       subtitle: "IT & AI Skills - Ignite innovation & tech power",
//       image:
//         "girlai.png",
//       logoImage:
//         "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
//       bottomBandColorClass: "bg-[#f89763]",
//       link: "/ignite",
//       arrowDirection: "up-right",
//     },
//     {
//       title: "Elevate",
//       subtitle: "Soft Skills - communication, leadership, emotional intelligence",
//       image:
//         "girlai.png",
//       logoImage:
//         "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
//       bottomBandColorClass: "bg-[#f89763]",
//       link: "https://us.harappa.education/program/rise/",
//       arrowDirection: "up-right",
//     },

//     {
//       title: "Empower",
//       subtitle: " POSH & Compliance - knowledge of rights, safe workplaces",
//       image:
//         "girlai.png",
//       logoImage:
//         "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
//       bottomBandColorClass: "bg-[#f89763]",
//       link: "https://us.harappa.education/program/soar/",
//       arrowDirection: "up-right",
//     },
//   ];

//   return (
//     <section
//       id="programs"
//       className="relative py-20"
//       style={{
//           background: 'radial-gradient(circle at center, #ffffffff, #f8976334)',
//         }}
//     >
//       <br />
//       <div className="h-full">
//         {/* <div className="h-[90%] bg-white"></div>
//         <div className="h-[10%] bg-yellow-500"></div> */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2
//               className="text-4xl font-bold text-[#f89763] mb-4"
//               style={{ fontSize: "50px" }}
//             >
//               Key Offerings
//             </h2>
//             <p className="text-lg text-[#4a4a4a] max-w-3xl mx-auto">
//               Transformative learning experiences designed to elevate skills and inspire growth
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-48 relative z-20">
//             {programs.map((p, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col rounded-lg overflow-hidden shadow-lg group"
//               >
//                 <div className="relative h-[380px]">
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="absolute inset-0 w-full h-full object-cover"
//                     referrerPolicy="no-referrer"
//                   />
//                   {/* <div className="absolute inset-0 bg-[#f89763] opacity-80 mix-blend-multiply" /> */}

                

//                   <div
//                     className={`absolute bottom-0 w-full ${p.bottomBandColorClass} bg-opacity-90 px-5 py-6 text-white`}
//                   >
//                     <div className="flex flex-col items-start">
                     
//                       <h3 className="text-4xl font-bold leading-none">
//                         {p.title}
//                       </h3>
//                       <p className="text-base font-medium">{p.subtitle}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => window.location.href = '/ignite'}
//                   className="bg-white py-4 px-5 text-sm font-semibold flex items-center hover:text-[#FDB813] transition-colors text-gray-800"
//                 >
//                   Navigate to Ignite
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//         <br />



//     </section>
//   );
// }







import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Program {
  title: string;
  subtitle: string;
  image: string;
  logoImage: string;
  bottomBandColorClass: string;
  link: string;
  arrowDirection: "right" | "up-right";
}

export default function Programs() {
  const navigate = useNavigate();

  const programs: Program[] = [
    {
      title: "IGNITE",
      subtitle: "IT & AI Skills - Excel, PowerPoint & Presenting with Impact, Microsoft Office + AI Tools",
      image: "Gemini_Generated_Image_xvx7hxvx7hxvx7hx-removebg-preview01.png",
      logoImage:
        "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
      bottomBandColorClass: "bg-[#f89763]",
      link: "/ignite",
      arrowDirection: "up-right",
    },
    {
      title: "ELEVATE",
      subtitle:
        "Soft Skills - Communication Excellence, Emotional Intelligence, Business Etiquette",
      image: "Gemini_Generated_Image_uzb9xiuzb9xiuzb9-removebg-preview.png",
      logoImage:
        "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
      bottomBandColorClass: "bg-[#f89763]",
      link: "/elevate",
      arrowDirection: "up-right",
    },
    {
      title: "EMPOWER",
      subtitle:
        "POSH & Compliance - ICC/IC Training, Leadership Sensitization, Custom Legal Workshops",
      image: "WhatsApp_Image_2025-09-14_at_13.38.46_b2dee5da-removebg-preview.png",
      logoImage:
        "https://us.harappa.education/wp-content/themes/harappaeducation/src/images/us-pages/program-logo.png",
      bottomBandColorClass: "bg-[#f89763]",
      link: "/empower",
      arrowDirection: "up-right",
    },
  ];

  return (
    <section
      id="programs"
      className="relative py-20"
      style={{
        background: "radial-gradient(circle at center, #ffffffff, #f8976334)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-[#f89763] mb-4"
            style={{ fontSize: "50px" }}
          >
            Key Offerings
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-3xl mx-auto">
            Transformative learning experiences designed to elevate skills and
            inspire growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 relative z-20">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              onClick={() => navigate(p.link)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            >
              <div className="relative h-[380px]">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                <div
                  className={`absolute bottom-0 w-full ${p.bottomBandColorClass} bg-opacity-90 px-5 py-6 text-white`}
                >
                  <div className="flex flex-col items-start">
                    <h3 className="text-5xl font-bold leading-none">
                      {p.title}
                    </h3>

                    {/* Word-by-word animation */}
                    <motion.p
                      className="text-base font-bold mt-2 text-[#4a4a4a]"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {p.subtitle.split(" ").map((word, j) => (
                        <motion.span
                          key={j}
                          className="inline-block mr-1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          {word.charAt(0).toUpperCase() + word.slice(1)}
                        </motion.span>
                      ))}
                    </motion.p>
                    
                  </div>
                </div>
              </div>

              <div className="bg-white py-4 px-5 text-sm font-semibold flex items-center text-gray-800 group-hover:text-[#f89763] transition-colors">
                  Navigate to <span className="text-[#f89763] ml-2">{p.title}</span>
                <ArrowUpRight className="ml-2 text-[#f89763]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
