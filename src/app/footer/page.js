// components/Footer.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import desLogo from "../../../public/assets/DES_LOGO4.png";
import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          src="/assets/bgfooter4.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Readability overlays */}
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
        <div className="mt-8 md:mt-1 mx-auto max-w-[350px] space-y-1 text-[15px] sm:text-base leading-relaxed text-white/85 group">
          <p className="font-bold leading-relaxed transform transition-all duration-700 ease-out animate-fade-in-up hover:translate-x-2 hover:text-white cursor-default p-1 rounded-lg hover:bg-white/5 backdrop-blur-sm border border-transparent hover:border-white/10">
            No 35 A, Kowdi, 2nd Floor, 1st Main Road, <br />
            Chiranjeevi Layout, Hebbal, Kempapura, <br />
            Bengaluru – 560024
          </p>

          <p className="text-white/75 transform transition-all duration-700 ease-out animate-fade-in-up [animation-delay:200ms] hover:translate-x-2 hover:text-white/90 p-0 rounded-lg hover:bg-white/5 backdrop-blur-sm border border-transparent hover:border-white/10 font-bold">
            Email:{" "}
            <a
              href="mailto:info@digitaleliteservices.in"
              className="underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all duration-300 hover:text-white hover:scale-105 inline-block hover:shadow-lg hover:shadow-white/20 px-1 py-0.5 rounded hover:bg-white/10"
            >
              info@digitaleliteservices.in
            </a>
          </p>

          <p className="font-bold text-white/75 transform transition-all duration-700 ease-out animate-fade-in-up [animation-delay:400ms] hover:translate-x-2 hover:text-white/90 p-1 rounded-lg hover:bg-white/5 backdrop-blur-sm border border-transparent hover:border-white/10">
            Phone:{" "}
            <a
              href="tel:+916366930174"
              className="underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all duration-300 hover:text-white hover:scale-105 inline-block hover:shadow-lg hover:shadow-white/20 px-1 py-0.5 rounded hover:bg-white/10"
            >
              +91 6366930174
            </a>
          </p>
        </div>

        <div className="mt-10 md:mt-2 flex flex-col md:flex-row items-center justify-center gap-6 w-full">
          <Link
            href="/privacy-policy"
            className="group relative w-full md:w-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 opacity-90 blur-[6px] transition duration-300 group-hover:blur-[12px]" />
            <span className="relative inline-flex items-center gap-2 rounded-2xl px-6 h-12 bg-black/40 backdrop-blur-md ring-1 ring-white/15 hover:ring-white/30 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">
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
              <span className="text-sm font-semibold tracking-wide text-white">
                Privacy Policy
              </span>
            </span>
          </Link>

          <Link
            href="/terms-conditions"
            className="group relative w-full md:w-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 opacity-90 blur-[6px] transition duration-300 group-hover:blur-[12px]" />
            <span className="relative inline-flex items-center gap-2 rounded-2xl px-6 h-12 bg-black/40 backdrop-blur-md ring-1 ring-white/15 hover:ring-white/30 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5.625 1.5C4.59 1.5 3.75 2.34 3.75 3.375v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875A1.875 1.875 0 0112.75 7.125V5.25A3.75 3.75 0 009 1.5H5.625z" />
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>
              <span className="text-sm font-semibold tracking-wide text-white">
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
  );
};

export default Footer;
