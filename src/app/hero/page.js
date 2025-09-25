"use client";

import React from "react";
import { motion } from "framer-motion";

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

  return (
    <header role="banner" className="w-full flex justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center max-w-2xl px-4"
      >
        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg font-semibold tracking-wide mb-3"
          style={{ color: "rgb(79 70 229)" }} // stronger indigo for visibility
        >
          Your All-In-One Digital Partner
        </motion.p>

        {/* Main heading */}
        <motion.h1
          variants={item}
          className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight bg-clip-text text-transparent"
          style={{
            // keep the striking gradient while ensuring contrast/visibility
            background:
              "linear-gradient(90deg, rgba(79,70,229,1) 0%, rgba(139,92,246,1) 45%, rgba(236,72,153,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Innovation Design and Growth
        </motion.h1>

        {/* animated accent bar */}
        <motion.div
          variants={item}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mx-auto mt-4 h-1 w-28 rounded origin-left"
          style={{
            background: "linear-gradient(90deg,#06b6d4,#3b82f6,#a78bfa)",
          }}
        />

        {/* Sub-heading */}
        {/* <motion.p
          variants={item}
          className="mt-6 text-base sm:text-lg text-slate-700"
          aria-label="What we do"
        >
          Web Development  •  Graphic Design  •  Digital Marketing
        </motion.p> */}
        <motion.p
          variants={item}
          className="mt-6 text-base sm:text-lg font-medium text-indigo-600"
          aria-label="What we do"
        >
          Web Development • Graphic Design • Digital Marketing
        </motion.p>
      </motion.div>
    </header>
  );
};

export default Hero;
