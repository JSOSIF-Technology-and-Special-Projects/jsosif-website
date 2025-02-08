import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
        config.resolve.fallback = {
            fs: false,
            net: false,
            dns: false,
            tls: false,
            child_process: false,
        };
    }
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    return config;
},
  env:{
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  }
};

export default nextConfig;

