"use client";

import WhatSetsUsApart from "@/app/whatsetusapart/page";
import HeroSection from "./heroSection/heroSection";
import MissionVisionSection from "./missionVision/missionVision";
import ServicesSection from "./serviceSection/serviceSection";
import AnimatedBullets from "./animatedBullets/animatedBullets";
import EnhancedOrbitingAnimation from "./enhancedOrbitingAnimation/enhancedOrbitingAnimation";
import SocialMediaIcons from "@/app/socialMediaIcons/socialMediaIcons";
import Spiral from "@/spiral/page";
import EliteFamily from "./eliteFamily/eliteFamily";
import OurExperts from "./ourExperts/ourExperts";
import PreWhatWeOffer from "./preWeOffer/page";

export const metadata = {
  title: "About Us - Digital Solutions & Branding Experts",
  description:
    "Learn about our mission and vision at Digital Elite Services. We provide innovative digital solutions, creative branding, web development, and marketing strategies to help businesses grow.",
  keywords:
    "digital solutions, branding, web development, marketing strategies, creative design, SEO, digital marketing, business growth, custom websites, UI/UX design",
  openGraph: {
    title: "About Us - Digital Elite Services",
    description:
      "Discover how we empower businesses with creative branding, web development, and tailored digital solutions to achieve measurable growth.",
    type: "website",
    url: "https://digitaleliteservices.in/about",
    images: ["/favicon.ico"], // replace with a real image for better SEO
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Digital Solutions & Branding Experts",
    description:
      "Explore our vision and mission at Digital Elite Services. We offer tailored solutions for web development, design, and marketing to drive growth and innovation.",
    images: ["/favicon.ico"],
  },
  alternates: {
    canonical: "https://digitaleliteservices.in/about",
  },
  other: {
    author: "Digital Elite Services",
  },
};
const AboutUsComp = () => {
  
  return (
    <>
      <HeroSection />
      <PreWhatWeOffer/>
      <ServicesSection />
      {/* <EnhancedOrbitingAnimation /> */}
      {/* <AnimatedBullets /> */}
      <MissionVisionSection />
      <Spiral />
      <WhatSetsUsApart />
      <EliteFamily />
      <OurExperts />
      <SocialMediaIcons />
    </>
  );
};

export default AboutUsComp;
