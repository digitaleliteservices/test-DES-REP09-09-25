"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedBullets from "../_components/aboutUsComp/animatedBullets/animatedBullets";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

export default function Essence() {
  return (
    <section className="py-20">
      {/* <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12"> */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        {/* Left side - headline + paragraph */}
        <div className="md:w-1/2 pr-8 border-r border-gray-300 flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-left">
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
              Essence
            </span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-600">
            Welcome to Digital Elite Services — where innovation and creativity
            come together to transform business visions into reality. In today’s
            competitive digital landscape, a powerful online presence is
            essential for growth.
          </p>
        </div>

        {/* Right side - Animated Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 flex items-center"
        >
          <div className="relative rounded-2xl p-6 bg-gradient-to-b from-white/60 to-white/40 border border-gray-100 shadow-lg w-full">
            <AnimatedBullets />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
