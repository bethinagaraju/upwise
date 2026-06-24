import React from 'react';
import { motion } from 'framer-motion';

const EmpowerTrainer: React.FC = () => {
  return (
    <section id="about-us" className="py-24  bg-white overflow-hidden relative" style={{           background: '#f89763',         }}>
      {/* Background Accent Circles */}
      <div className="absolute -top-32 -left-40 w-96 h-96 bg-gradient-to-br from-terracotta-200 to-warm-coral-200 opacity-30 blur-3xl rounded-full -z-10" />
      <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] bg-gradient-to-br from-light-peach-200 to-soft-grey-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:flex lg:items-center lg:gap-16">
   



<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex-shrink-0 lg:w-1/2 mb-12 lg:mb-0"
>
  <div className="bg-white rounded-2xl border-4 border-[rgba(248,151,99,255)] p-1 shadow-2xl">
    <img
      src="talwar.png"
      alt="Ritu Arora"
      className="rounded-xl object-cover w-3/4 h-auto mx-auto Lazyload"
    />
  </div>
</motion.div>



        {/* Right Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-navy-800 mb-6">
            Meet <span className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent">Our Trainer</span>
          </h2>

          <p className="text-lg text-soft-grey-700 leading-relaxed mb-6">
            <strong className="text-[#ffffff]">Sanya Talwar</strong> is a Supreme Court lawyer and gender rights advocate with over a decade of legal experience. As a POSH enabler, legal consultant, and certified investigator, she has led 30+ inquiries, advised leading corporates and ministries, and trained over 100 organizations PAN India. Sanya is also the Editor of LawBeat, a premium legal reportage platform in collaboration with CNN-News18
          </p>

          {/* <p className="text-lg text-soft-grey-700 leading-relaxed">
            Our mission is to build a future-ready workforce by combining strategic learning design, compelling content, and a distinct brand identity rooted in trust, performance, and growth. We support B2B and digital expansion through clear positioning and a consistent visual and verbal language.
          </p> */}
        </motion.div>
      </div>
    </section>
  );
};

export default EmpowerTrainer;