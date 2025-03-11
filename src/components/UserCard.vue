<script setup>
import { computed, ref } from 'vue';
import AvatarHead from './AvatarHead.vue';
import AssetUploader from './cabinet/AssetUploader.vue';
import SkinView from './cabinet/SkinView.vue';
import RequestService from '@/services/request-service';

const props = defineProps(['user', 'owner'])
const skin = computed(() => { return props.user ? props.user.assets.skin : null });
const cape = computed(() => { return props.user ? props.user.assets.cape : null });
const dateTimeFormat = new Intl.DateTimeFormat();
var playerinfo = ref([
    {
        name: "ID",
        value: computed(() => props.user.id)
    },
    {
        name: "UUID",
        value: computed(() => props.user.uuid)
    },
    {
        name: "Gender",
        value: computed(() => props.user.gender)
    },
    {
        name: "Reputation",
        value: computed(() => props.user.reputation)
    },
    {
        name: "Registration Date",
        value: computed(() => props.user.registrationDate ? dateTimeFormat.format(Date.parse(props.user.registrationDate)) : null)
    }
]);
var balance = ref(null);
if(props.owner) {   
    RequestService.request('GET', 'cabinet/money/balance/page/0', null).then((e) => {
        balance.value = e.data;
    })
}
</script>
<template>
    <div class="card">
        <div class="card-header">
            <AvatarHead :skin="skin" class="avatar"></AvatarHead>
            <span class="username">Gravita</span>
        </div>
        <div>
            {{ user.status }}
        </div>
        <div class="card-separate">
            <div class="skinview card">
                <SkinView :skin="skin" :cape="cape"></SkinView>
                <p v-if="owner">
                    <AssetUploader type="skin"></AssetUploader>
                </p>
                <p v-if="owner">
                    <AssetUploader type="cape"></AssetUploader>
                </p>
            </div>
            <div>
                <div>
                    <h2>Player Info</h2>
                    <div v-for="p in playerinfo.filter(x => x.value)">
                        <span class="playerinfo-name">{{ p.name }}:</span> <span class="playerinfo-value">{{ p.value
                            }}</span>
                    </div>
                </div>
                <div v-if="user">
                    <h2>Groups</h2>
                    <div v-for="p in user.groups">
                        <span class="playerinfo-group">{{ p.groupName }}</span>
                    </div>
                </div>
                <div v-if="balance">
                    <h2>Balance</h2>
                    <div v-for="p in balance">
                        <span class="playerinfo-value">{{ p.balance }}</span> <span class="playerinfo-name">{{ p.currency
                            }}</span>
                    </div>
                </div>
            </div>
        </div>
        <p>
            <RouterLink to="/cabinet/security/enable2fa">Enable 2FA</RouterLink><br />
            <RouterLink to="/cabinet/security/disable2fa">Disable 2FA</RouterLink>
        </p>
    </div>
</template>
<style scoped>
.avatar {
    width: 32px;
    height: 32px;
}

.card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.card-separate {
    display: flex;
    gap: 40px;
}

.username {
    font-weight: 600;
}

.skinview {}

.playerinfo-name {
    font-weight: 600;
}
</style>