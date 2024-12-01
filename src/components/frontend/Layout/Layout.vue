<template>
  <div>
    <Header />

    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import Footer from "../Common/Footer.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
main {
  padding: 20px;
}
</style>
