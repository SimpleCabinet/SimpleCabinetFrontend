<script setup>
import AvatarHead from './AvatarHead.vue';
import AssetUploader from './cabinet/AssetUploader.vue';
import SkinView from './cabinet/SkinView.vue';

const props = defineProps(['user', 'owner'])
</script>
<template>
    <div class="card">
    <p>
        <AvatarHead :skin="props.user ? props.user.assets.skin : null" class="avatar"></AvatarHead>
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
        <RouterLink to="/cabinet/security/enable2fa">Enable 2FA</RouterLink><br/>
        <RouterLink to="/cabinet/security/disable2fa">Disable 2FA</RouterLink>
    </p></div>
</template>
<style scoped>
.avatar {
    width: 32px;
    height: 32px;
}
</style>