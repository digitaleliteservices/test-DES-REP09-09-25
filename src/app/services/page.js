"use client";

import React, { useState, useRef, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";
import WhoWeWorkWith from "../whowework/page";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { Ripple } from "@/components/ui/ripple";
import { useRouter } from "next/navigation";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

const services = [
  {
    title: "Web Development",
    description: "Responsive, secure and scalable websites.",
    points: [
      "Custom websites",
      "Business-ready solutions",
      "SEO optimized builds",
      "Responsive design",
      "Landing pages to full scale websites",
    ],
  },
  {
    title: "Digital Marketing",
    description: "Boost visibility with SEO & targeted ads.",
    points: [
      "Email & WhatsApp campaigns",
      "Google, YouTube Ads & more",
      "Targeted social media strategy",
      "Analytics & performance reports",
    ],
  },
  {
    title: "Graphic Design",
    description: "Creative visuals that define your brand.",
    points: [
      "Logos & brand identity",
      "Marketing materials",
      "Social media creatives",
    ],
  },
];

/* Small per-card component so pointer state is scoped correctly */
function ServiceCard({ service, onOpen }) {
  const [pointer, setPointer] = useState(null);
  const cardRef = useRef(null);
  const [cellSize, setCellSize] = useState({ w: 28, h: 28 });
  const router = useRouter();

  useEffect(() => {
    // compute sensible cell size based on card dimensions (runs on mount + resize)
    function compute() {
      const el = cardRef.current;
      if (!el) return;
      const w = el.clientWidth || 320;
      const h = el.clientHeight || 340;
      // aim for ~8 columns and ~6 rows (adjust if card size is small)
      const cw = Math.max(18, Math.floor(w / 8));
      const ch = Math.max(18, Math.floor(h / 6));
      setCellSize({ w: cw, h: ch });
    }
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPointer({ x, y });
  };
  const handleMouseLeave = () => setPointer(null);

  const openServicesModal = () => {
    const label = encodeURIComponent(service.title);
    router.push(`/our-services?open=${label}`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group w-10/12 sm:w-11/12 min-h-[340px] mx-auto 
                 rounded-2xl bg-white border border-gray-100 p-6
                 shadow-md hover:shadow-xl hover:scale-[1.02]
                 transition-all duration-300 ease-out
                 relative overflow-hidden flex flex-col"
    >
      {/* Grid Pattern (behind content). pointer-events-none so events fall through to card */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <InteractiveGridPattern
          width={cellSize.w}
          height={cellSize.h}
          squares={[8, 6]}
          pointer={pointer}
          // className="opacity-12"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* <span
          className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-semibold 
                     bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 
                     text-indigo-700 border border-indigo-100"
        >
          {service.title}
        </span> */}

        {/* <span
          className="inline-block px-4 py-3 mb-6 rounded-full text-sm font-semibold 
             text-white shadow-md 
             bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-400 
             border border-white/ text-center"
        >
          {service.title}
        </span> */}

        <span
          className="inline-block px-6 py-3 mb-6 rounded-full text-lg font-semibold 
             text-white shadow-md text-center
             bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-400 
             border border-white/20"
        >
          {service.title}
        </span>

        {/* <span
          className="inline-block px-4 py-3 mb-6 rounded-full text-sm font-bold 
             text-white bg-indigo-600 shadow-[0_0_12px_rgba(99,102,241,0.6)] 
             border border-indigo-700/50 text-center"
        >
          {service.title}
        </span> */}

        <h3 className="text-lg font-semibold mb-4 leading-snug text-gray-800">
          {service.description}
        </h3>

        <ul className="space-y-3 mb-6">
          {service.points.slice(0, 2).map((point, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-indigo-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-auto">
          <button
            // onClick={() => onOpen(service)}
            // onClick={() => {
            //   router.push("/our-services");
            // }}
            onClick={openServicesModal}
            className="px-6 py-2 rounded-full text-sm md:text-base font-semibold tracking-wide text-white
              bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition cursor-pointer"
          >
            Get More
          </button>
        </div>
      </div>
    </div>
  );
}

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Single Ripple behind all cards */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
        <Ripple mainCircleSize={300} mainCircleOpacity={0.4} numCircles={6} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-black">Core</span>{" "}
            <span
              style={{
                background: LOGO_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              className="inline-block"
            >
              Services
            </span>
          </h1>
          <p className="mt-4 text-slate-600">
            Driving growth with technology, design, and strategy
          </p>
        </div>

        {/* Cards Container with Relative Positioning */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${
                services.length === 3 && index === 2
                  ? "md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:w-11/12"
                  : ""
              }`}
            >
              <ServiceCard service={service} onOpen={setActiveService} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal (unchanged) */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setActiveService(null)}
          ></div>

          {/* Drawer */}
          <div
            className="relative w-full sm:w-[480px] md:w-[520px] lg:w-[600px] 
              max-h-[85vh] bg-[#1a0b2e]/95 p-8 shadow-2xl 
              transform transition-transform duration-500 translate-x-0 
              rounded-2xl mt-10 mb-10 mr-6 overflow-y-auto"
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-white"
              onClick={() => setActiveService(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Title */}
            <span className="inline-block px-4 py-2 mb-6 rounded-full text-base font-bold bg-[#1f1f2e]/80 border border-orange-400/50 text-orange-300">
              {activeService.title}
            </span>

            {/* Description */}
            <h2 className="text-2xl font-extrabold mb-4 text-white">
              {activeService.description}
            </h2>

            {/* Full Points */}
            <ul className="space-y-5">
              {activeService.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
