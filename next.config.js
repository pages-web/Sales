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
    NEXT_PUBLIC_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6ImJ1ZCIsImNyZWF0ZWRBdCI6IjIwMjQtMTEtMjBUMDA6MDg6MzcuODg4WiIsInVzZXJHcm91cElkIjoiX3dPZGtDTTZwWHh4X0xNLUY0c3p4IiwiZXhwaXJlRGF0ZSI6IjIwMjQtMTItMjBUMDk6MjU6NTUuMDc4WiIsIm5vRXhwaXJlIjp0cnVlLCJhbGxvd0FsbFBlcm1pc3Npb24iOmZhbHNlLCJfaWQiOiJHaE9hY2pGQ3MwTjRlTVdzalJIUGEiLCJfX3YiOjB9LCJpYXQiOjE3MzIwOTQ3NjF9.KSN830uGCYiAPyYKOUhppirZSST9TOrQiiZKbkngDoo",
  },
};

module.exports = nextConfig;
