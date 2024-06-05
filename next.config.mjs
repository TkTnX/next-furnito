/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "grizly.club",
      },
    ],
  },
};

export default nextConfig;
