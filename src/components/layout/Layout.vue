<script setup>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>

<template>
  <div class="bg-[#1c1c1c]">
    <Header v-if="!pathname.includes('imsports')"></Header>
    <router-view></router-view>
    <Footer v-if="!pathname.includes('imsports')"></Footer>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      pathname: window.location.pathname,
    };
  },
};
</script>
<style scoped></style>
