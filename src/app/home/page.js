"use client";

import { useState, useEffect } from "react";
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
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="relative">
      <SplashCursor/>
      <Navbar />
      {/* <Hero /> */}
      <WarpBackground>
        <Hero />
      </WarpBackground>
      <Essence />
      {/* <WarpBackground>
        <div className="w-80">
          <p>Warp Background</p>
          <p>This is a component that creates a warp background effect.</p>
        </div>
      </WarpBackground> */}
      <Services />
      <WhoWeWorkWith />
      {/* <WhoWeWorkWith /> */}
      {/* <OurProcess/> */}
      {/* <OurClients/> */}
      {/* <Spiral /> */}
      <HomeTestimonials />
      <WhyChooseUs />
      <SocialMediaIcons />
      {/* <div className="h-20"></div>

      <CurtainFooter curtainHeight={600}>
        <Footer />
      </CurtainFooter> */}
    </div>
  );
}
