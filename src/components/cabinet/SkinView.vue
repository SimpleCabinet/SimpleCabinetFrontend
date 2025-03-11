<script setup>
import { watch, ref, onMounted } from 'vue';
import { SkinViewer } from 'skinview3d';

var props = defineProps(['skin', 'cape']);
var element = ref(null);
onMounted(() => {
    let skinViewer = new SkinViewer({
		canvas: element.value,
		width: 300,
		height: 400,
	});
    if(props.skin) {
        skinViewer.loadSkin(props.skin.url);
        watch(props.skin, (newValue) => skinViewer.loadSkin(newValue.url));
    }
    if(props.cape) {
        skinViewer.loadCape(props.cape.url);
        watch(props.cape, (newValue) => skinViewer.loadCape(newValue.url));
    }
})

</script>
<template>
    <canvas ref="element"></canvas>
</template>