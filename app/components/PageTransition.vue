<template>
  <div class="page-transition" :class="{ 'is-loading': isLoading }">
    <div class="loader-container">
      <div class="loader">
        <div class="dot" v-for="i in 3" :key="i" :style="`animation-delay: ${(i - 1) * 0.15}s`"></div>
      </div>
      <div class="loader-bar"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PageTransition',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.page-transition {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(9, 18, 44, 0.8);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.page-transition.is-loading {
  opacity: 1;
  pointer-events: all;
}

.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.loader {
  display: flex;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #BE3144;
  animation: pulse 0.6s infinite alternate;
}

.loader-bar {
  width: 100px;
  height: 3px;
  background-color: #111A3C;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.loader-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 30%;
  background-color: #E17564;
  border-radius: 3px;
  animation: slide 1s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.2);
    opacity: 1;
  }
}

@keyframes slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(350%);
  }
}
</style>
