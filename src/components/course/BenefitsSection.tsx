import React from "react";

const benefits = [
  "Analyze massive raw datasets with minimal stress",
  "Architect interactive executive-ready dashboards",
  "Automate repetitive monthly workflows",
  "Generate accurate corporate reports",
  "Use professional Excel shortcuts",
  "Maximize productivity and team performance",
];

const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="py-20 bg-[#0f2c59] text-white rounded-[40px] mx-4 my-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#22c55e] uppercase tracking-widest">
            Impact Assessment
          </span>

          <h2 className="text-4xl font-black mt-3">
            Strategic Workforce Outcomes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-[#153666] border border-[#1e457d] rounded-2xl p-6 flex gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                {idx + 1}
              </div>

              <p className="text-slate-300">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;