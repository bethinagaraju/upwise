import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who is this course designed for?",
    a: "Professionals working with Excel and business data.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes. A course completion certificate will be provided.",
  },
  {
    q: "Is this live training?",
    a: "Yes. Instructor-led live training.",
  },
];

const FAQSection = () => {
  const [openFaq, setOpenFaq] =
    useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-20 max-w-4xl mx-auto px-6"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-[#0f2c59]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border rounded-2xl overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenFaq(
                  openFaq === idx
                    ? null
                    : idx
                )
              }
              className="w-full flex justify-between items-center p-6"
            >
              <span className="font-bold">
                {faq.q}
              </span>

              <ChevronDown
                size={18}
                className={
                  openFaq === idx
                    ? "rotate-180"
                    : ""
                }
              />
            </button>

            {openFaq === idx && (
              <div className="p-6 pt-0 text-slate-600">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;