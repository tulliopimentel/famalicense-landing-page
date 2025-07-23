<template>
  <div class="bakery-landing-page">
    <header class="main-header" :class="{ 'scrolled': isScrolled }">
      <div class="container">
        <div class="logo">Padaria Famalicense</div>
        <nav>
          <ul>
            <li><a href="#home" @click.prevent="scrollTo('home')" :class="{ active: activeSection === 'home' }">HOME</a>
            </li>
            <li><a href="#cardapio" @click.prevent="scrollTo('cardapio')"
                :class="{ active: activeSection === 'cardapio' }">CARDÁPIO</a></li>
            <li><a href="#nossa-casa" @click.prevent="scrollTo('nossa-casa')"
                :class="{ active: activeSection === 'nossa-casa' }">NOSSA CASA</a></li>
            <li><a href="#encomendas" @click.prevent="scrollTo('encomendas')"
                :class="{ active: activeSection === 'encomendas' }">ENCOMENDAS</a></li>
            <li><a href="#localizacao" @click.prevent="scrollTo('localizacao')"
                :class="{ active: activeSection === 'localizacao' }">LOCALIZAÇÃO</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <section id="home" class="hero-section section">
        <div class="hero-content">
          <h1 class="animate-on-scroll">Qualidade e tradição desde 1961</h1>
          <p class="animate-on-scroll">Qualidade, sabor, variedade e tradição você encontra na Famalicense. Aqui tem
            pães deliciosos, tudo de confeitaria, almoço diversificado, pizzaria e uma cerveja sempre geladinha. Traga
            sua família e amigos para provar nossas saborosas pizzas, salgados e refeições. Você irá se apaixonar.</p>
          <button @click="scrollTo('cardapio')" class="cta-button animate-on-scroll">Veja nosso Cardápio</button>
        </div>
      </section>

      <section id="cardapio" class="menu-section section">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Nosso Cardápio</h2>
          <p class="section-subtitle animate-on-scroll">Clique na imagem para ampliar</p>
          <div class="cardapio-carousel-wrapper animate-on-scroll">
            <button @click="prevCardapioImage" class="cardapio-nav prev" aria-label="Imagem Anterior">&#10094;</button>
            <div class="cardapio-image-container">
              <transition name="fade" mode="out-in">
                <img :key="cardapioImages[cardapioCurrentIndex]" :src="cardapioImages[cardapioCurrentIndex]"
                  alt="Item do cardápio" class="cardapio-image"
                  @click="openModal(cardapioImages[cardapioCurrentIndex])" />
              </transition>
            </div>
            <button @click="nextCardapioImage" class="cardapio-nav next" aria-label="Próxima Imagem">&#10095;</button>
          </div>
        </div>
      </section>

      <section id="nossa-casa" class="about-section section">
        <div class="container about-content">
          <div class="about-image animate-on-scroll">
            <transition name="fade" mode="out-in">
              <img :key="currentSlide.imageSrc" :src="currentSlide.imageSrc" :alt="currentSlide.title">
            </transition>
            <button @click="prevSlide" class="carousel-nav prev" aria-label="Slide Anterior">&#10094;</button>
            <button @click="nextSlide" class="carousel-nav next" aria-label="Próximo Slide">&#10095;</button>
          </div>
          <div class="about-text animate-on-scroll">
            <transition name="fade" mode="out-in">
              <div :key="currentSlide.title">
                <h2 class="section-title">{{ currentSlide.title }}</h2>
                <p>{{ currentSlide.text }}</p>
              </div>
            </transition>
          </div>
        </div>
      </section>

      <section id="encomendas" class="order-section section">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Faça seu pedido</h2>
          <p class="section-subtitle animate-on-scroll">Peça online de forma rápida e prática, ou entre em contato
            conosco.</p>
          <div class="order-options animate-on-scroll">
            <a href="https://famalicense.bedelivery.com.br/" target="_blank" rel="noopener noreferrer"
              class="cta-button">
              Pedir Online via BeDelivery
            </a>
            <p class="phone-contact">
              ou ligue para nós <br>
              <a href="tel:+5511998041804" class="phone-number">(11) 99804-1804</a>
            </p>
          </div>
        </div>
      </section>

      <section id="localizacao" class="location-section section">
        <div class="container">
          <h2 class="section-title animate-on-scroll">Nossa Localização</h2>
          <p class="section-subtitle animate-on-scroll">Venha nos visitar e sentir o cheirinho de pão quente!</p>
          <div class="location-content">
            <div class="address-info animate-on-scroll">
              <h3>Padaria Famalicense</h3>
              <p>R. Climaco barbosa, 46 - Cambuci</p>
              <p>São Paulo, SP - CEP 01523-000</p>
              <p><strong>Horário de Funcionamento:</strong></p>
              <p>Segunda a Quinta: 6h às 22h</p>
              <p>Sexta e Sábado: 6h às 00h</p>
              <p>Domingos e feriados: 6h às 22h</p>
            </div>
            <div class="map-container animate-on-scroll">
              <iframe src="http://googleusercontent.com/maps.google.com/5" width="600" height="450" style="border:0;"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

    <div v-if="isModalOpen" class="modal-backdrop" @click="closeModal">
      <div class="modal-content" @click.stop>
        <img :src="modalImageSrc" alt="Imagem do cardápio ampliada" class="modal-image">
        <button @click="closeModal" class="modal-close-button" aria-label="Fechar modal">&times;</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

