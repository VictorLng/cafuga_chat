<template>
  <div>
    <HeaderPages />
    <div class="register-container">
      <div class="register-form-container">
        <h2>Crie sua conta no Cafuga</h2>
        <p class="subtitle">Junte-se à nossa comunidade PODRE E NOJENTA</p>

        <form @submit.prevent="register" class="register-form">
          <div class="form-group">
            <label for="username">Nome de usuário</label>
            <input
              type="text"
              id="username"
              v-model="formData.username"
              required
              placeholder="Como deseja ser chamado? (Extritamente Proibido Elu/Delu)"
            />
          </div>

          <div class="form-group">
            <label for="email">E-mail</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              placeholder="seu@email.com"
            />
          </div>

          <div class="form-group">
            <label for="password">Senha</label>
            <input
              type="password"
              id="password"
              v-model="formData.password"
              required
              placeholder="Escolha uma senha segura"
            />
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirme a senha</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="formData.confirmPassword"
              required
              placeholder="Digite a senha novamente"
            />
          </div>

          <div class="form-group checkbox">
            <input type="checkbox" id="terms" v-model="formData.terms" required />
            <label for="terms">
              Concordo com os <a href="#" class="link">Termos de Uso</a> e a
              <a href="#" class="link">Política de Privacidade</a> e
              <a href="#" class="link">Vender Minha Alma Ao Massa Cinzenta e o Clube Da Luta</a>
            </label>
          </div>

          <button type="submit" class="submit-btn">Criar conta</button>
        </form>

        <div class="form-footer">
          <p>Já tem uma conta? <NuxtLink to="/login" class="link">Faça login</NuxtLink></p>
        </div>
      </div>

      <div class="register-info">
        <h3>Benefícios da comunidade Cafuga</h3>
        <ul>
          <li>Ser feliz e troca ideia com amigos</li>
          <li>Conteúdo nojeto e escatologico das calls</li>
          <li>Participe de eventos especiais como o filf de o New Liberalismo</li>
          <li>Conecte-se com seus "amigos" do Discord</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderPages from '../components/HeaderPages.vue';

export default {
  name: 'RegistroPage',
  components: {
    HeaderPages
  },
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
      }
    }
  },
  methods: {
    register() {
      if (this.formData.password !== this.formData.confirmPassword) {
        alert('As senhas não coincidem!');
        return;
      }

      console.log('Dados do formulário:', this.formData);
      alert('Conta criada com sucesso!');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.register-container {
  display: flex;
  min-height: calc(100vh - 70px);
  background-color: #09122C;
  color: white;
  padding: 2rem;
}

.register-form-container {
  flex: 2;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #111A3C;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.register-info {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #E17564;
}

h2 {
  color: #BE3144;
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.subtitle {
  color: #E17564;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group.checkbox {
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

label {
  font-weight: 500;
  color: #E17564;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  padding: 0.8rem;
  border: 1px solid #2A3559;
  border-radius: 4px;
  background-color: #1A244A;
  color: white;
  font-size: 1rem;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: #BE3144;
  box-shadow: 0 0 0 2px rgba(190, 49, 68, 0.2);
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
  margin-top: 1rem;
}

.submit-btn:hover {
  background-color: #872341;
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

.register-info h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.register-info ul {
  list-style-type: none;
  padding: 0;
}

.register-info li {
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.5rem;
}

.register-info li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #BE3144;
  font-weight: bold;
}

@media (max-width: 992px) {
  .register-container {
    flex-direction: column;
  }

  .register-info {
    margin-top: 2rem;
  }
}
</style>
