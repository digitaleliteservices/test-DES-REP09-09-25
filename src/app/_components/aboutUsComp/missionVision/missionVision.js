"use client";

import { motion } from "framer-motion";
const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

const MissionVisionSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-10 md:pt-12 pb-16 md:pb-24 bg-white">
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-8 md:mb-10">
        <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-orange-500/30 text-sm sm:text-base inline-block mb-4 text-gray-800">
          🌟 Our Vision & Mission
        </span>
        {/* <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-md">
          Purpose That Powers Our Work
        </h3> */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          <span className="text-slate-900">Purpose That</span>{" "}
          <span
            className="inline-block"
            style={{
              background: LOGO_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Powers Our Work
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
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-6">
        <VisionCard />
        <MissionCard />
      </div>
    </section>
  );
};

const MissionCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="rounded-2xl p-6 md:p-8 bg-white border border-gray-200 shadow-lg mb-6"
  >
    <div className="flex items-center gap-3 mb-3">
      <span className="px-3 py-1 rounded-full text-xs tracking-wide bg-gradient-to-r from-purple-500 to-orange-400 text-white">
        Our Mission
      </span>
    </div>
    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
      To empower businesses with innovative design, custom digital solutions
      that drive real measurable growth. We strategize digital solutions that
      spark growth, improve visibility, and deliver lasting values.
    </p>
  </motion.div>
);

const VisionCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: 0.15 }}
    className="rounded-2xl p-6 md:p-8 bg-white border border-gray-200 shadow-lg mb-6"
  >
    <div className="flex items-center gap-3 mb-3">
      <span className="px-3 py-1 rounded-full text-xs tracking-wide bg-gradient-to-r from-purple-500 to-orange-400 text-white">
        Our Vision
      </span>
    </div>
    <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
      To be a trusted digital growth partner for ambitious brands around the
      world, known for creativity, innovation, and exceptional service.
    </p>
  </motion.div>
);

export default MissionVisionSection;
