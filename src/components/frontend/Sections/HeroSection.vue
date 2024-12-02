<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text" v-bind:class="{ 'fade-in': isVisible }">
          <div class="title-wrapper">
            <h1 class="main-title">
              <span class="typing-text">{{ typedText }}</span>
              <span class="cursor"></span>
            </h1>
          </div>
          <p class="hero-description">
            Association des étudiants et des jeunes Camerounais de Lyon
          </p>
          <div class="cta-container">
            <a href="#about" class="cta-button">
              <span>Découvrir l'association</span>
              <svg
                class="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div class="hero-image-wrapper">
          <div class="hero-image">
            <transition-group name="fade" mode="out-in">
              <img
                v-for="(image, index) in images"
                :key="image"
                :src="image"
                v-show="currentImageIndex === index"
                alt="AEJC Lyon"
                class="slider-image"
                loading="eager"
              />
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      isVisible: false,
      typedText: "",
      fullText: "Bienvenue à l'AEJC ",
      currentImageIndex: 0,
      images: ["/assets/img/bg-group2.jpg", "/assets/img/bg-group.jpg"],
      imageInterval: null,
      isTyping: false,
    };
  },
  methods: {
    async typeText() {
      while (true) {
        // Type forward
        for (let i = 0; i <= this.fullText.length; i++) {
          this.typedText = this.fullText.substring(0, i);
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Type backward
        for (let i = this.fullText.length; i >= 0; i--) {
          this.typedText = this.fullText.substring(0, i);
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    },
    startImageSlideshow() {
      this.imageInterval = setInterval(() => {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.images.length;
      }, 5000);
    },
    preloadImages() {
      this.images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          // Ensure image is loaded at full quality
          img.style.imageRendering = "high-quality";
        };
      });
    },
  },
  mounted() {
    this.preloadImages();
    requestAnimationFrame(() => {
      this.isVisible = true;
      this.typeText();
      this.startImageSlideshow();
    });
  },
  beforeUnmount() {
    if (this.imageInterval) clearInterval(this.imageInterval);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");

.hero-section {
  min-height: 100vh;
  background: linear-gradient(to right, #ffffff, #f8fafc);
  font-family: "Montserrat", sans-serif;
  padding: 2rem 0;
  display: flex;
  align-items: center;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
}

.hero-text {
  opacity: 0;
  transform: translateY(30px);
}

.hero-text.fade-in {
  animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.title-wrapper {
  margin-bottom: 2rem;
  overflow: hidden;
}

.main-title {
  font-size: 4rem;
  font-weight: 700;
  color: #1a365d;
  line-height: 1.2;
  margin: 0;
  display: flex;
  align-items: center;
}

.typing-text {
  white-space: nowrap;
}

.cursor {
  display: inline-block;
  width: 3px;
  height: 1em;
  background-color: #2f855a;
  margin-left: 4px;
  animation: blink 0.7s infinite;
}

.hero-description {
  font-size: 1.25rem;
  color: #4a5568;
  margin-bottom: 3rem;
  line-height: 1.6;
  opacity: 0.9;
}

.hero-image-wrapper {
  position: relative;
  height: 500px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

.hero-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.slider-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  image-rendering: -webkit-optimize-contrast;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(34, 197, 94, 0.2),
    0 2px 4px -1px rgba(34, 197, 94, 0.1);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 12px -1px rgba(34, 197, 94, 0.2),
    0 4px 6px -1px rgba(34, 197, 94, 0.1);
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow-icon {
  transform: translateX(4px);
}

/* Animations */
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .main-title {
    font-size: 3.5rem;
  }

  .hero-image-wrapper {
    height: 450px;
  }
}

@media (max-width: 992px) {
  .main-title {
    font-size: 3rem;
  }

  .hero-content {
    gap: 3rem;
  }

  .hero-image-wrapper {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-image-wrapper {
    order: -1;
    margin-bottom: 2rem;
    height: 350px;
  }

  .main-title {
    font-size: 2.5rem;
    justify-content: center;
  }

  .hero-description {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }

  .cta-container {
    display: flex;
    justify-content: center;
  }

  .cta-button {
    width: auto;
    min-width: 200px;
    max-width: 80%;
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .main-title {
    font-size: 2rem;
  }

  .hero-image-wrapper {
    height: 300px;
  }

  .hero-description {
    font-size: 1rem;
  }

  .cta-button {
    min-width: 180px;
    padding: 0.75rem 1.25rem;
  }
}
</style>
