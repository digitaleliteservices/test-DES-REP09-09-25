// components/SocialMediaIcons.jsx
"use client";

import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaArrowUp,
  FaShareNodes,
  FaXmark,
} from "react-icons/fa6";

const SocialMediaIcons = () => {
  const [isSocialOpen, setIsSocialOpen] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2100) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll to Top Button */}
      {showTop && (
        <div className="fixed bottom-10 right-10 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-gradient-to-br from-[#a8b5ff] to-[#1f3ff5] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
            title="Scroll to Top"
          >
            <FaArrowUp className="text-xl" />
          </button>
        </div>
      )}

      {/* Vertical Floating Social Bar */}
      <div className="fixed bottom-6 left-10 z-50 flex flex-col items-center space-y-3">
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
    </>
  );
};

export default SocialMediaIcons;
