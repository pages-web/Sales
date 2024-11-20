/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "**.erxes.io",
      },
      {
        protocol: "https",
        hostname: "erxes.io",
      },
      {
        protocol: "https",
        hostname: "celimax.us",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://bud.app.erxes.io/gateway",
    NEXT_PUBLIC_WS_DOMAIN: "ws://localhost:4000/graphql/",
    NEXT_PUBLIC_POS_TOKEN: "zMSzfvPtLPDbDxIwmDEoPkIQ6CVOyMF2",
    NEXT_PUBLIC_CP_ID: "xq4wDCIdkNV6fw76f9Ek-",
  },
};

module.exports = nextConfig;
