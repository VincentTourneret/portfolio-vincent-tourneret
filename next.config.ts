import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Réduit les requêtes bloquantes : le CSS est inliné dans le HTML au lieu d’un <link>
  experimental: {
    inlineCss: true,
  },
  images: {
    // AVIF par défaut, WebP en fallback si le navigateur ne supporte pas AVIF
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
