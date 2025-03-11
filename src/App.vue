<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import AuthService from './services/auth-service';
onMounted(() => {
  AuthService.wait();
});

</script>

<template>
  <header>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/cabinet">Cabinet</RouterLink>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
