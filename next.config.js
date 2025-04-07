/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // ✅ app 폴더 활성화
  },
  // ✅ 이거 추가해야 src/pages 인식
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

module.exports = nextConfig;
