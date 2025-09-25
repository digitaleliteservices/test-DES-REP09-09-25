"use client";
import { useEffect, useRef } from "react";
import "./ourclients.css";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

const clients = [
  {
    name: "DHS",
    src: "/assets/DHS.png",
    url: "https://defencehousingsociety.com/",
  },
  {
    name: "RRPL",
    src: "/assets/clientlogo.png",
    url: "https://rajavrukshagroup.in/",
  },
  {
    name: "Plumeria",
    src: "/assets/Plumeria.png",
    url: "https://plumeriaresort.in/",
  },
  {
    name: "SriMatru",
    src: "/assets/SriMathru2.jpg",
    url: "https://srimatru.in/",
  },
   {
    name: "North East Reality",
    src: "/assets/logo-NER2.png",
    url: "https://northeastreality.in/",
  },
  { name: "Gnanasamrudhi", src: "/assets/gnanasamrudhi.png" },

];

export default function OurClients() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, clients.length);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      cardsRef.current.forEach((el) => el && el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) el.classList.add("in-view");
          else el.classList.remove("in-view");
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.18 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-16 md:mt-20 text-center">
      {/* ✅ centered heading and subtext */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
        <span className="text-black">Our</span>{" "}
        <span
          style={{
            background: LOGO_GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          className="inline-block"
        >
          Clients
        </span>
      </h1>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        We partner with businesses of all sizes across various industries to
        deliver exceptional digital solutions
      </p>

      <div
        ref={containerRef}
        className="mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-8 px-4"
      >
        {clients.map((client, idx) => {
          const directionClass = idx % 2 === 0 ? "from-left" : "from-right";
          const delay = `${0.08 * idx}s`;
          return (
            <a
              key={idx}
              href={client.url || "#"}
              target={client.url ? "_blank" : undefined}
              rel={client.url ? "noopener noreferrer" : undefined}
              className={`client-card ${directionClass}`}
              ref={(el) => (cardsRef.current[idx] = el)}
              style={{ transitionDelay: delay }}
            >
              <div className="glow-rim" aria-hidden="true"></div>
              <div className="client-inner animate-float">
                <img
                  src={client.src}
                  alt={client.name}
                  className="client-logo"
                  draggable={false}
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
