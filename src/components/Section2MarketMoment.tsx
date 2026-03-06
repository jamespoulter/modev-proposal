"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  {
    value: 4.2,
    suffix: "B",
    prefix: "$",
    label: "Voice AI Market Today",
    subtext: "2024 global market size",
  },
  {
    value: 28,
    suffix: "B",
    prefix: "$",
    label: "Projected by 2030",
    subtext: "6.6x growth trajectory",
  },
  {
    value: 67,
    suffix: "%",
    prefix: "",
    label: "Enterprise Leaders",
    subtext: "Prioritising voice interfaces",
  },
  {
    value: 60,
    suffix: "%",
    prefix: "~",
    label: "Jabra Market Share",
    subtext: "Pro speakerphone dominance",
  },
];

export default function Section2MarketMoment() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 bg-navy-light"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-5xl z-10"
      >
        <span className="text-orange text-sm font-medium tracking-widest uppercase mb-4 block">
          The Opportunity
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
          The Market Moment
        </h2>
        <p className="text-xl text-cream/60 font-light max-w-3xl mx-auto mb-16">
          Voice AI is reshaping enterprise communications. The question isn&apos;t whether
          the market will transform — it&apos;s who will lead that transformation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-navy p-8 rounded-2xl border border-cream/10 hover:border-orange/30 transition-colors group"
            >
              <div className="text-5xl md:text-6xl font-bold text-orange mb-4 group-hover:text-lime transition-colors">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <div className="text-cream font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-cream/50 text-sm">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-cream/40 text-sm mt-12 max-w-2xl mx-auto"
        >
          Source: Industry analysis, enterprise communications research 2024
        </motion.p>
      </motion.div>

      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
    </section>
  );
}
