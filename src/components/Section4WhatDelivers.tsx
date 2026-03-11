"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const pillars = [
  {
    id: 1,
    title: "Programming",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    description: "Curating world-class speakers, designing panel formats, and shaping session narratives across all 6 events",
    detail: "JP brings a director's eye to programming — not just booking names, but building arc. Sessions flow, panels spark, and the audience leaves with something to talk about. As former Director of Programming at VOICE Summit, he knows exactly what Modev events need to be at their best.",
    color: "orange",
  },
  {
    id: 2,
    title: "Connections & Network",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    description: "Warm introductions from JP's network: Amazon, LEGO, Verizon, Bosch, Bloomsbury, Universal Music, faith/nonprofit sector",
    detail: "These aren't cold outreach campaigns. JP has existing relationships with senior people at Amazon, LEGO, Verizon, Bosch, Bloomsbury, Universal Music, and across the faith and nonprofit sector. A personal introduction from JP carries weight — and opens doors that a standard outreach never would.",
    color: "lime",
  },
  {
    id: 3,
    title: "Sponsorship Development",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    description: "Helping Modev grow sponsorship revenue by leveraging JP's existing corporate relationships",
    detail: "JP doesn't just attend events — he actively works to grow Modev's commercial footprint. His relationships with major corporate AI buyers means he can have real conversations about sponsorship value, not just pass on a deck. He's invested in Modev's commercial success, not just his own performance.",
    color: "indigo",
  },
  {
    id: 4,
    title: "Hosting & Facilitation",
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
    description: "MC and panel host at events — authoritative, warm, and commercially sharp on stage",
    detail: "250+ keynotes at CES, Forbes Conferences, and NRB have made JP one of the most assured and engaging hosts in enterprise tech. He reads a room, holds the energy, draws out the best from panellists, and ensures audiences leave with real takeaways. On stage, he represents Modev with authority.",
    color: "gold",
  },
  {
    id: 5,
    title: "Keynote",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    description: "Featured keynote partner — AI @ Work (Bloomsbury, August 2026) book launch tie-in",
    detail: "JP's book AI @ Work publishes with Bloomsbury in August 2026 — right in the middle of the tour. Each event becomes a natural launch moment: fresh keynote content, media hooks, and a credibility signal that Modev is where the most important AI conversations are happening. A built-in PR multiplier.",
    color: "orange",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  orange: { bg: "bg-orange/10", text: "text-orange", border: "border-orange/30" },
  lime: { bg: "bg-lime/10", text: "text-lime", border: "border-lime/30" },
  indigo: { bg: "bg-indigo/10", text: "text-indigo", border: "border-indigo/30" },
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/30" },
};

export default function Section4WhatDelivers() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 bg-navy-light overflow-hidden"
    >
      {/* Decorative SVG geometric accents */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-orange/[0.03] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full border-2 border-indigo/[0.05] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full border border-lime/[0.04] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-gold/10 rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-6xl z-10"
      >
        <span className="text-orange text-sm font-medium tracking-widest uppercase mb-4 block">
          5 Services · 6 Events · 9 Months
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
          What JP Delivers
        </h2>
        <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto mb-16">
          Five interconnected services that work together across every event in the tour.
          Click any card to read more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const colors = colorClasses[pillar.color];
            const isExpanded = expandedId === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                onClick={() => setExpandedId(isExpanded ? null : pillar.id)}
                className={`bg-navy rounded-2xl p-6 border cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                  isExpanded ? `${colors.border} ${colors.bg}` : "border-cream/10 hover:border-cream/20"
                } ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <svg className={`w-6 h-6 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pillar.icon} />
                    </svg>
                  </div>
                  <div className={`w-7 h-7 rounded-full border ${colors.border} flex items-center justify-center ml-auto`}>
                    <span className={`text-xs font-bold ${colors.text}`}>{pillar.id}</span>
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-2 ${isExpanded ? colors.text : "text-cream"}`}>
                  {pillar.title}
                </h3>
                <p className="text-cream/60 text-sm mb-4">{pillar.description}</p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-cream/10">
                        <p className="text-cream/80 text-sm leading-relaxed">{pillar.detail}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between mt-4">
                  <span className={`text-xs ${colors.text}`}>
                    {isExpanded ? "Click to collapse" : "Click to expand"}
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className={`w-4 h-4 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
