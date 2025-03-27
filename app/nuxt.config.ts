export default defineNuxtConfig({
  // Configurações existentes

  // Adicionar os componentes e middleware
  components: true,

  // Aplicar o middleware globalmente - ajustar para registro manual para garantir ordem
  router: {
    // Removido middleware global para evitar execução duplicada
  },

  // Habilitar transições de página
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  // Adicionar o plugin de transição de página
  plugins: [
    '~/plugins/pageTransition.ts'
  ]
})
