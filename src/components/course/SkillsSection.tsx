import React from "react";

const skills = [
  "Excel Formulas",
  "Advanced Functions",
  "XLOOKUP Mastery",
  "INDEX & MATCH",
  "Dynamic Pivot Tables",
  "Pivot Charts",
  "Executive Dashboards",
  "Power Query ETL",
  "Conditional Formatting",
  "Data Validation",
  "Macros Automation",
  "Interactive Slicers",
];

const SkillsSection = () => {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6 text-center">
      <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] block mb-3">
        Resume Competencies
      </span>

      <h2 className="text-4xl font-black text-[#0f2c59] mb-12">
        Program Competency Standard
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-slate-50 border border-slate-200 text-slate-700 font-semibold px-5 py-3 rounded-xl"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;