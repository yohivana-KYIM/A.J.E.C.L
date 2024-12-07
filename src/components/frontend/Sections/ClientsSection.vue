<template>
  <section class="py-8 md:py-16 bg-gray-100 dark:bg-gray-800 overflow-hidden">
    <div class="container mx-auto px-4 md:px-6">
      <div class="relative partner-scroll-wrapper">
        <div class="scroll-container">
          <div
            v-for="n in 2"
            :key="n"
            class="d-flex align-items-center space-x-6 md:space-x-12 animate-scroll"
          >
            <div
              v-for="(partner, index) in partners"
              :key="`${n}-${index}`"
              class="partner-item"
            >
              <div class="partner-circle">
                <div class="partner-image-wrapper">
                  <img
                    :src="partner.logo"
                    :alt="`Logo ${index + 1}`"
                    class="partner-image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PartnersCarousel",
  data() {
    return {
      partners: [
        { logo: "/assets/img/partenaires/1.jpg" },
        { logo: "/assets/img/partenaires/2.jpg" },
        { logo: "/assets/img/partenaires/3.jpg" },
        { logo: "/assets/img/partenaires/4.jpg" },
        { logo: "/assets/img/partenaires/5.png" },
        { logo: "/assets/img/partenaires/6.jpg" },
        { logo: "/assets/img/partenaires/7.jpg" },
        { logo: "/assets/img/partenaires/8.jpg" },
        { logo: "/assets/img/partenaires/9.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.partner-scroll-wrapper {
  mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  );
  overflow: hidden;
}

.scroll-container {
  width: 200%;
  display: flex;
  overflow: hidden;
}

.partner-item {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
}

.partner-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.partner-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.partner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.partner-circle:hover .partner-image {
  transform: scale(1.1);
}

.animate-scroll {
  animation: scroll 30s linear infinite;
  animation-play-state: running;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.scroll-container:hover .animate-scroll {
  animation-play-state: running;
}

@media (min-width: 768px) {
  .partner-circle {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 768px) {
  .partner-circle {
    width: 100px;
    height: 100px;
  }

  .animate-scroll {
    animation-duration: 20s;
  }
}
</style>
