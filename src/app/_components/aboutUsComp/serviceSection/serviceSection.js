// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// /* card entrance variant */
// const cardVariant = {
//   hidden: { opacity: 0, y: 28, scale: 0.98 },
//   show: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
//   }),
// };

// const ServicesSection = () => {
//   const { ref: serviceRef } = useInView({ threshold: 0.2, triggerOnce: false });

//   const cards = [
//     {
//       title: "Digital Marketing Excellence",
//       desc: "We craft strategies that amplify visibility, engage audiences, and drive measurable growth.",
//       img: "/assets/digital_marketing.jpeg",
//       colors: ["#3b82f6", "#06b6d4"], // blue → cyan
//       shape: "rect",
//     },
//     {
//       title: "Creative Design & Branding",
//       desc: "From graphics to complete brand identities, we design with impact — ensuring your message is memorable.",
//       img: "/assets/digital_marketing5.jpeg",
//       colors: ["#8b5cf6", "#ec4899"], // purple → pink
//       shape: "circle",
//     },
//     {
//       title: "Custom Web Development",
//       desc: "We build tailored web solutions that transform ideas into powerful digital experiences.",
//       img: "/assets/digital_marketing6.jpeg",
//       colors: ["#fb923c", "#f43f5e"], // orange → coral
//       shape: "pentagon",
//     },
//   ];

//   const placeholder = "/assets/placeholder.jpg";

//   // helper to produce gradient CSS
//   const gradientCSS = (c1, c2) => `linear-gradient(90deg, ${c1}, ${c2})`;

//   return (
//     <section
//       ref={serviceRef}
//       className="relative flex flex-col items-center justify-center px-6 py-12"
//       aria-label="Our services"
//       style={{ background: "linear-gradient(180deg,#ffffff,#f8fafc)" }}
//     >
//       <style>{`
//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         @keyframes softPulse {
//           0% { transform: scale(1); opacity: 0.9; }
//           50% { transform: scale(1.08); opacity: 1; }
//           100% { transform: scale(1); opacity: 0.9; }
//         }
//         .card-image-rect { border-radius: 18px; overflow: hidden; }
//         .card-image-circle { border-radius: 9999px; overflow: hidden; }
//         .card-image-pent { overflow: hidden; clip-path: polygon(50% 2%, 95% 35%, 77% 90%, 23% 90%, 5% 35%); }
//         .bg-shift { background-size: 200% 200%; animation: gradientShift 10s ease-in-out infinite; }
//         .text-overlay { transition: width 700ms ease-in-out; width: 0; }
//         .group:hover .text-overlay { width: 100%; }
//         @media (max-width: 640px) {
//           .card-image-circle { width: 160px !important; height: 160px !important; min-width: 160px; }
//         }
//       `}</style>

//       {/* heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 14 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.25 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-8"
//       >
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
//           What We{" "}
//           <span
//             style={{
//               background: "linear-gradient(90deg,#2563eb,#7c3aed)",
//               WebkitBackgroundClip: "text",
//               color: "transparent",
//             }}
//           >
//             Offer
//           </span>
//         </h2>
//       </motion.div>

//       {/* cards */}
//       <div className="flex flex-col gap-6 mt-6 max-w-4xl w-full">
//         {cards.map((card, i) => {
//           const grad = gradientCSS(card.colors[0], card.colors[1]);

//           // shape-specific class
//           const shapeClass =
//             card.shape === "rect"
//               ? "card-image-rect"
//               : card.shape === "circle"
//               ? "card-image-circle"
//               : "card-image-pent";

//           const circleSize =
//             card.shape === "circle" ? { width: 220, height: 220 } : {};

//           // IMPORTANT: reverse the row on md+ for the 2nd card (index 1)
//           const mdRowClass = i === 1 ? "md:flex-row-reverse" : "md:flex-row";

