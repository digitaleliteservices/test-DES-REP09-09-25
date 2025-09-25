"use client";
import { useState, useEffect } from "react";
import Loader from "../_components/loader/page";
import SplashCursor from "@/components/SplashCursor";
import SocialMediaIcons from "../socialMediaIcons/socialMediaIcons";
const {
  default: PrivacyPolicyComp,
} = require("../_components/privacyPolicyComp/page");
const { default: Footer } = require("../footer/page");
const { default: Navbar } = require("../navbar/page");

const PrivacyPolicy = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
      <SplashCursor/>
      <Navbar />
      <PrivacyPolicyComp />
      <SocialMediaIcons/>
      {/* <Footer /> */}
    </div>
  );
};

export default PrivacyPolicy;
