"use client";

import React from "react";
import { motion } from "framer-motion";
import CurtainFooter from "../curtainraiser/curtainRaiser";
import Footer from "../footer/page";

/* ---------- SVG Icons ---------- */
const IconTarget = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
    <path d="M12 8v-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M12 16v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M8 12H6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M18 12h-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);
const IconBrain = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 3c3 0 5 2 5 5v1h2v4h-2v1a5 5 0 1 1-10 0v-1H7V9h2V8c0-3 2-5 5-5z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
  </svg>
);
const IconSearch = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.4" />
    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
const IconChart = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 13v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 9v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M17 5v14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/* ---------- Card Component ---------- */
const FeatureCard = ({ Icon, title, desc, index = 0 }) => {
  // small color sets for rim/icon by index
  const rims = [
    { from: "#7c3aed", to: "#f97316" }, // purple → orange
    { from: "#06b6d4", to: "#7c3aed" }, // cyan → purple
    { from: "#f59e0b", to: "#ef4444" }, // amber → red
    { from: "#60a5fa", to: "#7dd3fc" }, // blue → teal
  ];
  const rim = rims[index % rims.length];

  // subtle gradient stops with alpha (keeps text readable)
  const cardGradient = `linear-gradient(135deg, ${rim.from}18 0%, ${rim.to}12 45%, ${rim.from}10 100%)`;
  const rimOutline = `linear-gradient(120deg, ${rim.from}33, ${rim.to}22)`;

  return (
    <motion.article
      role="article"
      aria-labelledby={`feature-${index}-title`}
      initial={{ opacity: 0, y: 18, scale: 0.995 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.56, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group rounded-2xl overflow-hidden shadow-xl transition-transform duration-300"
      style={{
        // base card look (subtle white glass)
        background: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(250,250,255,0.96))",
        border: "1px solid rgba(15,23,42,0.04)",
      }}
    >
      {/* ---------- FULL CARD TINT (static, behind content) ---------- */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: cardGradient,
          mixBlendMode: "screen",
          opacity: 0.22, // tweak for strength: 0.12 -> subtle, 0.30 -> strong
          zIndex: 0,
          filter: "blur(6px)",
        }}
      />

      {/* subtle colored rim overlay (keeps soft outline + glow) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: rimOutline,
          mixBlendMode: "overlay",
          opacity: 0.18,
          zIndex: 0,
          filter: "blur(10px)",
        }}
      />

      <div className="p-6 flex items-start gap-4 relative" style={{ zIndex: 10 }}>
        {/* animated icon circle (static colored background) */}
        <motion.div
          className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl grid place-items-center"
          initial={{ scale: 0.98 }}
          animate={{ y: [0, -6, 0], scale: [1, 1.02, 1] }}
          transition={{
            duration: 3 + index * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: `linear-gradient(135deg, ${rim.from}30, ${rim.to}18)`,
            border: `1px solid ${rim.from}60`,
            boxShadow: `0 6px 18px ${rim.to}18, inset 0 2px 6px rgba(255,255,255,0.7)`,
            color: rim.from,
          }}
        >
          <Icon />
        </motion.div>

        {/* content */}
        <div className="min-w-0">
          <h4
            id={`feature-${index}-title`}
            className="text-base md:text-lg font-semibold mb-1 text-slate-900"
          >
            {title}
          </h4>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>

      {/* bottom gradient accent (kept for style, now more subtle) */}
      <div
        aria-hidden
        className="absolute left-0 bottom-0 w-full h-6 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, ${rim.from}18, rgba(0,0,0,0))`,
        }}
      />
    </motion.article>
  );
};

/* ---------- Container ---------- */
const WhatSetsUsApart = () => {
  const features = [
    {
      Icon: IconTarget,
      title: "Strategy First Approach",
      desc: "No one-size-fits-all. Every project starts with deep research and a tailored plan aligned to your goals.",
    },
    {
      Icon: IconBrain,
      title: "Experts & Team",
      desc: "SEO strategists, full-stack devs, and UI/UX designers collaborate closely to bring your vision to life.",
    },
    {
      Icon: IconSearch,
      title: "Transparent Communication",
      desc: "Clear timelines, honest feedback, and visible progress. You're always in the loop.",
    },
    {
      Icon: IconChart,
      title: "Performance Driven Results",
      desc: "We optimize for what matters: qualified traffic, conversions, leads, and ROI.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  return (
    <>
      <section
        className="relative overflow-hidden px-6 py-16 md:py-20"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f7fbff 45%, #fffaf6 100%)",
        }}
      >
        {/* subtle decorative pattern */}
        <svg
          className="absolute inset-0 -z-10 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="p2" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M0 28 L28 0" stroke="rgba(15,23,42,0.02)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#p2)" />
        </svg>

        <div className="max-w-6xl mx-auto text-center mb-10">
          <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-orange-500/20 text-sm sm:text-base inline-block mb-4 text-slate-900">
            💡 What Sets Us Apart
          </span>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 drop-shadow-sm">
            Built To Deliver Real Impact
          </h3>

          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Our process blends strategy, design and engineering to ensure measurable business outcomes — not just pretty pixels.
          </p>
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={f.title} Icon={f.Icon} title={f.title} desc={f.desc} index={i} />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default WhatSetsUsApart;
