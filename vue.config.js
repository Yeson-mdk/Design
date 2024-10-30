const { defineConfig } = require('@vue/cli-service');


module.exports = defineConfig({
  transpileDependencies: true, // 确保依赖项可以被转译
  lintOnSave: false, // 如果不需要 ESLint 检查，可以关闭
  publicPath: './',

  // 如果需要添加其他 webpack 配置，可以使用以下选项
  configureWebpack: {
    // 自定义 webpack 配置
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src'), // 设置 @ 符号为 src 目录
      },
    },
  },

  chainWebpack: config => {
    // 如果需要对 webpack 配置进行更细致的控制，可以使用 chainWebpack
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // 修改 vue-loader 选项
        return options;
      });
  },

  devServer: {
    port: 8888, // 你希望的开发服务器端口
    open: true, // 自动打开浏览器
  },
});