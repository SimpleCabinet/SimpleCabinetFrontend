<script setup>
import RequestService from '@/services/request-service';
import { VMarkdownView } from 'vue3-markdown'
import { ref } from 'vue';
var props = defineProps(['item']);
var quantity = ref(1);

async function buy() {
    var response = RequestService.request('POST', 'shop/item/buy', {
        id: props.item.id,
        quantity: quantity.value
    });
}
</script>
<template>
    <div class="card item-card">
        <div class="item-image-container">
            <img class="item-image" :src="item.pictureUrl">
        </div>
        <div class="item-card-display-name item-card-element">
            {{ item.displayName }}
        </div>
        <div class="item-card-description item-card-element">
            <VMarkdownView mode="light" :content="item.description"></VMarkdownView>
        </div>
        <div class="item-card-price item-card-element">
            <span class="item-card-price-text">{{ item.price*quantity }}</span> {{ item.currency }}
        </div>
        <div class="form item-card-element">
            <input type="text" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="form">
            <button @click="buy">Buy</button>
        </div>
    </div>
</template>
<style scoped>
.item-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.item-image {
    height: 200px;
    width: 200px;
    image-rendering: pixelated;
}
.item-card-display-name {
    font-weight: 800;
    font-size: 24px;
    text-align: center;
    margin-top: 5px;
}
.item-card-description {
    font-size: 18px;
    text-align: center;
}
.item-card .item-card-element + .item-card-element {
    margin-top: 10px;
}
.item-card {
    width: 300px;
    padding: 20px;
}
.item-card-price {
    
}
.item-card-price-text {
    font-weight: 800;
}
</style>