//           return (
//             <motion.article
//               key={i}
//               custom={i}
//               variants={cardVariant}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: false, amount: 0.25 }}
//               whileHover={{ y: -8, scale: 1.01 }}
//               transition={{ type: "spring", stiffness: 140, damping: 16 }}
//               className="group relative overflow-visible bg-transparent"
//             >
//               {/* responsive container: column on small, row on md+; reversed for card 2 */}
//               <div
//                 className={`flex flex-col ${mdRowClass} items-center gap-6 md:gap-10`}
//               >
//                 {/* image */}
//                 <div
//                   className={`flex-shrink-0 flex items-center justify-center ${shapeClass} bg-black/0`}
//                   style={{
//                     minWidth: card.shape === "circle" ? 220 : 220,
//                     maxWidth: card.shape === "circle" ? 220 : "40%",
//                     ...circleSize,
//                   }}
//                 >
//                   <motion.img
//                     src={card.img}
//                     alt={card.title}
//                     onError={(e) => {
//                       e.currentTarget.onerror = null;
//                       e.currentTarget.src = placeholder;
//                     }}
//                     animate={{ y: [0, -8, 0] }}
//                     transition={{
//                       duration: 4 + i,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     whileHover={{ scale: 1.03 }}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       display: "block",
//                       minHeight: 180,
//                     }}
//                   />
//                 </div>

//                 {/* text */}
//                 <div className="relative flex-1 w-full">
//                   <div
//                     aria-hidden
//                     className="absolute inset-0 rounded-xl bg-shift"
//                     style={{
//                       backgroundImage: `linear-gradient(120deg, ${card.colors[0]}, ${card.colors[1]}, ${card.colors[0]})`,
//                       opacity: 0.06,
//                       zIndex: 0,
//                       pointerEvents: "none",
//                     }}
//                   />

//                   <div
//                     style={{ position: "relative", zIndex: 20 }}
//                     className="p-4 md:p-6 bg-white/0"
//                   >
//                     <div
//                       style={{
//                         height: 6,
//                         width: 56,
//                         borderRadius: 9999,
//                         background: grad,
//                         marginBottom: 12,
//                       }}
//                     />
//                     <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 transition-colors duration-200">
//                       <span className="group-hover:text-white">
//                         {card.title}
//                       </span>
//                     </h3>

//                     <p className="text-gray-600 mb-4 group-hover:text-white transition-colors duration-200">
//                       {card.desc}
//                     </p>

//                     <div className="flex items-center gap-4">
//                       <a
//                         href="/contact"
//                         className="inline-flex items-center gap-3 px-4 py-2 rounded-md text-white font-semibold relative overflow-hidden"
//                         style={{
//                           background: grad,
//                           boxShadow: `0 8px 28px ${card.colors[0]}33`,
//                         }}
//                       >
//                         <span>Let's talk</span>
//                         <motion.span
//                           initial={{ x: 0 }}
//                           whileHover={{ x: 6 }}
//                           transition={{ duration: 0.28 }}
//                           aria-hidden
//                         >
//                           →
//                         </motion.span>
//                       </a>

//                       <button className="text-sm text-slate-600 group-hover:text-white transition-colors duration-200">
//                         Learn more →
//                       </button>
//                     </div>
//                   </div>

//                   <div
//                     aria-hidden
//                     className="text-overlay absolute left-0 top-0 bottom-0 origin-left"
//                     style={{
//                       background: `linear-gradient(90deg, ${card.colors[0]}, ${card.colors[1]})`,
//                       zIndex: 10,
//                       opacity: 0.9,
//                       pointerEvents: "none",
//                     }}
//                   />
//                 </div>
//               </div>
//             </motion.article>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// /* card entrance variant */
// const cardVariant = {
//   hidden: { opacity: 0, y: 28, scale: 0.98 },
//   show: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
//   }),
// };

// function ServicesSection() {
//   const { ref: serviceRef } = useInView({ threshold: 0.2, triggerOnce: false });

