"use client";

import { Box, Code, Users, Activity } from "lucide-react"; // Importing icons
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const features = [
  {
    icon: <Box className="w-6 h-6 text-purple-400" />,
    title: "End-to-End Solutions",
    description:
      "From brand identity to website launch and digital marketing — we handle it all under one roof.",
  },
  {
    icon: <Code className="w-6 h-6 text-purple-400" />,
    title: "Technical Expertise",
    description:
      "Our designers, developers, and marketers work together to ensure seamless integration across all your digital assets.",
  },
  {
    icon: <Users className="w-6 h-6 text-purple-400" />,
    title: "User-Focused Approach",
    description:
      "Every product we design or develop is built with your users in mind, optimizing for experience, engagement, and retention",
  },
  {
    icon: <Activity className="w-6 h-6 text-purple-400" />,
    title: "Results You Can Measure",
    description:
      "We don't just deliver — we track, analyze, and improve to ensure you're getting the ROI you expect",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <section className="relative py-16 md:py-20 bg-white">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#120024] via-[#0A0014] to-[#1a0b2e] shadow-xl overflow-hidden p-8 md:p-12 lg:flex lg:items-center lg:gap-12">
            {/* Left Column */}
            <div className="lg:flex-1 space-y-8 text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                Why Choose Us?
              </h2>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-md hover:bg-white/20 transition"
                  >
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="mt-1 text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Radar Video */}
            <div className="lg:flex-1 mt-10 lg:mt-0 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-purple-500/20 shadow-[0_0_40px_rgba(139,92,246,0.4)] overflow-hidden">
                <video
                  src="/assets/hero-video18.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
