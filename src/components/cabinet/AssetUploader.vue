<script setup>
import RequestService from '@/services/request-service';
import { ref } from 'vue';
var props = defineProps(['type'])
var file = ref(null);
var toggleSlim = ref(false);

async function upload() {
    const fd = new FormData();
    if(props.type == 'skin') {
        fd.append("options", new Blob([JSON.stringify({
          "modelSlim": toggleSlim.value
        })], {
          type: "application/json"
        }))
    }
    fd.append("file", file.value.files[0])
    var response = await RequestService.request('POST', 'cabinet/upload/'+props.type, fd, {
        "Content-Type": 'multipart/form-data'
    })
}
</script>
<template>
    <input type="checkbox" v-model="toggleSlim" v-if="type == 'skin'">
    <input ref="file" type="file">
    <button type="button" @click="upload">Upload</button>
</template>