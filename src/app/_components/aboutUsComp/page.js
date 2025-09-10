"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Poppins } from "next/font/google";
import Head from "next/head";

import "./about.css";

// Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Flower asset
const FLOWER_SRC = "/assets/aboutrocket.png";

// reusable bob animation for subtle floating
const bobAnim = {
  animate: {
    y: [0, -12, 0, 8, 0],
    rotate: [0, 1, -1, 0],
  },
  transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
};

/** Staggered bullet list that animates on scroll */
const AnimatedBullets = ({ items }) => {
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
      // className="mt-6 max-w-3xl mx-auto space-y-3"
      className="mt-6 max-w-3xl mx-auto space-y-3 list-disc list-inside text-white/95 text-base sm:text-lg"
    >
      {items.map((text, i) => (
        <motion.li
          key={i}
          variants={item}
          className="flex items-start gap-3 text-white/95 text-base sm:text-lg"
        >
          {/* custom bullet */}
          <span className="mt-2 w-3 h-3 rounded-full bg-amber-400 flex-shrink-0" />
          <span className="leading-relaxed">{text}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

/** Feature card tuned for improved contrast and visibility */
const FeatureCard = ({ icon, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.28 }}
    transition={{ duration: 0.6, delay }}
    className="group h-full rounded-2xl overflow-hidden text-left flex flex-col items-stretch
               bg-gradient-to-br from-white/6 via-white/4 to-black/20
               ring-1 ring-white/8
               border border-white/6
               backdrop-blur-md
               shadow-[0_12px_30px_rgba(2,6,23,0.6)]
               hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)]
               hover:-translate-y-1 transition-all duration-300"
  >
    <div className="p-6 flex items-center justify-center text-4xl mb-2">
      {icon}
    </div>
    <div className="px-6 pb-6 pt-0">
      <h4 className="text-lg sm:text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-yellow-200">
        {title}
      </h4>
      <p className="text-white/90 text-sm sm:text-base leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.div>
);

const WhatSetsUsApart = () => {
  const features = [
    {
      icon: "🎯",
      title: "Strategy First Approach",
      desc: "No one-size-fits-all. Every project starts with deep research and a tailored plan aligned to your goals.",
    },
    {
      icon: "🧠",
      title: "In-House Experts & Team",
      desc: "SEO strategists, full-stack devs, and UI/UX designers collaborate closely to bring your vision to life.",
    },
    {
      icon: "🔎",
      title: "Transparent Communication",
      desc: "Clear timelines, honest feedback, and visible progress. You’re always in the loop.",
    },
    {
      icon: "📈",
      title: "Performance Driven Results",
      desc: "We optimize for what matters: qualified traffic, conversions, leads, and ROI.",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* bobbing blobs for depth */}
        <motion.div
          className="absolute -top-12 left-1/4 w-96 h-96 rounded-full blur-3xl"
          {...bobAnim}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl"
          {...bobAnim}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center mb-8">
        <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-orange-500/30 text-sm sm:text-base inline-block mb-4 text-white/95">
          💡 What Sets Us Apart
        </span>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
          Built to deliver real impact
        </h3>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          {features.map((f, i) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              delay={i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUsComp = () => {
  const { ref: serviceRef, inView: serviceInView } = useInView({
    threshold: 0.28,
    triggerOnce: false,
  });

  return (
    <div className={`${poppins.className} min-h-screen text-white relative`}>
      <Head>
        <title>About Us - Digital Solutions & Branding Experts</title>
        <meta
          name="description"
          content="Learn about our mission and vision at Digital Elite Services. We provide innovative digital solutions, creative branding, web development, and marketing strategies to help businesses grow."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Page background gradient with subtle noise + bobbing vignette */}
      <div className="absolute inset-0 -z-20" aria-hidden>
        <div
          style={{
            // background:
            //   "linear-gradient(90deg,#1c103f 0%, #3b2979 28%, #fdd835 58%, #ff7e19 100%)",
            // filter: "saturate(1.05) contrast(1.02)",

            // Deep Ocean to Electric Blue--good
            // background:
            //   "linear-gradient(90deg, #0a1640 0%, #1a237e 30%, #2196f3 70%, #4fc3f7 100%)",
            // filter: "saturate(1.1) contrast(1.1)",

            // Cyber Neon (Purple to Cyan)--good
            // background:
            //   "linear-gradient(90deg, #240b36 0%, #c3147c 35%, #00d2ff 100%)",
            // filter: "saturate(1.2)",

            //deep space
            // background:
            //   "linear-gradient(90deg, #000428 0%, #203a43 50%, #2c5364 100%)",
            // filter: "saturate(1.05)",

            // Fiery Sunset--good
            // background:
            //   "linear-gradient(90deg, #33001b 0%, #ff0080 35%, #ff8c00 70%, #f9f047 100%)",
            // filter: "saturate(1.1) contrast(1.05)",

            // Vibrant Coral & Peach
            // background:
            //   "linear-gradient(90deg, #ff416c 0%, #ff4b2b 50%, #ffc371 100%)",

            // Mango Sunrise--good
            // background:
            //   "linear-gradient(90deg, #283c86 0%, #45a247 50%, #fbd786 100%)", // A unique twist with a touch of green

            // Desert Dusk
            // background:
            //   "linear-gradient(90deg, #2c3e50 0%, #4ca1af 50%, #c06c84 100%)",
            // filter: "saturate(1.05)", // Keep the filter subtle here

            // Earthy Terracotta --good
            // background:
            //   "linear-gradient(90deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)",

            // Electric Purple-Pink --good
            // background:
            //   "linear-gradient(90deg, #141E30 0%, #53346D 35%, #C06C84 65%, #F67280 100%)",
            // filter: "saturate(1.1) contrast(1.1)",

            // Neon Green & Purple
            // background:
            //   "linear-gradient(90deg, #3a1c71 0%, #8e24aa 30%, #00f2fe 70%, #4facfe 100%)",

            // Tropical Punch
            // background:
            //   "linear-gradient(90deg, #00416a 0%, #e4e5e6 50%, #ff7e5f 100%)",

            // Deep Blues---v.good
            // background: "linear-gradient(90deg, #000428 0%, #004e92 100%)",
            // filter: "contrast(1.1)",

            // Rich Purples --v.good
            background: "linear-gradient(90deg, #240b36 0%, #c3147c 100%)",

            // Emerald Greens
            // background:
            //   "linear-gradient(90deg, #022c12 0%, #064e3b 50%, #059669 100%)",
          }}
          className="w-full h-full"
        />
        {/* Vignette blobs that bob gently across the page to create 'bob screen' effect */}
        <motion.div
          className="absolute left-8 top-16 w-48 h-48 rounded-full blur-3xl"
          {...bobAnim}
        />
        <motion.div
          className="absolute right-6 top-32 w-60 h-60 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle,#fb923c, transparent 40%)",
            opacity: 0.22,
          }}
          {...bobAnim}
        />
        <motion.div
          className="absolute left-10 bottom-24 w-72 h-72 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle,#fef08a, transparent 40%)",
            opacity: 0.18,
          }}
          {...bobAnim}
        />
      </div>

      {/* HERO */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden px-6">
        {/* decorative bobbing glow */}
        <motion.div
          className="absolute w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] md:w-[640px] md:h-[640px] rounded-full -z-10"
          style={{
            background: "linear-gradient(90deg,#7c3aed 40%, #fbbf24 100%)",
            opacity: 0.32,
          }}
          animate={{ y: [0, -18, 0, 9, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 text-center max-w-3xl">
          <motion.h3
            className="text-base sm:text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-orange-200 to-purple-200 mb-2 drop-shadow-md"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Driving Innovation with Purpose, Precision & Impact
          </motion.h3>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight text-white drop-shadow-xl"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25 }}
          >
            We build meaningful experiences <br className="hidden sm:block" />{" "}
            with relentless focus
          </motion.h1>
        </div>
      </section>

      {/* ONE SERVICE */}
      <section
        ref={serviceRef}
        className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-16 md:py-20"
      >
        {/* Continuity gradients & subtle bobbing */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
            {...bobAnim}
          />
          <motion.div
            className="absolute top-0 right-1/4 w-80 h-80 rounded-full blur-3xl"
            {...bobAnim}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={serviceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 mb-10"
        >
          <span className="px-5 py-2 rounded-full bg-white/8 text-sm sm:text-base inline-block mb-4 text-white/95">
            ✨ We Offer
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-6xl w-full z-10">
          {[
            {
              title: "Digital Marketing Excellence",
              desc: "We craft strategies that amplify visibility, engage audiences, and drive measurable growth.",
              img: "/assets/aboutcard4.jpg",
            },
            {
              title: "Creative Design & Branding",
              desc: "From graphics to complete brand identities, we design with impact — ensuring your message is memorable.",
              img: "/assets/aboutcard5.jpg",
            },
            {
              title: "Custom Web Development",
              desc: "We build tailored web solutions that transform ideas into powerful digital experiences.",
              img: "/assets/aboutcard6.jpg",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={
                serviceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.9, delay: i * 0.14 }}
              className="rounded-2xl overflow-hidden text-left bg-gradient-to-b from-black/20 to-black/6 shadow-[0_18px_40px_rgba(2,6,23,0.55)]"
            >
              <div className="relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-48 object-cover brightness-90 contrast-110"
                />
              </div>

              {/* moved title + description below the image */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white drop-shadow">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="w-full flex justify-center mt-12 md:mt-14 z-10">
          <img
            src={FLOWER_SRC}
            alt="Decorative flower"
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
          />
        </div>

        <div className="mt-6 md:mt-8 mb-8 z-10">
          <AnimatedBullets
            items={[
              "Collaborative team of marketers, developers, designers, and digital strategists",
              "We thrive on solving complex challenges",
              "Anchored in quality and craftsmanship",
              "Driven by innovation",
              "Committed to measurable client success",
            ]}
          />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative isolate overflow-hidden px-6 pt-10 md:pt-12 pb-16 md:pb-24">
        <div className="relative z-10 max-w-6xl mx-auto text-center mb-8 md:mb-10">
          <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-orange-500/30 text-sm sm:text-base inline-block mb-4 text-white/95">
            🌟 Our Vision & Mission
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
            Purpose that powers our work
          </h3>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-gradient-to-b from-black/28 to-black/14 border border-white/12 shadow-[0_10px_40px_rgba(2,6,23,0.4)]"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs tracking-wide bg-gradient-to-r from-purple-500 to-orange-400 text-white">
                Our Mission
              </span>
            </div>
            <p className="text-white/95 text-base sm:text-lg leading-relaxed">
              To empower businesses with innovative design, custom digital
              solutions that drive real measurable growth. We strategize digital
              solutions that spark growth, improve visibility, and deliver
              lasting values.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-gradient-to-b from-black/28 to-black/14 border border-white/12 shadow-[0_10px_40px_rgba(2,6,23,0.4)]"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs tracking-wide bg-gradient-to-r from-purple-500 to-orange-400 text-white">
                Our Vision
              </span>
            </div>
            <p className="text-white/95 text-base sm:text-lg leading-relaxed">
              To be a trusted digital growth partner for ambitious brands around
              the world, known for creativity, innovation, and exceptional
              service.
            </p>
          </motion.div>
        </div>

        <WhatSetsUsApart />
      </section>
    </div>
  );
};

export default AboutUsComp;
