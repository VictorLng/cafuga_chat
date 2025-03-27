export default defineNuxtRouteMiddleware((to, from) => {
  // Não aplicar transição no carregamento inicial
  if (!from) return;

  // Acessar o estado global ou store
  const nuxtApp = useNuxtApp();

  // Sinalizar que a página está carregando usando o novo nome
  if (nuxtApp.$pageLoadingState) {
    nuxtApp.$pageLoadingState.startLoading();
  }
});
