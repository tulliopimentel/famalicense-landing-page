<template>
  <div class="famalicense-landing">
    <!-- Header Moderno -->
    <header class="header" :class="{ 'scrolled': isScrolled }">
      <div class="header-container">
        <div class="logo-container">
          <img :src="imgLogo" alt="Famalicense Logo" class="logo-img" />
          <span class="logo-text">Famalicense</span>
        </div>

        <nav class="nav" :class="{ 'mobile-open': isMobileMenuOpen }">
          <a href="#inicio" @click.prevent="scrollToSection('inicio')" class="nav-link">Início</a>
          <a href="#sobre" @click.prevent="scrollToSection('sobre')" class="nav-link">Sobre</a>
          <a href="#produtos" @click.prevent="scrollToSection('produtos')" class="nav-link">Produtos</a>
          <a href="#cardapio" @click.prevent="scrollToSection('cardapio')" class="nav-link">Cardápio</a>
          <a href="#eventos" @click.prevent="scrollToSection('eventos')" class="nav-link">Eventos</a>
          <a href="#contato" @click.prevent="scrollToSection('contato')" class="nav-link">Contato</a>
          <a href="https://famalicense.bedelivery.com.br/" target="_blank" class="btn-primary-nav">Peça Agora</a>
        </nav>

        <button class="mobile-toggle" @click="toggleMobileMenu" :class="{ 'active': isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="inicio" class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-line">Tradição e Sabor</span>
          <span class="title-highlight">desde 1961</span>
        </h1>
        <p class="hero-subtitle">
          Mais de 60 anos servindo as melhores receitas de padaria, confeitaria e pizzaria no coração do Cambuci
        </p>
        <div class="hero-buttons">
          <button @click="scrollToSection('cardapio')" class="btn-hero-primary">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Ver Cardápio
          </button>
          <a href="tel:+551132081804" class="btn-hero-secondary">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (11) 3208-1804
          </a>
        </div>
        <div class="hero-features">
          <div class="feature-badge">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>60+ anos de tradição</span>
          </div>
          <div class="feature-badge">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
            </svg>
            <span>Aberto 7 dias por semana</span>
          </div>
          <div class="feature-badge">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path
                d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
            <span>Delivery disponível</span>
          </div>
        </div>
      </div>
      <div class="hero-scroll-indicator" @click="scrollToSection('sobre')">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>


    <!-- Seção Sobre a Famalicense -->
    <section id="sobre" class="about-section">
      <div class="about-container">
        <div class="about-content">
          <div class="about-text-content" data-aos="fade-right">
            <span class="section-tag">Nossa História</span>
            <h2 class="section-heading">Tradição Portuguesa no Coração do Cambuci</h2>
            <p class="about-description">
              Desde 1961, a Famalicense é mais que uma padaria. Somos uma homenagem à cidade de Vila Nova de
              Famalicão,
              em Portugal, trazendo o melhor da tradição portuguesa para São Paulo.
            </p>
            <p class="about-description">
              Qualidade, sabor, variedade e tradição você encontra aqui. Pães deliciosos, confeitaria artesanal,
              almoço diversificado, pizzaria e um ambiente acolhedor para toda a família.
            </p>
            <div class="about-stats">
              <div class="stat-item">
                <div class="stat-number">60+</div>
                <div class="stat-label">Anos de História</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">5</div>
                <div class="stat-label">Especialidades</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">1000+</div>
                <div class="stat-label">Clientes Felizes</div>
              </div>
            </div>
          </div>
          <div class="about-image-content" data-aos="fade-left">
            <div class="about-image-main">
              <img :src="imgLogo" alt="Padaria Famalicense" class="about-img" />
              <div class="about-badge">
                <div class="badge-content">
                  <div class="badge-year">1961</div>
                  <div class="badge-text">Desde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Produtos/Especialidades -->
    <section id="produtos" class="products-section">
      <div class="products-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">O que oferecemos</span>
          <h2 class="section-heading">Nossas Especialidades</h2>
          <p class="section-description">
            Diversidade e qualidade em cada produto que servimos
          </p>
        </div>

        <div class="products-grid">
          <div class="product-card" data-aos="fade-up" data-aos-delay="100" @click="setCurrentSlide(1)">
            <div class="product-image">
              <img :src="imgPadaria" alt="Padaria" />
              <div class="product-overlay">
                <button class="product-btn">Ver Mais</button>
              </div>
            </div>
            <div class="product-content">
              <h3 class="product-title">Padaria</h3>
              <p class="product-text">
                Grande variedade de pães: francês tradicional, integral, com torresmo, multi-grãos,
                italiano, folar português e muito mais.
              </p>
            </div>
          </div>

          <div class="product-card" data-aos="fade-up" data-aos-delay="200" @click="setCurrentSlide(2)">
            <div class="product-image">
              <img :src="imgConfeitaria" alt="Confeitaria" />
              <div class="product-overlay">
                <button class="product-btn">Ver Mais</button>
              </div>
            </div>
            <div class="product-content">
              <h3 class="product-title">Confeitaria</h3>
              <p class="product-text">
                Bolos, doces e salgados feitos com amor e dedicação, seguindo receitas tradicionais
                que encantam gerações.
              </p>
            </div>
          </div>

          <div class="product-card" data-aos="fade-up" data-aos-delay="300" @click="setCurrentSlide(3)">
            <div class="product-image">
              <img :src="imgPizzaria" alt="Pizzaria" />
              <div class="product-overlay">
                <button class="product-btn">Ver Mais</button>
              </div>
            </div>
            <div class="product-content">
              <h3 class="product-title">Pizzaria</h3>
              <p class="product-text">
                Ambiente acolhedor no piso superior com grande variedade de pizzas para você
                saborear com família e amigos.
              </p>
            </div>
          </div>

          <div class="product-card" data-aos="fade-up" data-aos-delay="400" @click="setCurrentSlide(4)">
            <div class="product-image">
              <img :src="imgRestaurante" alt="Restaurante" />
              <div class="product-overlay">
                <button class="product-btn">Ver Mais</button>
              </div>
            </div>
            <div class="product-content">
              <h3 class="product-title">Restaurante</h3>
              <p class="product-text">
                Almoço à la carte tradicional ou self-service grill no piso superior,
                com os principais pratos da gastronomia paulista.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Novidades e Eventos -->
    <section class="highlights-section">
      <div class="highlights-container">
        <div class="highlights-grid">
          <div class="highlight-card highlight-music" data-aos="fade-right">
            <div class="highlight-icon">
              <svg width="48" height="48" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
            </div>
            <div class="highlight-content">
              <h3>Música ao Vivo</h3>
              <p>Acústico Music todas as sextas e sábados, das 20h às 23h30. Entrada franca!</p>
              <div class="highlight-tag">Toda semana</div>
            </div>
          </div>

          <div class="highlight-card highlight-delivery" data-aos="fade-left">
            <div class="highlight-icon">
              <svg width="48" height="48" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path
                  d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
            </div>
            <div class="highlight-content">
              <h3>Delivery aos Domingos</h3>
              <p>Agora você pode receber nossas delícias em casa também aos domingos!</p>
              <a href="tel:+551132081804" class="highlight-link">(11) 3208-1804</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Cardápio -->
    <section id="cardapio" class="menu-section">
      <div class="menu-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Confira</span>
          <h2 class="section-heading">Nosso Cardápio</h2>
          <p class="section-description">Explore nossa variedade de produtos e sabores</p>
        </div>

        <div class="menu-carousel" data-aos="fade-up">
          <button @click="prevCardapioImage" class="carousel-btn carousel-btn-prev">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div class="menu-image-wrapper">
            <transition name="slide-fade" mode="out-in">
              <img :key="cardapioImages[cardapioCurrentIndex]" :src="cardapioImages[cardapioCurrentIndex]"
                alt="Cardápio Famalicense" class="menu-image"
                @click="openModal(cardapioImages, cardapioCurrentIndex)" />
            </transition>
            <div class="menu-image-counter">
              {{ cardapioCurrentIndex + 1 }} / {{ cardapioImages.length }}
            </div>
          </div>

          <button @click="nextCardapioImage" class="carousel-btn carousel-btn-next">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <p class="menu-hint">Clique na imagem para ampliar</p>
      </div>
    </section>

    <!-- Seção Eventos -->
    <section id="eventos" class="events-section">
      <div class="events-container">
        <div class="events-content">
          <div class="events-image" data-aos="fade-right">
            <img :src="imgEventos" alt="Eventos Famalicense" />
            <div class="events-badge">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
              </svg>
            </div>
          </div>

          <div class="events-text" data-aos="fade-left">
            <span class="section-tag">Espaço para Eventos</span>
            <h2 class="section-heading">Realize Seu Evento Conosco</h2>
            <p class="events-description">
              Temos o espaço perfeito para sua comemoração! Aniversários, confraternizações,
              reuniões familiares e muito mais.
            </p>

            <div class="events-features">
              <div class="feature-item">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                <span>Ambiente climatizado</span>
              </div>
              <div class="feature-item">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                <span>Cobramos apenas o consumo</span>
              </div>
              <div class="feature-item">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                <span>Cardápio variado</span>
              </div>
            </div>

            <div class="events-cta">
              <p class="events-cta-text">Consulte-nos para mais detalhes</p>
              <a href="tel:+551132081804" class="btn-events">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (11) 3208-1804
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Encomendas -->
    <!-- Seção Encomendas -->
    <section class="orders-section">
      <div class="orders-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Para suas festas</span>
          <h2 class="section-heading">Encomendas Especiais</h2>
          <p class="section-description">
            Bolos, salgados e doces para tornar sua festa inesquecível
          </p>
        </div>

        <div class="orders-carousel" data-aos="fade-up">
          <button @click="prevEncomendaImage" class="carousel-btn carousel-btn-prev">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div class="orders-image-wrapper">
            <transition name="slide-fade" mode="out-in">
              <img :key="encomendaImages[encomendaCurrentIndex]" :src="encomendaImages[encomendaCurrentIndex]"
                alt="Opções de encomenda" class="orders-image"
                @click="openModal(encomendaImages, encomendaCurrentIndex)" />
            </transition>
            <div class="orders-image-counter">
              {{ encomendaCurrentIndex + 1 }} / {{ encomendaImages.length }}
            </div>
          </div>

          <button @click="nextEncomendaImage" class="carousel-btn carousel-btn-next">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div class="orders-info">
          <p class="orders-note">Clique na imagem para ampliar</p>
          <p class="orders-disclaimer">
            * Preços sujeitos a alteração sem aviso prévio. Confirme os valores antes de encomendar.
          </p>
          <a href="tel:+551132081804" class="btn-orders">
            Fazer Encomenda
          </a>
        </div>
      </div>
    </section>

    <!-- Seção CTA - Fazer Pedido -->
    <section class="cta-section">
      <div class="cta-container" data-aos="zoom-in">
        <div class="cta-content">
          <h2 class="cta-heading">Pronto para saborear?</h2>
          <p class="cta-text">
            Peça online de forma rápida e prática, ou entre em contato conosco
          </p>
          <div class="cta-buttons">
            <a href="https://famalicense.bedelivery.com.br/" target="_blank" rel="noopener noreferrer"
              class="btn-cta-primary">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Pedir Online
            </a>
            <a href="tel:+551132081804" class="btn-cta-secondary">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Localização e Contato -->
    <section id="contato" class="contact-section">
      <div class="contact-container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-tag">Visite-nos</span>
          <h2 class="section-heading">Nossa Localização</h2>
          <p class="section-description">
            Venha nos visitar e sentir o cheirinho de pão quente!
          </p>
        </div>

        <div class="contact-content">
          <div class="contact-info" data-aos="fade-right">
            <div class="info-card">
              <div class="info-icon">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <div class="info-content">
                <h3>Endereço</h3>
                <p>R. Clímaco Barbosa, 46</p>
                <p>Cambuci - São Paulo, SP</p>
                <p>CEP 01523-000</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                </svg>
              </div>
              <div class="info-content">
                <h3>Horário de Funcionamento</h3>
                <p><strong>Segunda a Quinta:</strong> 6h às 22h</p>
                <p><strong>Sexta e Sábado:</strong> 6h à 00h</p>
                <p><strong>Domingos e Feriados:</strong> 6h às 22h</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div class="info-content">
                <h3>Telefone</h3>
                <a href="tel:+551132081804" class="contact-phone">(11) 3208-1804</a>
                <p class="contact-subtitle">Delivery e Encomendas</p>
              </div>
            </div>
          </div>

          <div class="contact-map" data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.886998888973!2d-46.6268440850708!3d-23.54048868468389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58996d311409%3A0x3ca54d994927b91d!2sR.%20Cl%C3%ADmaco%20Barbosa%2C%2046%20-%20Cambuci%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001523-000!5e0!3m2!1spt-BR!2sus!4v1702738457942!5m2!1spt-BR!2sus"
              width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-brand">
            <img :src="imgLogo" alt="Famalicense" class="footer-logo" />
            <h3>Padaria Famalicense</h3>
            <p>Tradição e qualidade desde 1961</p>
          </div>

          <div class="footer-links">
            <h4>Links Rápidos</h4>
            <a href="#inicio" @click.prevent="scrollToSection('inicio')">Início</a>
            <a href="#sobre" @click.prevent="scrollToSection('sobre')">Sobre</a>
            <a href="#produtos" @click.prevent="scrollToSection('produtos')">Produtos</a>
            <a href="#cardapio" @click.prevent="scrollToSection('cardapio')">Cardápio</a>
          </div>

          <div class="footer-contact">
            <h4>Contato</h4>
            <a href="tel:+551132081804">(11) 3208-1804</a>
            <p>R. Clímaco Barbosa, 46</p>
            <p>Cambuci - São Paulo, SP</p>
          </div>

          <div class="footer-hours">
            <h4>Horários</h4>
            <p>Seg - Qui: 6h às 22h</p>
            <p>Sex - Sáb: 6h à 00h</p>
            <p>Dom e Feriados: 6h às 22h</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} Padaria Famalicense. Todos os direitos reservados.</p>
          <div class="footer-social">
            <a href="https://www.instagram.com/famalicense/" aria-label="Instagram" target="_blank">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Modal de Imagem -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <button @click.stop="closeModal" class="modal-close">
        <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button @click.stop="prevModalImage" class="modal-nav modal-nav-prev">
        <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div class="modal-content" @click.stop>
        <transition name="modal-fade" mode="out-in">
          <img :key="modalImageSrc" :src="modalImageSrc" alt="Imagem ampliada" class="modal-img" />
        </transition>
      </div>

      <button @click.stop="nextModalImage" class="modal-nav modal-nav-next">
        <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Imports de imagens
