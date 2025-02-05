<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="row gy-4">
        <div
          class="col-lg-6 position-relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="d-flex flex-column align-items-center mb-4">
            <h3>À propos</h3>
            <div class="title-underline d-flex justify-content-center">
              <div class="green-line me-2 line-animated"></div>
              <div class="red-line me-2 line-animated"></div>
              <div class="yellow-line line-animated"></div>
            </div>
          </div>
          <img src="/assets/img/about.jpg" class="img-fluid" alt="" />
          <button class="play-btn" @click="showVideo = true">
            <i class="bi bi-play-circle text-success"></i>
          </button>
          <div v-if="showVideo" class="video-overlay">
            <div class="video-container">
              <video controls>
                <source src="/assets/img/video/Pink.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button class="close-btn" @click="showVideo = false">
                <i class="bi bi-x-circle text-success"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          class="col-lg-6 ps-lg-4 content d-flex flex-column justify-content-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="mb-4">
            <h4
              class="text-danger who-we-are"
              @mouseover="toggleWhoWeAre = true"
              @mouseleave="toggleWhoWeAre = false"
              :class="{ 'text-success': toggleWhoWeAre }"
            >
              Qui sommes-nous ?
            </h4>
            <p
              class="text-justify hover-text"
             
            >
              L'Association des Etudiants et Jeunes Camerounais de Lyon (AEJCLyon)
              est une organisation dynamique dédiée à l'épanouissement des
              jeunes. Fondée sur des valeurs d'éducation et d'engagement social,
              elle vise à développer les compétences des étudiants tout en
              favorisant leur implication dans des projets culturels et
              communautaires enrichissants. Le conseil d'administration actuel
              de l'association est composé des membres suivants : Hervé Badjeck,
              président; Chanceline Essenmene, secrétaire générale; et Doric
              Ngouffo, responsable de la communication. Pour plus de détails sur
              la composition de l'équipe.
              <a href="#team">consultez la section Equipe.</a>
            </p>
          </div>
          <ul class="list-unstyled">
            <li class="d-flex align-items-start hover-list-item">
              <i class="bi bi-diagram-3 me-3 text-success"></i>
              <div>
                <h5 class="text-success">Cohésion & solidarité</h5>
                <p class="text-justify">
                  L'AEJCLyon renforce la solidarité entre les Camerounais de
                  Lyon en valorisant l'entraide et les échanges. Chaque membre
                  est mis en avant pour consolider le sentiment d’appartenance.
                </p>
              </div>
            </li>
            <li class="d-flex align-items-start hover-list-item">
              <i class="bi bi-fullscreen-exit me-3 text-success"></i>
              <div>
                <h5 class="text-success">Intégration et entrepreneuriat</h5>
                <p class="text-justify">
                  L'AEJCLyon accompagne les jeunes Camerounais dans leur
                  intégration sociale et professionnelle à Lyon. Elle soutient
                  aussi les projets collaboratifs avec ses partenaires pour
                  encourager l’entrepreneuriat.
                </p>
              </div>
            </li>
            <li class="d-flex align-items-start hover-list-item">
              <i class="bi bi-broadcast me-3 text-success"></i>
              <div>
                <h5 class="text-success">Activités culturelles & caritative</h5>
                <p class="text-justify">
                  L'AEJCLyon promeut la culture camerounaise à travers des
                  événements en région lyonnaise. Elle mène également des
                  actions caritatives avec ses amis et soutiens.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      showVideo: false,
      toggleWhoWeAre: false,
      isHovered: false,
    };
  },
};
</script>

<style scoped>
.title-underline {
  margin-bottom: 0.5rem;
}

.green-line,
.red-line,
.yellow-line {
  height: 4px;
  width: 40px;
  background-color: #28a745;
}

.red-line {
  background-color: #dc3545;
}

.yellow-line {
  background-color: #ffc107;
}

/* Animation for the lines */
.line-animated {
  transition: transform 0.3s ease, width 0.3s ease;
}

.line-animated:hover {
  transform: scaleX(1.2);
  width: 50px;
}

/* Hover effects for text */
.hover-text {
  transition: all 0.3s ease;
  text-align: justify;
}

.text-hovered {
  color: #28a745;
  transform: scale(1.02);
  text-shadow: 0 0 10px rgba(40, 167, 69, 0.2);
}

/* Hover effects for list items */
.hover-list-item {
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 5px;
}

.hover-list-item:hover {
  background-color: rgba(40, 167, 69, 0.05);
  transform: translateX(10px);
}

.hover-list-item:hover h5 {
  color: #28a745;
}

.hover-list-item:hover i {
  color: #28a745;
}

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-btn i {
  font-size: 32px;
  color: #dc3545;
}

.play-btn:hover {
  background-color: #fff;
}

.video-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.video-container {
  position: relative;
  width: 80%;
  max-width: 800px;
}

.video-container video {
  width: 100%;
  height: auto;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: -40px;
  width: 40px;
  height: 40px;
  background-color: #dc3545;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn i {
  font-size: 24px;
  color: #fff;
}

.close-btn:hover {
  background-color: #c82333;
}

.who-we-are {
  cursor: pointer;
  transition: color 0.3s ease;
}

@media (max-width: 767px) {
  .col-lg-6 {
    flex: 0 0 auto;
    width: 100%;
  }

  .play-btn {
    width: 60px;
    height: 60px;
  }

  .play-btn i {
    font-size: 24px;
  }

  .video-container {
    width: 90%;
  }

  .close-btn {
    top: -30px;
    right: -30px;
    width: 30px;
    height: 30px;
  }

  .close-btn i {
    font-size: 18px;
  }

  .text-hovered {
    transform: scale(1.01);
  }
}
</style>
