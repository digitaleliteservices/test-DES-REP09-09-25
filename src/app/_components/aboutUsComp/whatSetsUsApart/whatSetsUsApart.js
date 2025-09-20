"use client";

import FeatureCard from "./FeatureCard";

const WhatSetsUsApart = () => {
  const features = [
    {
      icon: "🎯",
      title: "Strategy First Approach",
      desc: "No one-size-fits-all. Every project starts with deep research and a tailored plan aligned to your goals.",
    },
    {
      icon: "🧠",
      title: "In-House Experts & Team",
      desc: "SEO strategists, full-stack devs, and UI/UX designers collaborate closely to bring your vision to life.",
    },
    {
      icon: "🔎",
      title: "Transparent Communication",
      desc: "Clear timelines, honest feedback, and visible progress. You're always in the loop.",
    },
    {
      icon: "📈",
      title: "Performance Driven Results",
      desc: "We optimize for what matters: qualified traffic, conversions, leads, and ROI.",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-orange-500/30 text-sm sm:text-base inline-block mb-4 text-gray-800">
          💡 What Sets Us Apart
        </span>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-md">
          Built to deliver real impact
        </h3>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col">
          {features.map((f, i) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              delay={i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;