<script setup>
import { ref } from 'vue';
import RequestService from '@/services/request-service';
import { useRoute } from 'vue-router';
import UserCard from '@/components/UserCard.vue';

var route = useRoute();
var user = ref(null);
RequestService.request('GET', 'users/uuid/'+route.params.uuid+"?assets=true", null).then((response) => user.value = response);
</script>
<template>
    <main class="card-container">
        <user-card :user="user" :owner="false" v-if="user"></user-card>
    </main>
</template>