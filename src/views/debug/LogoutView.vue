<script setup>
import AuthService from '@/services/auth-service';
import { useRouter } from 'vue-router';

var router = useRouter();
async function run() {
    await AuthService.logout();
    router.push('/');
}
run();
</script>
<template>
    <main>
        Выполняется logout
    </main>
</template>