/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcMinify: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
