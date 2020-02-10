
export default {
  mode: 'universal',
  env: {
    mode: process.env.mode
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // {src: '/js/flexable.min.js'}
      {src: '/js/flexible.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
    'vant/lib/index.css',
    '~assets/styles/base.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vant',
    // {src: '@/plugins/xx', ssr: false},
    {src: '@/plugins/iosApi', ssr: false},
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module' // 注释掉eslint验证
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios' // 下载模板的时候选择axios配置就会有这个
    // '@nuxtjs/proxy'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true  //  代理
  },
  proxy: {
    // "/api/":"http://127.0.0.1/"    //  key(路由前缀)：value(代理地址)
    '/api': {
      target: 'https://suggest.taobao.com', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    // transpile: [/^element-ui/],
    postcss: [
      require('postcss-px2rem')({
        remUnit: 75
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    vendor: ['axios'] // 为防止重复打包
  }
}
