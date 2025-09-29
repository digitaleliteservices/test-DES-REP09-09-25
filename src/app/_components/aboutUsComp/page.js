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
