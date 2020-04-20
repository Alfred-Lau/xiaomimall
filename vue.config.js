module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack(api) {
    api.plugin('html').tap((args) => {
      args[0] = { ...args[0], title: '小米商城' };
      return args;
    });

    api.plugins.delete('prefetch');
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:9001',
        changeOrigin: true,
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
};
