<template>
  <div id="bakery-landing-page">
    <section class="hero-section">
      <img src="../assets/logo_famalicense.png" alt="Logo Padaria Famalicense" class="logo">
      <h1>Bem-vindo à Padaria Famalicense!</h1>
      <p>Pão quentinho e delícias para toda a família.</p>
    </section>

    <nav class="main-menu">
      <ul>
        <li @click="showSection('home')" :class="{ active: activeSection === 'home' }">HOME</li>
        <li @click="showSection('cardapio')" :class="{ active: activeSection === 'cardapio' }">CARDÁPIO</li>
        <li @click="showSection('nossaCasa')" :class="{ active: activeSection === 'nossaCasa' }">NOSSA CASA</li>
        <li @click="showSection('encomendas')" :class="{ active: activeSection === 'encomendas' }">ENCOMENDAS</li>
        <li @click="showSection('localizacao')" :class="{ active: activeSection === 'localizacao' }">LOCALIZAÇÃO</li>
      </ul>
    </nav>

    <main class="content-sections">
      <section v-if="activeSection === 'home'" class="section-content">
        <h2>Seja bem-vindo(a)!</h2>
        <p>Descubra a tradição e o sabor que só a Padaria Famalicense pode oferecer. Desde 1980, transformamos ingredientes simples em momentos inesquecíveis.</p>
        <p>Venha nos visitar e sinta o aroma de pão fresco!</p>

        <div class="home-cards-container">
          <div class="info-card music-card">
            <div class="info-card-image-wrapper">
              <div class="image-gradient-overlay"></div>
            </div>
            <div class="card-content">
              <h3>Noite de Música</h3>
              <h4>Acústico Music - AO VIVO</h4>
              <p class="details">Entrada Franca!</p>
              <p class="schedule">De Sexta e Sábado</p>
              <p class="time">Das 20h. às 23h30.</p>
              <p class="invitation">Ótimo ambiente para trazer os amigos e a família.</p>
              <p class="location-text">RUA CLIMACO BARBOSA, 46</p>
              <a href="https://www.famalicense.com.br" target="_blank" class="website-link">www.famalicense.com.br</a>
            </div>
          </div>

          <div class="info-card delivery-card">
            <div class="new-schedule-badge">NOVO HORÁRIO</div>
            <div class="info-card-image-wrapper">
              <div class="image-gradient-overlay"></div>
            </div>
            <div class="card-content">
              <h3>DELIVERY AOS DOMINGOS</h3>
              <p class="highlight">TODOS OS DOMINGOS</p>
              <p class="time-delivery">A PARTIR DAS 9H.</p>
              <p class="note">( Antecipe suas encomendas - (11) 3208-1804 )</p>
              <p class="greeting">A equipe Famalicense deseja a todos boas festas!</p>
            </div>
          </div>
        </div>
      </section>

      <section v-if="activeSection === 'cardapio'" class="section-content">
        <h2>Nosso Cardápio</h2>
        <div class="carousel-container">
          <img :src="menuImages[currentSlide]" :alt="'Cardápio ' + (currentSlide + 1)" class="carousel-slide" @click="openLightbox(currentSlide)">

          <button @click="prevSlide" class="carousel-button prev">&#10094;</button>
          <button @click="nextSlide" class="carousel-button next">&#10095;</button>
          <div class="carousel-dots">
            <span v-for="(image, index) in menuImages" :key="index"
                  @click="goToSlide(index)"
                  :class="{ active: index === currentSlide }" class="dot"></span>
          </div>
        </div>
      </section>

      <section v-if="activeSection === 'nossaCasa'" class="section-content">
        <h2>Nossa Casa</h2>
        <p>A Padaria Famalicense é um espaço aconchegante e familiar, onde cada detalhe foi pensado para proporcionar a melhor experiência aos nossos clientes.</p>
        <p>Dispomos de um ambiente climatizado e Wi-Fi gratuito para que você possa desfrutar de um bom café com tranquilidade.</p>
        <p>Conheça nossa história e a paixão que colocamos em cada produto.</p>
      </section>

      <section v-if="activeSection === 'encomendas'" class="section-content">
        <h2>Faça sua Encomenda!</h2>
        <p>Precisa de algo especial para seu evento ou reunião? Faça sua encomenda conosco!</p>
        <p>Aceitamos pedidos para festas, coffee breaks e reuniões corporativas.</p>
        <p>Entre em contato pelo telefone: (XX) XXXX-XXXX ou preencha nosso formulário de contato para mais informações.</p>
        <form class="encomenda-form">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required>

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>

          <label for="pedido">Seu Pedido:</label>
          <textarea id="pedido" name="pedido" rows="5" required></textarea>

          <button type="submit">Enviar Pedido</button>
        </form>
      </section>

      <section v-if="activeSection === 'localizacao'" class="section-content">
        <h2>Onde Estamos</h2>
        <p>Venha nos visitar!</p>
        <address>
          Rua da Panificadora, 123<br>
          Bairro do Pão Quente<br>
          Cidade Saborosa, SP - CEP: 12345-678
        </address>
        <p>Horário de Funcionamento:</p>
        <ul>
          <li>Segunda a Sábado: 06h00 às 20h00</li>
          <li>Domingo: 07h00 às 13h00</li>
        </ul>
        <p>Esperamos por você!</p>
        <div class="map-placeholder">
          [Placeholder para Google Maps ou outro serviço de mapas]
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>CONTATO</h3>
          <p>Telefones:</p>
          <ul>
            <li>(11) 2935-3552</li>
            <li>(11) 3208-1804</li>
            <li>(11) 3277-4394</li>
            <li>Celular: (11) 99804-1804</li>
          </ul>
          <p>Email: <a href="mailto:famalicense@famalicense.com.br">famalicense@famalicense.com.br</a></p>
        </div>

        <div class="footer-section">
          <h3>HORÁRIOS</h3>
          <p>Segunda à Quinta: 06h00 às 22h00</p>
          <p>Sexta e Sábado: 06h00 às 00h00</p>
          <p>Domingos e Feriados: 06h00 às 22h00</p>
          <p class="delivery-note">(Consulte nossos horários para Delivery)</p>
        </div>

        <div class="footer-section">
          <h3>LOCALIZAÇÃO</h3>
          <address>R. Clímaco Barbosa, 46</address>
          <p>São Paulo, SP - CEP: 01523-000</p>
        </div>

        <div class="footer-section">
          <h3>FALE CONOSCO</h3>
          <button @click="showSection('encomendas')" class="contact-button">Fale Conosco</button>
        </div>
      </div>
      <p class="copyright">&copy; {{ currentYear }} Padaria Famalicense. Todos os direitos reservados.</p>
    </footer>

    <transition name="fade">
      <div v-if="lightboxOpen" class="lightbox-overlay" @click.self="closeLightbox">
        <div class="lightbox-content">
          <button class="close-lightbox" @click="closeLightbox">&times;</button>
          <button class="lightbox-nav-button prev" @click="lightboxPrev">&#10094;</button>
          <img :src="menuImages[currentLightboxIndex]" :alt="'Cardápio ampliado ' + (currentLightboxIndex + 1)" class="lightbox-image">
          <button class="lightbox-nav-button next" @click="lightboxNext">&#10095;</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// Importar todas as imagens do cardápio
