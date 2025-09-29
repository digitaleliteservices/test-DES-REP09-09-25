// components/PostLoaderCard.jsx
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PostLoaderCard({
  title = "Happy Dussehra!",
  message = "Wishing you a joyful and prosperous Dussehra from the whole team. May your celebrations be bright and your projects shine.",
  ctaText = "Explore Offers",
  secondaryText = "Maybe later",
  imgSrc = "/assets/dussera3.jpg",
  onClose,
}) {
  // Lock background scroll while the modal is open
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev || "";
    };
  }, []);

  // Close with Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose && onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
      onClick={() => onClose && onClose()}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.45), rgba(0,0,0,0.72))",
          backdropFilter: "blur(6px) saturate(1.02)",
        }}
        aria-hidden="true"
      />

      {/* Animated card wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.985 }}
        transition={{ duration: 0.36, ease: [0.22, 0.9, 0.29, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-50 w-full max-w-4xl"
        style={{
          padding: 2,
          borderRadius: 20,
          background:
            "linear-gradient(90deg, #06b6d4 0%, #6366f1 45%, #f97316 100%)",
          overflow: "visible",
        }}
      >
        {/* Inner frosted card (actual content) */}
        <div
          className="rounded-[18px] overflow-hidden bg-white/90"
          style={{
            backdropFilter: "blur(6px)",
            boxShadow: "0 20px 50px rgba(2,6,23,0.18)",
          }}
        >
          <div className="flex flex-col md:flex-row items-stretch">
            {/* LEFT: image column */}
            <div
              className="w-full md:w-5/12 flex items-center justify-center bg-gradient-to-b from-amber-50 to-white p-4 md:p-6"
              style={{ minHeight: 220 }}
            >
              <div className="relative w-full h-44 md:h-[320px] rounded-lg overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 35vw"
                  style={{ objectFit: "cover" }}
                  priority
                  className="select-none"
                />
              </div>
            </div>

            {/* RIGHT: text & actions column */}
            <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                      color: "#0f172a",
                      border: "1px solid rgba(2,6,23,0.04)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    FESTIVE
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold"
                  style={{ lineHeight: 1.03, color: "rgb(8 12 20)" }}
                >
                  {title}
                </h3>

                <p
                  className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ color: "rgb(71 85 105)" }}
                >
                  {message}
                </p>
              </div>

              {/* actions */}
              {/* <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.open("/offers", "_self");
                      }
                      onClose && onClose();
                    }}
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(99,102,241,1), rgba(6,182,212,1))",
                      color: "white",
                      boxShadow: "0 8px 30px rgba(99,102,241,0.14)",
                    }}
                  >
                    {ctaText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      style={{ opacity: 0.95 }}
                    >
                      <path
                        d="M5 10h10"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 7l3 3-3 3"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => onClose && onClose()}
                    className="text-sm font-medium text-slate-600 hover:text-slate-800"
                    aria-label="Maybe later"
                  >
                    {secondaryText}
                  </button>
                </div>

                <div className="text-xs text-slate-500 hidden sm:block">
                  🎉 Dussehra Specials
                </div>
              </div> */}
            </div>
          </div>

          {/* decorative bottom stripe */}
          <div
            aria-hidden
            style={{
              height: 6,
              width: "100%",
              background:
                "linear-gradient(90deg, rgba(99,102,241,0.95) 0%, rgba(6,182,212,0.95) 40%, rgba(249,115,22,0.95) 100%)",
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}
          />
        </div>

        {/* Close X */}
        <button
          type="button"
          aria-label="Close"
          onClick={() => onClose && onClose()}
          className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-white p-2 shadow hover:bg-white/95"
          style={{
            transform: "translate(0,0)",
            boxShadow: "0 6px 20px rgba(2,6,23,0.12)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-slate-700"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}
