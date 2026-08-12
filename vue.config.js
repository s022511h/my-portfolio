const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const PrerendererWebpackPlugin = require('@prerenderer/webpack-plugin')

// Routes to prerender come from the shared config, so the sitemap and the
// prerenderer can never drift apart. Add new pages in routes.config.js only.
const PRERENDER_ROUTES = require('./routes.config').map(route => route.url)

const isProduction = process.env.NODE_ENV === 'production'

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false
      }),

      // Prerendering only runs on production builds. Never in `npm run serve`.
      ...(isProduction
        ? [
            new PrerendererWebpackPlugin({
              routes: PRERENDER_ROUTES,
              renderer: '@prerenderer/renderer-jsdom',
              rendererOptions: {
                // Lets App.vue detect prerendering and skip the intro splash.
                inject: { prerender: true },
                injectProperty: '__PRERENDER_INJECTED',

                // main.js dispatches this after router.isReady() and mount.
                renderAfterDocumentEvent: 'render-event',

                maxConcurrentRoutes: 4,
                timeout: 60000
              }
            })
          ]
        : [])
    ],

    resolve: {
      fallback: {
        buffer: false,
        crypto: false,
        stream: false
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
          CSP_CONNECT_SRC: "connect-src 'self' https: ws: wss: http://localhost:3000 http://localhost:8080 http://localhost:8081 http://127.0.0.1:3000 http://127.0.0.1:8080 http://api.curator.io https://api.curator.io https://www.google-analytics.com https://analytics.google.com"
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
      'X-Frame-Options': 'SAMEORIGIN'
    }
  }
})