//   const cards = [
//     {
//       title: "Digital Marketing Excellence",
//       desc: "We craft strategies that amplify visibility, engage audiences, and drive measurable growth.",
//       img: "/assets/digital_marketing.jpeg",
//       colors: ["#3b82f6", "#06b6d4"], // blue → cyan
//       shape: "rect",
//     },
//     {
//       title: "Creative Design & Branding",
//       desc: "From graphics to complete brand identities, we design with impact — ensuring your message is memorable.",
//       img: "/assets/digital_marketing5.jpeg",
//       colors: ["#8b5cf6", "#ec4899"], // purple → pink
//       shape: "circle",
//     },
//     {
//       title: "Custom Web Development",
//       desc: "We build tailored web solutions that transform ideas into powerful digital experiences.",
//       img: "/assets/digital_marketing6.jpeg",
//       colors: ["#fb923c", "#f43f5e"], // orange → coral
//       shape: "pentagon",
//     },
//   ];

//   const placeholder = "/assets/placeholder.jpg";

//   // helper to produce gradient CSS
//   const gradientCSS = (c1, c2) => `linear-gradient(90deg, ${c1}, ${c2})`;

//   return (
//     <section
//       ref={serviceRef}
//       className="relative flex flex-col items-center justify-center px-6 py-16 md:py-24"
//       aria-label="Our services"
//     //   style={{ background: "linear-gradient(180deg,#ffffff,#f8fafc)" }}
//     >
//       <style>{`
//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         @keyframes softPulse {
//           0% { transform: scale(1); opacity: 0.9; }
//           50% { transform: scale(1.06); opacity: 1; }
//           100% { transform: scale(1); opacity: 0.9; }
//         }

//         .card-image-rect { border-radius: 18px; overflow: hidden; }
//         .card-image-circle { border-radius: 9999px; overflow: hidden; }
//         .card-image-pent { overflow: hidden; clip-path: polygon(50% 2%, 95% 35%, 77% 90%, 23% 90%, 5% 35%); }
//         .bg-shift { background-size: 200% 200%; animation: gradientShift 10s ease-in-out infinite; }
//         .text-overlay { transition: width 700ms ease-in-out; width: 0; }
//         .group:hover .text-overlay { width: 100%; }

//         /* larger card visuals */
//         .service-card { padding: 1.25rem; border-radius: 20px; }

//         /* glass-like panel */
//         .glass {
//           background: rgba(255,255,255,0.65);
//           backdrop-filter: blur(6px) saturate(120%);
//           -webkit-backdrop-filter: blur(6px) saturate(120%);
//           border: 1px solid rgba(255,255,255,0.6);
//           box-shadow: 0 10px 30px rgba(2,6,23,0.08);
//         }

//         /* decorative gradient rim */
//         .rim {
//           position: absolute; inset: -1px; border-radius: 20px; background: linear-gradient(90deg, rgba(255,255,255,0.05), rgba(0,0,0,0.03)); pointer-events: none;
//         }

//         /* larger images on desktop */
//         @media (min-width: 768px) {
//           .card-image-rect { min-width: 320px; max-width: 420px; min-height: 240px; }
//           .card-image-circle { width: 260px !important; height: 260px !important; min-width: 260px; }
//           .card-image-pent { min-width: 320px; max-width: 420px; min-height: 240px; }
//         }

//         /* responsive stacking tweaks */
//         @media (max-width: 640px) {
//           .card-image-circle { width: 180px !important; height: 180px !important; min-width: 180px; }
//           .service-card { padding: 1rem; }
//         }

//       `}</style>

//       {/* heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 14 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.25 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-12"
//       >
//         <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
//           What We <span style={{ background: "linear-gradient(90deg,#2563eb,#7c3aed)", WebkitBackgroundClip: "text", color: "transparent" }}>Offer</span>
//         </h2>
//         <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Tailored services that combine creativity, strategy and engineering — built to move your brand forward.</p>
//       </motion.div>

//       {/* cards */}
//       <div className="flex flex-col gap-8 mt-6 w-full max-w-6xl">
//         {cards.map((card, i) => {
//           const grad = gradientCSS(card.colors[0], card.colors[1]);
//           const shapeClass =
//             card.shape === "rect"
//               ? "card-image-rect"
//               : card.shape === "circle"
//               ? "card-image-circle"
//               : "card-image-pent";

//           const circleSize = card.shape === "circle" ? { width: 260, height: 260 } : {};

//           // For card 2 (i===1), place image on right on md+; other cards keep image left
//           const rowClass = i === 1 ? "md:flex-row-reverse" : "md:flex-row";

