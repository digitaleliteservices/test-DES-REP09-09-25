"use client";

import { useState } from "react";
import { CheckCircle, X } from "lucide-react";
import WhoWeWorkWith from "../whowework/page";

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

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="relative py-20 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          // src="/assets/services_bg_image.avif"
          src="/assets/who-we-work_bg_image.avif"
          alt="Services Background"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/70"></div> */}
      </div>
      {/* <div className="absolute inset-0 pointer-events-none">
        <img
          src="/assets/who-we-work_bg_image.avif"
          alt="Who we work with background"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Core Services
          </h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            Driving growth with technology, design, and strategy
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group w-10/12 sm:w-11/12 min-h-[340px] mx-auto 
        rounded-3xl bg-gradient-to-b from-[#1a0b2e]/90 
        to-[#0a0014]/90 p-6 shadow-lg shadow-orange-400/40 hover:shadow-2xl hover:shadow-green-400/60 
        hover:[box-shadow:0_0_20px_4px_rgba(59,130,246,0.7)]
        transition relative overflow-hidden flex flex-col
        ${
          services.length === 3 && index === 2
            ? "md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:w-11/12"
            : ""
        }`}
            >
              {/* Title Badge */}
              <span className="inline-block px-4 py-3 mb-6 rounded-full text-base font-bold bg-[#1f1f2e]/80 border-[0.5px] border-orange-400/50 text-orange-300">
                {service.title}
              </span>

              {/* Bottom content */}
              <div className="mt-auto transition-all duration-500 group-hover:-translate-y-3">
                {/* Description */}
                <h3 className="text-lg font-semibold mb-4 leading-snug">
                  {service.description}
                </h3>

                {/* Points */}
                <ul className="space-y-3 mb-6">
                  {service.points.slice(0, 2).map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Button */}

                <div className="flex justify-center  opacity-100 md:opacity-100 lg:opacity-100 min-[786px]:opacity-100 group-hover:opacity-100 transition-opacity duration-500">
                  <button
                    onClick={() => setActiveService(service)}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-500 text-white font-medium shadow-lg hover:opacity-90"
                  >
                    Get More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="services-who-wrapper mt-12">
        <WhoWeWorkWith />
      </div>

      {/* Right Side Modal */}
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
            <h2 className="text-2xl font-extrabold mb-4">
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
