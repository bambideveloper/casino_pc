<script setup>
import { ref, onMounted } from 'vue';
import Layout from "@/components/layout/Layout.vue";
import { useAuthStore } from './store/auth';
import { storeToRefs } from 'pinia';
import { APP_URL } from './config';

const { getProfile } = useAuthStore();

const alertDialogVisible = ref(true);

const handleResize = () => {
  const width = window.visualViewport.width;
  console.log(width);
  if (width < 600) {
    window.location.href = APP_URL;
  }
}

onMounted(async () => {
  const width = window.visualViewport.width;
  console.log(width);
  if (width < 600) {
    window.location.href = APP_URL;
  }
  window.addEventListener("resize", handleResize)
  if (localStorage.getItem("token")) {
    await getProfile(localStorage.getItem("token"))
  }
})
</script>

<template>
  <Layout />
  <el-dialog v-model="alertDialogVisible" title="平台公告" width="60%" align-center>
    <img src="@/assets/images/pc_1.gif" />
  </el-dialog>
</template>

<style scoped>
::deep(.el-overlay) {
  background-color: #000000db;
}

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
