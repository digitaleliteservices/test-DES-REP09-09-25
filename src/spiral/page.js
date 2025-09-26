// "use client";

// import React, { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "./spiral.css"; // keep existing styles if any

// const chips = [
//   {
//     title: "Innovation",
//     desc: "Continuously embracing creativity and technology to deliver cutting-edge digital solutions.",
//   },
//   {
//     title: "Integrity",
//     desc: "Maintaining transparency, honesty, and ethical practices in all our interactions.",
//   },
//   {
//     title: "Excellence",
//     desc: "Striving for the highest quality in every project, ensuring measurable results and client satisfaction.",
//   },
//   {
//     title: "Collaboration",
//     desc: "Working closely with clients and within our team to achieve shared goals and meaningful outcomes.",
//   },
//   {
//     title: "Customer-Centricity",
//     desc: "Placing client needs at the heart of everything we do, building long-term relationships.",
//   },
//   {
//     title: "Accountability",
//     desc: "Taking ownership of our actions, commitments, and results.",
//   },
//   {
//     title: "Adaptability",
//     desc: "Embracing change and staying agile in a dynamic digital landscape.",
//   },
// ];

// const directions = [
//   { x: -120, y: 0 }, // left
//   { x: 120, y: 0 }, // right
//   { x: 0, y: -80 }, // top
//   { x: 0, y: 80 }, // bottom
// ];

// // color palette per chip (keeps consistent appearance + glow)
// const CHIP_ACCENTS = [
//   { from: "#06b6d4", to: "#3b82f6" }, // cyan -> blue
//   { from: "#f97316", to: "#ef4444" }, // orange -> red
//   { from: "#8b5cf6", to: "#ec4899" }, // purple -> pink
//   { from: "#06b6d4", to: "#7c3aed" }, // cyan -> indigo
//   { from: "#10b981", to: "#06b6d4" }, // green -> cyan
//   { from: "#f59e0b", to: "#f97316" }, // amber -> orange
//   { from: "#0ea5a4", to: "#06b6d4" }, // teal -> cyan
// ];

// export default function Spiral() {
//   const chipDirs = useMemo(
//     () => chips.map((_, i) => directions[i % directions.length]),
//     []
//   );
//   const [activeIndex, setActiveIndex] = useState(null);

//   const container = {
//     hidden: {},
//     show: { transition: { staggerChildren: 0.06 } },
//   };
//   const chipVariants = (dir) => ({
//     hidden: { x: dir.x, y: dir.y, opacity: 0, scale: 0.98 },
//     show: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
//     },
//   });

//   // tooltip animation (spring)
//   const tipAnim = {
//     initial: { opacity: 0, y: 8, scale: 0.98 },
//     animate: { opacity: 1, y: 0, scale: 1 },
//     exit: { opacity: 0, y: 8, scale: 0.98 },
//     transition: { type: "spring", stiffness: 400, damping: 28, mass: 0.15 },
//   };

//   return (
//     <section
//       className="relative overflow-hidden"
//       aria-labelledby="core-values-heading"
//       style={{
//         // page background: smooth diagonal gradient + subtle texture tint
//         background:
//           "radial-gradient(800px 400px at 10% 20%, rgba(99,102,241,0.06), transparent 8%)," +
//           "radial-gradient(700px 360px at 92% 82%, rgba(251,191,36,0.04), transparent 8%)," +
//           "linear-gradient(135deg, #f7fbff 0%, #f3f7ff 35%, #fffaf6 100%)",
//       }}
//     >
//       {/* decorative animated blobs */}
//       <motion.div
//         aria-hidden
//         initial={{ opacity: 0.12 }}
//         animate={{ y: [0, -12, 0], opacity: [0.12, 0.22, 0.12] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         style={{
//           position: "absolute",
//           right: -80,
//           top: -80,
//           width: 420,
//           height: 420,
//           borderRadius: "50%",
//           background: "linear-gradient(135deg,#7c3aed33,#06b6d433)",
//           filter: "blur(72px)",
//           zIndex: 0,
//           pointerEvents: "none",
//         }}
//       />

//       <motion.div
//         aria-hidden
//         initial={{ opacity: 0.08 }}
//         animate={{ y: [0, 10, 0], opacity: [0.08, 0.16, 0.08] }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 0.6,
//         }}
//         style={{
//           position: "absolute",
//           left: -120,
//           bottom: -100,
//           width: 520,
//           height: 520,
//           borderRadius: "50%",
//           background: "linear-gradient(135deg,#fb923c22,#60a5fa22)",
//           filter: "blur(92px)",
//           zIndex: 0,
//           pointerEvents: "none",
//         }}
//       />

//       {/* subtle vignette for contrast */}
//       <div
//         aria-hidden
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "radial-gradient(1200px 600px at 50% 10%, rgba(255,255,255,0) 0%, rgba(2,6,23,0.02) 100%)",
//           pointerEvents: "none",
//           zIndex: 0,
//         }}
//       />

