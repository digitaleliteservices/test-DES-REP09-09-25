"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedBullets from "../_components/aboutUsComp/animatedBullets/animatedBullets";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

export default function Essence() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
        {/* Essence text first */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
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
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Welcome to Digital Elite Services — where innovation and creativity
            come together to transform business visions into reality. In today’s
            competitive digital landscape, a powerful online presence is
            essential for growth. We specialize in custom web development,
            impactful graphic design, and strategic digital marketing solutions
            that enable brands to stand out, engage their audience, and achieve
            measurable success. Whether you’re an emerging startup or an
            established enterprise, our expertise and commitment ensure the
            right digital solutions to drive your journey forward.
          </p>
        </div>

        {/* Animated Bullets below text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl"
        >
          <div className="relative rounded-2xl p-6 bg-gradient-to-b from-white/60 to-white/40 border border-gray-100 shadow-lg">
            <AnimatedBullets />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
