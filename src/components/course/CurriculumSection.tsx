import React, { useState } from "react";
import {
  BarChart3,
  Database,
  FileSpreadsheet,
  TrendingUp,
  Zap,
  CheckCircle,
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: any[]) =>
  twMerge(clsx(inputs));

const curriculum = [
  {
    title: "Formulas Foundations",
    sub: "Module 01",
    icon: FileSpreadsheet,
    topics: [
      "Understanding Excel Formulas",
      "Cell Referencing",
      "Autosum & Autocalculate",
      "3D References",
      "External Workbook Linking",
    ],
  },
  {
    title: "Advanced Functions & Logic",
    sub: "Module 02",
    icon: Zap,
    topics: [
      "SUMIF & SUMIFS",
      "COUNTIF & COUNTIFS",
      "Nested IF",
      "IFERROR & IFNA",
      "VLOOKUP",
      "XLOOKUP",
      "INDEX & MATCH",
    ],
  },
  {
    title: "Data Engine & Management",
    sub: "Module 03",
    icon: Database,
    topics: [
      "Sorting",
      "Filtering",
      "Advanced Filters",
      "Subtotals",
      "Flash Fill",
    ],
  },
  {
    title: "Pivot Tables & Summaries",
    sub: "Module 04",
    icon: TrendingUp,
    topics: [
      "Pivot Tables",
      "Pivot Charts",
      "Slicers",
      "Timeline",
      "Calculated Fields",
    ],
  },
  {
    title: "Dashboards & Power Query",
    sub: "Module 05",
    icon: BarChart3,
    topics: [
      "Dashboard Design",
      "Charts",
      "Sparklines",
      "Power Query",
      "Workbook Merging",
    ],
  },
];

const CurriculumSection = () => {
  const [activeModule, setActiveModule] =
    useState(0);

  return (
    <section
      id="curriculum"
      className="py-20 bg-slate-50 border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#1a8b5e] uppercase tracking-[0.2em] bg-[#eefcf2] px-3 py-1 rounded-full">
            Detailed Roadmap
          </span>

          <h2 className="text-4xl font-black text-[#0f2c59] mt-4">
            What Your Workforce Will
            Master
          </h2>

          <p className="text-slate-600 mt-3">
            A comprehensive journey from
            formulas to dashboards.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-3">
            {curriculum.map(
              (module, index) => {
                const Icon =
                  module.icon;

                const isSelected =
                  activeModule ===
                  index;

                return (
                  <button
                    key={index}
                    onClick={() =>
                      setActiveModule(
                        index
                      )
                    }
                    className={cn(
                      "w-full flex items-center gap-4 p-5 rounded-2xl text-left border transition-all",
                      isSelected
                        ? "bg-white border-[#bbf7d0] shadow-lg"
                        : "hover:bg-white"
                    )}
                  >
                    <div
                      className={cn(
                        "p-3 rounded-xl",
                        isSelected
                          ? "bg-[#1a8b5e] text-white"
                          : "bg-slate-200"
                      )}
                    >
                      <Icon size={20} />
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-[#1a8b5e] uppercase block">
                        {module.sub}
                      </span>

                      <span className="font-bold text-[#0f2c59]">
                        {module.title}
                      </span>
                    </div>
                  </button>
                );
              }
            )}
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl border p-8 shadow-xl">
            <h3 className="font-bold text-[#0f2c59] text-xl mb-6">
              {
                curriculum[
                  activeModule
                ].title
              }
            </h3>

            <ul className="space-y-4">
              {curriculum[
                activeModule
              ].topics.map(
                (topic, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3"
                  >
                    <CheckCircle
                      size={18}
                      className="text-[#1a8b5e] mt-1"
                    />

                    <span>
                      {topic}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;