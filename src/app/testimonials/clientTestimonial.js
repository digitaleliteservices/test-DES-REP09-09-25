// components/HomeTestimonials.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";
const CARD_GRADIENT =
  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)";
const SIDE_CARD_GRADIENT =
  "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.75) 100%)";
const SOFT_ACCENT =
  "radial-gradient(circle at 10% 10%, rgba(0,229,255,0.08), transparent 30%), radial-gradient(circle at 90% 90%, rgba(255,138,0,0.08), transparent 30%)";

const sampleTestimonials = [
  {
    text: "Their digital marketing expertise boosted our lead generation and significantly accelerated our business growth.",
    name: "Rajavruksha Groups",
    // role: "Founder, ShopKart",
    avatar: "/assets/clientlogo.png",
    rating: 4.9,
  },
  {
    text: "Within just a few months, their digital campaigns significantly increased our lead generation and drove a steady flow of new client visits.",
    name: "Plumeria Resort",
    // role: "CMO, BrightFoods",
    avatar: "/assets/plumeria_logo.png",
    rating: 4.8,
  },
  {
    text: "Their strategies helped us generate quality leads and achieve impressive business growth.",
    name: "Defence Housing Society",
    // role: "CEO, BuildFlow",
    avatar: "/assets/DHS.png",
    rating: 5.0,
  },
];

// Star rating component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="relative">
          <svg
            className="w-4 h-4 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {i < fullStars && (
            <div className="absolute inset-0 overflow-hidden">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          )}
          {hasHalfStar && i === fullStars && (
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: "50%" }}
            >
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          )}
        </div>
      ))}
      <span className="ml-1 text-sm font-medium text-gray-700">{rating}</span>
    </div>
  );
};

