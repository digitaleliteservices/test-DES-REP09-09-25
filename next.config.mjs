/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
  // trailingSlash: true, 
  // 👈 Important
};

export default nextConfig;
