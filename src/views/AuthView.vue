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
  router.push('/');
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
