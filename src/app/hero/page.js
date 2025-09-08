// "use client";

// import Image from "next/image";
// import bannerImage from "../../../public/assets/bannerimage.png";
// import { useState, useRef, useEffect } from "react";

// const Hero = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     if (video) {
//       const handleCanPlay = () => {
//         setIsLoading(false);
//       };

//       video.addEventListener("canplay", handleCanPlay);

//       setTimeout(() => {
//         setIsLoading(false);
//       }, 3000);

//       return () => {
//         video.removeEventListener("canplay", handleCanPlay);
//       };
//     }
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {isLoading && (
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 z-20 flex items-center justify-center">
//           <div className="animate-pulse text-white">Loading...</div>
//         </div>
//       )}

//       <video
//         ref={videoRef}
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/assets/hero-video19.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//       ></video>

//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-10">
//         <h3 className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent mb-3 sm:mb-4">
//           Your All In One Digital Partner
//         </h3>

//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight">
//           Innovation <br className="sm:hidden" /> Design and Growth
//         </h1>

//         <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-lg sm:max-w-xl md:max-w-2xl">
//           Web Development • Graphic Design • Digital Marketing
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";

import Image from "next/image";
import bannerImage from "../../../public/assets/bannerimage.png";
import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TextGenerateEffect } from "../_components/ui/text-generate-effect";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleCanPlay = () => setIsLoading(false);
      video.addEventListener("canplay", handleCanPlay);

      // Fallback if canplay doesn't fire
      const fallback = setTimeout(() => setIsLoading(false), 3000);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        clearTimeout(fallback);
      };
    }
  }, []);

  const words = `Innovation Design and Growth`;

  // Animation variants — slowed down and delayed
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.6, // wait before children start animating
      },
    },
  };

  const slideFromLeft = {
    hidden: { x: -90, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 14, duration: 0.9 },
    },
  };

  const slideFromRight = {
    hidden: { x: 90, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 14, duration: 0.9 },
    },
  };

  const fadeUp = {
    hidden: { y: 24, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  const float = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // Respect user preference for reduced motion
  const effectiveContainer = reduceMotion ? {} : container;
  const effectiveLeft = reduceMotion ? {} : slideFromLeft;
  const effectiveRight = reduceMotion ? {} : slideFromRight;
  const effectiveFade = reduceMotion ? {} : fadeUp;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Loading overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 z-30 flex items-center justify-center"
          aria-hidden
        >
          <div className="text-white text-lg font-medium animate-pulse">
            Loading...
          </div>
        </motion.div>
      )}

      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover brightness-90"
        src="/assets/hero-video19.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
      ></video>

      {/* Subtle overlay gradient for better contrast */}
      {/* <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-black/40" /> */}

      {/* Hero Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-10 max-w-6xl mx-auto"
        variants={effectiveContainer}
        initial="hidden"
        animate="show"
      >
        <div className="w-full flex flex-col items-center gap-3">
          {/* Top Small Text (slides from left) — will appear slowly after delayChildren */}
          <motion.h3
            variants={effectiveLeft}
            className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-orange-300 bg-clip-text text-transparent"
          >
            Your All In One Digital Partner
          </motion.h3>

          {/* Main Heading (slides from right) */}
          {/* <motion.h1
            variants={effectiveRight}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-2 leading-snug sm:leading-tight"
            style={{ textShadow: "0 6px 30px rgba(0,0,0,0.45)" }}
          >
            Innovation <span className="hidden sm:inline"></span>
            <br className="sm:hidden" />
            Design and Growth
          </motion.h1> */}
          <TextGenerateEffect duration={2} filter={false} words={words} />

          {/* Subtext (fades up) */}
          <motion.p
            variants={effectiveFade}
            className="text-sm sm:text-base md:text-lg text-gray-200 max-w-lg sm:max-w-xl md:max-w-2xl"
          >
            Web Development • Graphic Design • Digital Marketing
          </motion.p>

          {/* CTA Buttons (slide from bottom) — add small extra delay so CTAs come after headings */}
          {/* <motion.div
            variants={{
              hidden: { y: 36, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { delay: 0.9 } },
            }}
            className="mt-6 flex gap-3 items-center"
          >
            <a
              href="#contact"
              className="inline-block rounded-2xl px-5 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg hover:scale-105 transform transition"
            >
              Get Started
            </a>
            <a
              href="#work"
              className="inline-block rounded-2xl px-5 py-2 border border-white/30 text-white font-medium hover:bg-white/10 transition"
            >
              Our Work
            </a>
          </motion.div> */}
        </div>

        {/* Decorative right-side banner image (floats) */}
        {/* <motion.div
          className="absolute right-6 bottom-10 hidden md:block z-30"
          variants={reduceMotion ? undefined : float}
          animate={reduceMotion ? undefined : "animate"}
        >
          <div className="w-48 h-48 relative drop-shadow-2xl">
            <Image
              src={bannerImage}
              alt="decor"
              fill
              sizes="(min-width: 768px) 12rem, 8rem"
              className="object-contain"
            />
          </div>
        </motion.div> */}

        {/* Soft animated shapes (left) */}
        <motion.div
          className="absolute left-6 top-20 w-36 h-36 rounded-full mix-blend-screen opacity-30 blur-3xl pointer-events-none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 0.35,
            transition: { duration: 1.2, delay: 0.4 },
          }}
        />
      </motion.div>

      {/* Small scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ y: 6, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1.2 } }}
      >
        <div className="text-xs text-gray-200">Scroll to explore</div>
      </motion.div>
    </div>
  );
}
