<template>
  <!-- Testimonials Section -->
  <section id="testimonials" class="testimonials section dark-background">
    <img src="/assets/img/testimonials-bg.jpg" class="testimonials-bg" alt="" />

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="swiper" ref="swiper">
        <div class="swiper-wrapper">
          <!-- Testimonial Items -->
          <div
            class="swiper-slide"
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
            <div class="testimonial-item">
              <img :src="testimonial.img" class="testimonial-img" alt="" />
              <h3>{{ testimonial.name }}</h3>
              <h4>{{ testimonial.role }}</h4>
              <div class="stars">
                <i v-for="n in 5" :key="n" class="bi bi-star-fill"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                <span>{{ testimonial.comment }}</span>
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
          <!-- End testimonial item -->
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
  <!-- /Testimonials Section -->
</template>

<script>
import { onMounted, ref } from "vue";
import Swiper from "swiper";

export default {
  name: "TestimonialsSection",
  setup() {
    const swiper = ref(null);
    const testimonials = ref([
      {
        img: "/assets/img/testimonials/testimonials-1.jpg",
        name: "Saul Goodman",
        role: "CEO & Founder",
        comment:
          "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
      },
      {
        img: "/assets/img/testimonials/testimonials-2.jpg",
        name: "Sara Wilsson",
        role: "Designer",
        comment:
          "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum.",
      },
      {
        img: "/assets/img/testimonials/testimonials-3.jpg",
        name: "Jena Karlis",
        role: "Store Owner",
        comment:
          "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla.",
      },
      {
        img: "/assets/img/testimonials/testimonials-4.jpg",
        name: "Matt Brandon",
        role: "Freelancer",
        comment:
          "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim.",
      },
      {
        img: "/assets/img/testimonials/testimonials-5.jpg",
        name: "John Larson",
        role: "Entrepreneur",
        comment:
          "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor.",
      },
    ]);

    onMounted(() => {
      new Swiper(swiper.value, {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
    });

    return {
      swiper,
      testimonials,
    };
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
