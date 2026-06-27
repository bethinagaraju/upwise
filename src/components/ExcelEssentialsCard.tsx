


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, X } from 'lucide-react';
import { Download, Eye } from "lucide-react"

const styles = `
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(10px);}
  100% { opacity: 1; transform: translateY(0);}
}
@keyframes modalIn {
  0% { opacity: 0; transform: scale(0.92) translateY(20px);}
  100% { opacity: 1; transform: scale(1) translateY(0);}
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
.modal-animate {
  animation: modalIn 0.3s ease-out forwards;
}
`;

const ExcelEssentialsCard: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<{ brochure: string; title: string } | null>(null);
  const [brochureData, setBrochureData] = useState({ name: '', phone: '' });
  const navigate = useNavigate();

  const toggleCard = (index: number) => {
    setExpandedCard(prev => (prev === index ? null : index));
  };

  const handleBrochureClick = (card: { brochure: string; title: string }) => {
    setSelectedCard(card);
    setShowBrochureModal(true);
  };

  const handleBrochureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrochureData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBrochureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCard) return;

    // Trigger the download programmatically
    const link = document.createElement('a');
    link.href = selectedCard.brochure;
    link.download = `${selectedCard.title.replace(/ /g, '')}Brochure.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset and close modal
    setBrochureData({ name: '', phone: '' });
    setShowBrochureModal(false);
    setSelectedCard(null);
  };

  const cards = [
    {
      title: 'Excel Essentials',
      img: 'basic to advance excel.png',
      bgColor: 'bg-[#f89763]',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: '/mnt/data/18268d9e-1fab-4a69-a3c3-70d64c5e289d.png',
      link: '/excel-essentials-course',
      features: [
        'Formulas, functions, formatting, pivot tables',
        'Data validation & basic dashboards',
        'Intro to Power Query',
      ],
    },
    {
      title: 'Advanced Excel',
      img: 'advanced excel super champion.png',
      bgColor: 'bg-[#f89763]',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: 'cover.png',
      link: '/advance-excel-course',
      features: [
        'Power Pivot, advanced dashboards',
        'Lookup functions, dynamic ranges, macros',
        'Excel + AI integration (ChatGPT, Copilot)',
      ],
    },
    {
      title: 'Power BI Basic',
      bgColor: 'bg-[#f89763]',
      img: 'data visualization.png',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: 'cover.png',
      link: '/power-bi-basic-course',
      features: [
        'Connecting data to Power BI',
        'Basic visuals',
        'Intro to Power Query',
      ],
    },
    {
      title: 'Power BI Intermediate',
      img: 'data visualization.png',
      bgColor: 'bg-[#f89763]',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: 'cover.png',
      link: '/power-bi-intermediate-course',
      features: [
        'Data modeling',
        'DAX formulas',
        'Publishing dashboards',
      ],
    },
    {
      title: 'Power BI Advanced',
      img: 'data visualization.png',
      bgColor: 'bg-[#f89763]',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: 'cover.png',
      link: '/power-bi-advanced-course',
      features: [
        'Advanced DAX',
        'Row-level security',
        'Project-based dashboard builds'
      ]
    },
    {
      title: 'AI Tools in Microsoft Office',
      bgColor: 'bg-[#f89763]',
      img: 'microsoft word.png',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: 'cover.png',
      link: '/ai-tools-microsoft-office-course',
      features: [
        'ChatGPT prompts for Excel, Word, and PowerPoint',
        'Microsoft 365 Copilot features for task automation',
        'AI extensions and add-ins for day-to-day productivity',
      ]
    },
    {
      title: 'PowerPoint & Presenting with Impact',
      bgColor: 'bg-[#f89763]',
      img: 'powerpoint.png',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: 'cover.png',
      link: '/powerpoint-presenting-impact-course',
      features: [
        'Visual storytelling, smart templates, and animation',
        'Using AI to create scripts, slides, and charts',
        'Enhancing design with SmartArt and transitions',
      ]
    },
    {
      title: 'Outlook, Teams & Workplace Collaboration',
      bgColor: 'bg-[#f89763]',
      img: 'outlook.png',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: 'cover.png',
      link: '/outlook-teams-collaboration-course',
      features: [
        'Email efficiency, scheduling, calendar management',
        'Teams for meetings, file sharing, and live collaboration',
        'AI for auto-summarizing and drafting responses',
      ]
    },
    {
      title: 'MS Word Essentials',
      img: 'microsoft word.png',
      bgColor: 'bg-[#f89763]',
      hoverColor: 'hover:bg-[#f89763]/90',
      brochure: 'cover.png',
      link: '/ms-word-essentials-course',
      features: [
        'Formatting, styles, templates, and smart document workflows',
        'Collaborating on Word docs across Teams and SharePoint',
        'Proofing and summarizing content using AI',
      ]
    },
    {
      title: 'Microsoft Office + AI Tools',
      bgColor: 'bg-[#f89763]',
      hoverColor: 'hover:bg-[#f89763]/90',
      img: 'microsoft word.png',
      brochure: 'cover.png',
      link: '/microsoft-office-ai-tools-course',
      features: [
        'PowerPoint: Smart design, animation, AI-based slide writing',
        'Outlook: Email automation, calendar management',
        'Word: Templates, formatting, document protection',
        'Teams: File sharing, meeting tools, collaboration',
        'ChatGPT & Copilot: Prompting for Excel, Word, and PowerPoint automation',
      ]
    },
  ];

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

                <div className="flex flex-row gap-2 w-full">
                  <button
                    onClick={() => handleBrochureClick(card)}
                    className={`flex items-center justify-center gap-2 flex-1 px-4 py-2 text-white rounded font-semibold transition cursor-pointer ${card.bgColor} ${card.hoverColor}`}
                    title="Download Brochure"
                  >
                    <Download size={20} /> <span className='text-sm'>Brochure</span>
                  </button>
                  {card.link && (
                    <button
                      onClick={() => navigate(card.link)}
                      className="flex items-center justify-center gap-2 flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold transition"
                      title="View Details"
                    >
                      <ArrowRight size={20} /><span className='text-sm'>View Details</span>
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

      {/* Brochure Download Modal */}
      {showBrochureModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowBrochureModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative modal-animate"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowBrochureModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <h3 className="text-xl font-bold text-gray-800 mb-1">Download Brochure</h3>
            <p className="text-sm text-gray-500 mb-6">
              Fill in your details to download the <span className="font-semibold text-[#f89763]">{selectedCard?.title}</span> brochure.
            </p>

            <form onSubmit={handleBrochureSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={brochureData.name}
                onChange={handleBrochureChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f89763] transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={brochureData.phone}
                onChange={handleBrochureChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f89763] transition"
              />

              <button
                type="submit"
                className="w-full bg-[#f07b51] text-white py-3 rounded-lg font-semibold hover:bg-[#e66a3f] transition cursor-pointer"
              >
                Submit & Download
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExcelEssentialsCard;