//           return (
//             <motion.article
//               key={i}
//               custom={i}
//               variants={cardVariant}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: false, amount: 0.25 }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 120, damping: 14 }}
//               className="group relative overflow-visible bg-transparent"
//             >
//               <div className={`flex flex-col ${rowClass} md:items-center items-start gap-6 md:gap-12 service-card glass relative p-4 md:p-6`}>
//                 <div className="rim" aria-hidden />

//                 {/* badge */}
//                 <div className="absolute -top-3 left-4 md:left-8 bg-white/90 px-3 py-1 rounded-full text-xs font-medium shadow-sm" style={{ border: `1px solid ${card.colors[0]}22` }}>
//                   <span style={{ color: card.colors[0] }}>{`0${i + 1}`}</span>
//                 </div>

//                 {/* image */}
//                 <div
//                   className={`flex-shrink-0 flex items-center justify-center ${shapeClass} bg-black/0 transform-gpu transition-transform duration-500 group-hover:scale-105`}
//                   style={{
//                     minWidth: card.shape === "circle" ? 260 : 320,
//                     maxWidth: card.shape === "circle" ? 260 : "48%",
//                     ...circleSize,
//                     boxShadow: `0 14px 40px ${card.colors[0]}22`,
//                     borderRadius: card.shape === "rect" ? 20 : undefined,
//                   }}
//                 >
//                   <motion.img
//                     src={card.img}
//                     alt={card.title}
//                     onError={(e) => {
//                       e.currentTarget.onerror = null;
//                       e.currentTarget.src = placeholder;
//                     }}
//                     animate={{ y: [0, -10, 0] }}
//                     transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
//                     whileHover={{ scale: 1.04 }}
//                     style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 220 }}
//                   />
//                 </div>

//                 {/* text */}
//                 <div className="relative flex-1 w-full">
//                   <div
//                     aria-hidden
//                     className="absolute inset-0 rounded-xl bg-shift"
//                     style={{
//                       backgroundImage: `linear-gradient(120deg, ${card.colors[0]}, ${card.colors[1]}, ${card.colors[0]})`,
//                       opacity: 0.08,
//                       zIndex: 0,
//                       pointerEvents: "none",
//                     }}
//                   />

//                   <div style={{ position: "relative", zIndex: 20 }} className="p-4 md:p-6 bg-white/0">
//                     <div style={{ height: 8, width: 72, borderRadius: 9999, background: grad, marginBottom: 14 }} />
//                     <h3 className="text-xl md:text-3xl font-semibold mb-3 transition-colors duration-200">
//                       <span className="group-hover:text-white">{card.title}</span>
//                     </h3>

//                     <p className="text-gray-600 mb-6 group-hover:text-white transition-colors duration-200 text-base md:text-lg">
//                       {card.desc}
//                     </p>

//                     <div className="flex items-center gap-4">
//                       <a
//                         href="/contact"
//                         className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-white font-semibold relative overflow-hidden shadow-lg"
//                         style={{
//                           background: grad,
//                           boxShadow: `0 12px 36px ${card.colors[0]}33`,
//                           transform: "translateZ(0)",
//                         }}
//                       >
//                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//                           <path d="M2 12h20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                           <path d="M15 5l7 7-7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                         <span>Let's talk</span>
//                       </a>

//                       <button className="text-sm md:text-base text-slate-600 group-hover:text-white transition-colors duration-200">Learn more →</button>
//                     </div>
//                   </div>

//                   <div
//                     aria-hidden
//                     className="text-overlay absolute left-0 top-0 bottom-0 origin-left"
//                     style={{ background: `linear-gradient(90deg, ${card.colors[0]}, ${card.colors[1]})`, zIndex: 10, opacity: 0.92, pointerEvents: "none" }}
//                   />
//                 </div>
//               </div>
//             </motion.article>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default ServicesSection;



"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* card entrance variant */
const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      delay: i * 0.15, 
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

