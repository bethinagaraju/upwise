// // import React, { useState } from 'react';
// // import { Star, Users2, TrendingUp } from 'lucide-react';

// // const highlights = [
// //   {
// //     icon: Star,
// //     title: '25+ Years of Excellence',
// //     body:
// //       'Over two decades of delivering corporate learning solutions that stick. Fortune 500s choose us for lasting impact.',
// //     borderColor: '#f89763',
// //   },
// //   {
// //     icon: Users2,
// //     title: 'People‑First Pedagogy',
// //     body:
// //       'Our methodology prioritizes human growth, psychological safety, and collaborative team dynamics for real‑world change.',
// //     borderColor: '#f89763',
// //   },
// //   {
// //     icon: TrendingUp,
// //     title: 'Proven, Measurable Results',
// //     body:
// //       '99% NPS, 30k+ professionals upskilled, and best‑in‑class ROI dashboards—data that speaks louder than claims.',
// //     borderColor: '#f89763',
// //   },
// // ];

// // function Theorys() {
// //   const [hoveredIndex, setHoveredIndex] = useState(null);
// //   const [clickedIndex, setClickedIndex] = useState(null);

// //   const isActive = (index) => hoveredIndex === index || clickedIndex === index;

// //   return (
// //     <section
// //       style={{
        
// //         padding: '2rem 1rem',
// //       }}
// //     >
// //       <div
// //         style={{
// //           display: 'flex',
// //           flexWrap: 'wrap',
// //           justifyContent: 'center',
// //           alignItems: 'stretch',
// //           maxWidth: '1200px',
// //           margin: '0 auto',
// //           gap: '12px',
// //         }}
// //       >
// //         {highlights.map((item, index) => {
// //           const Icon = item.icon;
// //           const active = isActive(index);

// //           return (
// //             <div
// //               key={index}
// //               onMouseEnter={() => setHoveredIndex(index)}
// //               onMouseLeave={() => setHoveredIndex(null)}
// //               onClick={() =>
// //                 setClickedIndex((prev) => (prev === index ? null : index))
// //               }
// //               style={{
// //                 flex: '1 1 100px',
// //                 minWidth: '140px',
// //                 maxWidth: active ? '360px' : '160px',
// //                 height: active ? 'auto' : '300px',
// //                 border: `3px solid ${item.borderColor}`,
// //                 backgroundColor: 'radial-gradient(circle at center, #ffffffff, #f8976334)',
// //                 borderRadius: '16px',
// //                 transition: 'all 0.4s ease-in-out',
// //                 boxSizing: 'border-box',
// //                 padding: '1rem',
// //                 display: 'flex',
// //                 flexDirection: 'column',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
// //                 cursor: 'pointer',
// //               }}
// //             >
// //               {active ? (
// //                 <div style={{ textAlign: 'center' }}>
// //                   <div
// //                     style={{
// //                       background: item.borderColor,
// //                       borderRadius: '50%',
// //                       padding: '0.75rem',
// //                       display: 'inline-block',
// //                       marginBottom: '1rem',
// //                     }}
// //                   >
// //                     <Icon size={28} color="white" />
// //                   </div>
// //                   <h3
// //                     style={{
// //                       fontSize: '1.1rem',
// //                       fontWeight: '700',
// //                       marginBottom: '0.5rem',
// //                       color: '#111',
// //                     }}
// //                   >
// //                     {item.title}
// //                   </h3>
// //                   <p
// //                     style={{
// //                       color: '#444',
// //                       fontSize: '0.95rem',
// //                       lineHeight: '1.4',
// //                       padding: '0 0.5rem',
// //                     }}
// //                   >
// //                     {item.body}
// //                   </p>
// //                 </div>
// //               ) : (
// //                 <span
// //                   style={{
// //                     transform: 'rotate(-180deg)',
// //                     writingMode: 'vertical-rl',
// //                     fontSize: '1rem',
// //                     fontWeight: 'bold',
// //                     color: item.borderColor,
// //                     textAlign: 'center',
// //                     lineHeight: '1.2',
// //                   }}
// //                 >
// //                   {item.title}
// //                 </span>
// //               )}
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </section>
// //   );
// // }

// // export default Theorys;










// import React, { useState } from 'react';
// import { Star, Users2, TrendingUp } from 'lucide-react';
// import './Theorys.css'; // Import styles

