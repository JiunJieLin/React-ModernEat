/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.healingdaily.com.tw",
      "hips.hearstapps.com",
      "safood.tw",
      "image-cdn-flare.qdm.cloud",
    ],
  },
};

module.exports = nextConfig;
