"use client";

import { motion } from "framer-motion";

/** Single card */
const FeatureCard = ({ icon, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay }}
    className="rounded-2xl p-6 backdrop-blur-md
               bg-gradient-to-b from-violet-700/30 via-fuchsia-600/15 to-white/5
               border border-white/15
               shadow-[0_0_30px_rgba(124,58,237,0.25)]"
  >
    <div className="text-3xl mb-3">{icon}</div>
    <h4 className="text-lg sm:text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-300 text-sm sm:text-base">{desc}</p>
  </motion.div>
);

const WhatSetsUsApart = () => {
  const features = [
    {
      icon: "🎯",
      title: "Strategy-First Approach",
      desc: "No one-size-fits-all. Every project starts with deep research and a tailored plan aligned to your goals.",
    },
    {
      icon: "🧠",
      title: "In-House Experts",
      desc: "SEO strategists, full-stack devs, and UI/UX designers collaborate closely to bring your vision to life.",
    },
    {
      icon: "🔎",
      title: "Transparent Communication",
      desc: "Clear timelines, honest feedback, and visible progress. You’re always in the loop.",
    },
    {
      icon: "📈",
      title: "Performance-Driven Results",
      desc: "We optimize for what matters: qualified traffic, conversions, leads, and ROI.",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 left-1/3 w-80 h-80 bg-purple-600/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto text-center mb-10 md:mb-12">
        <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/40 to-orange-500/40 text-sm sm:text-base inline-block mb-4">
          💡 What sets us apart
        </span>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Built to deliver real impact
        </h3>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
