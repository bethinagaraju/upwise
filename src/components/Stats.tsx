import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

/* ───────── Animated Number ───────── */
interface AnimatedNumberProps {
  value: string | number;
  duration?: number;
  play?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2,
  play = false,
}) => {
  const target = Number(String(value).replace(/[^\d]/g, ''));
  const suffix = String(value).replace(/\d+/g, '');
  const mv = useMotionValue(0);
  const formatted = useTransform(mv, v => Math.floor(v).toLocaleString());
  const [txt, setTxt] = useState<string>('0'); // Explicitly type useState

  useEffect(() => {
    if (!play) return;
    const controls = animate(mv, target, { duration, ease: 'easeOut' });
    const unsub = formatted.on('change', v => setTxt(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [play, target, duration, mv, formatted]); // Added mv and formatted to dependency array

  return (
    <span>
      {txt}
      {suffix}
    </span>
  );
};

/* ───────── Stats Data ───────── */
const STATS_DATA = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Companies Trained' },
  { value: '700,000+', label: 'Professionals Upskilled' },
  { value: '99%', label: 'Client Satisfaction' },
];

/* ───────── Stats Component ───────── */
interface StatsProps {
  isInView: boolean;
}

const Stats: React.FC<StatsProps> = ({ isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
    >
      {STATS_DATA.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl lg:text-4xl font-bold text-[#f89763] mb-2">
            <AnimatedNumber value={stat.value} play={isInView} />
          </div>
          <div className="text-[#4A4A4A] text-sm font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Stats;
