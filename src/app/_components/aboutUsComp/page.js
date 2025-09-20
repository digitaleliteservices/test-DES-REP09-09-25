"use client";

import WhatSetsUsApart from "@/app/whatsetusapart/page";
import HeroSection from "./heroSection/heroSection";
import MissionVisionSection from "./missionVision/missionVision";
import ServicesSection from "./serviceSection/serviceSection";
import AnimatedBullets from "./animatedBullets/animatedBullets";
import EnhancedOrbitingAnimation from "./enhancedOrbitingAnimation/enhancedOrbitingAnimation";
import SocialMediaIcons from "@/app/socialMediaIcons/socialMediaIcons";

const AboutUsComp = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <EnhancedOrbitingAnimation />
      <AnimatedBullets />
      <MissionVisionSection />
      <WhatSetsUsApart />
      <SocialMediaIcons />
    </>
  );
};

export default AboutUsComp;
