"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../../../public/assets/DES_LOGO4.png";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Revolving Circle */}
        <div className="absolute w-56 h-56 rounded-full animate-spin-slow border-ring"></div>

        {/* Logo */}
        <Image src={logo} alt="logo" className="w-28 h-28 relative z-10" />
      </div>

      <style jsx>{`
        .bg-gradient {
          background: linear-gradient(
            135deg,
            #ff7e00,
            #ffb700,
            #2196f3,
            #00eaff
          );
          background-size: 300% 300%;
          animation: gradientShift 6s ease infinite;
        }

        .border-ring {
          background: conic-gradient(
            from 0deg,
            #ff7e00,
            #ffb700,
            #2196f3,
            #00eaff,
            #ff7e00
          );
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 6px),
            black 0
          );
          mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 6px),
            black 0
          );
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
