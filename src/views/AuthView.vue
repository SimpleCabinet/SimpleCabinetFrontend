<script setup>
import AuthService from '@/services/auth-service';
import { ref } from 'vue';
var login = ref("");
var password = ref("");
var totpCode = ref("");
async function authorize(e) {
  var e = await AuthService.authorize(login.value, password.value, totpCode.value);
}
</script>

<template>
  <main>
    <form>
      <input type="text" v-model="login"></input>
      <input type="password" v-model="password"></input>
      <input type="password" v-model="totpCode"></input>
      <button type="button" @click="authorize">Authorize</button>
    </form>
  </main>
</template>
