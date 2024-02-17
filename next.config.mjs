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
  // i18n: {
  //   locales: ["es", "en"],
  //   defaultLocale: "en",
  // },
};

export default nextConfig;
