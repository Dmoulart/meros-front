export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.scss'
    // 'element-ui/lib/theme-chalk/index.css'
  ],
  styleResources: {
    scss: [
      '~/assets/css/variables.scss'
    ]
  },
  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true,
    families: {
      Roboto: true,
      NotoSans: true,
      NunitoSans: true
    }
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/atoms',
      '~/components/molecules',
      '~/components/organisms'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg-sprite'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/style-resources'
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: 'http://localhost:8000/api/login_check', method: 'post' },
          // logout: { url: 'http://localhost:3000/logout', method: 'get' },
          user: { url: 'http://localhost:8000/me', method: 'get' }
        }
      }
    }
  },
  router: {
    middleware: ['auth']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: [/^element-ui/]
  }
}
