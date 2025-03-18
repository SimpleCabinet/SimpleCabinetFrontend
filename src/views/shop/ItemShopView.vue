<script setup>
import ItemShopCard from "@/components/shop/ItemShopCard.vue";
import RequestService from "@/services/request-service";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import { ref } from "vue";

var result = ref(null);
var items = ref([]);
var pageId = ref(0);
async function loadMore(needCheck) {
    if (needCheck && pageId.value >= result.value.totalPages) {
        return;
    }
    result.value = await RequestService.request('GET', 'shop/item/page/' + pageId.value);
    for (var e of result.value.data) {
        items.value.push(e);
    }
    pageId.value = pageId.value + 1;
}
loadMore(false);
</script>
<template>
    <main>
        <div class="item-shop-cards">
            <ItemShopCard :item="item" v-for="item in items">

            </ItemShopCard>
            <InfiniteLoading v-if="result && pageId < result.totalPages" @infinite="loadMore(true)"></InfiniteLoading>
        </div>
    </main>
</template>
<style scoped>

.item-shop-cards {
    display: flex;
    gap: 20px;
}
</style>