"use client";

import { useState, useEffect } from "react";
import Loader from "../_components/loader/page";
import OurContact from "../_components/aboutUsComp/ourContact/page";
import Footer from "../footer/page";

const { default: Navbar } = require("../navbar/page");

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
      <Navbar />
      <OurContact />
      <Footer />
    </div>
  );
};

export default Contact;
