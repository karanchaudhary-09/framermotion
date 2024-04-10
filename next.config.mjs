/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'],
    },
};

export default nextConfig;
