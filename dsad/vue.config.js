const { defineConfig } = require("@vue/cli-service");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    //警告 webpack 的性能提示
    performance: {
      hints: "warning",
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith(".js");
      },
    },
    devtool: "cheap-module-source-map",
    resolve: {
      alias: {
        // 设置@/的意义
        "@": resolve("src"),
        static: path.resolve("public/static"),
      },
    },
    devServer: {
      proxy: {
        "/api": {
          target: "http://122.9.164.197/merchant", //接口域名
          changeOrigin: true, //是否跨域
          ws: true, //是否代理 websockets
          secure: false, //是否https接口
          pathRewrite: {
            //路径重置
            "^/api": "",
          },
        },
      },
      https: false,
    },
  },
  lintOnSave: false,
});
