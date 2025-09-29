// app/about/page.js
import { useState, useEffect } from "react";
import Loader from "../_components/loader/page";
import AboutUsComp from "../_components/aboutUsComp/page";
import Navbar from "../navbar/page";
import SplashCursor from "@/components/SplashCursor";

// ✅ SEO Metadata (this replaces putting <title> and <meta> in JSX)
export const metadata = {
  title: "About Us - Digital Solutions & Branding Experts",
  description:
    "Learn about our mission and vision at Digital Elite Services. We provide innovative digital solutions, creative branding, web development, and marketing strategies to help businesses grow.",
  keywords:
    "digital solutions, branding, web development, marketing strategies, creative design, SEO, digital marketing, business growth, custom websites, UI/UX design",
  openGraph: {
    title: "About Us - Digital Elite Services",
    description:
      "Discover how we empower businesses with creative branding, web development, and tailored digital solutions to achieve measurable growth.",
    type: "website",
    url: "https://digitaleliteservices.in/about",
    images: ["/favicon.ico"], // replace with a real image for better SEO
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Digital Solutions & Branding Experts",
    description:
      "Explore our vision and mission at Digital Elite Services. We offer tailored solutions for web development, design, and marketing to drive growth and innovation.",
    images: ["/favicon.ico"],
  },
  alternates: {
    canonical: "https://digitaleliteservices.in/about",
  },
  other: {
    author: "Digital Elite Services",
  },
};

export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
      <SplashCursor />
      <Navbar />
      <AboutUsComp />
    </div>
  );
}


// "use client";

// import { useState, useEffect } from "react";
// import Loader from "../_components/loader/page";
// import AboutUsComp from "../_components/aboutUsComp/page";
// import Footer from "../footer/page";
// import Navbar from "../navbar/page";
// import SocialMediaIcons from "../socialMediaIcons/socialMediaIcons";
// import Spiral from "@/spiral/page";
// import SplashCursor from "@/components/SplashCursor";

// const AboutUs = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <Loader />;
//   return (
//     <div>
//       <SplashCursor/>
//       <Navbar />
//       <AboutUsComp />
//     </div>
//   );
// };

// export default AboutUs;
