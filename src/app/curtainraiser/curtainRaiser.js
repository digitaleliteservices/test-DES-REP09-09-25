// components/CurtainFooter.jsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CurtainFooter({ children, aboutus }) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const pathname = usePathname();

  // Get window height for responsive behavior
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);

      const handleResize = () => {
        setWindowHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Calculate scroll progress based on container position
  const curtainProgress = useTransform(scrollY, (value) => {
    if (!containerRef.current || windowHeight === 0) return 0;

    const rect = containerRef.current.getBoundingClientRect();

    // Start revealing when the top of this container reaches the bottom of the viewport
    const revealStart = windowHeight;
    const revealDistance = windowHeight; // How much to scroll to fully reveal

    const progress = Math.max(0, (revealStart - rect.top) / revealDistance);

    return Math.max(0, Math.min(1, progress));
  });

  // The white curtain moves up to reveal the footer
  const curtainY = useTransform(curtainProgress, [0, 1], [0, -windowHeight]);

  // Determine if we're on the about us page
  const isAboutUsPage = aboutus || pathname?.includes("/about-us");

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      // Use min-height instead of fixed height to accommodate taller footers
      style={{ minHeight: "600px" }}
    >
      {/* White curtain that covers the footer with responsive rounded corners */}
      <motion.div
        style={{ y: curtainY }}
        className={`absolute top-0 left-0 w-full h-full z-40 curtain-overlay rounded-3xl ${
          isAboutUsPage
            ? "bg-white"
            : "bg-white"
        }`}
      />

      {/* Footer content positioned behind the curtain - allow it to expand naturally */}
      <div className="absolute top-0 left-0 w-full z-30 min-h-full">
        {children}
      </div>
    </div>
  );
}
