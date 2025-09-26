"use client";

import { useEffect, useRef } from "react";
import "./ourclients.css";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

const clients = [
  { name: "DHS", src: "/assets/DHS.png", url: "https://defencehousingsociety.com/" },
  { name: "RRPL", src: "/assets/clientlogo.png", url: "https://rajavrukshagroup.in/" },
  { name: "Plumeria", src: "/assets/Plumeria.png", url: "https://plumeriaresort.in/" },
  { name: "SriMatru", src: "/assets/SriMathru2.jpg", url: "https://srimatru.in/" },
  { name: "North East Reality", src: "/assets/logo-NER2.png", url: "https://northeastreality.in/" },
  { name: "Gnanasamrudhi", src: "/assets/gnanasamrudhi.png" },
];

export default function OurClients() {
  const containerRef = useRef(null);
  const cellsRef = useRef([]);

  // scroll animation: translateY + scale + opacity based on distance from viewport center
  useEffect(() => {
    cellsRef.current = cellsRef.current.slice(0, clients.length);

    if (typeof window === "undefined") return;

    let rafId = null;

    const onFrame = () => {
      const vh = window.innerHeight;
      const center = vh / 2;

      cellsRef.current.forEach((cell) => {
        if (!cell) return;
        const rect = cell.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        // normalized distance from center (-1 to 1 roughly)
        let dist = (itemCenter - center) / center;
        // clamp to -1 .. 1 to avoid extreme transforms
        dist = Math.max(Math.min(dist, 1), -1);

        // translate in opposite direction so items move against scroll slightly
        const translateY = dist * 18; // px (tweak for intensity)
        // scale a bit when near center
        const scale = 1 - Math.min(Math.abs(dist) * 0.06, 0.06);
        // subtle opacity change
        const opacity = 1 - Math.min(Math.abs(dist) * 0.25, 0.25);

        // apply to logo (keeps cell borders steady)
        const logo = cell.querySelector(".client-logo");
        if (logo) {
          logo.style.transform = `translateY(${translateY}px) scale(${scale})`;
          logo.style.opacity = `${opacity}`;
        }
      });

      rafId = requestAnimationFrame(onFrame);
    };

    // Start the loop
    rafId = requestAnimationFrame(onFrame);

    // Also respond quickly to resize so center updates
    const onResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(onFrame);
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="mt-16 md:mt-20 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
        <span className="text-black">Some of</span>{" "}
        <span
          style={{
            background: LOGO_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          className="inline-block"
        >
          Our Clients
        </span>
      </h1>

      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        We proudly partner with clients across sectors, building lasting
        relationships and delivering solutions that empower their digital
        journey.
      </p>

      {/* grid uses the CSS in ourclients.css */}
      <div ref={containerRef} className="clients-grid mt-12 max-w-5xl mx-auto">
        {clients.map((client, idx) => (
          <a
            key={idx}
            href={client.url || "#"}
            target={client.url ? "_blank" : undefined}
            rel={client.url ? "noopener noreferrer" : undefined}
            className="client-cell"
            ref={(el) => (cellsRef.current[idx] = el)}
          >
            <img
              src={client.src}
              alt={client.name}
              className="client-logo"
              draggable={false}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
