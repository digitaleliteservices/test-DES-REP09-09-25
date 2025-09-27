"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DirectorBg from "../../../../../public/assets/director-bg.jpg";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

const LEADERS = [
  { name: "Mr. Theerthananda K K", role: "Director" },
  { name: "Mrs. Priya H K", role: "Director" },
  { name: "Mr. Lakshmisha K J", role: "Director" },
];

const container = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.2, 0.9, 0.25, 1] },
  },
};

const accents = [
  ["#06b6d4", "#3b82f6"],
  ["#f59e0b", "#fb923c"],
  ["#a78bfa", "#ec4899"],
];

export default function EliteFamily() {
  return (
    <section
      className="relative overflow-hidden py-24"
      aria-labelledby="elite-family-heading"
    >
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-orange-500/30 text-sm sm:text-base inline-block mb-4 text-gray-800">
            🌟 Guiding Minds
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-slate-900">The</span>{" "}
            <span
              className="inline-block"
              style={{
                background: LOGO_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Elite Family
            </span>
          </h2>

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
            Our leadership brings together strategic insight, creative expertise
            and technical excellence.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative p-8"
          style={{
            boxShadow: "0 20px 60px rgba(12,18,39,0.06)",
            borderTop: "1px solid rgba(255,255,255,0.6)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
            {/* Leadership Team text column */}
            <div className="md:col-span-1 flex flex-col">
              <h4 className="text-xl font-semibold text-slate-900">
                Leadership Team
              </h4>
              <p className="mt-3 text-sm text-slate-600 max-w-sm">
                Under our leadership, Digital Elite Services is committed to
                helping businesses strengthen their online presence, engage
                audiences and achieve measurable growth in today's dynamic
                digital landscape.
              </p>
            </div>

            {/* Directors cards */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEADERS.map((person, idx) => {
                const accent = accents[idx % accents.length];
                const avatarGradient = `linear-gradient(135deg, ${accent[0]}, ${accent[1]})`;

                return (
                  <motion.article
                    key={person.name}
                    variants={cardVariant}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.28 }}
                    className="group relative flex flex-col items-center text-center rounded-2xl bg-white p-6 border border-gray-100 shadow-sm overflow-hidden"
                    aria-label={`${person.name} — ${person.role}`}
                  >
                    {/* Background image (CSS-driven visibility via group-hover) */}
                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Image
                        src={DirectorBg}
                        alt="Director background"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className="w-28 h-28 rounded-full grid place-items-center mb-4 relative transition-all duration-300 group-hover:scale-95"
                        style={{
                          background: avatarGradient,
                          boxShadow: `0 18px 48px ${accent[1]}22`,
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <svg
                          width="46"
                          height="46"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z"
                            fill="rgba(255,255,255,0.95)"
                          />
                          <path
                            d="M3 21c0-3 4-5 9-5s9 2 9 5v1H3v-1z"
                            fill="rgba(255,255,255,0.85)"
                          />
                        </svg>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 truncate px-2 transition-colors duration-200 group-hover:text-white">
                        {person.name}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 transition-colors duration-200 group-hover:text-white">
                        {person.role}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}
