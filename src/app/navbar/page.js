"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 👈 import this
import { Menu, X } from "lucide-react";
import desLogo from "../../../public/assets/DES_LOGO4.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-services", label: "Services" },
  ];

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-11/12 transition-all duration-500 ease-in-out">
      {/* Glow bands */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-2 left-3 right-3 h-[8px] rounded-full
        bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 blur-md opacity-90 z-0"
      />
      <div
        aria-hidden
        className="pointer-events-none  absolute -bottom-2 left-3 right-3 h-[8px] rounded-full
        bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 blur-md opacity-90 z-0"
      />

      {/* Card */}
      <div className="relative bg-white border- border-amber-400 shadow-md rounded-2xl font-sans z-10">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Left: Logo */}
          <div className="flex items-center ">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={desLogo}
                alt="Digital Elite Services Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-lg sm:text-xl font-semibold tracking-tight text-[#1b1b4b]">
                Digital Elite Services
              </span>
            </Link>
          </div>

          <div className="hidden min-[1025px]:flex flex-1 justify-center transition-all duration-500 space-x-12 text-[13px] text-[#1b1b4b] font-medium tracking-wide">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`
        relative transition-colors duration-300 ease-in-out
        ${
          pathname === href
            ? `
              text-blue-500 
              before:absolute before:-top-5 before:left-0 before:right-0 before:h-[3px] 
              before:bg-gradient-to-r before:from-purple-500 before:to-orange-500
              before:opacity-100 before:transition-opacity before:duration-300 before:ease-in-out
              before:will-change-[opacity,transform]

              after:absolute after:-bottom-5 after:left-0 after:right-0 after:h-[3px]
              after:bg-gradient-to-r after:from-purple-500 after:to-orange-500
              after:opacity-100 after:transition-opacity after:duration-300 after:ease-in-out
              after:will-change-[opacity,transform]
            `
            : `
              text-[#1b1b4b] hover:text-[#4f46e5]
              before:opacity-0 hover:before:opacity-100
              after:opacity-0 hover:after:opacity-100
              before:transition-opacity before:duration-300 before:ease-in-out
              after:transition-opacity after:duration-300 after:ease-in-out
              before:will-change-[opacity,transform]
              after:will-change-[opacity,transform]
            `
        }
      `}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden min-[1025px]:flex items-center gap-x-3">
            <Link
              href="/contact"
              className="w-40 text-center py-2 md:py-3 rounded-xl text-[14px] md:text-[15px] font-semibold tracking-wide text-white
              bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
            >
              Let’s talk
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="block min-[1025px]:hidden text-[#1b1b4b] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white px-9 py-6 flex flex-col space-y-6 rounded-b-2xl shadow-md min-[1025px]:hidden">
            <Link
              href="/about-us"
              className="text-[#1b1b4b] font-medium hover:text-[#4f46e5]"
            >
              About Us
            </Link>
            <Link
              href="/our-services"
              className="text-[#1b1b4b] font-medium hover:text-[#4f46e5]"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-center py-3 rounded-xl text-[15px] font-semibold tracking-wide text-white
              bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
            >
              Let’s talk
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
