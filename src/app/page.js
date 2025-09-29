import Image from "next/image";
import Home from "../app/home/page";


export const metadata = {
  title: "Digital Elite Services | Home",
  description:
    "Welcome to Digital Elite Services. We provide social media marketing, SEO, and professional web development solutions in Bangalore.",
  keywords: [
    "Digital Elite Services",
    "Social Media Marketing",
    "SEO",
    "Web Development",
    "Bangalore Digital Agency",
  ],
  openGraph: {
    title: "Digital Elite Services | Home",
    description:
      "Boost your business with our expert digital marketing, SEO, and web development services.",
    url: "https://digitaleliteservices.in/",
    siteName: "Digital Elite Services",
    images: [
      {
        url: "https://digitaleliteservices.in/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Elite Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function index() {
  return (
    <div>
      <Home />
    </div>
  );
}
