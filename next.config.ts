import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Also covers images and other files that can't carry a robots meta tag.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
