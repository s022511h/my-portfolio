const { defineConfig } = require('@vue/cli-service')
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')

module.exports = defineConfig({
  css: {
    extract: true
  },
  transpileDependencies: false,

  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.(js|css|html|svg|json|ttf|woff2?)$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
      })
    ],
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 10,
        maxAsyncRequests: 10,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              return `npm.${packageName.replace('@', '')}`
            },
            chunks: 'all'
          }
        }
      }
    },
    target: ['web', 'es2020']
  },

  chainWebpack: config => {
    config.output.filename('js/[name].[contenthash].js')
    config.output.chunkFilename('js/[name].[contenthash].js')
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  }
})