import cardapio1 from '../assets/cardapio1.jpg';
import cardapio2 from '../assets/cardapio2.jpg';
import cardapio3 from '../assets/cardapio3.jpg';
import cardapio4 from '../assets/cardapio4.jpg';
import cardapio5 from '../assets/cardapio5.jpg';
import cardapio6 from '../assets/cardapio6.jpg';
import cardapio7 from '../assets/cardapio7.jpg';
import cardapio8 from '../assets/cardapio8.jpg';
import cardapio9 from '../assets/cardapio9.jpg';
import cardapio10 from '../assets/cardapio10.jpg';
import cardapio11 from '../assets/cardapio11.jpg';
import cardapio12 from '../assets/cardapio12.jpg';


export default {
  name: 'BakeryLandingPage',
  data() {
    return {
      activeSection: 'home',
      currentYear: new Date().getFullYear(),
      menuImages: [
        cardapio1, cardapio2, cardapio3, cardapio4,
        cardapio5, cardapio6, cardapio7, cardapio8,
        cardapio9, cardapio10, cardapio11, cardapio12
      ],
      currentSlide: 0, // Índice da imagem atual do carrossel na página
      lightboxOpen: false, // Controla a visibilidade do lightbox
      currentLightboxIndex: 0, // Índice da imagem atual no lightbox
    };
  },
  methods: {
    showSection(sectionName) {
      this.activeSection = sectionName;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.menuImages.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.menuImages.length) % this.menuImages.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    openLightbox(index) {
      this.currentLightboxIndex = index;
      this.lightboxOpen = true;
      // Impede o scroll do body quando o lightbox está aberto
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.lightboxOpen = false;
      // Restaura o scroll do body
      document.body.style.overflow = '';
    },
    lightboxNext() {
      this.currentLightboxIndex = (this.currentLightboxIndex + 1) % this.menuImages.length;
    },
    lightboxPrev() {
      this.currentLightboxIndex = (this.currentLightboxIndex - 1 + this.menuImages.length) % this.menuImages.length;
    },
     // Adiciona um listener para teclas (Esc para fechar, setas para navegar)
    handleKeydown(event) {
      if (this.lightboxOpen) {
        if (event.key === 'Escape') {
          this.closeLightbox();
        } else if (event.key === 'ArrowRight') {
          this.lightboxNext();
        } else if (event.key === 'ArrowLeft') {
          this.lightboxPrev();
        }
      }
    },
  },
  mounted() {
    // Adiciona o listener de evento de teclado quando o componente é montado
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    // Remove o listener de evento de teclado antes do componente ser destruído
    window.removeEventListener('keydown', this.handleKeydown);
    // Garante que o scroll do body seja restaurado se o componente for desmontado com o lightbox aberto
    document.body.style.overflow = '';
  },
};
</script>

