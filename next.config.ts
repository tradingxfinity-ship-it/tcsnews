import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      {
        source: "/blog/garcia-brothers-million-dollar-card-show-scandal",
        destination: "/blog/backdoor-syndicate-million-dollar-trading-card-scam",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
