"use client";

import { useState, useEffect, useRef } from "react";
import Loader from "../_components/loader/page";
import Spiral from "@/spiral/page";
import Footer from "../footer/page";
import Hero from "../hero/page";
import Navbar from "../navbar/page";
import Services from "../services/page";
import WhoWeWorkWith from "../whowework/page";
import WhyChooseUs from "../whychooseus/page";
import { time } from "framer-motion";
import HomeTestimonials from "../testimonials/clientTestimonial";
import OurProcess from "../ourprocess/ourprocess";
import CurtainFooter from "../curtainraiser/curtainRaiser";
import SocialMediaIcons from "../socialMediaIcons/socialMediaIcons";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { WarpBackground } from "@/components/ui/warp-background";
import OurClients from "../ourclients/page";
import Essence from "../essence/page";
import SplashCursor from "@/components/SplashCursor";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

import PostLoaderImage from "../postloaderimage/postloaderimage";


export const metadata = {
  title:
    "Digital Elite Services | Web Development, Graphic Design & Digital Marketing",
  description:
    "Digital Elite Services offers expert web development, graphic design, and digital marketing solutions to grow your business effectively.",
  keywords:
    "Web development, Graphic design, Digital marketing, SEO services, Social media marketing, E-commerce solutions, Branding services, Online advertising",
  openGraph: {
    title: "Digital Elite Services - Your All In One Digital Partner",
    description:
      "Professional web development, graphic design, and digital marketing services to boost your brand's online presence.",
    type: "website",
    url: "https://digitaleliteservices.in/",
    images: ["/favicon.ico"], // replace with real homepage banner image
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Elite Services - Web Development & Marketing Experts",
    description:
      "Grow your business with expert solutions in web development, design, and digital marketing from Digital Elite Services.",
    images: ["/favicon.ico"],
  },
  alternates: {
    canonical: "https://digitaleliteservices.in",
  },
  other: {
    author: "Digital Elite Services",
  },
};
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showPostImage, setShowPostImage] = useState(false);
  const mountedRef = useRef(false);

  const EXPIRY_DAYS = 7;
  const STORAGE_KEY = "dussehra_modal_shown";

  const shouldShowModal = () => {
    if (typeof window === "undefined") return false;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return true;
      if (!EXPIRY_DAYS) return false;
      const parsed = JSON.parse(raw);
      const ts = parsed?.ts || 0;
      const ageMs = Date.now() - ts;
      const expiryMs = EXPIRY_DAYS * 24 * 60 * 60 * 1000;
      return ageMs > expiryMs;
    } catch (e) {
      return true;
    }
  };

  const markModalShown = () => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ts: Date.now() }));
    } catch (e) {}
  };

  useEffect(() => {
    mountedRef.current = true;
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(timer);
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (loading) return;
    if (!mountedRef.current) return;

    if (shouldShowModal()) {
      const t = setTimeout(() => {
        setShowPostImage(true);
        markModalShown();
      }, 120);
      return () => clearTimeout(t);
    }
  }, [loading]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowPostImage(false);
    };
    if (showPostImage) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showPostImage]);

  if (loading) return <Loader />;

  return (
    <div className="relative">
      <SplashCursor />
      <Navbar />
      <WarpBackground>
        <Hero />
      </WarpBackground>

      <Essence />
      <Services />
      <WhoWeWorkWith />
      <HomeTestimonials />
      <WhyChooseUs />
      <SocialMediaIcons />

      {showPostImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 pointer-events-none">
          {/* backdrop (click-through so scroll works) */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none" />

          {/* modal content (clickable) */}
          <div
            className="relative z-50 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <PostLoaderImage
              title="Happy Dussehra!"
              message="Wishing you a joyful and prosperous Dussehra from the whole team. May your celebrations be bright and your projects shine."
              ctaText="Explore Offers"
              secondaryText="Maybe later"
              imgSrc="/assets/dussera3.jpg"
              onClose={() => setShowPostImage(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
