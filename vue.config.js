module.exports = {
  configureWebpack: {
    externals: {
      peerjs: "Peer",
      vue: "Vue",
    },

    optimization: {
      splitChunks: false,
    },
  },

  css: {
    extract: false,
  },
};