import imgLogo from '../assets/logo.png'
import imgPadaria from '../assets/padaria1.png';
import imgConfeitaria from '../assets/confeitaria1.png';
import imgPizzaria from '../assets/padaria2.png';
import imgRestaurante from '../assets/restaurantes.png';
import imgEventos from '../assets/eventos.jpg';
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
import imgEncomenda1 from '../assets/encomenda1.jpg'
import imgEncomenda2 from '../assets/encomenda2.jpg'
import imgEncomenda3 from '../assets/encomenda3.jpg'
import imgEncomenda4 from '../assets/encomenda4.jpg'

// Estado
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const currentSlideIndex = ref(0);

// Cardápio
const cardapioImages = ref([
  cardapioImg1, cardapioImg2, cardapioImg3, cardapioImg4, cardapioImg5, cardapioImg6,
  cardapioImg7, cardapioImg8, cardapioImg9, cardapioImg10, cardapioImg11, cardapioImg12
]);
const cardapioCurrentIndex = ref(0);

// Encomendas
const encomendaImages = ref([imgEncomenda1, imgEncomenda2, imgEncomenda3, imgEncomenda4]);
const encomendaCurrentIndex = ref(0);

// Modal
const isModalOpen = ref(false);
const modalImageSrc = ref('');
const activeModalImages = ref([]);
const activeModalIndex = ref(0);

