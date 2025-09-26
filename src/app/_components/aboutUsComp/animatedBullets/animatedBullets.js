"use client";

import { motion } from "framer-motion";

const AnimatedBullets = ({ className = "" }) => {
  const items = [
    "Collaborative team of marketers, developers, designers, and digital strategists",
    "We thrive on solving complex challenges with innovative solutions",
    "Anchored in quality and craftsmanship with attention to detail",
    "Driven by innovation and cutting-edge technologies",
    "Committed to measurable client success and long-term partnerships",
  ];

  // Gradient used for the covering banner for each item
  const hoverGradients = [
    "linear-gradient(90deg,#3b82f6,#1e40af)", // blue
    "linear-gradient(90deg,#8b5cf6,#6d28d9)", // purple
    "linear-gradient(90deg,#f59e0b,#d97706)", // amber/orange
    "linear-gradient(90deg,#10b981,#047857)", // green
    "linear-gradient(90deg,#ec4899,#db2777)", // pink
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      className={`mt-8 max-w-3xl mx-auto space-y-4 list-none ${className}`}
    >
      {items.map((text, i) => (
        <motion.li
          key={i}
          variants={item}
          className="group relative flex items-start gap-4 p-4 rounded-xl shadow-sm transition-all duration-300 overflow-hidden cursor-pointer"
          whileHover={{ translateY: -4 }}
        >
          {/* expanding banner */}
          <div
            aria-hidden
            className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-full transition-all duration-700 ease-in-out origin-left"
            style={{
              background: hoverGradients[i % hoverGradients.length],
              zIndex: 0,
            }}
          />

          {/* dot — changes to white on hover */}
          <motion.span
            className="mt-1 w-4 h-4 rounded-full flex-shrink-0 shadow-sm z-10 transition-colors duration-500"
            style={{
              // background: "linear-gradient(90deg,#f59e0b,#fb923c)",
              background: "linear-gradient(90deg, #f59e0b, #fb923c, #3b82f6)",

            }}
            whileHover={{ scale: 1.15 }}
          >
            <span className="block w-full h-full rounded-full group-hover:bg-white transition-colors duration-500"></span>
          </motion.span>

          {/* text */}
          <span className="relative z-10 leading-relaxed text-base sm:text-lg font-medium transition-colors duration-500 group-hover:text-white">
            {text}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default AnimatedBullets;
