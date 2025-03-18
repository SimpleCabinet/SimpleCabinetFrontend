<script setup>
import RequestService from '@/services/request-service';
import { VMarkdownView } from 'vue3-markdown'
import { ref } from 'vue';
var props = defineProps(['item']);
var quantity = ref(1);

async function buy() {
    var response = RequestService.request('POST', 'shop/group/buy', {
        id: props.item.id,
        quantity: quantity.value
    });
}
</script>
<template>
    <div class="card group-card">
        <div class="group-image-container">
            <img class="group-image" :src="item.pictureUrl">
        </div>
        <div class="group-card-display-name group-card-element">
            {{ item.displayName }}
        </div>
        <div class="group-card-description group-card-element">
            <VMarkdownView mode="light" :content="item.description"></VMarkdownView>
        </div>
        <div class="group-card-price group-card-element">
            <span class="group-card-price-text">{{ item.price*quantity }}</span> {{ item.currency }}
        </div>
        <div class="form group-card-element">
            <input type="text" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="form">
            <button @click="buy">Buy</button>
        </div>
    </div>
</template>
<style scoped>
.group-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.group-image {
    height: 400px;
    width: 300px;
    image-rendering: pixelated;
}
.group-card-display-name {
    font-weight: 800;
    font-size: 32px;
    text-align: center;
    margin-top: 5px;
}
.group-card-description {
    font-size: 18px;
    text-align: center;
}
.group-card .group-card-element + .group-card-element {
    margin-top: 20px;
}
.group-card {
    width: 400px;
}
.group-card-price {

}
.group-card-price-text {
    font-weight: 800;
}
</style>