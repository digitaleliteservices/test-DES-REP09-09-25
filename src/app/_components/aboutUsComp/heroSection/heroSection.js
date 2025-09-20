// "use client";

// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative flex items-center justify-center min-h-screen overflow-hidden px-6"
//       style={{
//         background:
//           "linear-gradient(135deg, #007cc2 10%, #b845c1 89%, #ab5d8a 95%)",
//       }}
//     >
//       {/* Top right bob */}
//       <motion.div
//         className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] rounded-full top-10 right-10 opacity-55"
//         style={{
//           background:
//             "radial-gradient(circle at center, #38bdf8 0%, #6366f1 80%)", // cyan → indigo
//           filter: "blur(35px) brightness(0.9)", // softer glow
//         }}
//         animate={{
//           y: [0, -20, 0, 10, 0],
//           x: [0, 15, 0, -10, 0],
//           rotate: [0, 6, -6, 0],
//         }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Bottom left bob */}
//       <motion.div
//         className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] rounded-full bottom-10 left-10 opacity-55"
//         style={{
//           background:
//             "radial-gradient(circle at center, #f472b6 0%, #8b5cf6 80%)", // pink → violet
//           filter: "blur(35px) brightness(0.9)", // softer glow
//         }}
//         animate={{
//           y: [0, 20, 0, -15, 0],
//           x: [0, -15, 0, 15, 0],
//           rotate: [0, -6, 6, 0],
//         }}
//         transition={{
//           duration: 11,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 0.5,
//         }}
//       />

//       {/* Hero text */}
//       <div className="relative z-10 text-center max-w-3xl">
//         <motion.h3
//           className="text-base sm:text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 mb-2 drop-shadow-md"
//           initial={{ opacity: 0, y: -18 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Driving Innovation with Purpose, Precision & Impact
//         </motion.h3>

//         <motion.h1
//           className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight text-white drop-shadow-xl"
//           initial={{ opacity: 0, scale: 0.92 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2, delay: 0.25 }}
//         >
//           We build meaningful experiences <br className="hidden sm:block" />{" "}
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
//             with relentless focus
//           </span>
//         </motion.h1>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

//2nd one
// "use client";

// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative flex items-center justify-center min-h-screen overflow-hidden px-6 mb-25"
//       style={{
//         background:
//           "linear-gradient(135deg, #007cc2 10%,#b845c1 89%,#ab5d8a 95%)",
//       }}
//     >
//       {/* Top left bob - larger and more visible */}
//       <motion.div
//         className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] rounded-full -z-10 top-5 left-5 opacity-50"
//         style={{
//           background: "linear-gradient(90deg, #7c3aed 40%, #fbbf24 100%)",
//           filter: "blur(20px)",
//         }}
//         animate={{
//           y: [0, -15, 0, 8, 0],
//           x: [0, -5, 0, 5, 0],
//           rotate: [0, 3, -3, 0],
//         }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Bottom right bob - larger and more visible */}
//       <motion.div
//         className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] rounded-full -z-10 bottom-5 right-5 opacity-50"
//         style={{
//           background: "linear-gradient(90deg, #fbbf24 40%, #7c3aed 100%)",
//           filter: "blur(20px)",
//         }}
//         animate={{
//           y: [0, 15, 0, -8, 0],
//           x: [0, 5, 0, -5, 0],
//           rotate: [0, -3, 3, 0],
//         }}
//         transition={{
//           duration: 9,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 0.5,
//         }}
//       />

//       {/* Static blob behind text */}
//       <div
//         className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[450px] rounded-full opacity-60 blur-xl -mt-16"
//         style={{
//           background:
//             "linear-gradient(135deg, #7c3aed 0%, #fbbf24 50%, #ec4899 100%)",
//           borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
//         }}
//       />

//       <div className="relative z-10 text-center max-w-3xl">
//         <motion.h3
//           className="text-base sm:text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-orange-200 to-purple-200 mb-2 drop-shadow-md"
//           initial={{ opacity: 0, y: -18 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Driving Innovation with Purpose, Precision & Impact
//         </motion.h3>

