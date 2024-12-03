<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="testimonials section dark-background">
    <img src="/assets/img/testimonials-bg.jpg" class="testimonials-bg" alt="" />
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="slider-container">
        <div
          class="slider"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="slide"
          >
            <div class="testimonial-item">
              <div class="testimonial-img-wrapper">
                <div class="testimonial-img-border">
                  <img :src="testimonial.img" class="testimonial-img" alt="" />
                </div>
              </div>
              <h3 class="testimonial-name">{{ testimonial.name }}</h3>
              <h4 class="testimonial-role">{{ testimonial.role }}</h4>
              <div class="stars">
                <i
                  v-for="n in 5"
                  :key="n"
                  class="bi bi-star-fill star-icon"
                ></i>
              </div>
              <p class="testimonial-quote">
                <i class="bi bi-quote quote-icon-left"></i>
                <span>{{ testimonial.comment }}</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Testimonials Section -->
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "TestimonialsSection",
  setup() {
    const testimonials = ref([
      {
        img: "/assets/img/testimonials/testimonials-1.jpg",
        name: "Fabrice Nkoa Badjeck",
        role: " un professionnel chevronné avec plus de 10 ans d'expérience dans les domaines de la gestion de projets, du développement commercial, et de la supervision technique.",
        comment:
          "J'ai rejoint l'association récemment et cela a été une expérience enrichissante. J'ai rencontré des personnes extraordinaires qui m'ont aidé à m'intégrer rapidement.",
      },
      {
        img: "/assets/img/testimonials/testimonials-2.jpg",
        name: "Larissa Ngantchou Njiondo",
        role: " responsable marketing, prospection, recherche de financement",
        comment:
          "L'organisation est vraiment bien structurée et accueillante. Elle offre une excellente plateforme pour collaborer et échanger des idées.",
      },
      {
        img: "/assets/img/testimonials/testimonials-3.jpg",
        name: "Stediane mekouo",
        role: " chargé des formations sur l'intégration socioprofessionnelle des étudiants",
        comment:
          "Grâce à cette association, j'ai pu élargir mon réseau professionnel et découvrir des opportunités intéressantes.",
      },
      {
        img: "/assets/img/testimonials/testimonials-4.jpg",
        name: "Doric Ngouffo",
        role: "Responsable de la communication",
        comment:
          "L'ambiance est chaleureuse et les activités sont parfaitement organisées. Cela a été une expérience inoubliable.",
      },
      {
        img: "/assets/img/testimonials/testimonials-5.jpg",
        name: "Moses Boyom",
        role: "chargé des activités ludiques et sportives",
        comment:
          "L'association m'a permis de rencontrer des partenaires clés pour mes projets. Je recommande vivement de s'y engager.",
      },
    ]);

    const currentSlide = ref(0);
    let intervalId = null;

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % testimonials.value.length;
    };

    onMounted(() => {
      intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    });

    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });

    return {
      testimonials,
      currentSlide,
    };
  },
};
</script>

<style scoped>
.slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slider {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 100%;
  width: 100%;
}

.testimonial-item {
  text-align: center;
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.testimonial-item:hover {
  transform: scale(1.02);
}

.testimonial-img-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.testimonial-img-border {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4a4a4a, #2c2c2c);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.testimonial-img-border::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(-45deg);
}

.testimonial-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #ffffff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.testimonial-name {
  font-size: 1.8em;
  color: #ffffff;
  margin: 15px 0 5px;
  font-weight: 600;
}

.testimonial-role {
  font-size: 1em;
  color: #aaaaaa;
  margin-bottom: 15px;
}

.stars {
  margin: 15px 0;
  display: flex;
  justify-content: center;
}

.star-icon {
  color: #ffd700;
  margin: 0 3px;
  font-size: 1.2em;
}

.testimonial-quote {
  font-size: 1.1em;
  line-height: 1.6;
  color: #e0e0e0;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.quote-icon-left,
.quote-icon-right {
  font-size: 1.5em;
  color: #555;
  position: relative;
  top: 5px;
  margin: 0 5px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.testimonial-item {
  animation: fadeIn 1s ease-out forwards;
}
</style>
