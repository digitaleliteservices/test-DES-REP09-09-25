"use client";

import { Users, Briefcase, Building, Layers, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import OurClients from "../ourclients/page";
import "./work.css";

const partners = [
  {
    title: "StartUp",
    description: [
      "Launch with confidence",
      "Branding & MVP development",
      "Go-to-market strategy",
      "Digital growth support",
    ],
    icon: Users,
  },
  {
    title: "Small to Medium Businesses",
    description: [
      "Improve visibility",
      "Increase sales",
      "Scalable solutions for growth",
      "Compete online effectively",
    ],
    icon: Briefcase,
  },
  {
    title: "Agencies & Creative Studios",
    description: [
      "White-label design services",
      "Marketing support",
      "Reliable backend partner",
      "Seamless collaboration",
    ],
    icon: Layers,
  },
  {
    title: "Enterprises",
    description: [
      "Custom web development",
      "Technical consultation",
      "Digital strategies",
      "Dedicated support",
    ],
    icon: Building,
  },
];

const industries = [
  "E-Commerce",
  "Charitable Trust",
  "Tech",
  "Real Estate",
  "Education",
  "Resort",
  "Food",
];

/* Framer variants */
const cardVariant = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const leftItem = {
  hidden: { x: -28, opacity: 0, rotate: -3, clipPath: "inset(0 100% 0 0)" },
  show: {
    x: 0,
    opacity: 1,
    rotate: 0,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.48, ease: [0.2, 0.9, 0.3, 1] },
  },
};
const rightItem = {
  hidden: { x: 28, opacity: 0, rotate: 3, clipPath: "inset(0 0 0 100%)" },
  show: {
    x: 0,
    opacity: 1,
    rotate: 0,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.48, ease: [0.2, 0.9, 0.3, 1] },
  },
};

