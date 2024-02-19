/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "datocms-assets.com",
        pathname: "**",
        port: "",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/es",
        permanent: false,
      },
    ];
  },
  
};

export default nextConfig;
