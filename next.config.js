/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://os.zhdk.cloud.switch.ch/envicloud/chelsa/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
