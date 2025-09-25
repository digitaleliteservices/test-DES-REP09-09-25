"use client";

import { useState, useEffect } from "react";
import Loader from "../_components/loader/page";
import SplashCursor from "@/components/SplashCursor";
const {
  default: TermsAndConditionComponent,
} = require("../_components/termsAndConditionComp/page");
const { default: Footer } = require("../footer/page");
const { default: Navbar } = require("../navbar/page");

const TermsConditions = () => {
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
      <TermsAndConditionComponent />
      {/* <Footer /> */}
    </div>
  );
};

export default TermsConditions;
