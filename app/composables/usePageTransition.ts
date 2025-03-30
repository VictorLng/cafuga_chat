import { ref } from 'vue'

export const usePageTransition = () => {

  const isLoading = useState('page-transition-loading', () => false)


  const startLoading = () => {
    isLoading.value = true

    setTimeout(() => {
      isLoading.value = false
    }, 300)
  }

  return {
    isLoading,
    startLoading
  }
}