export default function WhoWeWorkWith() {
  const cardRefs = useRef([]);

  // subtle mouse-follow tilt (writes css vars)
  const handleMouseMove = (e, idx) => {
    const el = cardRefs.current[idx];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / Math.max(rect.width, 1) - 0.5;
    const relY = (e.clientY - rect.top) / Math.max(rect.height, 1) - 0.5;
    const rotateY = relX * 6;
    const rotateX = -relY * 4;
    // write GPU-friendly transform via CSS var or direct transform depending on your CSS:
    // here we set css vars used by .card-inner, if present; fallback to transform inline
    if (el.style.setProperty) {
      el.style.setProperty("--ry", `${rotateY}deg`);
      el.style.setProperty("--rx", `${rotateX}deg`);
      el.style.setProperty("--s", "1.02");
    } else {
      el.style.transform = `translateZ(0) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = (idx) => {
    const el = cardRefs.current[idx];
    if (!el) return;
    if (el.style.removeProperty) {
      el.style.setProperty("--ry", `0deg`);
      el.style.setProperty("--rx", `0deg`);
      el.style.setProperty("--s", `1`);
    } else {
      el.style.transform = "";
    }
  };

  return (
    <section className="who-section relative py-16 md:py-20 bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/assets/who-we-work_bg_image.avif"
          alt="Who we work with background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Who We Work With
          </h2>
        </div>

        {/* INDUSTRIES - static list, single entrance (no swapping) */}
        <div className="industries-section">
          <motion.div
            className="industry-list-container"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }} // animate once only
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {industries.map((industry, idx) => (
              <motion.span
                key={`${industry}-${idx}`}
                className="industry-pill-slot"
                custom={idx}
                initial={{ x: idx % 2 === 0 ? -48 : 48, opacity: 0, y: 8 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                }}
                // no exit or re-ordering animation; static afterwards
              >
                <span
                  className="interactive-pill industry-pill bg-gradient-to-r from-[#00E5FF] via-[#2C6DF6] to-[#FF8A00] text-white px-1 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow"
                  role="button"
                  tabIndex={0}
                  aria-label={industry}
                >
                  <span className="pill-text">{industry}</span>
                </span>
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Grid: left cards, centered video, right cards */}
        <div className="lg:flex lg:items-center lg:gap-8 partners-grid">
          {/* Left Column */}
          <div className="space-y-6 lg:flex-1">
            {partners.slice(0, 2).map((partner, idx) => {
              const Icon = partner.icon;
              const cardIndex = idx;
              return (
                <motion.div
                  key={idx}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="p-[3px] rounded-xl bg-gradient-to-r from-[#00E5FF]/60 via-[#2C6DF6]/60 to-[#FF8A00]/60"
                >
                  <motion.div
                    ref={(el) => (cardRefs.current[cardIndex] = el)}
                    onMouseMove={(e) => handleMouseMove(e, cardIndex)}
                    onMouseLeave={() => handleMouseLeave(cardIndex)}
                    whileHover={{ translateY: -6 }}
                    className="relative group card-inner flex items-start gap-4 bg-white/95 rounded-xl shadow-md p-4 sm:p-5 transition-shadow duration-300 will-change-transform"
                    style={{ "--rx": "0deg", "--ry": "0deg", "--s": "1" }}
                  >
                    <div className="icon-wrap mt-1">
                      <Icon className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2C6DF6] to-[#FF8A00]" />
                    </div>

                    <div className="flex-1">
                      {/* partner title is static (no scroll-driven changes) */}
                      <h3 className="partner-title text-center">
                        {partner.title}
                      </h3>

                      <motion.ul
                        variants={listContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.15 }}
                        className="space-y-2 text-gray-700 text-sm sm:text-base text-left mt-0"
                      >
                        {partner.description.map((point, i) => {
                          const variant = i % 2 === 0 ? leftItem : rightItem;
                          return (
                            <motion.li
                              key={i}
                              variants={variant}
                              className="flex items-start gap-3"
                            >
                              <motion.span
                                initial={{ scale: 0.6, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.44, ease: "backOut" }}
                                className="mt-1 check-bubble flex-shrink-0 rounded-full w-5 h-5 flex items-center justify-center"
                              >
                                <CheckCircle2 className="w-4 h-4 text-white stroke-[2]" />
                              </motion.span>

                              <motion.span className="leading-snug motion-bullet-underline">
                                {point}
                              </motion.span>
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    </div>

                    <div
                      aria-hidden
                      className="absolute -right-3 -top-3 w-14 h-14 rounded-full accent-blob opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    />
                    <div className="glow-rim" aria-hidden />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Center video */}
          <div className="flex justify-center my-6 lg:my-0 lg:flex-1">
            <div className="rounded-full bg-gradient-to-br from-[#00E5FF] via-[#2C6DF6] to-[#FF8A00] shadow-lg p-1 flex items-center justify-center video-ring">
              <video
                src="/assets/hero-video30.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:flex-1">
            {partners.slice(2).map((partner, idx) => {
              const Icon = partner.icon;
              const realIdx = idx + 2;
              const cardIndex = realIdx;
              return (
                <motion.div
                  key={realIdx}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="p-[3px] rounded-xl bg-gradient-to-r from-[#00E5FF]/60 via-[#2C6DF6]/60 to-[#FF8A00]/60"
                >
                  <motion.div
                    ref={(el) => (cardRefs.current[cardIndex] = el)}
                    onMouseMove={(e) => handleMouseMove(e, cardIndex)}
                    onMouseLeave={() => handleMouseLeave(cardIndex)}
                    whileHover={{ translateY: -6 }}
                    className="relative group card-inner flex items-start gap-4 bg-white/95 rounded-xl shadow-md p-4 sm:p-5 transition-shadow duration-300 will-change-transform"
                    style={{ "--rx": "0deg", "--ry": "0deg", "--s": "1" }}
                  >
                    <div className="icon-wrap mt-1">
                      <Icon className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2C6DF6] to-[#FF8A00]" />
                    </div>

                    <div className="flex-1">
                      <h3 className="partner-title text-center">
                        {partner.title}
                      </h3>

                      <motion.ul
                        variants={listContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.15 }}
                        className="space-y-2 text-gray-700 text-sm sm:text-base text-left mt-0"
                      >
                        {partner.description.map((point, i) => {
                          const variant = i % 2 === 0 ? leftItem : rightItem;
                          return (
                            <motion.li
                              key={i}
                              variants={variant}
                              className="flex items-start gap-3"
                            >
                              <motion.span
                                initial={{ scale: 0.6, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.44, ease: "backOut" }}
                                className="mt-1 check-bubble flex-shrink-0 rounded-full w-5 h-5 flex items-center justify-center"
                              >
                                <CheckCircle2 className="w-4 h-4 text-white stroke-[2]" />
                              </motion.span>

                              <motion.span className="leading-snug motion-bullet-underline">
                                {point}
                              </motion.span>
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    </div>

                    <div
                      aria-hidden
                      className="absolute -right-3 -top-3 w-14 h-14 rounded-full accent-blob opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    />
                    <div className="glow-rim" aria-hidden />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <OurClients />
      </div>
    </section>
  );
}
