/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    images: {
        domains: ['cdn.discordapp.com'],
    },
};

export default nextConfig;
