<!-- ColorZones.vue -->
<template>
  <div class="lanes-container">
    <div class="lane green"></div>
    <div class="lane red">
      <span class="star">★</span>
    </div>
    <div class="lane yellow"></div>
  </div>
</template>

<script setup>
// Using Vue 3 composition API
</script>

<style scoped>
.lanes-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  width: 100%;
  height: 10px; /* Réduit pour avoir des rectangles plus fins */
}

.lane {
  height: 100%;
  position: relative;
}

.green {
  background-color: #007a5e; /* Vert camerounais */
}

.red {
  background-color: #ce1126; /* Rouge camerounais */
}

.yellow {
  background-color: #fcd116; /* Jaune camerounais */
}

.star {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fcd116; /* Étoile en jaune camerounais */
  font-size: 8px; /* Taille réduite pour l'étoile */
}
</style>
