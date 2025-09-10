


// import React, { useState } from 'react';
// import { Clock } from 'lucide-react';

// const styles = `
// @keyframes fadeInUp {
//   0% { opacity: 0; transform: translateY(10px);}
//   100% { opacity: 1; transform: translateY(0);}
// }
// .card-hover {
//   transition: transform 0.3s cubic-bezier(.17,.67,.83,.67), box-shadow 0.3s;
// }
// .card-hover:hover {
//   transform: scale(1.045);
//   box-shadow: 0 6px 32px #f8976360;
//   z-index: 2;
// }
// .feature-animate {
//   opacity: 0;
//   animation: fadeInUp 0.5s forwards;
// }
// `;

// const ElevateEssentialsCard: React.FC = () => {
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);

//   const toggleCard = (index: number) => {
//     setExpandedCard(prev => (prev === index ? null : index));
//   };

//   const cards = [
//     {
//       title: 'Excel Essentials',
//       img: 'basic to advance excel.png',
//       bgColor: 'bg-[#f89763]',
//      hoverColor: 'hover:bg-[#f89763]/90',
//       brochure: '/mnt/data/18268d9e-1fab-4a69-a3c3-70d64c5e289d.png',
//       features: [
//         'Formulas, functions, formatting, pivot tables',
//         'Data validation & basic dashboards',
//         'Intro to Power Query',
//       ],
//     },
//     {
//       title: 'Advanced Excel',
//       img: 'advanced excel super champion.png',
//       bgColor: 'bg-[#f89763]',
//       hoverColor: 'hover:bg-[#f89763]/90',
//       brochure: 'cover.png',
//       features: [
//         'Power Pivot, advanced dashboards',
//         'Lookup functions, dynamic ranges, macros',
//         'Excel + AI integration (ChatGPT, Copilot)',
//       ],
//     },
//     {
//       title: 'Power BI Basic',
//       bgColor: 'bg-[#f89763]',
//       img :'data visualization.png',
//       hoverColor: 'hover:bg-[#f89763]/90',
//       brochure: 'cover.png',
//       features: [
//         'Connecting data to Power BI',
//         'Basic visuals',
//         'Intro to Power Query',
//       ],
//     },
//     {
//       title: 'Power BI Intermediate',
//       img :'data visualization.png',
//       bgColor: 'bg-[#f89763]',
//       hoverColor: 'hover:bg-[#f89763]/90',
//       brochure: 'cover.png',
//       features: [
//         'Data modeling',
//         'DAX formulas',
//         'Publishing dashboards',
//       ],
//     },
//     {
//       title: 'Power BI Advanced',
//       img :'data visualization.png',
//       bgColor: 'bg-[#f89763]',
//       hoverColor: 'hover:bg-[#f89763]/90',
//       brochure: 'cover.png',
//       features: [
//         'Advanced DAX',
//         'Row-level security',
//         'Project-based dashboard builds'
//       ]
//     },
//     {
//       title: 'AI Tools in Microsoft Office',
//       bgColor: 'bg-[#f89763]',
//       img:'microsoft word.png',
//       hoverColor: 'hover:bg-[#f89763]/90',
//       brochure: 'cover.png',
//       features: [
//         'ChatGPT prompts for Excel, Word, and PowerPoint',
//         'Microsoft 365 Copilot features for task automation',
//         'AI extensions and add-ins for day-to-day productivity',
//       ]
//     },
//     {
//       title: 'PowerPoint & Presenting with Impact',
//       bgColor: 'bg-[#f89763]',
//       img:'powerpoint.png',
//       hoverColor: 'hover:bg-[#f89763]/90',
//       brochure: 'cover.png',
//       features: [
//         'Visual storytelling, smart templates, and animation',
//         'Using AI to create scripts, slides, and charts',
//         'Enhancing design with SmartArt and transitions',
//       ]
//     },
//     {
//       title: 'Outlook, Teams & Workplace Collaboration',
//       bgColor: 'bg-[#f89763]',
//       img:'outlook.png',
//       hoverColor: 'hover:bg-[#f89763]/90',
//       brochure: 'cover.png',
//       features: [
//         'Email efficiency, scheduling, calendar management',
//         'Teams for meetings, file sharing, and live collaboration',
//         'AI for auto-summarizing and drafting responses',
//       ]
//     },
//     {
//       title: 'MS Word Essentials',
//       img:'microsoft word.png',
//       bgColor: 'bg-[#f89763]',
//       hoverColor: 'hover:bg-[#f89763]/90',
//       brochure: 'cover.png',
//       features: [
//         'Formatting, styles, templates, and smart document workflows',
//         'Collaborating on Word docs across Teams and SharePoint',
//         'Proofing and summarizing content using AI',
//       ]
//     },
//     {
//       title: 'Microsoft Office + AI Tools',
//       bgColor: 'bg-[#f89763]',
//       hoverColor: 'hover:bg-[#f89763]/90',
//       img:'microsoft word.png',
//       brochure: 'cover.png',
//       features: [
//         'PowerPoint: Smart design, animation, AI-based slide writing',
//         'Outlook: Email automation, calendar management',
//         'Word: Templates, formatting, document protection',
//         'Teams: File sharing, meeting tools, collaboration',
//         'ChatGPT & Copilot: Prompting for Excel, Word, and PowerPoint automation',
//       ]
//     },
//   ];

