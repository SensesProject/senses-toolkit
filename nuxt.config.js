
export default {
  mode: 'spa',
  head: {
    title: 'Senses Toolkit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This collection of visualisation tools helps you understand and communicate climate change scenarios.' }
    ]
  },
  css: [
    '@/assets/style/base.scss'
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  router: {
    base: '/toolkit/'
  },
  build: {
    extend (config, ctx) {
    }
  }
}
