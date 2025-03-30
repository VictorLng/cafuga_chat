<template>
  <header class="header">
    <div class="logo">
      <h1>CAFUGA</h1>
    </div>
    <nav class="navigation">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <NuxtLink :to="item.path" :class="{ 'active': currentPath === item.path }">
            {{ item.title }}
            <span class="underline" :class="{ 'active': currentPath === item.path }"></span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="auth-buttons" v-if="!isLoggedIn">
      <NuxtLink to="/login" class="btn login">Login</NuxtLink>
      <NuxtLink to="/registro" class="btn register">Registrar</NuxtLink>
    </div>
    <div class="user-menu" v-else>
      <button class="user-profile">
        <span class="username">{{ username }}</span>
        <span class="avatar">👤</span>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'HeaderPages',
  props: {
    currentPage: {
      type: String,
      default: 'home'
    }
  },
  mounted() {
    console.log('HeaderPages mounted');
    this.updateCurrentPath();
  },
  data() {
    return {
      currentPath: '',
      isLoggedIn: false,
      username: 'Usuário',
      menuItems: [
        { title: 'Início', path: '/' },
        { title: 'Chat', path: '/chat' },
        { title: 'Sobre', path: '/sobre' }
      ]
    }
  },
  methods: {
    updateCurrentPath() {
      this.currentPath = window.location.pathname;
    }
  },
  watch: {
    '$route'() {
      this.updateCurrentPath();
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #09122C;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo h1 {
  color: #BE3144;
  font-size: 1.8rem;
  margin: 0;
  font-weight: bold;
}

.navigation ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.navigation a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  display: inline-block;
  padding: 0.5rem 0;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #E17564;
  transition: width 0.3s ease;
}

.navigation a:hover .underline,
.navigation a.active .underline {
  width: 100%;
}

.navigation a.active {
  color: #E17564;
  font-weight: bold;
}

.auth-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.login {
  color: #E17564;
  border: 1px solid #E17564;
}

.login:hover {
  background-color: rgba(225, 117, 100, 0.1);
}

.register {
  background-color: #BE3144;
  color: white;
}

.register:hover {
  background-color: #872341;
}

.user-menu {
  position: relative;
}

.user-profile {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
}

.username {
  margin-right: 0.5rem;
}

.avatar {
  font-size: 1.5rem;
}
</style>