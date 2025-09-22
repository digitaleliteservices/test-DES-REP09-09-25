"use client";

import Image from "next/image";
import bannerImage from "../../../public/assets/bannerimage.png";
import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TextGenerateEffect } from "../_components/ui/text-generate-effect";
import Head from "next/head";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleCanPlay = () => setIsLoading(false);
      video.addEventListener("canplay", handleCanPlay);

      const fallback = setTimeout(() => setIsLoading(false), 3000);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        clearTimeout(fallback);
      };
    }
  }, []);

  const words = `Innovation Design and Growth`;

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
      <Head>
        <title>
          Digital Elite Services | Web Development, Graphic Design & Digital
          Marketing
        </title>
        <meta
          name="description"
          content="Digital Elite Services offers expert web development, graphic design, and digital marketing solutions to grow your business effectively."
        />
        <meta
          name="keywords"
          content="Web development, Graphic design, Digital marketing, SEO services, Social media marketing, E-commerce solutions, Branding services, Online advertising"
        />
        <meta name="author" content="Digital Elite Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Digital Elite Services - Your All In One Digital Partner"
        />
        <meta
          property="og:description"
          content="Professional web development, graphic design, and digital marketing services to boost your brand's online presence."
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Digital Elite Services - Web Development & Marketing Experts"
        />
        <meta
          name="twitter:description"
          content="Grow your business with expert solutions in web development, design, and digital marketing from Digital Elite Services."
        />
      </Head>
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
          <TextGenerateEffect duration={2} filter={false} words={words} />

          {/* Subtext (fades up) */}
          <motion.p
            variants={effectiveFade}
            className="text-sm sm:text-base md:text-lg text-gray-200 max-w-lg sm:max-w-xl md:max-w-2xl"
          >
            Web Development • Graphic Design • Digital Marketing
          </motion.p>
        </div>

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
