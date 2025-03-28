import { usePageTransition } from '~/composables/usePageTransition'

export default defineNuxtRouteMiddleware((to, from) => {
  // Não aplicar transição no carregamento inicial
  if (!from) return

  // Usar o composable para gerenciar a transição
  const { startLoading } = usePageTransition()
  startLoading()
})
