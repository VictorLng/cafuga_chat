<template>
  <div class="welcome-container">
    <div class="welcome-content">
      <h1 class="welcome-title">BEM-VINDO AO CAFUGA</h1>
      <div class="greeting">
        <span class="hello">OLÁ</span>
        <span class="name" :class="{ 'fade-out': isFading }">{{ currentName }}</span>
      </div>
      <p class="subtitle">Seu espaço exclusivo para amigos do discord</p>

      <div class="cta-buttons">
        <NuxtLink to="/registro" class="cta-btn register">Criar conta</NuxtLink>
        <NuxtLink to="/login" class="cta-btn login">Entrar</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  layout: 'default',
  mounted() {
    console.log('Index page mounted')
    this.startNameCycle()
  },
  data() {
    return {
      title: 'Hello, World!' as string,
      names: [
        "Fulano",
        "Ciclano",
        "Beltrano",
        "Mengano",
        "João",
        "Maria",
        "Pedro",
        "Lucas",
        "Ana"
      ] as string[],
      currentNameIndex: 0 as number,
      currentName: "" as string | undefined,
      isFading: false as boolean,
      nameInterval: 0 as number | null
    }
  },
  methods: {
    startNameCycle() {
      this.currentName = this.names[0]

      this.nameInterval = setInterval(() => {
        this.changeName()
      }, 3000)
    },

    changeName() {
      this.isFading = true

      setTimeout(() => {
        this.currentNameIndex = (this.currentNameIndex + 1) % this.names.length
        this.currentName = this.names[this.currentNameIndex]
        this.isFading = false
      }, 1000)
    }
  },
  beforeDestroy() {
    if (this.nameInterval) {
      clearInterval(this.nameInterval)
    }
  }
}
</script>

<style scoped>
.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);
  background-color: #09122C;
  color: white;
  font-family: 'Arial', sans-serif;
}

.welcome-content {
  text-align: center;
  padding: 2rem;
  max-width: 800px;
}

.welcome-title {
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #872341;
}

.greeting {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.hello {
  color: #ffffff;
}

.name {
  color: #BE3144;
  font-weight: bold;
  transition: opacity 1s ease;
}

.fade-out {
  opacity: 0;
}

.subtitle {
  font-size: 1.5rem;
  color: #E17564;
  margin-top: 2rem;
  margin-bottom: 3rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.cta-btn {
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-btn.register {
  background-color: #BE3144;
  color: white;
}

.cta-btn.register:hover {
  background-color: #872341;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(190, 49, 68, 0.4);
}

.cta-btn.login {
  border: 2px solid #E17564;
  color: #E17564;
}

.cta-btn.login:hover {
  background-color: rgba(225, 117, 100, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(225, 117, 100, 0.2);
}
</style>