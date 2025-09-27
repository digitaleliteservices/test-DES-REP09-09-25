"use client";

import React from "react";
import { motion } from "framer-motion";

const LOGO_GRADIENT2 =
  "linear-gradient(90deg,#FF8A00 0%,#2C6DF6 52%,#00E5FF 100%)";

// blue-indigo
// const LOGO_GRADIENT =
//   "linear-gradient(90deg,#0ea5e9 0%,#3b82f6 50%,#6366f1 100%)";

//orange-pink--good
const LOGO_GRADIENT =
  "linear-gradient(90deg,#FF8A00 0%,#ec4899 50%,#3b82f6 100%)";

//good
// const LOGO_GRADIENT =
//   "linear-gradient(90deg,#8b5cf6 0%,#3b82f6 50%,#06b6d4 100%)";

const Hero = () => {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
    },
  };

  const GradientWord = ({ children }) => (
    <span
      className="inline-block mx-2"
      style={{
        background: LOGO_GRADIENT,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );

  return (
    <header role="banner" className="w-full flex justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center max-w-3xl px-4"
      >
        <motion.p
          variants={item}
          className="text-base sm:text-lg font-semibold tracking-wide mb-3 text-blue-600"
        >
          Your All-In-One Digital Partner
        </motion.p>

        {/* Heading with all 4 words in one row */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight flex flex-wrap justify-center">
          <GradientWord>Innovation</GradientWord>
          <GradientWord>Design</GradientWord>
          <GradientWord>and</GradientWord>
          <GradientWord>Growth</GradientWord>
        </h2>

        {/* animated accent bar */}
        <motion.div
          variants={item}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mx-auto mt-4 h-1 w-28 rounded origin-left"
          style={{
            background: LOGO_GRADIENT,
          }}
        />

        <motion.p
          variants={item}
          className="mt-6 text-base sm:text-lg font-medium"
          style={{
            background: LOGO_GRADIENT2,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          aria-label="What we do"
        >
          Web Development • Graphic Design • Digital Marketing
        </motion.p>
      </motion.div>
    </header>
  );
};

export default Hero;
