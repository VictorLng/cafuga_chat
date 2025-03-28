export default defineNuxtConfig({

  components: true,

  router: {
    options: {
    }
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

})
