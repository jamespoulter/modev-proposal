"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Book a 30-minute call",
    body: "Let's discuss scope, priorities, and which events JP attends in person. A quick conversation to make sure this is the right fit for both sides.",
    cta: "Schedule a call",
    href: "mailto:jp@threepoint.io?subject=Modev%20AI%20House%20Tour%202026%20-%20Let's%20Talk&body=Hi%20JP%2C%0A%0AI'd%20like%20to%20schedule%20a%2030-minute%20call%20to%20discuss%20the%20Strategic%20Programme%20Partner%20proposal.%0A%0A",
    color: "orange",
  },
  {
    number: "02",
    title: "Execute a simple retainer agreement",
    body: "No complex SOW. A clean, straightforward retainer agreement — JP's standard engagement doc. Target: executed within 2 weeks of the call.",
    cta: null,
    href: null,
    color: "lime",
  },
  {
    number: "03",
    title: "Kick off April — ready for HumanX",
    body: "JP is in from day one. Programming work begins immediately, with HumanX San Francisco (7 April) as the first delivery milestone.",
    cta: null,
    href: null,
    color: "gold",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; number: string }> = {
  orange: { bg: "bg-orange/10", text: "text-orange", border: "border-orange/30", number: "text-orange" },
  lime: { bg: "bg-lime/10", text: "text-lime", border: "border-lime/30", number: "text-lime" },
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/30", number: "text-gold" },
};

export default function Section7NextSteps() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=80)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl z-10"
      >
        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <div className="text-5xl text-orange/30 font-serif leading-none mb-3">&ldquo;</div>
          <blockquote className="text-xl md:text-3xl font-light text-cream leading-relaxed mb-3">
            JP isn&apos;t a new face at Modev. He was Director of Programming at VOICE Summit.
            <span className="text-orange"> He&apos;s coming home.</span>
          </blockquote>
          <div className="text-5xl text-orange/30 font-serif leading-none rotate-180">&ldquo;</div>
        </motion.div>

        {/* Next Steps header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 text-center"
        >
          <span className="text-lime text-sm font-medium tracking-widest uppercase mb-3 block">
            Ready to Begin?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-3">
            Next Steps
          </h2>
          <p className="text-lg text-cream/75 font-normal max-w-2xl mx-auto">
            Three straightforward steps from here to HumanX San Francisco.
          </p>
        </motion.div>

        {/* Three steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className={`bg-navy-light rounded-2xl p-6 border ${colors.border} relative`}
              >
                <div className={`text-6xl font-bold ${colors.number} opacity-20 absolute top-4 right-6 leading-none select-none`}>
                  {step.number}
                </div>
                <div className={`text-lg font-bold ${colors.text} mb-1`}>Step {step.number}</div>
                <h3 className="text-xl font-bold text-cream mb-3">{step.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed mb-4">{step.body}</p>
                {step.cta && step.href && (
                  <a
                    href={step.href}
                    className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text} hover:opacity-80 transition-opacity`}
                  >
                    {step.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center space-y-6"
        >
          <p className="text-cream/50 text-sm">Reach out directly — JP responds personally:</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-cream/60">
            <a
              href="mailto:jp@threepoint.io"
              className="flex items-center gap-2 hover:text-orange transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              jp@threepoint.io
            </a>
            <a
              href="https://threepoint.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              threepoint.io
            </a>
          </div>

          <div className="pt-6 border-t border-cream/10">
            <div className="flex items-center justify-center gap-2 text-cream/60 text-sm">
              <span>James Poulter</span>
              <span>|</span>
              <span className="text-orange">ThreePoint Labs</span>
              <span>|</span>
              <span className="text-cream/40">Strategic Programme Partner Proposal · March 2026</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background geometric accents */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-orange/10 rotate-45" />
      <div className="absolute bottom-32 right-20 w-48 h-48 border border-lime/10 rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-orange rounded-full" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
