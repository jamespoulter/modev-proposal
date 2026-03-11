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
    value: 240,
    suffix: "K+",
    prefix: "",
    label: "Community Members",
    subtext: "Across all AI House Tour events",
  },
  {
    value: 6,
    suffix: "",
    prefix: "",
    label: "Global Events",
    subtext: "4 countries · 2026",
  },
  {
    value: 9,
    suffix: "",
    prefix: "",
    label: "Months of Partnership",
    subtext: "April – December 2026",
  },
  {
    value: 4,
    suffix: "",
    prefix: "",
    label: "Countries",
    subtext: "USA · UK · France · Portugal",
  },
  {
    value: 1,
    suffix: "",
    prefix: "",
    label: "Anchor Sponsor",
    subtext: "KPMG — global professional services",
  },
];

const highlights = [
  {
    title: "HumanX · San Francisco",
    date: "7 Apr 2026",
    flag: "🇺🇸",
    color: "orange",
  },
  {
    title: "AI Summit London",
    date: "10 Jun 2026",
    flag: "🇬🇧",
    color: "lime",
  },
  {
    title: "VivaTech · Paris",
    date: "20 Jun 2026",
    flag: "🇫🇷",
    color: "indigo",
  },
  {
    title: "AI4 · Las Vegas",
    date: "5 Aug 2026",
    flag: "🇺🇸",
    color: "gold",
  },
  {
    title: "Web Summit · Lisbon",
    date: "10 Nov 2026",
    flag: "🇵🇹",
    color: "orange",
  },
  {
    title: "AI Summit NYC",
    date: "10 Dec 2026",
    flag: "🇺🇸",
    color: "lime",
  },
];

const colorText: Record<string, string> = {
  orange: "text-orange",
  lime: "text-lime",
  indigo: "text-indigo",
  gold: "text-gold",
};

const colorBorder: Record<string, string> = {
  orange: "border-orange/30",
  lime: "border-lime/30",
  indigo: "border-indigo/30",
  gold: "border-gold/30",
};

export default function Section2MarketMoment() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 bg-navy-light overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1920&q=80)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-light via-transparent to-navy-light" />

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
          The AI House Tour
        </h2>
        <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto mb-16">
          Modev&apos;s AI House Tour is the most ambitious connected event series in enterprise AI —
          six world-class events across four countries, anchored by KPMG, reaching a
          community of 240,000+ decision-makers and innovators.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 xl:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-navy p-5 xl:p-8 rounded-2xl border border-cream/10 hover:border-orange/30 transition-colors group flex flex-col"
            >
              <div className="text-3xl md:text-4xl xl:text-5xl font-bold text-orange mb-3 group-hover:text-lime transition-colors leading-none">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <div className="text-cream font-semibold text-sm xl:text-base mb-1 leading-snug">{stat.label}</div>
              <div className="text-cream/60 text-xs xl:text-sm leading-snug mt-auto">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>

        {/* Event grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-xl font-bold text-cream mb-6">The 2026 Event Series</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {highlights.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.08 }}
                className={`bg-navy rounded-xl p-4 border ${colorBorder[event.color]} text-center`}
              >
                <div className="text-2xl mb-2">{event.flag}</div>
                <div className={`text-xs font-bold ${colorText[event.color]} mb-1`}>{event.date}</div>
                <div className="text-cream text-xs font-medium leading-snug">{event.title}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-cream/50 text-sm mt-12 max-w-2xl mx-auto"
        >
          The AI House Tour brings together C-suite executives, enterprise AI leaders, and innovators at the world&apos;s most influential technology summits.
        </motion.p>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
    </section>
  );
}
