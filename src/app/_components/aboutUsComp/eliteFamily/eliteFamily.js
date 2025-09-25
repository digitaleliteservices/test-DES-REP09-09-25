"use client";

import React from "react";
import { motion } from "framer-motion";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

// PRIYA in middle
const LEADERS = [
  { name: "Mr. THEERTHANANDA K K", role: "Director" },
  { name: "Mrs. Priya H K", role: "Director" },
  { name: "Mr. LAKSHMISHA K J", role: "Director" },
];

export default function EliteFamily() {
  const container = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 18, scale: 0.995 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.2, 0.9, 0.25, 1] },
    },
  };

  // subtle accent palettes for avatars
  const accents = [
    ["#06b6d4", "#3b82f6"], // cyan -> blue
    ["#f59e0b", "#fb923c"], // amber -> orange
    ["#a78bfa", "#ec4899"], // violet -> pink
  ];

  return (
    <section
      className="relative overflow-hidden py-24"
      aria-labelledby="elite-family-heading"
    >
      {/* Background: soft layered gradients + subtle texture */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(600px 320px at 10% 12%, rgba(124,58,237,0.06), transparent 12%)," +
            "radial-gradient(700px 360px at 92% 84%, rgba(251,191,36,0.04), transparent 12%)," +
            "linear-gradient(180deg,#fbfdff 0%, #f8fbff 45%, #fffaf6 100%)",
        }}
      />

      {/* subtle animated decorative blobs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.14 }}
        animate={{ y: [0, -18, 0], opacity: [0.14, 0.26, 0.14] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: -120,
          right: -180,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "linear-gradient(120deg,#7c3aed33,#06b6d433)",
          filter: "blur(92px)",
        }}
        className="pointer-events-none -z-20"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0.08 }}
        animate={{ y: [0, 14, 0], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        style={{
          position: "absolute",
          left: -180,
          bottom: -140,
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: "linear-gradient(120deg,#fb923c22,#60a5fa22)",
          filter: "blur(110px)",
        }}
        className="pointer-events-none -z-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading: more visual impact */}
        <div className="text-center mb-10">
          <motion.h2
            id="elite-family-heading"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{
              background: LOGO_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Elite Family
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0.6, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mx-auto mt-4 h-1 w-36 rounded-full"
            style={{
              background: "linear-gradient(90deg,#00E5FF,#2C6DF6,#FF8A00)",
              opacity: 0.14,
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our leadership brings together strategic insight, creative expertise and technical excellence — guiding Digital Elite Services to deliver measurable impact.
          </motion.p>
        </div>

        {/* Panel */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative"
          style={{
            boxShadow: "0 20px 60px rgba(12,18,39,0.08)",
            borderTop: "1px solid rgba(255,255,255,0.6)",
          }}
        >
          <div className="md:flex">
            {/* Left: label */}
            <div className="md:w-1/3 p-8 flex items-center">
              <div>
                <h4 className="text-xl font-semibold text-slate-900">Leadership Team</h4>
                <p className="mt-3 text-sm text-slate-600 max-w-sm">
                  Directors steering strategy and delivery. Each brings domain expertise to drive growth.
                </p>

                {/* subtle decorative badges */}
                <div className="mt-6 flex gap-3">
                  <motion.span
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-gradient-to-r from-cyan-50 to-blue-50 text-slate-700 border border-gray-100"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                    Strategy
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.72 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-gradient-to-r from-yellow-50 to-orange-50 text-slate-700 border border-gray-100"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
                    Delivery
                  </motion.span>
                </div>
              </div>
            </div>

            {/* divider */}
            <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

            {/* Right: directors stacked vertically with color + animation */}
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="flex flex-col gap-4">
                {LEADERS.map((person, idx) => {
                  const initials = person.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase();

                  const accent = accents[idx % accents.length];
                  const avatarGradient = `linear-gradient(135deg, ${accent[0]}, ${accent[1]})`;

                  return (
                    <motion.div
                      key={person.name}
                      variants={cardVariant}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                        boxShadow: "0 30px 60px rgba(14, 30, 60, 0.12)",
                        transition: { duration: 0.22 },
                      }}
                      transition={{ duration: 0.5, ease: [0.2, 0.9, 0.25, 1] }}
                      className="relative flex items-start gap-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
                      aria-label={`${person.name} — ${person.role}`}
                    >
                      {/* avatar + ring */}
                      <div className="relative flex-shrink-0">
                        <motion.div
                          className="w-14 h-14 rounded-lg grid place-items-center font-semibold text-white text-base"
                          style={{
                            background: avatarGradient,
                            boxShadow: `0 12px 36px ${accent[1]}22`,
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.08, rotate: 6 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 22,
                          }}
                        >
                          {initials}
                        </motion.div>

                        {/* glowing ring */}
                        <motion.span
                          aria-hidden
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.36 }}
                          style={{
                            position: "absolute",
                            left: -8,
                            top: -8,
                            width: "calc(100% + 16px)",
                            height: "calc(100% + 16px)",
                            borderRadius: 12,
                            background: `radial-gradient(closest-side, ${accent[1]}33, transparent 40%)`,
                            filter: "blur(10px)",
                            pointerEvents: "none",
                          }}
                        />
                      </div>

                      {/* details: name above role */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <h5 className="text-base font-semibold text-slate-900 truncate">
                              {person.name}
                            </h5>
                            <motion.span
                              className="mt-1 text-sm text-slate-500 block"
                              initial={{ opacity: 0.8, y: 6 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.32 }}
                            >
                              {person.role}
                            </motion.span>
                          </div>

                          {/* subtle action badge (non-interactive) */}
                          {/* <div className="ml-4 self-start">
                            <span
                              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-medium"
                              style={{
                                background: "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.85))",
                                border: "1px solid rgba(220, 224, 255, 0.6)",
                                color: "#334155",
                                boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
                              }}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <path d="M12 2v6" stroke="#0ea5a4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 16v6" stroke="#06b6d4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              Director
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* extra small decorative CSS for motion smoothing and accessibility */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
        /* slight fade-in for the entire section for a polished feel */
        .elite-fade { animation: eliteFade 0.9s ease both; }
        @keyframes eliteFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
