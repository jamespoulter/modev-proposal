"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const inclusions = [
  "All 5 services across all 6 events",
  "Programming leadership — speaker curation, panel design, session narrative",
  "Connections & warm introductions from JP's network",
  "Active sponsorship development support",
  "Hosting and MC at all events",
  "Featured keynote partner (AI @ Work book tie-in)",
  "Monthly advisory calls with Modev leadership",
  "Strategic input on event positioning and brand",
  "European market activation — UK & France",
  "9 months of continuous partnership (April – December 2026)",
];

const exclusions = [
  "International travel & accommodation (invoiced at cost, actuals only)",
  "Any third-party vendor or supplier fees",
];

const timeline = [
  { month: "Apr", label: "HumanX SF", active: true },
  { month: "May", label: "Advisory", active: false },
  { month: "Jun", label: "London + Paris", active: true },
  { month: "Jul", label: "Advisory", active: false },
  { month: "Aug", label: "AI4 + Book", active: true },
  { month: "Sep", label: "Advisory", active: false },
  { month: "Oct", label: "Advisory", active: false },
  { month: "Nov", label: "Web Summit", active: true },
  { month: "Dec", label: "AI Summit NYC", active: true },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-4 h-4 text-cream/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Section6PricingTiers() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 bg-navy-light overflow-hidden"
    >
      {/* Decorative SVG geometric accents */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full border border-gold/[0.05] pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full bg-orange/[0.025] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-5xl z-10 w-full"
      >
        <span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">
          Investment
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">
          Simple. Clear. Committed.
        </h2>
        <p className="text-xl text-cream/75 font-normal max-w-3xl mx-auto mb-16">
          One retainer. All five services. All six events.
        </p>

        {/* Main pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl p-8 md:p-12 border-2 border-gold bg-gradient-to-b from-gold/10 to-navy mb-12 text-left"
        >
          {/* Recommended badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-gold text-navy text-sm font-bold px-6 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-gold/30">
              Strategic Programme Partner
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 pt-4">
            {/* Left — pricing */}
            <div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-6xl font-bold text-gold">$5,000</span>
                  <span className="text-cream/60 text-lg">/month</span>
                </div>
                <div className="text-cream/50 text-sm">9-month retainer · April – December 2026</div>
              </div>

              <div className="bg-navy/60 rounded-xl p-6 border border-gold/20 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cream/70 text-sm">Monthly retainer</span>
                  <span className="text-gold font-bold">$5,000</span>
                </div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-cream/10">
                  <span className="text-cream/70 text-sm">Duration</span>
                  <span className="text-cream font-medium">9 months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cream font-semibold">Total investment</span>
                  <span className="text-2xl font-bold text-gold">$45,000</span>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="text-cream/60 text-xs font-medium tracking-widest uppercase mb-4">Monthly schedule</h4>
                <div className="grid grid-cols-9 gap-1">
                  {timeline.map((t) => (
                    <div key={t.month} className="text-center">
                      <div className={`w-full aspect-square rounded-lg flex items-center justify-center text-xs font-bold mb-1 ${
                        t.active ? "bg-orange text-navy" : "bg-navy border border-cream/10 text-cream/40"
                      }`}>
                        {t.month.charAt(0)}
                      </div>
                      <div className="text-cream/30 text-[9px] leading-tight hidden sm:block">{t.month}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-orange rounded" />
                    <span className="text-cream/50 text-xs">Event month</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-navy border border-cream/10 rounded" />
                    <span className="text-cream/50 text-xs">Advisory month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — inclusions */}
            <div>
              <h4 className="text-cream font-bold text-lg mb-5">What&apos;s Included</h4>
              <ul className="space-y-3 mb-8">
                {inclusions.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.04 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <CheckIcon />
                    <span className="text-cream/80">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <h4 className="text-cream/60 font-medium text-sm mb-3">Not Included</h4>
              <ul className="space-y-2">
                {exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CrossIcon />
                    <span className="text-cream/40">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="#next"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-navy font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-orange/20 hover:shadow-orange/30"
          >
            Discuss next steps
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <span className="text-cream/60 text-sm">or scroll to see next steps</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-cream/40 text-sm"
        >
          All fees in USD. Travel invoiced at cost. Simple retainer agreement — target execution within 2 weeks.
        </motion.p>
      </motion.div>

      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-orange/5 rounded-full blur-3xl" />
    </section>
  );
}