<style scoped>
#bakery-landing-page {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #fdf6e0;
  line-height: 1.6;
}

/* Hero Section Styles */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  background-color: #fdf6e0;
  border-bottom: 1px solid #eee;
  min-height: 250px;
}

.hero-section .logo {
  max-width: 200px;
  height: auto;
  margin-bottom: 15px;
}

.hero-section h1 {
  font-size: 2.8em;
  color: #F1C232;
  margin-bottom: 10px;
}

.hero-section p {
  font-size: 1.3em;
  color: #666;
}

/* Navigation Menu Styles */
.main-menu {
  background-color: #F1C232;
  padding: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.main-menu ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  max-width: 960px;
}

.main-menu li {
  cursor: pointer;
  padding: 15px 25px;
  font-weight: bold;
  color: #8b4513;
  transition: background-color 0.4s ease-out, color 0.4s ease-out, box-shadow 0.4s ease-out;
  border-radius: 0px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.main-menu li::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleX(0);
  transition: transform 0.4s ease-out;
  z-index: 0;
}

.main-menu li:hover::before {
  transform: scaleX(1);
}

.main-menu li span {
  position: relative;
  z-index: 1;
}

.main-menu li.active {
  background-color: #fdd251;
  border-radius: 0px;
  box-shadow: none;
}

/* Dynamic Content Sections Styles */
.content-sections {
  padding: 40px 20px;
  max-width: 960px;
  margin: 0 auto;
}

.section-content {
  background-color: #fffaeb;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.section-content h2 {
  color: #F1C232;
  font-size: 2.2em;
  margin-bottom: 20px;
  text-align: center;
}

.section-content h3 {
  color: #8b4513;
  font-size: 1.6em;
  margin-top: 25px;
  margin-bottom: 10px;
}

.section-content p {
  margin-bottom: 15px;
  font-size: 1.1em;
  line-height: 1.8;
}

.section-content ul {
  list-style: disc;
  margin-left: 25px;
  margin-bottom: 15px;
}

.section-content ul li {
  margin-bottom: 8px;
  font-size: 1.05em;
}

