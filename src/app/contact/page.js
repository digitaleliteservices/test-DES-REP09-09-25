// "use client";

// import { useState, useEffect } from "react";
import Loader from "../_components/loader/page";
import OurContact from "../_components/aboutUsComp/ourContact/page";
import Footer from "../footer/page";

const { default: Navbar } = require("../navbar/page");
export const metadata = {
  title: "Contact Us | Digital Elite Services - Web Development & SEO Bangalore",
  description:
    "Get in touch with Digital Elite Services for professional web development, SEO, and digital marketing solutions in Bangalore. We’re here to help your business grow.",
  keywords: [
    "Contact Digital Elite Services",
    "Web Development Bangalore",
    "Digital Marketing Contact",
    "SEO Services Bangalore",
    "Business Support",
  ],
  openGraph: {
    title: "Contact Us | Digital Elite Services",
    description:
      "Reach out to Digital Elite Services for expert digital marketing, SEO, and web development services.",
    url: "https://digitaleliteservices.in/contact",
    siteName: "Digital Elite Services",
    images: [
      {
        url: "https://digitaleliteservices.in/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Digital Elite Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Digital Elite Services",
    description:
      "Contact Digital Elite Services for exceptional SEO, web development, and marketing solutions.",
    images: ["https://digitaleliteservices.in/og-contact.jpg"],
    site: "@digitalelite",
  },
  alternates: {
    canonical: "https://digitaleliteservices.in/contact",
  },
  robots: "index,follow",
};
const Contact = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) return <Loader />;
  return (
    <div>
      <Navbar />
      <OurContact />
      <Footer />
    </div>
  );
};

export default Contact;
