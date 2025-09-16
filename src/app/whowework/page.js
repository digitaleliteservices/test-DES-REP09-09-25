// File: WhoWeWorkWith.jsx
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
    title: "SMEs",
    description: [
      "Improve visibility",
      "Increase sales",
      "Scalable solutions for growth",
      "Compete online effectively",
    ],
    icon: Briefcase,
  },
  {
    title: "Agencies & Studios",
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

/* Framer variants (unchanged) */
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

  // uniform theme for all cards
  const THEME = {
    bg: "linear-gradient(90deg,#061a40 0%, #0b6ef6 100%)",
    hover: "linear-gradient(90deg,#0b6ef6 0%, #06b6d4 100%)",
    fg: "#ffffff",
    icon: "#ffffff",
  };

  // mouse-follow tilt writing css vars (--rx, --ry, --s)
  const handleMouseMove = (e, idx) => {
    const el = cardRefs.current[idx];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / Math.max(rect.width, 1) - 0.5;
    const relY = (e.clientY - rect.top) / Math.max(rect.height, 1) - 0.5;
    const rotateY = relX * 6;
    const rotateX = -relY * 4;
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
    if (el.style.setProperty) {
      el.style.setProperty("--ry", `0deg`);
      el.style.setProperty("--rx", `0deg`);
      el.style.setProperty("--s", `1`);
    } else {
      el.style.transform = "";
    }
  };

  return (
    <section className="who-section relative py-16 md:py-20">
      {/* <div className="absolute inset-0 pointer-events-none">
        <img
          src="/assets/who-we-work_bg_image.avif"
          alt="Who we work with background"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Who We Work With
          </h2>
        </div>

        {/* INDUSTRIES */}
        <div className="industries-section">
          <motion.div
            className="industry-list-container"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {industries.map((industry, idx) => (
              <motion.span
                key={`${industry}-${idx}`}
                className="industry-pill-slot"
                initial={{ x: idx % 2 === 0 ? -48 : 48, opacity: 0, y: 8 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                }}
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

        {/* GRID */}
        <div className="lg:flex lg:items-center lg:gap-8 partners-grid">
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
                  className="p-[3px] rounded-xl"
                >
                  
                 
               <div className="relative group perspective-1000 w-full h-full">
  <div className="flip-inner preserve-3d transition-transform duration-500 ease-out group-hover:rotate-y-180 w-full h-full will-change-transform backface-hidden">

    <motion.div
      ref={(el) => (cardRefs.current[cardIndex] = el)}
      onMouseMove={(e) => handleMouseMove(e, cardIndex)}
      onMouseLeave={() => handleMouseLeave(cardIndex)}
      whileHover={{ translateY: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-full  h-full card-inner colored-card transition-all will-change-transform backface-hidden"
      style={{
        "--card-bg": THEME.bg,
        "--card-hover": THEME.hover,
        "--fg": THEME.fg,
        "--icon": THEME.icon,
      }}
    >
      
      {/* Content wrapper that flips back */}
      {/* <div className="transition-transform duration-500 ease-in-out group-hover:rotate-y-180 w-full h-full"> */}
 <div className="transition-transform duration-500 ease-out group-hover:rotate-y-180 w-full h-full will-change-transform backface-hidden">
     
        <div className="card-head">
          <div className="icon-wrap big-icon">
            <Icon style={{ color: "var(--icon)" }} className="w-10 h-10" />
          </div>
          <h3 className="partner-title centered-title" title={partner.title} style={{ color: "var(--fg)" }}>
            {partner.title}
          </h3>
        </div>

        <div className="flex-1 mt-2">
          <motion.ul
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            className="space-y-2 text-base text-center mt-0"
            style={{ color: "var(--fg)" }}
          >
            {partner.description.map((point, i) => {
              const variant = i % 2 === 0 ? leftItem : rightItem;
              return (
                <motion.li key={i} variants={variant} className="flex items-start gap-3">
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.44, ease: "backOut" }}
                    className="mt-1 check-bubble flex-shrink-0 rounded-full w-5 h-5 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(180deg,var(--c-cyan),var(--c-blue))",
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-white stroke-[2]" />
                  </motion.span>

                  <motion.span className="leading-snug motion-bullet-underline title-point">
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
        
      </div>
    </motion.div>

  </div>
</div>

 

                </motion.div>
              );
            })}
          </div>

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

          {/* <div className="space-y-6 lg:flex-1">
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
                  className="p-[3px] rounded-xl"
                >
                  <motion.div
                    ref={(el) => (cardRefs.current[cardIndex] = el)}
                    onMouseMove={(e) => handleMouseMove(e, cardIndex)}
                    onMouseLeave={() => handleMouseLeave(cardIndex)}
                    whileHover={{ translateY: -6 }}
                    className="relative group card-inner colored-card transition-all"
                    style={{
                      "--card-bg": THEME.bg,
                      "--card-hover": THEME.hover,
                      "--fg": THEME.fg,
                      "--icon": THEME.icon,
                    }}
                  >
                    <div className="card-head">
                      <div className="icon-wrap big-icon">
                        <Icon
                          style={{ color: "var(--icon)" }}
                          className="w-10 h-10"
                        />
                      </div>
                      <h3
                        className="partner-title centered-title"
                        title={partner.title}
                        style={{ color: "var(--fg)" }}
                      >
                        {partner.title}
                      </h3>
                    </div>

                    <div className="flex-1 mt-2">
                      <motion.ul
                        variants={listContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.15 }}
                        // className="space-y-2 text-sm text-left mt-0"
                        className="space-y-2 text-base text-left mt-0"
                        style={{ color: "var(--fg)" }}
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
                                style={{
                                  background:
                                    "linear-gradient(180deg,var(--c-cyan),var(--c-blue))",
                                }}
                              >
                                <CheckCircle2 className="w-4 h-4 text-white stroke-[2]" />
                              </motion.span>

                              <motion.span className="leading-snug motion-bullet-underline title-point">
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
          </div> */}
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
        className="p-[3px] rounded-xl"
      >
        <div className="relative group perspective-1000 w-full h-full">
          <div className="flip-inner preserve-3d transition-transform duration-500 ease-out w-full h-full will-change-transform backface-hidden group-hover:rotate-y-180">
            <motion.div
              ref={(el) => (cardRefs.current[cardIndex] = el)}
              onMouseMove={(e) => handleMouseMove(e, cardIndex)}
              onMouseLeave={() => handleMouseLeave(cardIndex)}
              whileHover={{ translateY: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full h-full card-inner colored-card transition-all will-change-transform backface-hidden bg-[var(--card-bg)] group-hover:bg-blue-500"
              style={{
                "--card-bg": THEME.bg,
                "--card-hover": THEME.hover,
                "--fg": THEME.fg,
                "--icon": THEME.icon,
                "--card-radius": "12px",
              }}
            >
              <div className="transition-transform duration-500 ease-out group-hover:rotate-y-180 w-full h-full will-change-transform backface-hidden">
                <div className="card-head">
                  <div className="icon-wrap big-icon">
                    <Icon
                      style={{ color: "var(--icon)" }}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3
                    className="partner-title centered-title"
                    title={partner.title}
                    style={{ color: "var(--fg)" }}
                  >
                    {partner.title}
                  </h3>
                </div>

                <div className="flex-1 mt-2">
                  <motion.ul
                    variants={listContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.15 }}
                    className="space-y-2 text-base text-left mt-0"
                    style={{ color: "var(--fg)" }}
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
                            style={{
                              background:
                                "linear-gradient(180deg,var(--c-cyan),var(--c-blue))",
                            }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-white stroke-[2]" />
                          </motion.span>

                          <motion.span className="leading-snug motion-bullet-underline title-point">
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
              </div>
            </motion.div>
          </div>
        </div>
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