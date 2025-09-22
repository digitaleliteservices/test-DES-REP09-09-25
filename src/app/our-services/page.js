"use client";

import { useState, useEffect } from "react";
import Loader from "../_components/loader/page";
import OurServicesComp from "../_components/aboutUsComp/ourServicesComp/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import SocialMediaIcons from "../socialMediaIcons/socialMediaIcons";

const OurServices = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
      <Navbar />
      <OurServicesComp />
      <SocialMediaIcons/>
      <Footer />
    </div>
  );
};

export default OurServices;
