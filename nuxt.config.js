const pkg = require('./package')
module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  server:{
    port:8000
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['@/assets/stylus/main.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/main'
  ],

  router: {
    middleware: 'auth'
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */

  axios: {
    proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api': {
      target: 'https://banner-storage-ms.juejin.im',
      pathRewrite: { '^/api': '' }
    },
    '/japi': {
      target: 'https://gold-tag-ms.juejin.im',
      pathRewrite: { '^/japi': '' }
    },
    '/wapi': {
      target: 'https://web-api.juejin.im',
      pathRewrite: { '^/wapi': '' }
    },
    '/tapi': {
      target: 'https://timeline-merger-ms.juejin.im',
      pathRewrite: { '^/tapi': '' }
    },
    '/xapi': {
      target: 'https://xiaoce-timeline-api-ms.juejin.im',
      pathRewrite: { '^/xapi': '' }
    }
  },
  generate: {
    routes: [
      '/welcome/frontend',
      '/welcome/android',
      '/welcome/backend',
      '/welcome/ai',
      '/welcome/ios',
      '/welcome/freebie',
      '/welcome/article'
    ],
    minify: {
      collapseWhitespace: false
    }
  },

  /*
   ** Build configuration
   */
  build: {
    // transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
    }
  }
}
