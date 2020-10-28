const { getHead } = require('library/src/assets/js/head.js')

export default {
  ssr: false,
  head: getHead({
    title: 'Senses Toolkit',
    description: 'The Senses Toolkit offers a wide range of modules to help you understand and communicate climate change scenarios',
    image: 'https://climatescenarios.org/share/og-toolkit.jpg'
  }),
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
    },
    transpile: [
      'library'
    ]
  }
}
