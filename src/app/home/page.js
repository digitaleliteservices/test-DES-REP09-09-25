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
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      {/* <WhoWeWorkWith /> */}
      {/* <OurProcess/> */}
      <Spiral />
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
