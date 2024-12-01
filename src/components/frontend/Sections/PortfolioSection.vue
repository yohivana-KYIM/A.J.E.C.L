<template>
  <!-- Portfolio Section -->
  <section id="portfolio" class="portfolio section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Portfolio</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    <!-- End Section Title -->

    <div class="container">
      <div
        class="isotope-layout"
        data-default-filter="*"
        data-layout="masonry"
        data-sort="original-order"
      >
        <ul
          class="portfolio-filters isotope-filters"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li
            data-filter="*"
            class="filter-active"
            @click="filterPortfolio('*')"
          >
            All
          </li>
          <li data-filter=".filter-app" @click="filterPortfolio('filter-app')">
            App
          </li>
          <li
            data-filter=".filter-product"
            @click="filterPortfolio('filter-product')"
          >
            Product
          </li>
          <li
            data-filter=".filter-branding"
            @click="filterPortfolio('filter-branding')"
          >
            Branding
          </li>
          <li
            data-filter=".filter-books"
            @click="filterPortfolio('filter-books')"
          >
            Books
          </li>
        </ul>
        <!-- End Portfolio Filters -->

        <div
          class="row gy-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            v-for="item in filteredPortfolio"
            :key="item.id"
            :class="[
              'col-lg-4',
              'col-md-6',
              'portfolio-item',
              'isotope-item',
              item.category,
            ]"
            class="portfolio-content h-100"
          >
            <div class="portfolio-content h-100">
              <img :src="item.image" class="img-fluid" :alt="item.title" />
              <div class="portfolio-info">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
                <a
                  :href="item.image"
                  title="Preview"
                  data-gallery="portfolio-gallery"
                  class="glightbox preview-link"
                  ><i class="bi bi-zoom-in"></i
                ></a>
                <a
                  href="portfolio-details.html"
                  title="More Details"
                  class="details-link"
                  ><i class="bi bi-link-45deg"></i
                ></a>
              </div>
            </div>
          </div>
          <!-- End Portfolio Item -->
        </div>
        <!-- End Portfolio Container -->
      </div>
    </div>
  </section>
  <!-- /Portfolio Section -->
</template>

<script>
export default {
  data() {
    return {
      portfolioItems: [
        {
          id: 1,
          title: "App 1",
          description: "Lorem ipsum, dolor sit amet consectetur",
          category: "filter-app",
          image: "/assets/img/portfolio/app-1.jpg",
        },
        {
          id: 2,
          title: "Product 1",
          description: "Lorem ipsum, dolor sit amet consectetur",
          category: "filter-product",
          image: "/assets/img/portfolio/product-1.jpg",
        },
        {
          id: 3,
          title: "Branding 1",
          description: "Lorem ipsum, dolor sit amet consectetur",
          category: "filter-branding",
          image: "/assets/img/portfolio/branding-1.jpg",
        },
        {
          id: 4,
          title: "Books 1",
          description: "Lorem ipsum, dolor sit amet consectetur",
          category: "filter-books",
          image: "/assets/img/portfolio/books-1.jpg",
        },
        {
          id: 5,
          title: "App 2",
          description: "Lorem ipsum, dolor sit amet consectetur",
          category: "filter-app",
          image: "/assets/img/portfolio/app-2.jpg",
        },
        {
          id: 6,
          title: "Product 2",
          description: "Lorem ipsum, dolor sit amet consectetur",
          category: "filter-product",
          image: "/assets/img/portfolio/product-2.jpg",
        },
        {
          id: 7,
          title: "Branding 2",
          description: "Lorem ipsum, dolor sit amet consectetur",
          category: "filter-branding",
          image: "/assets/img/portfolio/branding-2.jpg",
        },
        {
          id: 8,
          title: "Books 2",
          description: "Lorem ipsum, dolor sit amet consectetur",
          category: "filter-books",
          image: "/assets/img/portfolio/books-2.jpg",
        },
        {
          id: 9,
          title: "App 3",
          description: "Lorem ipsum, dolor sit amet consectetur",
          category: "filter-app",
          image: "/assets/img/portfolio/app-3.jpg",
        },
        {
          id: 10,
          title: "Product 3",
          description: "Lorem ipsum, dolor sit amet consectetur",
          category: "filter-product",
          image: "/assets/img/portfolio/product-3.jpg",
        },
        {
          id: 11,
          title: "Branding 3",
          description: "Lorem ipsum, dolor sit amet consectetur",
          category: "filter-branding",
          image: "/assets/img/portfolio/branding-3.jpg",
        },
        {
          id: 12,
          title: "Books 3",
          description: "Lorem ipsum, dolor sit amet consectetur",
          category: "filter-books",
          image: "/assets/img/portfolio/books-3.jpg",
        },
      ],
      filteredPortfolio: [],
    };
  },
  created() {
    this.filteredPortfolio = this.portfolioItems; // Show all items by default
  },
  methods: {
    filterPortfolio(category) {
      if (category === "*") {
        this.filteredPortfolio = this.portfolioItems;
      } else {
        this.filteredPortfolio = this.portfolioItems.filter(
          (item) => item.category === category
        );
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
