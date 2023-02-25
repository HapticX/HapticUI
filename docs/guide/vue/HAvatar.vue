<template>
    <img :class="`rounded-full h-${size} w-${size} bg-white ${cut ? 'object-cover' : ''} ${scale ? 'hover:scale-105 transition-all duration-150' : ''}`" :src="src" alt="avatar" />
</template>

<script setup lang="ts">

const { src, cut = false, scale = false, size = 36 } = defineProps<{
    src: string,
    size: number,
    scale: boolean,
    cut: boolean
}>()

</script>