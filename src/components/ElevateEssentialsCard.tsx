

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';
import ContactPopup from './ContactPopup';

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
    img: 'Gemini_Generated_Image_4mi80l4mi80l4mi8.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    link: '/new-manager-program-course',
    features: [
      'Foundation skills for new managers',
      'Managing teams and performance',
      'Shifting from contributor to leader',
    ],
  },
  {
    title: 'Women Leadership Program',
    img: 'Gemini_Generated_Image_p0m6nep0m6nep0m6(1).png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    link: '/women-leadership-program-course',
    features: [
      'Building executive presence and confidence',
      'Assertiveness, influencing, and impact',
      'Navigating organizational biases',
    ],
  },
  {
    title: 'Innovation & Creative Thinking',
    img: 'Gemini_Generated_Image_zib7yrzib7yrzib7.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    link: '/innovation-creative-thinking-course',
    features: [
      'Structured & design thinking models',
      'Tools for ideation and breakthroughs',
      'Practical idea-generation techniques',
    ],
  },
  {
    title: 'Executive Presence',
    img: 'Gemini_Generated_Image_rwttrsrwttrsrwtt.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    link: '/executive-presence-course',
    features: [
      'Build influence and gravitas',
      'Command attention in leadership roles',
      'Authentic communication and appearance',
    ],
  },
  {
    title: 'Business Etiquette',
    img: 'Gemini_Generated_Image_fb3zj5fb3zj5fb3z.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    link: '/business-etiquette-course',
    features: [
      'Professional presence and grooming',
      'Email, meeting, and workplace etiquette',
      'Conflict-free workplace behaviors'
    ]
  },
  {
    title: 'Organizational & Talent Development',
    img:'Gemini_Generated_Image_axseyvaxseyvaxse.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    link: '/organizational-talent-development-course',
    features: [
      'Succession planning & L&D interventions',
      'Capability and skills assessments',
      'Internal coaching development',
    ]
  },
  {
    title: 'Communication Excellence',
    img:'Gemini_Generated_Image_7rkr2w7rkr2w7rkr.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    link: '/communication-excellence-course',
    features: [
      'Clarity and impact: written, spoken, non-verbal',
      'Effective feedback and presentations',
      'Advanced listening and rapport building',
    ]
  },
  {
    title: 'Diversity, Equity & Inclusion (D&I)',
    img:'Gemini_Generated_Image_mz2nlwmz2nlwmz2n.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    link: '/diversity-equity-inclusion-course',
    features: [
      'Awareness of unconscious bias',
      'Inclusive language and practices',
      'Building respectful, equitable workplaces',
    ]
  },
  {
    title: 'Emotional Intelligence',
    img:'Gemini_Generated_Image_u499utu499utu499.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    link: '/emotional-intelligence-course',
    features: [
      'Self-awareness and empathy building',
      'Sensitivity and social skills',
      'Relationship management for leaders',
    ]
  },
  {
    title: 'Team Building & Collaboration',
    img:'Gemini_Generated_Image_ngvablngvablngva.png',
    bgColor: 'bg-[#f89763]',
    hoverColor: 'hover:bg-[#f89763]/90',
    brochure: 'cover.png',
    link: '/team-building-collaboration-course',
    features: [
      'Fostering trust and unity',
      'Experiential workshops for cross-teams',
      'Breaking silos and energizing teams',
    ]
  },
];

const ElevateEssentialsCard: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleCard = (index: number) => {
    setExpandedCard(prev => (prev === index ? null : index));
  };
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBrochure, setSelectedBrochure] = useState("");

  return (
    <>
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
                className="w-full object-contain h-60 lazyload"
              />
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
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => {
                        setSelectedBrochure(card.brochure);
                        setShowPopup(true);
                      }}
                      className={`inline-block w-full px-4 py-2 text-white rounded font-semibold text-sm ${card.bgColor} ${card.hoverColor} transition`}
                    >
                      Download Brochure
                    </button>
                    {card.link && (
                      <button
                        onClick={() => navigate(card.link)}
                        className="inline-block w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold text-sm transition"
                      >
                        View Details
                      </button>
                    )}
                  </div>
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

      <ContactPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        brochure={selectedBrochure}
      />
    </>
  );
};

export default ElevateEssentialsCard;
