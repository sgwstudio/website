/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
