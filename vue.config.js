const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false
      })
    ],
    resolve: {
      fallback: {
        "buffer": false,
        "crypto": false,
        "stream": false
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxSize: 200000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            maxSize: 200000,
            priority: 10
          },
          firebase: {
            test: /[\\/]node_modules[\\/]firebase/,
            chunks: 'all',
            priority: 20,
            maxSize: 150000
          }
        }
      }
    }
  },
  
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'development') {
        args[0].templateParameters = {
          ...args[0].templateParameters,
          CSP_CONNECT_SRC: "connect-src 'self' https: ws: wss: http://localhost:3000 http://localhost:5000 http://localhost:8080 http://localhost:8081 http://127.0.0.1:3000 http://127.0.0.1:5000 http://127.0.0.1:8080 http://api.curator.io https://api.curator.io https://www.google-analytics.com https://analytics.google.com"
        }
      } else {
        args[0].templateParameters = {
          ...args[0].templateParameters,
          CSP_CONNECT_SRC: "connect-src 'self' https: ws: wss: http://api.curator.io https://api.curator.io https://www.google-analytics.com https://analytics.google.com"
        }
      }
      return args
    })
  },
  
  devServer: {
    port: 8080,
    headers: {
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: http:; connect-src 'self' https: ws: wss: http://localhost:3000 http://localhost:5000 http://localhost:8080 http://localhost:8081 http://127.0.0.1:3000 http://127.0.0.1:5000 http://127.0.0.1:8080 http://api.curator.io https://api.curator.io https://www.google-analytics.com https://analytics.google.com; frame-src 'self' https://www.youtube.com https://youtube.com;"
    }
  }
})