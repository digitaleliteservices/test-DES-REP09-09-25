"use client";
import { useEffect, useState } from "react";

// Approach items
const approach = [
  {
    title: "Client Understanding",
    desc: "We begin by analyzing each client’s goals, challenges, and target audience.",
  },
  {
    title: "Customized Strategy",
    desc: "Crafting tailored solutions that combine creativity, technology, and data-driven insights.",
  },
  {
    title: "Creative Execution",
    desc: "Delivering visually compelling designs, engaging campaigns, and high-performance web solutions.",
  },
  {
    title: "Collaboration",
    desc: "Working closely with clients to ensure alignment and transparency throughout the project.",
  },
  {
    title: "Continuous Optimization",
    desc: "Monitoring performance and refining strategies to maximize results and ROI.",
  },
  {
    title: "Measurable Impact",
    desc: "Focusing on outcomes that drive growth, engagement, and long-term business success.",
  },
  {
    title: "Quality & Timely Delivery",
    desc: "We deliver high-quality digital solutions with precision and punctuality, ensuring client satisfaction every time.",
  },
];

// Thin-line icon used in approach tiles
const NodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2" />
    <path d="M6.8 6.8l-1.4-1.4M18.6 18.6l-1.4-1.4M17.2 6.8l1.4-1.4M5.4 18.6l1.4-1.4" />
  </svg>
);

