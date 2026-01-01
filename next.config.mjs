/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    output: "export",
  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio/",
    images: {
    unoptimized: true, // مهم جدًا مع GitHub Pages
  },
};

export default nextConfig;
