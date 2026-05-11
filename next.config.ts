import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.manojganesan.dev",
          },
        ],
        destination: "https://manojganesan.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