export default function HomeTestimonials({ items = sampleTestimonials }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // media & reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // autoplay
  useEffect(() => {
    if (prefersReducedMotion || isHovered) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4500);
    return () => clearInterval(id);
  }, [items.length, prefersReducedMotion, isHovered]);

  // helper to produce order for 3-up layout
  const visible = useMemo(() => {
    const len = items.length;
    const center = index % len;
    const left = (center - 1 + len) % len;
    const right = (center + 1) % len;
    return { left, center, right };
  }, [index, items.length]);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  // framer variants (gentle)
  const cardVariants = {
    enter: { opacity: 0, y: 20, scale: 0.95 },
    center: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  const sideCardVariants = {
    enter: { opacity: 0, x: -40, scale: 0.9 },
    center: { opacity: 0.7, x: 0, scale: 0.95 },
    exit: { opacity: 0, x: 40, scale: 0.9 },
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:py-24">
      <div className="text-center mb-12">
        {/* <div
          className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium mb-4"
          style={{
            background: "rgba(0,229,255,0.1)",
            border: "1px solid rgba(0,229,255,0.2)",
            color: "#007BFF",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
          Trusted by industry leaders
        </div> */}

        {/* Fixed spacing between "What our" and "clients say" */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          What our{" "}
          <span
            style={{
              background: LOGO_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            clients say
          </span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Real outcomes from clients across industries — quick wins that turned
          into lasting growth.
        </p>
      </div>

      {/* cards wrapper */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Layout: grid for desktop (3 columns), single for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center justify-center">
          {/* left card */}
          <div className="hidden md:flex items-center justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={visible.left}
                initial="enter"
                animate="center"
                exit="exit"
                variants={sideCardVariants}
                transition={{ duration: 0.5 }}
                aria-hidden
                className="w-full max-w-[320px] rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background: SIDE_CARD_GRADIENT,
                  border: "1px solid rgba(255,255,255,0.8)",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.03)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Gradient border effect */}
                <div
                  className="absolute inset-0 rounded-2xl p-px"
                  style={{
                    background: LOGO_GRADIENT,
                    opacity: 0.3,
                    pointerEvents: "none",
                  }}
                ></div>

                <div className="relative h-full">
                  <div className="absolute -left-4 -top-6 opacity-10 text-[120px] font-bold text-gray-300 select-none pointer-events-none leading-none">
                    “
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-4 mb-4 relative z-10">
                    {items[visible.left].text}
                  </p>

                  <div className="flex items-center gap-3 mt-5">
                    <div
                      className="p-0.5 rounded-full"
                      style={{ background: LOGO_GRADIENT }}
                    >
                      <div className="bg-white p-0.5 rounded-full">
                        <img
                          src={items[visible.left].avatar}
                          alt={items[visible.left].name}
                          className="w-10 h-10 rounded-full object-cover block"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextSibling.style.display = "flex";
                          }}
                        />
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 hidden items-center justify-center text-lg font-bold text-gray-700">
                          {items[visible.left].name.charAt(0)}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {items[visible.left].name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {items[visible.left].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* center card (mobile shows this only) */}
          <div className="flex items-center justify-center col-span-1 md:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={visible.center}
                initial="enter"
                animate="center"
                exit="exit"
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                aria-live="polite"
                className="relative w-full max-w-md rounded-3xl p-8 overflow-hidden"
                style={{
                  background: CARD_GRADIENT,
                  border: "1px solid rgba(255,255,255,0.9)",
                  boxShadow:
                    "0 25px 50px rgba(0,0,0,0.12), 0 5px 15px rgba(0,0,0,0.06)",
                  backdropFilter: "blur(16px)",
                }}
              >
                {/* Gradient border effect */}
                <div
                  className="absolute inset-0 rounded-3xl p-px"
                  style={{
                    background: LOGO_GRADIENT,
                    opacity: 0.4,
                    pointerEvents: "none",
                  }}
                ></div>

                {/* decorative quote mark behind */}
                <div className="absolute -right-4 -top-8 opacity-5 text-[180px] font-bold text-gray-300 select-none pointer-events-none leading-none">
                  “
                </div>

                {/* soft gradient accents */}
                <div
                  className="absolute inset-0 z-0 pointer-events-none"
                  style={{
                    background: SOFT_ACCENT,
                    borderRadius: 24,
                    opacity: 0.3,
                  }}
                />

                <div className="relative z-10">
                  {/* ribbon */}
                  <div className="mb-6 flex items-center">
                    <div className="flex-1">
                      <div
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(0,0,0,0.05)",
                          color: "#2C6DF6",
                        }}
                      >
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        Verified Client
                      </div>
                    </div>
                    <div className="text-right">
                      <StarRating rating={items[visible.center].rating} />
                    </div>
                  </div>

                  <p className="text-lg text-gray-800 leading-relaxed mb-6 relative">
                    <span className="absolute -left-5 -top-2 text-4xl text-blue-500 opacity-30 font-serif">
                      “
                    </span>
                    {items[visible.center].text}
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className="p-0.5 rounded-full"
                      style={{ background: LOGO_GRADIENT }}
                    >
                      <div className="bg-white p-0.5 rounded-full">
                        <img
                          src={items[visible.center].avatar}
                          alt={items[visible.center].name}
                          className="w-14 h-14 rounded-full object-cover block"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextSibling.style.display = "flex";
                          }}
                        />
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-300 to-cyan-300 hidden items-center justify-center text-xl font-bold text-gray-800">
                          {items[visible.center].name.charAt(0)}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {items[visible.center].name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {items[visible.center].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* right card */}
          <div className="hidden md:flex items-center justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={visible.right}
                initial="enter"
                animate="center"
                exit="exit"
                variants={sideCardVariants}
                transition={{ duration: 0.5 }}
                aria-hidden
                className="w-full max-w-[320px] rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background: SIDE_CARD_GRADIENT,
                  border: "1px solid rgba(255,255,255,0.8)",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.03)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Gradient border effect */}
                <div
                  className="absolute inset-0 rounded-2xl p-px"
                  style={{
                    background: LOGO_GRADIENT,
                    opacity: 0.3,
                    pointerEvents: "none",
                  }}
                ></div>

                <div className="relative h-full">
                  <div className="absolute -left-4 -top-6 opacity-10 text-[120px] font-bold text-gray-300 select-none pointer-events-none leading-none">
                    “
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-4 mb-4 relative z-10">
                    {items[visible.right].text}
                  </p>

                  <div className="flex items-center gap-3 mt-5">
                    <div
                      className="p-0.5 rounded-full"
                      style={{ background: LOGO_GRADIENT }}
                    >
                      <div className="bg-white p-0.5 rounded-full">
                        <img
                          src={items[visible.right].avatar}
                          alt={items[visible.right].name}
                          className="w-10 h-10 rounded-full object-cover block"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextSibling.style.display = "flex";
                          }}
                        />
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-200 to-amber-200 hidden items-center justify-center text-lg font-bold text-gray-700">
                          {items[visible.right].name.charAt(0)}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {items[visible.right].name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {items[visible.right].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* controls overlay: prev/next & dots */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex items-center justify-center w-12 h-12 rounded-full shadow-md transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* dots */}
          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className="relative w-10 h-2 rounded-full overflow-hidden transition-all duration-300"
                style={{ background: "rgba(0,0,0,0.06)" }}
              >
                <span
                  className="absolute inset-0 rounded-full transition-all"
                  style={{
                    width: i === index ? "100%" : "0%",
                    background: LOGO_GRADIENT,
                    transitionDuration: prefersReducedMotion ? "0ms" : "500ms",
                  }}
                />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex items-center justify-center w-12 h-12 rounded-full shadow-md transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            // href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:gap-3 hover:shadow-xl"
            style={{
              background: LOGO_GRADIENT,
              color: "white",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            See full client stories
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
