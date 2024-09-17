<template>
  <div>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <RouterView :key="$route.fullPath"></RouterView>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from './components/LayoutFixed.vue';
import { useCatrgoryStore } from '@/stores/category';
import { onMounted } from 'vue';

const categoryStore = useCatrgoryStore()
onMounted(() => {
  categoryStore.getHeaderDate()
})
</script>

<style lang="scss" scoped>

</style>