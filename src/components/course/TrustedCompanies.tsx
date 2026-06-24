import React from "react";

interface TrustedCompaniesProps {
  clientLogos: string[];
}

const TrustedCompanies: React.FC<
  TrustedCompaniesProps
> = ({ clientLogos }) => {
  return (
    <section className="border-y border-slate-100 bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
          Trusted by L&D Teams in Leading
          Enterprises Worldwide
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center opacity-60">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="h-10 flex items-center justify-center font-black text-slate-400 text-lg tracking-wider border border-dashed border-slate-300 px-6 rounded-lg"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;