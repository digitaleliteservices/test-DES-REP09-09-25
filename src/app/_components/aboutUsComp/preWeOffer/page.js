"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import whatWeOffer from "../../../../../public/assets/whatweoffer2.jpg";
// import companyLogo from "../../../../../public/assets/DES_LOGO4.png";

const CLOUD_BASE = "https://res.cloudinary.com/dxdgk4v3t/image/upload";
const whatWeOffer = `${CLOUD_BASE}/v1758956903/whatweoffer2_g8sknk.jpg`;
const companyLogo = `${CLOUD_BASE}/v1758957308/DES_LOGO4_qggcbp.png`;
const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

const PreWhatWeOffer = () => {
  return (
    <section
      aria-label="Introduction to what we offer"
      className="py-12 md:py-16 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 text-slate-700">
        {/* Layout: image left, text right. Stacks on small screens */}
        <div className="flex flex-col md:flex-row items-stretch gap-6">
          {/* Image column - will stretch to match text height */}
          <div className="md:w-1/2 self-stretch">
            <div className="h-full w-full rounded-xl overflow-hidden shadow-sm">
              <Image
                src={whatWeOffer}
                alt="What we offer"
                className="w-full h-full object-cover"
                width={1200}
                height={800}
                priority={false}
              />
            </div>
          </div>

          {/* Text column */}
          <div className="md:w-1/2 flex flex-col justify-center">
            {/* Logo + animated heading row */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ scale: 0.88, rotate: -6, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{ scale: 1.06, rotate: 2 }}
                className="flex-shrink-0 rounded-md overflow-hidden bg-white/0"
                aria-hidden
              >
                <Image
                  src={companyLogo}
                  alt="Digital Elite Services logo"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </motion.div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-left">
                  <span className="text-slate-900">About</span>{" "}
                  <span
                    className="inline-block"
                    style={{
                      background: LOGO_GRADIENT,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Company
                  </span>
                </h2>

                {/* animated gradient underline / glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: [0, 6, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="mt-2 h-1 rounded-full"
                  style={{
                    width: 92,
                    background: LOGO_GRADIENT,
                    boxShadow: "0 8px 28px rgba(44,109,246,0.12)",
                    backgroundSize: "200% 100%",
                    opacity: 0.95,
                    mixBlendMode: "normal",
                  }}
                  aria-hidden
                />
              </div>
            </div>

            <style>{`
              /* animated gradient shift for the heading text */
              @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
              /* apply to any element using LOGO_GRADIENT sized 200% */
              .animate-heading-gradient {
                animation: gradientShift 6s ease-in-out infinite;
              }

              /* subtle heading glow on hover */
              .heading-hover-glow:hover {
                text-shadow: 0 6px 22px rgba(44,109,246,0.12);
              }
            `}</style>

            {/* add the animation class to the heading via a wrapper — for compatibility with inline style */}
            <div className="heading-hover-glow">
              {/* duplicate heading but hidden for screen readers — we already have the visible H3 */}
            </div>

            <p className="text-base md:text-lg leading-relaxed mt-2">
              We are a results-driven digital solutions organization
              specializing in Digital Marketing, Graphic Designing, and Custom
              Web Development. Founded on a passion for technology and a
              commitment to client success, we work closely with businesses of
              all sizes to strengthen their online presence, enhance brand
              visibility, and drive measurable growth.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              We at Digital Elite Services combine creativity, strategic
              insight, and cutting-edge technology to deliver tailored solutions
              that meet each client’s unique objectives. From crafting engaging
              marketing campaigns and designing compelling visuals to developing
              high-performance websites and applications, our approach is
              focused on achieving real business impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreWhatWeOffer;
