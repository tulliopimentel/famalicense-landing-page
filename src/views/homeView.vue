<template>
  <div class="bakery-landing-page">
    <header class="main-header" :class="{ 'scrolled': isScrolled }">
      <div class="container">
        <div class="logo">Padaria Famalicense</div>
        <nav>
          <ul>
            <li><a href="#home" @click.prevent="scrollTo('home')" :class="{ active: activeSection === 'home' }">HOME</a></li>
            <li><a href="#cardapio" @click.prevent="scrollTo('cardapio')" :class="{ active: activeSection === 'cardapio' }">CARDÁPIO</a></li>
            <li><a href="#nossa-casa" @click.prevent="scrollTo('nossa-casa')" :class="{ active: activeSection === 'nossa-casa' }">NOSSA CASA</a></li>
            <li><a href="#encomendas" @click.prevent="scrollTo('encomendas')" :class="{ active: activeSection === 'encomendas' }">ENCOMENDAS</a></li>
            <li><a href="#localizacao" @click.prevent="scrollTo('localizacao')" :class="{ active: activeSection === 'localizacao' }">LOCALIZAÇÃO</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <section id="home" class="hero-section section">
        <div class="hero-content">
          <h1 class="animate-on-scroll">Sabor e tradição em cada pedaço</h1>
          <p class="animate-on-scroll">Pão fresquinho e produtos artesanais feitos com amor para você e sua família.</p>
          <button @click="scrollTo('cardapio')" class="cta-button animate-on-scroll">Veja nosso Cardápio</button>
        </div>
      </section>

      <section id="cardapio" class="menu-section section">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Nosso Cardápio</h2>
          <p class="section-subtitle animate-on-scroll">Uma seleção dos nossos produtos mais amados.</p>
          <div class="menu-grid">
            <div class="menu-item animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2940&auto=format&fit=crop" alt="Pães Artesanais">
              <h3>Pães Artesanais</h3>
              <p>Fermentação natural e ingredientes selecionados para um sabor inesquecível.</p>
            </div>
            <div class="menu-item animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2787&auto=format&fit=crop" alt="Doces e Tortas">
              <h3>Doces e Tortas</h3>
              <p>Do brigadeiro clássico às tortas mais elaboradas, uma doçura para cada momento.</p>
            </div>
            <div class="menu-item animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1594011340483-4a6b46428942?q=80&w=2803&auto=format&fit=crop" alt="Salgados">
              <h3>Salgados</h3>
              <p>Coxinha, pão de queijo, empadas e muito mais. Perfeitos para qualquer hora do dia.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="nossa-casa" class="about-section section">
        <div class="container about-content">
          <div class="about-image animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1556909172-6ab63f18fd12?q=80&w=2940&auto=format&fit=crop" alt="Interior da Padaria">
          </div>
          <div class="about-text animate-on-scroll">
            <h2 class="section-title">Nossa Casa</h2>
            <p>Desde 1985, a Padaria Famalicense é um ponto de encontro no bairro. Uma história de família que começou com o sonho de levar à mesa das pessoas pães de qualidade, feitos com carinho e os melhores ingredientes. Aqui, cada receita tem uma história e cada cliente faz parte da nossa família.</p>
          </div>
        </div>
      </section>

      <section id="encomendas" class="order-section section">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Faça sua Encomenda</h2>
          <p class="section-subtitle animate-on-scroll">Planejando uma festa ou um café da manhã especial? Encomende conosco!</p>
          <form class="order-form animate-on-scroll" @submit.prevent>
            <div class="form-group">
              <input type="text" placeholder="Seu Nome" required>
              <input type="tel" placeholder="Seu Telefone / WhatsApp" required>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Seu E-mail" required>
            </div>
            <div class="form-group">
              <textarea placeholder="Descreva sua encomenda (produtos, quantidades, data de retirada)..." rows="5" required></textarea>
            </div>
            <button type="submit" class="cta-button">Enviar Pedido</button>
          </form>
        </div>
      </section>

      <section id="localizacao" class="location-section section">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Nossa Localização</h2>
          <p class="section-subtitle animate-on-scroll">Venha nos visitar e sentir o cheirinho de pão quente!</p>
          <div class="location-content">
            <div class="address-info animate-on-scroll">
              <h3>Padaria Famalicense</h3>
              <p>Rua do Sabor, 123 - Bairro dos Pães</p>
              <p>São Paulo, SP - CEP 01234-567</p>
              <p><strong>Horário de Funcionamento:</strong></p>
              <p>Segunda a Sábado: 6h às 22h</p>
              <p>Domingos e Feriados: 7h às 20h</p>
            </div>
            <div class="map-container animate-on-scroll">
              <iframe
                src="http://googleusercontent.com/maps.google.com/5"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="main-footer-bottom">
      <div class="container">
        <p>© {{ new Date().getFullYear() }} Padaria Famalicense. Todos os direitos reservados.</p>
        <div class="social-links">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Facebook">FB</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// --- LÓGICA PARA O HEADER ---
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// --- LÓGICA PARA ROLAGEM SUAVE ---
const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Subtrai a altura do header
      behavior: 'smooth',
    });
  }
};


