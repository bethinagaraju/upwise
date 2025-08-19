import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

/* ─────────────────── Data (Remains the same) ─────────────────── */

const offerings = [
  {
    title: 'Corporate Training Programs',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    points: ['Excel', 'PowerPoint', 'Communication', 'Productivity'],
  },
  {
    title: 'Train the Trainer Programs',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    points: ['Internal capability building', 'Delivery techniques', 'Trainer certification', 'Content development'],
  },
  {
    title: '1:1 & Small Group Workshops',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    points: ['Live‑led upskilling', 'Personalized sessions', 'Team‑specific goals', 'Flexible delivery'],
  },

];

/* ─────────────────── Component ─────────────────── */

const ServicesGrid: React.FC = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Key Offerings
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Practical, high‑impact learning experiences designed for today’s professionals and organizations.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {offerings.map((o) => (
          <motion.article
            key={o.title}
            // ✅ Card animation defined directly
            initial={{ y: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
            whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }}
            className="w-80 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 group"
          >
            {/* Image uses CSS transition via group-hover for performance */}
            <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img src={o.image} alt={o.title} className="w-full h-44 object-cover" />
              <div
                className="absolute bottom-0 left-0 w-full h-10 bg-gray-50"
                style={{ transform: 'skewY(-6deg)', transformOrigin: '100% 100%' }}
              />
            </div>

            {/* Content with fixed height to ensure consistent card size */}
            <div className="p-6 pt-8 -mt-4 flex flex-col h-[270px]">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{o.title}</h3>
              
              {/* ✅ List orchestration handled by parent motion component */}
              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delayChildren: 0.5, staggerChildren: 0.12 }}
                className="space-y-2 mb-6 flex-grow"
              >
                {o.points.map((pt) => (
                  // ✅ List item variants are defined inline
                  <motion.li
                    key={pt}
                    variants={{
                      hidden: { opacity: 0, x: -6 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                    }}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Check size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                    {pt}
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA that appears at the bottom */}
              <div className="flex items-center gap-1 text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors cursor-pointer mt-auto">
                Start your journey
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;