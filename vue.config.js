module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: false,
  runtimeCompiler: false,
  chainWebpack: () => { },
  configureWebpack: () => { },
  productionSourceMap: true,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {},
    modules: false
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8081,
    https: false,
    hotOnly: false,
    /*  proxy: {
       '/#': {
         // 跨域域名
         target: 'http://localhost:8081',
         ws: true,
         // 是否跨域
         changeOrigin: true,
         pathRewrite: {
           '^/#': '/public'
         }
       }
     }, */
    before: app => { }
  },
  pluginOptions: {
    // ...
  }
}