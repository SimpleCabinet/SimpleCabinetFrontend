<template>
  <UserView
    v-if="user"
    :user="user"
    :owner="false"
    :admin="(this.$store.state.user.permissions & 1) != 0"
  />
</template>
<script>
import UserView from "@/components/UserView.vue";
export default {
  components: { UserView },
  props: ["uuid"],
  data: () => {
    return {
      user: undefined,
    };
  },
  methods: {
    fetchUser: async function (uuid) {
      var info = await this.$store.dispatch("request", {
        type: "profileByUUID",
        uuid,
      });
      var extInfo = await this.$store.dispatch("request", {
        type: "lkExtendedInfo",
        uuid,
      });
      return {
        username: info.playerProfile.username,
        uuid: info.playerProfile.uuid,
        permissions: 0,
        flags: 0,
        skin: info.playerProfile.skin ? info.playerProfile.skin.url : undefined,
        cloak: info.playerProfile.cloak
          ? info.playerProfile.cloak.url
          : undefined,
        ext: extInfo,
      };
    },
  },
  async created() {
    this.user = await this.fetchUser(this.uuid);
  },
};
</script>