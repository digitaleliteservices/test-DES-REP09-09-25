// 'use client';
// app/about/page.js
// import { useState, useEffect } from "react";
// import Loader from "../_components/loader/page";
import AboutUsComp from "../_components/aboutUsComp/page";
import Navbar from "../navbar/page";
import SplashCursor from "@/components/SplashCursor";

// ✅ SEO Metadata (this replaces putting <title> and <meta> in JSX)
export const metadata = {
  title: "About Us – Digital Elite Services | Expert Web Development & Marketing",
  description:
    "Discover Digital Elite Services’ story, mission, and expert team providing web development & marketing services in Bangalore.",
  keywords: [
    "About Digital Elite Services",
    "Web Development Bangalore",
    "Digital Marketing",
    "SEO Services",
    "Team",
  ],
  openGraph: {
    title: "About Us – Digital Elite Services",
    description: "Meet the team providing digital marketing & development services.",
    url: "https://digitaleliteservices.in/about-us",
    siteName: "Digital Elite Services",
    images: [
      {
        url: "https://digitaleliteservices.in/og-aboutus.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Elite Services About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "https://digitaleliteservices.in/about-us" },
  robots: "index,follow",
};
export default function AboutUs() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) return <Loader />;
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
