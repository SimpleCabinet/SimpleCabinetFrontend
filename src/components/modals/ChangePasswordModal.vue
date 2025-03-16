<script setup>
import RequestService from '@/services/request-service';
import Modal from '../ui/Modal.vue';
import { computed, ref, watch } from 'vue'

const showModal = ref(false)
const file = ref(null);
var newPassword = ref('');
var confirmPassword = ref('');
var oldPassword = ref('');
async function changePassword() {
  var response = await RequestService.request('GET', 'cabinet/security/disable2fa', {
        code: code.value
  });
  showModal = false;
}
</script>
<template>
  <button @click="showModal = true">Change Password</button>
  <modal text="Change Password" :show="showModal" @apply="changePassword" @close="showModal = false">
    <template #header>
      <h3>Change Password</h3>
    </template>
    <template #body>
      <div class="form">
        <input type="text" v-model="oldPassword" placeholder="Old Password">
      </div>
      <div class="form">
        <input type="text" v-model="newPassword" placeholder="New Password">
      </div>
      <div class="form">
        <input type="text" v-model="confirmPassword" placeholder="Confirm Password">
      </div>
    </template>
  </modal>
</template>