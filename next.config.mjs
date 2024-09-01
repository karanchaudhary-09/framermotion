/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcMinify: true,
    serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
