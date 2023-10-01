<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import Loader from "~/components/Loader.vue";

const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});

// <Loader v-if="loading" />
</script>
