<script setup>
import AuthService from '@/services/auth-service';
import { ref } from 'vue';
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
var login = ref("");
var email = ref("");
var password = ref("");
var confirmPassword = ref("");
var captchaToken = ref(null);
var siteKey = ref(import.meta.env.VITE_HCAPTCHA_SITEKEY);
async function updateToken(token, eKey) {
  captchaToken.value = token;
}
async function register() {
  var e = await AuthService.register(login.value, password.value, email.value, captchaToken.value);
}
</script>

<template>
  <main>
    <form>
      <input type="text" v-model="login"></input>
      <input type="text" v-model="email"></input>
      <input type="password" v-model="password"></input>
      <input type="password" v-model="confirmPassword"></input>
      <vue-hcaptcha :sitekey="siteKey" @verify="updateToken"></vue-hcaptcha>
      <button type="button" @click="register">Register</button>
    </form>
  </main>
</template>
