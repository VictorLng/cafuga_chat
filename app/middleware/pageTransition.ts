import { usePageTransition } from '~/composables/usePageTransition'

export default defineNuxtRouteMiddleware((to, from) => {
  if (!from) return

  const { startLoading } = usePageTransition()
  startLoading()
})
