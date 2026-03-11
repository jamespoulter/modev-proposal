"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const credentials = [
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    label: "Director of Programming",
    detail: "VOICE Summit — Modev's flagship event. He knows how Modev works inside out.",
    color: "orange",
  },
  {
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    label: "250+ Keynotes",
    detail: "CES, Forbes Conferences, NRB — authoritative, warm, and commercially sharp on stage.",
    color: "lime",
  },
  {
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    label: "AI @ Work",
    detail: "Bloomsbury, August 2026. A built-in book launch and content platform at every event.",
    color: "gold",
  },
  {
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    label: "European Networks",
    detail: "London-based. Deep enterprise AI relationships across UK and France — critical for the June sprint.",
    color: "indigo",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    label: "Tier-1 Connections",
    detail: "Amazon, LEGO, Verizon, Bosch, Bloomsbury, Universal Music — warm introductions, not cold outreach.",
    color: "orange",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; borderTop: string }> = {
  orange: { bg: "bg-orange/10", text: "text-orange", border: "border-orange/30", borderTop: "border-t-orange" },
  lime: { bg: "bg-lime/10", text: "text-lime", border: "border-lime/30", borderTop: "border-t-lime" },
  indigo: { bg: "bg-indigo/10", text: "text-indigo", border: "border-indigo/30", borderTop: "border-t-indigo" },
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/30", borderTop: "border-t-gold" },
};

export default function SectionPanel() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 py-20 sm:py-24 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-lime text-sm font-medium tracking-widest uppercase mb-4 block">
            Your Partner
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cream mb-4 sm:mb-6">
            James Poulter
          </h2>
          <p className="text-lg sm:text-xl text-cream/75 font-normal max-w-3xl mx-auto">
            Not a stranger to Modev. Not a cold pitch. JP was Director of Programming at VOICE Summit —
            he&apos;s coming back to where he belongs.
          </p>
        </div>

        {/* Horizontal divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent mb-10" />

        {/* JP Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-navy-light border-l-4 border-orange rounded-2xl p-6 sm:p-8 mb-10"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            {/* Large circular photo */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-orange ring-offset-4 ring-offset-navy-light">
                <Image
                  src="/panelists/james-poulter.jpg"
                  alt="James Poulter"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-cream">
                  James Poulter
                </h3>
                <span className="inline-flex self-center md:self-auto bg-orange text-navy text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Strategic Programme Partner
                </span>
              </div>

              <p className="text-orange text-sm sm:text-base font-medium mb-1">
                Founder & CEO, ThreePoint Labs
              </p>
              <p className="text-cream/50 text-sm mb-3">
                Former Director of Programming, VOICE Summit (Modev)
              </p>

              <p className="text-cream/80 text-sm sm:text-base leading-relaxed mb-4 max-w-3xl">
                AI strategist, author of <em>AI @ Work</em> (Bloomsbury, August 2026), and one of the
                most experienced enterprise AI keynote speakers in the world. 250+ keynotes including
                CES and Forbes Conferences. Fractional Head of AI at Elvis London and Dunham &amp; Company.
              </p>

              {/* Credential chips */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {["Former Dir. of Programming — VOICE Summit", "250+ keynotes", "AI @ Work — Bloomsbury Aug 2026", "Amazon · LEGO · Verizon clients", "London-based — European networks"].map((cred, i) => (
                  <span
                    key={i}
                    className="bg-orange/10 text-orange/90 text-xs font-medium px-3 py-1.5 rounded-full border border-orange/20"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5 Credential Cards */}
        <p className="text-cream/40 text-xs text-center mb-4 md:hidden">← Swipe to see all credentials →</p>
        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible snap-x snap-mandatory md:snap-none [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:[mask-image:none]">
          {credentials.map((cred, index) => {
            const colors = colorClasses[cred.color];

            return (
              <motion.div
                key={cred.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`flex-shrink-0 w-[240px] md:w-auto snap-center bg-navy-light rounded-2xl overflow-hidden border border-cream/10 border-t-4 ${colors.borderTop} p-5`}
              >
                <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                  <svg className={`w-5 h-5 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cred.icon} />
                  </svg>
                </div>

                <h3 className={`text-base font-bold ${colors.text} mb-2`}>
                  {cred.label}
                </h3>
                <p className="text-cream/60 text-xs leading-relaxed">
                  {cred.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-indigo/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
    </section>
  );
}
