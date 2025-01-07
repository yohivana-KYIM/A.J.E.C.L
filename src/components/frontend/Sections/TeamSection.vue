<template>
  <section id="team" class="team section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Équipes</h2>
      <div class="title-underline d-flex justify-content-center">
        <div class="green-line me-2"></div>
        <div class="red-line me-2"></div>
        <div class="yellow-line"></div>
      </div>
      <p>Quelques membres de l'équipe de l'A.E.J.C</p>
    </div>

    <div class="container team-container">
      <swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 30 },
          768: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 4, spaceBetween: 50 },
        }"
        :pagination="{
          clickable: true,
          el: '.swiper-pagination',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          bulletClass: 'swiper-pagination-bullet',
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :loop="true"
        class="team-swiper"
      >
        <swiper-slide v-for="member in teamMembers" :key="member.name">
          <div class="member" data-aos="fade-up">
            <div class="member-image-wrapper">
              <img
                :src="member.image"
                class="member-image"
                :alt="member.name"
                loading="lazy"
              />
              <div class="member-overlay">
                <div class="member-info">
                  <h4>{{ member.name }}</h4>
                  <span>{{ member.position }}</span>
                </div>
                <div class="member-social">
                  <a href="#" class="social-icon"
                    ><i class="bi bi-twitter-x"></i
                  ></a>
                  <a href="#" class="social-icon"
                    ><i class="bi bi-facebook"></i
                  ></a>
                  <a href="#" class="social-icon"
                    ><i class="bi bi-instagram"></i
                  ></a>
                  <a href="#" class="social-icon"
                    ><i class="bi bi-linkedin"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-pagination"></div>
        <div class="swiper-button-next custom-navigation"></div>
        <div class="swiper-button-prev custom-navigation"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  name: "TeamSection",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const SwiperAutoplay = Autoplay;
    const SwiperPagination = Pagination;
    const SwiperNavigation = Navigation;

    const teamMembers = ref([
      {
        name: "Hervé BADJECK",
        position: "Président de l'association",
        image: "/assets/img/team/team-1.jpg",
      },
      {
        name: "Chanceline ESSEMNENE",
        position: "Secrétaire générale",
        image: "/assets/img/team/team-2.jpg",
      },
      {
        name: "Roméo kamwa kamdem",
        position: "Chargé des relations extérieures",
        image: "/assets/img/team/team-3.jpg",
      },
      {
        name: "Stediane mekouo",
        position:
          "chargé des formations sur l'intégration socioprofessionnelle des étudiants",
        image: "/assets/img/team/team-7.jpg",
      },
      {
        name: "Doric NGOUFFO",
        position: "Responsable communication",
        image: "/assets/img/team/team-4.jpg",
      },
      {
        name: "Larissa Ngantchou Njiondo",
        position:
          " responsable marketing, prospection, recherche de financement",
        image: "/assets/img/team/team-5.jpg",
      },
      {
        name: "Moses BOYOM",
        position: "Chargé des activités ludiques",
        image: "/assets/img/team/team-6.jpg",
      },
      {
        name: "Arthur NEMANGOU",
        position: "Chargé de projets associatifs",
        image: "/assets/img/team/team-8.jpg",
      },
    ]);

    return {
      SwiperAutoplay,
      SwiperPagination,
      SwiperNavigation,
      teamMembers,
    };
  },
};
</script>

<style scoped>
.team-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
}

.section-title h2 {
  color: #000;
  margin-bottom: 20px;
  text-align: center;
}

.title-underline {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.green-line,
.red-line,
.yellow-line {
  height: 4px;
  width: 40px;
  margin: 0 5px;
}

.green-line {
  background-color: #28a745;
}
.red-line {
  background-color: #dc3545;
}
.yellow-line {
  background-color: #ffc107;
}

.member {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: #f4f4f4;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.member-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 300px;
  width: 100%;
}

.member-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.member-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align text to the top */
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  padding: 10px; /* Add padding for text */
}

.member-info {
  text-align: center;
  color: white; /* Text color */
  margin-bottom: 10px; /* Spacing between text and icons */
}

.member-social {
  display: flex;
  gap: 20px;
}

.member:hover .member-overlay {
  opacity: 1;
}

.social-icon {
  color: white;
  font-size: 1.5em;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
  color: #f4f4f4;
}

.team-swiper {
  padding-bottom: 50px;
}

.swiper-pagination-bullet {
  background-color: #28a745 !important;
  opacity: 0.5;
  width: 10px;
  height: 10px;
}

.swiper-pagination-bullet-active {
  background-color: #28a745 !important;
  opacity: 1;
}

.custom-navigation {
  color: #28a745 !important;
}

.custom-navigation::after {
  font-size: 30px;
}

@media (max-width: 1024px) {
  .member-image-wrapper {
    height: 250px;
  }
}

@media (max-width: 768px) {
  .member-image-wrapper {
    height: 200px;
  }

  .member-social {
    gap: 15px;
  }

  .social-icon {
    font-size: 1.2em;
  }
}
</style>