//   return (
//     <div style={{ background: "radial-gradient(circle at center, #ffffffff, #f8976334)" }} className="flex flex-wrap justify-center gap-12 p-12 py-24">
//       <style>{styles}</style>
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className="w-[350px] bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 card-hover"
//         >
//           <div className="relative">
//             <img
//               src={card.img}
//               alt={card.title}
//               className="w-full object-cover h-60"
//             />
//             <div className="absolute top-3 left-3 bg-white px-3 py-1 text-sm font-semibold shadow rounded">
//               ⭐ 4.8/5 Rating | 5000+ Enrolled
//             </div>
//           </div>

//           <div className="flex items-center justify-center gap-24 px-4 py-2">
//             <h2 className="text-xl font-bold text-[#f89763]">{card.title}</h2>
//           </div>
//           <div className="px-4 pb-3 text-center">
//             {expandedCard === index ? (
//               <>
//                 <ul className="list-disc list-inside text-left text-gray-700 text-sm space-y-1 mb-3">
//                   {card.features.map((item, i) => (
//                     <li
//                       key={i}
//                       className="feature-animate"
//                       style={{ animationDelay: `${0.15 * i + 0.1}s` }}
//                     >
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//                 <a
//                   href={card.brochure}
//                   download={`${card.title.replace(/ /g, '')}Brochure.png`}
//                   className={`inline-block px-4 py-2 text-white rounded ${card.bgColor} ${card.hoverColor} transition`}
//                 >
//                   Download Brochure
//                 </a>
//               </>
//             ) : (
//               <button
//                 onClick={() => toggleCard(index)}
//                 className={`px-6 py-2 text-white rounded ${card.bgColor} ${card.hoverColor} transition`}
//               >
//                 Learn More
//               </button>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ElevateEssentialsCard;



import React, { useState } from 'react';
import { Clock } from 'lucide-react';

const styles = `
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(10px);}
  100% { opacity: 1; transform: translateY(0);}
}
.card-hover {
  transition: transform 0.3s cubic-bezier(.17,.67,.83,.67), box-shadow 0.3s;
}
.card-hover:hover {
  transform: scale(1.045);
  box-shadow: 0 6px 32px #f8976360;
  z-index: 2;
}
.feature-animate {
  opacity: 0;
  animation: fadeInUp 0.5s forwards;
}
`;