const services = [
  {
    label: "Digital Marketing",
    headline: "Be seen and Grow consistently",
    blurb:
      "Our goal is to boost brand visibility, engage audiences, and drive measurable growth.",
    points: [
      "Search Engine Optimization, Local SEO",
      "Social Media Marketing & Management (Facebook, Instagram)",
      "Pay-Per-Click (PPC) Advertising",
      "Email & Content Marketing",
      "Analytics & Reporting",
      "LinkedIn Optimization, Paid Ads",
    ],
  },
  {
    label: "Graphic Designing",
    headline: "Designs that speak and sell",
    blurb:
      "We enhance brand presence, engage audiences, and communicate your message effectively.",
    points: [
      "Brand Identity (Logos,Letterheads)",
      "Marketing Collaterals (Brochures, Flyers, Posters)",
      "Social Media Creatives & Ads",
      "Infographics",
      "Creative videos for social media posting",
      "Advertising banners",
    ],
  },
  {
    label: "Web Development",
    headline: "Fast and secure web experiences",
    blurb:
      "From landing pages to ecommerce, we build responsive, secure, and high-performance sites.",
    points: [
      "Custom Website Development",
      "Website Maintenance & Support",
      "Built with the latest technologies",
    ],
  },
  {
    label: "Digital Services",
    headline: "Integrations power your operations",
    blurb:
      "Modern tooling to automate, integrate, and maintain your digital stack end-to-end.",
    points: [
      "Domain, DNS & Hosting Setup",
      "Payment Gateway Integration",
      "CRM Setup (Leads, Pipelines, Automations)",
      "Automation (Zapier/Make) & Webhooks",
      "Performance, Security & Backups",
      "Ongoing Care & SLA Support",
    ],
  },
];

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    className="w-4 h-4"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0L3.293 9.957a1 1 0 011.414-1.414l3.043 3.043 6.543-6.543a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const OurServicesComp = () => {
  const [openIdx, setOpenIdx] = useState(null);

  // Close modal on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white bg-[#0c101e]">
      {/* === BRANDED BACKDROP GRADIENT — BRIGHTER === */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {/* conic shimmer */}
        <div
          className="absolute -inset-[28%] opacity-60 mix-blend-screen animate-spin-slow"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(6,182,212,.40), rgba(59,130,246,.36), rgba(245,158,11,.34), rgba(6,182,212,.40))",
          }}
        />
        {/* large soft fields */}
        <div
          className="absolute inset-0 blur-xl opacity-95 animate-pan"
          style={{
            backgroundImage: `
              radial-gradient(75vmax 75vmax at 20% 28%, rgba(6,182,212,0.75) 0%, rgba(6,182,212,0.42) 38%, rgba(6,182,212,0.06) 74%),
              radial-gradient(65vmax 65vmax at 64% 22%, rgba(245,158,11,0.70) 0%, rgba(245,158,11,0.36) 38%, rgba(245,158,11,0.06) 74%),
              radial-gradient(80vmax 80vmax at 86% 34%, rgba(59,130,246,0.78) 0%, rgba(59,130,246,0.40) 38%, rgba(59,130,246,0.06) 74%)
            `,
          }}
        />
        {/* floating blobs */}
        <div
          className="absolute top-[10%] left-[5%] w-[70vw] sm:w-[50vw] h-[70vw] sm:h-[50vw] rounded-full blur-2xl opacity-90 animate-float1"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.85) 0%, rgba(6,182,212,0.38) 46%, rgba(6,182,212,0) 76%)",
          }}
        />
        <div
          className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[65vw] h-[65vw] rounded-full blur-2xl opacity-90 animate-float2"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.82) 0%, rgba(245,158,11,0.36) 44%, rgba(245,158,11,0) 74%)",
          }}
        />
        <div
          className="absolute top-[10%] right-[5vw] w-[65vw] h-[65vw] rounded-full blur-2xl opacity-95 animate-float3"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.88) 0%, rgba(59,130,246,0.38) 46%, rgba(59,130,246,0) 76%)",
          }}
        />
        {/* vertical brighten layer to avoid dark bottom */}
        <div
          className="absolute inset-0 mix-blend-screen"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,.12), rgba(255,255,255,.18) 35%, rgba(255,255,255,.22) 70%, rgba(255,255,255,.28))",
          }}
        />
      </div>

      {/* === TOP CONTENT === */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 md:pt-40 lg:pt-44 pb-8 sm:pb-16 text-center">
        <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-amber-300 bg-clip-text text-transparent">
            Eliminate the Hassle
          </span>
        </p>
        <h1 className="mt-4 font-extrabold leading-tight tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          Empowering Digital Growth with{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-amber-300 bg-clip-text text-transparent">
            Elite Solutions
          </span>
        </h1>
        <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl mx-auto">
          Elevating businesses with tailored digital strategies that drive
          growth and innovation.
        </p>
      </div>

      {/* === ARC IMAGE === */}
      <div className="absolute left-0 right-0 h-[28vh] sm:h-[40vh] md:h-[48vh] lg:h-[54vh] xl:h-[58vh] z-0 overflow-hidden select-none pointer-events-none">
        <img
          src="/assets/ourservices.png"
          alt="Our Services"
          className="w-full h-full object-cover object-center"
          loading="eager"
          draggable="false"
        />
      </div>
      <div
        aria-hidden
        className="h-[18vh] sm:h-[26vh] md:h-[34vh] lg:h-[38vh] xl:h-[42vh]"
      />

      {/* === TEXT BELOW ARC === */}
      <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/5 ring-1 ring-white/10">
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400" />
            What to Expect
          </span>
        </div>
        <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
          We adapt and grow{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-amber-300 bg-clip-text text-transparent">
            within your unique environment
          </span>
        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl mx-auto">
          Tailored, flexible workflows that adapt to your reality—never the
          other way around.
        </p>
      </div>

      {/* === SERVICES GRID === */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14 md:mt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
          {services.map((svc, idx) => {
            const preview = svc.points.slice(0, 1);
            const hasMore = svc.points.length > 1;

            return (
              <article
                key={idx}
                className="relative group rounded-[26px] overflow-hidden border border-white/5 shadow-2xl shadow-black/40 min-h-[280px]"
              >
                {/* Card background */}
                <img
                  src="/assets/ourservices_card_bg.avif"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-[opacity,transform] duration-500"
                  loading="lazy"
                  draggable="false"
                />
                {/* Readability overlay (LIGHTER) */}
                <div className="absolute inset-0 bg-[#0b0b14]/40 group-hover:bg-[#0b0b14]/25 transition-colors duration-500" />

                {/* Branded top bar */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 opacity-90 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative p-6 sm:p-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/90 ring-1 ring-white/10">
                    <span className="inline-flex w-3.5 h-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 ring-2 ring-white/20" />
                    <span className="font-medium">{svc.label}</span>
                  </div>

                  <h3 className="mt-5 text-[22px] sm:text-[24px] font-semibold leading-tight">
                    {svc.headline}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {preview.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-100"
                      >
                        <span className="mt-1 inline-flex items-center justify-center rounded-full w-5 h-5 text-white shadow-md shadow-cyan-900/30 bg-gradient-to-br from-cyan-500 via-blue-500 to-amber-400">
                          <CheckIcon />
                        </span>
                        <span className="text-sm sm:text-[15px] leading-relaxed">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {hasMore && (
                    <div className="mt-6">
                      <button
                        onClick={() => setOpenIdx(idx)}
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 active:bg-white/20 transition px-4 py-2 text-sm font-medium ring-1 ring-white/10"
                      >
                        Read more <span aria-hidden>→</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Brand glow on hover */}
                <div className="pointer-events-none absolute -inset-1 rounded-[28px] opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-[radial-gradient(60%_80%_at_50%_0%,rgba(6,182,212,.28),rgba(59,130,246,.22),rgba(245,158,11,.16),transparent)]" />
              </article>
            );
          })}
        </div>
      </section>

      {/* === FALLING LINES VIDEO === */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
          <video
            className="block w-full h-auto brightness-100 hover:brightness-[1.12] transition duration-500"
            autoPlay
            playsInline
            muted
            loop
            preload="metadata"
            aria-label="Brand falling lines animation"
          >
            <source src="/assets/our_services_new2.mp4" type="video/mp4" />
          </video>

          {/* Content centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-10 py-6 sm:py-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Your trusted partner{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-amber-300 bg-clip-text text-transparent">
                driving ideas into reality
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-white/80">
              We blend expertise and innovation to deliver seamless solutions —
              anticipating challenges and solving them before they arise.
            </p>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mt-10">
          <img
            src="/assets/DES_LOGO4.png"
            alt="Digital Elite Services Logo"
            className="w-28 sm:w-32 md:w-36 lg:w-40 h-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* === OUR APPROACH (brighter glows) === */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* ambient logo-colored glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-55"
            style={{
              background:
                "radial-gradient(closest-side, rgba(6,182,212,.70), transparent 70%)",
            }}
          />
          <div
            className="absolute -top-16 right-[-10%] w-[30rem] h-[30rem] rounded-full blur-3xl opacity-50"
            style={{
              background:
                "radial-gradient(closest-side, rgba(59,130,246,.66), transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-55"
            style={{
              background:
                "radial-gradient(closest-side, rgba(245,158,11,.70), transparent 70%)",
            }}
          />
        </div>

        {/* pill badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/5 ring-1 ring-white/10">
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400" />
            Our Approach
          </span>
        </div>

        {/* headline */}
        <div className="text-center mt-6">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Always giving you{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-amber-300 bg-clip-text text-transparent">
              exactly what you need
            </span>
          </h3>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            No more scattered details or convoluted tasks. We line everything up
            so nothing gets lost—anticipating and resolving before you have to
            ask.
          </p>
        </div>

        {/* grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* left: overview card */}
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl bg-[#0f0f18]/80 p-6 sm:p-8 overflow-hidden ring-1 ring-white/10">
              {/* gradient border sheen */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none">
                <div
                  className="absolute inset-0 rounded-3xl opacity-25"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(6,182,212,.35), rgba(59,130,246,.25), rgba(245,158,11,.25))",
                  }}
                />
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold">Our Approach</h4>
              <p className="mt-2 text-white/80 max-w-2xl">
                A pragmatic, transparent workflow that keeps momentum and
                delivers results.
              </p>

              {/* chips */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Client understanding",
                  "Customized strategy",
                  "Creative execution",
                  "Collaboration",
                  "Continuous optimization",
                  "Measurable impact",
                  "Quality & timely delivery",
                ].map((chip, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-2xl text-sm bg-white/[0.06] ring-1 ring-white/10 relative"
                  >
                    <span
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset",
                      }}
                    />
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-amber-300 bg-clip-text text-transparent">
                      {chip}
                    </span>
                  </span>
                ))}
              </div>

              {/* subtle bottom glow */}
              <div
                className="pointer-events-none absolute inset-x-0 -bottom-6 h-28 blur-2xl"
                style={{
                  background:
                    "radial-gradient(60% 100% at 50% 100%, rgba(6,182,212,.18), rgba(59,130,246,.14), rgba(245,158,11,.12), transparent)",
                }}
              />
            </div>
          </div>

          {/* right: two tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {approach.slice(0, 2).map((item, i) => (
              <div
                key={i}
                className="group relative rounded-3xl bg-[#10101a]/80 p-6 overflow-hidden ring-1 ring-white/10"
              >
                <div className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 opacity-90" />
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-white/70 group-hover:text-white transition">
                    <NodeIcon />
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-white/80 mt-1">{item.desc}</p>
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(60% 80% at 50% 0%, rgba(6,182,212,.16), rgba(59,130,246,.12), rgba(245,158,11,.10), transparent)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* second row tiles */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {approach.slice(2).map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-[#0e0e17]/80 p-6 overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition"
            >
              <div className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 opacity-80 group-hover:opacity-100" />
              <div className="flex items-start gap-4">
                <div className="shrink-0 text-white/70 group-hover:text-white transition">
                  <NodeIcon />
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-white/80 mt-1">{item.desc}</p>
                </div>
              </div>
              <div
                className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"
                style={{
                  background:
                    "radial-gradient(80% 80% at 100% 0%, rgba(6,182,212,.12), rgba(59,130,246,.10), rgba(245,158,11,.10), transparent)",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* === MODAL === */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIdx(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative z-10 w-full max-w-2xl rounded-2xl bg-[#0c0c16] border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative px-6 py-5 border-b border-white/10">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 opacity-90" />
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/70">
                    {services[openIdx].label}
                  </p>
                  <h4 className="mt-1 text-xl font-semibold">
                    {services[openIdx].headline}
                  </h4>
                </div>
                <button
                  onClick={() => setOpenIdx(null)}
                  className="rounded-full bg-white/10 hover:bg-white/20 p-2"
                  aria-label="Close"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>

            <div className="px-6 py-6 max-h-[75vh] overflow-y-auto">
              <p className="text-slate-200 text-sm sm:text-base">
                {services[openIdx].blurb}
              </p>

              <ul className="mt-5 space-y-3">
                {services[openIdx].points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-50">
                    <span className="mt-1 inline-flex items-center justify-center rounded-md w-6 h-6 text-white shadow-lg shadow-cyan-900/30 ring-2 ring-white/10 bg-gradient-to-br from-cyan-500 via-blue-500 to-amber-400">
                      <CheckIcon />
                    </span>
                    <span className="text-sm sm:text-[15px] leading-relaxed">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setOpenIdx(null)}
                  className="rounded-full bg-white/10 hover:bg-white/15 px-4 py-2 text-sm ring-1 ring-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* === KEYFRAMES === */}
      <style jsx global>{`
        @keyframes pan {
          0% {
            transform: translate3d(-6%, 0, 0) scale(1.02);
          }
          50% {
            transform: translate3d(6%, -2%, 0) scale(1.05);
          }
          100% {
            transform: translate3d(-6%, 0, 0) scale(1.02);
          }
        }
        .animate-pan {
          animation: pan 26s ease-in-out infinite;
        }
        @keyframes float1 {
          0% {
            transform: translate(-3%, 0%) scale(1);
          }
          50% {
            transform: translate(3%, -4%) scale(1.06);
          }
          100% {
            transform: translate(-3%, 0%) scale(1);
          }
        }
        @keyframes float2 {
          0% {
            transform: translate(-50%, 0%) scale(1);
          }
          50% {
            transform: translate(-48%, -3%) scale(1.08);
          }
          100% {
            transform: translate(-50%, 0%) scale(1);
          }
        }
        @keyframes float3 {
          0% {
            transform: translate(2%, -2%) scale(1);
          }
          50% {
            transform: translate(-2%, 2%) scale(1.05);
          }
          100% {
            transform: translate(2%, -2%) scale(1);
          }
        }
        .animate-float1 {
          animation: float1 18s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 22s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 20s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurServicesComp;
