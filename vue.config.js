const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
const webpack = require("webpack");
module.exports = {
  transpileDependencies: ['avue-plugin-ueditor'],

  productionSourceMap: false,

  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    plugins: [
      // 限制只打一个包，不分Chunk
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ],
},

  chainWebpack: (config) => {
    config.externals({
      'vue': 'Vue',
      'element-ui': 'ElementUI',
    })
    config.resolve.alias
      .set('@', resolve('packages'))
      .set('@components', resolve('packages/components'))
      .set('@utils', resolve('packages/utils'))
      .set('@mixins', resolve('packages/mixins'))
  },

  devServer: {
    open: true
  },

  css: {
    extract: false
  }
}
