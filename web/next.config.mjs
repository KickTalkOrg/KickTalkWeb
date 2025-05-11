/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/download",
        destination: "https://api.kicktalk.app/downloads/KickTalkBeta.exe",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
