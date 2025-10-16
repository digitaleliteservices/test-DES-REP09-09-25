import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Step 1: Build keyword string from your business categories/services
const keywords =
  "Social Media Marketing Company in Bangalore, Digital marketing services for small Business, Web Development, Graphic Design Agency, Branding Services, Online Advertising Services, SEO Services, E-commerce Marketing, Digital Elite Services, PPC agency, Website Design Company near me, Local digital marketing services, Google My Business services, Email marketing, Lead generation";

// Step 2: Expanded metadata block
export const metadata = {
  title:
    "Digital Elite Services | Social Media Marketing, SEO, Web Development Bangalore",
  description:
    "Digital Elite Services delivers professional web development, social media marketing, and SEO solutions for businesses in Bangalore and beyond.",
  keywords,
  openGraph: {
    title: "Digital Elite Services | Digital Marketing & Web Development",
    description:
      "Your one-stop solution for web development, social media marketing, graphic design, and SEO in Bangalore.",
    url: "https://digitaleliteservices.in/",
    type: "website",
    images: ["https://yourdomain.com/favicon.ico"],
    locale: "en_IN",
    siteName: "Digital Elite Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Elite Services | Digital Marketing Agency",
    description:
      "Expert digital marketing, web design, and SEO services for business growth.",
    images: ["https://yourdomain.com/favicon.ico"],
    site: "@digitalelite",
  },
  alternates: {
    canonical: "https://digitaleliteservices.in",
  },
  robots: "index,follow",
  other: {
    author: "Digital Elite Services",
  },
};

// viewport stays as-is
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Facebook Meta Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1127306535937302');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ noscript fallback for non-JS browsers */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1127306535937302&ev=PageView&noscript=1"
            alt="fb-pixel"
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
