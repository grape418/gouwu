<script setup>
import HomeCategory from './components/homeCatrgory.vue'
import HomeBanner from './components/homeBanner.vue'
import HomeNew from './components//homeNew.vue'
import HomeHot from './components/homeHot.vue'
import homeProduct from './components/homrProduct.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
</template>