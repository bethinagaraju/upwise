import React from "react";
import ExcelSlider from "./ExcelSlider";

const CourseHero = () => {
  const tags = [
    "16 hrs session",
    "Hands-on training",
    "Real-time scenarios",
    "Corporate-ready curriculum",
  ];

  return (
    <section
      id="overview"
      className="relative bg-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full lg:w-[45%] h-full bg-[#f1fcf5]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-bold text-[#1a8b5e] uppercase tracking-widest">
              Microsoft Certified Trainer
              Led Course
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0f2c59] leading-[1.1] tracking-tight mt-4">
              Advance Excel
              <br />
              Training
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg mt-6">
              A 16-hour hands-on session
              to help professionals
              analyze data, build
              reports, automate
              repetitive tasks, and
              create dashboard-ready
              Excel workbooks.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#eefcf2] text-[#1a8b5e] border border-[#bbf7d0] px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-[#22c55e] text-white font-bold px-8 py-3.5 rounded-xl">
                Enquire for Training
              </button>

              <button className="bg-white border border-slate-200 text-[#0f2c59] font-bold px-8 py-3.5 rounded-xl">
                View Curriculum
              </button>
            </div>

            <p className="text-slate-500 text-sm mt-8">
              Trainer:
              <span className="font-bold text-[#0f2c59] ml-1">
                Ritu Arora
              </span>
              , Microsoft Certified
              Trainer
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md border border-green-600 rounded-3xl overflow-hidden shadow-lg">
         <ExcelSlider />
            {/* <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-7">
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
              </div>

              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs text-slate-500 font-bold">
                    Monthly Report
                  </p>

                  <h3 className="text-2xl font-bold text-[#0f2c59]">
                    Sales Dashboard
                  </h3>
                </div>

                <span className="bg-[#eefcf2] text-[#1a8b5e] text-xs font-bold px-4 py-1.5 rounded-full">
                  Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <table className="w-full text-xs">
                    <tbody>
                      <tr>
                        <td>North</td>
                        <td>42K</td>
                        <td>18%</td>
                      </tr>

                      <tr>
                        <td>West</td>
                        <td>37K</td>
                        <td>14%</td>
                      </tr>

                      <tr>
                        <td>South</td>
                        <td>31K</td>
                        <td>9%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 flex items-end gap-2 h-[160px]">
                  <div className="w-full bg-[#1a8b5e] h-[45%] rounded-t" />
                  <div className="w-full bg-[#1a8b5e] h-[70%] rounded-t" />
                  <div className="w-full bg-[#1a8b5e] h-[55%] rounded-t" />
                  <div className="w-full bg-[#1a8b5e] h-[85%] rounded-t" />
                </div>
              </div>
            </div> */}
          </div>


        </div>
      </div>
    </section>
  );
};

export default CourseHero;