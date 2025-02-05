<template>
  <section id="portfolio" class="portfolio section">
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2 class="text-center">Evénements</h2>
      <div class="title-underline d-flex justify-content-center">
        <div class="green-line me-2 line-animated"></div>
        <div class="red-line me-2 line-animated"></div>
        <div class="yellow-line line-animated"></div>
      </div>
      <p class="text-center px-md-5">
        Nous sommes ravis de vous inviter à nos prochains événements à Lyon.
        Rejoignez-nous pour des rencontres et des activités enrichissantes qui
        célèbrent notre communauté et notre culture.
      </p>
    </div>
    <!-- End Section Title -->

    <div class="container-fluid px-lg-5">
      <div
        class="isotope-layout"
        data-default-filter="*"
        data-layout="masonry"
        data-sort="original-order"
      >
        <!-- Responsive Filters -->
        <ul
          class="portfolio-filters isotope-filters d-flex flex-wrap justify-content-center mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li
            v-for="filter in filters"
            :key="filter.category"
            :class="[
              'mx-2 mb-2 px-3 py-2',
              activeFilter === filter.category ? 'filter-active' : '',
            ]"
            @click="filterPortfolio(filter.category)"
          >
            {{ filter.label }}
          </li>
        </ul>
        <!-- End Portfolio Filters -->

        <div
          class="row gy-4 isotope-container g-3 g-md-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            v-for="item in filteredPortfolio"
            :key="item.id"
            class="col-12 col-sm-6 col-md-4 col-lg-3 portfolio-item isotope-item"
            :class="item.category"
          >
            <div
              class="portfolio-content h-100 position-relative overflow-hidden rounded-3 shadow-sm"
            >
              <img
                :src="item.image"
                class="img-fluid w-100 h-100 object-fit-cover"
                :alt="item.title"
              />
              <div
                class="portfolio-info position-absolute bottom-0 start-0 w-100 p-3"
              >
                <h4 class="text-white mb-2">{{ item.title }}</h4>
                <p class="text-white-50 mb-3">{{ item.description }}</p>
                <div class="d-flex">
                  <a
                    :href="item.image"
                    title="Preview"
                    data-gallery="portfolio-gallery"
                    class="glightbox preview-link me-2 text-white"
                  >
                    <i class="bi bi-zoom-in fs-5"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link text-white"
                  >
                    <i class="bi bi-link-45deg fs-5"></i>
                  </a>
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
  data() {
    return {
      activeFilter: "*",
      filters: [
        { category: "*", label: "All" },
        { category: "filter-app", label: "Assemblée générale" },
        { category: "filter-product", label: "acceuil des nouveaux" },
        { category: "filter-branding", label: "Picnic" },
        { category: "filter-books", label: "Soirée culturelle" },
        { category: "filter-patinage", label: "patinage" },
        { category: "filter-ludique", label: "ludique" },
        { category: "filter-bibliotheque", label: "Bibliothèque" },

        { category: "filter-apero", label: "Apéro" },

        { category: "filter-afro", label: "Afro Conférences" },
      ],
      portfolioItems: [
        {
          id: 1,
          title: "Assemblée générale",
          description: "Réunion annuelle de notre communauté",
          category: "filter-app",
          image: "/assets/img/portfolio/app-1.jpg",
        },
        {
          id: 2,
          title: "acceuil des nouveaux",
          description: "Testez vos connaissances",
          category: "filter-product",
          image: "/assets/img/portfolio/product-1.jpg",
        },
        {
          id: 3,
          title: "Picnic",
          description: "Détente et convivialité",
          category: "filter-branding",
          image: "/assets/img/portfolio/branding-1.jpg",
        },
        {
          id: 4,
          title: "Soirée culturelle",
          description: "Découverte et partage",
          category: "filter-books",
          image: "/assets/img/portfolio/books-1.jpg",
        },
        {
          id: 5,
          title: "Assemblée générale",
          description: "Discussion des objectifs annuels",
          category: "filter-app",
          image: "/assets/img/portfolio/app-2.jpg",
        },
        {
          id: 6,
          title: "acceuil des nouveaux",
          description: "Challenge intellectuel",
          category: "filter-product",
          image: "/assets/img/portfolio/product-2.jpg",
        },
        {
          id: 7,
          title: "Picnic",
          description: "Moment de partage en plein air",
          category: "filter-branding",
          image: "/assets/img/portfolio/branding-2.jpg",
        },
        {
          id: 8,
          title: "Soirée culturelle",
          description: "Exploration artistique",
          category: "filter-books",
          image: "/assets/img/portfolio/books-2.jpg",
        },
        {
          id: 9,
          title: "Assemblée générale",
          description: "Bilan et perspectives",
          category: "filter-app",
          image: "/assets/img/portfolio/app-3.jpg",
        },
        {
          id: 10,
          title: "acceuil des nouveaux",
          description: "Compétition amicale",
          category: "filter-product",
          image: "/assets/img/portfolio/product-3.jpg",
        },
        {
          id: 11,
          title: "Picnic",
          description: "Rencontre conviviale",
          category: "filter-branding",
          image: "/assets/img/portfolio/branding-3.jpg",
        },
        {
          id: 12,
          title: "Soirée culturelle",
          description: "Échange et découverte",
          category: "filter-books",
          image: "/assets/img/portfolio/books-3.jpg",
        },
        {
          id: 13,
          title: "Journée du Patinage 1",
          description:
            "Initiation au patinage en plein air sur une piste spécialement aménagée, suivie d'une visite des sites historiques emblématiques de la ville.",
          category: "filter-patinage",
          image: "/assets/img/portfolio/patinage-1.jpg",
        },

        {
          id: 14,
          title: "Journée du Patinage 2",
          description:
            "Patinage artistique en groupe avec encadrement professionnel et découverte des traditions locales à travers des animations culturelles.",
          category: "filter-patinage",
          image: "/assets/img/portfolio/patinage-2.jpg",
        },

        {
          id: 15,
          title: "Journée du Patinage 3",
          description:
            "Atelier pratique sur l'histoire du patinage, suivi d'une démonstration en direct et d'une séance de patinage libre.",
          category: "filter-patinage",
          image: "/assets/img/portfolio/patinage-3.jpg",
        },

        {
          id: 16,

          title: "Atelier ludique 1",

          description: "Activités de groupe pour tous les âges",

          category: "filter-ludique",

          image: "/assets/img/portfolio/ludique-1.jpg",
        },

        {
          id: 17,

          title: "Atelier ludique 2",

          description: "Jeux de société et défis",

          category: "filter-ludique",

          image: "/assets/img/portfolio/ludique-2.jpg",
        },

        {
          id: 18,

          title: "Atelier ludique 3",

          description: "Compétitions amicales en plein air",

          category: "filter-ludique",

          image: "/assets/img/portfolio/ludique-3.jpg",
        },

        {
          id: 19,

          title: "Bibliothèque 1",

          description:
            "Visite de la bibliothèque avec des activités de lecture.",

          category: "filter-bibliotheque",

          image: "/assets/img/portfolio/bibliothèque-1.jpg",
        },

        {
          id: 20,

          title: "Bibliothèque 2",

          description: "Atelier de lecture pour enfants.",

          category: "filter-bibliotheque",

          image: "/assets/img/portfolio/bibliothèque-2.jpg",
        },

        {
          id: 21,

          title: "Bibliothèque 3",

          description: "Séance de dédicace avec un auteur local.",

          category: "filter-bibliotheque",

          image: "/assets/img/portfolio/bibliothèque-3.jpg",
        },

        {
          id: 22,

          title: "Bibliothèque 4",

          description: "Club de lecture mensuel.",

          category: "filter-bibliotheque",

          image: "/assets/img/portfolio/bibliothèque-4.jpg",
        },

        {
          id: 23,

          title: "Bibliothèque 5",

          description: "Exposition de livres anciens.",

          category: "filter-bibliotheque",

          image: "/assets/img/portfolio/bibliothèque-5.jpg",
        },

        {
          id: 24,

          title: "Bibliothèque 6",

          description: "Atelier d'écriture créative.",

          category: "filter-bibliotheque",

          image: "/assets/img/portfolio/bibliothèque-6.jpg",
        },

        {
          id: 25,

          title: "Bibliothèque 7",

          description: "Séance de contes pour enfants.",

          category: "filter-bibliotheque",

          image: "/assets/img/portfolio/bibliothèque-7.jpg",
        },

        {
          id: 26,

          title: "Bibliothèque 8",

          description: "Rencontre avec un poète.",

          category: "filter-bibliotheque",

          image: "/assets/img/portfolio/bibliothèque-8.jpg",
        },

        {
          id: 27,

          title: "Bibliothèque 9",

          description: "Journée portes ouvertes.",

          category: "filter-bibliotheque",

          image: "/assets/img/portfolio/bibliothèque-9.jpg",
        },

        // Éléments pour l'apéro

        {
          id: 28,

          title: "Apéro 1",

          description: "Soirée apéritif avec des spécialités locales.",

          category: "filter-apero",

          image: "/assets/img/portfolio/apero-1.jpg",
        },

        {
          id: 29,

          title: "Apéro 2",

          description: "Dégustation de vins et fromages.",

          category: "filter-apero",

          image: "/assets/img/portfolio/apero-2.jpg",
        },

        {
          id: 30,

          title: "Apéro 3",

          description: "Apéro musical avec des artistes locaux.",

          category: "filter-apero",

          image: "/assets/img/portfolio/apero-3.jpg",
        },
        {

id: 31,

title: "Afro Conférences 1",

description: "Discussion sur l'impact culturel des diasporas.",

category: "filter-afro",

image: "/assets/img/portfolio/afroconférences-1.jpg",

},

{

id: 32,

title: "Afro Conférences 2",

description: "Atelier sur les traditions africaines.",

category: "filter-afro",

image: "/assets/img/portfolio/afroconférences-2.jpg",

},

{

id: 33,

title: "Afro Conférences 3",

description: "Conférence sur l'histoire et l'identité afro.",

category: "filter-afro",

image: "/assets/img/portfolio/afroconférences-3.jpg",

},
      ],
      filteredPortfolio: [],
      searchTerm: "",
    };
  },

  created() {
    this.filteredPortfolio = this.portfolioItems;
  },

  computed: {
    filteredAndSearchedPortfolio() {
      return this.filteredPortfolio.filter(
        (item) =>
          item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },

  methods: {
    filterPortfolio(category) {
      this.activeFilter = category;
      if (category === "*") {
        this.filteredPortfolio = this.portfolioItems;
      } else {
        this.filteredPortfolio = this.portfolioItems.filter(
          (item) => item.category === category
        );
      }
    },

    searchEvents() {
      this.filteredPortfolio = this.portfolioItems.filter(
        (item) =>
          item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },

    resetSearch() {
      this.searchTerm = "";
      this.filteredPortfolio = this.portfolioItems;
    },
  },
};
</script>

<style scoped>
/* Responsive Typography */
@media (max-width: 576px) {
  .section-title h2 {
    font-size: 1.75rem;
  }
  .section-title p {
    font-size: 0.9rem;
  }
}

.portfolio-filters li {
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  background-color: #f4f4f4;
}

.portfolio-filters li:hover,
.portfolio-filters li.filter-active {
  background-color: #28a745;
  color: white;
}

.title-underline {
  margin-bottom: 1rem;
}

.green-line,
.red-line,
.yellow-line {
  height: 4px;
  width: 40px;
  transition: width 0.3s ease;
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

.portfolio-content {
  transition: transform 0.3s ease-in-out;
}

.portfolio-content:hover {
  transform: scale(1.05);
}

.portfolio-info {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  transition: all 0.3s ease;
}

.portfolio-content:hover .portfolio-info {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
}
</style>
