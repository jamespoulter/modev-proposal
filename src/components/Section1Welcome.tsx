"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$45K", label: "Total Investment", sub: "9-month retainer" },
  { value: "6", label: "Global Cities", sub: "4 countries" },
  { value: "240K+", label: "Community", sub: "KPMG anchor sponsor" },
  { value: "9", label: "Months", sub: "April – December 2026" },
];

export default function Section1Welcome() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-24 md:pt-20">
      {/* Subtle full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />

      {/* Geometric accent shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 border border-orange/20 rounded-full animate-pulse hidden sm:block" />
      <div className="absolute bottom-32 left-16 w-48 h-48 border border-lime/20 rotate-45 hidden sm:block" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-orange rounded-full hidden sm:block" />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-lime rounded-full hidden sm:block" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl z-10"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-block text-lime text-sm font-medium tracking-widest uppercase mb-6"
        >
          Confidential Proposal · March 2026
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-[1.05]"
        >
          Strategic Programme
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="block text-orange"
          >
            Partner
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl md:text-2xl text-cream/80 font-normal mb-6"
        >
          AI House Tour 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-lg text-cream/60 font-normal mb-12 max-w-2xl mx-auto"
        >
          A proposal from James Poulter &amp; ThreePoint to partner with Modev
          <br className="hidden md:block" /> across six world-class AI events in 2026
        </motion.p>

        {/* Key stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="bg-navy-light/60 backdrop-blur border border-cream/10 rounded-2xl p-4"
            >
              <div className="text-2xl md:text-3xl font-bold text-orange mb-1">{stat.value}</div>
              <div className="text-cream text-sm font-semibold mb-0.5">{stat.label}</div>
              <div className="text-cream/50 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-cream/60 text-sm uppercase tracking-wider">Prepared by</span>
          <span className="text-orange text-lg font-semibold">James Poulter / ThreePoint</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/60 text-xs uppercase tracking-wider">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-orange rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
