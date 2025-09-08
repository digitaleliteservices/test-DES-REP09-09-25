"use client";

import { useState, useEffect } from "react";
import Loader from "../_components/loader/page";
import AboutUsComp from "../_components/aboutUsComp/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
      <Navbar />
      <AboutUsComp />
      <Footer />
    </div>
  );
};

export default AboutUs;
