import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  cacheOnNavigation: true,
  reloadOnOnline: true,
  // disable: process.env.NODE_ENV === "development",
  disable: false,
});

const nextConfig: NextConfig = {
  // config options here
  turbopack: {}, // Silence webpack/Turbopack warning
};

export default withSerwist(nextConfig);


