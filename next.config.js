/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'dzlmtvodpyhetvektfuo.supabase.co' },
      { protocol: 'https', hostname: '**.vercel.app' },
    ],
  },
};
module.exports = nextConfig;