// Funções de navegação
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

const setCurrentSlide = (index) => {
  currentSlideIndex.value = index;
  scrollToSection('sobre');
};

// Cardápio navigation
const nextCardapioImage = () => {
  cardapioCurrentIndex.value = (cardapioCurrentIndex.value + 1) % cardapioImages.value.length;
};

const prevCardapioImage = () => {
  cardapioCurrentIndex.value = (cardapioCurrentIndex.value - 1 + cardapioImages.value.length) % cardapioImages.value.length;
};

// Encomendas navigation
const nextEncomendaImage = () => {
  encomendaCurrentIndex.value = (encomendaCurrentIndex.value + 1) % encomendaImages.value.length;
};

const prevEncomendaImage = () => {
  encomendaCurrentIndex.value = (encomendaCurrentIndex.value - 1 + encomendaImages.value.length) % encomendaImages.value.length;
};

// Modal functions
const openModal = (imageArray, startIndex) => {
  activeModalImages.value = imageArray;
  activeModalIndex.value = startIndex;
  modalImageSrc.value = activeModalImages.value[activeModalIndex.value];
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
};

const nextModalImage = () => {
  if (!isModalOpen.value) return;
  activeModalIndex.value = (activeModalIndex.value + 1) % activeModalImages.value.length;
  modalImageSrc.value = activeModalImages.value[activeModalIndex.value];
};

const prevModalImage = () => {
  if (!isModalOpen.value) return;
  activeModalIndex.value = (activeModalIndex.value - 1 + activeModalImages.value.length) % activeModalImages.value.length;
  modalImageSrc.value = activeModalImages.value[activeModalIndex.value];
};

// Scroll handler
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Keyboard handler
const handleKeydown = (e) => {
  if (!isModalOpen.value) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') nextModalImage();
  if (e.key === 'ArrowLeft') prevModalImage();
};

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('keydown', handleKeydown);

  // AOS initialization (if using AOS library)
  if (typeof window !== 'undefined' && window.AOS) {
    window.AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});
</script>

<style scoped>
@import '../styles/landing.css';
</style>