// IMAGENS DO CARROSSEL NOSSA CASA
import imgLogo from '../assets/logo.png'
import imgPadaria from '../assets/padaria1.png';
import imgConfeitaria from '../assets/confeitaria1.png';
import imgPizzaria from '../assets/padaria2.png';
import imgRestaurante from '../assets/restaurantes.png';

// IMAGENS DO CARROSSEL CARDÁPIO (12 IMAGENS)
// ATENÇÃO: Verifique se os nomes dos arquivos estão corretos na sua pasta `assets`
import cardapioImg1 from '../assets/cardapio1.jpg';
import cardapioImg2 from '../assets/cardapio2.jpg';
import cardapioImg3 from '../assets/cardapio3.jpg';
import cardapioImg4 from '../assets/cardapio4.jpg';
import cardapioImg5 from '../assets/cardapio5.jpg';
import cardapioImg6 from '../assets/cardapio6.jpg';
import cardapioImg7 from '../assets/cardapio7.jpg';
import cardapioImg8 from '../assets/cardapio8.jpg';
import cardapioImg9 from '../assets/cardapio9.jpg';
import cardapioImg10 from '../assets/cardapio10.jpg';
import cardapioImg11 from '../assets/cardapio11.jpg';
import cardapioImg12 from '../assets/cardapio12.jpg';


// --- LÓGICA GERAL E SCROLL ---
const isScrolled = ref(false);
const activeSection = ref('home');
let animationObserver = null;
let scrollSpyObserver = null;

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth',
    });
  }
};

// --- LÓGICA DO CARROSSEL "NOSSA CASA" ---
const currentSlideIndex = ref(0);
let autoplayInterval = null;
const nossaCasaSlides = ref([
  { title: 'Nossa Casa', text: 'Somos diversificados e populares. Atuamos como padaria, confeitaria, restaurante a la carte, self-service grill e pizzaria...', imageSrc: imgLogo },
  { title: 'Padaria', text: 'Grande variedade de pães: francês tradicional, integral, c/ torresmo, multi-grãos, italiano...', imageSrc: imgPadaria },
  { title: 'Confeitaria', text: 'Tudo feito com amor e dedicação e com uma equipe bem entrosada, também oferecemos uma grande variedade de bolos, doces e salgados...', imageSrc: imgConfeitaria },
  { title: 'Pizzaria', text: 'Temos uma grande variedade de pizzas. Um ambiente gostoso e muito agradável no piso superior para receber sua família e seus amigos...', imageSrc: imgPizzaria },
  { title: 'Restaurante', text: 'Oferecemos aos nossos clientes a opção de um almoço a la carte tradicional ou em nosso piso superior a opção do Self-Service Grill.', imageSrc: imgRestaurante }
]);
const currentSlide = computed(() => nossaCasaSlides.value[currentSlideIndex.value]);
const nextSlide = () => { currentSlideIndex.value = (currentSlideIndex.value + 1) % nossaCasaSlides.value.length; };
const prevSlide = () => { currentSlideIndex.value = (currentSlideIndex.value - 1 + nossaCasaSlides.value.length) % nossaCasaSlides.value.length; };
const startAutoplay = () => { stopAutoplay(); autoplayInterval = setInterval(nextSlide, 7000); };
const stopAutoplay = () => { if (autoplayInterval) clearInterval(autoplayInterval); };

// --- LÓGICA DO CARROSSEL "CARDÁPIO" ---
const cardapioImages = ref([
  cardapioImg1, cardapioImg2, cardapioImg3, cardapioImg4,
  cardapioImg5, cardapioImg6, cardapioImg7, cardapioImg8,
  cardapioImg9, cardapioImg10, cardapioImg11, cardapioImg12
]);
const cardapioCurrentIndex = ref(0);
const nextCardapioImage = () => { cardapioCurrentIndex.value = (cardapioCurrentIndex.value + 1) % cardapioImages.value.length; };
const prevCardapioImage = () => { cardapioCurrentIndex.value = (cardapioCurrentIndex.value - 1 + cardapioImages.value.length) % cardapioImages.value.length; };