/* Carrossel styles */
.carousel-container {
  position: relative;
  max-width: 550px; /* Ajuste conforme necessário */
  margin: 20px auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.carousel-slide {
  width: 100%;
  display: block;
  border-radius: 8px;
  object-fit: contain; /* Revertido para 'contain' */
  max-height: 750px; /* Aumentado para acomodar a altura do seu cardápio */
  cursor: zoom-in; /* Indica que a imagem é clicável para ampliar */
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.5em;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  z-index: 10;
}

.carousel-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.carousel-button.prev {
  left: 10px;
}

.carousel-button.next {
  right: 10px;
}

.carousel-dots {
  text-align: center;
  padding: 10px 0;
  background-color: #fff;
  border-top: 1px solid #eee;
}

.dot {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.dot.active {
  background-color: #F1C232;
  transform: scale(1.2);
}

/* Encomenda Form Styles */
.encomenda-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.encomenda-form label {
  font-weight: bold;
  color: #555;
}

.encomenda-form input[type="text"],
.encomenda-form input[type="email"],
.encomenda-form textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
}

.encomenda-form textarea {
  resize: vertical;
}

.encomenda-form button {
  background-color: #F1C232;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

.encomenda-form button:hover {
  background-color: #8b4513;
}

/* Localização Map Placeholder */
.map-placeholder {
  background-color: #eee;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-style: italic;
  color: #777;
  margin-top: 20px;
}

/* Footer Styles */
.site-footer {
  text-align: center;
  padding: 30px 20px;
  background-color: #333;
  color: #f8f8f8;
  border-top: 1px solid #eee;
  font-size: 0.95em;
}

.site-footer .footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto 20px auto;
  text-align: left;
}

.site-footer .footer-section {
  flex: 1;
  min-width: 200px;
  padding: 10px;
}

.site-footer .footer-section h3 {
  color: #F1C232;
  font-size: 1.2em;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.site-footer .footer-section p,
.site-footer .footer-section ul {
  font-size: 0.9em;
  margin-bottom: 8px;
  color: #ccc;
}

.site-footer .footer-section ul {
  list-style: none;
  padding: 0;
}

.site-footer .footer-section a {
  color: #F1C232;
  text-decoration: none;
}

.site-footer .footer-section a:hover {
  text-decoration: underline;
}

.site-footer .delivery-note {
  font-style: italic;
  font-size: 0.8em;
  margin-top: 10px;
}

.site-footer .contact-button {
  background-color: #F1C232;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top: 10px;
}

.site-footer .contact-button:hover {
  background-color: #e0b429;
  color: #222;
}

.site-footer .copyright {
  margin-top: 20px;
  font-size: 0.8em;
  color: #aaa;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 15px;
}

/* Home Cards Container */
.home-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  align-items: stretch;
}

.info-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  flex: 1;
  max-width: 450px;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color 0.3s ease-in-out;
  border-radius: 12px;
  z-index: 1;
  pointer-events: none;
}

.info-card:hover::before {
  background-color: rgba(255, 255, 255, 0.1);
}

.info-card > .card-content {
  position: relative;
  z-index: 2;
}


.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.info-card-image-wrapper {
  height: 200px;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.info-card.music-card .info-card-image-wrapper {
  background-image: url('../assets/violao.jpg');
  background-size: cover;
  background-position: center;
}

.info-card.delivery-card .info-card-image-wrapper {
  background-image: url('../assets/delivery.jpg');
  background-size: cover;
  background-position: center;
}

.image-gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to bottom, transparent 0%, white 100%);
}

.card-content {
  padding: 25px;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  padding-top: 10px;
}

.info-card.music-card .card-content {
  padding: 20px;
  padding-top: 10px;
}

.info-card.music-card .card-content h3 {
  font-size: 1.6em;
  margin-bottom: 5px;
}

.info-card.music-card .card-content h4 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.info-card.music-card .card-content p {
  font-size: 0.9em;
  margin-bottom: 5px;
}

.info-card.music-card .card-content .website-link {
  margin-top: 10px;
  font-size: 0.9em;
}


.info-card h3 {
  color: #8b4513;
  font-size: 1.8em;
  margin-bottom: 10px;
}

.info-card h4 {
  color: #F1C232;
  font-size: 1.4em;
  margin-bottom: 15px;
}

.info-card p {
  color: #555;
  font-size: 1em;
  margin-bottom: 8px;
  line-height: 1.5;
}


.info-card .details,
.info-card .schedule,
.info-card .time,
.info-card .time-delivery,
.info-card .location-text {
  font-weight: bold;
  color: #333;
}

.info-card .highlight {
  font-size: 1.2em;
  color: #F1C232;
  font-weight: bold;
}

.info-card .note {
  font-size: 0.9em;
  font-style: italic;
  color: #777;
}

.info-card .website-link {
  color: #8b4513;
  text-decoration: none;
  font-weight: bold;
  margin-top: 15px;
  display: inline-block;
  transition: color 0.3s ease;
}

