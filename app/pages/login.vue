<template>
  <div>
    <HeaderPages />
    <div class="login-container">
      <div class="login-form-container">
        <h2>Bem-vindo de volta!</h2>
        <p class="subtitle">Faça login para acessar o Cafuga</p>

        <form @submit.prevent="login" class="login-form">
          <div class="form-group">
            <label for="username">Nome de usuário ou E-mail</label>
            <input
              type="text"
              id="username"
              v-model="formData.username"
              required
              placeholder="Seu usuário ou e-mail"
            />
          </div>

          <div class="form-group">
            <label for="password">Senha</label>
            <div class="password-field">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="formData.password"
                required
                placeholder="Sua senha"
              />
              <button
                type="button"
                class="toggle-password"
                @click="showPassword = !showPassword"
              >
                {{ showPassword ? '👁️' : '👁️‍🗨️' }}
              </button>
            </div>
          </div>

          <div class="form-footer-group">
            <div class="remember-me">
              <input type="checkbox" id="remember" v-model="formData.remember" />
              <label for="remember">Lembrar de mim</label>
            </div>
            <a href="#" class="forgot-password">Esqueceu a senha?</a>
          </div>

          <button type="submit" class="submit-btn">Entrar</button>
        </form>

        <div class="social-login">
          <p>Ou entre com</p>
          <div class="social-buttons">
            <button class="social-btn discord"  @click="loginByDiscord">
              <img class="logo-images" src="/discord-logo.png" alt="logo" > Discord
            </button>
            <button class="social-btn google" @click="loginByGoogle">
              <img class="logo-images" src="/google-logo.png" alt="logo"> Google
            </button>
          </div>
        </div>

        <div class="form-footer">
          <p>Não tem uma conta? <NuxtLink to="/registro" class="link">Registre-se</NuxtLink></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderPages from '../components/HeaderPages.vue';
import axios from 'axios';

export default {
  name: 'LoginPage',
  components: {
    HeaderPages
  },
  data() {
    return {
      formData: {
        username: '',
        password: '',
        remember: false
      },
      showPassword: false
    }
  },
  methods: {
    async login() {
      await this.$axios.post('/api/login', this.formData)
        .then(response => {
          // Handle successful login
          console.log('Login successful:', response.data);
          // this.$router.push('/');
        })
        .catch(error => {
          // Handle login error
          console.error('Login error:', error);
        });
    },
    async loginByDiscord() {
      await this.$axios.post('/auth/discord', this.formData)
        .then(response => {
          // Handle successful login
          console.log('Login successful:', response.data);
          // this.$router.push('/');
        })
        .catch(error => {
          // Handle login error
          console.error('Login error:', error);
        });
    },
    async loginByGoogle() {
      await this.$axios.post('/auth/google', this.formData)
        .then(response => {
          // Handle successful login
          console.log('Login successful:', response.data);
          // this.$router.push('/');
        })
        .catch(error => {
          // Handle login error
          console.error('Login error:', error);
        });
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);
  background-color: #09122C;
  color: white;
  padding: 2rem;
}

.login-form-container {
  width: 100%;
  max-width: 450px;
  padding: 2.5rem;
  background-color: #111A3C;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

h2 {
  color: #BE3144;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  text-align: center;
}

.subtitle {
  color: #E17564;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 500;
  color: #E17564;
}

input[type="text"],
input[type="password"] {
  padding: 0.8rem;
  border: 1px solid #2A3559;
  border-radius: 4px;
  background-color: #1A244A;
  color: white;
  font-size: 1rem;
}

input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: #BE3144;
  box-shadow: 0 0 0 2px rgba(190, 49, 68, 0.2);
}

.password-field {
  position: relative;
}

.toggle-password {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #E17564;
  cursor: pointer;
  font-size: 1.2rem;
}

.form-footer-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.forgot-password {
  color: #E17564;
  text-decoration: none;
  font-size: 0.9rem;
}

.forgot-password:hover {
  text-decoration: underline;
}

.submit-btn {
  background-color: #BE3144;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #872341;
}

.social-login {
  margin-top: 2rem;
  text-align: center;
}

.social-login p {
  margin-bottom: 1rem;
  position: relative;
}

.social-login p:before,
.social-login p:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 30%;
  height: 1px;
  background-color: #2A3559;
}

.social-login p:before {
  left: 0;
}

.social-login p:after {
  right: 0;
}

.social-buttons {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.social-btn {
  flex: 1;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-weight: medium;
  cursor: pointer;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-btn:hover {
  opacity: 0.9;
}

.discord {
  background-color: #7289DA;
  color: white;
}

.google {
  background-color: white;
  color: #333;
}

.form-footer {
  margin-top: 2rem;
  text-align: center;
}

.link {
  color: #E17564;
  text-decoration: none;
  font-weight: 500;
}

.link:hover {
  text-decoration: underline;
}

.logo-images {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}
</style>
