import React from "react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-[#f1fcf5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-[36px] p-10 shadow-xl">
          <h2 className="text-4xl font-black text-[#0f2c59] mb-4">
            Partner with us
          </h2>

          <p className="text-slate-600 mb-8">
            Let us customize a training
            program for your team.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl px-4 py-3"
            />

            <textarea
              rows={4}
              placeholder="Message"
              className="w-full border rounded-xl p-4"
            />

            <button className="w-full bg-[#0f2c59] text-white py-4 rounded-xl font-bold">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;