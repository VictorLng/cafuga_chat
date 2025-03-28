<template>
  <div class="app-container">
    <HeaderPages />

    <main class="main-content">
      <slot />
    </main>

    <PageTransition :is-loading="isLoading" />
  </div>
</template>

<script>
import HeaderPages from '../components/HeaderPages.vue'
import PageTransition from '../components/PageTransition.vue'
import { usePageTransition } from '~/composables/usePageTransition'

export default {
  name: 'DefaultLayout',
  components: {
    HeaderPages,
    PageTransition
  },
  data() {
    return {
      isLoading: false
    }
  },
  mounted() {
    const { isLoading } = usePageTransition()

    this.$watch(() => isLoading.value, (newValue) => {
      this.isLoading = newValue
    }, { immediate: true })
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