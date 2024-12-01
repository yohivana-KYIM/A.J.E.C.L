<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import Layout from "./components/frontend/Layout/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style></style>
