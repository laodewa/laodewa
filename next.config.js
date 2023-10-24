/*
 * @Author: goupeng 2953854684@qq.com
 * @Date: 2023-09-05 22:03:47
 * @LastEditors: goupeng 2953854684@qq.com
 * @LastEditTime: 2023-09-11 23:20:35
 * @FilePath: \my-app\next.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')
const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);
module.exports = withTM({
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  distDir: process.env.NEXT_PUBLIC_DISTDIR ? process.env.NEXT_PUBLIC_DISTDIR : '.next',
  // images: {
  //   domains: ['m.673.com', '673.com', 'img2.taoshouyou.com', 'imgtest.673.com', 'img.673.com', 'img-test.taoshouyou.com', 'app.673.com'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.673.com',
      },
      {
        protocol: 'https',
        hostname: '673.com',
      },
      {
        protocol: 'https',
        hostname: 'img2.taoshouyou.com',
      },
      {
        protocol: 'http',
        hostname: 'imgtest.673.com',
      },
      {
        protocol: 'https',
        hostname: 'img.673.com',
      },
      {
        protocol: 'https',
        hostname: 'img-test.taoshouyou.com',
      },
      {
        protocol: 'https',
        hostname: 'app.673.com',
      },
    ],
  },

});