const cards = [
  {
    title: 'New Manager Program',
    img: 'basic to advance excel.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    features: [
      'Foundation skills for new managers',
      'Managing teams and performance',
      'Shifting from contributor to leader',
    ],
  },
  {
    title: 'Women Leadership Program',
    img: 'advanced excel super champion.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    features: [
      'Building executive presence and confidence',
      'Assertiveness, influencing, and impact',
      'Navigating organizational biases',
    ],
  },
  {
    title: 'Innovation & Creative Thinking',
    img: 'data visualization.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    features: [
      'Structured & design thinking models',
      'Tools for ideation and breakthroughs',
      'Practical idea-generation techniques',
    ],
  },
  {
    title: 'Executive Presence',
    img: 'data visualization.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    features: [
      'Build influence and gravitas',
      'Command attention in leadership roles',
      'Authentic communication and appearance',
    ],
  },
  {
    title: 'Business Etiquette',
    img: 'data visualization.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    features: [
      'Professional presence and grooming',
      'Email, meeting, and workplace etiquette',
      'Conflict-free workplace behaviors'
    ]
  },
  {
    title: 'Organizational & Talent Development',
    img:'microsoft word.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    features: [
      'Succession planning & L&D interventions',
      'Capability and skills assessments',
      'Internal coaching development',
    ]
  },
  {
    title: 'Communication Excellence',
    img:'powerpoint.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    features: [
      'Clarity and impact: written, spoken, non-verbal',
      'Effective feedback and presentations',
      'Advanced listening and rapport building',
    ]
  },
  {
    title: 'Diversity, Equity & Inclusion (D&I)',
    img:'outlook.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    features: [
      'Awareness of unconscious bias',
      'Inclusive language and practices',
      'Building respectful, equitable workplaces',
    ]
  },
  {
    title: 'Emotional Intelligence',
    img:'microsoft word.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    features: [
      'Self-awareness and empathy building',
      'Sensitivity and social skills',
      'Relationship management for leaders',
    ]
  },
  {
    title: 'Team Building & Collaboration',
    img:'microsoft word.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    features: [
      'Fostering trust and unity',
      'Experiential workshops for cross-teams',
      'Breaking silos and energizing teams',
    ]
  },
];

const ElevateEssentialsCard: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(prev => (prev === index ? null : index));
  };

  return (
    <div style={{ background: "radial-gradient(circle at center, #ffffffff, #f8976334)" }} className="flex flex-wrap justify-center gap-12 p-12 py-24">
      <style>{styles}</style>
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-[350px] bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 card-hover"
        >
          <div className="relative">
            <img
              src={card.img}
              alt={card.title}
              className="w-full object-cover h-60"
            />
            <div className="absolute top-3 left-3 bg-white px-3 py-1 text-sm font-semibold shadow rounded">
              ⭐ 4.8/5 Rating | 5000+ Enrolled
            </div>
          </div>

          <div className="flex items-center justify-center gap-24 px-4 py-2">
            <h2 className="text-xl font-bold text-[#f89763]">{card.title}</h2>
          </div>
          <div className="px-4 pb-3 text-center">
            {expandedCard === index ? (
              <>
                <ul className="list-disc list-inside text-left text-gray-700 text-sm space-y-1 mb-3">
                  {card.features.map((item, i) => (
                    <li
                      key={i}
                      className="feature-animate"
                      style={{ animationDelay: `${0.15 * i + 0.1}s` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={card.brochure}
                  download={`${card.title.replace(/ /g, '')}Brochure.png`}
                  className={`inline-block px-4 py-2 text-white rounded ${card.bgColor} ${card.hoverColor} transition`}
                >
                  Download Brochure
                </a>
              </>
            ) : (
              <button
                onClick={() => toggleCard(index)}
                className={`px-6 py-2 text-white rounded ${card.bgColor} ${card.hoverColor} transition`}
              >
                Learn More
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ElevateEssentialsCard;
