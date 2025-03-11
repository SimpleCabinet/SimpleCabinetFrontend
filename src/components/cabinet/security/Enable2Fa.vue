<script setup>
import AuthService from '@/services/auth-service';
import RequestService from '@/services/request-service';
import QrcodeVue from 'qrcode.vue';
import { ref } from 'vue';
var url = ref('');
var secret = ref('');
var code = ref('');
async function run() {
    await AuthService.wait();
    var response = await RequestService.request('POST', 'cabinet/security/prepare2fa', null);
    url.value = response.uri;
    secret.value = response.secret;
}
run();

async function enable2Fa() {
    var response = await RequestService.request('GET', 'cabinet/security/enable2fa', {
        secret: secret.value,
        code: code.value
    });
}
</script>
<template>
    <p>
        Use OAuth app or enter this code {{ secret }}
    </p>
    <qrcode-vue :value="url" size="300"></qrcode-vue>
    <input type="password" v-model="code">
    <button type="button" @click="enable2Fa">Enable 2FA</button>
</template>