import { ref } from 'vue'

// Criar estado compartilhado para transição de páginas
export const usePageTransition = () => {
  // Usar useState do Nuxt para estado global com um nome único
  const isLoading = useState('page-transition-loading', () => false)

  // Função para iniciar a transição
  const startLoading = () => {
    isLoading.value = true

    // Simular um tempo de carregamento mínimo
    setTimeout(() => {
      isLoading.value = false
    }, 300)
  }

  return {
    isLoading,
    startLoading
  }
}
