export default defineNuxtPlugin((nuxtApp) => {
  const isLoading = ref(false);

  // Renomeando para evitar conflitos com propriedades internas do Nuxt
  const pageLoadingState = {
    isLoading,
    startLoading() {
      isLoading.value = true;

      // Simular um tempo de carregamento mínimo de 300ms
      setTimeout(() => {
        isLoading.value = false;
      }, 300);
    }
  };

  // Tornar disponível globalmente com um nome diferente
  nuxtApp.provide('pageLoadingState', pageLoadingState);

  // Hook para iniciar transição em mudanças de rota
  nuxtApp.hook('page:start', () => {
    pageLoadingState.startLoading();
  });

  return {
    provide: {
      pageLoadingState
    }
  };
});
