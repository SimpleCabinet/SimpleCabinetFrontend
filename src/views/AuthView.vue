<script setup>
import AuthService from '@/services/auth-service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
var login = ref("");
var password = ref("");
var totpCode = ref("");
var router = useRouter();
async function authorize(e) {
  var e = await AuthService.authorize(login.value, password.value, totpCode.value);
  router.push('/cabinet');
}
</script>

<template>
  <main class="card-container">
    <div class="card auth-card">
      <h2>Authorize</h2>
      <div class="form">
        <input type="text" v-model="login" placeholder="Login"></input>
      </div>
      <div class="form">
        <input type="password" v-model="password" placeholder="Password"></input>
      </div>
      <div class="form">
        <input type="password" v-model="totpCode" placeholder="Totp Code"></input>
      </div>
      <div class="form">
        <button type="sumbit" @click="authorize">Authorize</button>
      </div>
    </div>
  </main>
</template>
<style scoped>
.auth-card {
  min-width: 400px;
}
</style>