/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  redirects: async () => {
    return [
      {
        source: "/download",
        destination: "/changelogs?version=latest",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
