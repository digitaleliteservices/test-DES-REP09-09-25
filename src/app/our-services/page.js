// "use client";

// import { useState, useEffect } from "react";
// import Loader from "../_components/loader/page";
export const metadata = {
  title: "Our Services | Digital Elite Services - Web Development & Digital Marketing",
  description:
    "Explore the comprehensive digital solutions offered by Digital Elite Services, including web development, SEO, social media marketing, and branding services in Bangalore.",
  keywords: [
    "Web Development Services",
    "SEO Services Bangalore",
    "Digital Marketing Solutions",
    "Branding Services",
    "Social Media Management",
  ],
  openGraph: {
    title: "Our Services | Digital Elite Services",
    description:
      "Professional web, SEO, branding, and digital marketing services designed to help your business thrive.",
    url: "https://digitaleliteservices.in/our-services",
    siteName: "Digital Elite Services",
    images: [
      {
        url: "https://digitaleliteservices.in/og-our-services.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Elite Services Our Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Digital Elite Services",
    description:
      "Discover our expert web development, SEO and marketing solutions built for business growth.",
    images: ["https://digitaleliteservices.in/og-our-services.jpg"],
    site: "@digitalelite",
  },
  alternates: {
    canonical: "https://digitaleliteservices.in/our-services",
  },
  robots: "index,follow",
};

import OurServicesComp from "../_components/aboutUsComp/ourServicesComp/page";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import SocialMediaIcons from "../socialMediaIcons/socialMediaIcons";
import SplashCursor from "@/components/SplashCursor";

const OurServices = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) return <Loader />;
  return (
    <div>
      <SplashCursor/>
      <Navbar />
      <OurServicesComp />
      <SocialMediaIcons/>
      <Footer />
    </div>
  );
};

export default OurServices;
