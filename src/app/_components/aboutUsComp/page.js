"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Poppins } from "next/font/google";
import "./about.css";

// Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Flower asset
// const FLOWER_SRC = "/assets/aboutflowerimg.avif";
const FLOWER_SRC = "/assets/aboutrocket.png";

/** Staggered bullet list that animates on scroll */
const AnimatedBullets = ({ items }) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-6 max-w-3xl mx-auto space-y-3"
    >
      {items.map((text, i) => (
        <motion.li
          key={i}
          variants={item}
          className="flex items-start gap-3 text-gray-300 text-base sm:text-lg"
        >
          <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 flex-shrink-0" />
          <span>{text}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

/** What Sets Us Apart — inlined here */
const FeatureCard = ({ icon, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay }}
    className="group h-full rounded-2xl p-8 text-center flex flex-col items-center
               bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900
               border border-white/10
               shadow-[0_10px_30px_rgba(0,0,0,0.35)]
               hover:shadow-[0_14px_40px_rgba(99,102,241,0.35)]
               hover:-translate-y-1 transition-all duration-300"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
      {title}
    </h4>
    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
      {desc}
    </p>
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
    <section className="relative overflow-hidden px-6 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 left-1/3 w-80 h-80 bg-purple-600/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/40 to-orange-500/40 text-sm sm:text-base inline-block mb-4">
          💡 What Sets Us Apart
        </span>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Built to deliver real impact
        </h3>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Equal-height, responsive grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          {features.map((f, i) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUsComp = () => {
  const { ref: serviceRef, inView: serviceInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className={`${poppins.className} bg-black text-white`}>
      {/* HERO */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 via-yellow-500 to-orange-600 opacity-30 blur-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>
        {/* Glow */}
        <motion.div
          className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-r from-purple-500 to-yellow-500 opacity-40 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Copy */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h3
            className="text-base sm:text-lg md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-orange-400 to-purple-400 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Driving Innovation with Purpose, Precision & Impact
          </motion.h3>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            We build meaningful experiences <br className="hidden sm:block" />{" "}
            with relentless focus
          </motion.h1>
        </div>
      </section>

      {/* ONE SERVICE */}
      <section
        ref={serviceRef}
        className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-16 md:py-20 bg-[#13101c]"
      >
        {/* Continuity gradients */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-0 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={serviceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 mb-10"
        >
          <span className="px-16 py-7 rounded-full bg-gradient-to-r from-purple-600/40 to-orange-500/40 text-sm sm:text-base inline-block mb-4">
            ✨ We Offer
          </span>
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Core Service  
          </h2> */}

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-6xl w-full">
          {[
            {
              title: "Digital Marketing Excellence",
              desc: "We craft strategies that amplify visibility, engage audiences, and drive measurable growth for businesses of every size.",
              img: "/assets/aboutcard4.jpg",
            },
            {
              title: "Creative Design & Branding",
              desc: "From graphics to complete brand identities, we design with impact — ensuring your message is memorable and consistent.",
              img: "/assets/aboutcard5.jpg",
            },
            {
              title: "Custom Web Development",
              desc: "Whether launching, scaling, or optimizing, we build tailored web solutions that transform ideas into powerful digital experiences.",
              img: "/assets/aboutcard6.jpg",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={
                serviceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-gradient-to-b from-purple-900/30 to-purple-800/10 rounded-2xl p-5 text-left shadow-lg backdrop-blur-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-48 object-cover opacity-60 hover:opacity-100 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-60 hover:opacity-20 transition-opacity duration-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Flower */}
        <div className="w-full flex justify-center mt-12 md:mt-14">
          <img
            src={FLOWER_SRC}
            alt="Decorative flower"
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
          />
        </div>

        {/* Bullets */}
        <div className="mt-6 md:mt-8 mb-8">
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
        {/* Background image behind content */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/our_team_about.avif"
            alt="Team background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Heading */}
        <div className="relative z-10 max-w-6xl mx-auto text-center mb-8 md:mb-10">
          <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/40 to-orange-500/40 text-sm sm:text-base inline-block mb-4">
            🌟 Our Vision & Mission
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Purpose that powers our work
          </h3>
        </div>

        {/* Mission/Vision cards grid */}
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 md:p-8 backdrop-blur-lg
                       bg-gradient-to-b from-violet-700/35 via-fuchsia-600/20 to-white/5
                       border border-white/15 shadow-[0_0_40px_rgba(124,58,237,0.25)]"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs tracking-wide bg-gradient-to-r from-purple-600/40 to-orange-500/40">
                Our Mission
              </span>
            </div>
            <p className="text-gray-100/90 text-base sm:text-lg leading-relaxed">
              To empower businesses with innovative design, custom digital
              solutions that drive real measurable growth. We strategize digital
              solutions that spark growth, improve visibility, and deliver
              lasting values.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl p-6 md:p-8 backdrop-blur-lg
                       bg-gradient-to-b from-violet-700/35 via-fuchsia-600/20 to-white/5
                       border border-white/15 shadow-[0_0_40px_rgba(124,58,237,0.25)]"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs tracking-wide bg-gradient-to-r from-purple-600/40 to-orange-500/40">
                Our Vision
              </span>
            </div>
            <p className="text-gray-100/90 text-base sm:text-lg leading-relaxed">
              To be a trusted digital growth partner for ambitious brands around
              the world, known for creativity, innovation, and exceptional
              service.
            </p>
          </motion.div>
        </div>

        {/* What Sets Us Apart — FULL WIDTH below the grid */}
        <WhatSetsUsApart />
      </section>
    </div>
  );
};

export default AboutUsComp;
