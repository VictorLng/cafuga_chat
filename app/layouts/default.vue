<template>
  <div class="app-container">
    <HeaderPages />

    <main class="main-content">
      <slot />
    </main>

    <PageTransition :is-loading="isPageLoading" />
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import HeaderPages from '../components/HeaderPages.vue';
import PageTransition from '../components/PageTransition.vue';

export default {
  name: 'DefaultLayout',
  components: {
    HeaderPages,
    PageTransition
  },
  setup() {
    const isPageLoading = ref(false);

    onMounted(() => {
      const nuxtApp = useNuxtApp();
      if (nuxtApp.$pageLoadingState) {
        // Observe a propriedade isLoading do plugin
        isPageLoading.value = nuxtApp.$pageLoadingState.isLoading.value;

        // Criar um watcher para atualizar o estado local
        watch(() => nuxtApp.$pageLoadingState.isLoading.value, (newValue) => {
          isPageLoading.value = newValue;
        });
      }
    });

    return {
      isPageLoading
    };
  }
}
</script>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

/* Estilos para a transição de página */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
