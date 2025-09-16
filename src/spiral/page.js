// "use client";

// import { motion } from "framer-motion";
// import { useMemo } from "react";
// import "./spiral.css"; // optional if you want to move styles to CSS

// const chips = [
//   "Innovation",
//   "Integrity",
//   "Excellence",
//   "Collaboration",
//   "Customer-Centricity",
//   "Accountability",
//   "Adaptability",
// ];

// // entry directions
// const directions = [
//   { x: -120, y: 0 }, // left
//   { x: 120, y: 0 }, // right
//   { x: 0, y: -80 }, // top
//   { x: 0, y: 80 }, // bottom
// ];

// export default function Spiral() {
//   // stable mapping for chip directions
//   const chipDirs = useMemo(
//     () => chips.map((_, i) => directions[i % directions.length]),
//     []
//   );

//   // container variants
//   const container = {
//     hidden: {},
//     show: { transition: { staggerChildren: 0.08 } },
//   };

//   // per-chip animation
//   const chipVariants = (dir) => ({
//     hidden: { x: dir.x, y: dir.y, opacity: 0, scale: 0.95 },
//     show: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
//     },
//   });

//   return (
//     <section className="relative overflow-hidden">
//       <div aria-hidden className="pointer-events-none absolute inset-0" />

//       {/* Headline */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-center">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
//           One practical, holistic service
//         </h1>
//         <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
//           <span className="bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 bg-clip-text text-transparent">
//             Exponential daily value
//           </span>
//         </h2>
//         <p className="mt-4 text-slate-600">
//           Our teams secure, align, validate and curate exactly what keeps your
//           work moving
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-2">
//         {/* <div className="flex justify-center">
//           <span className="inline-flex items-center gap-2 rounded-full bg-white text-slate-700/80 shadow-sm ring-1 ring-black/5 px-3 py-1.5 text-xs sm:text-sm">
//             <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400" />
//             Core Values
//           </span>
//         </div> */}

//         {/* animated chips */}
//         <motion.div
//           className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.2 }} // re-animates on scroll up/down
//         >
//           {chips.map((chip, i) => {
//             const dir = chipDirs[i];
//             return (
//               <motion.span
//                 key={chip}
//                 variants={chipVariants(dir)}
//                 whileHover={{ y: -6, scale: 1.05 }}
//                 whileTap={{ scale: 0.96 }}
//                 className="relative px-7 py-3 rounded-full text-sm ring-1 ring-black/5 shadow-sm bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500"
//               >
//                 <span
//                   className="pointer-events-none absolute inset-0 rounded-full"
//                   // style={{
//                   //   boxShadow:
//                   //     "0 0 0 1px rgba(6,182,212,.25), 0 0 0 1px inset rgba(59,130,246,.15)",
//                   // }}
//                 />
//                 <span className="text-white bg-clip-text">{chip}</span>
//               </motion.span>
//             );
//           })}
//         </motion.div>
//       </div>

//       <div className="pb-12" />
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import "./spiral.css"; // optional if you want to move styles to CSS

const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";
const SOFT_ACCENT =
  "radial-gradient(circle at 10% 10%, rgba(0,229,255,0.06), transparent 30%), radial-gradient(circle at 90% 90%, rgba(255,138,0,0.06), transparent 30%)";

const chips = [
  "Innovation",
  "Integrity",
  "Excellence",
  "Collaboration",
  "Customer-Centricity",
  "Accountability",
  "Adaptability",
];

// entry directions
const directions = [
  { x: -120, y: 0 }, // left
  { x: 120, y: 0 }, // right
  { x: 0, y: -80 }, // top
  { x: 0, y: 80 }, // bottom
];

export default function Spiral() {
  // stable mapping for chip directions
  const chipDirs = useMemo(
    () => chips.map((_, i) => directions[i % directions.length]),
    []
  );

  // container variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  // per-chip animation
  const chipVariants = (dir) => ({
    hidden: { x: dir.x, y: dir.y, opacity: 0, scale: 0.95 },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  });

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0" />

      {/* Headline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          One practical holistic service
        </h1>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          {/* <span className="bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500 bg-clip-text text-transparent"> */}
          <span
            style={{
              background: LOGO_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Exponential daily value
          </span>
        </h2>
        <p className="mt-4 text-slate-600">
          Our teams secure, align, validate and curate exactly what keeps your
          work moving
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-2">
        {/* animated chips */}
        <motion.div
          className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }} // re-animates on scroll up/down
        >
          {chips.map((chip, i) => {
            const dir = chipDirs[i];
            return (
              <motion.span
                key={chip}
                variants={chipVariants(dir)}
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="relative px-5 py-2 rounded-full ring-1 ring-black/5 shadow-sm bg-gradient-to-r from-sky-500 via-indigo-400 to-amber-500"
                role="button"
                tabIndex={0}
                aria-label={`Core value: ${chip}`}
              >
                <span
                  className="pointer-events-none absolute inset-0 rounded-full"
                  aria-hidden
                />
                {/* slightly reduced font size + still bold-ish */}
                <span className="text-white font-semibold text-base sm:text-lg leading-tight">
                  {chip}
                </span>
              </motion.span>
            );
          })}
        </motion.div>
      </div>

      <div className="pb-12" />
    </section>
  );
}
