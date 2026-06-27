


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const EmpowerEssentialsCard: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleCard = (index: number) => {
    setExpandedCard(prev => (prev === index ? null : index));
  };

  const programModules = [
    {
      title: 'POSH Awareness for Employees',
      duration: '1–2 hrs',
      img: 'Gemini_Generated_Image_2lm8vl2lm8vl2lm8.png',
      bgColor: 'bg-[#f89763]',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: 'cover.png',
      link: '/posh-awareness-employees-course',
      features: [
        'Understanding POSH Act in simple language',
        'Real-world scenarios & workplace examples',
        'Rights, responsibilities, and redressal',
      ],
    },
    {
      title: 'ICC/IC Training',
      duration: 'Half-Day or Full-Day',
      img: 'Gemini_Generated_Image_o5dnllo5dnllo5dn.png',
      bgColor: 'bg-[#f89763]',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: 'Gemini_Generated_Image_o5dnllo5dnllo5dn.png',
      link: '/icc-ic-training-course',
      features: [
        'Roles and powers of the Internal Committee',
        'How to conduct inquiries and documentation',
        'Handling complaints with neutrality and sensitivity',
      ],
    },
    {
      title: 'Leadership Sensitization',
      duration: 'Custom Duration',
      img: 'Gemini_Generated_Image_xcvardxcvardxcva.png',
      bgColor: 'bg-[#f89763]',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: 'cover.png',
      link: '/leadership-sensitization-course',
      features: [
        'Legal liabilities of senior management',
        'Role in prevention and policy enforcement',
        'Driving respectful workplace behavior',
      ],
    },
    {
      title: 'Workplace Conduct & Gender Sensitization',
      duration: 'Custom Duration',
      img: 'Gemini_Generated_Image_dpf9xsdpf9xsdpf9.png',
      bgColor: 'bg-[#f89763]',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: 'cover.png',
      link: '/workplace-conduct-gender-sensitization-course',
      features: [
        'Inclusive language and non-discriminatory behavior',
        'DEI fundamentals and unconscious bias',
        'Real-life case studies from corporate India',
      ],
    },
    {
      title: 'Custom Legal Workshops',
      duration: 'Custom Duration',
      img: 'Gemini_Generated_Image_5jldi65jldi65jld(1).png',
      bgColor: 'bg-[#f89763]',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: 'cover.png',
      link: '/custom-legal-workshops-course',
      features: [
        'Employment law and workplace rights',
        'Disciplinary investigations and due process',
        'HR compliance and high-risk case handling',
      ],
    },
  ];

  return (
    <div
      style={{ background: 'radial-gradient(circle at center, #ffffffff, #f8976334)' }}
      className="flex flex-wrap justify-center gap-12 p-12 py-24"
    >
      <style>{styles}</style>
      {programModules.map((card, index) => (
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
                  <a
                    href={card.brochure}
                    download={`${card.title.replace(/ /g, '')}Brochure.png`}
                    className={`inline-block w-full px-4 py-2 text-white rounded font-semibold text-sm ${card.bgColor} ${card.hoverColor} transition`}
                  >
                    Download Brochure
                  </a>
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
  );
};

export default EmpowerEssentialsCard;
