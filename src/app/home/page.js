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

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      {/* <WhoWeWorkWith /> */}
      <Spiral />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
