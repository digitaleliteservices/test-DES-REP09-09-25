"use client";

import { Users, Briefcase, Building, Layers, CheckCircle2 } from "lucide-react";
import OurClients from "../ourclients/page";

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
      "Custom app & web development",
      "Technical consultation",
      "Digital transformation strategies",
      "Dedicated support & innovation",
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

const WhoWeWorkWith = () => {
  return (
    <section className="relative py-16 md:py-20 bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/who-we-work_bg_image.avif"
          alt="Who we work with background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Who We Work With
          </h2>
        </div>

        {/* Content Grid */}
        <div className="lg:flex lg:items-center lg:gap-8">
          {/* Left Column */}
          <div className="space-y-4 lg:flex-1">
            {partners.slice(0, 2).map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div
                  key={idx}
                  className="p-[3px] rounded-xl bg-gradient-to-r from-[#00E5FF]/60 via-[#2C6DF6]/60 to-[#FF8A00]/60"
                >
                  <div className="flex items-start gap-3 bg-white/95 rounded-xl shadow-md p-4 sm:p-5 hover:shadow-lg transition-shadow duration-300">
                    {/* Gradient Icon (matches logo) */}
                    <Icon className="w-6 h-6 shrink-0 mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2C6DF6] to-[#FF8A00]" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">
                        {partner.title}
                      </h3>
                      <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                        {partner.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            {/* Solid blue check for visibility */}
                            <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0 text-[#2C6DF6]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center my-6 lg:my-0 lg:flex-1">
            <div className="rounded-full bg-gradient-to-br from-[#00E5FF] via-[#2C6DF6] to-[#FF8A00] shadow-lg p-1">
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
          <div className="space-y-4 lg:flex-1">
            {partners.slice(2).map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div
                  key={idx}
                  className="p-[3px] rounded-xl bg-gradient-to-r from-[#00E5FF]/60 via-[#2C6DF6]/60 to-[#FF8A00]/60"
                >
                  <div className="flex items-start gap-3 bg-white/95 rounded-xl shadow-md p-4 sm:p-5 hover:shadow-lg transition-shadow duration-300">
                    <Icon className="w-6 h-6 shrink-0 mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2C6DF6] to-[#FF8A00]" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">
                        {partner.title}
                      </h3>
                      <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                        {partner.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0 text-[#2C6DF6]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4">
            {industries.map((industry, idx) => (
              <span
                key={idx}
                className="bg-gradient-to-r from-[#00E5FF] via-[#2C6DF6] to-[#FF8A00] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        <OurClients />
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
