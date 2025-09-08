"use client";

import Link from "next/link";
import Image from "next/image";
import desLogo from "../../../public/assets/DES_LOGO4.png";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaArrowUp,
  FaArrowDown,
  FaShareNodes,
  FaXmark,
} from "react-icons/fa6";
import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isSocialOpen, setIsSocialOpen] = useState(true);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2100) {
        // Show button if scrolled more than 100px down
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Check scroll position on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showTop && (
        <div className="fixed bottom-[40px] left-2/2 px-10 transform -translate-x-2/2 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-gradient-to-br from-[#a8b5ff] to-[#1f3ff5] text-orange-300 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            title="Scroll to Top"
          >
            <FaArrowUp className="text-xl" />
          </button>
        </div>
      )}
      {/* Vertical Floating Social Bar */}
      <div className="fixed bottom-6 left-10 z-50 flex flex-col items-center space-y-3">
        {/* Social Icons */}
        {[
          {
            href: "https://www.facebook.com/profile.php?id=61578403771896",
            icon: <FaFacebookF />,
            bg: "bg-white",
            text: "text-blue-600",
            hover: "hover:bg-blue-600 hover:text-white",
          },
          {
            href: "https://www.instagram.com/digital_elite_services",
            icon: <FaInstagram />,
            bg: "bg-white",
            text: "text-pink-600",
            hover:
              "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-600 hover:to-purple-600 hover:text-white",
          },
          {
            href: "https://x.com/_DigitalElite_",
            icon: <FaXTwitter />,
            bg: "bg-white",
            text: "text-black",
            hover: "hover:bg-black hover:text-white",
          },
          {
            href: "https://www.youtube.com/@DigitalEliteServices/shorts",
            icon: <FaYoutube />,
            bg: "bg-white",
            text: "text-red-600",
            hover: "hover:bg-red-600 hover:text-white",
          },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative ${
              isSocialOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }
    rounded-full shadow-lg p-3 ${item.bg} ${item.text}
    transform hover:scale-110 hover:shadow-2xl ${item.hover}
    transition-all duration-500 ease-in-out`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {item.icon}
          </a>
        ))}
        {/* Toggle Button */}
        <button
          onClick={() => setIsSocialOpen(!isSocialOpen)}
          className={`${
            isSocialOpen
              ? "bg-yellow-600 text-gray-800"
              : "bg-gradient-to-br from-[#0a0f2c] to-[#18225e] text-white"
          } p-2 rounded-full shadow-xl flex items-center justify-center
          transition-all duration-500 ease-in-out
          hover:scale-110 hover:shadow-2xl
          ${isSocialOpen ? "rotate-180" : "rotate-0"}`}
        >
          {isSocialOpen ? (
            <FaXmark className="text-2xl transition-transform duration-500" />
          ) : (
            <FaShareNodes className="text-2xl transition-transform duration-500" />
          )}
        </button>
      </div>

      <footer className="relative overflow-hidden text-white">
        {/* Background video */}
        <div className="absolute inset-0 -z-20">
          <video
            // src="/assets/footer_video.webm"
            src="/assets/hero-video19.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Readability overlays (top vignette + brand gradient wash) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,7,18,.6),transparent_40%)]" />
          <div className="absolute inset-0 mix-blend-screen opacity-70 bg-[radial-gradient(80%_70%_at_20%_100%,rgba(6,182,212,.35),transparent),radial-gradient(70%_60%_at_80%_100%,rgba(59,130,246,.30),transparent),radial-gradient(90%_80%_at_50%_-20%,rgba(245,158,11,.32),transparent)]" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          {/* Logo + brand */}
          <Link
            href="/"
            className="inline-flex flex-col items-center gap-3 rounded-2xl px-4 py-2 ring-1 ring-white/10 bg-black/20 backdrop-blur-md hover:bg-black/25 transition"
          >
            <div className="flex items-center gap-3">
              <Image
                src={desLogo}
                alt="Digital Elite Services Logo"
                width={44}
                height={44}
                className="rounded-md"
                priority
              />
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight leading-none">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-amber-300 bg-clip-text text-transparent">
                  Digital Elite Services
                </span>
              </span>
            </div>

            {/* Tagline */}
            <span className="mt-2 text-sm sm:text-base font-medium text-white/80">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">
                Turning Ambitions into Seamless Digital Success Today
              </span>
            </span>
          </Link>

          {/* Divider */}
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400/90 rounded-full" />

          {/* Address & Contact Info */}
          <div className="mt-8 md:mt-10 mx-auto max-w-3xl space-y-2 text-[15px] sm:text-base leading-relaxed text-white/85">
            <p className="font-medium leading-relaxed">
              No 35 A, Kowdi, 2nd Floor, 1st Main Road, <br />
              Chiranjeevi Layout, Hebbal, Kempapura, <br />
              Bengaluru – 560024
            </p>

            <p className="text-white/75">
              Email:{" "}
              <a
                href="mailto:info@digitaleliteservices.in"
                className="underline underline-offset-4 decoration-white/40 hover:decoration-white transition"
              >
                info@digitaleliteservices.in
              </a>
            </p>
            <p className="text-white/75">
              Phone:{" "}
              <a
                href="tel:+916366930174"
                className="underline underline-offset-4 decoration-white/40 hover:decoration-white transition"
              >
                +91 6366930174
              </a>
            </p>
          </div>

          {/* Action pills */}
          <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full">
            <Link
              href="/privacy-policy"
              className="group relative w-full md:w-auto"
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 opacity-90 blur-[6px] transition duration-300 group-hover:blur-[10px]" />
              <span className="relative inline-flex items-center gap-2 rounded-2xl px-5 h-12 bg-black/35 backdrop-blur-md ring-1 ring-white/15 hover:ring-white/25 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5A5.25 5.25 0 006.75 6.75v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3A5.25 5.25 0 0012 1.5zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold tracking-wide">
                  Privacy Policy
                </span>
              </span>
            </Link>

            <Link
              href="/terms-conditions"
              className="group relative w-full md:w-auto"
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 opacity-90 blur-[6px] transition duration-300 group-hover:blur-[10px]" />
              <span className="relative inline-flex items-center gap-2 rounded-2xl px-5 h-12 bg-black/35 backdrop-blur-md ring-1 ring-white/15 hover:ring-white/25 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5.625 1.5C4.59 1.5 3.75 2.34 3.75 3.375v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875A1.875 1.875 0 0112.75 7.125V5.25A3.75 3.75 0 009 1.5H5.625z" />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                <span className="text-sm font-semibold tracking-wide">
                  Terms &amp; Conditions
                </span>
              </span>
            </Link>
          </div>

          {/* Nav */}
          <nav className="mt-8 text-xs sm:text-sm text-white/70">
            <ul className="flex flex-wrap items-center justify-center gap-3">
              <li>
                <Link
                  href="/our-services"
                  className="hover:text-white transition"
                >
                  Services
                </Link>
              </li>
              <span className="text-white/30">•</span>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="mt-10 text-center text-[13px] sm:text-sm text-white/65">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">Digital Elite Services</span> — All
            rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
