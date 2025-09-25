"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./spiral.css"; // keep existing styles if any

const chips = [
  {
    title: "Innovation",
    desc:
      "Continuously embracing creativity and technology to deliver cutting-edge digital solutions.",
  },
  {
    title: "Integrity",
    desc:
      "Maintaining transparency, honesty, and ethical practices in all our interactions.",
  },
  {
    title: "Excellence",
    desc:
      "Striving for the highest quality in every project, ensuring measurable results and client satisfaction.",
  },
  {
    title: "Collaboration",
    desc:
      "Working closely with clients and within our team to achieve shared goals and meaningful outcomes.",
  },
  {
    title: "Customer-Centricity",
    desc:
      "Placing client needs at the heart of everything we do, building long-term relationships.",
  },
  {
    title: "Accountability",
    desc: "Taking ownership of our actions, commitments, and results.",
  },
  {
    title: "Adaptability",
    desc:
      "Embracing change and staying agile in a dynamic digital landscape.",
  },
];

const directions = [
  { x: -120, y: 0 }, // left
  { x: 120, y: 0 }, // right
  { x: 0, y: -80 }, // top
  { x: 0, y: 80 }, // bottom
];

// color palette per chip (keeps consistent appearance + glow)
const CHIP_ACCENTS = [
  { from: "#06b6d4", to: "#3b82f6" }, // cyan -> blue
  { from: "#f97316", to: "#ef4444" }, // orange -> red
  { from: "#8b5cf6", to: "#ec4899" }, // purple -> pink
  { from: "#06b6d4", to: "#7c3aed" }, // cyan -> indigo
  { from: "#10b981", to: "#06b6d4" }, // green -> cyan
  { from: "#f59e0b", to: "#f97316" }, // amber -> orange
  { from: "#0ea5a4", to: "#06b6d4" }, // teal -> cyan
];

export default function Spiral() {
  const chipDirs = useMemo(
    () => chips.map((_, i) => directions[i % directions.length]),
    []
  );
  const [activeIndex, setActiveIndex] = useState(null);

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
  const chipVariants = (dir) => ({
    hidden: { x: dir.x, y: dir.y, opacity: 0, scale: 0.98 },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  });

  // tooltip animation (spring)
  const tipAnim = {
    initial: { opacity: 0, y: 8, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 8, scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 28, mass: 0.15 },
  };

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-center">
        <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-orange-500/30 text-sm sm:text-base inline-block mb-4 text-gray-800">
          🌟 Core Values
        </span>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-md">
          Exponential daily value
        </h3>
        <p className="mt-4 text-slate-600">
          Our teams secure, align, validate and curate exactly what keeps your
          work moving
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-2">
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {chips.map((chip, i) => {
            const dir = chipDirs[i];
            const accent = CHIP_ACCENTS[i % CHIP_ACCENTS.length];
            return (
              <motion.div
                key={`${chip.title}-${i}`}
                variants={chipVariants(dir)}
                className="relative"
              >
                <button
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex((cur) => (cur === i ? null : cur))}
                  onFocus={() => setActiveIndex(i)}
                  onBlur={() => setActiveIndex((cur) => (cur === i ? null : cur))}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setActiveIndex(null);
                  }}
                  className="relative px-5 py-2 rounded-full ring-1 ring-black/5 shadow-sm bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 text-white font-semibold text-base sm:text-lg leading-tight focus:outline-none focus:ring-4 focus:ring-sky-200"
                  aria-haspopup="dialog"
                  aria-expanded={activeIndex === i}
                  aria-controls={`chip-desc-${i}`}
                >
                  <span className="pointer-events-none absolute inset-0 rounded-full" aria-hidden />
                  <span>{chip.title}</span>

                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        id={`chip-desc-${i}`}
                        role="dialog"
                        initial={tipAnim.initial}
                        animate={tipAnim.animate}
                        exit={tipAnim.exit}
                        transition={tipAnim.transition}
                        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-72 md:w-80 z-50"
                        style={{ pointerEvents: "auto" }}
                      >
                        {/* Tooltip card (glass + accent + shadow + glow) */}
                        <div
                          className="rounded-xl border border-gray-100 p-3 text-left backdrop-blur-sm"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(255,255,255,0.90), rgba(255,255,255,0.78))",
                            boxShadow: `0 10px 30px rgba(15,23,42,0.12), 0 3px 8px rgba(0,0,0,0.06), 0 0 18px ${accent.from}22`,
                            borderLeft: `4px solid ${accent.from}`,
                          }}
                      >
                          {/* top accent strip */}
                          <div
                            className="h-1 rounded-t-xl -mx-3 mb-2"
                            style={{
                              background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
                            }}
                          />
                          <div className="flex items-start gap-3">
                            <div
                              className="flex-shrink-0 w-9 h-9 rounded-md grid place-items-center"
                              style={{
                                background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
                                boxShadow: `0 6px 18px ${accent.to}30`,
                              }}
                              aria-hidden
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2v6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 16v6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4 12h16" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>

                            <div>
                              <div className="text-sm font-semibold text-slate-900">
                                {chip.title}
                              </div>
                              <div className="mt-1 text-xs text-slate-600 leading-snug">
                                {chip.desc}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* arrow with soft shadow */}
                        <div className="flex justify-center -mt-1.5 pointer-events-none">
                          <div
                            className="w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100"
                            style={{
                              boxShadow: `0 4px 8px rgba(2,6,23,0.06)`,
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="pb-12" />
    </section>
  );
}