//       <div className="relative z-10">
//         {/* Centered small label */}
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
//           <span
//             id="core-values-heading"
//             className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-orange-500/30 text-sm sm:text-base inline-block mb-4 text-gray-800"
//           >
//             🌟 Core Values
//           </span>
//         </div>

//         {/* Two-column layout: left = Exponential Daily Value + subtitle; right = pills */}
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//             {/* LEFT column - heading & subtitle (left-aligned) */}
//             <div className="order-2 md:order-1 flex flex-col justify-start">
//               {/* <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 drop-shadow-sm">
//                 Exponential Daily Value
//               </h3> */}
//               <p className="mt-4 text-slate-600 max-w-xl">
//                 Our teams secure, align, validate and curate exactly what keeps
//                 your work moving. Every day we invest in small improvements that
//                 compound into large wins — measurable, repeatable and
//                 client-focused.
//               </p>

//               <div className="mt-6 flex flex-wrap gap-3">
//                 <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 text-sm text-slate-700 border border-gray-100">
//                   <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
//                   Daily Improvements
//                 </span>

//                 <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-50 to-orange-50 text-sm text-slate-700 border border-gray-100">
//                   <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
//                   Measurable Outcomes
//                 </span>
//               </div>
//             </div>

//             {/* RIGHT column - pills (aligned to right on md+, stacked on small screens) */}
//             <div className="order-1 md:order-2 flex justify-end">
//               <motion.div
//                 className="w-full md:w-auto"
//                 variants={container}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: false, amount: 0.2 }}
//               >
//                 {/* pills wrapped to the right; on small screens they will wrap under the heading */}
//                 <div className="flex flex-wrap justify-end gap-3">
//                   {chips.map((chip, i) => {
//                     const dir = chipDirs[i];
//                     const accent = CHIP_ACCENTS[i % CHIP_ACCENTS.length];

//                     return (
//                       <motion.div
//                         key={`${chip.title}-${i}`}
//                         variants={chipVariants(dir)}
//                         className="relative"
//                       >
//                         <button
//                           onMouseEnter={() => setActiveIndex(i)}
//                           onMouseLeave={() =>
//                             setActiveIndex((cur) => (cur === i ? null : cur))
//                           }
//                           onFocus={() => setActiveIndex(i)}
//                           onBlur={() =>
//                             setActiveIndex((cur) => (cur === i ? null : cur))
//                           }
//                           onKeyDown={(e) => {
//                             if (e.key === "Escape") setActiveIndex(null);
//                           }}
//                           className="relative px-5 py-2 rounded-full ring-1 ring-black/5 shadow-sm bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 text-white font-semibold text-base sm:text-lg leading-tight focus:outline-none focus:ring-4 focus:ring-sky-200"
//                           aria-haspopup="dialog"
//                           aria-expanded={activeIndex === i}
//                           aria-controls={`chip-desc-${i}`}
//                         >
//                           <span
//                             className="pointer-events-none absolute inset-0 rounded-full"
//                             aria-hidden
//                           />
//                           <span>{chip.title}</span>

//                           <AnimatePresence>
//                             {activeIndex === i && (
//                               <motion.div
//                                 id={`chip-desc-${i}`}
//                                 role="dialog"
//                                 initial={tipAnim.initial}
//                                 animate={tipAnim.animate}
//                                 exit={tipAnim.exit}
//                                 transition={tipAnim.transition}
//                                 className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-72 md:w-80 z-50"
//                                 style={{ pointerEvents: "auto" }}
//                               >
//                                 {/* Tooltip card (glass + accent + shadow + glow) */}
//                                 <div
//                                   className="rounded-xl border border-gray-100 p-3 text-left backdrop-blur-sm"
//                                   style={{
//                                     background:
//                                       "linear-gradient(180deg, rgba(255,255,255,0.90), rgba(255,255,255,0.78))",
//                                     boxShadow: `0 10px 30px rgba(15,23,42,0.12), 0 3px 8px rgba(0,0,0,0.06), 0 0 18px ${accent.from}22`,
//                                     borderLeft: `4px solid ${accent.from}`,
//                                   }}
//                                 >
//                                   {/* top accent strip */}
//                                   <div
//                                     className="h-1 rounded-t-xl -mx-3 mb-2"
//                                     style={{
//                                       background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
//                                     }}
//                                   />
//                                   <div className="flex items-start gap-3">
//                                     <div
//                                       className="flex-shrink-0 w-9 h-9 rounded-md grid place-items-center"
//                                       style={{
//                                         background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
//                                         boxShadow: `0 6px 18px ${accent.to}30`,
//                                       }}
//                                       aria-hidden
//                                     >
//                                       <svg
//                                         width="18"
//                                         height="18"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                       >
//                                         <path
//                                           d="M12 2v6"
//                                           stroke="white"
//                                           strokeWidth="1.6"
//                                           strokeLinecap="round"
//                                           strokeLinejoin="round"
//                                         />
//                                         <path
//                                           d="M12 16v6"
//                                           stroke="white"
//                                           strokeWidth="1.6"
//                                           strokeLinecap="round"
//                                           strokeLinejoin="round"
//                                         />
//                                         <path
//                                           d="M4 12h16"
//                                           stroke="white"
//                                           strokeWidth="1.6"
//                                           strokeLinecap="round"
//                                           strokeLinejoin="round"
//                                         />
//                                       </svg>
//                                     </div>

