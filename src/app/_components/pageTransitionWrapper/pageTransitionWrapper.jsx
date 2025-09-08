"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // App Router requires workarounds, see below
import { usePathname } from "next/navigation";

export default function PageTransitionWrapper({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Note: Next.js 13 App Router does not have event listeners like useRouter from Pages Router.
  // For App Router, you can use 'usePathname' and 'useEffect' to trigger animation on pathname changes:

  const pathname = usePathname();

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => setIsTransitioning(false), 300); // animation duration in ms
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      {children}
    </div>
  );
}