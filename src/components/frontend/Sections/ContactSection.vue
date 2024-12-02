<template>
  <section id="contact" class="contact-section">
    <div class="container section-title" v-aos="fade - up">
      <h2>Contact</h2>
      <p>
        Association réunissant les étudiants camerounais habitants la ville de
        Lyon. Organisation à but non lucratif, ayant pour but principal de
        rassembler les jeunes camerounais de la ville de Lyon (France).
      </p>
    </div>

    <div class="container" v-aos="fade - up" v-aos-delay="100">
      <div class="map-container" v-aos="fade - up" v-aos-delay="200">
        <iframe
          src="https://www.google.com/maps/@45.7719321,4.7445967,10.94z?entry=ttu"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="contact-grid">
        <div class="info-column">
          <div
            v-for="(item, index) in contactInfo"
            :key="index"
            class="info-card"
            v-aos="fade - right"
            v-aos-delay="300 + index * 100"
          >
            <div class="icon-wrapper">
              <i :class="item.icon"></i>
            </div>
            <div class="info-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.value }}</p>
            </div>
          </div>
        </div>

        <form
          @submit.prevent="handleSubmit"
          class="contact-form"
          v-aos="fade - up"
          v-aos-delay="200"
        >
          <div class="form-grid">
            <div class="input-group">
              <input
                v-model="formData.name"
                type="text"
                placeholder="Your Name"
                required
                @focus="handleFocus"
                @blur="handleBlur"
              />
            </div>
            <div class="input-group">
              <input
                v-model="formData.email"
                type="email"
                placeholder="Your Email"
                required
                @focus="handleFocus"
                @blur="handleBlur"
              />
            </div>
            <div class="input-group full-width">
              <input
                v-model="formData.subject"
                type="text"
                placeholder="Subject"
                required
                @focus="handleFocus"
                @blur="handleBlur"
              />
            </div>
            <div class="input-group full-width">
              <textarea
                v-model="formData.message"
                rows="6"
                placeholder="Message"
                required
                @focus="handleFocus"
                @blur="handleBlur"
              ></textarea>
            </div>
          </div>

          <div class="form-status">
            <div v-if="loading" class="loading">Loading...</div>
            <div v-if="error" class="error">{{ error }}</div>
            <div v-if="success" class="success">Message sent successfully!</div>
          </div>

          <button type="submit" class="submit-button" :disabled="loading">
            <span>Send Message</span>
            <i class="bi bi-send"></i>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import fs from "fs"; // Ensure you have access to the fs module

const contactInfo = [
  {
    icon: "bi bi-geo-alt",
    title: "Address",
    value: "ville de Lyon (France)",
  },
  {
    icon: "bi bi-telephone",
    title: "Call Us",
    value: "+1 5589 55488 55",
  },
  {
    icon: "bi bi-envelope",
    title: "Email Us",
    value: "aejclyoncontact(at)gmail.com",
  },
];

const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const loading = ref(false);
const error = ref("");
const success = ref(false);

const handleFocus = (e) => {
  e.target.parentElement.classList.add("focused");
};

const handleBlur = (e) => {
  if (!e.target.value) {
    e.target.parentElement.classList.remove("focused");
  }
};

const handleSubmit = async () => {
  loading.value = true;
  error.value = "";
  success.value = false;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Store form data in contact.js file
    const formDataJson = JSON.stringify(formData);
    fs.writeFileSync(
      `src/reponses/contact.js`,
      `export default ${formDataJson};`
    );

    success.value = true;
    formData.name = "";
    formData.email = "";
    formData.subject = "";
    formData.message = "";
  } catch (err) {
    error.value = "Failed to send message. Please try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.contact-section {
  padding: 80px 0;
  background: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url("@/assets/bg-pattern.png");
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  color: #28a745;
  font-size: 2.5rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 20px;
}

.section-title h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: #28a745;
}

.map-container {
  margin-bottom: 40px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.map-container iframe {
  width: 100%;
  height: 400px;
  border: none;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

.info-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  background: #28a745;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper i {
  color: white;
  font-size: 1.5rem;
}

.info-content h3 {
  color: #28a745;
  margin-bottom: 5px;
  font-size: 1.2rem;
}

.contact-form {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

.input-group {
  position: relative;
}

.full-width {
  grid-column: 1 / -1;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.2);
}

.form-status {
  margin: 20px 0;
  text-align: center;
  min-height: 24px;
}

.loading,
.error,
.success {
  padding: 10px;
  border-radius: 5px;
  animation: fadeIn 0.3s ease;
}

.loading {
  background: #f8f9fa;
}

.error {
  background: #fee;
  color: #dc3545;
}

.success {
  background: #e8f5e9;
  color: #28a745;
}

.submit-button {
  width: 100%;
  padding: 15px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background: #218838;
  transform: translateY(-2px);
}

.submit-button:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

[v-aos] {
  transition-duration: 1000ms;
}
</style>