// --- LÓGICA DE ANIMAÇÃO E SCROLL-SPY (CORRIGIDA) ---
const activeSection = ref('home');
let animationObserver = null;
let scrollSpyObserver = null;

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Observador para as ANIMAÇÕES de conteúdo
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animationObserver.unobserve(entry.target); // Opcional: para de observar depois de animar
      }
    });
  }, { threshold: 0.1 });

  elementsToAnimate.forEach(el => animationObserver.observe(el));


  // Observador para o SCROLL-SPY (destaque do menu)
  const sections = document.querySelectorAll('.section');
  scrollSpyObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          activeSection.value = entry.target.id;
        }
     });
  }, { threshold: [0.5, 0.9] });

  sections.forEach(section => scrollSpyObserver.observe(section));

});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  if (animationObserver) {
    animationObserver.disconnect();
  }
  if (scrollSpyObserver) {
    scrollSpyObserver.disconnect();
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@700;800&display=swap');

.bakery-landing-page {
  --primary-color: #FFC107;  /* Amarelo Âmbar */
  --accent-color: #D32F2F;   /* Vermelho do "HOME" */
  --dark-color: #333;
  --light-color: #FFF;
  --bg-light-cream: #FFF8E1;
  --text-color: #5D4037; /* Marrom escuro para texto */
  --font-headings: 'Montserrat', sans-serif;
  --font-body: 'Lato', sans-serif;

  font-family: var(--font-body);
  color: var(--text-color);
  background-color: var(--light-color);
  line-height: 1.6;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
}

.section-title {
  font-family: var(--font-headings);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: var(--dark-color);
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 60px auto;
}

/* --- ANIMAÇÃO DE SCROLL --- */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* --- CABEÇALHO --- */
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.4s ease, padding 0.4s ease;
  padding: 20px 0;
}

.main-header.scrolled {
  background-color: rgba(255, 248, 225, 0.95); /* Fundo creme semi-transparente */
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 10px 0;
}

.main-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-headings);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--dark-color);
}

.main-header nav ul {
  list-style: none;
  display: flex;
}

.main-header nav ul li a {
  color: var(--dark-color);
  text-decoration: none;
  margin: 0 15px;
  font-weight: 700;
  position: relative;
  padding: 5px 0;
  transition: color 0.3s ease;
}

.main-header nav ul li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--accent-color);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.4s ease;
}

.main-header nav ul li a:hover,
.main-header nav ul li a.active {
  color: var(--accent-color);
}

.main-header nav ul li a:hover::after,
.main-header nav ul li a.active::after {
  transform: scaleX(1);
}

/* --- SEÇÃO HERO --- */
.hero-section {
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2869&auto=format&fit=crop') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--light-color);
  padding-top: 80px; /* Evitar sobreposição com o header */
}

.hero-content h1 {
  font-family: var(--font-headings);
  font-size: 4rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.cta-button {
  background-color: var(--primary-color);
  color: var(--dark-color);
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-button:hover {
  background-color: #ffca28; /* Amarelo um pouco mais claro */
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* --- SEÇÃO CARDÁPIO --- */
.menu-section {
  background-color: var(--bg-light-cream);
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.menu-item {
  background-color: var(--light-color);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.menu-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.menu-item h3 {
  font-family: var(--font-headings);
  margin: 20px 0 10px 0;
  color: var(--dark-color);
}

.menu-item p {
  padding: 0 20px 20px 20px;
  font-size: 0.9rem;
}

/* --- SEÇÃO NOSSA CASA --- */
.about-section {
    background-color: var(--light-color); /* Garante fundo branco para esta seção */
}

.about-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.about-image {
  flex: 1;
}

.about-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.about-text {
  flex: 1;
}

/* --- SEÇÃO ENCOMENDAS --- */
.order-section {
  background-color: var(--bg-light-cream);
}

.order-form {
  max-width: 700px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.order-form input,
.order-form textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: var(--font-body);
  font-size: 1rem;
}

.order-form input:focus,
.order-form textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2);
}

.order-form button {
  width: 100%;
  padding: 15px;
}

/* --- SEÇÃO LOCALIZAÇÃO --- */
.location-section {
    background-color: var(--light-color); /* Garante fundo branco para esta seção */
}

.location-content {
  display: flex;
  gap: 40px;
  margin-top: 40px;
}

.address-info {
  flex: 1;
}

.address-info h3 {
  font-family: var(--font-headings);
  margin-bottom: 15px;
}
.address-info p {
  margin-bottom: 10px;
}

.map-container {
  flex: 1.5;
  height: 400px;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* --- RODAPÉ --- */
.main-footer-bottom {
  background-color: var(--dark-color);
  color: var(--light-color);
  padding: 20px 0;
  text-align: center;
}

.main-footer-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links a {
  color: var(--light-color);
  text-decoration: none;
  margin-left: 15px;
  font-weight: 700;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--primary-color);
}

/* --- RESPONSIVIDADE --- */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .hero-content h1 {
    font-size: 2.8rem;
  }

  .main-header .container {
    flex-direction: column;
    gap: 10px;
  }

  .main-header nav ul li a {
    margin: 0 8px;
    font-size: 0.9rem;
  }
  
  .about-content, .location-content {
    flex-direction: column;
  }
  
  .form-group {
    flex-direction: column;
  }

  .main-footer-bottom .container {
    flex-direction: column;
    gap: 10px;
  }
}
</style>