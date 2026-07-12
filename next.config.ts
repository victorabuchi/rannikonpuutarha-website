import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: ["10.188.27.247"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
