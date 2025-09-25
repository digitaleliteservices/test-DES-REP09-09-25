"use client";

import React from "react";
import { motion } from "framer-motion";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

const LEADERS = [
  { name: "Mr. THEERTHANANDA K K", role: "Director" },
  { name: "Mr. LAKSHMISHA K J", role: "Director" },
  { name: "Mrs. Priya H K", role: "Director" },
];

export default function EliteFamily() {
  const container = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };

  const card = {
    hidden: { opacity: 0, y: 12, scale: 0.99 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.2, 0.9, 0.25, 1] } },
    hover: { y: -8, scale: 1.02, transition: { duration: 0.18 } },
  };

  // accents for avatars
  const accents = [
    ["#06b6d4", "#3b82f6"], // cyan -> blue
    ["#f59e0b", "#fb923c"], // amber -> orange
    ["#a78bfa", "#ec4899"], // violet -> pink
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            <span className="text-slate-900 mr-2">The</span>
            <span
              className="inline-block shimmer-text text-slate-900"
            //   style={{
            //     background: LOGO_GRADIENT,
            //     WebkitBackgroundClip: "text",
            //     WebkitTextFillColor: "transparent",
            //     backgroundClip: "text",
            //   }}
            >
              Elite Family
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"
          />

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-slate-600 max-w-2xl mx-auto"
          >
            Our leadership brings together strategic insight, creative expertise
            and technical excellence — guiding Digital Elite Services to deliver
            measurable impact.
          </motion.p>
        </div>

        {/* Team cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
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
              <motion.article
                key={person.name}
                variants={card}
                whileHover="hover"
                className="relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
                style={{ willChange: "transform" }}
                aria-labelledby={`leader-${idx}`}
              >
                <div className="flex items-center gap-4">
                  {/* Animated avatar */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <div
                      className="w-16 h-16 rounded-lg grid place-items-center text-white font-bold text-lg"
                      style={{
                        background: avatarGradient,
                        boxShadow: `0 8px 20px ${accent[1]}22`,
                      }}
                      aria-hidden
                    >
                      <span className="select-none">{initials}</span>
                    </div>
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <h4 id={`leader-${idx}`} className="text-lg font-semibold text-slate-900">
                      {person.name}
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">{person.role}</p>
                  </div>
                </div>

                {/* hover actions area */}
                <motion.div
                  className="mt-4 text-sm text-slate-600"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {/* reserved for future bio or links (kept minimal now) */}
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Directors / Description */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="max-w-3xl mx-auto text-center text-slate-700"
        >
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Directors</h3>
          <p className="leading-relaxed">
            Mr. Theerthananda K K, Mr. Lakshmisha K J, and Mrs. Priya H K are
            the visionary leaders at the helm of Digital Elite Services.
            Together, they combine strategic insight, creative expertise, and
            technical proficiency to guide the company in delivering innovative
            and impactful digital solutions. Under their leadership, Digital
            Elite Services is committed to helping businesses strengthen their
            online presence, engage audiences, and achieve measurable growth in
            today’s dynamic digital landscape.
          </p>
        </motion.div>
      </div>

      {/* small styles for shimmer + responsiveness */}
      <style>{`
        /* shimmer animation for heading */
        .shimmer-text {
          position: relative;
          background-size: 200% 100%;
          transition: background-position 0.6s ease;
        }
        .shimmer-text::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.10) 100%);
          mix-blend-mode: overlay;
          opacity: 0.9;
          pointer-events: none;
        }
        .shimmer-text:hover {
          background-position: 100% 50%;
        }

        @media (prefers-reduced-motion: reduce) {
          .shimmer-text, .shimmer-text::after {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
