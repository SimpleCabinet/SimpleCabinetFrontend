<script setup>
import AuthService from '@/services/auth-service';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

var router = useRouter();
var store = useAuthStore();
async function run() {
    var authData = await AuthService.refreshToken();
    store.update(null, authData);
    var userData = await AuthService.fetchUserInfo();
    store.update(userData, authData);
    router.push('/');
}
run();
</script>
<template>
    Выполняется refresh
</template>