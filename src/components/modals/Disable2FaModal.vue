<script setup>
import RequestService from '@/services/request-service';
import Modal from '../ui/Modal.vue';
import { computed, ref, watch } from 'vue'

const showModal = ref(false)
const file = ref(null);
var code = ref('');
async function disable2Fa() {
    var response = await RequestService.request('GET', 'cabinet/security/disable2fa', {
        code: code.value
    });
}
async function disable() {
  await disable2Fa();
  showModal.value = false;
}
</script>
<template>
  <button @click="showModal = true">Disable 2FA</button>
  <modal text="Disable" :show="showModal" @apply="disable" @close="showModal = false">
    <template #header>
      <h3>Disable 2FA</h3>
    </template>
    <template #body>
      <div class="form">
        <input type="text" v-model="code" placeholder="TOTP code">
      </div>
    </template>
  </modal>
</template>