//         <motion.h1
//           className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight drop-shadow-xl"
//           initial={{ opacity: 0, scale: 0.92 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2, delay: 0.25 }}
//         >
//           <span className="text-white">We build meaningful experiences </span>
//           <br className="hidden sm:block" />{" "}
//           {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-400 to-purple-500">
//             with relentless focus
//           </span> */}
//           <span className="bg-white px-5 py-1 rounded-lg text-white bg-gradient-to-r from-blue-400 via-orange-400 to-purple-500">
//             with relentless focus
//           </span>
//         </motion.h1>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroSrc = "/assets/digital-new.jpeg";
  const placeholder = "/assets/placeholder.jpg";
  const containerRef = useRef(null);

  // Animation controls
  const leftControls = useAnimation();
  const imageControls = useAnimation();
  const badgeControls = useAnimation();
  
  useEffect(() => {
    // Stagger animations for left column
    leftControls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.08 * i + 0.08, duration: 0.62, ease: "easeOut" },
    }));
    
    // Image animation
    imageControls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, delay: 0.12 }
    });
    
    // Badge animations
    badgeControls.start(i => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2 * i + 0.5, duration: 0.5 }
    }));
  }, [leftControls, imageControls, badgeControls]);

  // Floating badges
  const badges = [
    { title: "Brand", sub: "Identity", color: "from-blue-400 to-cyan-400" },
    { title: "Digital", sub: "Marketing", color: "from-purple-400 to-pink-400" },
    { title: "Web", sub: "Development", color: "from-orange-400 to-red-400" },
  ];

  // Floating particles effect
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section
      ref={containerRef}
      className="relative flex items-center min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg,#055fa3 6%, #8b3fd6 55%, #ff6fa8 100%)" }}
    >
      {/* Animated particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20 -z-10"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}

      {/* diagonal texture */}
      <svg className="absolute inset-0 -z-20 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="diag" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M0 36 L36 0" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      {/* drifting orbs (soft, low-opacity) */}
      <motion.div
        className="absolute rounded-full -z-10"
        style={{ width: 220, height: 220, left: 28, top: 48, background: "linear-gradient(90deg,#7c3aed,#fbbf24)", filter: "blur(36px)", opacity: 0.42 }}
        animate={{ 
          y: [0, -18, 0], 
          x: [0, -8, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full -z-10"
        style={{ width: 180, height: 180, right: 36, bottom: 64, background: "linear-gradient(90deg,#fbbf24,#7c3aed)", filter: "blur(36px)", opacity: 0.36 }}
        animate={{ 
          y: [0, 14, 0], 
          x: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      {/* gentle wave SVG at bottom (subtle) */}
      <motion.svg 
        className="absolute left-0 right-0 bottom-0 -z-10" 
        viewBox="0 0 1440 120" 
        preserveAspectRatio="none" 
        style={{ height: 120 }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <path d="M0 40 C 360 120 1080 -40 1440 40 L1440 120 L0 120 Z" fill="rgba(255,255,255,0.03)"></path>
      </motion.svg>

      {/* main container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* left column */}
        <div className="flex-1 max-w-2xl">
          <motion.h2
            custom={0}
            initial={{ opacity: 0, y: 20 }}
            animate={leftControls}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
          >
            We build meaningful <motion.span 
              style={{ background: "linear-gradient(90deg,#80eafc,#ffb4d2)", WebkitBackgroundClip: "text", color: "transparent" }}
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            >experiences</motion.span>
          </motion.h2>

          <motion.h1
            custom={1}
            initial={{ opacity: 0, y: 20 }}
            animate={leftControls}
            className="mt-4 text-xl md:text-2xl font-semibold text-white/90"
          >
            with relentless focus on design, performance and outcomes.
          </motion.h1>

          <motion.div
            custom={2}
            initial={{ opacity: 0, y: 20 }}
            animate={leftControls}
            className="mt-6 flex flex-wrap gap-3"
          >
            {badges.map((badge, i) => (
              <motion.span 
                key={i}
                custom={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={badgeControls}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                className={`px-3 py-1 rounded-full bg-gradient-to-r ${badge.color} text-white text-sm backdrop-blur-sm`}
              >
                {badge.title} <span className="font-bold">{badge.sub}</span>
              </motion.span>
            ))}
          </motion.div>

          <motion.p 
            custom={3} 
            initial={{ opacity: 0, y: 20 }} 
            animate={leftControls} 
            className="mt-6 text-sm md:text-base text-white/80"
          >
            Strategy, product design and engineering fused into clear, measurable outcomes. Clean craft, modern tooling, and a human-first approach.
          </motion.p>
        </div>

        {/* vertical divider */}
        <motion.div 
          className="hidden md:flex items-center"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="h-48 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent rounded" />
        </motion.div>

        {/* right column */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Animated floating badges around the image - made more visible */}
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              className={`absolute w-20 h-20 rounded-full flex flex-col items-center justify-center text-white text-xs font-bold bg-gradient-to-br ${badge.color} shadow-lg z-10`}
              style={{
                top: i === 0 ? "5%" : i === 1 ? "75%" : "40%",
                left: i === 0 ? "5%" : i === 1 ? "75%" : "-5%",
                right: i === 2 ? "75%" : "auto",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.1,
                z: 20,
                transition: { duration: 0.3 }
              }}
            >
              <span className="font-semibold">{badge.title}</span>
              <span className="text-[10px] mt-1">{badge.sub}</span>
            </motion.div>
          ))}

          {/* framed image card with rim + depth - made smaller */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95, rotate: 2 }}
            animate={imageControls}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            style={{ perspective: 900 }}
            className="relative z-0" // Lower z-index to allow badges to appear above
          >
            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 rounded-2xl opacity-70 -z-10"
              style={{
                background: "linear-gradient(90deg, rgba(124,58,237,0.3), rgba(251,191,36,0.3))",
                filter: "blur(15px)",
              }}
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div style={{
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 40px 90px rgba(6,7,22,0.45)",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
              width: "80%", // Reduced width
              margin: "0 auto", // Centered
            }}>
              <motion.img
                src={heroSrc}
                alt="Hero"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = placeholder; }}
                drag
                dragConstraints={{ top: -10, bottom: 10, left: -10, right: 10 }}
                whileTap={{ scale: 0.995 }}
                animate={{ 
                  y: [0, -10, 0], 
                  rotate: [0, 0.6, 0], 
                  scale: [1, 1.01, 1] 
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full object-cover block" // Responsive width
                style={{ display: "block", maxWidth: "300px" }} // Limited max width
              />
            </div>

            {/* rim glow */}
            <div style={{
              position: "absolute",
              inset: -8,
              borderRadius: 22,
              filter: "blur(6px)",
              background: "linear-gradient(90deg, rgba(124,58,237,0.06), rgba(251,191,36,0.05))",
              pointerEvents: "none",
              width: "calc(80% + 16px)", // Match the reduced image width
              left: "10%", // Center the glow
            }} />
          </motion.div>

          {/* dot grid accent */}
          <motion.svg 
            className="absolute right-6 bottom-6 hidden sm:block" 
            width="80" 
            height="80" 
            viewBox="0 0 80 80" 
            fill="none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            <g>
              {[0,1,2].map(r => [0,1,2].map(c =>
                <motion.rect 
                  key={`${r}-${c}`} 
                  x={c*22} 
                  y={r*22} 
                  width="6" 
                  height="6" 
                  rx="2" 
                  fill="white" 
                  opacity="0.04"
                  animate={{ opacity: [0.04, 0.1, 0.04] }}
                  transition={{ duration: 2, delay: (r + c) * 0.2, repeat: Infinity }}
                />
              ))}
            </g>
          </motion.svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;