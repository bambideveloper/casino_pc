<script setup>
import { ref, onMounted } from 'vue';
import Layout from "@/components/layout/Layout.vue";
import { useAuthStore } from './store/auth';
import { storeToRefs } from 'pinia';

const { getProfile } = useAuthStore();

onMounted(async () => {
  if (localStorage.getItem("token")) {
    await getProfile(localStorage.getItem("token"))
  }
})
</script>

<template>
  <Layout />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
