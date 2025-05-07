/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/download',
            destination: 'https://kick-talk-beta.replit.app/KickTalkBetaTest.exe',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