function ServicesSection() {
  const { ref: serviceRef } = useInView({ threshold: 0.1, triggerOnce: false });

  const cards = [
    {
      title: "Digital Marketing Excellence",
      desc: "We craft strategies that amplify visibility, engage audiences, and drive measurable growth.",
      img: "/assets/digital_marketing.jpeg",
      colors: ["#3b82f6", "#06b6d4"], // blue → cyan
      shape: "rect",
      icon: "📈",
    },
    {
      title: "Creative Design & Branding",
      desc: "From graphics to complete brand identities, we design with impact — ensuring your message is memorable.",
      img: "/assets/digital_marketing5.jpeg",
      colors: ["#8b5cf6", "#ec4899"], // purple → pink
      shape: "circle",
      icon: "🎨",
    },
    {
      title: "Custom Web Development",
      desc: "We build tailored web solutions that transform ideas into powerful digital experiences.",
      img: "/assets/digital_marketing6.jpeg",
      colors: ["#fb923c", "#f43f5e"], // orange → coral
      shape: "pentagon",
      icon: "💻",
    },
  ];

  const placeholder = "/assets/placeholder.jpg";

  // helper to produce gradient CSS
  const gradientCSS = (c1, c2) => `linear-gradient(135deg, ${c1}, ${c2})`;

  return (
    <section
      ref={serviceRef}
      className="relative flex flex-col items-center justify-center px-6 py-20 md:py-28 overflow-hidden"
      aria-label="Our services"
      style={{ 
        position: "relative",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-100/30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-orange-100/20 blur-3xl"></div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.5); }
          100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        }

        .card-image-rect { 
          border-radius: 18px; 
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .card-image-circle { 
          border-radius: 9999px; 
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .card-image-pent { 
          overflow: hidden; 
          clip-path: polygon(50% 2%, 95% 35%, 77% 90%, 23% 90%, 5% 35%);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .bg-shift { 
          background-size: 200% 200%; 
          animation: gradientShift 10s ease-in-out infinite;
          /* ✅ visible by default (subtle) */
          opacity: 0.08;
          transition: opacity 400ms ease, transform 400ms ease;
        }
        
        /* stronger on hover */
        .group:hover .bg-shift {
          opacity: 0.18;
          transform: scale(1.02);
        }
        
        .text-overlay { 
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1); 
          width: 0; 
          opacity: 0;
        }
        
        .group:hover .text-overlay { 
          width: 100%; 
          opacity: 1;
        }

        /* glass-like panel */
        .glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 
            0 10px 30px rgba(2, 6, 23, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        /* decorative gradient rim (stronger by default) */
        .rim {
          position: absolute; 
          inset: -1px; 
          border-radius: 24px; 
          background: linear-gradient(90deg, rgba(255,255,255,0.12), rgba(0,0,0,0.05)); 
          pointer-events: none;
          z-index: -1;
        }

        .service-card {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .service-card:hover {
          box-shadow: 
            0 25px 50px rgba(2, 6, 23, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        /* larger images on desktop */
        @media (min-width: 768px) {
          .card-image-rect { min-width: 340px; max-width: 440px; min-height: 260px; }
          .card-image-circle { width: 280px !important; height: 280px !important; min-width: 280px; }
          .card-image-pent { min-width: 340px; max-width: 440px; min-height: 260px; }
        }

        /* responsive stacking tweaks */
        @media (max-width: 640px) {
          .card-image-circle { width: 200px !important; height: 200px !important; min-width: 200px; }
          .service-card { padding: 1rem; }
        }
      `}</style>

      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-16 relative"
      >
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
          What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">Tailored services that combine creativity, strategy and engineering — built to move your brand forward.</p>
      </motion.div>

      {/* cards */}
      <div className="flex flex-col gap-12 mt-6 w-full max-w-6xl mx-auto">
        {cards.map((card, i) => {
          const grad = gradientCSS(card.colors[0], card.colors[1]);
          const shapeClass =
            card.shape === "rect"
              ? "card-image-rect"
              : card.shape === "circle"
              ? "card-image-circle"
              : "card-image-pent";

          const circleSize = card.shape === "circle" ? { width: 280, height: 280 } : {};

          // For card 2 (i===1), place image on right on md+; other cards keep image left
          const rowClass = i === 1 ? "md:flex-row-reverse" : "md:flex-row";

          return (
            <motion.article
              key={i}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative overflow-visible bg-transparent"
            >
              <div className={`flex flex-col ${rowClass} md:items-center items-start gap-8 md:gap-16 service-card glass relative p-6 md:p-8 rounded-3xl`}>
                <div className="rim" aria-hidden />

                {/* image */}
                <motion.div
                  className={`flex-shrink-0 flex items-center justify-center ${shapeClass} bg-black/0 transform-gpu overflow-hidden relative`}
                  style={{
                    minWidth: card.shape === "circle" ? 280 : 340,
                    maxWidth: card.shape === "circle" ? 280 : "48%",
                    ...circleSize,
                    boxShadow: `0 20px 50px ${card.colors[0]}30`,
                    borderRadius: card.shape === "rect" ? 20 : undefined,
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    rotate: card.shape === "circle" ? 2 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Image overlay gradient (now visible by default via .bg-shift opacity) */}
                  <div
                    className="absolute inset-0 bg-shift"
                    style={{
                      backgroundImage: `linear-gradient(120deg, ${card.colors[0]}, ${card.colors[1]}, ${card.colors[0]})`,
                      zIndex: 0,
                    }}
                  />

                  <motion.img
                    src={card.img}
                    alt={card.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = placeholder;
                    }}
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.08 }}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover", 
                      display: "block", 
                      minHeight: 240,
                      position: "relative",
                      zIndex: 10
                    }}
                    className="transition-transform duration-700"
                  />
                </motion.div>

                {/* text */}
                <div className="relative flex-1 w-full overflow-hidden rounded-2xl">
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-xl bg-shift"
                    style={{
                      backgroundImage: `linear-gradient(120deg, ${card.colors[0]}, ${card.colors[1]}, ${card.colors[0]})`,
                      zIndex: 0,
                      /* subtle visible tint by default (controlled in CSS) */
                    }}
                  />

                  <div style={{ position: "relative", zIndex: 20 }} className="p-6 md:p-8 bg-transparent">
                    <div 
                      style={{ 
                        height: 6, 
                        width: 60, 
                        borderRadius: 9999, 
                        background: grad, 
                        marginBottom: 20,
                      }} 
                      className="group-hover:width-80 transition-all duration-500"
                    />
                    
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 group-hover:text-black transition-colors duration-500">
                      {card.title}
                    </h3>

                    <p className="text-gray-600 mb-8 group-hover:text-black/90 transition-colors duration-500 text-base md:text-lg leading-relaxed">
                      {card.desc}
                    </p>

                    <div className="flex items-center gap-4">
                      <motion.a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white font-semibold relative overflow-hidden group/btn"
                        style={{
                          background: grad,
                          boxShadow: `0 12px 36px ${card.colors[0]}40`,
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: `0 16px 40px ${card.colors[0]}60`,
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10">Let's talk</span>
                        <svg 
                          width="18" 
                          height="18" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
                          aria-hidden
                        >
                          <path d="M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M15 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </motion.a>
                    </div>
                  </div>

                  <div
                    aria-hidden
                    className="text-overlay absolute left-0 top-0 bottom-0 origin-left rounded-xl"
                    style={{ 
                      background: grad, 
                      zIndex: 10, 
                      opacity: 0,
                    }}
                  />
                </div>
              </div>

              {/* Floating elements */}
              {[1, 2, 3].map((dot) => (
                <motion.div
                  key={dot}
                  className={`absolute rounded-full ${dot % 2 === 0 ? 'bg-blue-400/20' : 'bg-purple-400/20'} -z-10`}
                  style={{
                    width: dot * 16,
                    height: dot * 16,
                    top: `${20 + dot * 10}%`,
                    left: dot % 2 === 0 ? `${80 - dot * 5}%` : `${10 + dot * 5}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4 + dot,
                    repeat: Infinity,
                    delay: dot * 0.5,
                  }}
                />
              ))}
            </motion.article>
          );
        })}
      </div>

      {/* Section bottom decoration */}
      <motion.div 
        className="mt-16 w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </section>
  );
}

export default ServicesSection;
