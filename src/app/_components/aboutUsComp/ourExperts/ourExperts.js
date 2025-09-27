"use client";

import React from "react";
import { motion } from "framer-motion";
import { PenTool, Monitor, Code, Megaphone, Users } from "lucide-react";
import CurtainFooter from "@/app/curtainraiser/curtainRaiser";
import Footer from "@/app/footer/page";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

const EXPERTS = [
  {
    group: "Graphic Designer",
    names: ["Mr. Sridhar P"],
    icon: <PenTool className="w-5 h-5" />,
    // concise, elegant description (kept short)
    desc: "Creative lead focused on refined brand identity and high-impact visuals that elevate recognition and trust.",
    accent: ["#06b6d4", "#3b82f6"],
  },
  {
    group: "Full-Stack Web Developers",
    names: ["Mr. Mohammed Sabeeh K K", "Mr. Anup S R"],
    icon: (
      <span className="flex items-center gap-1">
        <Code className="w-4 h-4" />
        <Monitor className="w-4 h-4" />
      </span>
    ),
    desc: "Skilled full-stack engineers who build secure, fast and scalable web experiences focused on performance and UX.",
    accent: ["#7c3aed", "#ec4899"],
  },
  {
    group: "Digital Marketing Team",
    names: ["Miss. Pooja H K", "Mr. Pavan Kumar"],
    icon: <Megaphone className="w-5 h-5" />,
    desc: "Data-driven marketers who craft measurable campaigns across SEO, social and paid channels to grow visibility and leads.",
    accent: ["#f59e0b", "#fb923c"],
  },
];

export default function OurExperts() {
  const container = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.995 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.42, ease: [0.2, 0.9, 0.25, 1] },
    },
    hover: { y: -6, scale: 1.016, transition: { duration: 0.16 } },
  };

  // clamp style to ~5 lines (works cross-browser)
  const clamp5 = {
    display: "-webkit-box",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-10">
            <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-orange-500/30 text-sm sm:text-base inline-block mb-4 text-gray-800">
              🌟 Trusted Professionals
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-slate-900">Our</span>{" "}
              <span
                className="inline-block"
                style={{
                  background: LOGO_GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Experts
              </span>
            </h2>
            {/* <div
                      className="mt-4 h-1 rounded-full mx-auto"
                      style={{
                        width: 160,
                        background: LOGO_GRADIENT,
                        backgroundSize: "200% 100%",
                        boxShadow: "0 8px 28px rgba(44,109,246,0.10)",
                      }}
                    /> */}
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
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Compact profiles of the teams powering design, development, and
              growth at Digital Elite Services.
            </p>
          </div>

          {/* Cards grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {EXPERTS.map((exp, idx) => {
              const accentFrom = exp.accent[0];
              const accentTo = exp.accent[1];

              return (
                <motion.article
                  key={exp.group + idx}
                  className="relative rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                  variants={cardVariants}
                  whileHover="hover"
                  tabIndex={0}
                  aria-labelledby={`expert-${idx}`}
                  role="group"
                  style={{
                    // Light gradient background with low opacity
                    background: `linear-gradient(135deg, ${accentFrom}11, ${accentTo}11)`,
                    border: `1px solid ${accentTo}33`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* avatar / icon box */}
                    <div
                      className="w-14 h-14 rounded-lg grid place-items-center text-white font-semibold text-sm flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
                        boxShadow: `0 10px 24px ${accentTo}44`,
                      }}
                      aria-hidden
                    >
                      <div className="flex items-center justify-center gap-1">
                        <span className="opacity-95">{exp.icon}</span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        id={`expert-${idx}`}
                        className="text-lg font-semibold text-slate-900"
                      >
                        {exp.group}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        <span className="font-medium text-slate-700">
                          {exp.names.join(", ")}
                        </span>
                      </p>

                      <p
                        className="mt-3 text-sm text-slate-600 leading-relaxed"
                        style={clamp5}
                      >
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
      <CurtainFooter>
        <Footer />
      </CurtainFooter>
    </>
  );
}
