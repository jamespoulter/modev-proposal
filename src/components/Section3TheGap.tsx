"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const withoutItems = [
  "Programming talent sourced event-by-event, no strategic continuity",
  "Network introductions limited to existing Modev relationships",
  "Sponsorship pipeline reliant on inbound interest alone",
  "Hosting and facilitation handled by staff or ad-hoc MCs",
  "No embedded author/thought leader anchoring the content narrative",
];

const withItems = [
  "Cohesive, world-class programming shaped by a single strategic vision across all 6 events",
  "Warm introductions from JP's network: Amazon, LEGO, Verizon, Bosch, Bloomsbury, Universal Music",
  "Active sponsorship development leveraging JP's existing corporate relationships",
  "A authoritative, commercially sharp host and panel facilitator on stage at every event",
  "A book-anchored keynote partner: AI @ Work (Bloomsbury, August 2026) mid-tour launch",
];

const reasons = [
  {
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    title: "The Right Person",
    body: "JP isn't a stranger to Modev. He was Director of Programming at VOICE Summit — Modev's flagship event. He knows the operation, the culture, the calibre of event Modev produces.",
    color: "orange",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "The Right Moment",
    body: "JP's book AI @ Work (Bloomsbury, August 2026) lands mid-tour. Built-in launch platform with fresh, book-anchored content at every event — a media and PR multiplier for Modev.",
    color: "lime",
  },
  {
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    title: "The Right Geography",
    body: "London-based with deep European networks. AI Summit London + VivaTech Paris — two events in four cities in ten days — is where JP adds disproportionate value that no US-based partner can match.",
    color: "indigo",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  orange: { bg: "bg-orange/10", text: "text-orange", border: "border-orange/30" },
  lime: { bg: "bg-lime/10", text: "text-lime", border: "border-lime/30" },
  indigo: { bg: "bg-indigo/10", text: "text-indigo", border: "border-indigo/30" },
};

export default function Section3TheGap() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 overflow-hidden"
    >
      {/* Architectural background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy" />

      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-orange/[0.04] pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full border-2 border-indigo/[0.05] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-6xl z-10"
      >
        <span className="text-lime text-sm font-medium tracking-widest uppercase mb-4 block">
          Why This Partnership
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
          The Case
        </h2>
        <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto mb-16">
          Why a Strategic Programme Partner? And why James Poulter?
        </p>

        {/* Three reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => {
            const colors = colorClasses[reason.color];
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`bg-navy-light rounded-2xl p-8 border ${colors.border} text-left`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <svg className={`w-6 h-6 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={reason.icon} />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${colors.text} mb-3`}>{reason.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{reason.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Before / After */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 relative">
          {/* Without column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-navy-light rounded-2xl p-8 border border-cream/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-cream/40 rounded-full" />
              <h3 className="text-2xl font-bold text-cream/80">Without a Strategic Partner</h3>
            </div>
            <ul className="space-y-4">
              {withoutItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 text-left"
                >
                  <span className="text-cream/50 mt-1">—</span>
                  <span className="text-cream/60">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* With JP column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-orange/10 to-navy-light rounded-2xl p-8 border border-orange/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-orange rounded-full animate-pulse" />
              <h3 className="text-2xl font-bold text-orange">With JP as Strategic Partner</h3>
            </div>
            <ul className="space-y-4">
              {withItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 text-left"
                >
                  <span className="text-orange mt-1">+</span>
                  <span className="text-cream">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          >
            <div className="w-16 h-16 bg-navy rounded-full border-2 border-orange flex items-center justify-center">
              <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
