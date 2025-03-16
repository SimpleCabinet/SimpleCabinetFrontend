<script setup>
import AssetService from '@/services/asset-service';
import Modal from '../ui/Modal.vue';
import { computed, ref } from 'vue'

const showModal = ref(false)
const file = ref(null);
const toggleSlim = ref(false);
const skin = ref(null);
async function upload() {
  await AssetService.uploadCape(file.value.files[0]);
  showModal = false;
}
</script>
<template>
  <button @click="showModal = true">Upload Cape</button>
  <modal text="Upload" :show="showModal" @apply="upload" @close="showModal = false">
    <template #header>
      <h3>Upload Cape</h3>
    </template>
    <template #body>
      <div class="form">
        <input ref="file" type="file">
      </div>
    </template>
  </modal>
</template>