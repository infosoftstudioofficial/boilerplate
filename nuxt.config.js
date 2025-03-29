import webpack from 'webpack'

const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
import { resolve } from 'path'

module.exports = {
  generate: {
    routes: ['404']
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'infosoft',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description',
        name: 'description',
        content: 'We are a multi-awarded software company based in Davao, specializing in software and staff augmentation services. For 9 years, we’ve created positive experiences and quality products for local and international clients. We serve local governments and private organizations with meticulous attention to detail and reasonable pricing. PhilGEPS registered, we have an established government portfolio.' },
      { property: "og:site_name", content: "infosoft" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://infosoft.com",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "infosoft",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "The infosoft is a specially designed web-based application designed to assist the province of Camiguin's local government unit in streamlining and expediting the processes involved in providing aid to the public.",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  components: true,
  plugins: [
    '~/plugins/events.js',
    '~/plugins/font-awesome.js',
    '~/plugins/http.js',
    '~/plugins/vue-smooth-picker.js',
    '~/plugins/vue-croppa.js',
    {src: '~/plugins/vue-sample-uploader.js', ssr: false},
    '~/plugins/vue-js-modal',
    {src: '~/plugins/localStorage.js', ssr: false },
    '~/plugins/filters.js',
    '~plugins/vue-the-mask.js'
  ],
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/helvetica/helvetica.css',
    '~/assets/style/helvetica-neue/helvetica-neue.css'
  ],
  env: {
    API_URL: 'http://localhost:8000/api' // waiting for the api xd
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL // waiting for the api
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'token' },
          // set user to false if get user is not avalailable
          user: false,
          // if get user is avalailable
          // which is to create a get api and set in nuxt.config.js as follows: 
          // user: { url: 'user', method: 'get', propertyName: 'user' }
          logout: false
        },
        autoLogout: false
      }
    },
    notLoggedInRedirectTo: '/login',
    redirect: false
  },
  publicRuntimeConfig: {
    baseURL: process.env.API_URL
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    '@nuxtjs/apollo',
    'nuxt-material-design-icons',
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }],
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:8000/api/admin/graphiql',
      }
    }
  },
    /*
  ** If you  want to use static hosting use 'target: static' in order for the generate command to work properly.
  */

  // target: 'static',

  target: 'server', /* server hosting, when using build command */
  
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
      config.resolve.symlinks = false
    },
    postcss: null
  }
}
