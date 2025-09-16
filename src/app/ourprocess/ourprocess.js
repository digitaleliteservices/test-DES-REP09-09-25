// components/OurProcess.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#00E5FF 0%,#2C6DF6 52%,#FF8A00 100%)";

const steps = [
  {
    id: 1,
    title: "Discover & Research",
    desc: "We audit your brand, audience and market to find the highest-impact opportunities.",
    img: "/assets/process-discover.jpg",
    alt: "Team researching analytics dashboard",
  },
  {
    id: 2,
    title: "Strategy & Planning",
    desc: "We build a tailored growth roadmap with KPIs, channel mix and milestones.",
    img: "/assets/process-strategy.jpg",
    alt: "Whiteboard planning and roadmap",
  },
  {
    id: 3,
    title: "Creative & Build",
    desc: "Designs, landing pages and assets that convert — built by our in-house studio.",
    img: "/assets/process-creative.jpg",
    alt: "Designer working on UX mockups",
  },
  {
    id: 4,
    title: "Launch & Optimize",
    desc: "Data-first launch with A/B tests, tracking and continuous optimisation.",
    img: "/assets/process-launch.jpg",
    alt: "Campaign dashboards and analytics",
  },
  {
    id: 5,
    title: "Scale & Grow",
    desc: "We expand winning channels, automate funnels and measure business impact.",
    img: "/assets/process-scale.jpg",
    alt: "Growing chart and team celebration",
  },
];