.info-card .website-link:hover {
  color: #F1C232;
  text-decoration: underline;
}

/* Selo "Novo Horário" */
.new-schedule-badge {
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: #b22222;
  color: white;
  padding: 8px 15px;
  font-size: 0.9em;
  font-weight: bold;
  border-radius: 5px;
  transform: rotate(5deg);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 3;
  text-transform: uppercase;
}


/* Responsive Adjustments for cards */
@media (max-width: 768px) {
  .home-cards-container {
    flex-direction: column;
    align-items: center;
  }

  .info-card {
    max-width: 90%;
  }

  .info-card-image-wrapper {
    height: 180px;
  }

  .card-content {
    padding-top: 15px;
    padding: 20px;
  }

  .info-card.music-card .card-content h3 {
    font-size: 1.5em;
  }
  .info-card.music-card .card-content h4 {
    font-size: 1.1em;
  }
  .info-card.music-card .card-content p {
    font-size: 0.85em;
  }
  .info-card.music-card .card-content .website-link {
    font-size: 0.85em;
  }

  .new-schedule-badge {
    top: -10px;
    right: -10px;
    transform: rotate(5deg);
  }

  .carousel-slide {
    max-height: 400px; /* Ajusta a altura da imagem do carrossel em telas menores */
  }
  .carousel-button {
    padding: 8px 12px;
    font-size: 1.2em;
  }
}

@media (max-width: 480px) {
    .info-card h3 {
        font-size: 1.5em;
    }
    .info-card h4 {
        font-size: 1.2em;
    }
    .info-card p {
        font-size: 0.9em;
    }
    .new-schedule-badge {
        font-size: 0.8em;
        padding: 6px 12px;
        top: -8px;
        right: -8px;
        transform: rotate(5deg);
    }
    .card-content {
        padding-top: 10px;
        padding: 15px;
    }
    .info-card-image-wrapper {
        height: 150px;
    }

    .info-card.music-card .card-content h3 {
      font-size: 1.3em;
    }
    .info-card.music-card .card-content h4 {
      font-size: 1em;
    }
    .info-card.music-card .card-content p {
      font-size: 0.8em;
    }
    .info-card.music-card .card-content .website-link {
      font-size: 0.8em;
    }
    .carousel-slide {
        max-height: 300px; /* Ajusta a altura da imagem do carrossel em telas muito pequenas */
    }
    .carousel-button {
        padding: 6px 10px;
        font-size: 1em;
    }
    .dot {
        height: 10px;
        width: 10px;
    }
}

/* Lightbox/Modal Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85); /* Fundo semi-transparente escuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Garante que fique acima de todo o conteúdo */
}

.lightbox-content {
  position: relative;
  max-width: 90%; /* Limita a largura do conteúdo do lightbox */
  max-height: 90%; /* Limita a altura do conteúdo do lightbox */
  display: flex;
  justify-content: center;
  align-items: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 90vh; /* Ocupa até 90% da altura da viewport */
  object-fit: contain; /* Garante que a imagem inteira seja visível */
  display: block;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
}

.close-lightbox {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2.5em;
  cursor: pointer;
  z-index: 10000; /* Acima da imagem e botões de navegação */
  transition: color 0.3s ease;
}

.close-lightbox:hover {
  color: #F1C232;
}

.lightbox-nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 2em;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  z-index: 10000;
}

.lightbox-nav-button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.lightbox-nav-button.prev {
  left: 20px;
}

.lightbox-nav-button.next {
  right: 20px;
}

/* Transições para o lightbox */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Responsividade para o lightbox */
@media (max-width: 768px) {
  .lightbox-nav-button {
    padding: 10px 15px;
    font-size: 1.5em;
  }
  .close-lightbox {
    font-size: 2em;
    top: 10px;
    right: 10px;
  }
  .lightbox-nav-button.prev {
    left: 10px;
  }
  .lightbox-nav-button.next {
    right: 10px;
  }
}

@media (max-width: 480px) {
  .lightbox-image {
    max-height: 85vh; /* Ainda menor em telas muito pequenas */
  }
  .lightbox-nav-button {
    padding: 8px 12px;
    font-size: 1.2em;
  }
  .close-lightbox {
    font-size: 1.8em;
  }
}
</style>