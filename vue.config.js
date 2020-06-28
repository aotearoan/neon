const fs = require('fs');
const packageJson = fs.readFileSync('./package.json');
const version = JSON.parse(packageJson).version || '0';

module.exports = {
  runtimeCompiler: true,
  filenameHashing: false,
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 8081,
  },
  publicPath: '.',
  chainWebpack: (config) => {
    config.plugins.delete('pwa');
    config.plugins.delete('workbox');
    config.plugin('define').tap((args) => {
      args[0]['process.env'] = {
        ...args[0]['process.env'],
        PACKAGE_VERSION: `"${version}"`,
      };
      return args;
    });
  },
};
