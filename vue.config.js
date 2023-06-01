module.exports = {
  // 这个值也可以被设置为相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径。
  publicPath: './',
  // 输出文件目录
  outputDir: 'build/vue-build',
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       //将www.exaple.com印射为/apis
  //       target: 'https://desktop.doniai.com', // 接口域名
  //       secure: true, // 如果是https接口，需要配置这个参数
  //       ws: true,
  //       changeOrigin: true, //是否跨域
  //       pathRewrite: {
  //         '^/api': '', //需要rewrite的,
  //       },
  //     },
  //   },
  // },
}
