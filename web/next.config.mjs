/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/download",
        destination: "https://api.kicktalk.app/downloads/KickTalkBetaTest.exe",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
