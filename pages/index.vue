<template>
  <div class="min-h-screen">
    <PromotionalBanner />
    <NewLocationBanner v-if="$isPromotionEnabled" />
    <PizzaGrid />
  </div>
</template>

<script setup lang="ts">
console.log("index page");
const { $isPromotionEnabled } = useNuxtApp();
</script>
