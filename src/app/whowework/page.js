"use client";

import { Users, Briefcase, Building, Layers, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import OurClients from "../ourclients/page";
import { ScrollBasedVelocityImagesDemo } from "../scrollBasedImages/scrollBasedImages";
import { useRouter } from "next/navigation";
const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

const partners = [
  {
    title: "StartUp",
    description: [
      "Launch with confidence",
      "Branding & development",
      "Go-to-market strategy",
      "Digital growth support",
    ],
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "SMBs",
    description: [
      "Improve visibility",
      "Increase sales",
      "Scalable solutions",
      "Compete online effectively",
    ],
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
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
    color: "from-orange-500 to-red-500",
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
    color: "from-green-500 to-teal-500",
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
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariant = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const listContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const listItem = {
  hidden: { x: -10, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function WhoWeWorkWith() {
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);
  const router = useRouter();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100/40 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-100/40 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-orange-100/30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-black">Who We</span>{" "}
            <span
              style={{
                background: LOGO_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className="inline-block"
            >
              Work With
            </span>
          </h1>{" "}
          <p className="mt-4 text-slate-600">
            We partner with businesses of all sizes across various industries to
            deliver exceptional digital solutions
          </p>
        </motion.div>
        <motion.div
          // className="mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariant}
        >
          {/* <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Industries We Serve
          </h3> */}
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry}
                variants={itemVariant}
                className="relative group"
              >
                <div className="px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-200 group-hover:shadow-md transition-all duration-300">
                  <span className="text-gray-700 font-medium">{industry}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 group-hover:scale-110 transform" />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <ScrollBasedVelocityImagesDemo />

        {/* INDUSTRIES */}

        {/* PARTNER CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative group h-full"
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 relative">
                  {/* Expanding gradient overlay (starts as header, grows to full height on hover) */}
                  <div
                    className={`absolute left-0 right-0 top-0 h-32 group-hover:h-full transition-all duration-500 ease-out overflow-hidden rounded-2xl pointer-events-none z-10 bg-gradient-to-r ${partner.color}`}
                  >
                    {/* subtle dark layer to keep contrast */}
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>

                  {/* Card header (keeps the centered icon + title) */}
                  <div className="relative z-20 h-32 flex flex-col items-center justify-center p-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white text-xl font-bold mt-3">
                      {partner.title}
                    </h3>
                  </div>

                  {/* Card content (stays above the overlay) */}
                  <div className="p-6 relative z-20 bg-transparent">
                    <motion.ul
                      variants={listContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.1 }}
                      className="space-y-3"
                    >
                      {partner.description.map((point, i) => (
                        <motion.li
                          key={i}
                          variants={listItem}
                          className="flex items-start"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0 transition-colors duration-300 group-hover:text-white" />
                          <span className="text-gray-700 transition-colors duration-300 group-hover:text-white">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full mt-6 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r ${partner.color} transition-all duration-300 cursor-pointer`}
                      onClick={() => {
                        router.push("/our-services");
                      }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>

                {/* Glow effect (underneath overlay) */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${partner.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CENTER VIDEO SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-20"
        >
          <div className="relative">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div> */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-xl font-bold">
                  Our Partnership Approach
                </h3>
                <p className="text-white/90">
                  Collaboration, innovation, and results
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* OurClients component */}
        <OurClients />
      </div>
    </section>
  );
}
