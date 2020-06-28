module.exports = {
  runtimeCompiler: true,
  devServer: {
    port: 8081,
  },
  publicPath: process.env.NODE_ENV === 'production' ? './neon/' : '/',
};
