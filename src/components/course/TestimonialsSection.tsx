import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-[#f1fcf5]/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-slate-400 uppercase">
            Feedback Metrics
          </span>

          <h2 className="text-3xl font-black text-[#0f2c59] mt-2">
            What Our Learners Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-white border p-8 rounded-2xl"
            >
              <div className="flex gap-1 text-green-500 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="italic text-slate-600">
                Excellent corporate training
                experience with real-world
                Excel scenarios.
              </p>

              <div className="mt-4">
                <p className="font-bold text-[#0f2c59]">
                  Senior Business Analyst
                </p>

                <p className="text-xs text-slate-400">
                  Corporate Learner
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;