import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/chairly', destination: '/chairly.html' },
      { source: '/alhikma', destination: '/alhikma.html' },
      { source: '/muslim-guider', destination: '/muslim-guider.html' },
      { source: '/meta-health', destination: '/meta-health.html' },
    ]
  },
};

export default nextConfig;
