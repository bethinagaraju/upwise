import React from "react";

interface Stat {
  label: string;
  value: string;
  sub: string;
}

interface CourseStatsProps {
  stats: Stat[];
}

const CourseStats: React.FC<
  CourseStatsProps
> = ({ stats }) => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#f1fcf5]/60 border border-[#bbf7d0]/60 rounded-3xl p-6"
          >
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              {stat.label}
            </span>

            <h3 className="text-4xl font-black text-[#0f2c59]">
              {stat.value}
            </h3>

            <p className="text-sm font-medium text-slate-600 mt-1">
              {stat.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseStats;