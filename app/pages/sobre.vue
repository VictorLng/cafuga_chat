<template>
    <HeaderPages />
  <div class="about-container">
    <div class="about-content">
      <h1 class="about-title">Sobre o Cafuga</h1>

      <div class="about-section">
        <h2>Nossa História</h2>
        <p>
          O Cafuga nasceu de um grupo de amigos no Discord que queria um espaço mais personalizado para compartilhar momentos,
          trocar ideias e manter contato. Inspirado nas melhores características das plataformas sociais,
          mas construído especificamente para nossa comunidade.
        </p>
        <p>
          Desde 2023, temos trabalhado para criar não apenas um chat, mas um ponto de encontro digital
          onde nossa criatividade, humor e amizade possam florescer sem as limitações de plataformas genéricas.
        </p>
      </div>

      <div class="about-section">
        <h2>Nossa Comunidade</h2>
        <div class="members-container">
          <div class="member-card" v-for="(member, index) in members" :key="member.id">
            <div class="member-avatar" :style="`background-color: ${getColorForIndex(index)}`">
              {{ member.name.charAt(0) }}
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p>{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-section">
        <h2>O Que Nos Move</h2>
        <div class="values">
          <div class="value-item">
            <div class="value-icon">🤝</div>
            <h3>Amizade</h3>
            <p>Construímos relacionamentos genuínos que transcendem o digital</p>
            <p> (GUSTAVO W e EZLK DO CV)</p>
          </div>
          <div class="value-item">
            <div class="value-icon">🎮</div>
            <h3>Diversão</h3>
            <p>Acreditamos que momentos de "alegria" testam nossos laços</p>
          </div>
          <div class="value-item">
            <div class="value-icon">💡</div>
            <h3>Criatividade</h3>
            <p>Incentivamos a expressão e troca de ideias inovadoras</p>
            <p>mas nada que fuja do que pensamos ou algo diferente da nossa opniao</p>
          </div>
        </div>
      </div>

      <div class="about-section cta-section">
        <p>
          Se você se identificou com nossos valores e gostaria de fazer parte desta comunidade incrível,
          Problema é seu, não queremos mais ninguem.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SobrePage',
  layout: 'default',
  data() {
    return {
      colors: ['#BE3144', '#872341', '#E17564'],
      members: [
        { id: 1, name: 'Victor Hugo', role: 'Lider em Enrrugamento & Desenvolvedor' },
        { id: 2, name: 'ALANA', role: 'A DESTRUIDORA RETORNA' },
        { id: 3, name: 'Douglas', role: 'Viciado em Vava & Dev(quando quer)' },
        { id: 4, name: 'Filif', role: 'Moderador, China Lover & Terraplanista' },
        { id: 5, name: 'Gustavo W', role: 'Moderador,Dev & Autista L3' },
        { id: 6, name: 'Gustavo V', role: 'Turista & Autista L4' },
        { id: 7, name: 'Hermano(MC)', role: 'MC(de funk) & Historiador' },
        { id: 8, name: 'Leo', role: 'Especialista em RPG & Detetive' },
        { id: 9, name: 'Lucas', role: 'Dono Oficial do canal LULUCA games' },
        { id: 10, name: 'Isaac', role: 'Filho do Valorant com A APVS' },
        { id: 11, name: 'Gabriel', role: 'VI VI VI VI VI' },
        { id: 12, name: 'Elias', role: 'Marsupiau Paulista & Loko' },
      ]
    };
  },
  methods: {
    getColorForIndex(index: number) {
      return this.colors[index % this.colors.length];
    }
  }
};
</script>

<style scoped>
.about-container {
  background-color: #09122C;
  color: white;
  padding: 2rem 1rem;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
}

.about-title {
  color: #BE3144;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
}

.about-section {
  margin-bottom: 4rem;
}

.about-section h2 {
  color: #E17564;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1rem;
}

.about-section h2::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 80%;
  width: 4px;
  background-color: #BE3144;
  border-radius: 2px;
}

.about-section p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.members-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.member-card {
  background-color: #121B3E;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.member-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
}

.member-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.member-info p {
  margin: 0;
  color: #E17564;
  font-size: 0.9rem;
}

.values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.value-item {
  background-color: #121B3E;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.value-item:hover {
  transform: translateY(-5px);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-item h3 {
  color: #E17564;
  margin-bottom: 1rem;
}

.value-item p {
  font-size: 1rem;
}

.cta-section {
  text-align: center;
  background-color: #121B3E;
  padding: 3rem;
  border-radius: 12px;
  margin-top: 3rem;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.cta-btn {
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-btn.primary {
  background-color: #BE3144;
  color: white;
}

.cta-btn.primary:hover {
  background-color: #872341;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(190, 49, 68, 0.4);
}

.cta-btn.secondary {
  border: 2px solid #E17564;
  color: #E17564;
}

.cta-btn.secondary:hover {
  background-color: rgba(225, 117, 100, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(225, 117, 100, 0.2);
}

@media (max-width: 768px) {
  .about-title {
    font-size: 2.5rem;
  }

  .members-container {
    grid-template-columns: 1fr;
  }

  .values {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
