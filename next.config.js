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
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://sales.app.erxes.io/gateway",
    NEXT_PUBLIC_WS_DOMAIN: "ws://localhost:8080/graphql/",

    NEXT_PUBLIC_POS_TOKEN: "L1OQRxY65cWnx51WCdxum3s44egupVxE",
    NEXT_PUBLIC_CP_ID: "Qgt_KWLrYydJot4cfiDrf",
    NEXT_PUBLIC_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IkVjb21tZXJjZSIsImNyZWF0ZWRBdCI6IjIwMjUtMDMtMTBUMDk6MzM6NTguNzcwWiIsInVzZXJHcm91cElkIjoiczR4NjlIMS1wb3U3YkhIYjl0ZmFpIiwiZXhwaXJlRGF0ZSI6IjIwODYtMDgtMTBUMDQ6MTY6NTIuNzk4WiIsIm5vRXhwaXJlIjpmYWxzZSwiYWxsb3dBbGxQZXJtaXNzaW9uIjpmYWxzZSwiX2lkIjoiRVBRQmVUdzFVTGtILTQxVjg4cEZwIiwiX192IjowfSwiaWF0IjoxNzQxNzUzMDI1LCJleHAiOjU0MjE1NDQ0Mzh9.-Yn9x29Lfparlar_5aDw1hpNjpP9Bu3PXUqtx9I89Sg",
  },
};

module.exports = nextConfig;
