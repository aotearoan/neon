module.exports = {
  runtimeCompiler: true,
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 8081,
  },
  publicPath: process.env.NODE_ENV === 'production' ? './neon/' : '/',
  chainWebpack: (config) => {
    config.plugins.delete('pwa');
    config.plugins.delete('workbox');
  },
};