//                                     <div>
//                                       <div className="text-sm font-semibold text-slate-900">
//                                         {chip.title}
//                                       </div>
//                                       <div className="mt-1 text-xs text-slate-600 leading-snug">
//                                         {chip.desc}
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>

//                                 {/* arrow with soft shadow */}
//                                 <div className="flex justify-center -mt-1.5 pointer-events-none">
//                                   <div
//                                     className="w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100"
//                                     style={{
//                                       boxShadow: `0 4px 8px rgba(2,6,23,0.06)`,
//                                     }}
//                                   />
//                                 </div>
//                               </motion.div>
//                             )}
//                           </AnimatePresence>
//                         </button>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

const values = [
  {
    title: "Innovation",
    desc: "Continuously embracing creativity and technology to deliver cutting-edge digital solutions.",
  },
  {
    title: "Integrity",
    desc: "Maintaining transparency, honesty, and ethical practices in all our interactions.",
  },
  {
    title: "Excellence",
    desc: "Striving for the highest quality in every project, ensuring measurable results and client satisfaction.",
  },
  {
    title: "Collaboration",
    desc: "Working closely with clients and within our team to achieve shared goals and meaningful outcomes.",
  },
  {
    title: "Customer Centricity",
    desc: "Placing client needs at the heart of everything we do, building long-term relationships.",
  },
  // {
  //   title: "Accountability",
  //   desc: "Taking ownership of our actions, commitments, and results.",
  // },
  {
    title: "Adaptability",
    desc: "Embracing change and staying agile in a dynamic digital landscape.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, delay: i * 0.06, ease: "easeOut" },
  }),
};

export default function CoreValues() {
  return (
    <section
      aria-label="Core values"
      className="py-20"
      style={{
        // subtle background consistent with your theme
        background: "linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Heading */}
     <div className="flex justify-center mb-6">
  <div className="text-center">
    <h2
      className="font-extrabold tracking-tight leading-tight"
      style={{
        fontSize: "clamp(2.4rem, 6vw, 5.2rem)",
        lineHeight: 1.02,
        background: LOGO_GRADIENT,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        backgroundSize: "200% 100%",
      }}
    >
      Core values
    </h2>

    <div
      className="mt-4 h-1 rounded-full mx-auto"
      style={{
        width: 160,
        background: LOGO_GRADIENT,
        backgroundSize: "200% 100%",
        boxShadow: "0 8px 28px rgba(44,109,246,0.10)",
      }}
    />
  </div>
</div>


        {/* Grid rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              className="grid grid-cols-1 md:grid-cols-2 items-start"
              custom={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.18 }}
              variants={itemVariants}
            >
              {/* LEFT: number + title + separator */}
              <div className="pr-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <span
                      className="text-3xl md:text-4xl font-semibold text-slate-300 select-none"
                      style={{ lineHeight: 1 }}
                    >
                      {String(idx + 1).padStart(2, "0")}.
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-2xl md:text-3xl font-extrabold text-slate-900 transition-colors duration-300"
                      // make title slightly interactive: gradient-on-hover (keeps readability)
                      onMouseEnter={(e) => {
                        // apply inline gradient on hover (keeps accessibility)
                        e.currentTarget.style.background = LOGO_GRADIENT;
                        e.currentTarget.style.WebkitBackgroundClip = "text";
                        e.currentTarget.style.WebkitTextFillColor =
                          "transparent";
                        e.currentTarget.style.backgroundClip = "text";
                        e.currentTarget.style.backgroundSize = "200% 100%";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "";
                        e.currentTarget.style.WebkitBackgroundClip = "";
                        e.currentTarget.style.WebkitTextFillColor = "";
                        e.currentTarget.style.backgroundClip = "";
                      }}
                    >
                      {v.title}
                    </h3>

                    {/* gradient thin separator (subtle) */}
                    <div
                      className="mt-5"
                      style={{
                        height: 1,
                        background:
                          "linear-gradient(90deg, rgba(15,23,42,0.06), rgba(15,23,42,0.06))",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT: description */}
              <div className="pt-1 md:pt-0">
                <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scoped CSS for subtle animated gradient shift on heading & underline */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        h1[style] {
          animation: gradientShift 8s ease-in-out infinite;
        }

        .mt-4[style] {
          animation: gradientShift 8s ease-in-out infinite;
        }

        @media (min-width: 1024px) {
          h1 {
            letter-spacing: -0.02em;
          }
        }
      `}</style>
    </section>
  );
}
