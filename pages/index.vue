<template>
  <div class="min-h-screen">
    <PromotionalBanner />
    <NewLocationBanner v-if="$isPromotionEnabled" />
    <PizzaGrid />
  </div>
</template>

<script setup lang="ts">
const { $isPromotionEnabled } = useNuxtApp();
</script>
