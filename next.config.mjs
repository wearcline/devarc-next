/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    // Vercel deployment stability
    swcMinify: true,
    reactStrictMode: true,
};

export default nextConfig;
