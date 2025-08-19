import React, { useState } from "react";

const highlights = [
  {
    id: "excellence",
    verticalText: "25+ Years of Excellence",
    title: "25+ Years of Excellence",
    content:
      "Over two decades of delivering corporate learning solutions that stick. Fortune 500s choose us for lasting impact.",
    color: "bg-yellow-400",
  },
  // Add more highlight objects as additional tabs...
    {
    id: "excellence",
    verticalText: "25+ Years of Excellence",
    title: "25+ Years of Excellence",
    content:
      "Over two decades of delivering corporate learning solutions that stick. Fortune 500s choose us for lasting impact.",
    color: "bg-yellow-400",
  },
    {
    id: "excellence",
    verticalText: "25+ Years of Excellence",
    title: "25+ Years of Excellence",
    content:
      "Over two decades of delivering corporate learning solutions that stick. Fortune 500s choose us for lasting impact.",
    color: "bg-yellow-400",
  },
];

export default function ExperienceTabs() {
  const [active, setActive] = useState("excellence");

  return (
    <div className="flex w-full max-w-3xl mx-auto min-h-[270px] rounded-2xl overflow-hidden shadow-md bg-white">
      {/* Vertical side tabs */}
      <div className="flex flex-col">
        {highlights.map((hl, i) => (
          <button
            key={hl.id}
            onClick={() => setActive(hl.id)}
            className={`
              flex-1 transition-all duration-300 font-bold text-white
              flex items-center justify-center px-2 cursor-pointer
              ${hl.color}
              ${active === hl.id ? "w-36" : "w-10"}
              text-lg
              hover:w-36
            `}
            style={{
              writingMode: "vertical-rl",
              whiteSpace: "nowrap",
              transition: "all 0.35s cubic-bezier(.4,2,.6,1)",
              borderRight: i < highlights.length - 1 ? "1px solid #fff6" : undefined,
              borderBottom: undefined,
            }}
          >
            {hl.verticalText}
          </button>
        ))}
      </div>
      {/* Main detail area */}
      <div className="flex-1 flex flex-col justify-center items-start p-8">
        {highlights
          .filter((hl) => hl.id === active)
          .map((hl) => (
            <div key={hl.id}>
              <h3 className="text-2xl font-bold mb-2">{hl.title}</h3>
              <p className="text-gray-700 text-lg">{hl.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
