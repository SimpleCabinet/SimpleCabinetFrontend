<script setup>
import { computed, onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import AuthService from './services/auth-service';
import { useAuthStore } from './stores/auth';
var authAvailable = computed(() => store.user == null);
var logoutAvailable = computed(() => store.user != null);
var store = useAuthStore();
onMounted(() => {
  AuthService.wait().then(() => {
    
  });
});
var title = ref(import.meta.env.VITE_PROJECT_NAME)
</script>

<template>
  <header class="bg-card">
    <div class="fx-container">
    <div class="title">
      {{ title }}
    </div>
    <div class="content">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/users">Users</RouterLink>
      <RouterLink to="/cabinet" v-if="logoutAvailable">Cabinet</RouterLink>
      <RouterLink to="/auth" v-if="authAvailable">Auth</RouterLink>
      <RouterLink to="/register" v-if="authAvailable">Register</RouterLink>
      <RouterLink to="/debug/logout" v-if="logoutAvailable">Log Out</RouterLink>
    </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {

}
.fx-container {
  display: flow-root;
  padding: 20px;
  border-radius: 0px 0px 10px 10px;
}
.content {
  float: right;
}
.title {
  float: left;
}
.content > a {
  color: inherit;
  text-decoration: none;
  transition: 0.3s;
}
.content a:hover {
  color: var(--colors-text-action);
}
.content a + a {
  padding-left: 10px;
}
</style>