// --- LÓGICA DO MODAL DE IMAGEM ---
const isModalOpen = ref(false);
const modalImageSrc = ref('');
const openModal = (imageSrc) => {
  modalImageSrc.value = imageSrc;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden'; // Impede o scroll do fundo
};
const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = ''; // Restaura o scroll do fundo
};
const handleKeydown = (e) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal();
  }
};


// --- LIFECYCLE HOOKS (onMounted, onBeforeUnmount) ---
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('keydown', handleKeydown);

  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animationObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  elementsToAnimate.forEach(el => animationObserver.observe(el));

  const sections = document.querySelectorAll('.section');
  scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        activeSection.value = entry.target.id;
      }
    });
  }, { threshold: [0.5, 0.9] });
  sections.forEach(section => scrollSpyObserver.observe(section));

  startAutoplay();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', handleKeydown);
  if (animationObserver) animationObserver.disconnect();
  if (scrollSpyObserver) scrollSpyObserver.disconnect();
  stopAutoplay();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@700;800&display=swap');

/* ... (Todo o CSS anterior permanece o mesmo até a seção de cardápio) ... */
.bakery-landing-page {
  --primary-color: #FFC107;
  --accent-color: #D32F2F;
  --dark-color: #333;
  --light-color: #FFF;
  --bg-light-cream: #FFF8E1;
  --text-color: #5D4037;
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

.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

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
  background-color: rgba(255, 248, 225, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

.hero-section {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2869&auto=format&fit=crop') no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--light-color);
  padding: 0 20px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-content h1 {
  font-family: var(--font-headings);
  font-size: 4rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 700px;
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
  text-decoration: none;
  display: inline-block;
}

.cta-button:hover {
  background-color: #ffca28;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* --- SEÇÃO CARDÁPIO (ESTILOS DO CARROSSEL) --- */
.menu-section {
  background-color: var(--bg-light-cream);
}

.cardapio-carousel-wrapper {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.cardapio-image-container {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.cardapio-image {
  width: 100%;
  height: 600px;
  object-fit: contain;
  display: block;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cardapio-image:hover {
  transform: scale(1.05);
}

.cardapio-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 50%;
  z-index: 10;
  transition: background-color 0.3s ease;
  font-size: 1.5rem;
  line-height: 1;
  width: 50px;
  height: 50px;
}

.cardapio-nav:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.cardapio-nav.prev {
  left: -70px;
}

.cardapio-nav.next {
  right: -70px;
}

/* --- SEÇÃO NOSSA CASA --- */
.about-section {
  background-color: var(--light-color);
}

.about-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.about-image {
  flex: 1;
  position: relative;
}

.about-image img {
  width: 100%;
  height: 450px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: block;
}

.about-text {
  flex: 1;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 50%;
  z-index: 10;
  transition: background-color 0.3s ease;
  font-size: 1.5rem;
  line-height: 1;
  width: 50px;
  height: 50px;
}

.carousel-nav:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.carousel-nav.prev {
  left: 15px;
}

.carousel-nav.next {
  right: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* --- SEÇÃO ENCOMENDAS --- */
.order-section {
  background-color: var(--bg-light-cream);
  text-align: center;
}

.order-options {
  margin-top: -20px;
}

.phone-contact {
  margin-top: 25px;
  font-size: 1.1rem;
  color: var(--text-color);
}

.phone-number {
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--dark-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.phone-number:hover {
  color: var(--accent-color);
}

/* --- SEÇÃO LOCALIZAÇÃO --- */
.location-section {
  background-color: var(--light-color);
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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

/* --- ESTILOS DO MODAL DE IMAGEM --- */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
}

.modal-close-button {
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: white;
  border: 2px solid var(--dark-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--dark-color);
  cursor: pointer;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}


/* --- RESPONSIVIDADE --- */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .hero-content h1 {
    font-size: 2.8rem;
  }

  .main-header .container,
  .about-content,
  .location-content,
  .main-footer-bottom .container {
    flex-direction: column;
    gap: 10px;
  }

  .main-header nav ul li a {
    margin: 0 8px;
    font-size: 0.9rem;
  }

  .about-text {
    height: auto;
    margin-top: 30px;
  }

  .cardapio-image {
    height: 400px;
  }

  .cardapio-nav.prev {
    left: 5px;
  }

  .cardapio-nav.next {
    right: 5px;
  }
}
</style>