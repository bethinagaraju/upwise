



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
    label: "Internal Committee (ICC/IC) Members",
    img: "corporate-employees.png",
    imgBack: "professional-diverse-international-team-young-600nw-2353374147.webp",
    alt: "Corporate employees",
  },
  {
    label: "Senior Leadership & C-Suite Executives",
    img: "cover.png",
    imgBack: "1736405454584business-analyst.webp",
    alt: "Business analysts",
  },
  {
    label: "HR Leaders & Legal Departments",
    img: "leadership-skills.jpg",
    imgBack: "18_5_23_HL_inexperienced_leader.avif",
    alt: "Managers and executives",
  },
  {
    label: "People Managers & Team Leads",
    img: "types-of-organizations1.webp",
    imgBack: "IS-Feature_NERC-Compliance-and-Organization-Structure.png",
    alt: "Organizations tech",
  },
];

const EmpowerAbout: React.FC = () => {
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
            Empower is Upwise’s flagship program on POSH compliance, gender sensitization, and workplace conduct training, led by legal expert and educator Sanya Talwar. Designed for organizations that prioritize safe, equitable, and legally compliant workplaces, Empower blends legal accuracy with real-world applicability to drive lasting impact.
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

export default EmpowerAbout;
