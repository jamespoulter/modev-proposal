"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    id: 1,
    name: "HumanX",
    date: "7 Apr 2026",
    location: "San Francisco, CA",
    country: "USA",
    flag: "🇺🇸",
    color: "orange",
    highlight: "Tour opener — sets the tone for 2026",
    services: ["Programming", "Hosting", "Keynote"],
  },
  {
    id: 2,
    name: "AI Summit London",
    date: "10 Jun 2026",
    location: "London, UK",
    country: "UK",
    flag: "🇬🇧",
    color: "lime",
    highlight: "JP's home market — deep European network activation",
    services: ["Programming", "Hosting", "Connections", "Sponsorship"],
  },
  {
    id: 3,
    name: "VivaTech",
    date: "20 Jun 2026",
    location: "Paris, France",
    country: "France",
    flag: "🇫🇷",
    color: "indigo",
    highlight: "Two events, ten days — maximum European impact",
    services: ["Programming", "Hosting", "Connections"],
  },
  {
    id: 4,
    name: "AI4",
    date: "5 Aug 2026",
    location: "Las Vegas, NV",
    country: "USA",
    flag: "🇺🇸",
    color: "gold",
    highlight: "AI @ Work book launches — keynote anchor event",
    services: ["Programming", "Hosting", "Keynote"],
  },
  {
    id: 5,
    name: "Web Summit",
    date: "10 Nov 2026",
    location: "Lisbon, Portugal",
    country: "Portugal",
    flag: "🇵🇹",
    color: "orange",
    highlight: "World's largest tech conference — global visibility",
    services: ["Programming", "Hosting", "Connections"],
  },
  {
    id: 6,
    name: "AI Summit NYC",
    date: "10 Dec 2026",
    location: "New York, NY",
    country: "USA",
    flag: "🇺🇸",
    color: "lime",
    highlight: "Tour finale — US market close, year-end momentum",
    services: ["Programming", "Hosting", "Keynote", "Sponsorship"],
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; borderLeft: string }> = {
  orange: { bg: "bg-orange/10", text: "text-orange", border: "border-orange/30", borderLeft: "border-l-orange" },
  lime: { bg: "bg-lime/10", text: "text-lime", border: "border-lime/30", borderLeft: "border-l-lime" },
  indigo: { bg: "bg-indigo/10", text: "text-indigo", border: "border-indigo/30", borderLeft: "border-l-indigo" },
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/30", borderLeft: "border-l-gold" },
};

const serviceColors: Record<string, string> = {
  Programming: "bg-orange/10 text-orange/90 border-orange/20",
  Hosting: "bg-lime/10 text-lime/90 border-lime/20",
  Connections: "bg-indigo/10 text-indigo/90 border-indigo/20",
  Sponsorship: "bg-gold/10 text-gold/90 border-gold/20",
  Keynote: "bg-cream/10 text-cream/90 border-cream/20",
};

export default function Section5Programme() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-start relative px-4 sm:px-6 py-16 sm:py-24 overflow-hidden"
    >
      {/* World map background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)" }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl z-10 mb-12 sm:mb-16"
      >
        <span className="text-lime text-sm font-medium tracking-widest uppercase mb-4 block">
          April – December 2026
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-cream mb-4 sm:mb-6">
          The Events
        </h2>
        <p className="text-lg sm:text-xl text-cream/75 font-normal max-w-3xl mx-auto">
          Six world-class AI events across four countries — a nine-month global tour
        </p>
      </motion.div>

      {/* Event Grid */}
      <div className="w-full max-w-6xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event, index) => {
            const colors = colorClasses[event.color];

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`bg-navy-light rounded-2xl border-l-4 ${colors.borderLeft} border border-cream/10 overflow-hidden hover:border-cream/20 transition-colors`}
              >
                {/* Header */}
                <div className={`${colors.bg} px-6 py-5`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{event.flag}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${colors.border} ${colors.text} ${colors.bg}`}>
                      #{event.id} of 6
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text} mb-1`}>{event.name}</h3>
                  <p className="text-cream/60 text-sm">{event.date}</p>
                  <p className="text-cream/80 text-sm font-medium">{event.location}</p>
                </div>

                {/* Body */}
                <div className="px-6 py-5">
                  <p className="text-cream/70 text-sm leading-relaxed mb-4">{event.highlight}</p>

                  {/* Service tags */}
                  <div className="flex flex-wrap gap-2">
                    {event.services.map((service) => (
                      <span
                        key={service}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full border ${serviceColors[service]}`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* European note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="w-full max-w-6xl mt-10 z-10"
      >
        <div className="bg-gradient-to-br from-indigo/10 to-navy-light rounded-2xl p-6 border border-indigo/30">
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0">🇬🇧🇫🇷</div>
            <div>
              <h4 className="text-lg font-bold text-indigo mb-2">European Advantage — June Sprint</h4>
              <p className="text-cream/70 text-sm leading-relaxed">
                AI Summit London (10 Jun) and VivaTech Paris (20 Jun) — two of Europe&apos;s most prestigious AI events, ten days apart.
                JP&apos;s London base and deep European network means he adds disproportionate value here that no US-based partner can replicate.
                This fortnight alone justifies the partnership.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Service legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="w-full max-w-6xl mt-6 z-10"
      >
        <h3 className="text-cream/60 text-xs font-medium tracking-widest uppercase mb-3 text-center">Service legend</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {Object.entries(serviceColors).map(([service, classes]) => (
            <span key={service} className={`text-xs font-medium px-3 py-1.5 rounded-full border ${classes}`}>
              {service}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl" />
    </section>
  );
}