// const highlights = [
//   {
//     icon: Star,
//     title: '25+ Years of Excellence',
//     body:
//       'Over two decades of delivering corporate learning solutions that stick. Fortune 500s choose us for lasting impact.',
//     borderColor: '#f89763',
//   },
//   {
//     icon: Users2,
//     title: 'People‑First Pedagogy',
//     body:
//       'Our methodology prioritizes human growth, psychological safety, and collaborative team dynamics for real‑world change.',
//     borderColor: '#f89763',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Proven, Measurable Results',
//     body:
//       '99% NPS, 30k+ professionals upskilled, and best‑in‑class ROI dashboards—data that speaks louder than claims.',
//     borderColor: '#f89763',
//   },
// ];

// function Theorys() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [clickedIndex, setClickedIndex] = useState(null);

//   const isActive = (index) => hoveredIndex === index || clickedIndex === index;

//   return (
//     <section style={{ padding: '2rem 1rem' }}>
//       <div
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           alignItems: 'stretch',
//           maxWidth: '1200px',
//           margin: '0 auto',
//           gap: '12px',
//         }}
//       >
//         {highlights.map((item, index) => {
//           const Icon = item.icon;
//           const active = isActive(index);

//           return (
//             <div
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               onClick={() =>
//                 setClickedIndex((prev) => (prev === index ? null : index))
//               }
//               style={{
//                 flex: '1 1 100px',
//                 minWidth: '140px',
//                 maxWidth: active ? '360px' : '160px',
//                 height: active ? 'auto' : '300px',
//                 border: `3px solid ${item.borderColor}`,
//                 backgroundColor: 'white',
//                 borderRadius: '16px',
//                 transition: 'all 0.4s ease-in-out',
//                 boxSizing: 'border-box',
//                 padding: '1rem',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
//                 cursor: 'pointer',
//               }}
//             >
//               {active ? (
//                 <div style={{ textAlign: 'center' }}>
//                   <div
//                     style={{
//                       background: item.borderColor,
//                       borderRadius: '50%',
//                       padding: '0.75rem',
//                       display: 'inline-block',
//                       marginBottom: '1rem',
//                     }}
//                   >
//                     <Icon size={28} color="white" />
//                   </div>
//                   <h3
//                     style={{
//                       fontSize: '1.1rem',
//                       fontWeight: '700',
//                       marginBottom: '0.5rem',
//                       color: '#111',
//                     }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p
//                     style={{
//                       color: '#444',
//                       fontSize: '0.95rem',
//                       lineHeight: '1.4',
//                       padding: '0 0.5rem',
//                     }}
//                   >
//                     {item.body}
//                   </p>
//                 </div>
//               ) : (
//                 <span
//                   className="collapsed-title"
//                   style={{
//                     fontSize: '1rem',
//                     fontWeight: 'bold',
//                     color: item.borderColor,
//                     textAlign: 'center',
//                     lineHeight: '1.2',
//                   }}
//                 >
//                   {item.title}
//                 </span>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default Theorys;



// import React, { useState } from 'react';
// import { Star, Users2, TrendingUp } from 'lucide-react';
// import './Theorys.css'; // Import styles

// const highlights = [
//   {
//     icon: Star,
//     title: '25+ Years of Excellence',
//     body:
//       'Over two decades of delivering corporate learning solutions that stick. Fortune 500s choose us for lasting impact.',
//     borderColor: '#f89763',
//   },
//   {
//     icon: Users2,
//     title: 'People‑First Pedagogy',
//     body:
//       'Our methodology prioritizes human growth, psychological safety, and collaborative team dynamics for real‑world change.',
//     borderColor: '#f89763',
//   },
//   {
//     icon: TrendingUp,
//     title: 'Proven, Measurable Results',
//     body:
//       '99% NPS, 30k+ professionals upskilled, and best‑in‑class ROI dashboards—data that speaks louder than claims.',
//     borderColor: '#f89763',
//   },
// ];

// function Theorys() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [clickedIndex, setClickedIndex] = useState(null);

//   const isActive = (index) => hoveredIndex === index || clickedIndex === index;

//   return (
//     <section style={{ padding: '2rem 1rem' }}>
//       <div
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           alignItems: 'stretch',
//           maxWidth: '1200px',
//           margin: '0 auto',
//           gap: '12px',
//         }}
//       >
//         {highlights.map((item, index) => {
//           const Icon = item.icon;
//           const active = isActive(index);

//           return (
//             <div
//               className="theory-card"
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               onClick={() =>
//                 setClickedIndex((prev) => (prev === index ? null : index))
//               }
//               style={{
//                 flex: '1 1 100px',
//                 minWidth: '140px',
//                 maxWidth: active ? '360px' : '160px',
//                 height: active ? 'auto' : '300px',
//                 border: `3px solid ${item.borderColor}`,
//                 backgroundColor: 'white',
//                 borderRadius: '16px',
//                 transition: 'all 0.4s ease-in-out',
//                 boxSizing: 'border-box',
//                 padding: '1rem',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
//                 cursor: 'pointer',
//               }}
//             >
//               {active ? (
//                 <div style={{ textAlign: 'center' }}>
//                   <div
//                     style={{
//                       background: item.borderColor,
//                       borderRadius: '50%',
//                       padding: '0.75rem',
//                       display: 'inline-block',
//                       marginBottom: '1rem',
//                     }}
//                   >
//                     <Icon size={28} color="white" />
//                   </div>
//                   <h3
//                     style={{
//                       fontSize: '1.1rem',
//                       fontWeight: '700',
//                       marginBottom: '0.5rem',
//                       color: '#111',
//                     }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p
//                     style={{
//                       color: '#444',
//                       fontSize: '0.95rem',
//                       lineHeight: '1.4',
//                       padding: '0 0.5rem',
//                     }}
//                   >
//                     {item.body}
//                   </p>
//                 </div>
//               ) : (
//                 <span
//                   className="collapsed-title"
//                   style={{
//                     fontSize: '1rem',
//                     fontWeight: 'bold',
//                     color: item.borderColor,
//                     textAlign: 'center',
//                     lineHeight: '1.2',
//                   }}
//                 >
//                   {item.title}
//                 </span>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default Theorys;






import React, { useState } from 'react';
import { Star, Users2, TrendingUp } from 'lucide-react';
import './Theorys.css'; // Import styles

const highlights = [
  {
    icon: Star,
    title: '25+ Years of Excellence',
    body:
      'Over two decades of delivering corporate learning solutions that stick. Fortune 500s choose us for lasting impact.',
    borderColor: '#f89763',
  },
  {
    icon: Users2,
    title: 'People‑First Pedagogy',
    body:
      'Our methodology prioritizes human growth, psychological safety, and collaborative team dynamics for real‑world change.',
    borderColor: '#f89763',
  },
  {
    icon: TrendingUp,
    title: 'Proven, Measurable Results',
    body:
      '99% NPS, 30k+ professionals upskilled, and best‑in‑class ROI dashboards—data that speaks louder than claims.',
    borderColor: '#f89763',
  },
];

function Theorys() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const isActive = (index) => hoveredIndex === index || clickedIndex === index;

  return (
    <section style={{ padding: '2rem 1rem' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'stretch',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '12px',
        }}
      >
        {highlights.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(index);

          return (
            <div
              className="theory-card"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                setClickedIndex((prev) => (prev === index ? null : index))
              }
              style={{
                flex: '1 1 100px',
                minWidth: '140px',
                maxWidth: active ? '360px' : '240px',
                height: active ? 'auto' : '300px',
                border: `3px solid ${item.borderColor}`,
                backgroundColor: 'white',
                borderRadius: '16px',
                transition: 'all 0.4s ease-in-out',
                boxSizing: 'border-box',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                cursor: 'pointer',
              }}
            >
              {active ? (
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      background: item.borderColor,
                      borderRadius: '50%',
                      padding: '0.75rem',
                      display: 'inline-block',
                      marginBottom: '1rem',
                    }}
                  >
                    <Icon size={28} color="white" />
                  </div>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      marginBottom: '0.5rem',
                      color: '#111',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: '#444',
                      fontSize: '0.95rem',
                      lineHeight: '1.4',
                      padding: '0 0.5rem',
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ) : (
                <span
                  className="collapsed-title"
                  style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: item.borderColor,
                    textAlign: 'center',
                    lineHeight: '1.2',
                  }}
                >
                  {item.title}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Theorys;
