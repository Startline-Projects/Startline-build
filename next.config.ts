import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/chairly', destination: '/chairly.html' },
      { source: '/alhikma', destination: '/alhikma.html' },
      { source: '/muslim-guider', destination: '/muslim-guider.html' },
      { source: '/meta-health', destination: '/meta-health.html' },
      { source: '/atlaw-intake1', destination: '/atlaw-intake1.html' },
      { source: '/atlaw-intake2', destination: '/atlaw-intake2.html' },
    ]
  },
};

export default nextConfig;
