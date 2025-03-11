<script setup>
import AssetUploader from './cabinet/AssetUploader.vue';
import SkinView from './cabinet/SkinView.vue';

const props = defineProps(['user', 'owner'])
</script>
<template>
    <p>
        {{ user.username }} ( {{ user.uuid }} )
    </p>
    <p>
        <SkinView :skin="props.user ? props.user.assets.skin : null" :cape="props.user ? props.user.assets.cape : null"></SkinView>
    </p>
    <p v-if="owner">
        Upload Skin <AssetUploader type="skin"></AssetUploader>
    </p>
    <p v-if="owner">
        Upload Cape <AssetUploader type="cape"></AssetUploader>
    </p>
    <p>
        <RouterLink to="/security/enable2fa">Enable 2FA</RouterLink><br/>
        <RouterLink to="/security/disable2fa">Disable 2FA</RouterLink>
    </p>
</template>