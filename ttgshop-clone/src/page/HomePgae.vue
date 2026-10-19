<script setup>
import SectionHero from "./SectionHero.vue";
import SectionRecommendation from "./SectionRecommendation.vue";
import SectionCollection from "./SectionCollection.vue";
import SectionCategory from "./SectionCategory.vue";
import SectionGlobalSupport from "./SectionGlobalSupport.vue";
</script>

<template>
  <div class="container">
    <SectionHero></SectionHero>
    <SectionRecommendation></SectionRecommendation>
    <SectionCollection></SectionCollection>
    <SectionCategory></SectionCategory>
    <SectionGlobalSupport></SectionGlobalSupport>
  </div>
</template>

<style scoped>
.container{
    margin: 0 auto;
}
</style>
