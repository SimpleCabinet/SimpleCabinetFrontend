<script setup>
import RequestService from '@/services/request-service';
import { ref } from 'vue';
var code = ref('');
async function disable2Fa() {
    var response = await RequestService.request('GET', 'cabinet/security/disable2fa', {
        code: code.value
    });
}
</script>
<template>
    <input type="password" v-model="code">
    <button type="button" @click="disable2Fa">Disable 2FA</button>
</template>