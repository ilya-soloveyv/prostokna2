const dev = !(process.env.NODE_ENV === 'production')
let middlewares = []

if (dev) {
  const proxy = require('http-proxy-middleware')
  const port = process.env.PORT || 8008
  middlewares = [proxy('/api', { target: `http://localhost:${port}` })]
}

const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  dev: dev,
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: '/js/map.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css',
    '~/node_modules/bootstrap/dist/css/bootstrap.css'
  ],
  /*
  ** Add proxy
  */
  serverMiddleware: middlewares,
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'jquery'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