export default function OurProcess({ className = "" }) {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [locked, setLocked] = useState(false); // whether we are in locked mode (stop native scrolling)
  const animatingRef = useRef(false); // debounce guard
  const touchStartRef = useRef(null);
  const observerRef = useRef(null);

  // helper: advance/rewind
  const go = (dir) => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setActiveIndex((prev) => {
      const next = Math.min(Math.max(prev + dir, 0), steps.length - 1);
      return next;
    });
    // after animation allow input again
    window.setTimeout(() => {
      animatingRef.current = false;
    }, 700); // matches transition durations
  };

  // wheel handler
  const handleWheel = (e) => {
    if (!locked) return;
    e.preventDefault();
    const delta = e.deltaY;
    if (delta > 20) go(1);
    else if (delta < -20) go(-1);
  };

  // touch handlers for mobile swipes
  const handleTouchStart = (e) => {
    if (!locked) return;
    touchStartRef.current = e.touches?.[0]?.clientY ?? null;
  };
  const handleTouchEnd = (e) => {
    if (!locked || touchStartRef.current == null) return;
    const endY = e.changedTouches?.[0]?.clientY ?? null;
    if (endY == null) return;
    const diff = touchStartRef.current - endY;
    // threshold
    if (diff > 36) go(1);
    else if (diff < -36) go(-1);
    touchStartRef.current = null;
  };

  // keyboard arrows
  const handleKey = (e) => {
    if (!locked) return;
    if (e.key === "ArrowDown" || e.key === "PageDown") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(steps.length - 1);
    }
  };

  // IntersectionObserver: enable locked mode when section is mostly in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // when a good portion of the section is visible -> lock
          if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
            setLocked(true);
            // disable body scroll
            document.documentElement.style.scrollBehavior = "auto";
            document.body.style.overflow = "hidden";
          } else {
            // release lock when user scrolls away
            setLocked(false);
            document.body.style.overflow = "";
            document.documentElement.style.scrollBehavior = "";
          }
        });
      },
      { threshold: [0, 0.25, 0.55, 0.9] }
    );

    observerRef.current.observe(el);

    return () => {
      observerRef.current?.disconnect();
      document.body.style.overflow = "";
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  // attach/detach event listeners when locked toggles
  useEffect(() => {
    if (locked) {
      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      window.addEventListener("touchend", handleTouchEnd, { passive: true });
      window.addEventListener("keydown", handleKey, { passive: false });
    } else {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKey);
    }
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKey);
    };
  }, [locked]);

  // ensure activeIndex stays in range and update left image by scrolling the card into view
  useEffect(() => {
    // Scroll the section to keep the active card roughly centered (helps with visual continuity)
    const targetEl = cardRefs.current[activeIndex];
    if (targetEl && sectionRef.current) {
      // For accessibility prefer smooth scroll, but when locked we keep instant to avoid interfering
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className={`relative py-16 ${className}`}
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-extrabold text-black"
          >
            Our Process — how we turn ideas into growth
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A repeatable, transparent system that delivers measurable results:
            we discover, plan, build, launch and scale.
          </p>
        </div>

        {/* Desktop two-column: left sticky image, right stacked sticky cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* LEFT: sticky image (desktop only) */}
          <div className="hidden md:block md:col-span-5">
            <div className="sticky top-24">
              <div
                className="rounded-2xl overflow-hidden bg-white shadow-xl"
                style={{ border: "1px solid rgba(13,17,23,0.04)" }}
              >
                <div className="relative w-full h-[420px] bg-white">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={steps[activeIndex]?.img ?? activeIndex}
                      src={steps[activeIndex]?.img}
                      alt={steps[activeIndex]?.alt || `step-${activeIndex}`}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="w-full h-full object-cover block"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                      loading="lazy"
                    />
                  </AnimatePresence>

                  {/* subtle brand vignette overlay */}
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(600px 300px at 10% 10%, rgba(0,229,255,0.06), transparent 18%), radial-gradient(600px 300px at 90% 90%, rgba(255,138,0,0.03), transparent 18%)",
                    }}
                  />
                </div>

                <div className="p-4 bg-white">
                  <div className="flex items-center gap-4">
                    <div
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full font-semibold"
                      style={{ background: LOGO_GRADIENT, color: "#071026" }}
                    >
                      {steps[activeIndex]?.id}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-black">
                        {steps[activeIndex]?.title}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {steps[activeIndex]?.desc}
                      </div>
                    </div>
                    <div>
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(0,229,255,0.10), rgba(44,109,246,0.10))",
                        }}
                      >
                        Featured
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: stacked sticky cards (desktop) / normal stacked list (mobile) */}
          <div className="md:col-span-7">
            <div className="space-y-6">
              {steps.map((step, i) => {
                const zIndex = steps.length - i; // earlier cards higher z so they appear on top when stuck
                const isActive = i === activeIndex;
                return (
                  <article
                    key={step.id}
                    ref={(el) => (cardRefs.current[i] = el)}
                    data-index={i}
                    className="group"
                    style={{ zIndex }}
                  >
                    {/* For desktop: card sticks to top area and naturally stacks because of z-index */}
                    <div
                      className="hidden md:block"
                      style={{
                        position: "sticky",
                        top: 120, // sticky top position (adjust to match header)
                        marginBottom: 24,
                      }}
                    >
                      <div
                        className={`rounded-2xl bg-white p-6 shadow-md border transition-transform duration-300 ${
                          isActive ? "shadow-lg transform scale-[1.01]" : ""
                        }`}
                        style={{
                          border: isActive
                            ? "1px solid rgba(2,6,23,0.06)"
                            : "1px solid transparent",
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold"
                            style={{
                              background: LOGO_GRADIENT,
                              color: "#071026",
                            }}
                          >
                            {step.id}
                          </div>

                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-black">
                              {step.title}
                            </h3>
                            <p className="mt-3 text-gray-600">{step.desc}</p>

                            <div className="mt-4 flex items-center gap-3">
                              <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                                style={{
                                  background: LOGO_GRADIENT,
                                  color: "#071026",
                                  boxShadow: "0 8px 24px rgba(2,6,23,0.06)",
                                }}
                              >
                                Learn how
                              </a>
                              <button
                                type="button"
                                onClick={() => setActiveIndex(i)}
                                className="text-sm text-black/60 underline"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile fallback (image above text) */}
                    <div className="md:hidden">
                      <div className="rounded-2xl overflow-hidden shadow-md mb-4">
                        <img
                          src={step.img}
                          alt={step.alt}
                          className="w-full h-56 object-cover"
                          loading="lazy"
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
                        />
                      </div>
                      <div className="rounded-2xl bg-white p-5 shadow-md">
                        <div className="flex items-start gap-4">
                          <div
                            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold"
                            style={{
                              background: LOGO_GRADIENT,
                              color: "#071026",
                            }}
                          >
                            {step.id}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-gray-600">{step.desc}</p>
                            <div className="mt-4">
                              <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                                style={{
                                  background: LOGO_GRADIENT,
                                  color: "#071026",
                                }}
                              >
                                Learn how
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Horizontal timeline (desktop wide) */}
        <div className="hidden lg:block mt-16">
          <div className="max-w-5xl mx-auto relative">
            <ol className="relative flex items-center justify-between">
              {steps.map((s) => (
                <li key={s.id} className="flex-1 text-center">
                  <div className="relative inline-flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-black font-bold"
                      style={{ background: LOGO_GRADIENT }}
                    >
                      {s.id}
                    </div>
                    <div className="mt-3 text-sm font-medium text-black">
                      {s.title}
                    </div>
                    <div className="mt-2 text-xs text-gray-500 max-w-[180px] mx-auto">
                      {s.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div
              aria-hidden
              className="absolute left-0 right-0 top-1/2 -z-10 h-1 mx-auto max-w-5xl"
              style={{
                background: "linear-gradient(90deg,#00E5FF, #2C6DF6, #FF8A00)",
              }}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold text-black">
            Want this process to work for your brand?
          </h4>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Book a free 30-minute strategy call and we'll map out a growth plan
            for the next 90 days.
          </p>
          <div className="mt-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium shadow-lg"
              style={{ background: LOGO_GRADIENT, color: "#071026" }}
            >
              Book free call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
